export const dateUtil = (config = {}) => ({
    formatDate: (date, sep = '-') => {
        const d = new Date(date)
        const y = d.getFullYear()
        const m = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        return `${y}${sep}${m}${sep}${day}`
    },
    diffDays: (d1, d2) => {
        const time1 = new Date(d1).getTime()
        const time2 = new Date(d2).getTime()
        return Math.floor(Math.abs(time1 - time2) / (1000 * 60 * 60 * 24))
    },
})
