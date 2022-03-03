import moment from 'moment'

export function createdDate(input: any) {
    const now = new Date()
    const date = moment(input)

    if (date.isSame(now, 'date')) {
        return 'today'
    }

    return date.format('MMM DD, YYYY')
}

export function dueDate(input: any) {
    const now = new Date()
    const date = moment(input)

    if (date.isSame(now, 'date')) {
        return `today at ${date.format('hh:mm a')}`
    }

    return date.format('MMM DD, YYYY [at] hh:mm a')
}