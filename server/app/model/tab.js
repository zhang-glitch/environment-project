module.exports = app => {
  const { INTEGER, STRING } = require("sequelize")
  const Tab = app.model.define("tab", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    tabName: { type: STRING },
    tabImg: { type: STRING },
    tabIntroduction: {
      type: STRING
    },
    orderNum: {
      type: INTEGER
    },
    iconName: {
      type: STRING
    },
    tabNameIntro: {
      type: STRING
    }
  })

  return Tab
}