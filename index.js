var spawn = require('child_process').spawn;
var async = require('async');

var bin = __dirname + '/node_modules/component/bin/component';

var spawn_process = function (args, options) {

  async.eachSeries(args, function (arg, next) {

    console.log('\033[90m%s\033[m', bin, arg.join(' '));

    var p = spawn(bin, arg, options);

    p.stdout.pipe(process.stdout);
    p.stderr.pipe(process.stderr);

    p.on('close', next);
    p.on('error', next);

  }, function (err) {
    if (err) {
      console.log(err);
    }
  });

};

var component_wrapper = function (args, options) {

  if (!Array.isArray(args)) {
    options = args;
    args = null;
  }

  args = args || [ [ 'install' ], [ 'build' ] ];

  spawn_process(args, options);

};

module.exports = component_wrapper;
