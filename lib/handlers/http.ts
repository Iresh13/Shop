/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios'

export const post = async (url: string, body: Record<string, any>) => {
    return await axios
        .post(url, body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw new error('Error fetching data')
        })
}

export const get = async (url: string) => {
    return await axios
        .get(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.data)
        .catch(() => {
            throw new Error('Error fetching data')
        })
}
