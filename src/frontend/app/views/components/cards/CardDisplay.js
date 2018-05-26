import React from 'react'
import classnames from 'classnames'
import CardPlaceholder from './CardPlaceholder'
import { getCardAttributes } from '../../../data'
import { fetchResourcesFor, createCardDisplay } from '../../../cards'

class CardDisplay extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
    this.attributes = getCardAttributes(props.data)
    this.display = null
    this.unmounted = false
    fetchResourcesFor(this.attributes)
      .then(() => !this.unmounted &&
        this.setState({ isLoading: false })
      )
  }

  canvasRef (ref) {
    if (ref) {
      this.display = createCardDisplay(this.attributes, ref)
    } else if (this.display) {
      this.display.stopUpdating()
    }
  }

  componentWillUnmount () {
    this.unmounted = true
  }

  render () {
    const { className, onClick } = this.props
    if (this.state.isLoading) {
      return <CardPlaceholder />
    } else {
      return <div className='card-wrapper'>
        <canvas
          ref={ref => this.canvasRef(ref)}
          className={classnames('card-display', className)}
          onClick={onClick}
        />
      </div>
    }
  }
}

export default CardDisplay
