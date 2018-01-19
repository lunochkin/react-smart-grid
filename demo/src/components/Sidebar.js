import React from 'react'
import {withRouter} from 'react-router'
import {NavLink} from 'react-router-dom'


const styles = {
  root: {
    flex: 'none',
    width: 200,
    display: 'flex',
    flexDirection: 'column'
  }
}


class Sidebar extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <NavLink to="/" strict>All features</NavLink>
      </div>
    )
  }
}


export default withRouter(Sidebar)
