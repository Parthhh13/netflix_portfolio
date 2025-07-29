import React from 'react';
import './Music.css';

const playlists = [
  {
    title: "Fire Hiphop 🔥🐉",
    artists: "Seedhe Maut, Raftaar, Krsna, Rawal, Raga, Ikka",
    trackCount: 92,
    imgSrc: "/music/hiphop.jpg",
    playlistUrl: "https://music.youtube.com/playlist?list=PL2eVWk_y15MpCyNRFD8s6b7kzdhltLoML"
  },
  {
    title: "Mindless Cruize ✨",
    artists: "Karun, Nanku, Arpit Bala, Talwinder, Seedhe Maut",
    trackCount: 48,
    imgSrc: "/music/mindless.jpg",
    playlistUrl: "https://music.youtube.com/playlist?list=PL2eVWk_y15MrgW-GrqRAeRJXdhQJybNyp"
  },
  {
    title: "Punjabi/Haryanvi Drill 🍗🏢",
    artists: "Karan Aujla, Sidhu Moosewala, Dhanda Nyoliwala, Yo Yo Honey Singh, AP Dhillon, Shubh, Diljit Dosanjh",
    trackCount: 107,
    imgSrc: "/music/punjabi.jpg",
    playlistUrl: "https://music.youtube.com/playlist?list=PL2eVWk_y15Moi6UcnSeQkBJAZdgSH5vFR"
  }
];

const Music: React.FC = () => {
  const handlePlaylistClick = (playlistUrl: string) => {
    window.open(playlistUrl, '_blank');
  };

  return (
    <div className="music-page">
      <div className="music-header">
        <div className="profile-section">
          <img 
            src="/profile/profile-photo.jpg" 
            alt="Profile" 
            className="profile-pic"
          />
          <div className="profile-info">
            <h2 className="profile-name">PARTH PAHWA</h2>
            <h1 className="page-title">Listen again</h1>
          </div>
        </div>
      </div>

      <div className="music-intro">
        <h3>My Music Journey</h3>
        <p>
        Music is the pulse behind my projects and creativity. I thrive on the raw energy of Desi hiphop and drill, with Seedhe Maut as my #1 inspiration, and I’m a huge fan of Karan Aujla, Sidhu Moosewala, and the pioneers of modern Punjabi pop. From late-night chill rap to melodic and softcore hiphop, my playlists span everything from hype to focus.
        </p>
        <p>
        Whether I’m building AI, hitting the road, or prepping for a big performance, music sets my pace, sharpens my mood, and keeps me in my element. My favorite genres—Desi hiphop, Punjabi drill, and melodic rap—mirror my approach to work and life: bold, experimental, and always authentic. The rhythms here aren’t just background—they’re the soundtrack for ambition, creativity, and drive that define me as both an engineer and a creator.
        </p>
        <div className="genre-tags">
          <span className="genre-tag">Desi Hip-Hop</span>
          <span className="genre-tag">Punjabi Pop</span>
          <span className="genre-tag">Haryanvi drill</span>
          <span className="genre-tag">Melodic Rap</span>
        </div>
      </div>

      <div className="playlists-section">
        <h3>My Playlists</h3>
        <div className="playlists-grid">
          {playlists.map((playlist, index) => (
            <div 
              key={index} 
              className="playlist-card"
              onClick={() => handlePlaylistClick(playlist.playlistUrl)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="playlist-header">
                <img src={playlist.imgSrc} alt={playlist.title} className="playlist-cover" />
                <div className="playlist-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
              <div className="playlist-info">
                <h4 className="playlist-title">{playlist.title}</h4>
                <p className="playlist-artists">{playlist.artists}</p>
                <p className="playlist-tracks">{playlist.trackCount} tracks</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
