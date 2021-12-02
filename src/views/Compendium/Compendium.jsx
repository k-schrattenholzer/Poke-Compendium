import { useState, useEffect } from 'react';
import { fetchShows } from '../../services/shows.js';
import ShowList from '../../components/ShowList/ShowList';

import './Compendium.css';

export default function Compendium() {
  //initialize state
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  //need useEffects here
  useEffect(() => {
    const getShows = async () => {
      const showList = await fetchShows();
      setShows(showList);
      setLoading(false);
    };
    getShows();
  }, []);

  //handleClick
  return (
    <div className='Compendium-Container'>
      <main>
          <header> hey hi </header>
          {loading? (
            <p>loading on up</p>
          ) : (
            <ShowList {...{shows}} />
          )}
      </main>
    </div>
  )
}
