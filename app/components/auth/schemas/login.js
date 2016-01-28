import {Schema, type} from 'eisley'

export default new Schema({
  password: type('string', {min: 6}),
  username: type('string', {min: 3})
})
