const reviewToEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_REVIEW_TO_EDIT':
          return action.payload;
        case 'EDIT_BOOK_TITLE':
          return {...state, book_title: action.payload}
        case 'EDIT_BOOK_AUTHOR':
          return {...state, book_author: action.payload}
        case 'EDIT_BOOK_GENRE':
          return {...state, genre: action.payload}
        case 'EDIT_BOOK_RATING':
          return {...state, rating: action.payload}
        case 'EDIT_BOOK_REVIEW_INPUT':
          return {...state, review_input: action.payload}     
        default:
          return state;
      }
}

//add listeners for all of the edited inputs 
export default reviewToEdit