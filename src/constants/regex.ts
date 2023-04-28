export const rAMixtureOfNumberUppercaseLowercase = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(.{8,255})$/g;

export const rAMixtureOfNumberUppercaseLowercaseBlockchain = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(.{10,255})$/g;

export const rIncludeOfAtLeastOneSpecial = /^(?=.*[~!@#\$%\^&\*_\-\+=`|\\\(\)\{\}\[\]:;\"\'<>,\.\?\/])(.{8,255})$/g;

export const rIncludeOfAtLeastOneSpecialBlockchain = /^(?=.*[~!@#\$%\^&\*_\-\+=`|\\\(\)\{\}\[\]:;\"\'<>,\.\?\/])(.{10,255})$/g;

export const rEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

export const rAtLeast1Lowercase = /^(?=.*[a-z])(.{8,255})$/g;

export const rAtLeast1Uppercase = /^(?=.*[A-Z])(.{8,255})$/g;

export const rAtLeast1Number = /^(?=.*[0-9])(.{8,255})$/g;

export const rAddress = /addr_[a-z0-9]+/g;
// eslint-disable-next-line no-irregular-whitespace
export const rYoutube = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?​[\w\?‌​=]*)?/;

export const checkLinkYtb = (ytb: string) => {
  return new RegExp(rYoutube).test(ytb);
};

export const validateEmail = (email: string) => {
  return new RegExp(rEmail).test(email);
};

export const validateAddress = (address: string) => {
  if (!address) {
    return false;
  }
  return new RegExp(rAddress).test(address);
};

// eslint-disable-next-line no-control-regex
export const rRemoveASCII = /[\x00-\x1F\x7F-\xFF]/g;

export const removeHTML = /(<([^>]+)>)/gi;
