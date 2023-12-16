export default () => {
  const { $gsap } = useNuxtApp();

  const fadeInTextFromBottom = (element: HTMLElement) => {
    const tl = $gsap.timeline();
    tl.from(element, {
      yPercent: 0,
      opacity: 1,
      delay: 0,
      duration: 0,
    })
      .to(element, {
        yPercent: 100,
        opacity: 0,
        ease: 'power3.inOut',
        duration: 0.5,
      })
      .to(element, {
        yPercent: 0,
        opacity: 1,
        ease: 'power3.inOut',
        duration: 0.5,
      });
  };

  const fadeInImage = (element: HTMLElement) => {
    const tl = $gsap.timeline();
    tl.from(element, {
      filter: 'blur(0px)',
      duration: 0,
      delay: 0,
    })
      .to(element, {
        duration: 0.5,
        filter: 'blur(20px) grayscale(100%)',
        ease: 'power3.inOut',
      })
      .to(element, {
        duration: 0.5,
        filter: 'blur(0px)',
        ease: 'power3.inOut',
      });
  };

  const fadeInText = (element: HTMLElement) => {
    const tl = $gsap.timeline();
    tl.from(element, {
      opacity: 1,
      duration: 0,
      delay: 0,
    })
      .to(element, {
        duration: 0.5,
        opacity: 0,
        ease: 'power3.inOut',
      })
      .to(element, {
        duration: 0.5,
        opacity: 1,
        ease: 'power3.inOut',
      });
  };

  return {
    fadeInTextFromBottom,
    fadeInImage,
    fadeInText,
  };
};
