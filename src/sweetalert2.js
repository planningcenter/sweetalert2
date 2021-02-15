// color
export const color = {
  blue: "#059CEE",
  green: "#2AA92F",
  red: "#E75146",
  yellow: "#FBC02D",
};

/**
 * Converts colors from standard hex to uri-encoded
 * @param {string} hexColor - Hex color, e.g., "#c0ffee"
 */
function uriEncodeHexColor(hexColor) {
  return hexColor.replace("#", "%23");
}

// icon
const greenCheckCircle = wrapPathWithDataEncodedSVGElement(
  `<path d="M24 0.5C19.2533 0.5 14.6131 1.87825 10.6663 4.46046C6.71955 7.04268 3.6434 10.7129 1.8269 15.0069C0.0103987 19.301 -0.464881 24.0261 0.461164 28.5846C1.38721 33.1432 3.67299 37.3305 7.02945 40.617C10.3859 43.9035 14.6623 46.1417 19.3178 47.0485C23.9734 47.9552 28.799 47.4898 33.1844 45.7112C37.5698 43.9325 41.3181 40.9205 43.9553 37.0559C46.5924 33.1913 48 28.6479 48 24C48 17.7674 45.4714 11.7901 40.9706 7.38299C36.4697 2.97589 30.3652 0.5 24 0.5V0.5ZM21 34.6631L10.29 24.2056L13.71 20.8569L21 28.0244L34.29 14.9819L37.71 18.3306L21 34.6631Z" fill="${uriEncodeHexColor(
    color.green
  )}"/>`
);
const blueInfoCircle = wrapPathWithDataEncodedSVGElement(
  `<path d="M26.4 16.8H21.6V12H26.4V16.8ZM26.4 36H21.6V21.6H26.4V36ZM24 0C19.2533 0 14.6131 1.40758 10.6663 4.04473C6.71954 6.68188 3.6434 10.4302 1.8269 14.8156C0.0103987 19.201 -0.464881 24.0266 0.461164 28.6822C1.38721 33.3377 3.67299 37.6141 7.02945 40.9706C10.3859 44.327 14.6623 46.6128 19.3178 47.5388C23.9734 48.4649 28.799 47.9896 33.1844 46.1731C37.5698 44.3566 41.3181 41.2805 43.9553 37.3337C46.5924 33.3869 48 28.7468 48 24C48 17.6348 45.4715 11.5303 40.9706 7.02944C36.4697 2.52856 30.3652 0 24 0Z" fill="${uriEncodeHexColor(
    color.blue
  )}"/>`
);
const yellowExclamationTriangle = wrapPathWithDataEncodedSVGElement(
  `<path d="M47.6841 41.1314L26.0228 3.71675C25.818 3.36141 25.5232 3.06629 25.1681 2.86109C24.813 2.65589 24.4101 2.54785 24 2.54785C23.5899 2.54785 23.187 2.65589 22.8319 2.86109C22.4768 3.06629 22.182 3.36141 21.9772 3.71675L0.315892 41.1314C0.109626 41.4868 0.000669735 41.8903 3.07773e-06 42.3012C-0.000663579 42.7121 0.106983 43.1159 0.312095 43.4719C0.517208 43.828 0.81254 44.1237 1.16834 44.3292C1.52413 44.5348 1.92782 44.6429 2.33872 44.6428H45.6613C46.0722 44.6429 46.4759 44.5348 46.8317 44.3292C47.1875 44.1237 47.4828 43.828 47.6879 43.4719C47.893 43.1159 48.0007 42.7121 48 42.3012C47.9993 41.8903 47.8904 41.4868 47.6841 41.1314ZM26.3378 37.6293H21.6622V32.9536H26.3378V37.6293ZM26.3378 28.2779H21.6622V18.9235H26.3378V28.2779Z" fill="${uriEncodeHexColor(
    color.yellow
  )}"/>`
);
const redExclamationTriangle = wrapPathWithDataEncodedSVGElement(
  `<path d="M47.6841 41.1314L26.0228 3.71675C25.818 3.36141 25.5232 3.06629 25.1681 2.86109C24.813 2.65589 24.4101 2.54785 24 2.54785C23.5899 2.54785 23.187 2.65589 22.8319 2.86109C22.4768 3.06629 22.182 3.36141 21.9772 3.71675L0.315892 41.1314C0.109626 41.4868 0.000669735 41.8903 3.07773e-06 42.3012C-0.000663579 42.7121 0.106983 43.1159 0.312095 43.4719C0.517208 43.828 0.81254 44.1237 1.16834 44.3292C1.52413 44.5348 1.92782 44.6429 2.33872 44.6428H45.6613C46.0722 44.6429 46.4759 44.5348 46.8317 44.3292C47.1875 44.1237 47.4828 43.828 47.6879 43.4719C47.893 43.1159 48.0007 42.7121 48 42.3012C47.9993 41.8903 47.8904 41.4868 47.6841 41.1314ZM26.3378 37.6293H21.6622V32.9536H26.3378V37.6293ZM26.3378 28.2779H21.6622V18.9235H26.3378V28.2779Z" fill="${uriEncodeHexColor(
    color.red
  )}"/>`
);
const redXCircle = wrapPathWithDataEncodedSVGElement(
  `<path d="M30.4577 33.69L23.9987 27.231L17.5397 33.69L14.3087 30.459L20.7677 24L14.3087 17.541L17.5397 14.31L23.9987 20.769L30.4577 14.31L33.6887 17.541L27.2297 24L33.6887 30.459L30.4577 33.69ZM40.1507 7.84797C36.9562 4.65353 32.8861 2.47812 28.4552 1.59682C24.0243 0.715514 19.4316 1.16791 15.2578 2.89679C11.084 4.62566 7.51662 7.55338 5.00675 11.3097C2.49687 15.066 1.15723 19.4823 1.15723 24C1.15723 28.5177 2.49687 32.9339 5.00675 36.6902C7.51662 40.4466 11.084 43.3743 15.2578 45.1032C19.4316 46.832 24.0243 47.2844 28.4552 46.4031C32.8861 45.5218 36.9562 43.3464 40.1507 40.152C44.4309 35.8663 46.835 30.057 46.835 24C46.835 17.943 44.4309 12.1336 40.1507 7.84797Z" fill="${uriEncodeHexColor(
    color.red
  )}"/>`
);

function wrapPathWithDataEncodedSVGElement(path) {
  return `data:image/svg+xml;utf8,${wrapPathWithSVGElement(path)}`;
}

function wrapPathWithSVGElement(path) {
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">${path}</svg>`;
}

// alert
const sharedAlertOptions = {
  confirmButtonColor: color.blue,
};

export const standardAlertOptions = {
  ...sharedAlertOptions,
  imageUrl: blueInfoCircle,
};
export const successAlertOptions = {
  ...sharedAlertOptions,
  imageUrl: greenCheckCircle,
};
export const errorAlertOptions = {
  ...sharedAlertOptions,
  imageUrl: redXCircle,
};

// confirm
const sharedConfirmOptions = {
  reverseButtons: true,
  showCancelButton: true,
};

export const standardConfirmOptions = {
  ...sharedConfirmOptions,
  imageUrl: blueInfoCircle,
  confirmButtonColor: color.blue,
};
export const createConfirmOptions = {
  ...sharedConfirmOptions,
  imageUrl: yellowExclamationTriangle,
  confirmButtonColor: color.green,
};
export const destroyConfirmOptions = {
  ...sharedConfirmOptions,
  imageUrl: redExclamationTriangle,
  confirmButtonColor: color.red,
};
