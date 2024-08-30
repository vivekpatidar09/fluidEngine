import React, { useState } from "react";
import Draggable from "react-draggable";

const defaultSettings = {
  bgColor: "#ffffff",
  fontFamily: "Helvetica, Arial, sans-serif",
  fontSize: "16px",
};

const HomePageBuilder = () => {
  const [sections, setSections] = useState([
    {
      id: "section-hero",
      title: "Hero Section",
      enabled: false,
      bgColor: defaultSettings.bgColor,
      fontFamily: defaultSettings.fontFamily,
      fontSize: "32px", // Override default for this section
      textAlign: "center",
      items: [
        {
          id: "hero-heading",
          text: "Welcome to Our Website",
          top: "40%",
          left: "50%",
        },
        {
          id: "hero-subheading",
          text: "We provide amazing services",
          top: "50%",
          left: "50%",
        },
        { id: "hero-button", text: "Get Started", top: "60%", left: "50%" },
      ],
    },
    {
      id: "section-about",
      title: "About Us Section",
      enabled: false,
      bgColor: defaultSettings.bgColor,
      fontFamily: "Georgia, serif", // Override default for this section
      fontSize: defaultSettings.fontSize,
      textAlign: "left",
      items: [
        {
          id: "about-heading",
          text: "About Our Company",
          top: "10%",
          left: "10%",
        },
        {
          id: "about-paragraph",
          text: "We have been in business for over 10 years...",
          top: "20%",
          left: "10%",
        },
      ],
    },
    {
      id: "section-services",
      title: "Services Section",
      enabled: false,
      bgColor: "#eef7ff", // Override default for this section
      fontFamily: "Roboto, sans-serif", // Override default for this section
      fontSize: "20px",
      textAlign: "center",
      items: [
        {
          id: "services-heading",
          text: "Our Services",
          top: "10%",
          left: "50%",
        },
        { id: "service-1", text: "Web Development", top: "30%", left: "25%" },
        { id: "service-2", text: "Graphic Design", top: "30%", left: "50%" },
        { id: "service-3", text: "Digital Marketing", top: "30%", left: "75%" },
      ],
    },
    {
      id: "section-contact",
      title: "Contact Us Section",
      enabled: false,
      bgColor: defaultSettings.bgColor,
      fontFamily: "Arial, sans-serif",
      fontSize: defaultSettings.fontSize,
      textAlign: "center",
      items: [
        {
          id: "contact-heading",
          text: "Get in Touch",
          top: "10%",
          left: "50%",
        },
        {
          id: "contact-email",
          text: "email@example.com",
          top: "30%",
          left: "50%",
        },
        { id: "contact-phone", text: "+123 456 7890", top: "40%", left: "50%" },
        {
          id: "contact-address",
          text: "123 Main Street, City, Country",
          top: "50%",
          left: "50%",
        },
      ],
    },
  ]);

  const handleTextChange = (sectionId, itemId, newText) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId ? { ...item, text: newText } : item
              ),
            }
          : section
      )
    );
  };

  const handleDrag = (e, data, sectionId, itemId) => {
    const newTop = (data.y / e.target.parentElement.clientHeight) * 100;
    const newLeft = (data.x / e.target.parentElement.clientWidth) * 100;

    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId
                  ? { ...item, top: `${newTop}%`, left: `${newLeft}%` }
                  : item
              ),
            }
          : section
      )
    );
  };

  const resetToDefault = (sectionId) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              bgColor: defaultSettings.bgColor,
              fontFamily: defaultSettings.fontFamily,
              fontSize: defaultSettings.fontSize,
            }
          : section
      )
    );
  };

  return (
    <div className="container mx-auto py-8 px-4 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Build your homepage</h3>
          {sections.map((section, index) => (
            <div key={section.id} className="mb-4">
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`enable-${section.id}`}
                  checked={section.enabled}
                  onChange={() => {
                    const updatedSections = [...sections];
                    updatedSections[index].enabled =
                      !updatedSections[index].enabled;
                    setSections(updatedSections);
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor={`enable-${section.id}`}
                  className="cursor-pointer"
                >
                  {section.title}
                </label>
              </div>

              {section.enabled && (
                <div className="pl-6">
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Background Color
                    </label>
                    <input
                      type="color"
                      value={section.bgColor}
                      onChange={(e) =>
                        setSections((prevSections) =>
                          prevSections.map((sec) =>
                            sec.id === section.id
                              ? { ...sec, bgColor: e.target.value }
                              : sec
                          )
                        )
                      }
                      className="mt-1 block w-full"
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Font Family
                    </label>
                    <select
                      value={section.fontFamily}
                      onChange={(e) =>
                        setSections((prevSections) =>
                          prevSections.map((sec) =>
                            sec.id === section.id
                              ? { ...sec, fontFamily: e.target.value }
                              : sec
                          )
                        )
                      }
                      className="mt-1 block w-full"
                    >
                      <option value="Helvetica, Arial, sans-serif">
                        Helvetica
                      </option>
                      <option value="Georgia, serif">Georgia</option>
                      <option value="Roboto, sans-serif">Roboto</option>
                      <option value="Arial, sans-serif">Arial</option>
                    </select>
                  </div>

                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Font Size
                    </label>
                    <input
                      type="number"
                      value={section.fontSize.replace("px", "")}
                      onChange={(e) =>
                        setSections((prevSections) =>
                          prevSections.map((sec) =>
                            sec.id === section.id
                              ? { ...sec, fontSize: `${e.target.value}px` }
                              : sec
                          )
                        )
                      }
                      className="mt-1 block w-full"
                    />
                  </div>

                  <button
                    onClick={() => resetToDefault(section.id)}
                    className="text-sm text-blue-600 underline"
                  >
                    Reset to Default
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 bg-gray-50 p-6 shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Preview</h3>
          {sections.map(
            (section, index) =>
              section.enabled && (
                <div
                  key={section.id}
                  className="relative mb-8 p-6 rounded-lg"
                  style={{
                    backgroundColor: section.bgColor,
                    fontFamily: section.fontFamily,
                    fontSize: section.fontSize,
                    textAlign: section.textAlign,
                    height: "500px", // Adjusted for better visibility
                    position: "relative",
                  }}
                >
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  {section.items.map((item) => (
                    <Draggable
                      key={item.id}
                      bounds="parent"
                      position={{
                        x: (parseFloat(item.left) / 100) * 500, // Assuming section width is 500px
                        y: (parseFloat(item.top) / 100) * 500, // Assuming section height is 500px
                      }}
                      onDrag={(e, data) =>
                        handleDrag(e, data, section.id, item.id)
                      }
                    >
                      <div
                        className="p-2 border rounded-lg bg-white cursor-move"
                        style={{
                          width: item.width || "auto",
                          height: item.height || "auto",
                          textAlign: item.textAlign || section.textAlign,
                          position: "absolute",
                          transform: "translate(-50%, -50%)",
                          fontSize: "calc(10px + 2vw)", // Responsive font size
                        }}
                        contentEditable
                        suppressContentEditableWarning={true}
                        onBlur={(e) =>
                          handleTextChange(
                            section.id,
                            item.id,
                            e.target.textContent
                          )
                        }
                      >
                        {item.text}
                      </div>
                    </Draggable>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePageBuilder;
