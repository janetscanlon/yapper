const reviewToEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_REVIEW_TO_EDIT':
          return action.payload;
        default:
          return state;
      }
}

//add listeners for all of the edited inputs 
export default reviewToEdit