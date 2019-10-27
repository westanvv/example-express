const sequelize = require('./index');

module.exports = sequelize.import('message', (sequelize, DataTypes) => {
  const Message = sequelize.define(
    'message',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      title: {
        type: DataTypes.STRING,
        notEmpty: true,
      },

      msg: {
        type: DataTypes.STRING,
        notEmpty: true,
      },
    }
  );

  Message.getAll = async () => {
    const result = await Message.findAll();

    return result.map(item => item.get());
  };

  Message.getItemById = (id, attributes) => {
    return Message.findOne({
      where: {id},
      attributes,
      include: [
        {
          model: sequelize.models.userGroup,
          attributes: ['name', 'permissions'],
        },
      ],
    });
  };

  return Message;
})

// module.exports = (sequelize, DataTypes) => {
//   const Message = sequelize.define(
//     'message',
//     {
//       id: {
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//       },
//
//       title: {
//         type: DataTypes.STRING,
//         notEmpty: true,
//       },
//
//       msg: {
//         type: DataTypes.STRING,
//         notEmpty: true,
//       },
//     }
//   );
//
//   Message.getAll = async () => {
//     const result = await Message.findAll();
//
//     return result.map(item => item.get());
//   };
//
//   Message.getItemById = (id, attributes) => {
//     return Message.findOne({
//       where: {id},
//       attributes,
//       include: [
//         {
//           model: sequelize.models.userGroup,
//           attributes: ['name', 'permissions'],
//         },
//       ],
//     });
//   };
//
//   return Message;
// };
