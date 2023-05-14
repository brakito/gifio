import React, { Suspense } from 'react';
import { useNearScreen } from '../hooks/useNearScreen';

const TrendingList = React.lazy(
  () => import('./trendingList')
)

export default function LazyTrending() {
  const { isNear, fromRef } = useNearScreen({ distance: '0px' });

  return <div ref={fromRef} className='trends'>
    <Suspense fallback={'Loading...'}>
      {isNear ? <TrendingList /> : <h3>Loading...</h3>}
    </Suspense>
  </div>
}