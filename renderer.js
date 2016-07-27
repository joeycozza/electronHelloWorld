'use strict';
require('./utils/directoryChooser');
require('./utils/fileCopier');
const storage = require('electron-json-storage');

storage.get('userInfo', (err, info) => {
  console.log('info.targetDirectory: ', info.targetDirectory);
  document.getElementById('directory').innerHTML = info.targetDirectory;
});