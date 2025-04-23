import React, { useState } from "react";

const AccordianItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`border-2 rounded-lg hover:bg-n-2 space-y-4 ${
          isOpen ? "bg-n-2" : "bg-white"
        }`}
      >
        <div
          className="flex justify-between font-semibold px-6 py-4 text-lg cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p> {item.title}</p>
          <p className="text-2xl">{isOpen ? "-" : "+"}</p>
        </div>
        {isOpen && (
          <div className="transition-all ease-in-out px-6 pb-2 text-medium">
            {item.content}
          </div>
        )}
      </div>
    </>
  );
};

export default AccordianItem;
