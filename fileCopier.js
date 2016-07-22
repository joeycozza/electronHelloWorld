'use strict';
const fs = require('fs.extra');
const path = require('path');

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const holder      = document.getElementById('holder');
holder.ondragover = holder.ondragleave = holder.ondragend = () => {
  return false;
};

holder.ondrop = (e) => {
  const folderPath = document.getElementById('folderPath');
  e.preventDefault();
  const file = e.dataTransfer.files[0];

  fs.copy(file.path, `${folderPath.value}/testing.txt`, {replace: false}, function (err) {
    if (err) {
      // i.e. file already exists or can't write to directory
      throw err;
    }
    console.log("Copied stuff over");
  });
};

