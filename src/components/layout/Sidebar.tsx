import { useState, useEffect, useMemo } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { WorkflowMetadata } from '../../types';

interface MenuItem {
  id: string;
  label: string;
  type: 'item' | 'parent' | 'section';
  children?: MenuItem[];
  workflow?: string;
  color?: string;
  externalUrl?: string; // Add support for external URLs
}

export interface SidebarProps {
  currentWorkflow: string | null;
  onWorkflowChange: (workflow: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  workflows: WorkflowMetadata[];
}

export function Sidebar({
  currentWorkflow,
  onWorkflowChange,
  isOpen,
  onClose,
  workflows,
}: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  // Build menu data dynamically from workflows
  const menuItems = useMemo(() => {
    if (!workflows || workflows.length === 0) return [];

    // Filter out the "CoreIgnite Team: Add New Workflow" from dynamic menu
    const filteredWorkflows = workflows.filter(
      workflow => workflow.name !== 'CoreIgnite Team: Add New Workflow'
    );

    const categoryMap = new Map<string, WorkflowMetadata[]>();
    
    if (filteredWorkflows) {
      filteredWorkflows.forEach(workflow => {
        const category = workflow.category || 'Other';
        if (!categoryMap.has(category)) {
          categoryMap.set(category, []);
        }
        categoryMap.get(category)!.push(workflow);
      });

      // Define color rotation list
      const colorList = ['#7A23D9', '#3BAB5A', '#4589FF', '#FF9D00', '#FF0000'];

      // Build parent menu items for each category
      return Array.from(categoryMap.entries()).map(([categoryName, categoryWorkflows], index) => {
        // Assign color based on index, rotating through the color list
        const color = colorList[index % colorList.length];
        
        return {
          id: categoryName.toLowerCase().replace(/\s+/g, '-'),
          label: categoryName,
          type: 'parent' as const,
          color,
          children: categoryWorkflows.map(workflow => ({
            id: workflow.name.toLowerCase().replace(/\s+/g, '-'),
            label: workflow.title,
            type: 'item' as const,
            workflow: workflow.name,
          }))
        };
      });
    }
    return [];
  }, [workflows]);

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
      children: menuItems
    },
    {
      id: 'about',
      label: 'About',
      type: 'section',
      children: [
        { id: 'questions', label: 'Questions', type: 'item', workflow: '__QUESTIONS__' },
        { id: 'add-new-workflow', label: 'CoreIgnite Team: Add New Workflow', type: 'item', workflow: 'CoreIgnite Team: Add New Workflow' },
        { id: 'api-docs', label: 'API Docs', type: 'item', externalUrl: '' }, // URL to be configured later
      ]
    }
  ];

  // Auto-expand category containing current workflow
  useEffect(() => {
    if (!currentWorkflow || currentWorkflow === '__HOME__') return;
    
    // Find which parent category contains the current workflow
    const findParentCategory = (items: MenuItem[]): string | null => {
      for (const item of items) {
        if (item.type === 'parent' && item.children) {
          const hasWorkflow = item.children.some(
            child => child.workflow === currentWorkflow
          );
          if (hasWorkflow) return item.id;
        }
        if (item.children) {
          const found = findParentCategory(item.children);
          if (found) return found;
        }
      }
      return null;
    };

    const parentId = findParentCategory(menuData);
    if (parentId && !expandedCategories.has(parentId)) {
      setExpandedCategories(new Set([...expandedCategories, parentId]));
    }
  }, [currentWorkflow, workflows]);

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
    if (item.externalUrl !== undefined) {
      // Handle external URL clicks
      if (item.externalUrl) {
        window.open(item.externalUrl, '_blank', 'noopener,noreferrer');
      }
      // Close sidebar after clicking
      if (onClose) {
        onClose();
      }
    } else if (item.workflow) {
      onWorkflowChange(item.workflow);
      if (onClose) {
        onClose();
      }
    }
  };

  const renderMenuItem = (item: MenuItem, depth: number = 0, parentColor?: string) => {
    if (item.type === 'section') {
      return (
        <div key={item.id} className="mb-4">
          <div className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] text-[#161616] mb-3">
            {item.label}
          </div>
          {item.children && (
            <div className="space-y-3">
              {item.children.map(child => renderMenuItem(child, depth + 1, parentColor))}
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
            className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[14px] text-[#161616] cursor-pointer hover:bg-[#f4f4f4] transition-all flex items-center gap-1 py-1 px-2 -mx-2 rounded"
            onClick={() => toggleCategory(item.id)}
          >
            <ChevronRight 
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            />
            {item.label}
          </div>
          {isExpanded && item.children && (
            <div className="ml-5 mt-2 space-y-2">
              {item.children.map(child => renderMenuItem(child, depth + 1, item.color))}
            </div>
          )}
        </div>
      );
    }
    
    // Regular item
    const isActive = item.workflow === '__HOME__' 
      ? currentWorkflow === null 
      : item.workflow === currentWorkflow;
    
    // Color mapping for parent/active background pairs
    const colorMap: { [key: string]: string } = {
      '#7A23D9': '#E5D3F8',
      '#3BAB5A': '#E8FCEE',
      '#4589FF': '#E5EFFF',
      '#FF9D00': '#FFF5E5',
      '#FF0000': '#FFCCCC'
    };
    
    // Use parent color if available, otherwise default to purple
    const activeColor = parentColor || '#7A23D9';
    const activeBgColor = parentColor && colorMap[parentColor.toUpperCase()]
      ? colorMap[parentColor.toUpperCase()]
      : '#E5D3F8';
    
    return (
      <div
        key={item.id}
        className={`font-['IBM_Plex_Sans:Regular',sans-serif] text-[12px] py-1 px-2 -mx-2 rounded transition-all ${
          isActive 
            ? 'font-["IBM_Plex_Sans:SemiBold",sans-serif]' 
            : 'text-[#161616]'
        } ${
          item.workflow || item.externalUrl !== undefined
            ? 'cursor-pointer hover:bg-[#f4f4f4]' 
            : 'text-[#8d8d8d] cursor-default'
        }`}
        style={isActive ? {
          color: activeColor,
          backgroundColor: activeBgColor
        } : {}}
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
          className="fixed inset-0 bg-black/50 z-30 bottom-[60px] md:bottom-0 md:top-[60px]"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 md:top-[60px] bottom-[60px] md:bottom-0 w-[280px] sm:w-[320px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto p-6">
          {menuData.map((item, index) => (
            <div key={item.id}>
              {renderMenuItem(item)}
              {index < menuData.length - 1 && <div className="border-b border-[#e0e0e0] my-4" />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}