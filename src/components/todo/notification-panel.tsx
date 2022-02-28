import { Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"
import clsx from "clsx"

const NotificationPanel: React.FC<NotificationPanelProps> = ({ title, children, color, arrowColor }) => {
    const buttonClass = clsx(
        'flex justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
        color
    )
    return (
        <Disclosure as='section'>
            {({ open }) => (
                <>
                    <Disclosure.Button className={buttonClass}>
                        <span>{title}</span>
                        <ChevronUpIcon
                            className={clsx('w-5 h-5 transition-transform', arrowColor,
                                {
                                    ['rotate-180']: open,
                                })}
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

export default NotificationPanel

export interface NotificationPanelProps {
    title: string
    children: React.ReactChild
    color: string
    arrowColor: string
}