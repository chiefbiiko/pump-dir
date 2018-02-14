var tar = require('tar-fs')
var pump = require('pump')

function noop () {}

function pumpDir (from, to, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  if (!opts) opts = {}
  if (!cb) cb = noop

  pump(tar.pack(from, opts), tar.extract(to), cb)
}

module.exports = pumpDir
