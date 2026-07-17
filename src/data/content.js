export const profile = {
  name: 'Prashant',
  role: 'Full-Stack Developer',
  blurb:
    'I turn ideas into production-ready web applications by building fast, maintainable frontends and robust backend systems.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/PrashantGC00' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prashant-g-c-07814231a/' },
    { label: 'Email', href: 'mailto:gcprashant555@gmail.com' },
  ],
}

export const nav = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
]

export const about = [
  "I'm a full-stack developer with experience building modern web applications from frontend to backend. I work primarily with React, TypeScript, Hono, Prisma, and PostgreSQL, focusing on creating scalable, maintainable software with clean user experiences.",

  "I enjoy understanding how systems work beneath the abstraction layers. Outside of web development, I explore Go and C, build small tools, and experiment with libraries/packages, which helps me write more thoughtful, efficient code regardless of the technology stack.",
]

export const experience = [
  {
    index: '1',
    role: 'Junior Full-Stack Developer',
    org: 'Acid Integrations',
    period: 'May 2025 — Present',
    summary:
      'Developing and maintaining production web applications, contributing across the frontend and backend in a collaborative team environment.',
    stack: [
      'React',
      'TypeScript',
      'TanStack Query',
      'Hono',
      'Prisma',
      'PostgreSQL',
      'MySQL',
      'Keycloak',
    ],
  },
  {
    index: '2',
    role: 'Freelance Full-Stack Developer',
    org: 'Self-employed',
    period: 'Nov 2024 — May 2025',
    summary:
      'Delivered responsive full-stack web applications for clients using the MERN stack from development to deployment.',
    stack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    index: '3',
    role: 'C Programmer Intern',
    org: 'PL Multimedia',
    period: 'Jul 2023 — Sept 2024',
    summary:
      'Developed systems-level software and optimized computation in UNIX environments.',
    stack: ['C', 'UNIX', 'POSIX Threads'],
  },
  {
    index: '4',
    role: 'Design Intern',
    org: 'My Second Teacher',
    period: 'Mar 2023 — Sept 2024',
    summary:
      'Created digital designs and collaborated with cross-functional and international teams.',
    stack: ['Adobe Photoshop', 'Adobe Illustrator'],
  },
]

export const projects = [
  {
    index: '1',
    name: 'JSON Tree Visualizer',
    media: ['/projects/json-tree.png'],
    description:
      'A Go-based tool for exploring deeply nested JSON as an interactive, collapsible tree.',
    stack: ['Go'],
  },
  {
    index: '2',
    name: 'Snake, in C',
    media: ['/projects/snake.png', '/projects/snake_2.png'],
    description: 'A classic Snake implementation built with C and SDL3, from scratch — no game engine.',
    stack: ['C', 'SDL3'],
    href: 'https://github.com/PrashantGC00/snake_game'
  },
  {
    index: '3',
    name: 'Naval War College CMS',
    media: ['/projects/nwc_1.png', '/projects/nwc_2.png'],
    description:
      'Built a full-stack CMS featuring authentication, media storage, rich text editing, background jobs, and PostgreSQL-backed content management.',
    stack: ['React', 'Hono', 'JavaScript', 'TypeScript', 'PostgreSQL', 'Wasabi', 'JobQueues', 'docker', 'keycloak', 'tiptap', 'tanstack'],
  },
  {
    index: '4',
    name: '11 hype',
    media: ['/projects/11hype_1.png', '/projects/11hype_2.png'],
    description:
      'Worked on both the frontend and backend of a production marketplace application, building scalable features and maintaining the platform.',
    stack: ['React', 'OpenStreetMaps', 'JavaScript', 'TypeScript', 'Prisma', 'PostgreSQL', 'Wasabi', 'JobQueues', 'docker', 'excalidraw'],
  },
]
