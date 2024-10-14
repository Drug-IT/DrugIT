import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const TableSkeleton: React.FC<{ rows: number; columns: number }> = ({
  rows,
  columns,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Descriptor</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Descriptor</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Descriptor</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Descriptor</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <TableRow
            key={rowIndex}
            className="transition-colors duration-200 ease-in-out cursor-pointer"
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <TableCell
                key={colIndex}
                className="skeleton font-medium h-10 w-full rounded"
              >
                <Skeleton className="h-4 w-[100px]" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableSkeleton;
