import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'

//worker Saga: will be fired when 'FETCH_REVIEW_LIKES' actions // GET's the review's likes
function* fetchReviewLikes(action) {
    try{
        console.log('in fetchReviewLikes')
    } catch(error) {
        console.log('Error with fetching ReviewLikes', error)
    }
}


function* likesSaga() {
    yield takeLatest('FETCH_REVIEW_LIKES', fetchReviewLikes)
}

export default likesSaga