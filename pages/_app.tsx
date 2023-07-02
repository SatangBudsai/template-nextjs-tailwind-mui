import '@/styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'
//Use React Query
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
//Config Tailwind and MaterialUI
import { ThemeProvider } from "@mui/material/styles";
import InjectTailwind from '@/pages/InjectTailwind';
import CustomTheme from '@/theme/mui';
//Config Nprogress
import Nprogress from '@/components/nprogress';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={CustomTheme}>
        <InjectTailwind>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>SiamART</title>
          </Head>
          <Nprogress>
            <Component {...pageProps} />
          </Nprogress>
        </InjectTailwind>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
