import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('369369', 10),
    isAdmin: true,
  },
  {
    name: 'Will Toledo',
    email: 'will@example.com',
    password: bcrypt.hashSync('369369', 10),
  },
  {
    name: 'Phoebe Bridgers',
    email: 'Phobe@example.com',
    password: bcrypt.hashSync('369369', 10),
  },
]

export default users
