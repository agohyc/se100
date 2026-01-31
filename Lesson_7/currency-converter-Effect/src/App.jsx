import './App.css'

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://api-production.data.gov.sg/v2/public/api/collections/A/metadata')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return <div>Check the console for data!</div>;
}

export default App;
