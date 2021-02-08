import * as React from 'react';
import _ from 'lodash';

import { getHashParams } from '../utils/functions';

const Redirect = (props: { setExpiryTime: any; history: any; location: any; }) => {
  React.useEffect(() => {
    const { history, location } = props;

    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/artist-search');
      }

      // Get params from url hash
      const params = getHashParams()

      // Set access_token and refresh_token received from OAuth in local storage
      localStorage.setItem('accessToken', JSON.stringify(params.access_token));
      localStorage.setItem('refreshToken', JSON.stringify(params.refresh_token))

      history.push('/artist-search');
    } catch (error) {
      history.push('/')
    }
  });

  return null;
};

export default Redirect;
