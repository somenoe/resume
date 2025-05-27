import { Document, Page, PDFViewer, Text, View } from '@react-pdf/renderer';
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
            {`${content.personalInfo.location} | ${content.personalInfo.phone} | ${content.personalInfo.email} | ${content.personalInfo.linkedin}`}
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
              <Text style={tw('text-xs font-bold leading-5')}>
                {category.charAt(0).toUpperCase() +
                  category.slice(1).replace(/([A-Z])/g, ' $1')}
                :{' '}
              </Text>
              <Text style={tw('flex-1 text-xs leading-5')}>{skills}</Text>
            </View>
          ))}
        </View>

        {/* Experience Section */}
        <View>
          <SectionHeader title="EXPERIENCE" />
          {content.experience.map((job, index) => (
            <View key={index}>
              <View style={tw('mt-1 flex flex-row justify-between')}>
                <Text style={tw('text-sm font-bold')}>{job.company}</Text>
                <Text style={tw('text-sm font-bold')}>
                  {`${job.startDate} - ${job.endDate}`}
                </Text>
              </View>
              <View style={tw('mb-1 flex flex-row justify-between')}>
                <Text style={tw('text-sm')}>{job.title}</Text>
                <Text style={tw('text-sm italic')}>{job.location || ''}</Text>
              </View>
              {job.responsibilities.map((responsibility, idx) => (
                <BulletPoint key={idx} text={responsibility} />
              ))}
            </View>
          ))}
        </View>

        {/* Projects Section */}
        <View>
          <SectionHeader title="PROJECTS" />
          {content.projects.map((project, index) => (
            <View key={index}>
              <View style={tw('my-1 flex flex-row justify-between')}>
                <Text style={tw('text-sm font-bold')}>
                  {`${project.title}, `}
                  <Text style={tw('font-normal italic')}>
                    {project.organization}
                  </Text>
                </Text>
                <Text style={tw('text-sm font-bold')}>
                  {`${project.startDate} - ${project.endDate}`}
                </Text>
              </View>
              {project.details.map((detail, idx) => (
                <BulletPoint key={idx} text={detail} />
              ))}
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View>
          <SectionHeader title="EDUCATION" />
          {content.education.map((edu, index) => (
            <View key={index}>
              <View style={tw('flex flex-row justify-between')}>
                <Text style={tw('text-sm font-bold')}>
                  {edu.university}
                  <Text style={tw('font-normal')}>
                    {edu.college ? `, ${edu.college}` : ''}
                  </Text>
                </Text>
                <Text style={tw('text-sm font-bold')}>
                  {edu.graduationDate}
                </Text>
              </View>
              <View style={tw('flex flex-row justify-between')}>
                <Text style={tw('text-sm')}>{edu.degree}</Text>
                <Text style={tw('text-sm')}>{edu.gpa}</Text>
              </View>
              <Text style={tw('text-xs italic')}>
                {`Relevant Coursework: ${edu.coursework}`}
              </Text>
            </View>
          ))}
        </View>
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
