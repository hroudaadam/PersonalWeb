const {LogicError} = require('../helpers/logicError');

function errorHandler(err, req, res, next) {

    if ( err instanceof LogicError ) {
        return res.status(400).json({ message: err.message });
    }
    
    console.log(err.message);
    return res.status(500).json({ message: err.message });
}

module.exports = errorHandler;