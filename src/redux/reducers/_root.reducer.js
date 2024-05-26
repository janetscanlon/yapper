import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import reviews from './reviews.reducer'
import reviewToEdit from './reviewToEdit.reducer'
import likes from './likes.reducer'
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  reviews, //contains the reviews info from the db
  reviewToEdit, //contains the single review to edit from the db
  likes, //contains the like count for the review
});

export default rootReducer;
