// main.js
var contentful = require('contentful')
var client = contentful.createClient({
  space: 'e3tkex9kqdfm',
  accessToken: '7ec89f916560ccaaea0319417bbadfeffeafc010d3532f9c4dfd791ed82e9c97'

})

client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if(entry.fields.jobName) {
      console.log(entry.fields.jobName)
    }
  })
})