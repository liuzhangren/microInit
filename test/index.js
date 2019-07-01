const axios = require('axios')

const test = async () => {
  await axios.post('http://localhost:3000/postTest', {
    name: 'tom',
    age: '20'
  })
}

test()