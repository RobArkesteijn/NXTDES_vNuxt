export default () => {
  const useNameState = () => {
    return useState<string>('name', () => '');
  };

  const useEmailState = () => {
    return useState<string>('email', () => '');
  };

  const usePasswordState = () => {
    return useState<string>('password', () => '');
  };

  const useErrMsgState = () => {
    return useState<string>('errMsg', () => '');
  };

  const useSignInState = () => {
    return useState<string>('signIn', () => 'Register');
  };

  return {
    useNameState,
    useEmailState,
    usePasswordState,
    useErrMsgState,
    useSignInState,
  };
};
