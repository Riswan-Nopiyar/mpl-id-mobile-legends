declare module 'nprogress' {
    const NProgress: {
      start: () => void;
      done: () => void;
      configure: (options: {
        minimum?: number;
        easing?: string;
        speed?: number;
        trickle?: boolean;
        trickleRate?: number;
        trickleSpeed?: number;
        showSpinner?: boolean;
        parent?: string;
      }) => void;
    };
    export default NProgress;
  }
  