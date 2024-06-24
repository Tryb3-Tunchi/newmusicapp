"use client";
import { useState, useEffect } from "react";
import { getMusicData } from "./api/page";

const Home = () => {
  const [musicData, setMusicData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMusicData("eminem");
        setMusicData(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(), [];
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>error loading music data: {error.message}</p>
    
  

  return (
    <div>
      <h2> Music List</h2>
      <div>
        {musicData.map((song, index) => (
          <li key={index}>{song.name}</li>
        ))}
      </div>
    </div>
  );
};

export default Home;
