import {
  Document,
  Page,
  PDFViewer,
  Text,
  View,
  Link,
} from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';
import content from './resumeData';

const tw = createTw({});

function SectionHeader({ title }: { title: string }) {
  return (
    <Text style={tw('my-2 border-b border-black text-lg font-bold leading-5')}>
      {title}
    </Text>
  );
}

function BulletPoint({ text }: { text: string }) {
  return (
    <View style={tw('mb-1 flex flex-row')}>
      <Text style={tw('w-3 text-xs leading-5')}>•</Text>
      <Text style={tw('flex-1 text-xs leading-5')}>{text}</Text>
    </View>
  );
}

function DateLocationHeader({
  title,
  subtitle,
  date,
  location,
}: {
  title: string;
  subtitle: string;
  date: {
    start: { month: string; year: number };
    end: { month?: string; year?: number };
  };
  location: string;
}) {
  const dateString = `${date.start.month} ${date.start.year} - ${
    date.end.month ? `${date.end.month} ${date.end.year}` : 'Present'
  }`;

  return (
    <>
      <View style={tw('mt-1 flex flex-row justify-between')}>
        <Text style={tw('text-sm font-bold')}>{title}</Text>
        <Text style={tw('text-sm font-bold')}>{dateString}</Text>
      </View>
      <View style={tw('mb-1 flex flex-row justify-between')}>
        <Text style={tw('text-sm')}>{subtitle}</Text>
        <Text style={tw('text-sm italic')}>{location}</Text>
      </View>
    </>
  );
}

function Resume() {
  return (
    <Document>
      <Page size="A4" style={tw('bg-white p-8')}>
        {/* Header Section */}
        <View style={tw('text-center')}>
          <Text style={tw('text-2xl font-bold leading-5')}>
            {content.personalInfo.name}
          </Text>
          <Text style={tw('text-xs')}>
            {`${content.personalInfo.location.city}, ${content.personalInfo.location.country} | ${content.personalInfo.phone} | ${content.personalInfo.email}`}
            {content.personalInfo.websites.map((website, index) => (
              <Text key={index}>
                {' | '}
                <Link src={'https://' + website} style={tw('text-blue-600')}>
                  {website}
                </Link>
              </Text>
            ))}
          </Text>
        </View>

        {/* Summary Section */}
        <View>
          <SectionHeader title="SUMMARY" />
          <Text style={tw('text-xs leading-5')}>{content.summary}</Text>
        </View>

        {/* Skills Section */}
        <View>
          <SectionHeader title="SKILLS" />
          {Object.entries(content.skills).map(([category, skills], index) => (
            <View key={index} style={tw('mt-0.5 flex-row')}>
              {category !== 'skills' && (
                <Text style={tw('text-xs font-bold leading-5')}>
                  {category.charAt(0).toUpperCase() +
                    category.slice(1).replace(/([A-Z])/g, ' $1')}
                  :{' '}
                </Text>
              )}
              <Text style={tw('flex-1 text-xs leading-5')}>
                {Array.isArray(skills) ? skills.join(', ') : skills}
              </Text>
            </View>
          ))}
        </View>

        {/* Experience Section */}
        <View>
          <SectionHeader title="EXPERIENCE" />
          {content.experience.map((job, index) => (
            <View key={index}>
              <DateLocationHeader
                title={job.company}
                subtitle={job.title}
                date={job.date}
                location={`${job.location.city}, ${job.location.country}`}
              />
              {job.details.map((detail, idx) => (
                <BulletPoint key={idx} text={detail} />
              ))}
            </View>
          ))}
        </View>

        {/* Projects Section */}
        {content.projects.length > 0 && (
          <View>
            <SectionHeader title="PROJECTS" />
            {content.projects.map((project, index) => (
              <View key={index}>
                <DateLocationHeader
                  title={`${project.title}, ${project.organization}`}
                  subtitle=""
                  date={project.date}
                  location=""
                />
                {project.details.map((detail, idx) => (
                  <BulletPoint key={idx} text={detail} />
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Education Section */}
        <View>
          <SectionHeader title="EDUCATION" />
          {content.education.map((edu, index) => (
            <View key={index}>
              <DateLocationHeader
                title={edu.university}
                subtitle={edu.degree}
                date={edu.date}
                location={edu.location}
              />
              {edu.details.map((detail, idx) => (
                <BulletPoint key={idx} text={detail} />
              ))}
            </View>
          ))}
        </View>

        {/* Extracurriculars Section */}
        {content.extracurriculars.length > 0 && (
          <View>
            <SectionHeader title="EXTRACURRICULARS" />
            {content.extracurriculars.map((activity, index) => (
              <View key={index}>
                <DateLocationHeader
                  title={activity.name}
                  subtitle={activity.status}
                  date={activity.date}
                  location={activity.location}
                />
                {activity.details.map((detail, idx) => (
                  <BulletPoint key={idx} text={detail} />
                ))}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}

function ResumeViewer() {
  return (
    <PDFViewer className="h-screen w-screen">
      <Resume />
    </PDFViewer>
  );
}

export default ResumeViewer;
