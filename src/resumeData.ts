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
    'Self-motivated Software Developer with experience in full-stack development and game development. Proven ability to analyze requirements, develop solutions from scratch, and manage projects independently. Strong background in modern web technologies, real-time applications, and system integration. Passionate about creating innovative solutions and continuously learning new technologies.',
  skills: {
    skills: [
      'Full-Stack Development',
      'Web Development',
      'Database',
      'UX/UI Design',
      'DevOps',
      'Linux Server',
      'Cloud Computing',
      'Cloudflare',
      'Real-Time Applications',
      'High-Performance Computing',
      'Project Management',
      'Game Development',
      'Spreedsheet Automation',
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
      title: 'Game Developer & Freelancer',
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
        'Trying to make my dream games, which is a 3D Action RPG (Elden Ring Clone) with Unreal Engine 5 using C++ and AngelScript.',
        'Learned a lot about game development, including project management, shader, physic, level design, art, music, sound and visual effect.',
        'Getting Freelance software development jobs and technical trading for funding my game project.',
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
        "Set up social media accounts, online selling apps and created content for the company's products.",
        'Learned a lot about managing small company, import-export business, hair-related products and services.',
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
        "Analyzed and developed the company's internal software form scratch, which is a real-time application for managing the company's suppling, inventory, sale, delivery, and accounting.",
        'Started with defining the requirements, then create prototypes using Google Sheets and low-code tools, and finally developed the application using Qwik.js, React.js, Next.js, PWAs, PocketBase, SQLite.',
        "Created tool for integrating the application with the company's existing software, such as the accounting system",
        'Used Line APIs to create a chatbot, which is integrated with my system to provide alternative way for users to interact with the system.',
        'Seted up domain name and deployed the application on Cloudflare for front-end and VPS for back-end.',
        'Inquired system requirements, developed, teached the operators, and dogfooding to perfect the system.',
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
        'This is Open University, so I can study by myself, forcing me to be self-motivated and disciplined.',
        'Worked while studying, which helped me develop time management skills and the ability to balance multiple responsibilities.',
        'Took extra course, reduce my study time in half and I have never fail any tests.',
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
        'Studied basic business and entrepreneurship concepts, which helped me understand how to start and manage a business.',
        'Quit this program due to COVID-19 pandemic, due to Covid-19 pandemic, I was unable to attend classes in person and the online classes were not effective for this type of program.',
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
        'Participated in the national level programming competition, which is a part of the International Olympiad in Informatics (IOI).',
        'Proficient in C/C++, solved problems using algorithm and data structure.',
      ],
    },
  ],
} as const;

export default resumeContent;
