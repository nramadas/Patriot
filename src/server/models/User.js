import Sequelize, { ValidationError, ValidationErrorItem } from 'sequelize';
import bcrypt from 'bcrypt';

export default function(sql, Contact, ContactRequest) {
  const User = sql.define('user', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [7, 50],
          msg: 'username must be between 8 and 50 characters'
        },
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
        len: {
          args: [7, 100],
          msg: 'passwords must be between 8 and 100 characters',
        },
      },
    },
    passwordConfirmation: {
      type: Sequelize.VIRTUAL
    },
  }, {
    freezeTableName: true,
    indexes: [{ unique: true, fields: ['username'] }],
    instanceMethods: {
      authenticate(value) {
        return bcrypt.compareSync(value, this.passwordDigest)
      },
    },
  });

  User.beforeCreate((user, options, callback) => {
    if (user.password != user.passwordConfirmation) {
      throw new ValidationError('passwords do not match', [
        new ValidationErrorItem(
          'passwords do not match',
          '',
          'passwordConfirmation',
          user.passwordConfirmation
        ),
      ]);
    }

    bcrypt.hash(user.get('password'), 10, (err, hash) => {
      if (err) return callback(err);
      user.set('passwordDigest', hash);
      return callback(null, options);
    });
  });

  User.belongsToMany(User, { through: Contact, as: 'Contact' });
  User.belongsToMany(User, { through: ContactRequest, as: 'ContactRequest' });

  return User;
}
