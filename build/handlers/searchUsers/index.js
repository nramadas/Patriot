"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (models) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
      var username, users;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = ctx.request.query.q;
              _context.prev = 1;
              _context.next = 4;
              return models.User.findAll({
                where: { username: { $ilike: "%" + username + "%" } }
              });

            case 4:
              users = _context.sent;


              ctx.body = {
                users: users.map(function (_ref2) {
                  var id = _ref2.id;
                  var username = _ref2.username;
                  return { id: id, username: username };
                })
              };
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);

              ctx.status = 500;
              ctx.body = {
                users: []
              };

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvaGFuZGxlcnMvc2VhcmNoVXNlcnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztrQkFBZTtBQUFBO0FBQUEsMEVBQVUsaUJBQU0sR0FBTjtBQUFBLFVBQ2pCLFFBRGlCLEVBSWYsS0FKZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCLHNCQURpQixHQUNOLElBQUksT0FBSixDQUFZLEtBQVosQ0FBa0IsQ0FEWjtBQUFBO0FBQUE7QUFBQSxxQkFJRCxPQUFPLElBQVAsQ0FBWSxPQUFaLENBQW9CO0FBQ3RDLHVCQUFPLEVBQUUsVUFBVSxFQUFFLGNBQVksUUFBWixNQUFGLEVBQVo7QUFEK0IsZUFBcEIsQ0FKQzs7QUFBQTtBQUlmLG1CQUplOzs7QUFRckIsa0JBQUksSUFBSixHQUFXO0FBQ1QsdUJBQU8sTUFBTSxHQUFOLENBQVU7QUFBQSxzQkFBRyxFQUFILFNBQUcsRUFBSDtBQUFBLHNCQUFPLFFBQVAsU0FBTyxRQUFQO0FBQUEseUJBQXVCLEVBQUUsTUFBRixFQUFNLGtCQUFOLEVBQXZCO0FBQUEsaUJBQVY7QUFERSxlQUFYO0FBUnFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVlyQixrQkFBSSxNQUFKLEdBQWEsR0FBYjtBQUNBLGtCQUFJLElBQUosR0FBVztBQUNULHVCQUFPO0FBREUsZUFBWDs7QUFicUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBtb2RlbHMgPT4gYXN5bmMgY3R4ID0+IHtcbiAgY29uc3QgdXNlcm5hbWUgPSBjdHgucmVxdWVzdC5xdWVyeS5xO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBtb2RlbHMuVXNlci5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiB7IHVzZXJuYW1lOiB7ICRpbGlrZTogYCUke3VzZXJuYW1lfSVgfSB9LFxuICAgIH0pO1xuXG4gICAgY3R4LmJvZHkgPSB7XG4gICAgICB1c2VyczogdXNlcnMubWFwKCh7IGlkLCB1c2VybmFtZSB9KSA9PiAoeyBpZCwgdXNlcm5hbWUgfSkpLFxuICAgIH07XG4gIH0gY2F0Y2goZSkge1xuICAgIGN0eC5zdGF0dXMgPSA1MDA7XG4gICAgY3R4LmJvZHkgPSB7XG4gICAgICB1c2VyczogW10sXG4gICAgfTtcbiAgfVxufVxuIl19