import { useAnnouncementsQuery, useCtQuery, useLabQuery } from "../../graphql/generated"
import { createdDate, dueDate } from "../../utils/time"
import Items from "./items"

export const AnnouncementItems: React.FC = () => {
    const [{ data, error, fetching }, refetch] = useAnnouncementsQuery()

    return (
        <Items {...{ error, fetching, empty: data?.announcements?.length === 0 }}>
            {data?.announcements?.map(n => {
                return <NotificationItem key={n.id} title={n.title!} date={createdDate(n.created)} />
            })}
        </Items>
    )
}

export const CTItems: React.FC = () => {
    const [{ data, error, fetching }, refetch] = useCtQuery()

    return (
        <Items {...{ error, fetching, empty: data?.todos?.length === 0 }}>
            {data?.todos?.map(c => {
                return <NotificationItem key={c.id} title={c.subject!} subtitle={c.about} date={dueDate(c.due)} />
            })}
        </Items>
    )
}

export const LabItems: React.FC = () => {
    const [{ data, error, fetching }, refetch] = useLabQuery()

    return (
        <Items {...{ error, fetching, empty: data?.todos?.length === 0 }}>
            {data?.todos?.map(c => {
                return <NotificationItem key={c.id} title={c.subject!} subtitle={c.about} date={dueDate(c.due)} />
            })}
        </Items>
    )
}

const NotificationItem: React.FC<NotificationItemProps> = ({ date, title, subtitle }) => {
    return <li className='border bg-white rounded-lg my-1 p-2'>
        <h5 className='m-0 mb-2 text-base'>{title}</h5>
        {subtitle && <h5 className='m-0 mb-1 text-sm'>{subtitle}</h5>}
        <h6 className='m-0 text-right text-xs'>{date}</h6>
    </li>
}

export default NotificationItem

export interface NotificationItemProps {
    title: string
    subtitle?: string | null
    date: string
}