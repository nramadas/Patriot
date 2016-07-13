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
              return models.User.findOne({
                where: { username: username },
                include: [{
                  model: models.User,
                  as: 'contacts'
                }]
              });

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvaGFuZGxlcnMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztrQkFFZTtBQUFBO0FBQUEsMEVBQVUsaUJBQU0sR0FBTjtBQUFBLDZCQUNmLFFBRGUsRUFDTCxRQURLLEVBSWYsSUFKZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUNRLElBQUksT0FBSixDQUFZLElBRHBCO0FBQ2Ysc0JBRGUscUJBQ2YsUUFEZTtBQUNMLHNCQURLLHFCQUNMLFFBREs7QUFBQTtBQUFBO0FBQUEscUJBSUYsT0FBTyxJQUFQLENBQVksT0FBWixDQUFvQjtBQUNyQyx1QkFBTyxFQUFFLGtCQUFGLEVBRDhCO0FBRXJDLHlCQUFTLENBQUM7QUFDUix5QkFBTyxPQUFPLElBRE47QUFFUixzQkFBSTtBQUZJLGlCQUFEO0FBRjRCLGVBQXBCLENBSkU7O0FBQUE7QUFJZixrQkFKZTs7O0FBWXJCLGtCQUFJLFFBQVEsS0FBSyxZQUFMLENBQWtCLFFBQWxCLENBQVosRUFBeUM7QUFDdkMseUNBQVcsR0FBWCxFQUFnQixJQUFoQjtBQUNELGVBRkQsTUFFTztBQUNMLDJDQUFhLEdBQWI7QUFDRDtBQWhCb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBa0JyQixzQkFBUSxLQUFSO0FBQ0EsOENBQWtCLEdBQWxCOztBQW5CcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXR1cm5Vc2VyLCByZXR1cm5Ob1VzZXIsIHJldHVyblNlcnZlckVycm9yIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVscyA9PiBhc3luYyBjdHggPT4ge1xuICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gY3R4LnJlcXVlc3QuYm9keTtcblxuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBtb2RlbHMuVXNlci5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7IHVzZXJuYW1lIH0sXG4gICAgICBpbmNsdWRlOiBbe1xuICAgICAgICBtb2RlbDogbW9kZWxzLlVzZXIsXG4gICAgICAgIGFzOiAnY29udGFjdHMnLFxuICAgICAgfV0sXG4gICAgfSk7XG5cbiAgICBpZiAodXNlciAmJiB1c2VyLmF1dGhlbnRpY2F0ZShwYXNzd29yZCkpIHtcbiAgICAgIHJldHVyblVzZXIoY3R4LCB1c2VyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuTm9Vc2VyKGN0eCk7XG4gICAgfVxuICB9IGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIHJldHVyblNlcnZlckVycm9yKGN0eCk7XG4gIH1cbn1cbiJdfQ==