import { useState, useEffect } from 'react';
import { fetchGenres, fetchShows } from '../../services/shows.js';
import Controls from '../../components/Controls/Controls';
import ShowList from '../../components/ShowList/ShowList';

import './Compendium.css';
import { getGenreShows } from '../../utils/utils.js';

export default function Compendium() {
  //initialize state
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortDir, setSortDir] = useState('Asc');

  // console.log('FUNCTION', getGenreShows(shows, selectedGenre));
  // console.log('SHOWS',shows);
  // console.log('selectedGenre',selectedGenre);
  console.log(genres);
  //need useEffects here
  useEffect(() => {
    const getShows = async () => {
      const showList = await fetchShows();
      setShows(showList);
      setLoading(false);
    };
    getShows();
  }, []);

  useEffect(() => {
    async function getGenres() {
      const showGenres = await fetchGenres();
      setGenres(showGenres);
    }
    getGenres();
  }, [])

  //handleClick
  return (
    <div className='Compendium-Container'>
      <main>
          <header> hey hi </header>
          <Controls 
          genres={genres}
          selectedGenre={selectedGenre}
          genreChange={setSelectedGenre}
          sortDir={sortDir}
          sortChange={setSortDir}
        />

          {loading? (
            <p>loading on up</p>
          ) : (
            <ShowList {...{shows}} />
          )}
      </main>
    </div>
  )
}
