export class UnexpectedError extends Error {
  constructor() {
    super("Unexpected Error! Try again in a few minutes");
    this.name = "unexpectedError";
  }
}
