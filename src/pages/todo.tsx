import { NextPage } from "next";
import { Tab } from '@headlessui/react'
import { useState } from "react";

import Notifications from '../components/todo/notifications'
import { NextSeo } from "next-seo";

const Todo: NextPage = () => {
    const [tab, setTab] = useState(0)
    return (
        <div className="pt-20">
            <NextSeo
                title="Todos | Announcements, CTs and Lab Reports"
                description="Stay up to date with announcements, class tests and lab reports by the class representatives"
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: 'announcement,ct,test,lab'
                    }
                ]}
            />
            <section className="isolate m-4">
                <Notifications />
            </section>
        </div>
    );
}

export default Todo;