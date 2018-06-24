import React from 'react'
import { Link } from 'react-router-dom'
import arenas from '../../../data/arenas.json'
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
    <h2 className='page-title-secondary'>Start a new battle</h2>
    <nav>
      <ul className='arena-select'>
        {arenas.map((arena, id) => <ArenaOption id={id} image={arena.image}
          name={arena.name}
          description={arena.description}
        />)}
      </ul>
    </nav>
  </section>

export default ArenaSelection
