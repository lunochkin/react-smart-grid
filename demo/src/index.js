import React, {Component} from 'react'
import {render} from 'react-dom'
import faker from 'faker'
import ReactSmartGrid from '../../src'


faker.locale = 'en_US'


const columns = [
  {
    key: 'id',
    name: 'ID'
  },
  {
    key: 'avartar'
  },
  {
    key: 'lastName'
  },
  {
    key: 'county'
  },
  {
    key: 'email'
  },
  {
    key: 'title'
  },
  {
    key: 'firstName'
  },
  {
    key: 'lastName'
  },
  {
    key: 'street'
  },
  {
    key: 'zipCode'
  },
  {
    key: 'date'
  },
  {
    key: 'bs',
    width: 200
  },
  {
    key: 'catchPhrase',
    width: 200
  },
  {
    key: 'companyName',
    width: 200
  },
  {
    key: 'words',
    width: 200
  },
  {
    key: 'sentence',
    width: 300
  }
]


const createFakeRowObjectData = index => {
  return {
    id: 'id_' + index,
    avartar: faker.image.avatar(),
    county: faker.address.county(),
    email: faker.internet.email(),
    title: faker.name.prefix(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    street: faker.address.streetName(),
    zipCode: faker.address.zipCode(),
    date: faker.date.past().toLocaleDateString(),
    bs: faker.company.bs(),
    catchPhrase: faker.company.catchPhrase(),
    companyName: faker.company.companyName(),
    words: faker.lorem.words(),
    sentence: faker.lorem.sentence()
  }
}

const createRows = numberOfRows => {
  let rows = [];
  for (let i = 0; i < numberOfRows; i++) {
    rows[i] = createFakeRowObjectData(i)
  }
  return rows
}


const rows = createRows(100)


const styles = {
  svg: {
    marginLeft: 10
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

const GithubMark = () => <svg style={styles.svg} version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>

class Demo extends Component {
  render() {
    return (
      <div>
        <a style={styles.githubLink} href="https://github.com/lunochkin/react-smart-grid">
          View on GitHub <GithubMark />
        </a>

        <h1>
          React Smart Grid Demo
        </h1>

        <ReactSmartGrid
          columns={columns}
          rows={rows}
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
