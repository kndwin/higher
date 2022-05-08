import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars["String"]>;
  expires_at?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  id_token?: InputMaybe<Scalars["String"]>;
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
  refresh_token?: InputMaybe<Scalars["String"]>;
  scope?: InputMaybe<Scalars["String"]>;
  session_state?: InputMaybe<Scalars["String"]>;
  token_type?: InputMaybe<Scalars["String"]>;
  type: Scalars["String"];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars["String"]>;
  expires_at?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  id_token?: InputMaybe<Scalars["String"]>;
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
  refresh_token?: InputMaybe<Scalars["String"]>;
  scope?: InputMaybe<Scalars["String"]>;
  session_state?: InputMaybe<Scalars["String"]>;
  token_type?: InputMaybe<Scalars["String"]>;
  type: Scalars["String"];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
};

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
};

export type AffectedRowsOutput = {
  __typename?: "AffectedRowsOutput";
  count: Scalars["Int"];
};

export type AggregateFileAttachment = {
  __typename?: "AggregateFileAttachment";
  _count?: Maybe<FileAttachmentCountAggregate>;
  _max?: Maybe<FileAttachmentMaxAggregate>;
  _min?: Maybe<FileAttachmentMinAggregate>;
};

export type AggregateModule = {
  __typename?: "AggregateModule";
  _count?: Maybe<ModuleCountAggregate>;
  _max?: Maybe<ModuleMaxAggregate>;
  _min?: Maybe<ModuleMinAggregate>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["DateTime"]>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type EnumModuleTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ModuleType>;
};

export type EnumModuleTypeFilter = {
  equals?: InputMaybe<ModuleType>;
  in?: InputMaybe<Array<ModuleType>>;
  not?: InputMaybe<NestedEnumModuleTypeFilter>;
  notIn?: InputMaybe<Array<ModuleType>>;
};

export type EnumModuleTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumModuleTypeFilter>;
  _min?: InputMaybe<NestedEnumModuleTypeFilter>;
  equals?: InputMaybe<ModuleType>;
  in?: InputMaybe<Array<ModuleType>>;
  not?: InputMaybe<NestedEnumModuleTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ModuleType>>;
};

export type FileAttachment = {
  __typename?: "FileAttachment";
  fileUrl: Scalars["String"];
  highlights?: Maybe<Scalars["JSON"]>;
  id: Scalars["String"];
  moduleId: Scalars["String"];
};

export type FileAttachmentCountAggregate = {
  __typename?: "FileAttachmentCountAggregate";
  _all: Scalars["Int"];
  fileUrl: Scalars["Int"];
  highlights: Scalars["Int"];
  id: Scalars["Int"];
  moduleId: Scalars["Int"];
};

export type FileAttachmentCountOrderByAggregateInput = {
  fileUrl?: InputMaybe<SortOrder>;
  highlights?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moduleId?: InputMaybe<SortOrder>;
};

export type FileAttachmentCreateInput = {
  fileUrl: Scalars["String"];
  highlights?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<Scalars["String"]>;
  module: ModuleCreateNestedOneWithoutFileAttachmentsInput;
};

export type FileAttachmentCreateManyInput = {
  fileUrl: Scalars["String"];
  highlights?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<Scalars["String"]>;
  moduleId: Scalars["String"];
};

export type FileAttachmentCreateManyModuleInput = {
  fileUrl: Scalars["String"];
  highlights?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<Scalars["String"]>;
};

