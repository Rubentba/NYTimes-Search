$('.button').on('click', function() {
  let key = '0p5n0Ut9Nh2guwLDXVWS2b7R3SO7Y0qo',
      topic = 'trump',
      queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=${key}`

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    console.log(response)

    for (let i = 0; i < 10; i++) {
      $('#articles').append(
        '<a href=' + response.response.docs[i].web_url + ' target=_"blank">' +
        response.response.docs[i].web_url + '</a>'
      ).append('<br>')

    }
  })
})
