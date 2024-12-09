interface formUrlQueryParams {
    key: string
    value: string
    params: string
}

interface removeKeysFromUrlQueryParams {
    params: string
    keys: string[]
}

export const formUrlQuery = ({ params, key, value }: formUrlQueryParams) => {
    const urlSearchParams = new URLSearchParams(params)

    urlSearchParams.set(key, value)

    const queryString = urlSearchParams.toString()

    return `${window.location.pathname}?${queryString}`
}

export const removeKeysFromUrlQuery = ({
    params,
    keys,
}: removeKeysFromUrlQueryParams) => {
    const urlSearchParams = new URLSearchParams(params)

    keys.forEach((key) => {
        urlSearchParams.delete(key)
    })

    const queryString = urlSearchParams.toString()

    return queryString
        ? `${window.location.pathname}?${queryString}`
        : window.location.pathname
}
