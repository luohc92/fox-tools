export const urlUtil = (defaultUrl = window.location.href) => ({
    getQueryParam: (key, url = defaultUrl) => {
        const params = new URL(url).searchParams
        return params.get(key)
    },
    updateQueryParam: (key, value, url = defaultUrl) => {
        const u = new URL(url)
        u.searchParams.set(key, value)
        return u.toString()
    },
    removeQueryParam: (key, url = defaultUrl) => {
        const u = new URL(url)
        u.searchParams.delete(key)
        return u.toString()
    },
})
