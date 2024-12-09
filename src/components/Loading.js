// Loading.js
import React from 'react';
import '../styles/Loading.css'; // Make sure this path matches your structure

function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-gear"></div>
    </div>
  );
}

export default Loading;
