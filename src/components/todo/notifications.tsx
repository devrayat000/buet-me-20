import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { CombinedError } from 'urql'
import { Notification, useCtQuery, useNotificationsQuery, useLabQuery } from '../../graphql/generated'
import { createdDate, dueDate } from '../../utils/time'


const Notifications: React.FC = () => {
    return (
        <div className="w-full px-4 pt-4">
            <div className="w-full max-w-4xl p-2 mx-auto rounded- grid grid-cols-3 gap-2">
                <NotificationPanel title='Notifications'>
                    <NotificationItems />
                </NotificationPanel>
                <NotificationPanel title='Class Tests'>
                    <CTItems />
                </NotificationPanel>
                <NotificationPanel title='Lab Reports'>
                    <LabItems />
                </NotificationPanel>
            </div>
        </div>
    )
}

export default Notifications

const NotificationPanel: React.FC<NotificationPanelProps> = ({ title, children }) => {
    return (
        <Disclosure as='section'>
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>{title}</span>
                        <ChevronUpIcon
                            className={`${open ? 'rotate-180' : ''
                                } w-5 h-5 text-purple-500 transition-transform`}
                        />
                    </Disclosure.Button>
                    <Transition show={open} enter="transition duration-100 ease-out origin-top"
                        enterFrom="scale-95 opacity-0"
                        enterTo="scale-100 opacity-100"
                        leave="transition duration-100 ease-out origin-top"
                        leaveFrom="scale-100 opacity-100"
                        leaveTo="scale-95 opacity-0"
                    >
                        <Disclosure.Panel as='article' className="pt-2 text-sm text-gray-500">
                            {children}
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}

interface NotificationPanelProps {
    title: string
    children: React.ReactChild
}

const Items: React.FC<ItemsProps> = function ({ fetching, children, error }) {
    if (fetching) {
        console.log('fetching');
    }
    if (error) {
        console.log(error);
        return <h4>{error.message}</h4>
    }

    return (
        <ul className='list-none p-0'>
            {children}
        </ul>
    )
}

interface ItemsProps {
    fetching: boolean
    children: React.ReactNode
    error?: CombinedError
}

const NotificationItems: React.FC = () => {
    const [{ data, error, fetching }, refetch] = useNotificationsQuery()

    return (
        <Items {...{ error, fetching }}>
            {data?.notifications?.map(n => {
                return <NotificationItem key={n.id} title={n.title!} date={createdDate(n.created)} />
            })}
        </Items>
    )
}

const CTItems: React.FC = () => {
    const [{ data, error, fetching }, refetch] = useCtQuery()

    return (
        <Items {...{ error, fetching }}>
            {data?.todos?.map(c => {
                return <NotificationItem key={c.id} title={c.subject!} subtitle={c.about} date={dueDate(c.due)} />
            })}
        </Items>
    )
}

const LabItems: React.FC = () => {
    const [{ data, error, fetching }, refetch] = useLabQuery()

    return (
        <Items {...{ error, fetching }}>
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

interface NotificationItemProps {
    title: string
    subtitle?: string | null
    date: string
}