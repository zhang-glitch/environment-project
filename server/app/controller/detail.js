const BaseController = require("./baseController")

class Detail extends BaseController {
  async getDetail () {
    const { ctx } = this
    const data = await ctx.service.detail.getDetail(ctx.query)
    if (data) {
      this.success(data)
    } else {
      this.error("暂无数据")
    }
  }
}

module.exports = Detail