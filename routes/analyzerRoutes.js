const { Router } = require('express');
const AnalyzerController = require('../controllers/analyzer');

const router = Router();

router.route('/').post(AnalyzerController.analyze);

module.exports = router;
