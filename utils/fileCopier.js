'use strict';
const fs      = require('fs.extra');
const path    = require('path');
const storage = require('electron-json-storage');




// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const holder      = document.getElementById('holder');
holder.ondragover = holder.ondragleave = holder.ondragend = () => {
  return false;
};

holder.ondrop = (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];


  storage.get('userInfo', (err, info) => {

    if (err) {
      console.log(`error, no directory path was chosen`, err);
      return false;
    }

    console.log(info.targetDirectory[0]);

    fs.copy(file.path, `${info.targetDirectory}/testing.txt`, {replace: true}, err => {
      if (err) {
        // i.e. file already exists or can't write to directory
        throw err;
      }
      console.log("Copied stuff over");
    });

  });

};

