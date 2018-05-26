import React from 'react'
import { Route } from 'react-router-dom'

import Icon from './Icon'

const BackButton = () =>
  <Route path='/' render={(props) =>
    <button className='header__back-button' onClick={() => props.history.goBack()}>
      <Icon name='chevron-left' />
    </button>
  } />

const Page = (props) =>
  <main className='page'>
    <header className='header'>
      {props.showBackButton && <BackButton />}
      <h1 className='header__title'>{props.title}</h1>
    </header>
    {props.children}
  </main>

export default Page
