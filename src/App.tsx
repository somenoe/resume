import { PDFViewer, Document, Page, Text, View } from '@react-pdf/renderer';

import { createTw } from 'react-pdf-tailwind';

export const tw = createTw({});

const ResumeData = {
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
  return (
    <Document>
      <Page size="A4" style={tw('bg-white p-8')}>
        <View style={tw('mb-5 text-center')}>
          <Text style={tw('text-xl font-bold mb-1 text-mango')}>
            {ResumeData.personalInfo.name}
          </Text>
          <Text style={tw('text-sm mb-0.5 text-gray-500')}>
            {ResumeData.personalInfo.email}
          </Text>
          <Text style={tw('text-sm mb-0.5 text-gray-500')}>
            {ResumeData.personalInfo.phone}
          </Text>
          <Text style={tw('text-sm mb-0.5 text-gray-500')}>
            {ResumeData.personalInfo.location}
          </Text>
          {ResumeData.personalInfo.website ? (
            <Text style={tw('text-sm mb-0.5 text-gray-500')}>
              {ResumeData.personalInfo.website}
            </Text>
          ) : null}
        </View>

        <View style={tw('mb-4')}>
          <Text
            style={tw('text-lg font-bold mb-2 border-b border-black pb-0.5')}
          >
            Professional Summary
          </Text>
          <Text style={tw('text-sm leading-snug mb-0.5')}>
            {ResumeData.summary}
          </Text>
        </View>

        <View style={tw('mb-4')}>
          <Text
            style={tw('text-lg font-bold mb-2 border-b border-black pb-0.5')}
          >
            Professional Experience
          </Text>
          {ResumeData.experience.map((job, index) => (
            <View key={index} style={tw('mb-3')}>
              <Text style={tw('text-base font-bold mb-0.5')}>{job.title}</Text>
              <Text
                style={tw('text-sm font-bold mb-0.5')}
              >{`${job.company} - ${job.location}`}</Text>
              <Text
                style={tw('text-xs text-gray-500 mb-1')}
              >{`${job.startDate} - ${job.endDate}`}</Text>
              {job.responsibilities.map((responsibility, idx) => (
                <Text key={idx} style={tw('text-sm leading-snug mb-0.5')}>
                  {`• ${responsibility}`}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={tw('mb-4')}>
          <Text
            style={tw('text-lg font-bold mb-2 border-b border-black pb-0.5')}
          >
            Education
          </Text>
          {ResumeData.education.map((edu, index) => (
            <View key={index} style={tw('mb-3')}>
              <Text style={tw('text-sm mb-1')}>{edu.degree}</Text>
              <Text
                style={tw('text-sm mb-1')}
              >{`${edu.school} - ${edu.location}`}</Text>
              <Text style={tw('text-xs text-gray-500 mb-1')}>
                {edu.graduationDate}
              </Text>
            </View>
          ))}
        </View>

        <View style={tw('mb-4')}>
          <Text
            style={tw('text-lg font-bold mb-2 border-b border-black pb-0.5')}
          >
            Technical Skills
          </Text>
          <View style={tw('flex-row flex-wrap')}>
            {ResumeData.skills.map((skill, index) => (
              <Text key={index} style={tw('text-sm mr-3 mb-1')}>
                {`• ${skill}`}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

function App() {
  return (
    <PDFViewer className="h-screen w-screen">
      <Resume />
    </PDFViewer>
  );
}

export default App;
