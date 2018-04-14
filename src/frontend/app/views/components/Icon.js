import React from 'react'
import classnames from 'classnames'

export const Icon = ({ name, className, style }) =>
  <i
    aria-hidden='true'
    className={classnames(`icon icon-${name}`, className)}
    style={style}
  />
