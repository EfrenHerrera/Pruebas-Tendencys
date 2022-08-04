const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;
const Mixed = mongoose.Schema.Types.Mixed;

const LogSchema = new mongoose.Schema({
  application_id: {
    type: ObjectId,
  },
  type: {
    type: String,
    enum: ["error", "info", "warning"],
  },
  priority: {
    type: String,
    enum: ["lowest", "low", "medium", "high", "highest"],
  },
  path: {
    type: String,
  },
  message: {
    type: String,
  },
  request: {
    type: Mixed,
  },
  response: {
    type: Mixed,
  },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model("Log", LogSchema);
