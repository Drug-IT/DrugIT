"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";

interface CollapsibleCategoryProps {
  categoryName: string;
  cardNames?: string[];
  backgroundImage: string;
}

const CollapsibleCategory: React.FC<CollapsibleCategoryProps> = ({
  categoryName,
  cardNames = [],
  backgroundImage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible className="w-full mb-6" open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center w-full h-20 bg-white rounded-xl shadow-lg overflow-hidden text-[#4F1DA0] hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#4F1DA0] focus:ring-opacity-50">
        <div className="flex items-center h-full px-6 bg-white flex-grow">
          <ChevronDownIcon
            className={`w-8 h-8 mr-4 transition-transform duration-300 ease-in-out ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
          <span className="text-xl font-semibold flex-grow">
            {categoryName}
          </span>
        </div>
        <div
          className="w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </CollapsibleTrigger>
      <CollapsibleContent
        className="mt-3 bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 ease-in-out shadow-inner"
        style={{
          maxHeight: isOpen ? "2000px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {cardNames.map((name, index) => (
            <Link
              href={`http://localhost:3000/workspace/analysis/${name}`}
              key={index}
              className="block group"
            >
              <div className="p-4 bg-white rounded-lg hover:bg-[#4F1DA0] hover:text-white transition-all duration-200 shadow-sm hover:shadow-md">
                <span className="text-sm font-medium group-hover:text-white">
                  {name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleCategory;
