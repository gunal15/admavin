import React from "react";
import Title from "../layouts/Title";

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Planner Categories" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-14">
        <ProjectsCard
          title="Campaign planner"
          des=" Plan and manage End to End out of home (OOH) Media advertising campaigns"
          src={
            "https://seatable.io/wp-content/uploads/2022/07/Marketing-Kampagne-Planung_AdobeStock_439332312-1088x725.jpg"
          }
        />
        <ProjectsCard
          title="Campaign analyzer"
          des=" Plan and manage End to End out of home (OOH) Media advertising campaigns"
          src={
            "https://imageio.forbes.com/specials-images/imageserve/1062278194/Young-business-team-working-together-at-office/960x0.jpg?height=474&width=711&fit=bounds"
          }
        />
        <ProjectsCard
          title="Campaign monitoring"
          des=" Plan and manage End to End out of home (OOH) Media advertising campaigns"
          src={
            "https://cdn.elearningindustry.com/wp-content/uploads/2019/07/7-ways-to-plan-a-promotional-campaign.jpg"
          }
        />
      </div>
      <div>
        <div
          className="flex justify-center items-center text-center"
          style={{ marginTop: "30px" }}
        >
          <Title
            title="our core belief systems and value from the foundation of our company. It is what Drives every decision we make ,every step on the way."
            des="Case study on OOH campaign"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-14">
          <ProjectsCard
            title="Customer Happiness"
            des=" Make a positive Difference to the buisiness We support speed"
            src={
              "https://lh3.googleusercontent.com/hd6nfyLN8zqm50WVx9aOkMlCsOsBmGd3_ZnoHvfh64G4liAYM_jjnsA_tT7gZPiDis8GYUopRA257OdlSzBchVSK5yU=w512-rw"
            }
          />
          <ProjectsCard
            title="Customer Happiness"
            des=" Make a positive Difference to the buisiness We support speed"
            src={
              "https://d2q7lj72xliqot.cloudfront.net/uploads/event/2015-01-29/183219/183219_9.jpg"
            }
          />
          <ProjectsCard
            title="Customer Happiness"
            des=" Make a positive Difference to the buisiness We support speed"
            src={"https://www.aopen.com/uploads/file/3000/20211125101238.jpg"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
