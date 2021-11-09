const { Service } = require('egg');

class Action extends Service {
  async getActionList (params) {
    const { ctx } = this;
    const res = await ctx.model.Action.findAll({
      where: {
        tab_id: +params.id,
      },
      limit: +params.pageSize,
      offset: (params.pageNum - 1) * params.pageSize,
    });
    return res;
  }

  async getActionCount (params) {
    const { ctx } = this;
    const { count } = await ctx.model.Action.findAndCountAll({
      where: {
        tab_id: +params.id,
      },
    });
    console.log('count', count);
    return count;
  }
}

module.exports = Action;
