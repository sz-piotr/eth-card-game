import React from 'react'
import classnames from 'classnames'

const VOID = 'javascript:void(0)'

const FirstPagerItem = ({ onClick }) =>
  <li className='pager-item pager-item--first'>
    <a href={VOID} onClick={onClick} aria-label='First Page'>&laquo;</a>
  </li>

const LastPagerItem = ({ onClick, disabled }) =>
  <li className='pager-item pager-item--last'>
    <a href={VOID} onClick={onClick} aria-label='Last Page'>&raquo;</a>
  </li>

const PagerItem = ({ children, active, onClick }) =>
  <li className={classnames('pager-item', active && 'pager-item--active')}>
    <a href={VOID} onClick={onClick}>{children}</a>
  </li>

const Pager = ({ page, count, onChange }) => {
  const pages = []
  for (let i = page - 2; i <= page + 2; i++) {
    if (i >= 0 && i < count) {
      pages.push(i)
    }
  }

  return (
    <nav className='pager' role='navigation'>
      <ul>
        <FirstPagerItem onClick={() => onChange(0)} />
        {pages.map(number =>
          <PagerItem key={number} active={number === page} onClick={() => onChange(number)}>
            {number + 1}
          </PagerItem>
        )}
        <LastPagerItem onClick={() => onChange(count - 1)} />
      </ul>
    </nav>
  )
}

export default Pager
