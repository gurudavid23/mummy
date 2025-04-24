import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const endpoint = "https://aps-zhu5.onrender.com/token"; // No query needed

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get(endpoint);
        setData(response.data);
      } catch (error) {
        setData({ error: "Failed to fetch token from backend." });
      }
    };

    fetchToken();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>APS Token Viewer</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
    </div>
  );
}

export default App;
