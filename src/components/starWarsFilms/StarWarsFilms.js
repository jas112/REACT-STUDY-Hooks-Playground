import React, {useState, useEffect} from 'react';

function StarWarsFilms() {
    const [filmId, setFilmId] = useState(1);

  return (
    <div className='StarWarsFilms App-module'>
        <h1>StarWars Films</h1>
        <div className='StarWarsFilms-console App-module'>
            <div className='StarWarsFilms-console-select App-module'>
                <h1>Select a Star Wars Adventure ({filmId})</h1>
                <select value={filmId} onChange={evt => setFilmId(evt.target.value)}>
                    <option value='1'>Star Wars 1</option>
                    <option value='2'>Star Wars 2</option>
                    <option value='3'>Star Wars 3</option>
                    <option value='4'>Star Wars 4</option>
                    <option value='5'>Star Wars 5</option>
                    <option value='6'>Star Wars 6</option>
                    <option value='7'>Star Wars 7</option>
                </select>
            </div>
            <div className='StarWarsFilms-console-display App-module'>

            </div>
        </div>
    </div>
  )
}

export default StarWarsFilms;