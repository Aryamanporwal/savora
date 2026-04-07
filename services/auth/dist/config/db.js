import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "savora",
        });
        console.log("connected to mongodb");
    }
    catch (err) {
        console.log(err);
    }
};
export default connectDB;
