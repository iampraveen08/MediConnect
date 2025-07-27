import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () =>
            console.log("✅ Database Connected")
        );

        if (!process.env.MONGO_URI) {
            throw new Error("MONGODB_URI is not defined in .env file");
        }

        // Ensure URI starts with mongodb:// or mongodb+srv://
        if (
            !process.env.MONGO_URI.startsWith("mongodb://") &&
            !process.env.MONGO_URI.startsWith("mongodb+srv://")
        ) {
            throw new Error(
                "Invalid MONGODB_URI format. Must start with 'mongodb://' or 'mongodb+srv://'"
            );
        }

        await mongoose.connect(`${process.env.MONGO_URI}/prescripto`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectDB;
