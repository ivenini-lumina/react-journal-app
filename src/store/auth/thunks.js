import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentincation = ( email, password ) => {
  return async ( dispatch ) => {
    dispatch ( checkingCredentials() );
  }
}

export const startGoogleSignIn = () => {
  return async ( dispatch ) => {

    dispatch ( checkingCredentials() );

    const result = await signInWithGoogle();

    if (!result.ok){
      return dispatch( logout(result.errorMessage) );
    } else {      
      dispatch( login(result) );      
    }    
  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async ( dispatch ) => {
    dispatch ( checkingCredentials() );
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

    if ( !ok ) return dispatch( logout({ errorMessage }) );

    dispatch( login( { uid, displayName, email, photoURL } ));
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async ( dispatch ) => {

    dispatch ( checkingCredentials() );

    console.log({ email, password });
    const result = await loginWithEmailPassword({ email, password });
    console.log(result);
    const errorMessage = result.errorMessage;

    if ( !result.ok ){
      return dispatch( logout({ errorMessage }) );
    } else {      
      dispatch( login(result) );      
    }    
  }  
}

export const startLogout = () => {
  return async ( dispatch ) => {
    await logoutFirebase();
    dispatch( logout() );
  }

}
