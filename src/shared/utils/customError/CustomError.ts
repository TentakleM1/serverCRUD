export class CustomError extends Error {
    code: number;
    name: string;
  
    constructor(code = 500, message = '') {
      super(message);
      this.code = code;
    }
  }
