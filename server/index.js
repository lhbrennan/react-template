const express = require('express');
// const parser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', express.static('client/public'));

app.listen(PORT, () => console.log(`Luke's React Template listening on port ${PORT}!`));
