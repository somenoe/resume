/* eslint-disable quotes */
enum Month {
  January = 'Jan',
  February = 'Feb',
  March = 'Mar',
  April = 'Apr',
  May = 'May',
  June = 'Jun',
  July = 'Jul',
  August = 'Aug',
  September = 'Sep',
  October = 'Oct',
  November = 'Nov',
  December = 'Dec',
}

interface ProjectData {
  title: string;
  organization: string;
  date: {
    start: {
      month: Month;
      year: number;
    };
    end: {
      month?: Month;
      year?: number;
    };
  };
  details: string[];
}

const resumeContent = {
  personalInfo: {
    name: 'Pridsadang Pansiri',
    email: 'psd@somenoe.com',
    phone: '(+66) 062 083 4594',
    location: {
      city: 'Bangkok',
      country: 'Thailand',
    },
    websites: ['github.com/somenoe', 'somenoe.com'],
  },
  summary:
    'Self-motivated Computer Science graduate with full-stack development experience. Proven track record of building real-time applications from scratch, integrating complex systems, and managing end-to-end software development projects. Currently pursuing game development with Unreal Engine while maintaining freelance software development work. Strong foundation in high-Performance programming and entrepreneurship, with expertise in modern web technologies and cloud deployment.',
  skills: {
    skills: [
      'Full-Stack Development',
      'Web Development',
      'Database Design',
      'UX/UI Design',
      'DevOps',
      'Linux Server',
      'Cloud Computing',
      'Cloudflare',
      'Real-Time System',
      'High-Performance Computing',
      'Project Management',
      'Game Development',
      'Spreadsheet Automation',
      'AI Vibe Coding!',
    ],
    languages: [
      'C',
      'C++',
      'Python',
      'SQL',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Java',
      'Bash',
      'Batch Script',
      'AngelScript',
    ],
    tools: [
      'Git',
      'Docker',
      'SQLite',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'React Native',
      'Next.js',
      'QwikJS',
      'Line APIs',
      'PWAs',
      'PocketBase',
      'Unreal Engine',
    ],
  },
  experience: [
    {
      title: 'Game Developer',
      company: 'Self-Employed',
      location: {
        city: 'Bangkok',
        country: 'Thailand',
      },
      date: {
        start: {
          month: Month.January,
          year: 2024,
        },
        end: {},
      },
      details: [
        'Developing 3D Soulslike ARPG project using Unreal Engine 5, implementing advanced gameplay mechanics with C++ and AngelScript.',
        'Gained expertise in game development pipeline including project management, shader programming, physics systems, level design, asset creation, audio design, and visual effects.',
        // 'Securing project funding through freelance software development contracts and technical trading.',
      ],
    },
    {
      title: 'Back Office',
      company: 'Yanapol Professional Co., Ltd.',
      location: {
        city: 'Bangkok',
        country: 'Thailand',
      },
      date: {
        start: {
          month: Month.October,
          year: 2023,
        },
        end: {
          month: Month.January,
          year: 2024,
        },
      },
      details: [
        'Supported the company in various administrative tasks, including communication with factories, managing inventory, and marketing.',
        'Set up and managed social media presence, e-commerce platforms, and created marketing content for product lines.',
        // 'Gained insights with small business operation, international trading, and beauty industry.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Kung Anantakij Co., Ltd.',
      location: {
        city: 'Chachoengsao',
        country: 'Thailand',
      },
      date: {
        start: {
          month: Month.August,
          year: 2022,
        },
        end: {
          month: Month.September,
          year: 2023,
        },
      },
      details: [
        "Analyzed and developed company's internal system from ground up, featuring real-time capabilities for supply chain, inventory, sales, delivery, and financial operations.",
        'Led full software development lifecycle from requirements analysis through prototyping with Google Sheets and low-code platforms, to final implementation using modern tech stack including Qwik.js, React.js, Next.js, PWAs, PocketBase, and SQLite.',
        'Created integration solutions connecting new system with legacy software including accounting systems.',
        'Implemented chatbot using Line APIs, providing seamless alternative user interface for system interaction.',
        'Managed complete deployment infrastructure including domain configuration and multi-tier deployment on Cloudflare and VPS.',
        'Conducted stakeholder requirements gathering, delivered comprehensive user training, and implemented continuous improvement through user feedback and system optimization.',
      ],
    },
  ],
  projects: [
    //   {
    //     title: '',
    //     organization: '',
    //     date: {
    //       start: {
    //         month: Month.January,
    //         year: 2023,
    //       },
    //       end: {
    //         month: Month.January,
    //         year: 2023,
    //       },
    //     },
    //     details: [''],
    //   },
  ] as ProjectData[],
  education: [
    {
      degree: 'Bachelor of Science (Computer Science)',
      university: 'Sukhothai Thammathirat Open University',
      location: 'Nonthaburi, Thailand',
      date: {
        start: {
          month: Month.March,
          year: 2021,
        },
        end: {
          month: Month.January,
          year: 2024,
        },
      },
      details: [
        'Pursued self-directed learning via Open University, demonstrating exceptional self-motivation and independent study.',
        'Successfully balanced full-time employment with academic excellence, developing time management skills and handling concurrent tasks.',
        'Completed an accelerated curriculum through additional coursework, reducing program duration by 50% while maintaining a perfect academic record.',
      ],
    },
    {
      degree: 'School of Entrepreneurship and Management (Entrepreneurship)',
      university: 'Bangkok University',
      location: 'Pathum Thani, Thailand',
      date: {
        start: {
          month: Month.July,
          year: 2018,
        },
        end: {
          month: Month.August,
          year: 2020,
        },
      },
      details: [
        'Studied fundamental business principles and entrepreneurship mindset, developing comprehensive understanding of business strategy, operations, and venture development.',
        'Program discontinuation due to COVID-19 pandemic impact on in-person learning requirements, as online format was insufficient for hands-on entrepreneurship curriculum.',
      ],
    },
  ],
  extracurriculars: [
    {
      name: 'The 14th Thailand Olympiad in Informatics',
      status: 'Participant',
      location: 'Bangkok, Thailand',
      date: {
        start: {
          month: Month.June,
          year: 2017,
        },
        end: {
          month: Month.June,
          year: 2017,
        },
      },
      details: [
        'Competed at national level in programming competition, which is a part of the International Olympiad in Informatics (IOI) pathway.',
        'Demonstrated advanced proficiency in C/C++ programming and problem-solving using complex algorithms and data structures.',
      ],
    },
  ],
} as const;

export default resumeContent;
