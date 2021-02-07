import * as React from 'react';
import _ from 'lodash';
import {getHashParams} from "../utils/functions";

const Redirect = (props: { setExpiryTime: any; history: any; location: any; }) => {
  React.useEffect(() => {
    // @ts-ignore
    const { setExpiryTime, history, location } = props;

    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/artist-search');
      }
      const accessToken = getHashParams(location.hash);
      // @ts-ignore
      const expiryTime = new Date().getTime() + accessToken.expiresIn * 1000;
      localStorage.setItem('params', JSON.stringify(accessToken));
      localStorage.setItem('expiryTime', String(expiryTime))
      history.push('/artist-search');
    } catch (error) {
      history.push('/')
    }
  })
  return null;
}

export default Redirect;
