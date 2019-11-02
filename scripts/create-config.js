const fs = require('fs');
const chalk = require('chalk');
const file = `export const appConfigs = {
  adsense: {
    adClient: '${process.env.ADSENSE_CLIENT_ID}', // change this line
    adSlot: '${process.env.ADSENSE_AD_SLOT_ID}', // change this line
    pageLevelAds: ${process.env.ADSENSE_PAGE_LEVEL_ADS},
    display: 'block'
  },
  API_ENDPOINTS: {
    blog: '/blogs',
    post: '/posts',
    post_search: '/posts/search',
    page: '/pages'
  },
  API_KEY: '${process.env.API_KEY}', // change this line
  BLOG_ID: '${process.env.BLOG_ID}', // change this line
  API_URL: 'https://www.googleapis.com/blogger/v3'
};

`;

if (fs.existsSync('./src/app/config.ts')) {
  console.log(chalk.yellow('Config file already exist!'));
  return;
}
fs.writeFileSync('./src/app/config.ts', file);