import {
  createUserWithEmailAndPassword,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  onAuthStateChanged,
} from 'firebase/auth';

export default () => {
  const { useErrMsgState, useNameState, useEmailState, usePasswordState } =
    useLoginStates();
  const errMsg = useErrMsgState();
  const email = useEmailState();
  const password = usePasswordState();
  const name = useNameState();
  const user = useState<User | null>('user', () => null);

  const { $auth } = useNuxtApp();
  const route = useRoute();

  function registerUser(event: MouseEvent) {
    event.preventDefault();
    createUserWithEmailAndPassword($auth, email.value, password.value)
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
    signInWithEmailAndPassword($auth, email.value, password.value)
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
    signInWithPopup($auth, provider)
      .then((userCredential: UserCredential) => {
        navigateTo('/');
        user.value = userCredential.user;
      })
      .catch();
  };

  const redirectForGuest = () => {
    navigateTo('/');
  };

  const handleSignout = () => {
    signOut($auth)
      .then(() => {
        navigateTo('/login');
        // ClearNuxtState(); is not yet working
        user.value = null;
        clearNuxtState();
      })
      .catch();
  };

  const checkUserStatus = () => {
    onAuthStateChanged($auth, (userCredential: User) => {
      if (userCredential) {
        user.value = userCredential;
        if (route.path === '/login') {
          navigateTo('/');
        }
      } else {
        user.value = null;
      }
    });
  };

  return {
    user,
    registerUser,
    loginUser,
    signInWithGoogle,
    redirectForGuest,
    handleSignout,
    checkUserStatus,
  };
};
