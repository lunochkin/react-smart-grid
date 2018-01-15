import React from 'react'
import Grid from './Grid'


import './styles/index.css'
import './styles/theme-material.css'


export default class extends React.Component {
  render() {
    return <Grid {...this.props} />
  }
}
