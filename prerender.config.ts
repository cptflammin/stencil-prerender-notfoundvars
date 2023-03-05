import { PrerenderConfig } from '@stencil/core';

export const config: PrerenderConfig = {
  crawlUrls: false,
  entryUrls: [
      '/home',
      '/notice',
      // '/profile/ionic',
      // '/profile/:name',
      // '/profile/ionic'
  ],
  // entryUrls: [],
  hydrateOptions: _url => {
    return {
      runtimeLogging: true,
      prettyHtml: true,
      // timeout: 30000,
    };
  },
  // normalizeUrl(href, base) {
  //   // temp fix for absolute paths with /docs/v3
  //   href = href.replace('v3/v3', 'v3');
  //   return new URL(href, base);
  // }
};
