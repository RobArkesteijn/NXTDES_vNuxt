import {
  createUserWithEmailAndPassword,
  User,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const { useErrMsgState, useNameState, useEmailState, usePasswordState } =
  useLoginStates();
const errMsg = useErrMsgState();
const email = useEmailState();
const password = usePasswordState();
const name = useNameState();

const auth = getAuth();

export default () => {
  const user = useState<User | null>('user', () => null);

  function registerUser(event: MouseEvent) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        user.value = userCredential.user;
        return updateProfile(user.value, { displayName: name.value });
      })
      .then(() => {
        navigateTo('/');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid email';
            break;
          case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found';
            break;
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect password';
            break;
          case 'auth/user-disabled':
            errMsg.value = 'Email or password was incorrect';
            break;
          case 'auth/email-already-in-use':
            errMsg.value = 'This email already has an account';
            break;
          case 'auth/weak-password':
            errMsg.value = 'Password should be at least six characters';
            break;
        }
      });
  }

  function loginUser(event: MouseEvent) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        navigateTo('/');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid email';
            break;
          case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found';
            break;
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect password';
            break;
          case 'auth/user-disabled':
            errMsg.value = 'Email or password was incorrect';
            break;
        }
      });
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        navigateTo('/');
      })
      .catch();
  };

  const redirectForGuest = () => {
    navigateTo('/');
  };

  return {
    user,
    registerUser,
    loginUser,
    signInWithGoogle,
    redirectForGuest,
  };
};
