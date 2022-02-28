import { NextPage } from "next";
import { Tab } from '@headlessui/react'
import { useState } from "react";

const Todo: NextPage = () => {
    const [tab, setTab] = useState(0)
    return (
        <div className="pt-20">
            <section className="isolate m-4">
                <Tab.Group selectedIndex={tab} onChange={setTab} >
                    <Tab.List className='flex justify-around divide-x-2 bg-blue-400'>
                        <Tab className='text-white flex-1 hover:bg-blue-500'>
                            Section A
                        </Tab>
                        <Tab className='text-white flex-1 hover:bg-blue-500'>
                            Section B
                        </Tab>
                        <Tab className='text-white flex-1 hover:bg-blue-500'>
                            Section C
                        </Tab>
                    </Tab.List>
                    <Tab.Panels translate="yes">
                        <Tab.Panel>SecA</Tab.Panel>
                        <Tab.Panel>SecB</Tab.Panel>
                        <Tab.Panel>SecC</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </section>
        </div>
    );
}

export default Todo;