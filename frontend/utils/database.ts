const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

declare global {
    var cachedMongoose: any
}

const mongoDB = "http://127.0.0.1:27017"
async function dbConnect() {
    if (global.cachedMongoose) {
        return global.cachedMongoose;
    } else {
        await mongoose.connect(mongoDB);
        global.cachedMongoose = mongoose;
        console.log("Connected to mongodb");
    }
    
}

export default dbConnect;
