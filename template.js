/**
 * grunt-init react
 * https://github.com/skratchdot/grunt-init-react
 * Copyright (c) 2015 skratchdot
 * Licensed under the MIT license.
 */
'use strict';

// Basic template description.
exports.description = 'Create a very basic react project.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '';

// Template-specific notes to be displayed after question prompts.
exports.after = '';

// The actual init template.
exports.template = function(grunt, init, done) {
  init.process({type: 'node'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('version', '0.1.0'),
    init.prompt('username'),
    init.prompt('description'),
    init.prompt('author_name'),
    init.prompt('author_url'),
    init.prompt('node_version', '>= 4.x.0'),
    init.prompt('google_analytics_id', 'UA-XXXXXXXX-1')
  ], function(err, defaultProps) {
    var props = Object.assign({}, require('./root/package.json'), defaultProps);
    props.repository = {
      type: 'git',
      url: 'git+https://github.com/' + props.username + '/' + props.name + '.git'
    };
    props.homepage   = 'https://github.com/' + props.username + '/' + props.name + '/';
    props.bugs       = 'https://github.com/' + props.username + '/' + props.name + '/issues';

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {
      noProcess: ['app/images/**', 'node_modules/**']
    });

    // Generate package.json file.
    init.writePackageJSON('package.json', props, function (pkg, props) {
      pkg.nyc = props.nyc;
      return pkg;
    });

    // All done!
    done();
  });
};
