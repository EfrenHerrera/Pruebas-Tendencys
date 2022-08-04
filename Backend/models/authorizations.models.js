const {mongoose} = require("mongoose");

const AuthorizatonSchema = new mongoose.Schema({
  application_id:{
    type: String,
  },
  token:{
    type: String,
  },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model("Authorization", AuthorizatonSchema);