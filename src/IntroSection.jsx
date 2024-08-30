import React from "react";

const IntroSection = ({ title, content, bgColor, fontFamily }) => {
  return (
    <section
      className="p-8 md:p-12 rounded-lg shadow-md"
      style={{ backgroundColor: bgColor }}
    >
      <h1
        className="text-2xl md:text-3xl font-bold text-white"
        style={{ fontFamily }}
      >
        {title}
      </h1>
      <p
        className="mt-2 text-white text-base md:text-lg"
        style={{ fontFamily }}
      >
        {content}
      </p>
    </section>
  );
};

export default IntroSection;
