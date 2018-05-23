import React from 'react'

const Page = (props) =>
  <main className='page'>
    <header className='header'>
      <h1 className='header__title'>{props.title}</h1>
      {props.action &&
        <button className='header__action button' onClick={props.onAction}>
          {props.action}
        </button>
      }
    </header>
    {props.children}
  </main>

export default Page
