'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/banner', controller.banner.getBannerList);
  router.get('/tab', controller.tab.getTabList);
  router.get('/action', controller.action.getActionList);
  router.get('/detail', controller.detail.getDetail);
};
