'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (models) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
      var _ctx$request$body, username, password, user;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ctx$request$body = ctx.request.body;
              username = _ctx$request$body.username;
              password = _ctx$request$body.password;
              _context.prev = 3;
              _context.next = 6;
              return models.User.findOne({ where: { username: username } });

            case 6:
              user = _context.sent;

              if (user && user.authenticate(password)) {
                (0, _helpers.returnUser)(ctx, user);
              } else {
                (0, _helpers.returnNoUser)(ctx);
              }
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](3);

              console.error(_context.t0);
              (0, _helpers.returnServerError)(ctx);

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[3, 10]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvaGFuZGxlcnMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztrQkFFZTtBQUFBO0FBQUEsMEVBQVUsaUJBQU0sR0FBTjtBQUFBLDZCQUNmLFFBRGUsRUFDTCxRQURLLEVBSWYsSUFKZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUNRLElBQUksT0FBSixDQUFZLElBRHBCO0FBQ2Ysc0JBRGUscUJBQ2YsUUFEZTtBQUNMLHNCQURLLHFCQUNMLFFBREs7QUFBQTtBQUFBO0FBQUEscUJBSUYsT0FBTyxJQUFQLENBQVksT0FBWixDQUFvQixFQUFFLE9BQU8sRUFBRSxrQkFBRixFQUFULEVBQXBCLENBSkU7O0FBQUE7QUFJZixrQkFKZTs7QUFLckIsa0JBQUksUUFBUSxLQUFLLFlBQUwsQ0FBa0IsUUFBbEIsQ0FBWixFQUF5QztBQUN2Qyx5Q0FBVyxHQUFYLEVBQWdCLElBQWhCO0FBQ0QsZUFGRCxNQUVPO0FBQ0wsMkNBQWEsR0FBYjtBQUNEO0FBVG9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVdyQixzQkFBUSxLQUFSO0FBQ0EsOENBQWtCLEdBQWxCOztBQVpxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJldHVyblVzZXIsIHJldHVybk5vVXNlciwgcmV0dXJuU2VydmVyRXJyb3IgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgbW9kZWxzID0+IGFzeW5jIGN0eCA9PiB7XG4gIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBjdHgucmVxdWVzdC5ib2R5O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IG1vZGVscy5Vc2VyLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VybmFtZSB9IH0pO1xuICAgIGlmICh1c2VyICYmIHVzZXIuYXV0aGVudGljYXRlKHBhc3N3b3JkKSkge1xuICAgICAgcmV0dXJuVXNlcihjdHgsIHVzZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5Ob1VzZXIoY3R4KTtcbiAgICB9XG4gIH0gY2F0Y2goZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgcmV0dXJuU2VydmVyRXJyb3IoY3R4KTtcbiAgfVxufVxuIl19