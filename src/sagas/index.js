import { put, takeEvery, all } from 'redux-saga/effects'
import { GET_ITEMS, ITEM_RECEIVED } from '../constants'

function* fetchItems() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json())
  yield put({ type: ITEM_RECEIVED, json: json.articles, })
}

function* actionWatcher() {
    yield takeEvery(GET_ITEMS, fetchItems)
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ])
}
