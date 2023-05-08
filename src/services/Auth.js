import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const signUp = async (email, password, name) => {
  return await createUserWithEmailAndPassword(auth, email, password).then(
    (user) => {
      auth.updateCurrentUser({
        ...user.user,
        displayName: name,
      });
    }
  );
};

export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
export const handleSignOut = async () => {
  return await signOut(auth);
};
