
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
    return fetch(`/link/${id}/${index}`, {method: 'GET'})
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
  },

  delete: function(id) {
    return fetch(`/delete/${id}`, {
      method: 'POST'
    }).then((res) => res.json())
        .then((data) => data);
  },

  update: function(id, target) {
    return fetch(`/update/${id}/${target}`, {
      method: 'POST'
    }).then((res) => res.json())
        .then((data) => data);
  }

}

export default api;
