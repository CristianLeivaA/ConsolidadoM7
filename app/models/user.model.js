module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
      firstName: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "El Campo del nombre es requerido"
          },
        },
      },
      lastName: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "El Campo del apellido es requerido"
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "el correo electronico es requerido"
          },
          isEmail: {
            args: true,
            msg: 'Formato de correo invalido'
          }
        },
        unique: {
          args: true,
          msg: 'correo electronico actualmente registrado en la base de datos!'
        }
  
      }
  
    })
  
    return User
  }