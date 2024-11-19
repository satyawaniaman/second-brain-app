import mongoose, { model, Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:TboK15G3Zpx9T0VM@cluster0.wvyjj.mongodb.net/secondBrain"
);

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const ContentModel = model("Content", ContentSchema);
