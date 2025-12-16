import { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  type: 'item' | 'parent' | 'section';
  children?: MenuItem[];
  workflow?: string;
}

const menuData: MenuItem[] = [
  {
    id: 'explore',
    label: 'Explore',
    type: 'section',
    children: [
      { id: 'home', label: 'Home', type: 'item', workflow: '__HOME__' },
    ]
  },
  {
    id: 'workflows',
    label: 'Workflows',
    type: 'section',
    children: [
      {
        id: 'coreignite-setup',
        label: 'CoreIgnite Setup',
        type: 'parent',
        children: [
          { id: 'account-creation', label: 'Account Creation', type: 'item', workflow: 'CoreIgnite User Account Creation' },
          { id: 'bank-setup', label: 'Bank Setup', type: 'item', workflow: 'New Core Banking Space Activation' },
        ]
      },
      {
        id: 'coreflow',
        label: 'CoreFlow',
        type: 'parent',
        children: [
          { id: 'coreflow-mint', label: 'Digital Assets', type: 'item', workflow: 'Digital Assets' },
          { id: 'coreflow-stripe', label: 'Stripe Payment', type: 'item', workflow: 'Stripe Payment' },
        ]
      },
    ]
  }
];

export interface SidebarProps {
  currentWorkflow: string | null;
  onWorkflowChange: (workflow: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({
  currentWorkflow,
  onWorkflowChange,
  isOpen,
  onClose,
}: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.workflow) {
      onWorkflowChange(item.workflow);
      if (onClose) {
        onClose();
      }
    }
  };

  const renderMenuItem = (item: MenuItem, depth: number = 0) => {
    if (item.type === 'section') {
      return (
        <div key={item.id} className="mb-4">
          <div className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] text-[#161616] mb-3">
            {item.label}
          </div>
          {item.children && (
            <div className="space-y-3">
              {item.children.map(child => renderMenuItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }
    
    if (item.type === 'parent') {
      const isExpanded = expandedCategories.has(item.id);
      return (
        <div key={item.id} className="mb-3">
          <div
            className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[14px] text-[#161616] cursor-pointer hover:bg-[#f4f4f4] transition-all flex items-center gap-1 py-1 px-2 -mx-2 rounded"
            onClick={() => toggleCategory(item.id)}
          >
            <ChevronRight 
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            />
            {item.label}
          </div>
          {isExpanded && item.children && (
            <div className="ml-5 mt-2 space-y-2">
              {item.children.map(child => renderMenuItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }
    
    // Regular item
    const isActive = item.workflow === '__HOME__' 
      ? currentWorkflow === null 
      : item.workflow === currentWorkflow;
    return (
      <div
        key={item.id}
        className={`font-['IBM_Plex_Sans:Regular',sans-serif] text-[12px] py-1 px-2 -mx-2 rounded transition-all ${
          isActive 
            ? 'text-[#7a23d9] font-["IBM_Plex_Sans:SemiBold",sans-serif] bg-[#f0e6ff]' 
            : 'text-[#161616]'
        } ${
          item.workflow 
            ? 'cursor-pointer hover:bg-[#f4f4f4]' 
            : 'text-[#8d8d8d] cursor-default'
        }`}
        onClick={() => handleItemClick(item)}
      >
        {item.label}
      </div>
    );
  };

  return (
    <>
      {/* Overlay - only visible when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 top-[60px]"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-[60px] bottom-0 w-[320px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto p-6">
          {menuData.map(item => renderMenuItem(item))}
        </div>
      </div>
    </>
  );
}