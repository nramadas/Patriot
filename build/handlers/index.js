'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _frontpage = require('./frontpage');

var _frontpage2 = _interopRequireDefault(_frontpage);

var _searchUsers = require('./searchUsers');

var _searchUsers2 = _interopRequireDefault(_searchUsers);

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _register = require('./register');

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (router, models) {
  router.get('/', (0, _frontpage2.default)(models));
  router.get('/searchUsers', (0, _searchUsers2.default)(models));
  router.post('/login', (0, _login2.default)(models));
  router.post('/register', (0, _register2.default)(models));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvaGFuZGxlcnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSxVQUFDLE1BQUQsRUFBUyxNQUFULEVBQW9CO0FBQ2pDLFNBQU8sR0FBUCxDQUFXLEdBQVgsRUFBZ0IseUJBQVUsTUFBVixDQUFoQjtBQUNBLFNBQU8sR0FBUCxDQUFXLGNBQVgsRUFBMkIsMkJBQVksTUFBWixDQUEzQjtBQUNBLFNBQU8sSUFBUCxDQUFZLFFBQVosRUFBc0IscUJBQU0sTUFBTixDQUF0QjtBQUNBLFNBQU8sSUFBUCxDQUFZLFdBQVosRUFBeUIsd0JBQVMsTUFBVCxDQUF6QjtBQUNELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnJvbnRwYWdlIGZyb20gJy4vZnJvbnRwYWdlJztcbmltcG9ydCBzZWFyY2hVc2VycyBmcm9tICcuL3NlYXJjaFVzZXJzJztcbmltcG9ydCBsb2dpbiBmcm9tICcuL2xvZ2luJztcbmltcG9ydCByZWdpc3RlciBmcm9tICcuL3JlZ2lzdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHJvdXRlciwgbW9kZWxzKSA9PiB7XG4gIHJvdXRlci5nZXQoJy8nLCBmcm9udHBhZ2UobW9kZWxzKSk7XG4gIHJvdXRlci5nZXQoJy9zZWFyY2hVc2VycycsIHNlYXJjaFVzZXJzKG1vZGVscykpO1xuICByb3V0ZXIucG9zdCgnL2xvZ2luJywgbG9naW4obW9kZWxzKSk7XG4gIHJvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCByZWdpc3Rlcihtb2RlbHMpKTtcbn1cbiJdfQ==