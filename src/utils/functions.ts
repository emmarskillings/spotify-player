import axios from 'axios';

type HashParamsReturn = {
  access_token?: string,
  refresh_token?: string,
}

// Gets hash params from url
export const getHashParams = (): HashParamsReturn => {
  let hashParams = {};
  let e: RegExp | RegExpExecArray | null = /([^&;=]+)=?([^&;]*)/g;
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);

  // eslint-disable-next-line no-cond-assign
  while ( e = r.exec(q)) {
    // @ts-ignore
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

// Sets the authorization header
export const setAuthHeader = () => {
  try {
    const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);

    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};
