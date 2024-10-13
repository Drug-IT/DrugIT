"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface CollapsibleCategoryProps {
  categoryName: string;
  cardNames?: string[];
  backgroundImage: string;
}

const CollapsibleCategory: React.FC<CollapsibleCategoryProps> = ({
  categoryName,
  cardNames = [],
  backgroundImage
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible 
      className="w-full mb-4" 
      open={isOpen} 
      onOpenChange={setIsOpen}
    >
      <CollapsibleTrigger className="flex items-center w-full h-16 bg-white rounded-lg shadow-md overflow-hidden text-[#4F1DA0]">
        <div className="flex items-center h-full px-4 bg-white flex-grow">
          <ChevronDownIcon className={`w-6 h-6 transition-transform duration-300 ease-in-out ${isOpen ? 'transform rotate-180' : ''}`} />
          <span className="text-lg font-semibold flex-grow">{categoryName}</span>
        </div>
        <div 
          className="w-2/3 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <div className="grid grid-cols-4 gap-4 p-4 bg-white rounded-lg shadow-md">
          {cardNames.map((name, index) => (
            <Link href={`http://localhost:3000/workspace/analysis/${name}`} key={index} className="block">
              <div className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                <span className="text-sm">{name}</span>
              </div>
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleCategory;