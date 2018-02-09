import React from 'react'
import Grid from './Grid'


import './styles/index.css'
import './styles/theme-material.css'
import './styles/fontawesome-all.js'


export default class extends React.Component {
  render() {
    return <Grid {...this.props} />
  }
}
