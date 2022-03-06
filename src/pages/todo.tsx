import { NextSeo } from "next-seo";
import { QueryClient } from "react-query";
import type { GetStaticProps, NextPage } from "next";

import Notifications from '../components/todo/notifications'
import { count } from "../utils/query";
import CountProvider, { type ICountContext } from "../components/todo/context";

const Todo: NextPage<ICountContext> = ({ ct, lab }) => {
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
                <CountProvider value={{ ct, lab }}>

                    <Notifications />
                </CountProvider>
            </section>
        </div>
    );
}

export default Todo;

const client = new QueryClient()

export const getStaticProps: GetStaticProps<ICountContext> = async (context) => {
    const ct = await client.fetchQuery(['class-test'], count)
    const lab = await client.fetchQuery(['lab-report'], count)
    return {
        props: {
            ct: ct.result.count,
            lab: lab.result.count,
        },
        revalidate: 60 * 60 * 24
    };
}