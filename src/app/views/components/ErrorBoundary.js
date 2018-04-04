import React from 'react'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { error: false }
  }

  componentDidCatch (error, info) {
    this.setState({ error, info })
  }

  render () {
    const { error, info } = this.state
    if (error) {
      return <React.Fragment>
        <h1>Something went wrong.</h1>
        {error.message && <p>{error.message}</p>}
        <p>{info.componentStack}</p>
      </React.Fragment>
    }
    return this.props.children
  }
}

export default ErrorBoundary
