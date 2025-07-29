import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';


const WorkExperience: React.FC = () => {
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
  console.log("🚀 ~ timeLineData:", timeLineData)

  const workItems = timeLineData.filter(item => item.timelineType === 'work');

  const scrollToContent = () => {
    window.scrollBy({
      top: window.innerHeight / 2,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">💼 Work Experience</h2>
        <div className={`scroll-indicator ${!showScroll ? 'hidden' : ''}`} onClick={scrollToContent}>
          <div className="scroll-arrow">↓</div>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
      <VerticalTimeline>
        {workItems.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--work`}
            contentStyle={
              index === 0
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(240, 240, 240)', color: '#fff' }
            }
            contentArrowStyle={{ borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }}
            date={item.dateRange}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', width: 70, height: 70 }}
            icon={item.logo
              ? <img src={item.logo} alt={item.name + ' logo'} style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover' }} />
              : <WorkIcon style={{ width: 40, height: 40 }} />
            }
          >
            <div style={{ color: 'black' }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
              <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
              <ul>
                {item.summaryPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
