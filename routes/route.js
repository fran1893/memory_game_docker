
const { Router } = require('express');

const router = Router();

router.get('/juego', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html')
})


module.exports = router