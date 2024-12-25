import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Timeline() {
  return (
    <div className="bg-gray-900 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-16">Experience & Education</h2>
        
        <VerticalTimeline>
          {/* Work Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
            date="Oct 2023 - Nov 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">Security Auditor Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">NTC Logistics India Private Limited</h4>
            <p>
              Conducted firewall reviews, server security audits, and web application assessments
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="Nov 2023 - Jan 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">Cybersecurity Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Google Cybersecurity</h4>
            <p>
              Developed security testing services and automated testing processes
            </p>
          </VerticalTimelineElement>

          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            date="2022 - Present"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<GraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in CSE Cybersecurity</h3>
            <h4 className="vertical-timeline-element-subtitle">Vel Tech Rangarajan Dr.Sagunthala R&D Institute</h4>
          </VerticalTimelineElement>

          {/* Certifications */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            date="2023"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<Award />}
          >
            <h3 className="vertical-timeline-element-title">Google Cybersecurity Professional Certificate</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </motion.div>
    </div>
  );
}