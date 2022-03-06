export interface ClassTest {
    data: Data[];
    meta: Meta;
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    subject: string;
    about: string;
    type: string;
    occurring: Date;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
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
