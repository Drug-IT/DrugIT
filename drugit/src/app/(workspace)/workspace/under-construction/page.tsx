import Image from "next/image";
import React from "react";

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <Image
        src={"/under_construction.png"}
        alt="Under Construction"
        width={600} // Adjust width as needed
        height={400} // Adjust height as needed
        className="mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">Under Construction</h1>
      <p className="text-xl">
        We are working hard to bring you a new experience. Stay tuned!
      </p>
    </div>
  );
};

export default UnderConstruction;
