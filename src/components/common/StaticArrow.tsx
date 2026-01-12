import React from 'react';
import { ArrowDown, ArrowRight } from '@carbon/icons-react';

interface StaticArrowProps {
  direction: 'down' | 'right';
  align?: 'start' | 'center' | 'end';
  label?: string;
}

export const StaticArrow: React.FC<StaticArrowProps> = ({
  direction,
  align = 'center',
  label,
}) => {
  const Icon = direction === 'down' ? ArrowDown : ArrowRight;

  return (
    <div className="flex flex-col items-center gap-[4px]">
      <Icon size={20} className="text-[#0F62FE]" />
      {label && (
        <span className="text-[12px] font-[IBM_Plex_Sans] text-[#525252] whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  );
};
