import '../scss/index.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import TransitionLayout from '../components/TransitionLayout';
import { Provider } from '../components/Provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider>
        <TransitionLayout>
          <Component {...pageProps} />
        </TransitionLayout>
      </Provider>
    </Layout>
  );
}
export default MyApp;
