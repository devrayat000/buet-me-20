import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Announcement = {
  __typename?: 'Announcement';
  created?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type AnnouncementCreateInput = {
  created?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AnnouncementOrderByInput = {
  created?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type AnnouncementUpdateArgs = {
  data: AnnouncementUpdateInput;
  where: AnnouncementWhereUniqueInput;
};

export type AnnouncementUpdateInput = {
  created?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AnnouncementWhereInput = {
  AND?: InputMaybe<Array<AnnouncementWhereInput>>;
  NOT?: InputMaybe<Array<AnnouncementWhereInput>>;
  OR?: InputMaybe<Array<AnnouncementWhereInput>>;
  created?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AnnouncementWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type AuthenticatedItem = User;

export type CloudImageFieldOutput = ImageFieldOutput & {
  __typename?: 'CloudImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  ref?: InputMaybe<Scalars['String']>;
  upload?: InputMaybe<Scalars['Upload']>;
};

export type ImageFieldOutput = {
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type LocalImageFieldOutput = ImageFieldOutput & {
  __typename?: 'LocalImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAnnouncement?: Maybe<Announcement>;
  createAnnouncements?: Maybe<Array<Maybe<Announcement>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createStudent?: Maybe<Student>;
  createStudents?: Maybe<Array<Maybe<Student>>>;
  createTodo?: Maybe<Todo>;
  createTodos?: Maybe<Array<Maybe<Todo>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAnnouncement?: Maybe<Announcement>;
  deleteAnnouncements?: Maybe<Array<Maybe<Announcement>>>;
  deleteStudent?: Maybe<Student>;
  deleteStudents?: Maybe<Array<Maybe<Student>>>;
  deleteTodo?: Maybe<Todo>;
  deleteTodos?: Maybe<Array<Maybe<Todo>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  updateAnnouncement?: Maybe<Announcement>;
  updateAnnouncements?: Maybe<Array<Maybe<Announcement>>>;
  updateStudent?: Maybe<Student>;
  updateStudents?: Maybe<Array<Maybe<Student>>>;
  updateTodo?: Maybe<Todo>;
  updateTodos?: Maybe<Array<Maybe<Todo>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateAnnouncementArgs = {
  data: AnnouncementCreateInput;
};


export type MutationCreateAnnouncementsArgs = {
  data: Array<AnnouncementCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateStudentArgs = {
  data: StudentCreateInput;
};


export type MutationCreateStudentsArgs = {
  data: Array<StudentCreateInput>;
};


export type MutationCreateTodoArgs = {
  data: TodoCreateInput;
};


export type MutationCreateTodosArgs = {
  data: Array<TodoCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteAnnouncementArgs = {
  where: AnnouncementWhereUniqueInput;
};


export type MutationDeleteAnnouncementsArgs = {
  where: Array<AnnouncementWhereUniqueInput>;
};


export type MutationDeleteStudentArgs = {
  where: StudentWhereUniqueInput;
};


export type MutationDeleteStudentsArgs = {
  where: Array<StudentWhereUniqueInput>;
};


export type MutationDeleteTodoArgs = {
  where: TodoWhereUniqueInput;
};


export type MutationDeleteTodosArgs = {
  where: Array<TodoWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateAnnouncementArgs = {
  data: AnnouncementUpdateInput;
  where: AnnouncementWhereUniqueInput;
};


export type MutationUpdateAnnouncementsArgs = {
  data: Array<AnnouncementUpdateArgs>;
};


export type MutationUpdateStudentArgs = {
  data: StudentUpdateInput;
  where: StudentWhereUniqueInput;
};


export type MutationUpdateStudentsArgs = {
  data: Array<StudentUpdateArgs>;
};


export type MutationUpdateTodoArgs = {
  data: TodoUpdateInput;
  where: TodoWhereUniqueInput;
};


export type MutationUpdateTodosArgs = {
  data: Array<TodoUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  announcement?: Maybe<Announcement>;
  announcements?: Maybe<Array<Announcement>>;
  announcementsCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
  student?: Maybe<Student>;
  students?: Maybe<Array<Student>>;
  studentsCount?: Maybe<Scalars['Int']>;
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Todo>>;
  todosCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryAnnouncementArgs = {
  where: AnnouncementWhereUniqueInput;
};


export type QueryAnnouncementsArgs = {
  orderBy?: Array<AnnouncementOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AnnouncementWhereInput;
};


export type QueryAnnouncementsCountArgs = {
  where?: AnnouncementWhereInput;
};


export type QueryStudentArgs = {
  where: StudentWhereUniqueInput;
};


export type QueryStudentsArgs = {
  orderBy?: Array<StudentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: StudentWhereInput;
};


export type QueryStudentsCountArgs = {
  where?: StudentWhereInput;
};


export type QueryTodoArgs = {
  where: TodoWhereUniqueInput;
};


export type QueryTodosArgs = {
  orderBy?: Array<TodoOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TodoWhereInput;
};


export type QueryTodosCountArgs = {
  where?: TodoWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<ImageFieldOutput>;
  studentId?: Maybe<Scalars['String']>;
};

export type StudentCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<ImageFieldInput>;
  studentId?: InputMaybe<Scalars['String']>;
};

export type StudentOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  studentId?: InputMaybe<OrderDirection>;
};

export type StudentUpdateArgs = {
  data: StudentUpdateInput;
  where: StudentWhereUniqueInput;
};

export type StudentUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<ImageFieldInput>;
  studentId?: InputMaybe<Scalars['String']>;
};

export type StudentWhereInput = {
  AND?: InputMaybe<Array<StudentWhereInput>>;
  NOT?: InputMaybe<Array<StudentWhereInput>>;
  OR?: InputMaybe<Array<StudentWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  studentId?: InputMaybe<StringFilter>;
};

export type StudentWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  studentId?: InputMaybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  about?: Maybe<Scalars['String']>;
  due?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  subject?: Maybe<Scalars['String']>;
  type?: Maybe<TodoTypeType>;
};

export type TodoCreateInput = {
  about?: InputMaybe<Scalars['String']>;
  due?: InputMaybe<Scalars['DateTime']>;
  subject?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TodoTypeType>;
};

export type TodoOrderByInput = {
  about?: InputMaybe<OrderDirection>;
  due?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  subject?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export enum TodoTypeType {
  Ct = 'ct',
  Lab = 'lab'
}

export type TodoTypeTypeNullableFilter = {
  equals?: InputMaybe<TodoTypeType>;
  in?: InputMaybe<Array<TodoTypeType>>;
  not?: InputMaybe<TodoTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<TodoTypeType>>;
};

export type TodoUpdateArgs = {
  data: TodoUpdateInput;
  where: TodoWhereUniqueInput;
};

export type TodoUpdateInput = {
  about?: InputMaybe<Scalars['String']>;
  due?: InputMaybe<Scalars['DateTime']>;
  subject?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TodoTypeType>;
};

export type TodoWhereInput = {
  AND?: InputMaybe<Array<TodoWhereInput>>;
  NOT?: InputMaybe<Array<TodoWhereInput>>;
  OR?: InputMaybe<Array<TodoWhereInput>>;
  about?: InputMaybe<StringFilter>;
  due?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  subject?: InputMaybe<StringFilter>;
  type?: InputMaybe<TodoTypeTypeNullableFilter>;
};

export type TodoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type AnnouncementsQueryVariables = Exact<{ [key: string]: never; }>;


export type AnnouncementsQuery = { __typename?: 'Query', announcements?: Array<{ __typename?: 'Announcement', id: string, title?: string | null, created?: any | null }> | null };

export type TodoFragFragment = { __typename?: 'Todo', id: string, type?: TodoTypeType | null, subject?: string | null, about?: string | null, due?: any | null };

export type CtQueryVariables = Exact<{ [key: string]: never; }>;


export type CtQuery = { __typename?: 'Query', todos?: Array<{ __typename?: 'Todo', id: string, type?: TodoTypeType | null, subject?: string | null, about?: string | null, due?: any | null }> | null };

export type LabQueryVariables = Exact<{ [key: string]: never; }>;


export type LabQuery = { __typename?: 'Query', todos?: Array<{ __typename?: 'Todo', id: string, type?: TodoTypeType | null, subject?: string | null, about?: string | null, due?: any | null }> | null };

export const TodoFragFragmentDoc = gql`
    fragment TodoFrag on Todo {
  id
  type
  subject
  about
  due
}
    `;
export const AnnouncementsDocument = gql`
    query Announcements {
  announcements(where: {}, orderBy: [{created: desc}], skip: 0) {
    id
    title
    created
  }
}
    `;

export function useAnnouncementsQuery(options?: Omit<Urql.UseQueryArgs<AnnouncementsQueryVariables>, 'query'>) {
  return Urql.useQuery<AnnouncementsQuery>({ query: AnnouncementsDocument, ...options });
};
export const CtDocument = gql`
    query CT {
  todos(where: {type: {equals: ct}}, orderBy: [{due: asc}], skip: 0) {
    ...TodoFrag
  }
}
    ${TodoFragFragmentDoc}`;

export function useCtQuery(options?: Omit<Urql.UseQueryArgs<CtQueryVariables>, 'query'>) {
  return Urql.useQuery<CtQuery>({ query: CtDocument, ...options });
};
export const LabDocument = gql`
    query Lab {
  todos(where: {type: {equals: lab}}, orderBy: [{due: asc}], skip: 0) {
    ...TodoFrag
  }
}
    ${TodoFragFragmentDoc}`;

export function useLabQuery(options?: Omit<Urql.UseQueryArgs<LabQueryVariables>, 'query'>) {
  return Urql.useQuery<LabQuery>({ query: LabDocument, ...options });
};