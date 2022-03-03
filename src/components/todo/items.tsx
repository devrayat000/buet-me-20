import { Transition } from "@headlessui/react";
import { CombinedError } from "urql";
import Spinner from "../icon/spinner";

const Items: React.FC<ItemsProps> = function ({ fetching, children, error, empty }) {
    if (error) {
        console.log(error);
        return (
            <h4 className="text-justify">{error.message}</h4>
        )
    }

    if (empty) {
        return <h2 className='m-0 p-4 text-center'>Nothing in here 😒</h2>
    }

    return (
        <>
            <Transition show={fetching}
                enter="transition duration-100 ease-out origin-center"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="transition duration-100 ease-out origin-center"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
            >
                <div className="flex justify-center items-center">
                    <Spinner className="h-8 w-8" />
                </div>
            </Transition>
            <Transition show={!fetching}
                enter="transition duration-100 delay-150 ease-out origin-center"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="transition duration-100 ease-out origin-center"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
            >
                <ul className='list-none p-0'>
                    {children}
                </ul>
            </Transition>
        </>
    )
}

export default Items

export interface ItemsProps {
    fetching: boolean
    children: React.ReactNode
    error?: CombinedError
    empty?: boolean
}