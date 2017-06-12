
const api = {

  getSearches: function() {
    return fetch('/all')
      .then((res) => res.json())
        .then((data) => data);

  },

  getFavorites: function() {

    return fetch('/favs')
      .then((res) => res.json())
        .then((data) => data);

  },

  getLink: function(id, index) {

        return fetch(`/link/${id}/${index}`)
          .then((res) => res.json())
            .then((data) => data);

  },

  search: function(searchTerm) {

    return fetch('/search', {
	       method: 'post',
	       body: searchTerm
       })
       .then((res) => res.json())
          .then((data) => data);
  }

}

export default api;
