import React from 'react'
import { Link } from 'react-router-dom'

const ArenaOption = ({ id, image, name, description }) =>
  <li className='arena-option'><Link to={`/arena/locations/${id}`}>
    <img className='arena-option-image' src={image} />
    <div className='arena-option-info'>
      <h3 className='arena-option-title'>{name}</h3>
      <p className='arena-option-description'>{description}</p>
    </div>
  </Link></li>

const ArenaSelection = () =>
  <section>
    <h2 className='section-title'>Start a new battle</h2>
    <nav>
      <ul className='arena-select'>
        <ArenaOption id={1} image='images/arenas/urog-proving-grounds.png'
          name='Urog Proving Grounds'
          description='Level 1, common only'
        />
        <ArenaOption id={2} image='images/arenas/lone-moon.png'
          name='Lone Moon'
          description='Levels 1-2'
        />
        <ArenaOption id={3} image='images/arenas/drowned-world.png'
          name='Drowned World'
          description='Levels 2-3'
        />
        <ArenaOption id={4} image='images/arenas/ringworld.png'
          name='Ringworld'
          description='Levels 2-4'
        />
        <ArenaOption id={5} image='images/arenas/purgatory.png'
          name='Purgatory'
          description='Levels 3+'
        />
        <ArenaOption id={6} image='images/arenas/black-hole.png'
          name='GX0874C - Singularity'
          description='Levels 4+, rare and epic only'
        />
      </ul>
    </nav>
  </section>

export default ArenaSelection
