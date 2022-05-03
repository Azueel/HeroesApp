import {useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {

     
      const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher] );

      return (
      <>
            <h1>HeroList - {publisher}</h1>

            <div className='animate__animated animate__fadeIn row rows-cols-1 row-cols-md-3 g-3'>
                  
                  {
                        heroes.map(hero => (
                              <HeroCard 
                                    key={hero.id}
                                    {...hero}
                              />
                        ))
                  }
                  
            </div>
      </>
  )
}
