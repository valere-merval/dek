import "@testing-library/jest-dom/extend-expect";

// eslint-disable-next-line @typescript-eslint/no-require-imports
window.ResizeObserver = require("resize-observer-polyfill");

class IntersectionObserverMock {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}
Object.defineProperty(window, "IntersectionObserver", {
  value: IntersectionObserverMock,
});
