import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';

const Education: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!timeLineData) return <div>Loading...</div>;

  const educationItems = timeLineData.filter(item => item.timelineType === 'education');

  const scrollToContent = () => {
    window.scrollBy({
      top: window.innerHeight / 2,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">🎓 Education</h2>
        <div className={`scroll-indicator ${!showScroll ? 'hidden' : ''}`} onClick={scrollToContent}>
          <div className="scroll-arrow">↓</div>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
      <VerticalTimeline>
        {educationItems.map((item, index) => {
          // Split summaryPoints into main details and achievements
          const achievementIndex = item.summaryPoints.findIndex(point => point.toLowerCase().includes('key achievement'));
          const mainDetails = achievementIndex !== -1 ? item.summaryPoints.slice(0, achievementIndex) : item.summaryPoints;
          const achievements = achievementIndex !== -1 ? item.summaryPoints.slice(achievementIndex + 1) : [];
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(255, 224, 230)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(255, 224, 230)' }}
              date={item.dateRange}
              iconStyle={{ background: 'rgb(255, 160, 200)', color: '#fff' }}
              icon={item.logo ? <img src={item.logo} alt={item.name + ' logo'} style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover' }} /> : <SchoolIcon />}
            >
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <ul>
                  {mainDetails.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                {achievements.length > 0 && (
                  <>
                    <div style={{ fontWeight: 'bold', marginTop: 10, marginBottom: 5, color: '#e50914' }}>Key Achievements:</div>
                    <ul>
                      {achievements.map((ach, idx) => (
                        <li key={idx}>{ach.replace(/^•\s*/, '')}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};

export default Education; 