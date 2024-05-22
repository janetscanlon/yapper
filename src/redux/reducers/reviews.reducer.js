const reviewsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_REVIEW':
          return action.payload;
        default:
          return state;
      }
}

export default reviewsReducer