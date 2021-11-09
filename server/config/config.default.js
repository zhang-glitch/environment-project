/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1623582540622_1511';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 数据库配置
  config.sequelize = {
    dialect: "mysql",
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'ZH123456',
    database: 'environment',// 数据库名称
    define: {
      timestamps: false, // 不自动添加时间戳
      freezeTableName: true // 将指定的模块名称当做表名使用。模板名称与表名称相同
    }
  };

  // 跨域设置
  config.cors = {
    origin: function ({ req }) {
      const { origin } = req.headers;
      const whiteList = [
        'http://localhost:8080',
        'http://127.0.0.1:8080',
      ];
      if (whiteList.includes(origin)) {
        return origin;
      }
    },
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  return {
    ...config,
    ...userConfig,
  };
};
