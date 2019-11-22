import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '/avatar/noavatar.jpg',
  },
  image: {
    type: String,
    default: '',
  },
});

export default mongoose.model('Article', ArticleSchema);
