const path = require('path');

module.exports = (req, res) => {
  res.sendFile(
    path.resolve(
      path.join(
        __dirname,
        '..',
        'public',
        'index.html',
      ),
    ),
  );
};
