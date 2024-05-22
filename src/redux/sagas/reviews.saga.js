import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'

//worker Saga: will be fired when "GET_REVIEW" actions 
function* fetchReviews() {
    try {
        const config = {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        };

        // ^^ check and see if the user is logged in, and will return their information 
        // from the server session (req.user)

        const response = yield axios.get('/api/reviews', config)

        yield put({ type: 'SET_REVIEWS', payload: response.data})
    }   catch(error) {
        console.log('User get reviews failed', error)
    }
}




function* reviewsSaga() {
    yield takeLatest('GET_REVIEWS', fetchReviews)
}

export default reviewsSaga