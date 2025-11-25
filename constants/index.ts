import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";


import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fullstack,
  appstronauts,
  techfirst,
  codigee,
  thoughtworks,
  atlas,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 90,
    height: 90,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 90,
    height: 90,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "Python.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "Java.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Redis",
    image: "redis.png",
    width: 80,
    height: 80,
  }
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Django",
    image: "django.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flask",
    image: "flask.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "FastAPI",
    image: "fastapi.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Spring Boot",
    image: "springboot.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "React",
    image: "react.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "ReactQuery",
    image: "reactquery.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Angular",
    image: "angular.png",
    width: 70,
    height: 70,
  }
] as const;
export const AI_SKILL = [
  {
    skill_name: "TensorFlow",
    image: "TensorFlow.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PyTorch",
    image: "PyTorch.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Langchain",
    image: "langchain.svg",
    width: 70,
    height: 70,
  },

  {
    skill_name: "OpenAI",
    image: "openai.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Pytest",
    image: "pytest.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jest",
    image: "jest.svg",
    width: 50,
    height: 50,
  }
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/piotr-brezczek",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com",
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Python Developer",
    company_name: "Appstronauts",
    icon: appstronauts,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Integrated AWS S3, SNS, and Lambda into the media pipeline.",
      "Implemented Elasticsearch indexing to improve the quality and speed of search results.",
      "Built React-based dashboards showing real-time system activity.",
      "Used aiohttp/Celery to keep APIs responsive under heavy load.",
      "Used NumPy/Pandas for feature extraction, data cleaning, and preparing model-ready datasets.",
      "Standardized CI with pytest, GitHub Actions, and Docker Compose.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Codigee",
    icon: codigee,
    iconBg: "#E6DEDD",
    date: "2020 - 2022",
    points: [
      "Modernized internal ERP APIs using FastAPI and Go workers for queue processing and performance-sensitive jobs.",
      "Introduced Redis caching and lazy-loading Angular modules, cutting page load times by ~40%.",
      "Built a Twilio Voice API (Flask) for automated call flows that significantly reduced manual operator work.",
      "Added enterprise-level security with Azure AD SSO and role-based access.",
    ],
  },
  {
    title: "Senior Backend / GraphQL Engineer",
    company_name: "Atlas Analytics",
    icon: atlas,
    iconBg: "#0f0101ff",
    date: "2021-2022",
    points: [
      "Designed and implemented a modular GraphQL API layer (Ariadne + FastAPI / Apollo Server) powering analytics dashboards used by thousands of users daily.",
      "Built optimized resolver pipelines with dataloaders to eliminate N+1 queries and cut latency by ~55%.",
      "Introduced a federated GraphQL architecture unifying schemas across auth, analytics, and billing services.",
      "Integrated PostgreSQL + Redis caching strategies to deliver low-latency GraphQL responses.",
      "Created automated schema validation, versioning, and CI pipelines via GitHub Actions.",
      "Partnered with frontend teams using Apollo Client/React to create fully type-safe end-to-end data flows.",
      "Added RBAC and OAuth2-based access control for GraphQL queries and mutations.",
    ]
  },
  {
    title: "Full Stack / AI Engineer",
    company_name: "Thoughtworks",
    icon: thoughtworks,
    iconBg: "#b4b0afff",
    date: "2022 - 2024",
    points: [
      "Built ETL workflows in Airflow to ingest, clean, and transform multi-source financial data, improving model input quality and reducing data latency by ~40%.",
      "Built RAG-based modules with LangChain + Pinecone, improving accuracy and reduce false positives.",
      "Developed React dashboards supported by low-latency Go APIs.",
      "Managed deployments via AWS ECS, including IAM/VPC security and uptime monitoring.",
      "Worked closely with data and compliance teams to ensure the system met regulatory requirements.",
    ],
  },
  {
    title: "Senior Full stack Developer",
    company_name: "Neoteric",
    icon: fullstack,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Architected and deployed multiple AI-enabled microservices (FastAPI + Go) that reduced manual operational workload by ~45% across internal teams.",
      "Build MCP (Model Context Protocol) integrations so our API could be discovered and used by AI agents.",
      "Developed Next.js dashboards with realtime WebSocket streams, improving data refresh speed by ~60%.",
      "Introduced Prometheus + Grafana monitoring, which noticeably improved our incident response time.",
      "Implemented a unified testing setup (pytest + Jest), raising automated test coverage from ~45% to over 80%.",
      "Mentored junior developers and ran weekly code reviews that decreased regression bugs by more than 50%.",
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Robin + Noguier",
    description:
      "Robin Noguier’s website is a creative and interactive experience that showcases his design work for major global brands through playful visuals, bold animations, and a strong personal identity.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "TailwndCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://robin-noguier.com/",
  },
  {
    name: "Safiyajewels",
    description:
      "Safiya Jewels is a luxury jewelry brand specializing in natural, untreated Alexandrite pieces with a strong focus on authenticity, craftsmanship, and elegant design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Paypal",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://safiyajewels.com/",
  },
  {
    name: "Letsplaysports",
    description:
      "Lets Play Sports is a UK platform and app that lets people easily find, join, or organize casual local sports games with a simple, flexible membership.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "CMS",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://letsplaysports.co.uk/",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "Nutresana",
    description:
      "The site for Nutresana is built on WordPress using PHP and MySQL on the back end, and leverages HTML5, CSS3, Bootstrap, and JavaScript for the front end.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://www.nutresana.com/",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};

export const Portfolio_name = "Piotr Brzeczek"