import { useEffect } from "react"
import { useQuery, useQueryClient } from "react-query"

import { getAnnouncements, getClassTests, getLabReports, QueryKey } from "../../utils/query"
import { createdDate, dueDate } from "../../utils/time"
import Items from "./items"

export const AnnouncementItems: React.FC = () => {
    const { data, error, isFetching, isRefetching } = useQuery(QueryKey.ANNOUNCEMENT, getAnnouncements)
    const client = useQueryClient()

    useEffect(() => {
        return () => {
            client.cancelQueries(QueryKey.ANNOUNCEMENT).catch(console.log)
        }
    }, [client])

    return (
        <Items {...{ error, fetching: isFetching && !isRefetching, empty: data?.data.length === 0 }}>
            {data?.data.map(({ id, attributes: n }) => {
                return <NotificationItem key={id} title={n?.title!} date={createdDate(n?.createdAt)} />
            })}
        </Items>
    )
}



export const CTItems: React.FC = () => {
    const { data, error, isFetching, isRefetching } = useQuery(QueryKey.CLASS_TEST, getClassTests)
    const client = useQueryClient()

    useEffect(() => {
        return () => {
            client.cancelQueries(QueryKey.CLASS_TEST).catch(console.log)
        }
    }, [client])

    return (
        <Items {...{ error, fetching: isFetching && !isRefetching, empty: data?.data.length === 0 }}>
            {data?.data.map(({ id, attributes: c }) => {
                return <NotificationItem
                    key={id}
                    title={c?.subject!}
                    subtitle={c?.about}
                    info={c?.type}
                    date={dueDate(c?.occurring)}
                />
            })}
        </Items>
    )
}

export const LabItems: React.FC = () => {
    const { data, error, isFetching, isRefetching } = useQuery(QueryKey.LAB_REPORT, getLabReports)
    const client = useQueryClient()

    useEffect(() => {
        return () => {
            client.cancelQueries(QueryKey.LAB_REPORT).catch(console.log)
        }
    }, [client])

    return (
        <Items {...{ error, fetching: isFetching && !isRefetching, empty: data?.data.length === 0 }}>
            {data?.data.map(({ id, attributes: l }) => {
                return <NotificationItem key={id} title={l?.subject!} subtitle={l?.about} date={dueDate(l?.due)} />
            })}
        </Items>
    )
}

const NotificationItem: React.FC<NotificationItemProps> = ({ date, title, subtitle, info }) => {
    return <li className='border bg-white rounded-lg my-1 p-3'>
        <h5 className='m-0 mb-2 text-base'>{title}</h5>
        {subtitle && <h5 className='m-0 mb-1 text-sm'>{subtitle}</h5>}
        {info && <h6 className="uppercase m-0 mb-0.5 text-xs text-right">{info}</h6>}
        <h6 className='m-0 text-right text-2xs'>{date}</h6>
    </li>
}

export default NotificationItem

export interface NotificationItemProps {
    title: string
    subtitle?: string | null
    info?: string | null
    date: string
}