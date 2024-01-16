import React from "react";
import { experiences } from "@/utils/experiencelist";
import Card from "./card";

function Experience() {
  return (
    <section id="experience" className="w-full min-h-screen flex items-center">
      {/* experience display */}

      <div className="w-full flex justify-center lg:pt-0 pt-12">
        <div className="flex-1">
          <h2 className="lg:mb-10 mb-6 font-bold lg:text-5xl text-3xl underline underline-offset-8 text-center">
            experience
          </h2>
          <div className="flex justify-center items-center flex-wrap">
            {experiences.map((experience, index) => (
              <Card
                key={index}
                company={experience.company}
                position={experience.position}
                time={experience.time}
                image={experience.image}
                width={experience.width}
                height={experience.height}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;