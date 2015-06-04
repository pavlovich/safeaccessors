/**
 * Created by peter.pavlovich on 5/19/15.
 */

var _ = require('lodash');

describe('The safeGet utility function,', function(){

  var DEFAUT_VAL = '___MyDeFaUlT_vAlUe___';

  it('should be a function', function () {
    expect(typeof _.safeCall).to.equal("function");
  });

  describe('given a null input object,', function(){
    describe('given no other parameters,', function(){
      it('should return null', function(){
        expect(_.safeGet(null)).to.equal(null);
      });
    });
    describe('given an undefined path, default value, allowsNull flag and allowing for undefined results,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(null, undefined, undefined, undefined, true)).to.equal(undefined);
      });
    });
    describe('given a null path,', function(){
      it('should return null', function(){
        expect(_.safeGet(null, null)).to.equal(null);
      });
    });
    describe('given a null path and null default,', function(){
      it('should return null', function(){
        expect(_.safeGet(null, null, null)).to.equal(null);
      });
    });
    describe('given a null path and non-null default,', function(){
      it('should return the default', function(){
        expect(_.safeGet(null, null, DEFAUT_VAL)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-null, empty path and no default,', function(){
      it('should return null', function(){
        expect(_.safeGet(null, '')).to.equal(null);
      });
    });
    describe('given a non-null, empty path and null default,', function(){
      it('should return null', function(){
        expect(_.safeGet(null, '', null)).to.equal(null);
      });
    });
    describe('given a non-null, empty path and non-null default,', function(){
      it('should return the default', function(){
        expect(_.safeGet(null, '', DEFAUT_VAL)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-null, empty path, a non-null default and allowing nulls,', function(){
      it('should return null', function(){
        expect(_.safeGet(null, '', DEFAUT_VAL, true)).to.equal(null);
      });
    });
    describe('given a non-empty path,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(null, 'test')).to.equal(undefined);
      });
    });
    describe('given a non-empty path, a non-null default,', function(){
      it('should return the default', function(){
        expect(_.safeGet(null, 'test', DEFAUT_VAL)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty path, a non-null default and allowing nulls,', function(){
      it('should return the default', function(){
        expect(_.safeGet(null, 'test', DEFAUT_VAL, true)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty path, a non-null default and allowing nulls and undefineds,', function(){
      it('should return the default', function(){
        expect(_.safeGet(null, 'test', DEFAUT_VAL, true, true)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty path, an undefined and allowing nulls and undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(null, 'test', undefined, true, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty path, an undefined and allowing undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(null, 'test', undefined, false, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, two-part, an undefined and allowing undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(null, 'test.two', undefined, false, true)).to.equal(undefined);
      });
    });
  });

  describe('given an undefined input object,', function(){
    describe('given no other parameters,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(undefined)).to.equal(undefined);
      });
    });
    describe('given an undefined path, default value, allowsNull flag and allowing for undefined results,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(undefined, undefined, undefined, undefined, true)).to.equal(undefined);
      });
    });
    describe('given a null path,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(undefined, null)).to.equal(undefined);
      });
    });
    describe('given a null path and null default,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(undefined, null, null)).to.equal(undefined);
      });
    });
    describe('given a null path and null default and allowing nulls,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(undefined, null, null, true)).to.equal(null);
      });
    });
    describe('given a null path and non-null default,', function(){
      it('should return the default', function(){
        expect(_.safeGet(undefined, null, DEFAUT_VAL)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-null, empty path and no default,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(undefined, '')).to.equal(undefined);
      });
    });
    describe('given a non-null, empty path and null default,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(undefined, '', null)).to.equal(undefined);
      });
    });
    describe('given a non-null, empty path and non-null default,', function(){
      it('should return the default', function(){
        expect(_.safeGet(undefined, '', DEFAUT_VAL)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-null, empty path, a non-null default and allowing nulls,', function(){
      it('should return the default', function(){
        expect(_.safeGet(undefined, '', DEFAUT_VAL, true)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-null, empty path, a non-null default and allowing nulls and undefineds,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(undefined, '', DEFAUT_VAL, true, true)).to.equal(undefined);
      });
    });
    describe('given a non-null, empty path, a non-null default and not allowing nulls but allowing undefineds,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(undefined, '', DEFAUT_VAL, false, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty path,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(undefined, 'test')).to.equal(undefined);
      });
    });
    describe('given a non-empty path, a non-null default,', function(){
      it('should return the default', function(){
        expect(_.safeGet(undefined, 'test', DEFAUT_VAL)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty path, a non-null default and allowing nulls,', function(){
      it('should return the default', function(){
        expect(_.safeGet(undefined, 'test', DEFAUT_VAL, true)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty path, a non-null default and allowing nulls and undefineds,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(undefined, 'test', DEFAUT_VAL, true, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty path, an undefined and allowing nulls and undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(undefined, 'test', undefined, true, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty path, an undefined and allowing undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(undefined, 'test', undefined, false, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, two-part, an undefined and allowing undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(undefined, 'test.two', undefined, false, true)).to.equal(undefined);
      });
    });
  });





  describe('given a simple TEST input object,', function(){
    var t4 = 'test 4';
    var L3 = {
      four: t4,
      truth: true,
      falseness: false,
      number: 23,
      aString: 'aString'
    };
    var t2 = 'test 2';
    var L2 = {
      test: t2,
      three: L3
    };
    var t1 = 'test 1';
    var L1 = {
      test: t1,
      two: L2
    };
    var t = 42;
    var TEST = {
      one: L1,
      test: t
    };
    describe('given no other parameters,', function(){
      it('should return TEST', function(){
        expect(_.safeGet(TEST)).to.equal(TEST);
      });
    });
    describe('given an undefined path, default value, allowsNull flag and allowing for undefined results,', function(){
      it('should return TEST', function(){
        expect(_.safeGet(TEST, undefined, undefined, undefined, true)).to.equal(TEST);
      });
    });
    describe('given a null path,', function(){
      it('should return TEST', function(){
        expect(_.safeGet(TEST, null)).to.equal(TEST);
      });
    });
    describe('given a null path and null default,', function(){
      it('should return TEST', function(){
        expect(_.safeGet(TEST, null, null)).to.equal(TEST);
      });
    });
    describe('given a null path and null default and allowing nulls,', function(){
      it('should return TEST', function(){
        expect(_.safeGet(TEST, null, null, true)).to.equal(TEST);
      });
    });
    describe('given a null path and non-null default,', function(){
      it('should return the TEST', function(){
        expect(_.safeGet(TEST, null, DEFAUT_VAL)).to.equal(TEST);
      });
    });
    describe('given a non-null, empty path and no default,', function(){
      it('should return TEST', function(){
        expect(_.safeGet(TEST, '')).to.equal(TEST);
      });
    });
    describe('given a non-null, empty path and null default,', function(){
      it('should return TEST', function(){
        expect(_.safeGet(TEST, '', null)).to.equal(TEST);
      });
    });
    describe('given a non-null, empty path and non-null default,', function(){
      it('should return TEST', function(){
        expect(_.safeGet(TEST, '', DEFAUT_VAL)).to.equal(TEST);
      });
    });
    describe('given a non-null, empty path, a non-null default and allowing nulls,', function(){
      it('should return the TEST', function(){
        expect(_.safeGet(TEST, '', DEFAUT_VAL, true)).to.equal(TEST);
      });
    });
    describe('given a non-null, empty path, a non-null default and allowing nulls and undefineds,', function(){
      it('should return TEST', function(){
        expect(_.safeGet(TEST, '', DEFAUT_VAL, true, true)).to.equal(TEST);
      });
    });
    describe('given a non-null, empty path, a non-null default and not allowing nulls but allowing undefineds,', function(){
      it('should return TEST', function(){
        expect(_.safeGet(TEST, '', DEFAUT_VAL, false, true)).to.equal(TEST);
      });
    });
    describe('given a non-empty, unknown path,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(TEST, 'unknown')).to.equal(undefined);
      });
    });
    describe('given a non-empty, unknown path, a non-null default,', function(){
      it('should return the default', function(){
        expect(_.safeGet(TEST, 'unknown', DEFAUT_VAL)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty, unknown path, a non-null default and allowing nulls,', function(){
      it('should return the default', function(){
        expect(_.safeGet(TEST, 'unknown', DEFAUT_VAL, true)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty, unknown path, a non-null default and allowing nulls and undefineds,', function(){
      it('should return the default', function(){
        expect(_.safeGet(TEST, 'unknown', DEFAUT_VAL, true, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, unknown path, an undefined and allowing nulls and undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'unknown', undefined, true, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, unknown path, an undefined and allowing nulls and undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'unknown', undefined, true, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, unknown path, an undefined and allowing undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'unknown', undefined, false, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, known path to an object,', function(){
      it('should return the requested value', function(){
        expect(_.safeGet(TEST, 'one')).to.equal(L1);
      });
    });
    describe('given a non-empty, known path to a primitive,', function(){
      it('should return the requested primitive value', function(){
        expect(_.safeGet(TEST, 'test')).to.equal(t);
      });
    });
    describe('given a non-empty, two-part, an undefined and allowing undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'unknown.unknown2', undefined, false, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, two-part, first known and second unknown path, an undefined default and allowing undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.unknown', undefined, false, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, two-part, first known and second unknown path, an undefined default and allowing undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.unknown', DEFAUT_VAL, false, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, two-part, first known and second unknown path, an undefined default and not allowing undefineds,', function(){
      it('should return the default', function(){
        expect(_.safeGet(TEST, 'one.unknown', DEFAUT_VAL, false, false)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty, two-part, known first and second path,', function(){
      it('should return the requested value', function(){
        expect(_.safeGet(TEST, 'one.two', DEFAUT_VAL)).to.equal(L2);
      });
    });
    describe('given a non-empty, two-part, known first and second path, an undefined default and not allowing nulls or undefineds,', function(){
      it('should return the requested value', function(){
        expect(_.safeGet(TEST, 'one.two', undefined, false, false)).to.equal(L2);
      });
    });
    describe('given a non-empty, two-part, known first and second path, an undefined default and not allowing nulls but allowing undefineds,', function(){
      it('should return the requested value', function(){
        expect(_.safeGet(TEST, 'one.two', undefined, false, true)).to.equal(L2);
      });
    });
    describe('given a non-empty, two-part, known first and second path, an undefined default and allowing nulls but not undefineds,', function(){
      it('should return the requested value', function(){
        expect(_.safeGet(TEST, 'one.two', undefined, true, false)).to.equal(L2);
      });
    });
    describe('given a non-empty, two-part, known first and second path, an undefined default and allowing nulls or undefineds,', function(){
      it('should return the requested value', function(){
        expect(_.safeGet(TEST, 'one.two', undefined, true, true)).to.equal(L2);
      });
    });
    describe('given a non-empty, two-part, known first and second path, a known and not allowing nulls or undefineds,', function(){
      it('should return the requested value', function(){
        expect(_.safeGet(TEST, 'one.two', DEFAUT_VAL, false, false)).to.equal(L2);
      });
    });
    describe('given a non-empty, two-part, known first and second path, a known and not allowing nulls but allowing undefineds,', function(){
      it('should return the requested value', function(){
        expect(_.safeGet(TEST, 'one.two', DEFAUT_VAL, false, true)).to.equal(L2);
      });
    });
    describe('given a non-empty, two-part, known first and second path, a known default and allowing nulls but not undefineds,', function(){
      it('should return the requested value', function(){
        expect(_.safeGet(TEST, 'one.two', DEFAUT_VAL, true, false)).to.equal(L2);
      });
    });
    describe('given a non-empty, two-part, known first and second path, a known default and allowing nulls or undefineds,', function(){
      it('should return the requested value', function(){
        expect(_.safeGet(TEST, 'one.two', DEFAUT_VAL, true, true)).to.equal(L2);
      });
    });
    describe('given a non-empty, known two-part path to a valid primitive string object,', function(){
      it('should return the requested object', function(){
        expect(_.safeGet(TEST, 'one.test')).to.equal(t1);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, an undefined default,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', undefined)).to.equal(undefined);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, an undefined default, allowing nulls,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', undefined, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, an undefined default, not allowing nulls,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', undefined, false)).to.equal(undefined);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a null default,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', null)).to.equal(undefined);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a null default, nulls allowed', function(){
      it('should return null', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', null, true)).to.equal(null);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a null default, nulls not allowed', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', null, false)).to.equal(undefined);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a null default, nulls allowed, undefineds not allowed', function(){
      it('should return null', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', null, true, false)).to.equal(null);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a null default, nulls and undefineds allowed', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', null, true, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a null default, nulls allowed, undefineds not allowed', function(){
      it('should return null', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', null, true, false)).to.equal(null);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a known default,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', DEFAUT_VAL)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a known default and allowing nulls,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', DEFAUT_VAL, true)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a known default and not allowing nulls,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', DEFAUT_VAL, false)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a known default and allowing not allowingundefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', DEFAUT_VAL, undefined, false)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a known default and allowing undefineds,', function(){
      it('should return the undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', DEFAUT_VAL, undefined, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a known default and allowing nulls,', function(){
      it('should return null', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', DEFAUT_VAL, true, undefined)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a known default and not allowing nulls,', function(){
      it('should return null', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', DEFAUT_VAL, false, undefined)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a known default and allowing nulls and undefineds,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', DEFAUT_VAL, true, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a known default and allowing nulls but not undefineds,', function(){
      it('should return null', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', DEFAUT_VAL, true, false)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a known default and not allowing nulls but allowing undefineds,', function(){
      it('should return undefined', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', DEFAUT_VAL, false, true)).to.equal(undefined);
      });
    });
    describe('given a non-empty, three-part, known first and second but unknown third path, a known default and not allowing nulls or undefineds,', function(){
      it('should return null', function(){
        expect(_.safeGet(TEST, 'one.two.unknown', DEFAUT_VAL, false, false)).to.equal(DEFAUT_VAL);
      });
    });
    describe('given a non-empty, known three-part path to a valid object,', function(){
      it('should return the requested object', function(){
        expect(_.safeGet(TEST, 'one.two.three')).to.equal(L3);
      });
    });
    describe('given a non-empty, known three-part path to a valid primitive string object,', function(){
      it('should return the requested object', function(){
        expect(_.safeGet(TEST, 'one.two.test')).to.equal(t2);
      });
    });
    describe('given a non-empty, known three-part path to a valid object and a null default,', function(){
      it('should return the requested object', function(){
        expect(_.safeGet(TEST, 'one.two.three', null)).to.equal(L3);
      });
    });
    describe('given a non-empty, known three-part path to a valid primitive string object and a null default,', function(){
      it('should return the requested object', function(){
        expect(_.safeGet(TEST, 'one.two.test', null)).to.equal(t2);
      });
    });
    describe('given a non-empty, known three-part path to a valid object and a non-null default,', function(){
      it('should return the requested object', function(){
        expect(_.safeGet(TEST, 'one.two.three', DEFAUT_VAL)).to.equal(L3);
      });
    });
    describe('given a non-empty, known three-part path to a valid primitive string object and a non-null default,', function(){
      it('should return the requested object', function(){
        expect(_.safeGet(TEST, 'one.two.test', DEFAUT_VAL)).to.equal(t2);
      });
    });
    describe('given a non-empty, known four-part path to a valid object,', function(){
      it('should return the requested object', function(){
        expect(_.safeGet(TEST, 'one.two.three.four')).to.equal(t4);
      });
    });
    describe('given a non-empty, known four-part path to a valid object,', function(){
      it('should return the requested object', function(){
        expect(_.safeGet(TEST, 'one.two.three.four')).to.equal(t4);
      });
    });
    describe('given a non-empty, known four-part path to a valid truth,', function(){
      it('should return true', function(){
        expect(_.safeGet(TEST, 'one.two.three.truth')).to.equal(true);
      });
    });
    describe('given a non-empty, known four-part path to a valid falseness,', function(){
      it('should return false', function(){
        expect(_.safeGet(TEST, 'one.two.three.falseness')).to.equal(false);
      });
    });
    describe('given a non-empty, known four-part path to a valid number,', function(){
      it('should return true', function(){
        expect(_.safeGet(TEST, 'one.two.three.number')).to.equal(23);
      });
    });
    describe('given a non-empty, known four-part path to a valid string,', function(){
      it('should return the string', function(){
        expect(_.safeGet(TEST, 'one.two.three.aString')).to.equal('aString');
      });
    });
    describe('given a non-empty, known four-part path to a valid object, null default,', function(){
      it('should return the requested object', function(){
        expect(_.safeCall(TEST, 'one.two.three.four', null)).to.equal(t4);
      });
    });
    describe('given a non-empty, known four-part path to a valid truth, null default,', function(){
      it('should return true', function(){
        expect(_.safeCall(TEST, 'one.two.three.truth', null)).to.equal(true);
      });
    });
    describe('given a non-empty, known four-part path to a valid falseness, null default,', function(){
      it('should return false', function(){
        expect(_.safeCall(TEST, 'one.two.three.falseness', null)).to.equal(false);
      });
    });
    describe('given a non-empty, known four-part path to a valid number, null default,', function(){
      it('should return true', function(){
        expect(_.safeCall(TEST, 'one.two.three.number', null)).to.equal(23);
      });
    });
    describe('given a non-empty, known four-part path to a valid string, null default,', function(){
      it('should return the string', function(){
        expect(_.safeCall(TEST, 'one.two.three.aString', null)).to.equal('aString');
      });
    });
    describe('given a non-empty, known four-part path to a valid object, non-null default,', function(){
      it('should return the requested object', function(){
        expect(_.safeCall(TEST, 'one.two.three.four', DEFAUT_VAL)).to.equal(t4);
      });
    });
    describe('given a non-empty, known four-part path to a valid truth, non-null default,', function(){
      it('should return true', function(){
        expect(_.safeCall(TEST, 'one.two.three.truth', DEFAUT_VAL)).to.equal(true);
      });
    });
    describe('given a non-empty, known four-part path to a valid falseness, non-null default,', function(){
      it('should return false', function(){
        expect(_.safeCall(TEST, 'one.two.three.falseness', DEFAUT_VAL)).to.equal(false);
      });
    });
    describe('given a non-empty, known four-part path to a valid number, non-null default,', function(){
      it('should return true', function(){
        expect(_.safeCall(TEST, 'one.two.three.number', DEFAUT_VAL)).to.equal(23);
      });
    });
    describe('given a non-empty, known four-part path to a valid string, non-null default,', function(){
      it('should return the string', function(){
        expect(_.safeCall(TEST, 'one.two.three.aString', DEFAUT_VAL)).to.equal('aString');
      });
    });

  });

});
