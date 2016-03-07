'use strict'

const twitter = require('twitter');
const MilkCocoa = require('milkcocoa');
const milkcocoa = new MilkCocoa('flagie458akn.mlkcca.com');
const ds = milkcocoa.dataStore('BSHSBE34');
const tw = new twitter(require('./twconfig'));

ds.on('send', (sended) => {
  console.log('受信:',sended);
  if(!sended.value.text) return;

  tw.post('statuses/update', {status: `${sended.value.text} #bashauma`}, (error, tweet, response) => {
    if(error) throw error;
    console.log(tweet.text);  // Tweet body.
    // console.log(response);  // Raw response object.
  });
});
