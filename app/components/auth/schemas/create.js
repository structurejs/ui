import {Schema, type} from 'eisley'

export default new Schema({
  email: type('string'),
  password: type('string', {min: 6}),
  username: type('string', {min: 3})
})
