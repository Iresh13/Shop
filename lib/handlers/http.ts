import axios, { AxiosRequestConfig } from 'axios'

import { handleError } from './error'

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api'

interface FetchOptions extends Omit<AxiosRequestConfig, 'signal'> {
    timeout?: number
}

const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
}

const createConfig = (
    options?: FetchOptions,
    controller?: AbortController
): AxiosRequestConfig => {
    return {
        headers: { ...defaultHeaders, ...options?.headers },
        signal: controller?.signal,
        ...options,
    }
}

const createTimeout = (timeout: number, controller: AbortController) =>
    setTimeout(() => controller.abort(), timeout)

export const post = async (
    url: string,
    body: Record<string, unknown>,
    options?: FetchOptions
) => {
    const controller = new AbortController()
    const timeout = createTimeout(options?.timeout || 5000, controller)

    try {
        const config = createConfig(options, controller)
        const response = await axios.post(
            `${API_BASE_URL}/${url}`,
            body,
            config
        )
        return response.data
    } catch (error) {
        return handleError(error)
    } finally {
        clearTimeout(timeout)
    }
}

export const get = async (url: string, options?: FetchOptions) => {
    const controller = new AbortController()
    const timeout = createTimeout(options?.timeout || 5000, controller)

    try {
        const config = createConfig(options, controller)
        const response = await axios.get(`${API_BASE_URL}/${url}`, config)
        return response.data
    } catch (error) {
        return handleError(error)
    } finally {
        clearTimeout(timeout)
    }
}

export const put = async (
    url: string,
    body: Record<string, unknown>,
    options?: FetchOptions
) => {
    const controller = new AbortController()
    const timeout = createTimeout(options?.timeout || 5000, controller)

    try {
        const config = createConfig(options, controller)
        const response = await axios.put(`${API_BASE_URL}/${url}`, body, config)
        return response.data
    } catch (error) {
        return handleError(error)
    } finally {
        clearTimeout(timeout)
    }
}

export const remove = async (url: string, options?: FetchOptions) => {
    const controller = new AbortController()
    const timeout = createTimeout(options?.timeout || 5000, controller)

    try {
        const config = createConfig(options, controller)
        const response = await axios.delete(`${API_BASE_URL}/${url}`, config)
        return response.data
    } catch (error) {
        return handleError(error)
    } finally {
        clearTimeout(timeout)
    }
}
