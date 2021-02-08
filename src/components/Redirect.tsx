import * as React from 'react';
import _ from 'lodash';

import { getHashParams } from '../utils/functions';

const Redirect = (props: { setExpiryTime: any; history: any; location: any; }) => {
  React.useEffect(() => {
    // @ts-ignore
    const { history, location } = props;

    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/artist-search');
      }
      const params = getHashParams()

      // @ts-ignore
      localStorage.setItem('accessToken', JSON.stringify(params.access_token));
      // @ts-ignore
      localStorage.setItem('refreshToken', JSON.stringify(params.refresh_token))

      history.push('/artist-search');
    } catch (error) {
      history.push('/')
    }
  })
  return null;
}

export default Redirect;
