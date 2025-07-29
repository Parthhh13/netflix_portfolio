import React from 'react';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <div className="company-logo">
            <h2>SMARRTIF AI</h2>
          </div>
          <div>
            <h3>Dieksha Priyaa Mishra</h3>
            <p>Founder & Authorized Signatory</p>
            <p className="date">10th July 2025</p>
          </div>
        </div>
        
        <div className="recommendation-body">
          <div className="letter-header">
            <h4>Letter of Recommendation</h4>
            <p>To Whom May It Concern</p>
          </div>
          
          <p>Greetings!</p>
          
          <p>It is with great pleasure that I recommend <strong>Parth</strong>, who has successfully completed his 1-month internship at <strong>SMARRTIF AI</strong> as an Associate Consultant – AI/ML Trainer.</p>
          
          <p>In a short span of time, Parth has demonstrated exceptional enthusiasm, dedication, and technical capability. He actively contributed to the development of key AI tools such as the <strong>CV Analyzer Tool</strong> and the <strong>LinkedIn Analyzer Tool</strong>, showcasing a deep understanding of AI/ML concepts and their real-world application.</p>
          
          <p>Beyond his technical work, he has also played a vital role in <strong> client acquisition efforts</strong>, directly supporting the <strong>company's revenue growth </strong>. He showed great initiative in contributing to training program design, team management, and even assisting in talent hiring for the organization—truly going beyond his core responsibilities.</p>
          
          <p>Parth's passion for the AI/ML domain and his ability to<strong> manage multiple tasks effectively </strong>makes him a promising professional. His contributions during this internship have been both impactful and appreciated.</p>
          
          <p>We wish Parth continued success in all his future endeavors and strongly recommend him for roles where innovation, leadership, and technical skill are valued.</p>
          
          <div className="letter-footer">
            <div className="contact-info">
              <p><strong>Contact Information:</strong></p>
              <p>📧 contactus@smarrtifai.com</p>
              <p>🌐 www.smarrtifai.com</p>
              <p>📞 +91-836-816-2544</p>
            </div>
            <div className="signature">
              <p><strong>Authorized Signatory</strong></p>
              <p><strong>SMARRTIF AI (OPC) PRIVATE LIMITED</strong></p>
              <p><strong>Dieksha Priyaa Mishra - Founder</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
