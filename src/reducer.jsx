export const initialState = {
  employeesList: [],
  loading: false,
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        employeesList: action.payload,
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: 'Something went wrong',
      };
    case 'REMOVE':
      return {
        ...state,
        employeesList: state.employeesList.filter((employee) => {
          return employee.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
export default reducer;
