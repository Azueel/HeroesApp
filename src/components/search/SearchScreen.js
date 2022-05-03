import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import queryString from 'query-string'
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  //navigate del search
  const navigate = useNavigate();
  //da la ubicacion de nuestro search
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  
  

  const {searchText} = formValues;

  const heroesFileted = useMemo( () => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    //url del personaje buscado
    navigate(`?q=${searchText}`)
  }

  return (
    <>
          <h1>Search</h1>
          <hr/>

          <div className='row'>
            <div className='col-5'>
                <h4>Buscar</h4>
                <hr/>

                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        placeholder='Buscar Heroe' 
                        className='form-control' 
                        name="searchText" 
                        autoComplete='off'
                        value={searchText}
                        onChange={handleInputChange}
                    />

                    <button type='submit' className='btn btn-outline-primary mt-2'>
                      Buscar...
                    </button>
                </form>
            </div>

            <div className='col-7'>
                <h4>Resultados</h4>
                <hr/>

                {
                  (q === '') ? <div className='alert alert-info'>Buscar un Heroe</div> 
                  : (heroesFileted.length === 0 ) && <div className='alert alert-danger'>No Hay Resultados: {q}</div>
                }

                {
                  heroesFileted.map(hero => (
                    <HeroCard
                      key={hero.id}
                      {...hero}
                    />
                  ))
                }
            </div>
          </div>
    </>
  )
}
