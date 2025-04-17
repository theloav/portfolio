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
        <h2 className="text-4xl font-bold text-center text-white mb-16">Experience, Education and Certifications</h2>

        <VerticalTimeline>
          {/* Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
            date="June 2024 - June 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">Cybersecurity Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">NIELIT, Calicut</h4>
            <p>
              Managed project timelines, executed exploits using Metasploit, and collaborated with team to trace cyber attacks. Utilized Linux for tool visualization.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
            date="Oct 2023 - Nov 2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">Security Auditor Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">NTC Logistics India Private Limited, Chennai</h4>
            <p>
              Conducted firewall reviews, server security audits, and assessed web applications for vulnerabilities through penetration testing and code review.
            </p>
          </VerticalTimelineElement>

          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            date="2022 - 2026"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<GraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in CSE Cybersecurity</h3>
            <h4 className="vertical-timeline-element-subtitle">Vel Tech Rangarajan Dr.Sagunthala R&D Institute, Avadi</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            date="2006 - 2021"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<GraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">Computer Science Student</h3>
            <h4 className="vertical-timeline-element-subtitle">Shanthi Rani Matric Hr. Sec. School, Kallal</h4>
          </VerticalTimelineElement>

          {/* Certifications */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            date="2025"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<Award />}
          >
            <h3 className="vertical-timeline-element-title">Certified Penetration Tester (CPT)</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            date="2024"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<Award />}
          >
            <h3 className="vertical-timeline-element-title">Windows Forensics with Belkasoft</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            date="2024"
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<Award />}
          >
            <h3 className="vertical-timeline-element-title">Advanced Digital Forensics with Belkasoft</h3>
          </VerticalTimelineElement>

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
