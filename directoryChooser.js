'use strict';
const storage = require('electron-json-storage');
const {dialog} = require('electron').remote;


const directoryChoosing = document.getElementById('directoryChoosing');

directoryChoosing.onclick = (e) => {

  //TODO: figure out how to persist where the files will be saved
  const targetDirectory = dialog.showOpenDialog({buttonLabel: 'Choose Directory', properties: ['createDirectory', 'openDirectory']});
  console.log('targetDirectory: ', targetDirectory);
  storage.set('userInfo', {targetDirectory}, err => {
    console.log('err: ', err);
  });

};

