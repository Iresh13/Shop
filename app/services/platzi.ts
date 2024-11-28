import { handleError } from "@/lib/handlers/error";
import axios, { AxiosResponse } from "axios";
import { ZodType } from "zod";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PLATZI_URL,
});

export const getData = async (endpoint: string, schema?: ZodType<T>) => {
  try {
    const response = await api.get(endpoint);

    if (schema) {
      return schema.safeParse(response.data);
    }

    return response.data;
  } catch (error) {
    handleError(error, "api");
  }
};
