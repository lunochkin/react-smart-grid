import assocPath from 'ramda/src/assocPath'

const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
const SET_TOTAL = 'SET_TOTAL'
const SET_ROWS = 'SET_ROWS'
const SET_COL_DEFS = 'SET_COL_DEFS'
const SET_CALCULATED_WIDTH = 'SET_CALCULATED_WIDTH'
const SET_CELL_VALUE = 'SET_CELL_VALUE'
const SET_EDITING_COORDS = 'SET_EDITING_COORDS'


const defaultEditingCoords = {
  index: -1,
  key: ''
}

const initialState = {
  pagination: {
    pageNumber: 1,
    pageSize: 20,
    total: 0
  },
  width: 0,
  colDefs: [],
  rows: [],
  editingCoords: defaultEditingCoords
}


export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PAGE_NUMBER:
      return assocPath(['pagination', 'pageNumber'], payload.pageNumber, state)
    case SET_TOTAL:
      return assocPath(['pagination', 'total'], payload.total, state)
    case SET_ROWS:
      return {...state, rows: payload}
    case SET_COL_DEFS:
      return {...state, colDefs: payload}
    case SET_CALCULATED_WIDTH:
      return {...state, width: payload.width}
    case SET_CELL_VALUE:
      return assocPath(['rows', payload.index, payload.colDef.key], payload.value, state)
    case SET_EDITING_COORDS:
      return {...state, editingCoords: payload || defaultEditingCoords}
    default:
      return state
  }
}


export const setPageNumber = pageNumber => ({
  type: SET_PAGE_NUMBER,
  payload: {pageNumber}
})

export const setTotal = total => ({
  type: SET_TOTAL,
  payload: {total}
})

const setRows = rows => ({
  type: SET_ROWS,
  payload: rows
})

const setColDefs = colDefs => ({
  type: SET_COL_DEFS,
  payload: colDefs
})

const setCalculatedWidth = width => ({
  type: SET_CALCULATED_WIDTH,
  payload: {width}
})

export const setEditingCoords = (index, key) => ({
  type: SET_EDITING_COORDS,
  payload: {index, key}
})

export const clearEditingCoords = () => ({
  type: SET_EDITING_COORDS,
  payload: defaultEditingCoords
})


const colDefDefault = {
  width: 100
}

const processColDefs = colDefs => {
  let left = 0
  const result = []
  for (let i = 0; i < colDefs.length; i++) {
    const colDef = {...colDefDefault, ...colDefs[i]}
    colDef.left = left

    left += colDef.width
    result.push(colDef)
  }

  return result
}

export const initColDefs = columns => dispatch => {

  const colDefs = processColDefs(columns)

  dispatch(setColDefs(colDefs))

  
  const width = colDefs.reduce((result, one) => result + one.width, 0)

  return dispatch(setCalculatedWidth(width))
}

export const initRows = rows => dispatch => {
  dispatch(setRows(rows))
  return dispatch(setTotal(rows.length))
}

export const setCellValue = (index, colDef, value) => ({
  type: SET_CELL_VALUE,
  payload: {index, colDef, value}
})


const getVisibleUncached = state => {
  const {pageSize, pageNumber, total} = state.pagination

  const offset = pageSize * (pageNumber - 1)
  const to = Math.min(offset + pageSize, total)

  return Array.from({length: to - offset}, (one, index) => index + offset)
}

const memoize = (fn, keyFn) => {
  let lastKey = null
  let result = null

  return param => {

    const key = keyFn(param)

    if (lastKey !== key) {
      lastKey = key
      result = fn(param)
    }

    return result
  }
}

export const getVisible = memoize(getVisibleUncached, state => state.pagination)


export const getCellValue = (state, index, key) =>
  state.rows[index][key]
