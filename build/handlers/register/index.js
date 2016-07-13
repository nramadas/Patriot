'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _sequelize = require('sequelize');

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (models) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
      var user;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return models.User.create(ctx.request.body);

            case 3:
              user = _context.sent;

              (0, _helpers.returnUser)(ctx, user, []);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              if (_context.t0 instanceof _sequelize.ValidationError) {
                (0, _helpers.returnErrors)(ctx, _context.t0.errors.map(function (err) {
                  return {
                    field: err.path,
                    msg: err.message
                  };
                }));
              } else {
                (0, _helpers.returnServerError)(ctx);
              }

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 7]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvaGFuZGxlcnMvcmVnaXN0ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7OztrQkFFZTtBQUFBO0FBQUEsMEVBQVUsaUJBQU0sR0FBTjtBQUFBLFVBRWYsSUFGZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVGLE9BQU8sSUFBUCxDQUFZLE1BQVosQ0FBbUIsSUFBSSxPQUFKLENBQVksSUFBL0IsQ0FGRTs7QUFBQTtBQUVmLGtCQUZlOztBQUdyQix1Q0FBVyxHQUFYLEVBQWdCLElBQWhCLEVBQXNCLEVBQXRCO0FBSHFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUtyQixrQkFBSSxpREFBSixFQUFrQztBQUNoQywyQ0FBYSxHQUFiLEVBQWtCLFlBQUUsTUFBRixDQUFTLEdBQVQsQ0FBYTtBQUFBLHlCQUFRO0FBQ3JDLDJCQUFPLElBQUksSUFEMEI7QUFFckMseUJBQUssSUFBSTtBQUY0QixtQkFBUjtBQUFBLGlCQUFiLENBQWxCO0FBSUQsZUFMRCxNQUtPO0FBQ0wsZ0RBQWtCLEdBQWxCO0FBQ0Q7O0FBWm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IHsgcmV0dXJuVXNlciwgcmV0dXJuRXJyb3JzLCByZXR1cm5TZXJ2ZXJFcnJvciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RlbHMgPT4gYXN5bmMgY3R4ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgbW9kZWxzLlVzZXIuY3JlYXRlKGN0eC5yZXF1ZXN0LmJvZHkpO1xuICAgIHJldHVyblVzZXIoY3R4LCB1c2VyLCBbXSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFZhbGlkYXRpb25FcnJvcikge1xuICAgICAgcmV0dXJuRXJyb3JzKGN0eCwgZS5lcnJvcnMubWFwKGVyciA9PiAoe1xuICAgICAgICBmaWVsZDogZXJyLnBhdGgsXG4gICAgICAgIG1zZzogZXJyLm1lc3NhZ2UsXG4gICAgICB9KSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5TZXJ2ZXJFcnJvcihjdHgpO1xuICAgIH1cbiAgfVxufVxuIl19