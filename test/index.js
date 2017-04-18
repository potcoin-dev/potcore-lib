'use strict';

var should = require('chai').should();
var viacore = require('../');

describe('#versionGuard', function() {
  it('global._viacore should be defined', function() {
    should.equal(global._viacore, viacore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      viacore.versionGuard('version');
    }).should.throw('More than one instance of viacore');
  });
});
