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

  return {
    useNameState,
    useEmailState,
    usePasswordState,
    useErrMsgState,
  };
};
