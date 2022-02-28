import { NextPage } from "next";
import { Tab } from '@headlessui/react'
import { useState } from "react";

import Notifications from '../components/todo/notifications'

const Todo: NextPage = () => {
    const [tab, setTab] = useState(0)
    return (
        <div className="pt-20">
            <section className="isolate m-4">
                <Notifications />
            </section>
        </div>
    );
}

export default Todo;