import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import GithubMark from './components/GithubMark'
import Sidebar from './components/Sidebar'
import AllFeatures from './routes/AllFeatures'


const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  mainRow: {
    display: 'flex',
  },
  content: {
    overflow: 'hidden'
  },
  githubLink: {
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
    textDecoration: 'none'
  }
}

class App extends React.Component {
  render() {
    const basename = process.env.NODE_ENV === 'production' ? '/react-smart-grid' : '/'

    return (
      <Router basename={basename}>
        <div style={styles.root}>
          <a style={styles.githubLink} href="https://github.com/lunochkin/react-smart-grid">
            View on GitHub <GithubMark />
          </a>

          <h1>
            React Smart Grid Demo
          </h1>


          <div style={styles.mainRow}>
            <Sidebar />
            <main style={styles.content}>
              <Route path="/" exact component={AllFeatures} />
            </main>
          </div>
        </div>
      </Router>
    )
  }
}


export default App
