const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        user_name: {type: String, required: true},
        password: {type: String, required: true},
        points: {type: Number, required: true, default: 0}
    }
)

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);