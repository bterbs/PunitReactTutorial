const axios = require('axios')
// TODO: Dangerous to do -
const API_KEY = 'mD19PnROED3DShhaiqL2zBfCP3KCEXuiNG8tjA3tMYCz_wg8j6mQyEwQ1Jbw4wafgdsXyNJ99J3UWhh9f_s-NMbI24dgOsu9C-E51hGw2JINPkgCk_doduKbtK2VWnYx'

console.log('Going to make api call to Yelp');

function makeQuery(obj) {
  var result = '?'
  for(key in obj) {
    result += `${key}=${obj[key]}&`
  }
  return result
}

function search(options) {
  let queryString = makeQuery(options)
  return axios.get('https://api.yelp.com/v3/businesses/search?term=Restaurants&location=Oakland',
  {headers: {'Authorization': `Bearer ${API_KEY}`}})
  .then(result => {
    return { data: result.data.businesses.length }
  })
  .catch( err => {
    console.error(err)
    return { error: true, message: err.message }
  })
}


module.exports = {
  search: search
}

  /*
- Above we are initializing a yelp instance, using an instance of Yelp that has a method called search.
- By passing the CLIENT_ID and SECRET_KEY with the node-yelp-fusion package it abstracts away the need to code out the api call in more detail.
-nothing is happening with file until we import in other file and call it.
   */
