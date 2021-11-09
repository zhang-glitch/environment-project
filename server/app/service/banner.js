const { Service } = require("egg")

class Banner extends Service {
  async getBannerList () {
    const { ctx } = this
    const res = await ctx.model.Banner.findAll()
    return res
  }
}

module.exports = Banner