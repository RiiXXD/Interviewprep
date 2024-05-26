// The sign function is an asynchronous action creator designed to handle the process of signing a user in or up. It follows this structure:

// Dispatches an initial request action to indicate loading.
// Makes an asynchronous API call to sign the user.
// Handles the response by dispatching success or error actions based on the outcome.
// Updates a local variable with the message from the server or error.
// Displays a toast message to the user after a short delay.
// This structure allows the application to handle asynchronous operations cleanly within Redux, update the state appropriately, and provide user feedback via toast notifications.

// dispatch in Redux
// Definition:
// dispatch is a function provided by the Redux store that sends actions to the store to be processed by the reducers.
// It is the only way to trigger a state change in a Redux application.
// Purpose:
// The purpose of dispatch is to send actions to the Redux store.
// These actions describe what happened in the application and
// contain information necessary for the reducers to update the state accordingly.
// How dispatch Works:
// Action Creation:

// Actions are plain JavaScript objects that represent an event in the application.
//They typically have a type property and may also have additional data.
export const sign = (formData, toastingMsg) => async (dispatch) => {
  dispatch({ type: SIGN_REQUEST });
  //dispatch(action) action={type:,payload:}
  let msgAlert = "";
  try {
    const res = await fetch(`${baseUrl}user/sign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData }),
    });
    const data = await res.json();
    console.log(data);
    if (!data.user) {
      dispatch({ type: SIGN_ERROR, payload: data.msg });
    } else
      dispatch({
        type: SIGN_SUCCESS,
        payload: { user: data.user, msg: data.msg },
      });
    msgAlert = data.msg;
  } catch (err) {
    dispatch({ type: SIGN_ERROR, payload: err });

    msgAlert = err;
  }
  setTimeout(() => {
    toastingMsg(msgAlert);
  }, 1500);
};
