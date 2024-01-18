import React, { useState } from 'react';
import './App.css';

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
      {/* Mapping through profile images assuming they are imported or defined above */}
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
