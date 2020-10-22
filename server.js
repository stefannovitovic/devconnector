const express = require("express");
const app = express();

PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    return res.send('api running');
});

app.listen(PORT, () => {
    console.log('Server is running');
})