const scrape = require("website-scraper");
const options = {
  urls: ["https://en.wikipedia.org/wiki/Legality_of_cannabis"],
  directory: "data",
};

scrape(options).then((result) => console.log(result));
