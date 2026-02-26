import React from "react";
import cicdImg from '../assets/images/mock01.png';
import awsImg from '../assets/images/mock02.png';
import k8sImg from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';
import { Chip, Button } from '@mui/material';

const projects = [
  {
    title: "End-to-End CI/CD Pipeline for Node.js App",
    description: "Implemented a fully automated CI/CD pipeline to streamline build, test, and deployment of a Node.js application.",
    techStack: ["GitHub Actions", "Docker", "AWS ECS", "Terraform", "Node.js", "MongoDB", "S3"],
    details: [
      "Designed multi-stage GitHub Actions workflow for building, testing, and deploying code",
      "Containerized the application using Docker for consistent environments",
      "Provisioned AWS ECS cluster and related infrastructure with Terraform",
      "Implemented deployment to staging and production environments automatically",
      "Secured sensitive credentials using GitHub Secrets"
    ],
    image: cicdImg,
    githubLink: "https://github.com/waleeddevops111/cicd-nodejs"
  },
  {
    title: "AWS Cost Optimization Automation",
    description: "Reduced cloud costs by ~30% using automated scripts and AWS best practices.",
    techStack: ["AWS CLI", "Python", "Bash", "Terraform", "CloudWatch", "S3", "EC2"],
    details: [
      "Analyzed AWS resources to identify underutilized EC2 instances",
      "Scheduled EC2 start/stop using Python and Bash scripts",
      "Implemented S3 lifecycle policies for infrequently accessed objects",
      "Monitored costs with CloudWatch and automated alerts",
      "Applied Terraform for infrastructure provisioning and tracking changes"
    ],
    image: awsImg,
    githubLink: "https://github.com/waleeddevops111/aws-cost-optimization"
  },
  {
    title: "Kubernetes Cluster Deployment & Automation",
    description: "Automated deployment and scaling of containerized applications using Kubernetes and Helm charts.",
    techStack: ["Kubernetes", "Helm", "Docker", "AWS EKS", "Terraform", "Prometheus", "Grafana"],
    details: [
      "Provisioned Kubernetes clusters on AWS EKS using Terraform",
      "Deployed microservices using Docker containers and Helm charts",
      "Implemented auto-scaling and rolling updates for high availability",
      "Set up Prometheus & Grafana for monitoring and alerts",
      "Configured Ingress controllers and Load Balancers for external access"
    ],
    image: k8sImg,
    githubLink: "https://github.com/waleeddevops111/k8s-project"
  }
];

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="zoom"
              onClick={() => window.open(project.githubLink, "_blank")} 
              width="100%"
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="chips">
              {project.techStack.map((tech, idx) => (
                <Chip key={idx} label={tech} className="chip" />
              ))}
            </div>
            <ul>
              {project.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => window.open(project.githubLink, "_blank")}
            >
              View on GitHub
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;