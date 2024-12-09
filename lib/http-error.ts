import { StatusCode } from "@/constants/status-code";

export class RequestError extends Error {
  statusCode: number;
  errors?: Record<string, string[]>;

  constructor(
    statusCode: number,
    message: string,
    errors?: Record<string, string[]>
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.name = "Request Error";
  }
}

export class ValidationError extends RequestError {
  constructor(fieldErrors: Record<string, string[]>) {
    const message = ValidationError.formatErrors(fieldErrors);
    super(StatusCode.badRequest, message, fieldErrors);
    this.name = "Validation Error";
    this.errors = fieldErrors;
  }

  static formatErrors(errors: Record<string, string[]>) {
    const formatErrorMessages = Object.entries(errors).map(
      ([field, message]) => {
        const fieldName = field.charAt(0).toUpperCase() + field.slice(1);

        if (message[0] === "Required") {
          return `${fieldName} is required`;
        } else {
          return message.join(" and ");
        }
      }
    );
    return formatErrorMessages.join(", ");
  }
}

export class NotFoundError extends RequestError {
  constructor(message: string) {
    super(StatusCode.notFound, `${message} not found`);
    this.name = "Resource not found";
  }
}

export class UnAuthorizedError extends RequestError {
  constructor(message: string = "UnAuthorized") {
    super(StatusCode.unauthorized, `${message}`);
    this.name = "Unauthorized Error";
  }
}

export class ForbiddenError extends RequestError {
  constructor(message: string = "Forbidden") {
    super(StatusCode.forbidden, message);
    this.name = "Forbidden Error";
  }
}
