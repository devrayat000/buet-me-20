import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { useNotificationsQuery } from '../../graphql/generated'


const Notifications: React.FC = () => {
    return (
        <div className="w-full px-4 pt-16">
            <div className="w-full max-w-md p-2 mx-auto bg-slate-50 rounded-2xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Notifications</span>
                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-5 h-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel as='article' className="pt-2 text-sm text-gray-500">

                                <Items />
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default Notifications

const Items: React.FC = () => {
    const [{ data, error }, refetch] = useNotificationsQuery()
    if (error) {
        console.log(error);

        return <h4>{error.message}</h4>
    }

    return (
        <ul className='list-none p-0'>
            {data?.notifications?.map(n => {
                return <li key={n.id} className='border bg-white rounded-lg my-0.5 p-2'>{n.title}</li>
            })}
        </ul>
    )
}