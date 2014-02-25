'use strict';

var grunt = require('grunt');

exports.cdnify = {
    setUp: function(done) {
        done();
    },
    integration: function(test) {
        test.expect(0);

        test.done();
    }
};