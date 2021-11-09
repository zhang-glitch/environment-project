const { Service } = require("egg")

class Detail extends Service {
  async getDetail (params) {
    const { ctx } = this
    const res = await ctx.model.Detail.findOne({
      where: {
        id: +params.id
      },
    })
    return res
  }


}

module.exports = Detail