export type FileAttachmentCreateManyModuleInputEnvelope = {
  data: Array<FileAttachmentCreateManyModuleInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type FileAttachmentCreateNestedManyWithoutModuleInput = {
  connect?: InputMaybe<Array<FileAttachmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<FileAttachmentCreateOrConnectWithoutModuleInput>
  >;
  create?: InputMaybe<Array<FileAttachmentCreateWithoutModuleInput>>;
  createMany?: InputMaybe<FileAttachmentCreateManyModuleInputEnvelope>;
};

export type FileAttachmentCreateOrConnectWithoutModuleInput = {
  create: FileAttachmentCreateWithoutModuleInput;
  where: FileAttachmentWhereUniqueInput;
};

export type FileAttachmentCreateWithoutModuleInput = {
  fileUrl: Scalars["String"];
  highlights?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<Scalars["String"]>;
};

export type FileAttachmentGroupBy = {
  __typename?: "FileAttachmentGroupBy";
  _count?: Maybe<FileAttachmentCountAggregate>;
  _max?: Maybe<FileAttachmentMaxAggregate>;
  _min?: Maybe<FileAttachmentMinAggregate>;
  fileUrl: Scalars["String"];
  highlights?: Maybe<Scalars["JSON"]>;
  id: Scalars["String"];
  moduleId: Scalars["String"];
};

export type FileAttachmentListRelationFilter = {
  every?: InputMaybe<FileAttachmentWhereInput>;
  none?: InputMaybe<FileAttachmentWhereInput>;
  some?: InputMaybe<FileAttachmentWhereInput>;
};

export type FileAttachmentMaxAggregate = {
  __typename?: "FileAttachmentMaxAggregate";
  fileUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  moduleId?: Maybe<Scalars["String"]>;
};

export type FileAttachmentMaxOrderByAggregateInput = {
  fileUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moduleId?: InputMaybe<SortOrder>;
};

export type FileAttachmentMinAggregate = {
  __typename?: "FileAttachmentMinAggregate";
  fileUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  moduleId?: Maybe<Scalars["String"]>;
};

export type FileAttachmentMinOrderByAggregateInput = {
  fileUrl?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moduleId?: InputMaybe<SortOrder>;
};

export type FileAttachmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FileAttachmentOrderByWithAggregationInput = {
  _count?: InputMaybe<FileAttachmentCountOrderByAggregateInput>;
  _max?: InputMaybe<FileAttachmentMaxOrderByAggregateInput>;
  _min?: InputMaybe<FileAttachmentMinOrderByAggregateInput>;
  fileUrl?: InputMaybe<SortOrder>;
  highlights?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moduleId?: InputMaybe<SortOrder>;
};

export type FileAttachmentOrderByWithRelationInput = {
  fileUrl?: InputMaybe<SortOrder>;
  highlights?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  module?: InputMaybe<ModuleOrderByWithRelationInput>;
  moduleId?: InputMaybe<SortOrder>;
};

export enum FileAttachmentScalarFieldEnum {
  FileUrl = "fileUrl",
  Highlights = "highlights",
  Id = "id",
  ModuleId = "moduleId",
}

export type FileAttachmentScalarWhereInput = {
  AND?: InputMaybe<Array<FileAttachmentScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileAttachmentScalarWhereInput>>;
  OR?: InputMaybe<Array<FileAttachmentScalarWhereInput>>;
  fileUrl?: InputMaybe<StringFilter>;
  highlights?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  moduleId?: InputMaybe<StringFilter>;
};

export type FileAttachmentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FileAttachmentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FileAttachmentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FileAttachmentScalarWhereWithAggregatesInput>>;
  fileUrl?: InputMaybe<StringWithAggregatesFilter>;
  highlights?: InputMaybe<JsonNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  moduleId?: InputMaybe<StringWithAggregatesFilter>;
};

export type FileAttachmentUpdateInput = {
  fileUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  highlights?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  module?: InputMaybe<ModuleUpdateOneRequiredWithoutFileAttachmentsInput>;
};

