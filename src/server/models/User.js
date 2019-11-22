import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    default: '/avatar/noavatar.jpg',
  },
  signature: {
    type: String,
    default: '',
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'register',
  },
});

export default mongoose.model('User', UserSchema);
