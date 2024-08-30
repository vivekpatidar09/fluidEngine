import React from "react";

const FooterSection = ({ content, bgColor, fontSize, fontFamily }) => {
  return (
    <footer
      className="p-4 md:p-6 rounded-lg shadow-md"
      style={{ backgroundColor: bgColor }}
    >
      <p
        className="text-center text-white"
        style={{ fontSize: `${fontSize}px`, fontFamily }}
      >
        {content}
      </p>
    </footer>
  );
};

export default FooterSection;
