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


class Demo extends Component {
  render() {
    return (
      <div>
        <h1>React Smart Grid Demo</h1>

        <ReactSmartGrid
          columns={columns}
          rows={rows}
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
