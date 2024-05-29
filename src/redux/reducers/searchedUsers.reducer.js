const searchedUsersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCHED_USERS':
          return action.payload;
        default:
          return state;
      }
}


export default searchedUsersReducer