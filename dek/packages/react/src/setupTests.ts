import { vi } from "vitest";

declare global {
  interface Window {
    test: string;
  }
}
class ResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
window.ResizeObserver = ResizeObserver;
Object.defineProperty(window, "matchMedia", {
  value: ResizeObserver,
});

class IntersectionObserverMock {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}
Object.defineProperty(window, "IntersectionObserver", {
  value: IntersectionObserverMock,
});
