import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api'
import StarshipCard from "./components/StarshipCard";
import './styles.css'

function App() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const starship = await getAllStarships();
      setData(starship);
    } catch (err) {
      console.error(err);
    };
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1 className="top">STAR WARS STARSHIPS</h1>
      <div className="card">
        {data.map((starship, i) => (
          <StarshipCard key={i} name={starship.name} />
        ))}
      </div>

    </div>
  )
}

export default App
