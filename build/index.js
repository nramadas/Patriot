'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _User = require('./models/User');

var _User2 = _interopRequireDefault(_User);

var _Contact = require('./models/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _ContactRequest = require('./models/ContactRequest');

var _ContactRequest2 = _interopRequireDefault(_ContactRequest);

var _handlers = require('./handlers');

var _handlers2 = _interopRequireDefault(_handlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 8888;
var server = new _koa2.default();
var bodyparser = (0, _koaBodyparser2.default)();
var router = new _koaRouter2.default();
var assetFiles = (0, _koaStatic2.default)('assets');

var sql = new _sequelize2.default('patriot', 'niranjan', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

(0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var Contact, ContactRequest, User;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return sql.authenticate();

        case 3:
          Contact = (0, _Contact2.default)(sql);
          ContactRequest = (0, _ContactRequest2.default)(sql);
          User = (0, _User2.default)(sql, Contact, ContactRequest);
          _context.next = 8;
          return User.sync();

        case 8:
          _context.next = 10;
          return Contact.sync();

        case 10:
          _context.next = 12;
          return ContactRequest.sync();

        case 12:

          (0, _handlers2.default)(router, { User: User, Contact: Contact, ContactRequest: ContactRequest });

          //
          // const b = await User.create({
          //   username: 'Bob',
          //   password: 'foo',
          //   passwordConfirmation: 'foo',
          // });
          //
          // const c = await User.create({
          //   username: 'Carrie',
          //   password: 'foo',
          //   passwordConfirmation: 'foo',
          // });
          //
          // const d = await User.create({
          //   username: 'Dave',
          //   password: 'foo',
          //   passwordConfirmation: 'foo',
          // });
          //
          // const e = await User.create({
          //   username: 'Erin',
          //   password: 'foo',
          //   passwordConfirmation: 'foo',
          // });
          //
          // const f = await User.create({
          //   username: 'Frank',
          //   password: 'foo',
          //   passwordConfirmation: 'foo',
          // });

          server.use(bodyparser);
          server.use(router.routes());
          server.use(router.allowedMethods());
          server.use(assetFiles);

          server.listen(PORT, function () {
            console.log('App launching on port ' + PORT);
          });
          _context.next = 23;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context['catch'](0);

          console.error(_context.t0.stack);

        case 23:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this, [[0, 20]]);
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxPQUFPLElBQWI7QUFDQSxJQUFNLFNBQVMsbUJBQWY7QUFDQSxJQUFNLGFBQWEsOEJBQW5CO0FBQ0EsSUFBTSxTQUFTLHlCQUFmO0FBQ0EsSUFBTSxhQUFhLHlCQUFVLFFBQVYsQ0FBbkI7O0FBRUEsSUFBTSxNQUFNLHdCQUFjLFNBQWQsRUFBeUIsVUFBekIsRUFBcUMsRUFBckMsRUFBeUM7QUFDbkQsUUFBTSxXQUQ2QztBQUVuRCxXQUFTLFVBRjBDO0FBR25ELFFBQU07QUFDSixTQUFLLENBREQ7QUFFSixTQUFLLENBRkQ7QUFHSixVQUFNO0FBSEY7QUFINkMsQ0FBekMsQ0FBWjs7QUFVQSwyREFBQztBQUFBLE1BR1MsT0FIVCxFQUlTLGNBSlQsRUFLUyxJQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRVMsSUFBSSxZQUFKLEVBRlQ7O0FBQUE7QUFHUyxpQkFIVCxHQUdtQix1QkFBbUIsR0FBbkIsQ0FIbkI7QUFJUyx3QkFKVCxHQUkwQiw4QkFBcUIsR0FBckIsQ0FKMUI7QUFLUyxjQUxULEdBS2dCLG9CQUFnQixHQUFoQixFQUFxQixPQUFyQixFQUE4QixjQUE5QixDQUxoQjtBQUFBO0FBQUEsaUJBT1MsS0FBSyxJQUFMLEVBUFQ7O0FBQUE7QUFBQTtBQUFBLGlCQVFTLFFBQVEsSUFBUixFQVJUOztBQUFBO0FBQUE7QUFBQSxpQkFTUyxlQUFlLElBQWYsRUFUVDs7QUFBQTs7QUFXRyxrQ0FBYyxNQUFkLEVBQXNCLEVBQUUsVUFBRixFQUFRLGdCQUFSLEVBQWlCLDhCQUFqQixFQUF0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBLGlCQUFPLEdBQVAsQ0FBVyxVQUFYO0FBQ0EsaUJBQU8sR0FBUCxDQUFXLE9BQU8sTUFBUCxFQUFYO0FBQ0EsaUJBQU8sR0FBUCxDQUFXLE9BQU8sY0FBUCxFQUFYO0FBQ0EsaUJBQU8sR0FBUCxDQUFXLFVBQVg7O0FBRUEsaUJBQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsWUFBTTtBQUN4QixvQkFBUSxHQUFSLDRCQUFxQyxJQUFyQztBQUNELFdBRkQ7QUFsREg7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBc0RHLGtCQUFRLEtBQVIsQ0FBYyxZQUFFLEtBQWhCOztBQXRESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IEtvYVJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBLb2FCb2R5UGFyc2VyIGZyb20gJ2tvYS1ib2R5cGFyc2VyJztcbmltcG9ydCBLb2FTdGF0aWMgZnJvbSAna29hLXN0YXRpYyc7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmltcG9ydCBjcmVhdGVVc2VyTW9kZWwgZnJvbSAnLi9tb2RlbHMvVXNlcic7XG5pbXBvcnQgY3JlYXRlQ29udGFjdE1vZGVsIGZyb20gJy4vbW9kZWxzL0NvbnRhY3QnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RSZXF1ZXN0IGZyb20gJy4vbW9kZWxzL0NvbnRhY3RSZXF1ZXN0JztcbmltcG9ydCBzZXR1cEhhbmRsZXJzIGZyb20gJy4vaGFuZGxlcnMnO1xuXG5jb25zdCBQT1JUID0gODg4ODtcbmNvbnN0IHNlcnZlciA9IG5ldyBLb2EoKTtcbmNvbnN0IGJvZHlwYXJzZXIgPSBLb2FCb2R5UGFyc2VyKCk7XG5jb25zdCByb3V0ZXIgPSBuZXcgS29hUm91dGVyKCk7XG5jb25zdCBhc3NldEZpbGVzID0gS29hU3RhdGljKCdhc3NldHMnKTtcblxuY29uc3Qgc3FsID0gbmV3IFNlcXVlbGl6ZSgncGF0cmlvdCcsICduaXJhbmphbicsICcnLCB7XG4gIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICBkaWFsZWN0OiAncG9zdGdyZXMnLFxuICBwb29sOiB7XG4gICAgbWF4OiA1LFxuICAgIG1pbjogMCxcbiAgICBpZGxlOiAxMDAwMFxuICB9LFxufSk7XG5cbihhc3luYyBmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzcWwuYXV0aGVudGljYXRlKCk7XG4gICAgY29uc3QgQ29udGFjdCA9IGNyZWF0ZUNvbnRhY3RNb2RlbChzcWwpO1xuICAgIGNvbnN0IENvbnRhY3RSZXF1ZXN0ID0gY3JlYXRlQ29udGFjdFJlcXVlc3Qoc3FsKTtcbiAgICBjb25zdCBVc2VyID0gY3JlYXRlVXNlck1vZGVsKHNxbCwgQ29udGFjdCwgQ29udGFjdFJlcXVlc3QpO1xuXG4gICAgYXdhaXQgVXNlci5zeW5jKCk7XG4gICAgYXdhaXQgQ29udGFjdC5zeW5jKCk7XG4gICAgYXdhaXQgQ29udGFjdFJlcXVlc3Quc3luYygpO1xuXG4gICAgc2V0dXBIYW5kbGVycyhyb3V0ZXIsIHsgVXNlciwgQ29udGFjdCwgQ29udGFjdFJlcXVlc3QgfSk7XG5cblxuICAgIC8vXG4gICAgLy8gY29uc3QgYiA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAvLyAgIHVzZXJuYW1lOiAnQm9iJyxcbiAgICAvLyAgIHBhc3N3b3JkOiAnZm9vJyxcbiAgICAvLyAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAnZm9vJyxcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IGMgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgLy8gICB1c2VybmFtZTogJ0NhcnJpZScsXG4gICAgLy8gICBwYXNzd29yZDogJ2ZvbycsXG4gICAgLy8gICBwYXNzd29yZENvbmZpcm1hdGlvbjogJ2ZvbycsXG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBjb25zdCBkID0gYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgIC8vICAgdXNlcm5hbWU6ICdEYXZlJyxcbiAgICAvLyAgIHBhc3N3b3JkOiAnZm9vJyxcbiAgICAvLyAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAnZm9vJyxcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IGUgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgLy8gICB1c2VybmFtZTogJ0VyaW4nLFxuICAgIC8vICAgcGFzc3dvcmQ6ICdmb28nLFxuICAgIC8vICAgcGFzc3dvcmRDb25maXJtYXRpb246ICdmb28nLFxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gY29uc3QgZiA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAvLyAgIHVzZXJuYW1lOiAnRnJhbmsnLFxuICAgIC8vICAgcGFzc3dvcmQ6ICdmb28nLFxuICAgIC8vICAgcGFzc3dvcmRDb25maXJtYXRpb246ICdmb28nLFxuICAgIC8vIH0pO1xuXG4gICAgc2VydmVyLnVzZShib2R5cGFyc2VyKTtcbiAgICBzZXJ2ZXIudXNlKHJvdXRlci5yb3V0ZXMoKSk7XG4gICAgc2VydmVyLnVzZShyb3V0ZXIuYWxsb3dlZE1ldGhvZHMoKSk7XG4gICAgc2VydmVyLnVzZShhc3NldEZpbGVzKTtcblxuICAgIHNlcnZlci5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYEFwcCBsYXVuY2hpbmcgb24gcG9ydCAke1BPUlR9YCk7XG4gICAgfSk7XG4gIH0gY2F0Y2goZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFjayk7XG4gIH1cbn0pKCk7XG4iXX0=