export type FileAttachmentUpdateManyMutationInput = {
  fileUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  highlights?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileAttachmentUpdateManyWithWhereWithoutModuleInput = {
  data: FileAttachmentUpdateManyMutationInput;
  where: FileAttachmentScalarWhereInput;
};

export type FileAttachmentUpdateManyWithoutModuleInput = {
  connect?: InputMaybe<Array<FileAttachmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<FileAttachmentCreateOrConnectWithoutModuleInput>
  >;
  create?: InputMaybe<Array<FileAttachmentCreateWithoutModuleInput>>;
  createMany?: InputMaybe<FileAttachmentCreateManyModuleInputEnvelope>;
  delete?: InputMaybe<Array<FileAttachmentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileAttachmentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileAttachmentWhereUniqueInput>>;
  set?: InputMaybe<Array<FileAttachmentWhereUniqueInput>>;
  update?: InputMaybe<
    Array<FileAttachmentUpdateWithWhereUniqueWithoutModuleInput>
  >;
  updateMany?: InputMaybe<
    Array<FileAttachmentUpdateManyWithWhereWithoutModuleInput>
  >;
  upsert?: InputMaybe<
    Array<FileAttachmentUpsertWithWhereUniqueWithoutModuleInput>
  >;
};

export type FileAttachmentUpdateWithWhereUniqueWithoutModuleInput = {
  data: FileAttachmentUpdateWithoutModuleInput;
  where: FileAttachmentWhereUniqueInput;
};

export type FileAttachmentUpdateWithoutModuleInput = {
  fileUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  highlights?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileAttachmentUpsertWithWhereUniqueWithoutModuleInput = {
  create: FileAttachmentCreateWithoutModuleInput;
  update: FileAttachmentUpdateWithoutModuleInput;
  where: FileAttachmentWhereUniqueInput;
};

export type FileAttachmentWhereInput = {
  AND?: InputMaybe<Array<FileAttachmentWhereInput>>;
  NOT?: InputMaybe<Array<FileAttachmentWhereInput>>;
  OR?: InputMaybe<Array<FileAttachmentWhereInput>>;
  fileUrl?: InputMaybe<StringFilter>;
  highlights?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  module?: InputMaybe<ModuleRelationFilter>;
  moduleId?: InputMaybe<StringFilter>;
};

export type FileAttachmentWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type JsonNullableFilter = {
  equals?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<Scalars["JSON"]>;
};

export type JsonNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedJsonNullableFilter>;
  _min?: InputMaybe<NestedJsonNullableFilter>;
  equals?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<Scalars["JSON"]>;
};

export type Module = {
  __typename?: "Module";
  _count?: Maybe<ModuleCount>;
  fileStructure?: Maybe<Scalars["JSON"]>;
  id: Scalars["String"];
  name: Scalars["String"];
  type: ModuleType;
  userId: Scalars["String"];
};

export type ModuleCount = {
  __typename?: "ModuleCount";
  fileAttachments: Scalars["Int"];
};

export type ModuleCountAggregate = {
  __typename?: "ModuleCountAggregate";
  _all: Scalars["Int"];
  fileStructure: Scalars["Int"];
  id: Scalars["Int"];
  name: Scalars["Int"];
  type: Scalars["Int"];
  userId: Scalars["Int"];
};

export type ModuleCountOrderByAggregateInput = {
  fileStructure?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ModuleCreateInput = {
  fileAttachments?: InputMaybe<FileAttachmentCreateNestedManyWithoutModuleInput>;
  fileStructure?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  type: ModuleType;
  user: UserCreateNestedOneWithoutModulesInput;
};

export type ModuleCreateManyInput = {
  fileStructure?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  type: ModuleType;
  userId: Scalars["String"];
};

export type ModuleCreateNestedOneWithoutFileAttachmentsInput = {
  connect?: InputMaybe<ModuleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ModuleCreateOrConnectWithoutFileAttachmentsInput>;
  create?: InputMaybe<ModuleCreateWithoutFileAttachmentsInput>;
};

export type ModuleCreateOrConnectWithoutFileAttachmentsInput = {
  create: ModuleCreateWithoutFileAttachmentsInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateWithoutFileAttachmentsInput = {
  fileStructure?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  type: ModuleType;
  user: UserCreateNestedOneWithoutModulesInput;
};

export type ModuleGroupBy = {
  __typename?: "ModuleGroupBy";
  _count?: Maybe<ModuleCountAggregate>;
  _max?: Maybe<ModuleMaxAggregate>;
  _min?: Maybe<ModuleMinAggregate>;
  fileStructure?: Maybe<Scalars["JSON"]>;
  id: Scalars["String"];
  name: Scalars["String"];
  type: ModuleType;
  userId: Scalars["String"];
};

export type ModuleListRelationFilter = {
  every?: InputMaybe<ModuleWhereInput>;
  none?: InputMaybe<ModuleWhereInput>;
  some?: InputMaybe<ModuleWhereInput>;
};

export type ModuleMaxAggregate = {
  __typename?: "ModuleMaxAggregate";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<ModuleType>;
  userId?: Maybe<Scalars["String"]>;
};

export type ModuleMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ModuleMinAggregate = {
  __typename?: "ModuleMinAggregate";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<ModuleType>;
  userId?: Maybe<Scalars["String"]>;
};

export type ModuleMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ModuleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ModuleOrderByWithAggregationInput = {
  _count?: InputMaybe<ModuleCountOrderByAggregateInput>;
  _max?: InputMaybe<ModuleMaxOrderByAggregateInput>;
  _min?: InputMaybe<ModuleMinOrderByAggregateInput>;
  fileStructure?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ModuleOrderByWithRelationInput = {
  fileAttachments?: InputMaybe<FileAttachmentOrderByRelationAggregateInput>;
  fileStructure?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type ModuleRelationFilter = {
  is?: InputMaybe<ModuleWhereInput>;
  isNot?: InputMaybe<ModuleWhereInput>;
};

export enum ModuleScalarFieldEnum {
  FileStructure = "fileStructure",
  Id = "id",
  Name = "name",
  Type = "type",
  UserId = "userId",
}

export type ModuleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ModuleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ModuleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ModuleScalarWhereWithAggregatesInput>>;
  fileStructure?: InputMaybe<JsonNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumModuleTypeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export enum ModuleType {
  Note = "NOTE",
  Research = "RESEARCH",
}

export type ModuleUpdateInput = {
  fileAttachments?: InputMaybe<FileAttachmentUpdateManyWithoutModuleInput>;
  fileStructure?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumModuleTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutModulesInput>;
};

export type ModuleUpdateManyMutationInput = {
  fileStructure?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumModuleTypeFieldUpdateOperationsInput>;
};

export type ModuleUpdateOneRequiredWithoutFileAttachmentsInput = {
  connect?: InputMaybe<ModuleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ModuleCreateOrConnectWithoutFileAttachmentsInput>;
  create?: InputMaybe<ModuleCreateWithoutFileAttachmentsInput>;
  update?: InputMaybe<ModuleUpdateWithoutFileAttachmentsInput>;
  upsert?: InputMaybe<ModuleUpsertWithoutFileAttachmentsInput>;
};

export type ModuleUpdateWithoutFileAttachmentsInput = {
  fileStructure?: InputMaybe<Scalars["JSON"]>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumModuleTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutModulesInput>;
};

export type ModuleUpsertWithoutFileAttachmentsInput = {
  create: ModuleCreateWithoutFileAttachmentsInput;
  update: ModuleUpdateWithoutFileAttachmentsInput;
};

export type ModuleWhereInput = {
  AND?: InputMaybe<Array<ModuleWhereInput>>;
  NOT?: InputMaybe<Array<ModuleWhereInput>>;
  OR?: InputMaybe<Array<ModuleWhereInput>>;
  fileAttachments?: InputMaybe<FileAttachmentListRelationFilter>;
  fileStructure?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumModuleTypeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ModuleWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createFileAttachment: FileAttachment;
  createManyFileAttachment: AffectedRowsOutput;
  createManyModule: AffectedRowsOutput;
  createModule: Module;
  deleteFileAttachment?: Maybe<FileAttachment>;
  deleteManyFileAttachment: AffectedRowsOutput;
  deleteManyModule: AffectedRowsOutput;
  deleteModule?: Maybe<Module>;
  updateFileAttachment?: Maybe<FileAttachment>;
  updateManyFileAttachment: AffectedRowsOutput;
  updateManyModule: AffectedRowsOutput;
  updateModule?: Maybe<Module>;
  upsertFileAttachment: FileAttachment;
  upsertModule: Module;
};

export type MutationCreateFileAttachmentArgs = {
  data: FileAttachmentCreateInput;
};

export type MutationCreateManyFileAttachmentArgs = {
  data: Array<FileAttachmentCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateManyModuleArgs = {
  data: Array<ModuleCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateModuleArgs = {
  data: ModuleCreateInput;
};

export type MutationDeleteFileAttachmentArgs = {
  where: FileAttachmentWhereUniqueInput;
};

export type MutationDeleteManyFileAttachmentArgs = {
  where?: InputMaybe<FileAttachmentWhereInput>;
};

export type MutationDeleteManyModuleArgs = {
  where?: InputMaybe<ModuleWhereInput>;
};

export type MutationDeleteModuleArgs = {
  where: ModuleWhereUniqueInput;
};

export type MutationUpdateFileAttachmentArgs = {
  data: FileAttachmentUpdateInput;
  where: FileAttachmentWhereUniqueInput;
};

export type MutationUpdateManyFileAttachmentArgs = {
  data: FileAttachmentUpdateManyMutationInput;
  where?: InputMaybe<FileAttachmentWhereInput>;
};

export type MutationUpdateManyModuleArgs = {
  data: ModuleUpdateManyMutationInput;
  where?: InputMaybe<ModuleWhereInput>;
};

export type MutationUpdateModuleArgs = {
  data: ModuleUpdateInput;
  where: ModuleWhereUniqueInput;
};

export type MutationUpsertFileAttachmentArgs = {
  create: FileAttachmentCreateInput;
  update: FileAttachmentUpdateInput;
  where: FileAttachmentWhereUniqueInput;
};

export type MutationUpsertModuleArgs = {
  create: ModuleCreateInput;
  update: ModuleUpdateInput;
  where: ModuleWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedEnumModuleTypeFilter = {
  equals?: InputMaybe<ModuleType>;
  in?: InputMaybe<Array<ModuleType>>;
  not?: InputMaybe<NestedEnumModuleTypeFilter>;
  notIn?: InputMaybe<Array<ModuleType>>;
};

export type NestedEnumModuleTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumModuleTypeFilter>;
  _min?: InputMaybe<NestedEnumModuleTypeFilter>;
  equals?: InputMaybe<ModuleType>;
  in?: InputMaybe<Array<ModuleType>>;
  not?: InputMaybe<NestedEnumModuleTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ModuleType>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedJsonNullableFilter = {
  equals?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<Scalars["JSON"]>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["DateTime"]>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Int"]>;
  divide?: InputMaybe<Scalars["Int"]>;
  increment?: InputMaybe<Scalars["Int"]>;
  multiply?: InputMaybe<Scalars["Int"]>;
  set?: InputMaybe<Scalars["Int"]>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  aggregateFileAttachment: AggregateFileAttachment;
  aggregateModule: AggregateModule;
  fileAttachment?: Maybe<FileAttachment>;
  fileAttachments: Array<FileAttachment>;
  findFirstFileAttachment?: Maybe<FileAttachment>;
  findFirstModule?: Maybe<Module>;
  groupByFileAttachment: Array<FileAttachmentGroupBy>;
  groupByModule: Array<ModuleGroupBy>;
  module?: Maybe<Module>;
  modules: Array<Module>;
};

export type QueryAggregateFileAttachmentArgs = {
  cursor?: InputMaybe<FileAttachmentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FileAttachmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FileAttachmentWhereInput>;
};

export type QueryAggregateModuleArgs = {
  cursor?: InputMaybe<ModuleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ModuleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ModuleWhereInput>;
};

export type QueryFileAttachmentArgs = {
  where: FileAttachmentWhereUniqueInput;
};

export type QueryFileAttachmentsArgs = {
  cursor?: InputMaybe<FileAttachmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileAttachmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileAttachmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FileAttachmentWhereInput>;
};

export type QueryFindFirstFileAttachmentArgs = {
  cursor?: InputMaybe<FileAttachmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileAttachmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileAttachmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FileAttachmentWhereInput>;
};

export type QueryFindFirstModuleArgs = {
  cursor?: InputMaybe<ModuleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ModuleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ModuleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ModuleWhereInput>;
};

export type QueryGroupByFileAttachmentArgs = {
  by: Array<FileAttachmentScalarFieldEnum>;
  having?: InputMaybe<FileAttachmentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FileAttachmentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FileAttachmentWhereInput>;
};

export type QueryGroupByModuleArgs = {
  by: Array<ModuleScalarFieldEnum>;
  having?: InputMaybe<ModuleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ModuleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ModuleWhereInput>;
};

export type QueryModuleArgs = {
  where: ModuleWhereUniqueInput;
};

export type QueryModulesArgs = {
  cursor?: InputMaybe<ModuleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ModuleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ModuleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ModuleWhereInput>;
};

export type SessionCreateManyUserInput = {
  expires: Scalars["DateTime"];
  id?: InputMaybe<Scalars["String"]>;
  sessionToken: Scalars["String"];
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  expires: Scalars["DateTime"];
  id?: InputMaybe<Scalars["String"]>;
  sessionToken: Scalars["String"];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
  sessionToken?: InputMaybe<Scalars["String"]>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type UserCreateNestedOneWithoutModulesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutModulesInput>;
  create?: InputMaybe<UserCreateWithoutModulesInput>;
};

export type UserCreateOrConnectWithoutModulesInput = {
  create: UserCreateWithoutModulesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutModulesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  modules?: InputMaybe<ModuleOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneRequiredWithoutModulesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutModulesInput>;
  create?: InputMaybe<UserCreateWithoutModulesInput>;
  update?: InputMaybe<UserUpdateWithoutModulesInput>;
  upsert?: InputMaybe<UserUpsertWithoutModulesInput>;
};

export type UserUpdateWithoutModulesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
};

export type UserUpsertWithoutModulesInput = {
  create: UserCreateWithoutModulesInput;
  update: UserUpdateWithoutModulesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  modules?: InputMaybe<ModuleListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

export type FileAttachmentsQueryVariables = Exact<{
  where?: InputMaybe<FileAttachmentWhereInput>;
}>;

export type FileAttachmentsQuery = {
  __typename?: "Query";
  fileAttachments: Array<{
    __typename?: "FileAttachment";
    id: string;
    fileUrl: string;
    moduleId: string;
    highlights?: any | null;
  }>;
};

export type CreateFileAttachmentMutationVariables = Exact<{
  data: FileAttachmentCreateInput;
}>;

export type CreateFileAttachmentMutation = {
  __typename?: "Mutation";
  createFileAttachment: {
    __typename?: "FileAttachment";
    highlights?: any | null;
    moduleId: string;
    fileUrl: string;
    id: string;
  };
};

export type CreateManyFileAttachmentMutationVariables = Exact<{
  data: Array<FileAttachmentCreateManyInput> | FileAttachmentCreateManyInput;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
}>;

export type CreateManyFileAttachmentMutation = {
  __typename?: "Mutation";
  createManyFileAttachment: {
    __typename?: "AffectedRowsOutput";
    count: number;
  };
};

export type DeleteFileAttachmentMutationVariables = Exact<{
  where: FileAttachmentWhereUniqueInput;
}>;

export type DeleteFileAttachmentMutation = {
  __typename?: "Mutation";
  deleteFileAttachment?: {
    __typename?: "FileAttachment";
    id: string;
    fileUrl: string;
    moduleId: string;
    highlights?: any | null;
  } | null;
};

export type UpdateFileAttachmentMutationVariables = Exact<{
  data: FileAttachmentUpdateInput;
  where: FileAttachmentWhereUniqueInput;
}>;

export type UpdateFileAttachmentMutation = {
  __typename?: "Mutation";
  updateFileAttachment?: {
    __typename?: "FileAttachment";
    id: string;
    fileUrl: string;
    moduleId: string;
    highlights?: any | null;
  } | null;
};

export type DeleteManyFileAttachmentMutationVariables = Exact<{
  where?: InputMaybe<FileAttachmentWhereInput>;
}>;

export type DeleteManyFileAttachmentMutation = {
  __typename?: "Mutation";
  deleteManyFileAttachment: {
    __typename?: "AffectedRowsOutput";
    count: number;
  };
};

export type UpdateManyFileAttachmentMutationVariables = Exact<{
  data: FileAttachmentUpdateManyMutationInput;
  where?: InputMaybe<FileAttachmentWhereInput>;
}>;

export type UpdateManyFileAttachmentMutation = {
  __typename?: "Mutation";
  updateManyFileAttachment: {
    __typename?: "AffectedRowsOutput";
    count: number;
  };
};

export type UpsertFileAttachmentMutationVariables = Exact<{
  where: FileAttachmentWhereUniqueInput;
  create: FileAttachmentCreateInput;
  update: FileAttachmentUpdateInput;
}>;

export type UpsertFileAttachmentMutation = {
  __typename?: "Mutation";
  upsertFileAttachment: {
    __typename?: "FileAttachment";
    id: string;
    moduleId: string;
    fileUrl: string;
    highlights?: any | null;
  };
};

export type ModulesQueryVariables = Exact<{ [key: string]: never }>;

export type ModulesQuery = {
  __typename?: "Query";
  modules: Array<{
    __typename?: "Module";
    id: string;
    name: string;
    type: ModuleType;
    fileStructure?: any | null;
  }>;
};

export type CreateModuleMutationVariables = Exact<{
  data: ModuleCreateInput;
}>;

export type CreateModuleMutation = {
  __typename?: "Mutation";
  createModule: {
    __typename?: "Module";
    id: string;
    name: string;
    type: ModuleType;
    fileStructure?: any | null;
  };
};

export type CreateManyModuleMutationVariables = Exact<{
  data: Array<ModuleCreateManyInput> | ModuleCreateManyInput;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
}>;

export type CreateManyModuleMutation = {
  __typename?: "Mutation";
  createManyModule: { __typename?: "AffectedRowsOutput"; count: number };
};

export type UpdateModuleMutationVariables = Exact<{
  data: ModuleUpdateInput;
  where: ModuleWhereUniqueInput;
}>;

export type UpdateModuleMutation = {
  __typename?: "Mutation";
  updateModule?: {
    __typename?: "Module";
    id: string;
    name: string;
    type: ModuleType;
    fileStructure?: any | null;
  } | null;
};

export type UpdateManyModuleMutationVariables = Exact<{
  data: ModuleUpdateManyMutationInput;
  where?: InputMaybe<ModuleWhereInput>;
}>;

export type UpdateManyModuleMutation = {
  __typename?: "Mutation";
  updateManyModule: { __typename?: "AffectedRowsOutput"; count: number };
};

export type DeleteModuleMutationVariables = Exact<{
  where: ModuleWhereUniqueInput;
}>;

export type DeleteModuleMutation = {
  __typename?: "Mutation";
  deleteModule?: {
    __typename?: "Module";
    id: string;
    name: string;
    type: ModuleType;
    fileStructure?: any | null;
  } | null;
};

export type DeleteManyModuleMutationVariables = Exact<{
  where?: InputMaybe<ModuleWhereInput>;
}>;

export type DeleteManyModuleMutation = {
  __typename?: "Mutation";
  deleteManyModule: { __typename?: "AffectedRowsOutput"; count: number };
};

export const FileAttachmentsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FileAttachments" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "FileAttachmentWhereInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fileAttachments" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "fileUrl" } },
                { kind: "Field", name: { kind: "Name", value: "moduleId" } },
                { kind: "Field", name: { kind: "Name", value: "highlights" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FileAttachmentsQuery,
  FileAttachmentsQueryVariables
>;
export const CreateFileAttachmentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateFileAttachment" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FileAttachmentCreateInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createFileAttachment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "highlights" } },
                { kind: "Field", name: { kind: "Name", value: "moduleId" } },
                { kind: "Field", name: { kind: "Name", value: "fileUrl" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateFileAttachmentMutation,
  CreateFileAttachmentMutationVariables
>;
export const CreateManyFileAttachmentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateManyFileAttachment" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "FileAttachmentCreateManyInput",
                  },
                },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "skipDuplicates" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createManyFileAttachment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skipDuplicates" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skipDuplicates" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "count" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateManyFileAttachmentMutation,
  CreateManyFileAttachmentMutationVariables
>;
export const DeleteFileAttachmentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteFileAttachment" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FileAttachmentWhereUniqueInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteFileAttachment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "fileUrl" } },
                { kind: "Field", name: { kind: "Name", value: "moduleId" } },
                { kind: "Field", name: { kind: "Name", value: "highlights" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteFileAttachmentMutation,
  DeleteFileAttachmentMutationVariables
>;
export const UpdateFileAttachmentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateFileAttachment" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FileAttachmentUpdateInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FileAttachmentWhereUniqueInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateFileAttachment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "fileUrl" } },
                { kind: "Field", name: { kind: "Name", value: "moduleId" } },
                { kind: "Field", name: { kind: "Name", value: "highlights" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateFileAttachmentMutation,
  UpdateFileAttachmentMutationVariables
>;
export const DeleteManyFileAttachmentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteManyFileAttachment" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "FileAttachmentWhereInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteManyFileAttachment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "count" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteManyFileAttachmentMutation,
  DeleteManyFileAttachmentMutationVariables
>;
export const UpdateManyFileAttachmentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateManyFileAttachment" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "FileAttachmentUpdateManyMutationInput",
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "FileAttachmentWhereInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateManyFileAttachment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "count" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateManyFileAttachmentMutation,
  UpdateManyFileAttachmentMutationVariables
>;
export const UpsertFileAttachmentDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpsertFileAttachment" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FileAttachmentWhereUniqueInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "create" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FileAttachmentCreateInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "update" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "FileAttachmentUpdateInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "upsertFileAttachment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "create" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "create" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "update" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "update" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "moduleId" } },
                { kind: "Field", name: { kind: "Name", value: "fileUrl" } },
                { kind: "Field", name: { kind: "Name", value: "highlights" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpsertFileAttachmentMutation,
  UpsertFileAttachmentMutationVariables
>;
export const ModulesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Modules" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "modules" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "fileStructure" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ModulesQuery, ModulesQueryVariables>;
export const CreateModuleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateModule" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ModuleCreateInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createModule" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "fileStructure" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateModuleMutation,
  CreateModuleMutationVariables
>;
export const CreateManyModuleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateManyModule" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "ModuleCreateManyInput" },
                },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "skipDuplicates" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createManyModule" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skipDuplicates" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skipDuplicates" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "count" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateManyModuleMutation,
  CreateManyModuleMutationVariables
>;
export const UpdateModuleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateModule" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ModuleUpdateInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ModuleWhereUniqueInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateModule" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "fileStructure" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateModuleMutation,
  UpdateModuleMutationVariables
>;
export const UpdateManyModuleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateManyModule" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ModuleUpdateManyMutationInput" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ModuleWhereInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateManyModule" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "data" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "count" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateManyModuleMutation,
  UpdateManyModuleMutationVariables
>;
export const DeleteModuleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteModule" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ModuleWhereUniqueInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteModule" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "fileStructure" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteModuleMutation,
  DeleteModuleMutationVariables
>;
export const DeleteManyModuleDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteManyModule" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ModuleWhereInput" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteManyModule" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "where" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "count" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteManyModuleMutation,
  DeleteManyModuleMutationVariables
>;
