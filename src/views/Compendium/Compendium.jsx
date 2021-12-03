import { useState, useEffect } from 'react';
import { fetchGenres, fetchShows } from '../../services/shows.js';
import Controls from '../../components/Controls/Controls';
import ShowList from '../../components/ShowList/ShowList';

import './Compendium.css';
import { findByGenre } from '../../utils/utils.js';

export default function Compendium() {
  //initialize state
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortDir, setSortDir] = useState('Asc');


  console.log('FUNCTION', findByGenre(shows, selectedGenre));


  
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

  useEffect(() => {
    async function getFilteredShows() {
      if(!setSelectedGenre) return;

        setLoading(true);
      if(selectedGenre === 'All') {
        const showList = await fetchShows();
        setShows(showList);
        setLoading(false);
      } else {
        const showList = await fetchShows();
        const filteredList = findByGenre(showList, selectedGenre);
        setShows(filteredList);
      }
      setLoading(false);
      }
      getFilteredShows();
    }, [selectedGenre]);

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
