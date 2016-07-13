'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var returnErrors = exports.returnErrors = function returnErrors(ctx, errors) {
  ctx.status = 400;
  ctx.body = { errors: errors };
};

var returnNoUser = exports.returnNoUser = function returnNoUser(ctx) {
  returnErrors(ctx, [{ field: 'username', msg: 'incorrect username or password' }]);
};

var returnServerError = exports.returnServerError = function returnServerError(ctx) {
  ctx.status = 500;
  ctx.body = {
    errors: [{ field: '', msg: 'Something wen\'t wrong' }]
  };
};

var returnUser = exports.returnUser = function returnUser(ctx, user) {
  ctx.body = {
    user: {
      id: user.id,
      username: user.username
    },
    contacts: (user.contacts || []).map(function (c) {
      return {
        id: c.id,
        username: c.username
      };
    })
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvaGFuZGxlcnMvaGVscGVycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU0sc0NBQWUsU0FBZixZQUFlLENBQUMsR0FBRCxFQUFNLE1BQU4sRUFBaUI7QUFDM0MsTUFBSSxNQUFKLEdBQWEsR0FBYjtBQUNBLE1BQUksSUFBSixHQUFXLEVBQUUsY0FBRixFQUFYO0FBQ0QsQ0FITTs7QUFLQSxJQUFNLHNDQUFlLFNBQWYsWUFBZSxNQUFPO0FBQ2pDLGVBQWEsR0FBYixFQUFrQixDQUNoQixFQUFFLE9BQU8sVUFBVCxFQUFxQixLQUFLLGdDQUExQixFQURnQixDQUFsQjtBQUdELENBSk07O0FBTUEsSUFBTSxnREFBb0IsU0FBcEIsaUJBQW9CLE1BQU87QUFDdEMsTUFBSSxNQUFKLEdBQWEsR0FBYjtBQUNBLE1BQUksSUFBSixHQUFXO0FBQ1QsWUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFULEVBQWEsS0FBSyx3QkFBbEIsRUFBRDtBQURDLEdBQVg7QUFHRCxDQUxNOztBQU9BLElBQU0sa0NBQWEsU0FBYixVQUFhLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBZTtBQUN2QyxNQUFJLElBQUosR0FBVztBQUNULFVBQU07QUFDSixVQUFJLEtBQUssRUFETDtBQUVKLGdCQUFVLEtBQUs7QUFGWCxLQURHO0FBS1QsY0FBVSxDQUFDLEtBQUssUUFBTCxJQUFpQixFQUFsQixFQUFzQixHQUF0QixDQUEwQjtBQUFBLGFBQU07QUFDeEMsWUFBSSxFQUFFLEVBRGtDO0FBRXhDLGtCQUFVLEVBQUU7QUFGNEIsT0FBTjtBQUFBLEtBQTFCO0FBTEQsR0FBWDtBQVVELENBWE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmV0dXJuRXJyb3JzID0gKGN0eCwgZXJyb3JzKSA9PiB7XG4gIGN0eC5zdGF0dXMgPSA0MDA7XG4gIGN0eC5ib2R5ID0geyBlcnJvcnMgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXR1cm5Ob1VzZXIgPSBjdHggPT4ge1xuICByZXR1cm5FcnJvcnMoY3R4LCBbXG4gICAgeyBmaWVsZDogJ3VzZXJuYW1lJywgbXNnOiAnaW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkJyB9XG4gIF0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJldHVyblNlcnZlckVycm9yID0gY3R4ID0+IHtcbiAgY3R4LnN0YXR1cyA9IDUwMDtcbiAgY3R4LmJvZHkgPSB7XG4gICAgZXJyb3JzOiBbeyBmaWVsZDogJycsIG1zZzogJ1NvbWV0aGluZyB3ZW5cXCd0IHdyb25nJyB9XSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXR1cm5Vc2VyID0gKGN0eCwgdXNlcikgPT4ge1xuICBjdHguYm9keSA9IHtcbiAgICB1c2VyOiB7XG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuICAgIH0sXG4gICAgY29udGFjdHM6ICh1c2VyLmNvbnRhY3RzIHx8IFtdKS5tYXAoYyA9PiAoe1xuICAgICAgaWQ6IGMuaWQsXG4gICAgICB1c2VybmFtZTogYy51c2VybmFtZSxcbiAgICB9KSksXG4gIH07XG59O1xuIl19