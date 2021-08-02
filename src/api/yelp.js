import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer CQlJBx1Pdvya-yTvG3m9cr-YdM9pXTb362HSwMjdnO6diKtdMI11BXmP5DJzy0l-UD9o6cIZ6y2DvhWzEVsxU0jc9e_3McwXWmoOae6NBp1jEpfhjsiD8qM2VQ8FYXYx",
  },
});
