export const trackEvent = (eventName, params = {}) => {
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, params);
  }
};
