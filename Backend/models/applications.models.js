const mongoose = require("mongoose");

const AplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model("Aplications", AplicationSchema);