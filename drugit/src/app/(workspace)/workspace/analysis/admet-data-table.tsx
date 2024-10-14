import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

interface AdmetDataTableProps {
  data: Record<string, any>[]; // Array of objects with string keys and any values
}

const AdmetDataTable: React.FC<AdmetDataTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <></>;
  }

  const keys = Object.keys(data[0]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Descriptor</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Descriptor</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {keys.map((key, index) => {
          // Create rows with four key-value pairs
          if (index % 2 === 0) {
            return (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell className="font-bold">
                  {typeof data[0][key] === "number"
                    ? data[0][key].toFixed(4)
                    : data[0][key]}
                </TableCell>
                <TableCell>{keys[index + 1] || ""}</TableCell>
                <TableCell className="font-bold">
                  {typeof data[0][keys[index + 1]] === "number"
                    ? data[0][keys[index + 1]].toFixed(4)
                    : data[0][keys[index + 1]] || ""}
                </TableCell>
              </TableRow>
            );
          }
          return null;
        })}
      </TableBody>
    </Table>
  );
};

export default AdmetDataTable;
