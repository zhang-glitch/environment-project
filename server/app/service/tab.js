const { Service } = require("egg")

class Tab extends Service {
  async getTabList () {
    const { ctx } = this
    // model中的属性首字母都是大写
    const res = await ctx.model.Tab.findAll()
    return res
  }
}

module.exports = Tab