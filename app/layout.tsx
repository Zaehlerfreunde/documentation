import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import './global.css';


export const metadata: Metadata = {
  metadataBase: new URL('https://docs.zaehlerfreunde.de'),
  title: {
    default: 'Zählerfreunde',
    template: '%s | Zählerfreunde',
  },
  description:
    'Alle technischen Dokumente, Anleitungen und API-Referenzen an einem Ort.',
  icons: 'https://cdn.zaehlerfreunde.com/logos/favicon.ico',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="de"  suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
