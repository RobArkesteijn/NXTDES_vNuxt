export default () => {
  const useOpenSideMenu = () => {
    return useState<boolean>('sideMenuState', () => false);
  };

  const useAccountMenu = () => {
    return useState<boolean>('accountMenuState', () => false);
  };

  return { useOpenSideMenu, useAccountMenu };
};
