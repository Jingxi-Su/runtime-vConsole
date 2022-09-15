declare var __VERSION__: string;
declare var __TARGET__: 'web' | 'wx';

declare module '*.html' {
  const _: string;
  export default _;
}

declare module '*.less' {
  const use: () => void;
  const unuse: () => void;
  export { use, unuse };
}

interface Window {
  bridgeCallHandler: (cmd, param, callback?: (data) => void) => void;
  bridgeCallHandlerPromise: (str: string, data: any, nativeCallbackNeeded: boolean) => Promise<void>;
  bridgeRegisterHandler: (str: string, callback?: (data) => void) => void;
  bridgeUnregisterHandler: (name: string) => any;
  bridgeInit: (callback?: () => void) => any;
  WebViewJavascriptBridge: {
    callHandler:(str: string, data: any, callback?: (data) => void) => void;
  }
}
