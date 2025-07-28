import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaUniversity, FaBuilding, FaBriefcase } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee, SiNvidia } from 'react-icons/si';
import { Certification } from '../types';
import { getCertifications } from '../queries/getCertifications';

const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />,
  'nvidia': <SiNvidia className="nvidia-icon" />,
  'bcgx': <FaBuilding />,
  'deloitte': <FaBriefcase />
}

const Certifications: React.FC = () => {

  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => { 
    async function fetchCertifications() {
      const data = await getCertifications();
      setCertifications(data);
    }

    fetchCertifications();
  }, []);

  if (certifications.length === 0) return <div>Loading...</div>;

  // Random issue dates
  const issueDates = [
    "Jun'25", "Jul'25", "Jun'25", "Jul'25", "Jun'25", 
    "Jul'25", "Jun'25", "Jul'25", "Jun'25", "Jul'25",
    "Jun'25", "Jul'25"
  ];

  return (
    <div className="certifications-container">
      <div className="linkedin-note">
        <p>All proof of work uploaded on LinkedIn</p>
      </div>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">
                {iconData[cert.iconName] || <FaUniversity />}
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span className="issued-date">Issued {issueDates[index]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
