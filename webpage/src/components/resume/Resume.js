import React, { useState } from "react";
import Title from "../layouts/Title";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaTrophy } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="our core belief systems and value from the foundation of our company. It is what Drives every decision we make ,every step on the way."
          des="Our Culture Drives what we do"
        />
      </div>
      <section id="experience">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "gray",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0,0,0,0.4) " }}
            date=""
            iconStyle={{
              background:
                "linear-gradient(45deg, transparent, tomato, transparent)",
              color: "#fff",
            }}
            icon={<FaTrophy />}
          >
            <h3 className="vertical-timeline-element-title">
              Customer Happiness
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Make a positive difference to the buisiness
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "gray",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0,0,0,0.4) " }}
            date=""
            iconStyle={{
              background:
                "linear-gradient(45deg, transparent, tomato, transparent)",
              color: "#fff",
            }}
            icon={<FaTrophy />}
          >
            <h3 className="vertical-timeline-element-title">
              Customer Happiness
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Make a positive difference to the buisiness
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "gray",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0,0,0,0.4) " }}
            date=""
            iconStyle={{
              background:
                "linear-gradient(45deg, transparent, tomato, transparent)",
              color: "#fff",
            }}
            icon={<FaTrophy />}
          >
            <h3 className="vertical-timeline-element-title">
              Customer Happiness
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Make a positive difference to the buisiness
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "gray",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0,0,0,0.4) " }}
            date=""
            iconStyle={{
              background:
                "linear-gradient(45deg, transparent, tomato, transparent)",
              color: "#fff",
            }}
            icon={<FaTrophy />}
          >
            <h3 className="vertical-timeline-element-title">
              Customer Happiness
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Make a positive difference to the buisiness
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "gray",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0,0,0,0.4) " }}
            date=""
            iconStyle={{
              background:
                "linear-gradient(45deg, transparent, tomato, transparent)",
              color: "#fff",
            }}
            icon={<FaTrophy />}
          >
            <h3 className="vertical-timeline-element-title">
              Customer Happiness
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Make a positive difference to the buisiness
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "gray",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0,0,0,0.4) " }}
            date=""
            iconStyle={{
              background:
                "linear-gradient(45deg, transparent, tomato, transparent)",
              color: "#fff",
            }}
            icon={<FaTrophy />}
          >
            <h3 className="vertical-timeline-element-title">
              Customer Happiness
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Make a positive difference to the buisiness
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </section>
  );
};

export default Resume;
