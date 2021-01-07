'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var getTraining = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;

                        console.log('Training start');
                        _context.next = 4;
                        return wringOut(10);

                    case 4:
                        console.log('10 ok!');
                        _context.next = 7;
                        return squatOut(20);

                    case 7:
                        console.log('10 ok!');
                        return _context.abrupt('return', true);

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0.toString());
                        return _context.abrupt('return', false);

                    case 15:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 11]]);
    }));

    return function getTraining() {
        return _ref.apply(this, arguments);
    };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TIME_FOR_ONE_TIME = 300;

var a = 9;
console.log('a: ', a);

function wringOut(count) {
    return new _promise2.default(function (resolve, reject) {
        if (count > 100) {
            reject(new Error("ERROR 1"));
        }
        setTimeout(function () {
            resolve(console.log('Count: ', count), console.log('Into wringOut'), a = 12, console.log('a: ', a));
        }, count * TIME_FOR_ONE_TIME);
    });
}

function squatOut(count) {
    return new _promise2.default(function (resolve, reject) {
        if (count > 100) {
            reject(new Error("ERROR 2"));
        }
        setTimeout(function () {
            resolve(console.log('Count: ', count), console.log('Into squatOut'), a = 22, console.log('a: ', a));
        }, count * TIME_FOR_ONE_TIME);
    });
}

getTraining().then(function (result) {
    console.log(result);
});