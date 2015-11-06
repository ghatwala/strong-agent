'use strict';

module.exports = { canWatchdog: canWatchdog };

function canWatchdog() {
  return process.platform === 'linux' &&
         (process.arch === 'ia32' || process.arch === 'x64') &&
         (process.versions.v8 < '3.15' || process.versions.v8 >= '3.29');
}
