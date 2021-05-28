import Typed from 'typed.js'; //From Node Modules

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Watch Movies", "Love Your Life!"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };