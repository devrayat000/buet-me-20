import { NextPage } from "next";
import { Tab, } from '@headlessui/react'
import { useState } from "react";
import RoutineApp from "../components/routine";
import clsx from "clsx";

const Routine: NextPage = () => {
    const [tab, setTab] = useState(0)

    const tabClass = ({ selected }: { selected: boolean }) => clsx(
        'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
        selected
            ? 'bg-white shadow'
            : 'text-white hover:bg-white/20 hover:text-white'
    )

    const panelClass = clsx(
        'bg-white rounded-xl p-3',
        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
    )

    return (
        <div className="pt-20 mx-16">
            <section className="isolate m-4">
                <RoutineApp />
            </section>
        </div>
    );
}

export default Routine;