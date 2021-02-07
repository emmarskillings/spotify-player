import { compose } from 'redux';

declare global {
  interface Object {
    [key: string]: any;
  }

  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => typeof compose;
    __REDUX_STORE?: any;
  }
}