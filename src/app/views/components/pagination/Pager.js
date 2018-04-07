import React from 'react'
import classnames from 'classnames'

const VOID = 'javascript:void(0)'

const PagerPrev = ({ onClick }) =>
  <li className='pager-item pager-item--prev'>
    <a href={VOID} onClick={onClick} aria-label='Previous'>&lt;</a>
  </li>

const PagerNext = ({ onClick }) =>
  <li className='pager-item pager-item--next'>
    <a href={VOID} onClick={onClick} aria-label='Next'>&gt;</a>
  </li>

const PagerItem = ({ children, active, onClick }) =>
  <li className={classnames('pager-item', active && 'pager-item--active')}>
    <a href={VOID} onClick={onClick}>{children}</a>
  </li>

const PagerDots = () =>
  <li className='pager-dots'>
    ...
  </li>

const Pager = ({ page, count, onChange }) => {
  const pages = []
  for (let i = page - 2; i <= page + 2; i++) {
    if (i >= 0 && i < count) {
      pages.push(i)
    }
  }

  const showPrev = page !== 0
  const showNext = page !== count - 1

  const showFirst = pages[0] > 0
  const showFirstDots = pages[0] > 1
  const showLast = count > 1 && pages[pages.length - 1] < count - 1
  const showLastDots = showLast && pages[pages.length - 1] < count - 2

  return (
    <nav className='pager' role='navigation'>
      <ul>
        {showPrev && <PagerPrev onClick={() => onChange(page - 1)} />}
        {showFirst && <PagerItem onClick={() => onChange(0)}>1</PagerItem>}
        {showFirstDots && <PagerDots />}
        {pages.map(number =>
          <PagerItem key={number} active={number === page} onClick={() => onChange(number)}>
            {number + 1}
          </PagerItem>
        )}
        {showLastDots && <PagerDots />}
        {showLast && <PagerItem onClick={() => onChange(count - 1)}>{count}</PagerItem>}
        {showNext && <PagerNext onClick={() => onChange(page + 1)} />}
      </ul>
    </nav>
  )
}

export default Pager
