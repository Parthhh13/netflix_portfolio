import React from 'react';
import './Music.css';

const playlists = [
  {
    title: "Fire Hiphop 🔥🐉",
    artists: "Drake, Travis Scott, Kendrick Lamar, J. Cole, Post Malone",
    trackCount: 92,
    imgSrc: "https://picsum.photos/seed/firehiphop/300/300",
    playlistUrl: "https://music.youtube.com/playlist?list=YOUR_PLAYLIST_ID_1"
  },
  {
    title: "Mindless Cruize ✨",
    artists: "The Weeknd, Dua Lipa, Doja Cat, Ariana Grande, BTS",
    trackCount: 48,
    imgSrc: "https://picsum.photos/seed/mindlesscruize/300/300",
    playlistUrl: "https://music.youtube.com/playlist?list=YOUR_PLAYLIST_ID_2"
  },
  {
    title: "Punjabi\\Haryanvi Drill 🍗🏢",
    artists: "AP Dhillon, Sidhu Moose Wala, Diljit Dosanjh, Karan Aujla",
    trackCount: 107,
    imgSrc: "https://picsum.photos/seed/punjabidrill/300/300",
    playlistUrl: "https://music.youtube.com/playlist?list=YOUR_PLAYLIST_ID_3"
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
            src="https://picsum.photos/seed/profile/50/50" 
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
          From the raw energy of classic rock to the modern beats of hip-hop and the soulful rhythms of Punjabi music, 
          my taste spans across genres and cultures. I believe music is the universal language that connects us all, 
          and each playlist represents a different mood, moment, or memory in my life.
        </p>
        <div className="genre-tags">
          <span className="genre-tag">Rock</span>
          <span className="genre-tag">Hip-Hop</span>
          <span className="genre-tag">Punjabi</span>
          <span className="genre-tag">Haryanvi</span>
          <span className="genre-tag">Drill</span>
          <span className="genre-tag">Classic Rock</span>
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
