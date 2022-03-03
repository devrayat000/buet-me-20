import { useAnnouncementsQuery, useCtQuery, useLabQuery } from "../../graphql/generated"
import { createdDate, dueDate } from "../../utils/time"
import Items from "./items"

export const AnnouncementItems: React.FC = () => {
    const [{ data, error, fetching }] = useAnnouncementsQuery()

    return (
        <Items {...{ error, fetching, empty: data?.announcements?.data.length === 0 }}>
            {data?.announcements?.data.map(({ id, attributes: n }) => {
                return <NotificationItem key={id} title={n?.title!} date={createdDate(n?.createdAt)} />
            })}
        </Items>
    )
}

export const CTItems: React.FC = () => {
    const [{ data, error, fetching }] = useCtQuery()

    return (
        <Items {...{ error, fetching, empty: data?.classTests?.data.length === 0 }}>
            {data?.classTests?.data.map(({ id, attributes: c }) => {
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
    const [{ data, error, fetching }] = useLabQuery()

    return (
        <Items {...{ error, fetching, empty: data?.labReports?.data.length === 0 }}>
            {data?.labReports?.data.map(({ id, attributes: l }) => {
                return <NotificationItem key={id} title={l?.subject!} subtitle={l?.about} date={dueDate(l?.due)} />
            })}
        </Items>
    )
}

const NotificationItem: React.FC<NotificationItemProps> = ({ date, title, subtitle, info }) => {
    return <li className='border bg-white rounded-lg my-1 p-2'>
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