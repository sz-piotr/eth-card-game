import React from 'react'
import Pager from './Pager'

function Paginated ({ children, data = [], page, itemsPerPage, onChange }) {
  const minIndex = page * itemsPerPage
  const maxIndex = (page + 1) * itemsPerPage
  const pageCount = Math.max(Math.ceil(data.length / itemsPerPage), 1)

  const pager = <Pager page={page} count={pageCount} onChange={onChange} />

  return <React.Fragment>
    {pager}
    {children(data.filter((item, index) =>
      index >= minIndex && index < maxIndex
    ))}
    {pager}
  </React.Fragment>
}

export default Paginated
