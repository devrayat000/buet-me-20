import { useRef } from 'react'
import type { GetStaticProps, NextPage } from "next";

import RoutineApp from "../components/routine";


const Routine: NextPage<{ routineUrl: string, term: string }> = ({ routineUrl, term }) => {
    const routineRef = useRef<HTMLDivElement>(null)

    return (
        <div className="pt-20 mx-16">
            <section ref={routineRef} className="isolate m-4">
                <h2 className='m-2 text-center'>Routine for {term}</h2>
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT!}/api/upload/files/1`,
        { headers: { 'Content-Type': 'application/json' } }
    )
    const data = await res.json()
    return {
        props: {
            term: data.term,
            routineUrl: process.env.NEXT_PUBLIC_API_ENDPOINT! + data.url
        }
    };
}