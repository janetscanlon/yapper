import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'

function* fetchReviewToEdit(action) {
    console.log('in review to edit! action.payload is:', action.payload)
}




function* editReviewsSaga() {
    yield takeLatest('FETCH_REVIEW_TO_EDIT', fetchReviewToEdit)
}


export default editReviewsSaga