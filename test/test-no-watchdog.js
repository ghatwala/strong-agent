'use strict';

var addon = require('../lib/addon');
var agent = require('../');
var assert = require('assert');
var common = require('./common');
var profiler = require('../lib/profilers/cpu');

//if (process.platform === 'linux') {
if (common.canWatchdog()) {
  addon.startCpuProfiling = function(timeout) { if (timeout) return 'BAM'; };
}

agent.profile('some app', 'some key');
profiler.start();
profiler.stop();
assert.throws(function() { profiler.start(1); });
