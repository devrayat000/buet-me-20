import { api } from "./react-query";
import type { Announcement } from "../types/schema/announcement";
import { ClassTest } from "../types/schema/class-test";
import { LabReport } from "../types/schema/lab-report";
import { QueryFunction } from "react-query";

export const getAnnouncements: QueryFunction<Announcement> = ({ signal }) => {
    return api.get<Announcement>('/api/announcements', {
        signal,
        params: {
            sort: ['createdAt:desc']
        }
    }).then(r => r.data)
}

export const getClassTests: QueryFunction<ClassTest> = ({ signal }) => {
    return api.get<ClassTest>('/api/class-tests', {
        signal,
        params: {
            sort: ['occurring:asc'],
            filters: {
                occurring: {
                    $gt: new Date()
                }
            }
        }
    }).then(r => r.data)
}

export const getLabReports: QueryFunction<LabReport> = ({ signal }) => {
    return api.get<LabReport>('/api/lab-reports', {
        signal,
        params: {
            sort: ['due:asc'],
            filters: {
                due: {
                    $gt: new Date()
                }
            }
        }
    }).then(r => r.data)
}

export const count: QueryFunction<any, string[]> = ({ queryKey }) => {
    const [endpoint, time = 'week'] = queryKey
    return api.get(`/api/${endpoint}/count/${time}`).then(r => r.data)
}

export const enum QueryKey {
    ANNOUNCEMENT = 'announcements',
    CLASS_TEST = 'classTests',
    LAB_REPORT = 'labReports'
}