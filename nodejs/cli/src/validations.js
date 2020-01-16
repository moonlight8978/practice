const required = message => input =>
  input && input.toString() && input.trim() ? true : message;

module.exports = {
  required
};
