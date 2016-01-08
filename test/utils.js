'use strict';
var helpers = require('yeoman-test');

exports.generateFullProject = function (cb) {
  return helpers.run(require.resolve('../app'))
    .withGenerators([
      require.resolve('../common'),
      require.resolve('../controller'),
      require.resolve('../main'),
      require.resolve('../route'),
      require.resolve('../view'),
      [helpers.createDummyGenerator(), 'karma:app']
    ])
    .withOptions({
      'appPath': 'app',
      'skip-welcome-message': true,
      'skip-message': true
    })
    .withPrompts({
      libsass: true,
      bootstrap: true,
      libsassBootstrap: true,
      modules: []
    });
}
