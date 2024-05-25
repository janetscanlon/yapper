import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'

function* fetchReviewToEdit(action) {
    //send a GET request to the database for the individual review 
    //that the user wants to edit 
    console.log('in review to edit! action.payload is:', action.payload)

    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }

        const response = yield axios.get(`/api/reviews/${action.payload}`, config)
        yield put({type: 'SET_REVIEW_TO_EDIT', payload: response.data})
    } catch(error){
        console.log('error with Edit Review:', error)
    }
}

function* updateReview(action) {
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }

        const editedReview = action.payload 
        
        axios.put(`/api/reviews/${editedReview.id}`, editedReview, config)
        yield put({type: 'GET_REVIEWS'})
    } catch (error){
        console.log('UPDATE REVIEW error', error)
    }
}



function* editReviewsSaga() {
    yield takeLatest('FETCH_REVIEW_TO_EDIT', fetchReviewToEdit)
    //ADD YIELD UPDATE_REVIEW HERE 
    yield takeLatest('UPDATE_REVIEW', updateReview)
}


export default editReviewsSaga