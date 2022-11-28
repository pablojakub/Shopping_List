import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import FullPageLoadingSpinner from '../components/Layout/FullPageLoadingSpinner';
import GlobalStyles from '../styles/GlobalStyles';

const Loading = (): JSX.Element => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);

  const spinner = <FullPageLoadingSpinner />

  useEffect(() => {
    const handleStart = (url) => {
      (url !== router.asPath) && setIsLoading(true);
    };

    const handleComplete = (url) => {
      (url === router.asPath) && setIsLoading(false);
    }
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    }
  },[router])

  return loading === true ? spinner : <></>
}


function MyApp({ Component, pageProps }) {
  return (
    <>
          <Loading />
          <Component {...pageProps} />
          <GlobalStyles/>
    </>

  )
  
}

export default MyApp