const addTaskChecker = (state, action) => {
    switch (action.type) {
    case "LOGIN":{
      if (action.payload) {
        alert("success", null, action.payload.username, action.payload.user_token, "/");
        return {
          ...state,
          token: action.payload.user_token
        };
      }};
  
    case "LOGIN_ERROR":{
      if (action.payload) {
        errorAlert("error", action.payload);
        return {
          ...state,
          errors: action.payload
        };
      }};
  
    default:
      return state;
    }
  };
  
  const initialState = {
    errors: "",
    task: null
  };
  
export default (state = initialState, action) => (addTaskChecker(state, action));
  