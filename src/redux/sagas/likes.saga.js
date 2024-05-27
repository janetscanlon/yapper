import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'

//worker Saga: will be fired when 'FETCH_REVIEW_LIKES' actions // GET's the review's likes
function* fetchReviewLikes(action) {
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
        
        const response = yield axios.get(`api/reviews/likeid:/${action.payload}`, config)
        yield put({type: 'SET_LIKES', payload: response.data})
    } catch(error) {
        console.log('Error with fetching ReviewLikes', error)
    }
}

function* addLike(action) {
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };

        const response = yield axios.post(`api/reviews/likeid:/${action.payload}`, config)
        yield put({type: 'FETCH_REVIEW_LIKES', payload: action.payload})
    } catch(error) {
        console.log('error adding like:', error)
    }
}

function* likesSaga() {
    yield takeEvery('FETCH_REVIEW_LIKES', fetchReviewLikes)
    yield takeEvery('ADD_LIKE', addLike)
}

export default likesSaga