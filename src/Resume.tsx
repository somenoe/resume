import { Document, Page, Text, View } from '@react-pdf/renderer';

import { createTw } from 'react-pdf-tailwind';

const DATA = {
  personalInfo: {
    name: 'John Lemon',
    email: 'john.lemon@email.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    website: 'https://johnlemon.dev',
  },
  summary:
    'Experienced Software Engineer with 5+ years of expertise in full-stack development, specializing in React, TypeScript, and Node.js. Proven track record of building scalable web applications and leading cross-functional teams to deliver high-quality products.',
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      startDate: 'January 2022',
      endDate: 'Present',
      responsibilities: [
        'Led development of a React-based dashboard that increased user engagement by 40%',
        'Implemented TypeScript across legacy codebase, reducing bugs by 30%',
        'Mentored 3 junior developers and conducted code reviews',
        'Collaborated with product managers to define technical requirements',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      startDate: 'March 2020',
      endDate: 'December 2021',
      responsibilities: [
        'Built responsive web applications using React and Node.js',
        'Developed RESTful APIs serving 10,000+ daily active users',
        'Optimized database queries resulting in 50% faster load times',
        'Participated in agile development processes and sprint planning',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'Web Agency Pro',
      location: 'Oakland, CA',
      startDate: 'June 2019',
      endDate: 'February 2020',
      responsibilities: [
        'Created custom WordPress themes and plugins for client websites',
        'Implemented responsive designs using HTML, CSS, and JavaScript',
        'Collaborated with designers to ensure pixel-perfect implementations',
        'Maintained and updated existing client websites',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      graduationDate: 'May 2019',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Docker',
    'Git',
    'HTML/CSS',
    'REST APIs',
    'GraphQL',
    'Jest',
    'Agile/Scrum',
  ],
} as const;

function Resume() {
  const tw = createTw({});

  return (
    <Document>
      <Page size="A4" style={tw('bg-white p-8')}>
        <View style={tw('mb-5 text-center')}>
          <Text style={tw('text-mango mb-1 text-xl font-bold')}>
            {DATA.personalInfo.name}
          </Text>
          <Text style={tw('mb-0.5 text-sm text-gray-500')}>
            {DATA.personalInfo.email}
          </Text>
          <Text style={tw('mb-0.5 text-sm text-gray-500')}>
            {DATA.personalInfo.phone}
          </Text>
          <Text style={tw('mb-0.5 text-sm text-gray-500')}>
            {DATA.personalInfo.location}
          </Text>
          {DATA.personalInfo.website ? (
            <Text style={tw('mb-0.5 text-sm text-gray-500')}>
              {DATA.personalInfo.website}
            </Text>
          ) : null}
        </View>

        <View style={tw('mb-4')}>
          <Text
            style={tw('mb-2 border-b border-black pb-0.5 text-lg font-bold')}
          >
            Professional Summary
          </Text>
          <Text style={tw('mb-0.5 text-sm leading-snug')}>{DATA.summary}</Text>
        </View>

        <View style={tw('mb-4')}>
          <Text
            style={tw('mb-2 border-b border-black  pb-0.5 text-lg font-bold')}
          >
            Professional Experience
          </Text>
          {DATA.experience.map((job, index) => (
            <View key={index} style={tw('mb-3')}>
              <Text style={tw('mb-0.5 text-base font-bold')}>{job.title}</Text>
              <Text
                style={tw('mb-0.5 text-sm font-bold')}
              >{`${job.company} - ${job.location}`}</Text>
              <Text
                style={tw('mb-1 text-xs text-gray-500')}
              >{`${job.startDate} - ${job.endDate}`}</Text>
              {job.responsibilities.map((responsibility, idx) => (
                <Text key={idx} style={tw('mb-0.5 text-sm leading-snug')}>
                  {`• ${responsibility}`}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={tw('mb-4')}>
          <Text
            style={tw('mb-2 border-b border-black pb-0.5 text-lg font-bold')}
          >
            Education
          </Text>
          {DATA.education.map((edu, index) => (
            <View key={index} style={tw('mb-3')}>
              <Text style={tw('mb-1 text-sm')}>{edu.degree}</Text>
              <Text
                style={tw('mb-1 text-sm')}
              >{`${edu.school} - ${edu.location}`}</Text>
              <Text style={tw('mb-1 text-xs text-gray-500')}>
                {edu.graduationDate}
              </Text>
            </View>
          ))}
        </View>

        <View style={tw('mb-4')}>
          <Text
            style={tw('mb-2 border-b border-black pb-0.5 text-lg font-bold')}
          >
            Technical Skills
          </Text>
          <View style={tw('flex-row flex-wrap')}>
            {DATA.skills.map((skill, index) => (
              <Text key={index} style={tw('mb-1 mr-3 text-sm')}>
                {`• ${skill}`}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Resume;
