import React, { useState } from 'react';

function Change() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyles = isDarkMode ? 
    { background: 'black', color: 'white',height:'100vh' } : 
    { background: 'white', color: 'black',height:'100vh' };

  return (
    <div style={themeStyles} className="Styling">
      <h1>{isDarkMode ? 'Darkmode' : 'Lightmode'}</h1>
      <button onClick={handleThemeChange}>Switch theme</button>
    </div>
  );
}

export default Change;