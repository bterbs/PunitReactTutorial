import Yelp from 'node-yelp-fusion'

export const CLIENT_ID = 'PqED0c8fM6b3P7YxWzq3mg'
export const API_KEY = 'mD19PnROED3DShhaiqL2zBfCP3KCEXuiNG8tjA3tMYCz_wg8j6mQyEwQ1Jbw4wafgdsXyNJ99J3UWhh9f_s-NMbI24dgOsu9C-E51hGw2JINPkgCk_doduKbtK2VWnYx'
export const SECRET_KEY = 'dbLRpsvXwN6qIwukezGz7rMxXdIGlxMEPYZBG9UllG70sZ2udOPjaaRXFc5ws7Rl'

const yelp = new Yelp({id: CLIENT_ID, secret: SECRET_KEY})

yelp.search('term=Burma Superstar&location=Oakland')
  then.(result => {
    console.log('result::', result);
  })

  /*
- Above we are initializing a yelp instance, using an instance of Yelp that has a method called search.
- By passing the CLIENT_ID and SECRET_KEY with the node-yelp-fusion package it abstracts away the need to code out the api call in more detail.
-nothing is happening with file until we import in other file and call it.
   */
