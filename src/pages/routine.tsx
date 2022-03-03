import { useRef } from 'react'
import type { GetStaticProps, NextPage } from "next";

import RoutineApp from "../components/routine";


const Routine: NextPage<{ routineUrl: string }> = ({ routineUrl }) => {
    const routineRef = useRef<HTMLDivElement>(null)

    return (
        <div className="pt-20 mx-16">
            <section ref={routineRef} className="isolate m-4">
                <RoutineApp />
                <div className="flex justify-end">
                    <a className="btn btn-wide" title="Download Routine" href={routineUrl} download='routine.pdf'>Download</a>
                </div>
            </section>
        </div>
    );
}

export default Routine;

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch('http://localhost:1337/api/upload/files/1',
        { headers: { 'Content-Type': 'application/json' } }
    )
    const data = await res.json()
    return {
        props: {
            routineUrl: 'http://localhost:1337' + data.url
        }
    };
}