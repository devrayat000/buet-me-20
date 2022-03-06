// Generated by https://quicktype.io

export interface LabReport {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    subject: string;
    about: string;
    due: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
