import axios from 'axios';

export const getHashParams = (url: string) => {
  return url
    .slice(1)
    .split('&')
    .reduce((previous, current) => {
      const [title, value] = current.split('=');
      // @ts-ignore
      previous[title] = value;
      return previous;
    }, {
      expiresIn: undefined,
    })
}

export const setAuthHeader = () => {
  try {
    const params = JSON.parse(<string>localStorage.getItem('params'));

    if (params) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};
