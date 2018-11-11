const Sequelize = require('sequelize');
const moment = require('moment');
const randomColor = require('randomcolor');
const Ping = require('../models/ping');

module.exports = (req, res) => {
  const TIME_MX = 1000;
  const TIME_BIT = 5 * 60 * TIME_MX;
  const time = moment().utcOffset('+05:30');
  time.set({
    hour: 0, minute: 0, second: 0, millisecond: 0,
  });
  const then = time.unix() * TIME_MX;
  time.set({
    hour: 24, minute: 0, second: 0, millisecond: 0,
  });
  const end = time.unix() * TIME_MX;
  Ping.findAll({
    where: {
      timestamp: {
        [Sequelize.Op.gte]: then,
      },
    },
  }).then((pings) => {
    const data = [];
    for (let i = then, j = 0; i < end; i += TIME_BIT, j += 1) {
      const hasPing = pings.filter(ping => ping.timestamp > i && ping.timestamp < i + TIME_BIT);
      if (hasPing && hasPing.length > 0) {
        data.push({ x: j, y: 1 });
      } else {
        data.push({ x: j, y: 0 });
      }
    }
    res.json({
      datasets: [
        {
          label: `Ping every ${TIME_BIT / 1000} s`,
          data,
          backgroundColor: randomColor(),
          borderWidth: 1,
          pointRadius: 0,
        },
      ],
    });
  }).catch((err) => {
    res
      .status(400)
      .json(err);
  });
};
