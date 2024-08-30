import React from "react";

const ProductSection = ({ title, content, bgColor, fontFamily }) => {
  return (
    <section
      className="p-8 md:p-12 rounded-lg shadow-md"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{title}</h2>
      <p
        className="mt-2 text-gray-600 text-base md:text-lg"
        style={{ fontFamily }}
      >
        {content}
      </p>
    </section>
  );
};

export default ProductSection;
