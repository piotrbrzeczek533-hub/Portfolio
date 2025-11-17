"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/app/styles";
import { textVariant, fadeIn } from "@/utils/motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

// Projects Section
export const Projects = () => {
  return (
    <SectionWrapper idName="Work">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* About */}
        <motion.p
          variants={fadeIn("left", "tween", 0.1, 1)}
          className="mt-3 text-gray-400 text-[17px] max-w-5xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described
          with links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>

        {/* Project Card */}
        <div className="mt-10 flex flex-wrap gap-7 w-full max-w-[1350px] mx-auto">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};

