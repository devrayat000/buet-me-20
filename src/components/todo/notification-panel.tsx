import { Disclosure, Transition } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"
import clsx from "clsx"

const NotificationPanel: React.FC<NotificationPanelProps> = ({ children, color, arrowColor, button }) => {
    const buttonClass = clsx(
        'flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
        color
    )
    return (
        <Disclosure as='section'>
            {({ open }) => (
                <>
                    <Disclosure.Button className={buttonClass}>
                        {button}
                        <ChevronUpIcon
                            className={clsx('w-6 h-6 transition-transform', arrowColor,
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
                        <Disclosure.Panel as='article' className="pt-2 text-sm text-gray-500 max-h-80 scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin">
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
    children: React.ReactChild
    color: string
    arrowColor: string
    button: React.ReactChild
}