import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

type Props = {
  children: React.ReactNode;
};

export default function RTL(props: Props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
