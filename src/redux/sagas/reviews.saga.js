import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'

//worker Saga: will be fired when "GET_REVIEW" actions 
function* fetchReviews() {
    try {
        const config = {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        };
    }
}


function* reviewsSaga() {
    yield takeLatest('GET_REVIEWS', fetchReviews)
}

export default reviewsSaga