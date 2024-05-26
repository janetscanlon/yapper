import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'

//worker Saga: will be fired when 'FETCH_REVIEW_LIKES' actions // GET's the review's likes
function* fetchReviewLikes(action) {
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
        
        const response = yield axios.get(`api/reviews/likeid:/${action.payload}`, config)
        yield put({type: 'SET_LIKES', payload: response.data})
        console.log('response.data is:', response.data)
    } catch(error) {
        console.log('Error with fetching ReviewLikes', error)
    }
}


function* likesSaga() {
    yield takeLatest('FETCH_REVIEW_LIKES', fetchReviewLikes)
}

export default likesSaga