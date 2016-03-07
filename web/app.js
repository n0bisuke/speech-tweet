'use strict';

const milkcocoa = new MilkCocoa('flagie458akn.mlkcca.com');
const ds = milkcocoa.dataStore('BSHSBE34');
let count = 0;

ds.send({mes:'再接続'},(err,sended) => {
  console.log(sended.value.mes);
});

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
let recognition = new webkitSpeechRecognition();
recognition.lang = 'ja';

// 録音終了時トリガー
recognition.addEventListener('result', (event) => {
  ds.send({text:event.results.item(0).item(0).transcript},(err,sended) => {
    console.log(sended);
    location.reload();
  });
}, false);

// 録音開始
recognition.start();

//定期処理
setInterval(()=>{
  count++;
  console.log(count);
  if(count > 20) location.reload();
},1000);
