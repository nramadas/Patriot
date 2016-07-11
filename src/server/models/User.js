import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';

export default function(sql, Contact, ContactRequest) {
  const User = sql.define('user', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 50],
      },
    },
    passwordDigest: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: Sequelize.VIRTUAL,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    passwordConfirmation: {
      type: Sequelize.VIRTUAL
    },
  }, {
    freezeTableName: true,
    indexes: [{ unique: true, fields: ['username'] }],
    instanceMethods: {
      authenticate: function(value) {
        if (bcrypt.compareSync(value, this.passwordDigest))
          return this;
        else
          return false;
      }
    }
  });

  var hasSecurePassword = function(user, options, callback) {
    if (user.password != user.passwordConfirmation) {
      throw new Error("Password confirmation doesn't match Password");
    }

    bcrypt.hash(user.get('password'), 10, function(err, hash) {
      if (err) return callback(err);
      user.set('passwordDigest', hash);
      return callback(null, options);
    });
  };

  User.beforeCreate(function(user, options, callback) {
    if (user.password)
      hasSecurePassword(user, options, callback);
    else
      return callback(null, options);
  });

  User.beforeUpdate(function(user, options, callback) {
    if (user.password)
      hasSecurePassword(user, options, callback);
    else
      return callback(null, options);
  });

  User.belongsToMany(User, { through: Contact, as: 'Contact' });
  User.belongsToMany(User, { through: ContactRequest, as: 'ContactRequest' });

  return User;
}
