import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const GA_ID = process.env.NODE_ENV === 'production' ? 'G-4H3GL2XFS1' : '';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          sizes="512x512"
          href="/icons/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          sizes="192x192"
          href="/icons/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Facebook OG tag */}
        <meta property="og:type" content="type" />
        <meta
          property="og:title"
          content="新莊進香團 Temple Surfing - 2022 藝起來新莊串門子"
        />
        <meta
          property="og:description"
          content="你知道新北市有一個神秘的地方，眾神聚集，短短一條街，卻有超過10座廟宇。我們即將號召「新莊進香團」！召集新莊在地勢力及來自新北各區的社造勢力！一起前進新莊廟街，挖掘和傳承那些珍貴古老的精神。"
        />
        <meta
          property="og:image"
          content="https://2022-temple-surfing-ntpc.netlify.app/images/fb-image.jpg"
        />
        <meta property="og:url" content="https://templesurfing-ntpc.tw" />
        <meta
          property="og:site_name"
          content="新莊進香團 Temple Surfing - 2022 藝起來新莊串門子"
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${GA_ID}');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
