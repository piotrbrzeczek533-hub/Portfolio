"use client";

import { Timeline } from "flowbite-react";
import Image from "next/image";
import { EXPERIENCES } from "../../constants";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <Timeline.Item>
    {/* ICON */}
    <Timeline.Point>
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: experience.iconBg }}
      >
        <Image
          src={experience.icon}
          alt={experience.company_name}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    </Timeline.Point>

    {/* CONTENT */}
    <Timeline.Content className="bg-[#1d1836] text-white p-6 rounded-xl border-l-4 border-[#232631]">
      <Timeline.Time className="text-gray-400">
        {experience.date}
      </Timeline.Time>

      <Timeline.Title className="text-xl font-bold text-white">
        {experience.title}
      </Timeline.Title>

      <p className="text-secondary text-sm mb-3">
        {experience.company_name}
      </p>

      <ul className="space-y-2 ml-5 list-disc">
        {experience.points.map((point, i) => (
          <li key={i} className="text-gray-300 text-sm tracking-wide">
            {point}
          </li>
        ))}
      </ul>
    </Timeline.Content>
  </Timeline.Item>
);
