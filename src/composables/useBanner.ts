import { getDownloadURL, ref } from 'firebase/storage';
import { get, ref as dataRef } from 'firebase/database';

export default () => {
  const { $storage, $db } = useNuxtApp();
  const bannerImage = useState<string>('bannerImage', () => '');
  const bannerIntro = useState<string>('bannerTitle', () => '');

  const fetchBannerImage = (path: string) => {
    const storageRefVariable = ref($storage, `${path}.webp`);
    getDownloadURL(storageRefVariable)
      .then((url: string) => {
        bannerImage.value = url;
      })
      .catch();
  };

  function fetchBannerTitle(path: string, destionationType: string) {
    const infoRef =
      destionationType === 'country'
        ? dataRef($db, 'info')
        : dataRef($db, 'cityinfo');
    get(infoRef)
      .then((snapshot) => {
        const data = snapshot.val();
        bannerIntro.value = data[path].title;
      })
      .catch();
  }

  return {
    bannerImage,
    bannerIntro,
    fetchBannerImage,
    fetchBannerTitle,
  };
};
