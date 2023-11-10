/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const contentProps = useSpring({
    maxHeight: isOpen ? "1000px" : "0px",
    opacity: isOpen ? 1 : 0,
    config: { duration: 250, tension: 200, friction: 20 },
  });

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="border border-gray-300 rounded-md shadow">
        <div
          className="flex items-center justify-between px-4 py-3 bg-gray-100 cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-bold">{title}</p>
          <svg
            className={`w-6 h-6 transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <animated.div
          style={{
            ...contentProps,
            overflow: "hidden",
          }}
        >
          <div className="px-4 py-3 bg-white">
            <p className="text-gray-700">{content}</p>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default Accordion;
