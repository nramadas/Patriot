export default class ValidationError {
  constructor(errors) {
    this.errors = errors;
    this.message = errors.map(e => e.msg).join(',');
  }

  toString() {
    return `ValidationError: ${this.message}`;
  }
}
