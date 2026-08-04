export const handleInteractionCapture = (
  event: React.SyntheticEvent,
  interactiveRef: React.RefObject<HTMLElement | null>,
) => {
  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }

  const interactiveElements = ["a", "button"];
  const isInteractive =
    interactiveElements.some((selector) => target.closest(selector)) &&
    target !== interactiveRef.current;

  if (isInteractive) {
    event.stopPropagation();
  }
};
