/* global strings, describe, it, expect, should */

describe('Javascript Numbers', function () {
  'use strict';

    describe('numberChecker', function() {

      it('should return an integer value', function() {

        expect(numberChecker()).to.be.a('number');

      });

    });

    describe('numberSum', function() {

      it('should return an integer value', function() {
        var test = numberSum;
        expect(test).to.be.a('function');
        expect(test()).to.be.a('number');
        expect(test()).to.equal(11314);

      });

    });

    describe('numberModulus', function() {

      it('should return an integer value', function() {

        var test = numberModulus;
        expect(test).to.be.a('function');
        expect(test()).to.be.a('number');
        expect(test()).to.equal(29);

      });

    });

    describe('numberHelper', function() {

      it('should return an integer value', function() {

       var test = numberHelper;
        expect(test).to.be.a('function');
        expect(test()).to.be.a('number');
        expect(test()).to.equal(8675309);

      });

    });
    
});
