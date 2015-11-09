#!/usr/bin/env node
var path = require('path');
var child_process = require('child_process');
var spawn = require('child_process').spawn;
var packageInfo = require('./package.json');
var workingDirectory = path.resolve(__dirname + '/example');
var gruntInit = spawn('grunt-init', ['react'], {
  cwd: workingDirectory
});
var answers = [
  '', '', '', '',           // 4 empty
  packageInfo.name,         // Project name
  packageInfo.version,      // Version
  packageInfo.author.name,  // username
  packageInfo.description,  // Description
  packageInfo.author.name,  // Author name
  packageInfo.author.url,   // Author url
  packageInfo.engines.node, // What versions of node does it run on?
  ''                        // google_analytics_id
];

gruntInit.stdout.on('data', function (data) {
  var answer = answers.shift() || '';
  console.log(data.toString());
  gruntInit.stdin.write(answer + '\n');
});

gruntInit.on('close', function () {
  console.log('`grunt-init react` process terminated. Running `npm install`.');
  var npmInstall = spawn('npm', ['install'], {
    cwd: workingDirectory
  });
  npmInstall.stdout.on('data', function (data) {console.log(data.toString());});
  npmInstall.on('close', function () {
    console.log('`npm install` process terminated. Running `gulp build:prod`.');
    var gulpBuild = spawn('gulp', ['build:prod'], {
      cwd: workingDirectory
    });
    gulpBuild.stdout.on('data', function (data) {console.log(data.toString());});
    gulpBuild.on('close', function () {
      console.log('`gulp build:prod` process terminated. Done.');
    });
  });
});
