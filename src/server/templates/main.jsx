import React from 'react';
import ReactServerDom from 'react-dom/server';

const env = process.env.NODE_ENV || 'production';
const jsSrc = env === 'production'
  ? '/client.js'
  : 'http://localhost:8080/client.js';

const cssSrc = env === 'production'
  ? '/main.css'
  : 'http://localhost:8080/main.css';

export default function() {
  return ReactServerDom.renderToStaticMarkup(
    <html lang="en">
      <head>
        <title>Patriot</title>
        <meta charSet="utf8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/images/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png"/>
        <link rel='stylesheet' href={ cssSrc }/>
        <link href="/fonts/font-awesome.css" rel="stylesheet"/>
      </head>
      <body>
        <div id="container"/>
        <script type="text/javascript" src={ jsSrc }></script>
      </body>
    </html>
  );
}
