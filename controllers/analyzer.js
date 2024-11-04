const catchAsync = require('../helpers/catchAsync');

const AnalysisController = {
  analyze: catchAsync(async (req, res, next) => {
    console.log('req.body', req.body);

    return res.status(200).json({ success: true, data: 'hello' });
  }),
};

module.exports = AnalysisController;
