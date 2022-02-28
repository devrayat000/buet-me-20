import { CombinedError } from "urql";

const Items: React.FC<ItemsProps> = function ({ fetching, children, error, empty }) {
    if (fetching) {
        console.log('fetching');
    }
    if (error) {
        console.log(error);
        return <h4>{error.message}</h4>
    }

    if (empty) {
        return <h2 className='m-0 p-4 text-center'>Nothing in here 😒</h2>
    }

    return (
        <ul className='list-none p-0'>
            {children}
        </ul>
    )
}

export default Items

export interface ItemsProps {
    fetching: boolean
    children: React.ReactNode
    error?: CombinedError
    empty?: boolean
}