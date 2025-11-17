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
    date: "April 2018 - April 2020",
    points: [
      "Designed scalable Flask/FastAPI microservices for a cloud-based media management platform, integrating AWS S3, SNS, and Lambda.",
      "Implemented Elasticsearch indexing and advanced search, improving relevance by 30%.",
      "Built React dashboards for real-time system monitoring and analytics.",
      "Optimized high-throughput APIs using asynchronous I/O (aiohttp, Celery), maintaining responsiveness under heavy load.",
      "Standardized testing and deployment workflows with pytest, GitHub Actions, and Docker Compose."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Codigee",
    icon: codigee,
    iconBg: "#E6DEDD",
    date: "May 2020 - August 2022",
    points: [
      "Led modernization of enterprise ERP and logistics systems (Django + Angular), optimizing backend performance and frontend interactivity.",
      "Introduced Redis caching and lazy Angular modules, cutting page load time by 40%.",
      "Built Flask-based Twilio Voice API for automated call handling, reducing operational costs by 60%.",
      "Migrated legacy APIs to FastAPI, improving concurrency and reducing CPU load by 20%.",
      "Integrated Azure AD SSO with role-based access control for enterprise data security.",
    ],
  },
  {
    title: "Full Stack / AI Engineer",
    company_name: "Techfirst",
    icon: techfirst,
    iconBg: "#b4b0afff",
    date: "September 2022 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Full stack Developer",
    company_name: "Apreel",
    icon: fullstack,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Led end-to-end software architecture of cloud-native AI automation platforms using event-driven microservices, FastAPI, Django REST, and Node.js.",
      "Designed modular backend APIs (PostgreSQL, Redis, RabbitMQ), containerized with Docker and deployed via Terraform + GitHub Actions, reducing release cycles significantly.",
      "Implemented MCP (Model Context Protocol)-based LLM integration, turning Django/FastAPI APIs into AI-discoverable endpoints for agent workflows.",
      "Built Next.js dashboards with WebSocket streaming and REST APIs for real-time visualization and system control.",
      "Introduced Prometheus + Grafana observability, cutting incident response times by 35%.",
      "Enforced TDD practices (pytest, Jest) and mentored engineers through code review and architecture sessions.",
      "Mentored junior engineers, established code review standards, and led architectural reviews to maintain high-quality, maintainable codebases across Python and JavaScript stacks.",
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
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
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
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
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
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
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
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
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};

export const Portfolio_name = "Piotr Brzeczek"