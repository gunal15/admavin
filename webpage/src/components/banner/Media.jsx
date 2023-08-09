import React from "react";
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiGithub, SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <span style={{ margin: "20px" }}>
        <button
          className="btn btn-primary"
          style={{
            margin: "20px",
            border: "1px solid white",
            borderRadius: "5px",
            padding: "5px",
            color: "white",
          }}
        >
          Sample report
        </button>
        <button
          className="btn btn-primary"
          style={{
            margin: "20px",
            border: "1px solid white",
            borderRadius: "5px",
            padding: "5px",
            color: "white",
          }}
        >
          View tutorial
        </button>
      </span>
    </div>
  );
};

export default Media;
