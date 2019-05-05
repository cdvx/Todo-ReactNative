// export const runFetch =(dispatch)=>(
    
//       if ("user_token" in data.user) {
//         dispatch({
//           type:"LOGIN",
//           payload: data.user});
//       }})
//     .catch( error => {
//       dispatch({
//         type:"LOGIN_ERROR",
//         payload: typeof error === "string" ? error.errors : error.errors.error[0]});
//     });
  
//   const login = (loginData) => {
  
//     const user = {
//       user: loginData
//     };
  
//     const fetchObject = {
//       method: "POST",
//       headers: { "content-type": "application/json"},
//       body: JSON.stringify(user)
//     };
//     return (dispatch)=>{
//       runFetch(dispatch, fetchObject);
  
//     };
//   };
  
//   export default login;
  