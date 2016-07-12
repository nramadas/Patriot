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

          // const a = await User.create({
          //   username: 'Alice',
          //   password: 'foo',
          //   passwordConfirmation: 'foo',
          // });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxPQUFPLElBQWI7QUFDQSxJQUFNLFNBQVMsbUJBQWY7QUFDQSxJQUFNLGFBQWEsOEJBQW5CO0FBQ0EsSUFBTSxTQUFTLHlCQUFmO0FBQ0EsSUFBTSxhQUFhLHlCQUFVLFFBQVYsQ0FBbkI7O0FBRUEsSUFBTSxNQUFNLHdCQUFjLFNBQWQsRUFBeUIsVUFBekIsRUFBcUMsRUFBckMsRUFBeUM7QUFDbkQsUUFBTSxXQUQ2QztBQUVuRCxXQUFTLFVBRjBDO0FBR25ELFFBQU07QUFDSixTQUFLLENBREQ7QUFFSixTQUFLLENBRkQ7QUFHSixVQUFNO0FBSEY7QUFINkMsQ0FBekMsQ0FBWjs7QUFVQSwyREFBQztBQUFBLE1BR1MsT0FIVCxFQUlTLGNBSlQsRUFLUyxJQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRVMsSUFBSSxZQUFKLEVBRlQ7O0FBQUE7QUFHUyxpQkFIVCxHQUdtQix1QkFBbUIsR0FBbkIsQ0FIbkI7QUFJUyx3QkFKVCxHQUkwQiw4QkFBcUIsR0FBckIsQ0FKMUI7QUFLUyxjQUxULEdBS2dCLG9CQUFnQixHQUFoQixFQUFxQixPQUFyQixFQUE4QixjQUE5QixDQUxoQjtBQUFBO0FBQUEsaUJBT1MsS0FBSyxJQUFMLEVBUFQ7O0FBQUE7QUFBQTtBQUFBLGlCQVFTLFFBQVEsSUFBUixFQVJUOztBQUFBO0FBQUE7QUFBQSxpQkFTUyxlQUFlLElBQWYsRUFUVDs7QUFBQTs7QUFXRyxrQ0FBYyxNQUFkLEVBQXNCLEVBQUUsVUFBRixFQUFRLGdCQUFSLEVBQWlCLDhCQUFqQixFQUF0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0EsaUJBQU8sR0FBUCxDQUFXLFVBQVg7QUFDQSxpQkFBTyxHQUFQLENBQVcsT0FBTyxNQUFQLEVBQVg7QUFDQSxpQkFBTyxHQUFQLENBQVcsT0FBTyxjQUFQLEVBQVg7QUFDQSxpQkFBTyxHQUFQLENBQVcsVUFBWDs7QUFFQSxpQkFBTyxNQUFQLENBQWMsSUFBZCxFQUFvQixZQUFNO0FBQ3hCLG9CQUFRLEdBQVIsNEJBQXFDLElBQXJDO0FBQ0QsV0FGRDtBQXRESDtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUEwREcsa0JBQVEsS0FBUixDQUFjLFlBQUUsS0FBaEI7O0FBMURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS29hIGZyb20gJ2tvYSc7XG5pbXBvcnQgS29hUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xuaW1wb3J0IEtvYUJvZHlQYXJzZXIgZnJvbSAna29hLWJvZHlwYXJzZXInO1xuaW1wb3J0IEtvYVN0YXRpYyBmcm9tICdrb2Etc3RhdGljJztcbmltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcblxuaW1wb3J0IGNyZWF0ZVVzZXJNb2RlbCBmcm9tICcuL21vZGVscy9Vc2VyJztcbmltcG9ydCBjcmVhdGVDb250YWN0TW9kZWwgZnJvbSAnLi9tb2RlbHMvQ29udGFjdCc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdFJlcXVlc3QgZnJvbSAnLi9tb2RlbHMvQ29udGFjdFJlcXVlc3QnO1xuaW1wb3J0IHNldHVwSGFuZGxlcnMgZnJvbSAnLi9oYW5kbGVycyc7XG5cbmNvbnN0IFBPUlQgPSA4ODg4O1xuY29uc3Qgc2VydmVyID0gbmV3IEtvYSgpO1xuY29uc3QgYm9keXBhcnNlciA9IEtvYUJvZHlQYXJzZXIoKTtcbmNvbnN0IHJvdXRlciA9IG5ldyBLb2FSb3V0ZXIoKTtcbmNvbnN0IGFzc2V0RmlsZXMgPSBLb2FTdGF0aWMoJ2Fzc2V0cycpO1xuXG5jb25zdCBzcWwgPSBuZXcgU2VxdWVsaXplKCdwYXRyaW90JywgJ25pcmFuamFuJywgJycsIHtcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIGRpYWxlY3Q6ICdwb3N0Z3JlcycsXG4gIHBvb2w6IHtcbiAgICBtYXg6IDUsXG4gICAgbWluOiAwLFxuICAgIGlkbGU6IDEwMDAwXG4gIH0sXG59KTtcblxuKGFzeW5jIGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHNxbC5hdXRoZW50aWNhdGUoKTtcbiAgICBjb25zdCBDb250YWN0ID0gY3JlYXRlQ29udGFjdE1vZGVsKHNxbCk7XG4gICAgY29uc3QgQ29udGFjdFJlcXVlc3QgPSBjcmVhdGVDb250YWN0UmVxdWVzdChzcWwpO1xuICAgIGNvbnN0IFVzZXIgPSBjcmVhdGVVc2VyTW9kZWwoc3FsLCBDb250YWN0LCBDb250YWN0UmVxdWVzdCk7XG5cbiAgICBhd2FpdCBVc2VyLnN5bmMoKTtcbiAgICBhd2FpdCBDb250YWN0LnN5bmMoKTtcbiAgICBhd2FpdCBDb250YWN0UmVxdWVzdC5zeW5jKCk7XG5cbiAgICBzZXR1cEhhbmRsZXJzKHJvdXRlciwgeyBVc2VyLCBDb250YWN0LCBDb250YWN0UmVxdWVzdCB9KTtcblxuICAgIC8vIGNvbnN0IGEgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgLy8gICB1c2VybmFtZTogJ0FsaWNlJyxcbiAgICAvLyAgIHBhc3N3b3JkOiAnZm9vJyxcbiAgICAvLyAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAnZm9vJyxcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IGIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgLy8gICB1c2VybmFtZTogJ0JvYicsXG4gICAgLy8gICBwYXNzd29yZDogJ2ZvbycsXG4gICAgLy8gICBwYXNzd29yZENvbmZpcm1hdGlvbjogJ2ZvbycsXG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBjb25zdCBjID0gYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgIC8vICAgdXNlcm5hbWU6ICdDYXJyaWUnLFxuICAgIC8vICAgcGFzc3dvcmQ6ICdmb28nLFxuICAgIC8vICAgcGFzc3dvcmRDb25maXJtYXRpb246ICdmb28nLFxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gY29uc3QgZCA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAvLyAgIHVzZXJuYW1lOiAnRGF2ZScsXG4gICAgLy8gICBwYXNzd29yZDogJ2ZvbycsXG4gICAgLy8gICBwYXNzd29yZENvbmZpcm1hdGlvbjogJ2ZvbycsXG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBjb25zdCBlID0gYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgIC8vICAgdXNlcm5hbWU6ICdFcmluJyxcbiAgICAvLyAgIHBhc3N3b3JkOiAnZm9vJyxcbiAgICAvLyAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAnZm9vJyxcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IGYgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgLy8gICB1c2VybmFtZTogJ0ZyYW5rJyxcbiAgICAvLyAgIHBhc3N3b3JkOiAnZm9vJyxcbiAgICAvLyAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAnZm9vJyxcbiAgICAvLyB9KTtcblxuICAgIHNlcnZlci51c2UoYm9keXBhcnNlcik7XG4gICAgc2VydmVyLnVzZShyb3V0ZXIucm91dGVzKCkpO1xuICAgIHNlcnZlci51c2Uocm91dGVyLmFsbG93ZWRNZXRob2RzKCkpO1xuICAgIHNlcnZlci51c2UoYXNzZXRGaWxlcyk7XG5cbiAgICBzZXJ2ZXIubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBBcHAgbGF1bmNoaW5nIG9uIHBvcnQgJHtQT1JUfWApO1xuICAgIH0pO1xuICB9IGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUuc3RhY2spO1xuICB9XG59KSgpO1xuIl19