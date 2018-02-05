import React from 'react'
import faker from 'faker'
import ReactSmartGrid from '../../../src'
import InputNumber from '../../../src/components/widgets/InputNumber'
import InputDate from '../../../src/components/widgets/InputDate'
import InputCheckbox from '../../../src/components/widgets/InputCheckbox'


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
    key: 'firstName',
    editable: true
  },
  {
    key: 'street'
  },
  {
    key: 'zipCode',
    editable: true,
    component: InputNumber
  },
  {
    key: 'date',
    editable: true,
    component: InputDate
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
  },
  {
    key: 'earthman',
    editable: true,
    component: InputCheckbox
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
    sentence: faker.lorem.sentence(),
    earthman: faker.random.boolean()
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


export default props =>
  <ReactSmartGrid
    columns={columns}
    rows={rows}
    height={'100%'}
  />
