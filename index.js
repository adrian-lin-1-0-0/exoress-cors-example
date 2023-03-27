const express = require('express');
const cors = require('cors');

const app = express();
const web = express();


if (process.env.CORS === 'enable') {
    app.use(cors(
        {
            origin: 'http://localhost:8000'
        }
    ));
}


app.get('/data', (req, res) => {
    const data = { message: 'example data' };
    res.json(data);
});

app.listen(8001, () => {
    console.log('api server starts listening on http://localhost:8001');
});

web.use(express.static('public'))

web.listen(8000, () => {
    console.log('web server starts listening on http://localhost:8000');
})