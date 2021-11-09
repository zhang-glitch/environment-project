'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Action = app.model.define('action', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    tab_id: INTEGER,
    action_title: STRING,
    action_content: STRING,
    action_tags: STRING,
    action_author: STRING,
    action_image: STRING,
    action_time: {
      type: DATE,
      get () {
        return new Date(this.getDataValue("action_time")).getTime()
      }
    },

  });

  // Orders.associate = () => {
  //   app.model.Orders.belongsTo(app.model.House, { foreignKey: "houseId", as: "house" });
  // }


  return Action;
};