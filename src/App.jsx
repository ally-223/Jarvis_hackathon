import React, { useState } from 'react';
import './App.css';

// Importing images from the public folder (paths are relative to the public folder)
const profileImages = [
  '/images/DC_01548-1536x1536.webp',
  '/images/istockphoto-1386479313-612x612.jpg',
  '/images/KarenVaisman-Photography-Linkedin-Profile-Pictures-Los-Angeles-Ventura-Calabasas-WestlakeVillage-Headshot-tny.jpg',
  '/images/Marco+Profile+Picture.jpg',
  '/images/screenshot-2022-05-24-at-15-22-28.png'
];

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="app-container">
      <button className="potential-buyers-btn" onClick={() => setShowPopup(true)}>
        Potential Buyers
      </button>

      {showPopup && (
        <div className="popup-screen">
          <button className="close-popup" onClick={() => setShowPopup(false)}>×</button>
          <div className="popup-message">
            5 People are Interested!
          </div>
          <div className="profile-container">
            {profileImages.map((imageSrc, index) => (
              <div key={index} className="profile">
                <img src={imageSrc} alt={`Profile ${index + 1}`} />
                <div className="overlay">View details</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
