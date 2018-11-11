const Ping = require('../models/ping');

module.exports = (req, res) => {
  Ping
    .create({
      timestamp: Date.now(),
    })
    .then((ping) => {
      res.json(ping);
    })
    .catch((err) => {
      res
        .status(400)
        .json(err);
    });
};
