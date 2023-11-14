const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        user_name: {type: String, required: true, maxLength: 64},
        password: {type: String, required: true, maxLength: 64}
    }
)

module.exports = mongoose.model("User", UserSchema);