var fs = require('fs')
var tape = require('tape')
var copy = require('./index')
var del = require('del')

function ignorant (name, headers) {
  return !name.endsWith('.js')
}

function js (name) {
  return name.endsWith('.js')
}

tape('copy dir', function (t) {
  copy('node_modules', 'clone_modules', function (err) {
    if (err) t.end(err)
    t.true(fs.existsSync('clone_modules'), 'dir cloned')
    del.sync('clone_modules')
    t.end()
  })
})

tape('ignorant', function (t) {
  copy('./node_modules/once', 'once', { ignore: ignorant }, function (err) {
    if (err) t.end(err)
    t.true(fs.existsSync('once'), 'once cloned')
    t.true(fs.readdirSync('once').every(js), 'only js')
    del.sync('once')
    t.end()
  })
})
