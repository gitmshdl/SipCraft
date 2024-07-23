const axios = require("axios");

export const fetchCocktails = async () => {
  const options = {
    method: "GET",
    url: "https://the-cocktrail-db3.p.rapidapi.com/",
    headers: {
      "x-rapidapi-key": "ada9d28efdmshe548c11ca979f9ap11c6c9jsneb31d468b424",
      "x-rapidapi-host": "the-cocktail-db3.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchCocktails();
