const mongoosePaginate = require('mongoose-paginate')

mongoosePaginate.paginate.options = {
  lean: true,
  limit: 20
}

module.exports = {
  paginate: mongoosePaginate
}
