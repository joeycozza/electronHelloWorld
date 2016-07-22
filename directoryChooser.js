const {dialog} = require('electron').remote;


const directoryChoosing = document.getElementById('directoryChoosing');

directoryChoosing.onclick = (e) => {

  //TODO: figure out how to persist where the files will be saved
  const targetDirectory = dialog.showOpenDialog({properties: ['createDirectory', 'openDirectory']});
  console.log('targetDirectory: ', targetDirectory);

};

