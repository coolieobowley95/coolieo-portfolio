export type GetStyleInfo = (resolved: { element: Element }) => {
  className: string;
  styles: Record<string, string> | null;
};

export function initDesignMode(getStyleInfo: GetStyleInfo): () => void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {};
  }

  let selectedElement: Element | null = null;

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as Element;
    selectedElement = target;
    const info = getStyleInfo({ element: target });
    // Send to parent via console
    (window as any).parent?.postMessage?.({
      type: 'design-mode-select',
      data: info,
    }, '*');
  };

  document.addEventListener('click', handleClick, true);

  const reselect = () => {
    if (selectedElement && document.contains(selectedElement)) {
      const info = getStyleInfo({ element: selectedElement });
      (window as any).parent?.postMessage?.({
        type: 'design-mode-reselect',
        data: info,
      }, '*');
    } else {
      selectedElement = null;
    }
  };

  return reselect;
}
