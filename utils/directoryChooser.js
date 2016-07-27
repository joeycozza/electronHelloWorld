'use strict';
const storage = require('electron-json-storage');
const {dialog} = require('electron').remote;


const directoryChoosing = document.getElementById('directoryChoosing');

directoryChoosing.onclick = (e) => {

  const targetDirectory = dialog.showOpenDialog({buttonLabel: 'Choose Directory', properties: ['createDirectory', 'openDirectory']});

  storage.set('userInfo', {targetDirectory}, err => {
    console.log('err: ', err);
  });
  document.getElementById('directory').innerHTML = targetDirectory;

};

