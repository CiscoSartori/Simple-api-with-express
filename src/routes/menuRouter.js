const app = require ('../index.js')
const { Router } = require ('express')

const router = Router()

router.get('/menu', (req, res) => {
    res.status(200).send('Quero Cafe')
})

module.exports = router
