import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timeStamp: String,
  received: Boolean,
});

// Collection Name: messageContent
export default mongoose.model("messageContent", whatsappSchema);
