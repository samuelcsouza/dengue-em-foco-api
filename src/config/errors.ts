import { ApiError } from "../schemas/error";

export class HTTPError extends Error {
  statusCode: number = 500;
  detail?: string;

  constructor(statusCode: number, name: string, detail?: string) {
    super(name);
    this.statusCode = statusCode;
    this.name = name;
    this.detail = detail;
    Error.captureStackTrace(this, this.constructor);
  }

  json = () => {
    const jsonError: ApiError = {
      statusCode: this.statusCode,
      name: this.name,
      detail: this.detail,
    };
    return jsonError;
  };
}

export class NotFoundError extends HTTPError {
  statusCode: number = 404;
  name: string = "The requested resource not found.";

  constructor(detail?: string) {
    super(404, "The requested resource not found.", detail);
    this.detail = detail;
  }
}
