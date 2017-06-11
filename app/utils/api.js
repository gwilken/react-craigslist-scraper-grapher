

const api = {

  scrape: function(search) {
    return axios.get("/api/quotes");
  },

  // Toggles a quote's favorite property in the db
  favoriteQuote: function(quote) {
    quote.favorited = !quote.favorited;
    const { _id, favorited } = quote;
    return axios.patch(`/api/quotes/${_id}`, { favorited });
  }
};

export default api;
