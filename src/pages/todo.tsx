import { NextSeo } from "next-seo";
import type { GetServerSideProps, NextPage } from "next";

import Notifications from '../components/todo/notifications'

const Todo: NextPage = () => {
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