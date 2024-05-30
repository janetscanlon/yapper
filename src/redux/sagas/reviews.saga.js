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

//worker Saga: will be fired when "ADD_REVIEW" actions
function* addReview(action) {
    try {

       const response = yield axios.post('/api/reviews', action.payload)
       yield put({type: 'GET_REVIEWS'})
        } catch (error) {
        console.log('Error with add Review:', error)
        
    }
}

function* deleteReview(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        
        const response = yield axios.delete(`/api/reviews/${action.payload}`, config)
        yield put({type: 'GET_REVIEWS'})
        } catch(error) {
            console.log('Error with Delete Review:', error)
        }
}

function* addLike(action) {
    try{
        const response = yield axios.post(`api/reviews/likeid:/${action.payload}`)
        yield put({type: 'GET_REVIEWS'})
    } catch(error) {
        console.log('error adding like:', error)
    }
}

function* deleteLikedReview(action){
    try{
        const response = yield axios.delete(`api/reviews/reviewid:/${action.payload}`)
        yield put({type:'DELETE_REVIEW', payload: action.payload})
    } catch(error){
        console.log('error deleting review with likes:', error)
    }
}

function* fetchSearchUsers(action){
    try{
        const response = yield axios.get(`api/reviews/search`, action.payload)
        yield put({type: 'SET_SEARCHED_USERS', payload: response.data})
    } catch(error) {
        console.log('error with searching users', error)
    }
}


function* reviewsSaga() {
   
    yield takeLatest('GET_REVIEWS', fetchReviews)
    yield takeLatest('ADD_REVIEW', addReview)
    yield takeLatest('DELETE_REVIEW', deleteReview)
    //review likes! 
    yield takeLatest('ADD_LIKE', addLike)
    yield takeLatest('DELETE_REVIEW_WITH_LIKES', deleteLikedReview) 
    //searched Users
    yield takeLatest('SEARCH_USERS', fetchSearchUsers)
}

export default reviewsSaga