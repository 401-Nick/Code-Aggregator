#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import yargs from 'yargs';

const argv = yargs
  .option('directory', {
    alias: 'd',
    describe: 'Directory to scan',
    type: 'string',
    default: './'
  })
  .option('fileTypes', {
    alias: 't',
    describe: 'File types to include',
    type: 'array',
    default: ['.js', '.html']
  })
  .option('output', {
    alias: 'o',
    describe: 'Output file name',
    type: 'string',
    default: 'dirContents.txt'
  })
  .help()
  .argv;

const currentFileUrl = new URL(import.meta.url);
const currentFilePath = currentFileUrl.pathname;
const currentFile = path.basename(currentFilePath);

fs.readdir(argv.directory, (err, files) => {
  if (err) throw err;

  let output = '';

  files.forEach((file) => {
    if (file !== currentFile && argv.fileTypes.some((arg) => file.endsWith(arg))) {
      const content = fs.readFileSync(path.join(argv.directory, file), 'utf8');
      output += `${file}:\n${content}\n\n`;
    }
  });

  fs.writeFile(argv.output, output, (err) => {
    if (err) throw err;
    console.log(`Content written to ${argv.output}`);
  });
});
