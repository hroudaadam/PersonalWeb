class LogicError extends Error {
    constructor(message) {
      super(message); // (1)
    }
  };

module.exports = {
    LogicError
}