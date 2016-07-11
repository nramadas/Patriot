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

var _main = require('./templates/main');

var _main2 = _interopRequireDefault(_main);

var _User = require('./models/User');

var _User2 = _interopRequireDefault(_User);

var _Contact = require('./models/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _ContactRequest = require('./models/ContactRequest');

var _ContactRequest2 = _interopRequireDefault(_ContactRequest);

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

(0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
  var _this = this;

  return _regenerator2.default.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          return _context4.delegateYield(_regenerator2.default.mark(function _callee3() {
            var Contact, ContactRequest, User;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return sql.authenticate();

                  case 2:
                    Contact = (0, _Contact2.default)(sql);
                    ContactRequest = (0, _ContactRequest2.default)(sql);
                    User = (0, _User2.default)(sql, Contact, ContactRequest);
                    _context3.next = 7;
                    return User.sync();

                  case 7:
                    _context3.next = 9;
                    return Contact.sync();

                  case 9:
                    _context3.next = 11;
                    return ContactRequest.sync();

                  case 11:

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

                    router.get('/', function () {
                      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
                        return _regenerator2.default.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                ctx.body = (0, _main2.default)();

                              case 1:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        }, _callee, _this);
                      }));

                      return function (_x) {
                        return _ref2.apply(this, arguments);
                      };
                    }());

                    router.get('/searchUsers', function () {
                      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx) {
                        var username, users;
                        return _regenerator2.default.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                username = ctx.request.query.q;
                                _context2.next = 3;
                                return User.findAll({
                                  where: { username: { $ilike: '%' + username + '%' } }
                                });

                              case 3:
                                users = _context2.sent;


                                ctx.body = {
                                  users: users.map(function (_ref4) {
                                    var id = _ref4.id;
                                    var username = _ref4.username;
                                    return { id: id, username: username };
                                  })
                                };

                              case 5:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, _this);
                      }));

                      return function (_x2) {
                        return _ref3.apply(this, arguments);
                      };
                    }());

                    server.use(bodyparser);
                    server.use(router.routes());
                    server.use(router.allowedMethods());
                    server.use(assetFiles);

                    server.listen(PORT, function () {
                      console.log('App launching on port ' + PORT);
                    });

                  case 18:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3, _this);
          })(), 't0', 2);

        case 2:
          _context4.next = 7;
          break;

        case 4:
          _context4.prev = 4;
          _context4.t1 = _context4['catch'](0);

          console.error(_context4.t1.stack);

        case 7:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, this, [[0, 4]]);
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxPQUFPLElBQWI7QUFDQSxJQUFNLFNBQVMsbUJBQWY7QUFDQSxJQUFNLGFBQWEsOEJBQW5CO0FBQ0EsSUFBTSxTQUFTLHlCQUFmO0FBQ0EsSUFBTSxhQUFhLHlCQUFVLFFBQVYsQ0FBbkI7O0FBRUEsSUFBTSxNQUFNLHdCQUFjLFNBQWQsRUFBeUIsVUFBekIsRUFBcUMsRUFBckMsRUFBeUM7QUFDbkQsUUFBTSxXQUQ2QztBQUVuRCxXQUFTLFVBRjBDO0FBR25ELFFBQU07QUFDSixTQUFLLENBREQ7QUFFSixTQUFLLENBRkQ7QUFHSixVQUFNO0FBSEY7QUFINkMsQ0FBekMsQ0FBWjs7QUFVQSwyREFBQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUdTLE9BSFQsRUFJUyxjQUpULEVBS1MsSUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFFUyxJQUFJLFlBQUosRUFGVDs7QUFBQTtBQUdTLDJCQUhULEdBR21CLHVCQUFtQixHQUFuQixDQUhuQjtBQUlTLGtDQUpULEdBSTBCLDhCQUFxQixHQUFyQixDQUoxQjtBQUtTLHdCQUxULEdBS2dCLG9CQUFnQixHQUFoQixFQUFxQixPQUFyQixFQUE4QixjQUE5QixDQUxoQjtBQUFBO0FBQUEsMkJBT1MsS0FBSyxJQUFMLEVBUFQ7O0FBQUE7QUFBQTtBQUFBLDJCQVFTLFFBQVEsSUFBUixFQVJUOztBQUFBO0FBQUE7QUFBQSwyQkFTUyxlQUFlLElBQWYsRUFUVDs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQ0csMkJBQU8sR0FBUCxDQUFXLEdBQVg7QUFBQSw2RkFBZ0IsaUJBQU0sR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2Qsb0NBQUksSUFBSixHQUFXLHFCQUFYOztBQURjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSwyQkFBTyxHQUFQLENBQVcsY0FBWDtBQUFBLDZGQUEyQixrQkFBTSxHQUFOO0FBQUEsNEJBQ25CLFFBRG1CLEVBRW5CLEtBRm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkIsd0NBRG1CLEdBQ1IsSUFBSSxPQUFKLENBQVksS0FBWixDQUFrQixDQURWO0FBQUE7QUFBQSx1Q0FFTCxLQUFLLE9BQUwsQ0FBYTtBQUMvQix5Q0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFZLFFBQVosTUFBRixFQUFaO0FBRHdCLGlDQUFiLENBRks7O0FBQUE7QUFFbkIscUNBRm1COzs7QUFNekIsb0NBQUksSUFBSixHQUFXO0FBQ1QseUNBQU8sTUFBTSxHQUFOLENBQVU7QUFBQSx3Q0FBRyxFQUFILFNBQUcsRUFBSDtBQUFBLHdDQUFPLFFBQVAsU0FBTyxRQUFQO0FBQUEsMkNBQXVCLEVBQUUsTUFBRixFQUFNLGtCQUFOLEVBQXZCO0FBQUEsbUNBQVY7QUFERSxpQ0FBWDs7QUFOeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdBLDJCQUFPLEdBQVAsQ0FBVyxVQUFYO0FBQ0EsMkJBQU8sR0FBUCxDQUFXLE9BQU8sTUFBUCxFQUFYO0FBQ0EsMkJBQU8sR0FBUCxDQUFXLE9BQU8sY0FBUCxFQUFYO0FBQ0EsMkJBQU8sR0FBUCxDQUFXLFVBQVg7O0FBRUEsMkJBQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsWUFBTTtBQUN4Qiw4QkFBUSxHQUFSLDRCQUFxQyxJQUFyQztBQUNELHFCQUZEOztBQW5FSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQXVFRyxrQkFBUSxLQUFSLENBQWMsYUFBRSxLQUFoQjs7QUF2RUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLb2EgZnJvbSAna29hJztcbmltcG9ydCBLb2FSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgS29hQm9keVBhcnNlciBmcm9tICdrb2EtYm9keXBhcnNlcic7XG5pbXBvcnQgS29hU3RhdGljIGZyb20gJ2tvYS1zdGF0aWMnO1xuaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvbWFpbic7XG5pbXBvcnQgY3JlYXRlVXNlck1vZGVsIGZyb20gJy4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RNb2RlbCBmcm9tICcuL21vZGVscy9Db250YWN0JztcbmltcG9ydCBjcmVhdGVDb250YWN0UmVxdWVzdCBmcm9tICcuL21vZGVscy9Db250YWN0UmVxdWVzdCc7XG5cbmNvbnN0IFBPUlQgPSA4ODg4O1xuY29uc3Qgc2VydmVyID0gbmV3IEtvYSgpO1xuY29uc3QgYm9keXBhcnNlciA9IEtvYUJvZHlQYXJzZXIoKTtcbmNvbnN0IHJvdXRlciA9IG5ldyBLb2FSb3V0ZXIoKTtcbmNvbnN0IGFzc2V0RmlsZXMgPSBLb2FTdGF0aWMoJ2Fzc2V0cycpO1xuXG5jb25zdCBzcWwgPSBuZXcgU2VxdWVsaXplKCdwYXRyaW90JywgJ25pcmFuamFuJywgJycsIHtcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIGRpYWxlY3Q6ICdwb3N0Z3JlcycsXG4gIHBvb2w6IHtcbiAgICBtYXg6IDUsXG4gICAgbWluOiAwLFxuICAgIGlkbGU6IDEwMDAwXG4gIH0sXG59KTtcblxuKGFzeW5jIGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIGF3YWl0IHNxbC5hdXRoZW50aWNhdGUoKTtcbiAgICBjb25zdCBDb250YWN0ID0gY3JlYXRlQ29udGFjdE1vZGVsKHNxbCk7XG4gICAgY29uc3QgQ29udGFjdFJlcXVlc3QgPSBjcmVhdGVDb250YWN0UmVxdWVzdChzcWwpO1xuICAgIGNvbnN0IFVzZXIgPSBjcmVhdGVVc2VyTW9kZWwoc3FsLCBDb250YWN0LCBDb250YWN0UmVxdWVzdCk7XG5cbiAgICBhd2FpdCBVc2VyLnN5bmMoKTtcbiAgICBhd2FpdCBDb250YWN0LnN5bmMoKTtcbiAgICBhd2FpdCBDb250YWN0UmVxdWVzdC5zeW5jKCk7XG5cbiAgICAvLyBjb25zdCBhID0gYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgIC8vICAgdXNlcm5hbWU6ICdBbGljZScsXG4gICAgLy8gICBwYXNzd29yZDogJ2ZvbycsXG4gICAgLy8gICBwYXNzd29yZENvbmZpcm1hdGlvbjogJ2ZvbycsXG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBjb25zdCBiID0gYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgIC8vICAgdXNlcm5hbWU6ICdCb2InLFxuICAgIC8vICAgcGFzc3dvcmQ6ICdmb28nLFxuICAgIC8vICAgcGFzc3dvcmRDb25maXJtYXRpb246ICdmb28nLFxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gY29uc3QgYyA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAvLyAgIHVzZXJuYW1lOiAnQ2FycmllJyxcbiAgICAvLyAgIHBhc3N3b3JkOiAnZm9vJyxcbiAgICAvLyAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAnZm9vJyxcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IGQgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgLy8gICB1c2VybmFtZTogJ0RhdmUnLFxuICAgIC8vICAgcGFzc3dvcmQ6ICdmb28nLFxuICAgIC8vICAgcGFzc3dvcmRDb25maXJtYXRpb246ICdmb28nLFxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gY29uc3QgZSA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcbiAgICAvLyAgIHVzZXJuYW1lOiAnRXJpbicsXG4gICAgLy8gICBwYXNzd29yZDogJ2ZvbycsXG4gICAgLy8gICBwYXNzd29yZENvbmZpcm1hdGlvbjogJ2ZvbycsXG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBjb25zdCBmID0gYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgIC8vICAgdXNlcm5hbWU6ICdGcmFuaycsXG4gICAgLy8gICBwYXNzd29yZDogJ2ZvbycsXG4gICAgLy8gICBwYXNzd29yZENvbmZpcm1hdGlvbjogJ2ZvbycsXG4gICAgLy8gfSk7XG5cbiAgICByb3V0ZXIuZ2V0KCcvJywgYXN5bmMgY3R4ID0+IHtcbiAgICAgIGN0eC5ib2R5ID0gdGVtcGxhdGUoKTtcbiAgICB9KTtcblxuICAgIHJvdXRlci5nZXQoJy9zZWFyY2hVc2VycycsIGFzeW5jIGN0eCA9PiB7XG4gICAgICBjb25zdCB1c2VybmFtZSA9IGN0eC5yZXF1ZXN0LnF1ZXJ5LnE7XG4gICAgICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXIuZmluZEFsbCh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJuYW1lOiB7ICRpbGlrZTogYCUke3VzZXJuYW1lfSVgfSB9LFxuICAgICAgfSk7XG5cbiAgICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICB1c2VyczogdXNlcnMubWFwKCh7IGlkLCB1c2VybmFtZSB9KSA9PiAoeyBpZCwgdXNlcm5hbWUgfSkpLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHNlcnZlci51c2UoYm9keXBhcnNlcik7XG4gICAgc2VydmVyLnVzZShyb3V0ZXIucm91dGVzKCkpO1xuICAgIHNlcnZlci51c2Uocm91dGVyLmFsbG93ZWRNZXRob2RzKCkpO1xuICAgIHNlcnZlci51c2UoYXNzZXRGaWxlcyk7XG5cbiAgICBzZXJ2ZXIubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBBcHAgbGF1bmNoaW5nIG9uIHBvcnQgJHtQT1JUfWApO1xuICAgIH0pO1xuICB9IGNhdGNoKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUuc3RhY2spO1xuICB9XG59KSgpO1xuIl19