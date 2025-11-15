"use client";

import { motion } from "framer-motion";
import { Timeline } from "flowbite-react";
import { EXPERIENCES } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { styles } from "@/app/styles";
import { textVariant } from "@/utils/motion";
import { ExperienceCard } from "../sub/experience-card";

export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        <div className="mt-20">
          <Timeline>
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={i} experience={exp} />
            ))}
          </Timeline>
        </div>
      </>
    </SectionWrapper>
  );
};
