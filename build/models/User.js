'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sql, Contact, ContactRequest) {
  var User = sql.define('user', {
    username: {
      type: _sequelize2.default.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 50]
      }
    },
    passwordDigest: {
      type: _sequelize2.default.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: _sequelize2.default.VIRTUAL,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    passwordConfirmation: {
      type: _sequelize2.default.VIRTUAL
    }
  }, {
    freezeTableName: true,
    indexes: [{ unique: true, fields: ['username'] }],
    instanceMethods: {
      authenticate: function authenticate(value) {
        if (_bcrypt2.default.compareSync(value, this.passwordDigest)) return this;else return false;
      }
    }
  });

  var hasSecurePassword = function hasSecurePassword(user, options, callback) {
    if (user.password != user.passwordConfirmation) {
      throw new Error("Password confirmation doesn't match Password");
    }

    _bcrypt2.default.hash(user.get('password'), 10, function (err, hash) {
      if (err) return callback(err);
      user.set('passwordDigest', hash);
      return callback(null, options);
    });
  };

  User.beforeCreate(function (user, options, callback) {
    if (user.password) hasSecurePassword(user, options, callback);else return callback(null, options);
  });

  User.beforeUpdate(function (user, options, callback) {
    if (user.password) hasSecurePassword(user, options, callback);else return callback(null, options);
  });

  User.belongsToMany(User, { through: Contact, as: 'Contact' });
  User.belongsToMany(User, { through: ContactRequest, as: 'ContactRequest' });

  return User;
};

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvbW9kZWxzL1VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUdlLFVBQVMsR0FBVCxFQUFjLE9BQWQsRUFBdUIsY0FBdkIsRUFBdUM7QUFDcEQsTUFBTSxPQUFPLElBQUksTUFBSixDQUFXLE1BQVgsRUFBbUI7QUFDOUIsY0FBVTtBQUNSLFlBQU0sb0JBQVUsTUFEUjtBQUVSLGlCQUFXLEtBRkg7QUFHUixnQkFBVTtBQUNSLGtCQUFVLElBREY7QUFFUixhQUFLLENBQUMsQ0FBRCxFQUFJLEVBQUo7QUFGRztBQUhGLEtBRG9CO0FBUzlCLG9CQUFnQjtBQUNkLFlBQU0sb0JBQVUsTUFERjtBQUVkLGdCQUFVO0FBQ1Isa0JBQVU7QUFERjtBQUZJLEtBVGM7QUFlOUIsY0FBVTtBQUNSLFlBQU0sb0JBQVUsT0FEUjtBQUVSLGlCQUFXLEtBRkg7QUFHUixnQkFBVTtBQUNSLGtCQUFVO0FBREY7QUFIRixLQWZvQjtBQXNCOUIsMEJBQXNCO0FBQ3BCLFlBQU0sb0JBQVU7QUFESTtBQXRCUSxHQUFuQixFQXlCVjtBQUNELHFCQUFpQixJQURoQjtBQUVELGFBQVMsQ0FBQyxFQUFFLFFBQVEsSUFBVixFQUFnQixRQUFRLENBQUMsVUFBRCxDQUF4QixFQUFELENBRlI7QUFHRCxxQkFBaUI7QUFDZixvQkFBYyxzQkFBUyxLQUFULEVBQWdCO0FBQzVCLFlBQUksaUJBQU8sV0FBUCxDQUFtQixLQUFuQixFQUEwQixLQUFLLGNBQS9CLENBQUosRUFDRSxPQUFPLElBQVAsQ0FERixLQUdFLE9BQU8sS0FBUDtBQUNIO0FBTmM7QUFIaEIsR0F6QlUsQ0FBYjs7QUFzQ0EsTUFBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQVMsSUFBVCxFQUFlLE9BQWYsRUFBd0IsUUFBeEIsRUFBa0M7QUFDeEQsUUFBSSxLQUFLLFFBQUwsSUFBaUIsS0FBSyxvQkFBMUIsRUFBZ0Q7QUFDOUMsWUFBTSxJQUFJLEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQ0Q7O0FBRUQscUJBQU8sSUFBUCxDQUFZLEtBQUssR0FBTCxDQUFTLFVBQVQsQ0FBWixFQUFrQyxFQUFsQyxFQUFzQyxVQUFTLEdBQVQsRUFBYyxJQUFkLEVBQW9CO0FBQ3hELFVBQUksR0FBSixFQUFTLE9BQU8sU0FBUyxHQUFULENBQVA7QUFDVCxXQUFLLEdBQUwsQ0FBUyxnQkFBVCxFQUEyQixJQUEzQjtBQUNBLGFBQU8sU0FBUyxJQUFULEVBQWUsT0FBZixDQUFQO0FBQ0QsS0FKRDtBQUtELEdBVkQ7O0FBWUEsT0FBSyxZQUFMLENBQWtCLFVBQVMsSUFBVCxFQUFlLE9BQWYsRUFBd0IsUUFBeEIsRUFBa0M7QUFDbEQsUUFBSSxLQUFLLFFBQVQsRUFDRSxrQkFBa0IsSUFBbEIsRUFBd0IsT0FBeEIsRUFBaUMsUUFBakMsRUFERixLQUdFLE9BQU8sU0FBUyxJQUFULEVBQWUsT0FBZixDQUFQO0FBQ0gsR0FMRDs7QUFPQSxPQUFLLFlBQUwsQ0FBa0IsVUFBUyxJQUFULEVBQWUsT0FBZixFQUF3QixRQUF4QixFQUFrQztBQUNsRCxRQUFJLEtBQUssUUFBVCxFQUNFLGtCQUFrQixJQUFsQixFQUF3QixPQUF4QixFQUFpQyxRQUFqQyxFQURGLEtBR0UsT0FBTyxTQUFTLElBQVQsRUFBZSxPQUFmLENBQVA7QUFDSCxHQUxEOztBQU9BLE9BQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixFQUFFLFNBQVMsT0FBWCxFQUFvQixJQUFJLFNBQXhCLEVBQXpCO0FBQ0EsT0FBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLEVBQUUsU0FBUyxjQUFYLEVBQTJCLElBQUksZ0JBQS9CLEVBQXpCOztBQUVBLFNBQU8sSUFBUDtBQUNELEM7O0FBeEVEOzs7O0FBQ0EiLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXF1ZWxpemUgZnJvbSAnc2VxdWVsaXplJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3FsLCBDb250YWN0LCBDb250YWN0UmVxdWVzdCkge1xuICBjb25zdCBVc2VyID0gc3FsLmRlZmluZSgndXNlcicsIHtcbiAgICB1c2VybmFtZToge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICB2YWxpZGF0ZToge1xuICAgICAgICBub3RFbXB0eTogdHJ1ZSxcbiAgICAgICAgbGVuOiBbMSwgNTBdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBhc3N3b3JkRGlnZXN0OiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HLFxuICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgbm90RW1wdHk6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5WSVJUVUFMLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgIG5vdEVtcHR5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVklSVFVBTFxuICAgIH0sXG4gIH0sIHtcbiAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gICAgaW5kZXhlczogW3sgdW5pcXVlOiB0cnVlLCBmaWVsZHM6IFsndXNlcm5hbWUnXSB9XSxcbiAgICBpbnN0YW5jZU1ldGhvZHM6IHtcbiAgICAgIGF1dGhlbnRpY2F0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKGJjcnlwdC5jb21wYXJlU3luYyh2YWx1ZSwgdGhpcy5wYXNzd29yZERpZ2VzdCkpXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgaGFzU2VjdXJlUGFzc3dvcmQgPSBmdW5jdGlvbih1c2VyLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGlmICh1c2VyLnBhc3N3b3JkICE9IHVzZXIucGFzc3dvcmRDb25maXJtYXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhc3N3b3JkIGNvbmZpcm1hdGlvbiBkb2Vzbid0IG1hdGNoIFBhc3N3b3JkXCIpO1xuICAgIH1cblxuICAgIGJjcnlwdC5oYXNoKHVzZXIuZ2V0KCdwYXNzd29yZCcpLCAxMCwgZnVuY3Rpb24oZXJyLCBoYXNoKSB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgIHVzZXIuc2V0KCdwYXNzd29yZERpZ2VzdCcsIGhhc2gpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFVzZXIuYmVmb3JlQ3JlYXRlKGZ1bmN0aW9uKHVzZXIsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHVzZXIucGFzc3dvcmQpXG4gICAgICBoYXNTZWN1cmVQYXNzd29yZCh1c2VyLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIG9wdGlvbnMpO1xuICB9KTtcblxuICBVc2VyLmJlZm9yZVVwZGF0ZShmdW5jdGlvbih1c2VyLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGlmICh1c2VyLnBhc3N3b3JkKVxuICAgICAgaGFzU2VjdXJlUGFzc3dvcmQodXNlciwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBvcHRpb25zKTtcbiAgfSk7XG5cbiAgVXNlci5iZWxvbmdzVG9NYW55KFVzZXIsIHsgdGhyb3VnaDogQ29udGFjdCwgYXM6ICdDb250YWN0JyB9KTtcbiAgVXNlci5iZWxvbmdzVG9NYW55KFVzZXIsIHsgdGhyb3VnaDogQ29udGFjdFJlcXVlc3QsIGFzOiAnQ29udGFjdFJlcXVlc3QnIH0pO1xuXG4gIHJldHVybiBVc2VyO1xufVxuIl19