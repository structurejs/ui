import {Schema, type} from 'eisley'

export default new Schema({
  desc: type('string'),
  title: type('string', {min: 6})
})
