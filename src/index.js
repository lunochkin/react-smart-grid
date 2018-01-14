import React from 'react'
import Grid from './Grid'

import './styles/index.css'

export default class extends React.Component {
  render() {
    return <Grid {...this.props} />
  }
}
