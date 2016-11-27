'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN; //'IWY62XR22JGS5RE5XMEC4MUEOA647XLP'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;
//'EAAY8smEciJYBACOmyEQNICIZADgZCFscDilE6tV2Yesk3iYSkkj5XvxvMSUlYfOsvvIozKZAO4HxGZCJ0zzYfdBCUhicGkMcszPsLfUJ2ZARxEUsdDY04uTPSx60A7vi2UPuirg6eIflnXnxvMOLbQduPF1lAPVCj6erZBONqJBQZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}