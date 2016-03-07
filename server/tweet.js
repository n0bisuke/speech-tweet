'use strict'

const twitter = require('twitter');
const MilkCocoa = require('milkcocoa');
const milkcocoa = new MilkCocoa('flagie458akn.mlkcca.com');
const ds = milkcocoa.dataStore('BSHSBE34');
const tw = new twitter({
  consumer_key: 'lytdODfWII8UuJJMP8Op8zscz',
  consumer_secret: 'siUIonbycG0TfbGZjTjPg6HV5wIEFMxuBOkjyAIqdGU29YmDvm',
  access_token_key: '706747271715532800-Ud4jR897yfAFDzrSWy4AJZoNQ1lTKri',
  access_token_secret: '41dHJu4nDC23DJoDoOeTpD8Slpu2IBmon8zM2IB8SAdD0'
});

ds.on('send', (sended) => {
  console.log('受信:',sended);
  if(!sended.value.text) return;

  tw.post('statuses/update', {status: sended.value.text}, (error, tweet, response) => {
    if(error) throw error;
    console.log(tweet.text);  // Tweet body.
    // console.log(response);  // Raw response object.
  });
});
