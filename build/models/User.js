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
        len: {
          args: [7, 50],
          msg: 'username must be between 8 and 50 characters'
        }
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
        len: {
          args: [7, 100],
          msg: 'passwords must be between 8 and 100 characters'
        }
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
        return _bcrypt2.default.compareSync(value, this.passwordDigest);
      }
    }
  });

  User.beforeCreate(function (user, options, callback) {
    if (user.password != user.passwordConfirmation) {
      throw new _sequelize.ValidationError('passwords do not match', [new _sequelize.ValidationErrorItem('passwords do not match', '', 'passwordConfirmation', user.passwordConfirmation)]);
    }

    _bcrypt2.default.hash(user.get('password'), 10, function (err, hash) {
      if (err) return callback(err);
      user.set('passwordDigest', hash);
      return callback(null, options);
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvbW9kZWxzL1VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUdlLFVBQVMsR0FBVCxFQUFjLE9BQWQsRUFBdUIsY0FBdkIsRUFBdUM7QUFDcEQsTUFBTSxPQUFPLElBQUksTUFBSixDQUFXLE1BQVgsRUFBbUI7QUFDOUIsY0FBVTtBQUNSLFlBQU0sb0JBQVUsTUFEUjtBQUVSLGlCQUFXLEtBRkg7QUFHUixnQkFBVTtBQUNSLGFBQUs7QUFDSCxnQkFBTSxDQUFDLENBQUQsRUFBSSxFQUFKLENBREg7QUFFSCxlQUFLO0FBRkY7QUFERztBQUhGLEtBRG9CO0FBVzlCLG9CQUFnQjtBQUNkLFlBQU0sb0JBQVUsTUFERjtBQUVkLGdCQUFVO0FBQ1Isa0JBQVU7QUFERjtBQUZJLEtBWGM7QUFpQjlCLGNBQVU7QUFDUixZQUFNLG9CQUFVLE9BRFI7QUFFUixpQkFBVyxLQUZIO0FBR1IsZ0JBQVU7QUFDUixhQUFLO0FBQ0gsZ0JBQU0sQ0FBQyxDQUFELEVBQUksR0FBSixDQURIO0FBRUgsZUFBSztBQUZGO0FBREc7QUFIRixLQWpCb0I7QUEyQjlCLDBCQUFzQjtBQUNwQixZQUFNLG9CQUFVO0FBREk7QUEzQlEsR0FBbkIsRUE4QlY7QUFDRCxxQkFBaUIsSUFEaEI7QUFFRCxhQUFTLENBQUMsRUFBRSxRQUFRLElBQVYsRUFBZ0IsUUFBUSxDQUFDLFVBQUQsQ0FBeEIsRUFBRCxDQUZSO0FBR0QscUJBQWlCO0FBQ2Ysa0JBRGUsd0JBQ0YsS0FERSxFQUNLO0FBQ2xCLGVBQU8saUJBQU8sV0FBUCxDQUFtQixLQUFuQixFQUEwQixLQUFLLGNBQS9CLENBQVA7QUFDRDtBQUhjO0FBSGhCLEdBOUJVLENBQWI7O0FBd0NBLE9BQUssWUFBTCxDQUFrQixVQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLFFBQWhCLEVBQTZCO0FBQzdDLFFBQUksS0FBSyxRQUFMLElBQWlCLEtBQUssb0JBQTFCLEVBQWdEO0FBQzlDLFlBQU0sK0JBQW9CLHdCQUFwQixFQUE4QyxDQUNsRCxtQ0FDRSx3QkFERixFQUVFLEVBRkYsRUFHRSxzQkFIRixFQUlFLEtBQUssb0JBSlAsQ0FEa0QsQ0FBOUMsQ0FBTjtBQVFEOztBQUVELHFCQUFPLElBQVAsQ0FBWSxLQUFLLEdBQUwsQ0FBUyxVQUFULENBQVosRUFBa0MsRUFBbEMsRUFBc0MsVUFBQyxHQUFELEVBQU0sSUFBTixFQUFlO0FBQ25ELFVBQUksR0FBSixFQUFTLE9BQU8sU0FBUyxHQUFULENBQVA7QUFDVCxXQUFLLEdBQUwsQ0FBUyxnQkFBVCxFQUEyQixJQUEzQjtBQUNBLGFBQU8sU0FBUyxJQUFULEVBQWUsT0FBZixDQUFQO0FBQ0QsS0FKRDtBQUtELEdBakJEOztBQW1CQSxPQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsRUFBRSxTQUFTLE9BQVgsRUFBb0IsSUFBSSxTQUF4QixFQUF6QjtBQUNBLE9BQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixFQUFFLFNBQVMsY0FBWCxFQUEyQixJQUFJLGdCQUEvQixFQUF6Qjs7QUFFQSxTQUFPLElBQVA7QUFDRCxDOztBQW5FRDs7OztBQUNBIiwiZmlsZSI6IlVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VxdWVsaXplLCB7IFZhbGlkYXRpb25FcnJvciwgVmFsaWRhdGlvbkVycm9ySXRlbSB9IGZyb20gJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNxbCwgQ29udGFjdCwgQ29udGFjdFJlcXVlc3QpIHtcbiAgY29uc3QgVXNlciA9IHNxbC5kZWZpbmUoJ3VzZXInLCB7XG4gICAgdXNlcm5hbWU6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgbGVuOiB7XG4gICAgICAgICAgYXJnczogWzcsIDUwXSxcbiAgICAgICAgICBtc2c6ICd1c2VybmFtZSBtdXN0IGJlIGJldHdlZW4gOCBhbmQgNTAgY2hhcmFjdGVycydcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwYXNzd29yZERpZ2VzdDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklORyxcbiAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgIG5vdEVtcHR5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVklSVFVBTCxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICB2YWxpZGF0ZToge1xuICAgICAgICBsZW46IHtcbiAgICAgICAgICBhcmdzOiBbNywgMTAwXSxcbiAgICAgICAgICBtc2c6ICdwYXNzd29yZHMgbXVzdCBiZSBiZXR3ZWVuIDggYW5kIDEwMCBjaGFyYWN0ZXJzJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwYXNzd29yZENvbmZpcm1hdGlvbjoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlZJUlRVQUxcbiAgICB9LFxuICB9LCB7XG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICAgIGluZGV4ZXM6IFt7IHVuaXF1ZTogdHJ1ZSwgZmllbGRzOiBbJ3VzZXJuYW1lJ10gfV0sXG4gICAgaW5zdGFuY2VNZXRob2RzOiB7XG4gICAgICBhdXRoZW50aWNhdGUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGJjcnlwdC5jb21wYXJlU3luYyh2YWx1ZSwgdGhpcy5wYXNzd29yZERpZ2VzdClcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgVXNlci5iZWZvcmVDcmVhdGUoKHVzZXIsIG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYgKHVzZXIucGFzc3dvcmQgIT0gdXNlci5wYXNzd29yZENvbmZpcm1hdGlvbikge1xuICAgICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcigncGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcsIFtcbiAgICAgICAgbmV3IFZhbGlkYXRpb25FcnJvckl0ZW0oXG4gICAgICAgICAgJ3Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnLFxuICAgICAgICAgICcnLFxuICAgICAgICAgICdwYXNzd29yZENvbmZpcm1hdGlvbicsXG4gICAgICAgICAgdXNlci5wYXNzd29yZENvbmZpcm1hdGlvblxuICAgICAgICApLFxuICAgICAgXSk7XG4gICAgfVxuXG4gICAgYmNyeXB0Lmhhc2godXNlci5nZXQoJ3Bhc3N3b3JkJyksIDEwLCAoZXJyLCBoYXNoKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgIHVzZXIuc2V0KCdwYXNzd29yZERpZ2VzdCcsIGhhc2gpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9KTtcblxuICBVc2VyLmJlbG9uZ3NUb01hbnkoVXNlciwgeyB0aHJvdWdoOiBDb250YWN0LCBhczogJ0NvbnRhY3QnIH0pO1xuICBVc2VyLmJlbG9uZ3NUb01hbnkoVXNlciwgeyB0aHJvdWdoOiBDb250YWN0UmVxdWVzdCwgYXM6ICdDb250YWN0UmVxdWVzdCcgfSk7XG5cbiAgcmV0dXJuIFVzZXI7XG59XG4iXX0=