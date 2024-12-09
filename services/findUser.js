import User from '../models/userSchema'

// Find user by key - eq. _id, email (_id is definied by MongoDB)
const fetchUser = (key) => {
  return User.findOne(key)

}

export default fetchUser