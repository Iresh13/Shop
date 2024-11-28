import { ResponseType, StatusCode } from "@/constants/status-code";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { RequestError, ValidationError } from "../http-error";

const formatErrorMessages = (
  responseType: ResponseType,
  status: number,
  message: string,
  errors?: Record<string, string[]> | undefined
) => {
  const errorResponse = {
    success: false,
    error: {
      message,
      details: errors,
    },
  };

  if (responseType === "api")
    return NextResponse.json(errorResponse, { status: StatusCode.error });

  return { status, ...errorResponse };
};

export const handleError = (error: unknown, responseType: ResponseType) => {
  if (error instanceof RequestError) {
    return formatErrorMessages(
      responseType,
      error.statusCode,
      error.message,
      error.errors
    );
  }

  if (error instanceof ZodError) {
    const validationError = new ValidationError(
      error.flatten().fieldErrors as Record<string, string[]>
    );

    return formatErrorMessages(
      responseType,
      validationError.statusCode,
      validationError.message,
      validationError.errors
    );
  }

  if (error instanceof Error) {
    return formatErrorMessages(responseType, StatusCode.error, error.message);
  }

  return formatErrorMessages(
    responseType,
    StatusCode.error,
    "An unexpected error occurred"
  );
};
