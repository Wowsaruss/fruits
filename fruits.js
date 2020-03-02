const fruitsData = require('./fruits.json');

module.exports = async function fruits(req, res) {
  let results = fruitsData;

  if (req.query.color) {
    results = fruitsData.filter(f => {
      return f.colors.some(c => c === req.query.color);
    });
  }

  if (req.query.in_season) {
    let inSeason = req.query.in_season === 'true' ? true : false;
    results = results.filter(f => f.in_season === inSeason);
  }

  return res.status(200).send(results);
};
