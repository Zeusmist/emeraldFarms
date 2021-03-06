/* eslint-disable */

import {
  AUTH_SIGN_IN,
  AUTH_SIGN_IN_START,
  SET_USER_INFO,
  ADD_USER,
} from "../type";
import { signInRequest } from "../../services";
import { toast } from "react-toastify";

export const signInStart = (
  creds,
  onSuccess = () => {},
  onFailure = () => {}
) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_SIGN_IN_START });
    let data = await signInRequest(creds);
    console.log(data.data.user._id)
    dispatch({
      type: AUTH_SIGN_IN,
      payload: {
        token: data?.token,
        role: data?.data?.user?.role,
        firstName:data?.data?.user?.firstName,
        lastName: data?.data?.user?.lastName,
        id:data?.data?.user?._id
      },
    });

    dispatch({ type: SET_USER_INFO, payload: data?.data });
    toast.success(data?.message);
    onSuccess();
  } catch (error) {
    dispatch({ type: AUTH_SIGN_IN, payload: {} });
    toast.error(error.response?.data?.message);
    onFailure();
  }
};

export const addUsers = (creds) => {
  return (dispatch) => {
    fetch(
      "https://desolate-anchorage-42140.herokuapp.com/api/v1/users/signUp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        dispatch({
          type: ADD_USER,
          payload: {
            firstName: data?.data?.user?.firstName,
            lastName: data?.data?.user?.lastName,
            email: data?.data?.user?.email,
            otp:data?.data?.user?.otp
          },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};
