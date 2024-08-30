import React from "react";

const AboutSection = ({ title, content, bgColor, fontFamily }) => {
  return (
    <section
      className="p-8 md:p-12 rounded-lg shadow-md"
      style={{ backgroundColor: bgColor }}
    >
      <h2
        className="text-xl md:text-2xl font-semibold text-gray-800"
        style={{ fontSize: `${fontSize}px`, fontFamily }}
      >
        {title} style={{ fontSize: `${fontSize}px`, fontFamily }}
      </h2>
      <p
        className="mt-2 text-gray-600 text-base md:text-lg"
        style={{ fontSize: `${fontSize}px`, fontFamily }}
      >
        {content}{" "}
      </p>
    </section>
  );
};

export default AboutSection;
