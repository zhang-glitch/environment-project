const BaseController = require("./baseController")

class Tab extends BaseController {
  async getTabList () {
    const { ctx } = this
    const data = await ctx.service.tab.getTabList()
    if (data) {
      this.success(data)
    } else {
      this.error("暂无数据")
    }
  }
}

module.exports = Tab