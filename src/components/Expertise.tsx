import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython, faAws } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "AWS",
  "Terraform",
  "Linux",
  "Nginx",
  "EC2",
  "S3",
  "VPC",
  "IAM",
  "Lambda",
  "CloudWatch"
];

const labelsSecond = [
  "Docker",
  "Kubernetes",
  "CI/CD Pipelines",
  "Git",
  "GitHub Actions",
  "Helm",
  "Monitoring",
  "Auto-scaling",
  "Load Balancers",
  "Deployment Automation"
];

const labelsThird = [
  "Python",
  "Bash Scripting",
  "Automation Scripts",
  "Configuration Management",
  "Task Scheduling",
  "Log Management",
  "Scripting for Cloud Ops",
  "Infrastructure Automation",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* Cloud & Infrastructure */}
          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x"/>
            <h3>Cloud & Infrastructure</h3>
            <p>
              Building and managing scalable, secure cloud infrastructure on AWS.
              Implementing Infrastructure as Code using Terraform and configuring Nginx for high-availability applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* DevOps & Containerization */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x"/>
            <h3>DevOps & Containerization</h3>
            <p>
              Automating deployment workflows using CI/CD pipelines and container orchestration.
              Experienced with Docker and Kubernetes for reliable, production-ready deployments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Programming & Automation */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x"/>
            <h3>Programming & Automation</h3>
            <p>
              Writing scripts and automation tools with Python and Bash to streamline tasks,
              manage infrastructure, and improve operational efficiency.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;