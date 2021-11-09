const BaseController = require("./baseController")

class Banner extends BaseController {
  async getBannerList () {
    const { ctx } = this
    const data = await ctx.service.banner.getBannerList()
    console.log("data", data)
    if (data) {
      this.success(data)
    } else {
      this.error("暂无数据")
    }
  }
}

module.exports = Banner