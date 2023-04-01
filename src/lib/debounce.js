export function debounce(callback, delay) {
  let timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(arg), delay);
  };
}
