const projectsReducer = (state, action) => {
  let newFilters = null

  switch (action.type) {
    case 'SET_PROJECTS':
      return {
        ...state,
        projects: action.payload
      };
    case 'ADD_FILTER':
      newFilters = state.filters.concat(action.payload)
      return {
        ...state,
        filters: newFilters
      }
    case 'REMOVE_FILTER':
      newFilters = state.filters.filter(item => item !== action.payload)
      return {
        ...state,
        filters: newFilters
      }
    default:
      return state;
  }
};

export default projectsReducer;
