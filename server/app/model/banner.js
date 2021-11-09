module.exports = app => {
  const { INTEGER, STRING } = require("sequelize")
  const Banner = app.model.define("banner", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    imgValue: { type: STRING },
    name: {
      type: STRING
    }
  })

  return Banner
}