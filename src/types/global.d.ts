interface Window {
  twttr?: {
    widgets: {
      load: (element: HTMLElement) => void;
    };
  };
}
