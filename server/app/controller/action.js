'use strict';

const BaseController = require('./baseController');

class Action extends BaseController {
  async getActionList () {
    const { ctx } = this;
    console.log(ctx.query);
    const data = await ctx.service.action.getActionList(ctx.query);
    const count = await ctx.service.action.getActionCount(ctx.query);
    if (data) {
      this.success({
        data,
        count,
      });
    } else {
      this.error('暂无数据');
    }
  }
}

module.exports = Action;
