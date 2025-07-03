/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum UserRole {
  Borrower = "Borrower",
  LoanOfficer = "LoanOfficer",
  Admin = "Admin",
  SuperAdmin = "SuperAdmin",
  Realtor = "Realtor",
  SettlementAgent = "SettlementAgent",
  LoanProcessor = "LoanProcessor",
  LoanOfficerAssistant = "LoanOfficerAssistant",
  BranchManager = "BranchManager",
  SystemAdmin = "SystemAdmin",
}

export enum SiteConfigurationType {
  None = "None",
  Account = "Account",
  Corporate = "Corporate",
  Branch = "Branch",
  LoanOfficer = "LoanOfficer",
  Partner = "Partner",
}

export enum SSOIntegrationType {
  ConsumerConnect = "ConsumerConnect",
  TheBigPOS = "TheBigPOS",
}

export enum LogLevel {
  None = "None",
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

export enum LoanRole {
  Borrower = "Borrower",
  CoBorrower = "CoBorrower",
  NonBorrower = "NonBorrower",
  LoanOfficer = "LoanOfficer",
  LoanProcessor = "LoanProcessor",
  LoanOfficerAssistant = "LoanOfficerAssistant",
  SupportingLoanOfficer = "SupportingLoanOfficer",
  BuyerAgent = "BuyerAgent",
  SellerAgent = "SellerAgent",
  TitleInsuranceAgent = "TitleInsuranceAgent",
  EscrowAgent = "EscrowAgent",
  SettlementAgent = "SettlementAgent",
}

export enum LoanQueueType {
  Unknown = "Unknown",
  New = "New",
  Append = "Append",
  Update = "Update",
  FieldUpdates = "FieldUpdates",
  Document = "Document",
  Buckets = "Buckets",
}

export enum LoanQueueReason {
  Unknown = "Unknown",
  Locked = "Locked",
  LOSError = "LOSError",
  Exception = "Exception",
}

export enum LoanLogType {
  Loan = "Loan",
  Queue = "Queue",
  POSFlagChanged = "POSFlagChanged",
  Verification = "Verification",
}

export enum LoanImportStatus {
  WaitingProcess = "WaitingProcess",
  InProgress = "InProgress",
  Completed = "Completed",
  Failed = "Failed",
  Cancelled = "Cancelled",
}

export enum LOSStatus {
  Unknown = "Unknown",
  Pending = "Pending",
  Retrying = "Retrying",
  Successful = "Successful",
  Failed = "Failed",
  FailedPermanently = "FailedPermanently",
}

export enum FilterType {
  DateGreaterThanOrEqualTo = "DateGreaterThanOrEqualTo",
  DateGreaterThan = "DateGreaterThan",
  DateLessThan = "DateLessThan",
  DateLessThanOrEqualTo = "DateLessThanOrEqualTo",
  DateEquals = "DateEquals",
  DateDoesntEqual = "DateDoesntEqual",
  DateNonEmpty = "DateNonEmpty",
  DateEmpty = "DateEmpty",
  StringContains = "StringContains",
  StringEquals = "StringEquals",
  StringNotEmpty = "StringNotEmpty",
  StringNotEquals = "StringNotEquals",
  StringNotContains = "StringNotContains",
}

export enum Environment {
  Development = "Development",
  Staging = "Staging",
  UAT = "UAT",
  Production = "Production",
}

export enum EntityType {
  Account = "Account",
  Corporate = "Corporate",
  Branch = "Branch",
  LoanOfficer = "LoanOfficer",
  Realtor = "Realtor",
}

export enum BranchType {
  Mortgage = "Mortgage",
  RealEstate = "RealEstate",
}

export enum BorrowerType {
  Borrower = "Borrower",
  CoBorrower = "CoBorrower",
  Unknown = "Unknown",
}

export enum BorrowerRelationship {
  NotApplicable = "NotApplicable",
  Spouse = "Spouse",
  NonSpouse = "NonSpouse",
}

export interface ASOSettings {
  enabled: boolean;
  softPull: boolean;
  triMerge: boolean;
  closingCosts: boolean;
  du: boolean;
  lp: boolean;
  iceIncomeAnalyzer: boolean;
  iceCreditAnalyzer: boolean;
  voa: boolean;
  voi: boolean;
  voie: boolean;
  voe: boolean;
  flood: boolean;
  avm: boolean;
  disclosures: boolean;
  preApproval: boolean;
  preQualification: boolean;
  mi: boolean;
  miRadian: boolean;
  miEssent: boolean;
  miNational: boolean;
  miEnact: boolean;
  mimgic: boolean;
  miArch: boolean;
}

export interface Account {
  /** @format uuid */
  id: string;
  name: string;
  fusionCustomerID: string;
  mfaPreference: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format int32 */
  allowedLoginsWithoutMFA: number;
  losSettings: LOSSettings;
  asoSettings?: ASOSettings | null;
  settings: AccountSettings;
}

export interface AccountSettings {
  isSmsEnabled: boolean;
  smsNumber?: string | null;
}

export interface AccountSettingsRequest {
  isSmsEnabled: boolean;
  smsNumber?: string | null;
}

export interface Action {
  /** @format uuid */
  id: string;
  name: string;
  comments?: string | null;
  /** @format uuid */
  siteConfigurationID: string;
  applicationSettings?: any;
  surveysToken?: string | null;
}

export interface Address {
  /** @format uuid */
  id: string;
  street?: string | null;
  unit?: string | null;
  city?: string | null;
  state?: string | null;
  county?: string | null;
  postalCode?: string | null;
}

export interface AddressRequest {
  /** @minLength 1 */
  street: string;
  unit?: string | null;
  /** @minLength 1 */
  city: string;
  /** @minLength 1 */
  state: string;
  county?: string | null;
  /** @minLength 1 */
  postalCode: string;
}

export interface AdminAccessGetForms {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  /** @format int32 */
  type: number;
  target: string;
  name: string;
  isDefault: boolean;
  description?: string | null;
  slug?: string | null;
  status: string;
  language?: string | null;
  borrowerType?: BorrowerType | null;
  showProgressBar: boolean;
}

export interface AdminAccessUser {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  title?: string | null;
  forcePasswordReset: boolean;
  mfaEnabled: boolean;
  phoneVerified: boolean;
  /** @format int32 */
  loginsWithoutMFACount: number;
  canImpersonate: boolean;
  loanIDs: string[];
  drafts: Draft[];
  notificationSettings?: UserNotificationSettings | null;
  /** @format uuid */
  accountID?: string | null;
  loans: UserLoan[];
}

export interface AdminUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AllowImpersonationRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface ApplicationRowData {
  borrowerEmail?: string | null;
  borrowerFirstName?: string | null;
  borrowerLastName?: string | null;
  /** @deprecated */
  firstName?: string | null;
  /** @deprecated */
  lastName?: string | null;
  coBorrowerEmail?: string | null;
  coBorrowerFirstName?: string | null;
  coBorrowerLastName?: string | null;
  loanOfficer?: string | null;
  loanOfficerEmail?: string | null;
  loanID: string;
  /** @format date-time */
  applicationDate?: string | null;
  loanReferenceID: string;
  /** @format float */
  loanAmount?: number | null;
  loanNumber?: string | null;
  /** @deprecated */
  role?: string | null;
  /** @format date-time */
  initialDisclosureDate?: string | null;
  /** @format date-time */
  closingDisclosureDate?: string | null;
  /** @format date-time */
  underwritingApprovalDate?: string | null;
  /** @format date-time */
  closedDate?: string | null;
  /** @format date-time */
  fundingDate?: string | null;
  /** @format date-time */
  currentStatusDate?: string | null;
  channel?: string | null;
  currentMilestone?: string | null;
  lastMilestone?: string | null;
  loanStatus?: string | null;
  loanTerm?: string | null;
  subjectPropertyStreet?: string | null;
  subjectPropertyUnitType?: string | null;
  subjectPropertyUnitNumber?: string | null;
  subjectPropertyCity?: string | null;
  subjectPropertyState?: string | null;
  subjectPropertyZip?: string | null;
  loanPurpose?: string | null;
  buyerAgent?: EncompassContact | null;
  sellerAgent?: EncompassContact | null;
  settlementAgent?: EncompassContact | null;
  escrowAgent?: EncompassContact | null;
  titleInsuranceAgent?: EncompassContact | null;
}

export interface Attachment {
  fileName: string;
  base64Data: string;
}

export interface BranchBase {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  name: string;
  type: string;
}

export interface BranchReduced {
  /** @format uuid */
  id: string;
  name: string;
  type: string;
  siteConfigurations: SiteConfigurationReduced[];
}

export interface BranchSearchCriteria {
  searchText?: string | null;
  isActive?: boolean | null;
  brands?: string[] | null;
  type?: string | null;
}

export interface BranchUser {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  title?: string | null;
  forcePasswordReset: boolean;
  mfaEnabled: boolean;
  phoneVerified: boolean;
  /** @format int32 */
  loginsWithoutMFACount: number;
  canImpersonate: boolean;
  loanIDs: string[];
  drafts: Draft[];
  notificationSettings?: UserNotificationSettings | null;
  /** @format uuid */
  branchID: string;
  branchName: string;
  /** @format uuid */
  corporateID: string;
  corporateName: string;
  siteConfigurations: SiteConfigurationReduced[];
}

export interface BranchUserPaginated {
  rows: BranchUser[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface BusinessRule {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  name: string;
  description?: string | null;
  tasks: Task[];
  filter: BusinessRuleCondition[];
  applyToAllBorrowerPairs: boolean;
}

export interface BusinessRuleCondition {
  /** @format int32 */
  conditionType: number;
  targetFieldID: string;
  targetFieldValue: string;
}

export interface BusinessRuleRequest {
  /**
   * @minLength 1
   * @maxLength 250
   */
  name: string;
  description?: string | null;
  tasks: TaskUpdateRequest[];
  filter: BusinessRuleCondition[];
  applyToAllBorrowerPairs: boolean;
}

export interface ChangePasswordRequest {
  /** @minLength 1 */
  oldPassword: string;
  /** @minLength 8 */
  newPassword: string;
}

export interface CommentUserInformation {
  entityId: string;
  entityType: string;
  entityName?: string | null;
  entityUri?: string | null;
}

export interface Company {
  name?: string | null;
  siteUrl?: string | null;
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  phone?: string | null;
  fax?: string | null;
  nmlsid?: string | null;
}

export interface CompanyAddress {
  address: string;
  address2?: string | null;
  city: string;
  state: string;
  zip: string;
}

export interface ConditionComment {
  commentId: string;
  comments: string;
  /** @format int32 */
  forRoleId: number;
  forRole: CommentUserInformation;
  /** @format date-time */
  dateCreated: string;
  createdBy: string;
  createdByName: string;
}

export interface Contact {
  /** @format uuid */
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  email?: string | null;
}

export interface ContactInfo {
  phone: string;
  tollFreePhone?: string | null;
  fax?: string | null;
}

export interface ContactRowData {
  companyName?: string | null;
  name?: string | null;
  license?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  phone?: string | null;
  cell?: string | null;
  email?: string | null;
}

export interface Corporate {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  name: string;
  /** @uniqueItems true */
  branchIDs: string[];
  siteConfigurations: SiteConfigurationReduced[];
}

export interface CorporateBase {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  name: string;
}

export interface CorporatePaginated {
  rows: Corporate[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface CorporateRequest {
  /**
   * @minLength 1
   * @maxLength 250
   */
  name: string;
}

export interface CorporateSearchCriteria {
  searchText?: string | null;
  isActive?: boolean | null;
}

export interface CreateAccountRequest {
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  domain: string;
  eConsentBucket?: string | null;
  ignoreCoBorrowerRelationship: boolean;
  user: AdminUser;
  companyAddress: CompanyAddress;
  contactInfo: ContactInfo;
  theme: Theme;
  /**
   * @format int64
   * @min 0
   */
  nlmsid: number;
  settings: AccountSettingsRequest;
  environment: "Development" | "Staging" | "UAT" | "Production";
  losIntegration: LOSIntegration;
}

export interface CreateBranchRequest {
  /**
   * @minLength 1
   * @maxLength 250
   */
  name: string;
  /** @format uuid */
  corporateID: string;
  type: string;
}

export interface CreateDocumentTemplateRequest {
  /** @minLength 1 */
  htmlBody: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  type: string;
  description?: string | null;
  destinationBucket?: string | null;
  status: string;
}

export interface CreateInviteRequest {
  /** @minLength 1 */
  firstName: string;
  /** @minLength 1 */
  lastName: string;
  /** @format email */
  emailAddress: string;
  phoneNumber?: string | null;
  /** @deprecated */
  relationship: "NotApplicable" | "Spouse" | "NonSpouse";
  loanID: string;
  route?: string | null;
  /** @format uuid */
  siteConfigurationID: string;
  /** @deprecated */
  userRole?: UserRole | null;
  loanRole?: LoanRole | null;
}

export interface CreateLoanImportRequest {
  /** @format date-time */
  endDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
}

export interface CreateUserRelationRequest {
  /**
   * @format uuid
   * @minLength 1
   */
  userId1: string;
  /**
   * @format uuid
   * @minLength 1
   */
  userId2: string;
  /** @minLength 1 */
  relationType: string;
}

export interface CreateUserRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  phone?: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  firstName: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  lastName: string;
  title?: string | null;
  /** @format uuid */
  branchId?: string | null;
  /** @minLength 1 */
  userRole: string;
}

export interface CustomLoanData {
  eConsentInformation?: EConsentInformation | null;
}

export interface DetailedUser {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  title?: string | null;
  forcePasswordReset: boolean;
  mfaEnabled: boolean;
  phoneVerified: boolean;
  /** @format int32 */
  loginsWithoutMFACount: number;
  canImpersonate: boolean;
  loanIDs: string[];
  drafts: Draft[];
  notificationSettings?: UserNotificationSettings | null;
}

export interface Device {
  /** @format uuid */
  id: string;
  /** @format uuid */
  accountID: string;
  serialNumber: string;
  apps: any;
  /** @format uuid */
  createdBy: string;
  /** @format uuid */
  updatedBy?: string | null;
  /** @format uuid */
  managedBy?: string | null;
  name?: string | null;
  type?: string | null;
  status?: string | null;
  comments?: string | null;
}

export interface DeviceAction {
  is_enabled: boolean;
  localized_name?: string | null;
  name?: string | null;
  remarks?: string | null;
  localized_action_info?: string | null;
  status_code?: string | null;
  action_info?: string | null;
  localized_status_description?: string | null;
  status_description?: string | null;
}

export interface DeviceMDM {
  managed_status?: string | null;
  device_id?: string | null;
  is_supervised: boolean;
  os_version?: string | null;
  is_lost_mode_enabled: boolean;
  owned_by?: string | null;
  is_removed?: string | null;
  product_name?: string | null;
  device_name?: string | null;
  device_type?: string | null;
  platform_type?: string | null;
  wifi_mac?: string | null;
  udid?: string | null;
  serial_number?: string | null;
  customer_name?: string | null;
  customer_id?: string | null;
  model?: string | null;
  last_contact_time?: string | null;
  platform_type_id?: string | null;
  device_capacity?: string | null;
  imei: string[];
  user?: MdmUser | null;
  actions?: DeviceAction[] | null;
}

export interface DevicePaginated {
  rows: Device[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface DeviceRequest {
  apps: any;
  name?: string | null;
  comments?: string | null;
}

export interface DocumentData {
  documentID: string;
  /** @format uuid */
  eSignRecordID: string;
  documentBucketTitle: string;
  documentName: string;
  /** @format date-time */
  createdAt: string;
  extension: string;
  password: string;
  systemGenerated: boolean;
}

export interface DocumentDataRequest {
  documentID?: string | null;
  /** @format uuid */
  eSignRecordID: string;
  documentBucketTitle?: string | null;
  documentName?: string | null;
  /** @format date-time */
  createdAt: string;
  base64Data?: string | null;
  extension?: string | null;
  password?: string | null;
  systemGenerated: boolean;
}

export interface DocumentTemplate {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  htmlBody: string;
  name: string;
  multipleCustomTemplates: boolean;
  isDefault: boolean;
  type: string;
  description?: string | null;
  destinationBucket?: string | null;
  isDestinationBucketConfigurable: boolean;
  status: string;
  versions: DocumentTemplateVersionBase[];
}

export interface DocumentTemplateBase {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  htmlBody: string;
  name: string;
  multipleCustomTemplates: boolean;
  isDefault: boolean;
  type: string;
  description?: string | null;
  destinationBucket?: string | null;
  isDestinationBucketConfigurable: boolean;
  status: string;
}

export interface DocumentTemplateVersion {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  /** @format int32 */
  version: number;
  name: string;
  isActive: boolean;
  htmlBody: string;
  documentTemplate: DocumentTemplateBase;
}

export interface DocumentTemplateVersionBase {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  /** @format int32 */
  version: number;
  name?: string | null;
  isActive: boolean;
  htmlBody: string;
}

export interface DocumentTemplateVersionRequest {
  /** @maxLength 255 */
  name?: string | null;
  isActive: boolean;
  htmlBody: string;
}

export interface DocumentTemplateVersionUpdateRequest {
  /** @maxLength 255 */
  name: string;
  isActive: boolean;
  /** @minLength 1 */
  htmlBody: string;
}

export interface Draft {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  customData: any;
  user: UserBase;
  loanOfficer: UserBase;
  siteConfiguration: SiteConfigurationReduced;
}

export interface DraftContent {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  customData: any;
  user: UserBase;
  loanOfficer: UserBase;
  siteConfiguration: SiteConfigurationReduced;
  applicationPayload: any;
}

export interface DraftContentPaginated {
  rows: DraftContent[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface DraftLoanOfficerReassignRequest {
  /** @format uuid */
  loanOfficerID: string;
}

export interface DraftRequest {
  applicationPayload: any;
  customData?: any;
}

export interface EConsentInformation {
  status: string;
  /** @format date-time */
  acceptedDate?: string | null;
  ipAddress?: string | null;
  source?: string | null;
}

export interface EnabledServices {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  mobilePrequal?: boolean | null;
  fullApp?: boolean | null;
  mobileApp?: boolean | null;
  ringCentral?: boolean | null;
  rates?: boolean | null;
  socialSurvey?: boolean | null;
  borrowerTasks?: boolean | null;
  docusign?: boolean | null;
  emailNotifications?: boolean | null;
  voc?: boolean | null;
  spanishPrequal?: boolean | null;
  spanishFullApp?: boolean | null;
  prequalLetter?: boolean | null;
  payments?: boolean | null;
  leadApp?: boolean | null;
  documents?: boolean | null;
  loanCalculator?: boolean | null;
  disclosures?: boolean | null;
  buyerClient?: boolean | null;
  sellerClient?: boolean | null;
  clientLifestyle?: boolean | null;
  loanDetails?: boolean | null;
  loanStatus?: boolean | null;
  loanStatusNotifications?: boolean | null;
  loanAndProperty?: boolean | null;
  personalInformation?: boolean | null;
  employment?: boolean | null;
  assets?: boolean | null;
  realEstate?: boolean | null;
  encompassWeb?: boolean | null;
  support?: boolean | null;
  leads?: boolean | null;
  openHouseForm?: boolean | null;
  listingOfferForm?: boolean | null;
  listings?: boolean | null;
  addCoBorrower?: boolean | null;
}

export interface EncompassContact {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
}

export interface Error {
  message: string;
}

export interface ExtendedLoan {
  /** @format uuid */
  id: string;
  loanID: string;
  loanNumber?: string | null;
  /** @format date-time */
  initialDisclosureProvidedDate?: string | null;
  /** @format date-time */
  closingDisclosureSentDate?: string | null;
  /** @format date-time */
  underwritingApprovalDate?: string | null;
  /** @format date-time */
  closingDate?: string | null;
  /** @format date-time */
  fundingOrderDate?: string | null;
  /** @format date-time */
  currentStatusDate?: string | null;
  loanChannel?: string | null;
  /** @format double */
  totalLoanAmount?: number | null;
  currentLoanStatus?: string | null;
  currentMilestone?: string | null;
  lastCompletedMilestone?: string | null;
  /** @format date-time */
  startDate?: string | null;
  isInSync: boolean;
  /** @format date-time */
  syncDate?: string | null;
  fileStarter?: string | null;
  isPOSLoan?: boolean | null;
  referenceID: string;
  /** @format int32 */
  term?: number | null;
  loanProgram?: string | null;
  loanType?: string | null;
  status?: string | null;
  loanOfficer?: LoanOfficer | null;
  propertyAddress?: Address | null;
  loanLogs: LoanLog[];
  isLocked: boolean;
  source?: string | null;
  userLoans: UserLoan[];
  contacts: LoanContact[];
  buyerAgentContact?: Contact | null;
  sellerAgentContact?: Contact | null;
  escrowAgentContact?: Contact | null;
  titleInsuranceAgentContact?: Contact | null;
  settlementAgentContact?: Contact | null;
  loanProcessorContact?: Contact | null;
}

export interface ExtendedLoanPaginated {
  rows: ExtendedLoan[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface File {
  /** @format uuid */
  id: string;
  fileName: string;
  name: string;
  s3FilePath: string;
  user?: User | null;
  account?: Account | null;
  url: string;
}

export interface FilePaginated {
  rows: File[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface FileRequest {
  /**
   * @minLength 1
   * @maxLength 250
   */
  name: string;
}

export interface FileSearchCriteria {
  searchText?: string | null;
  isPublic?: boolean | null;
}

export interface FileWithBytes {
  name: string;
  /** @format byte */
  data: string;
  fileName: string;
  mimeType?: string | null;
  extension?: string | null;
}

export interface Form {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  formJSON: any;
  /** @format int32 */
  type: number;
  target: string;
  authType: string;
  name: string;
  isDefault: boolean;
  description?: string | null;
  slug?: string | null;
  status: string;
  language?: string | null;
  showProgressBar: boolean;
  borrowerType?: BorrowerType | null;
  versions: FormVersion[];
}

export interface FormRequest {
  formJSON: any;
  /** @format int32 */
  type: number;
  target: string;
  authType: string;
  inviteUser: boolean;
  name: string;
  description?: string | null;
  slug?: string | null;
  status: string;
  language?: string | null;
  borrowerType?: BorrowerType | null;
  showProgressBar: boolean;
}

export interface FormSubmission {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  /** @format uuid */
  formID?: string | null;
  formName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  contactPhone?: string | null;
  /** @format uuid */
  siteConfigurationID: string;
  siteConfiguration: SiteConfiguration;
  loanOfficerEmail?: string | null;
  /** @format uuid */
  loanOfficerID?: string | null;
  loanOfficer?: User | null;
  /** @format uuid */
  branchID?: string | null;
  branch?: GetBranch | null;
  status: string;
  subjectPropertyAddressStreet?: string | null;
  subjectPropertyAddressCity?: string | null;
  subjectPropertyAddressCounty?: string | null;
  subjectPropertyAddressState?: string | null;
  subjectPropertyAddressZip?: string | null;
  data?: any;
  /** @format uuid */
  listingID?: string | null;
  listing?: Listing | null;
  files: FormSubmissionFile[];
}

export interface FormSubmissionFile {
  /** @format uuid */
  id: string;
  file: File;
}

export interface FormSubmissionPaginated {
  rows: FormSubmission[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface FormSubmissionRequest {
  formID?: string | null;
  formName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  contactPhone?: string | null;
  loanOfficerEmail?: string | null;
  /** @format uuid */
  loanOfficerID?: string | null;
  /** @format uuid */
  branchID?: string | null;
  status?: string | null;
  subjectPropertyAddressStreet?: string | null;
  subjectPropertyAddressCity?: string | null;
  subjectPropertyAddressCounty?: string | null;
  subjectPropertyAddressState?: string | null;
  subjectPropertyAddressZip?: string | null;
  data?: any;
  /** @format uuid */
  listingID?: string | null;
}

export interface FormSubmissionSearchCriteria {
  searchText?: string | null;
  /** @format uuid */
  loanOfficerID?: string | null;
  /** @format uuid */
  branchID?: string | null;
  formName?: string | null;
  formNames?: string[] | null;
  email?: string | null;
  status?: string | null;
  /** @format uuid */
  listingID?: string | null;
}

export interface FormVersion {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  /** @format int32 */
  version: number;
  name?: string | null;
  isActive: boolean;
  formJSON: any;
  form: GetForm;
}

export interface FormVersionRequest {
  /** @maxLength 255 */
  name?: string | null;
  isActive: boolean;
  formJSON: any;
}

export interface FormVersionUpdateRequest {
  /** @maxLength 255 */
  name?: string | null;
  isActive: boolean;
  formJSON: any;
  /** @format uuid */
  id: string;
}

export interface FusionFieldDisplay {
  fieldValue: string;
}

export interface FusionReportFilter {
  filterType:
    | "DateGreaterThanOrEqualTo"
    | "DateGreaterThan"
    | "DateLessThan"
    | "DateLessThanOrEqualTo"
    | "DateEquals"
    | "DateDoesntEqual"
    | "DateNonEmpty"
    | "DateEmpty"
    | "StringContains"
    | "StringEquals"
    | "StringNotEmpty"
    | "StringNotEquals"
    | "StringNotContains";
  targetField: string;
  targetValue: string;
}

export interface GenerateDocumentRequest {
  /** @deprecated */
  loanID: string;
  /**
   * @format uuid
   * @minLength 1
   */
  templateID: string;
  /**
   * @deprecated
   * @format uuid
   * @minLength 1
   */
  siteConfigurationID: string;
  preview: boolean;
  recipients: string[];
}

export interface GetApplications {
  applications: ApplicationRowData[];
}

export interface GetBranch {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  name: string;
  /** @format uuid */
  corporateID?: string | null;
  corporateName?: string | null;
  /** @uniqueItems true */
  loanOfficerIDs: string[];
  type: string;
  siteConfigurations: SiteConfigurationReduced[];
}

export interface GetBranchPaginated {
  rows: GetBranch[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface GetForm {
  formJSON: any;
  /** @format int32 */
  type: number;
  target: string;
  authType: string;
  inviteUser: boolean;
  name: string;
  description?: string | null;
  slug?: string | null;
  status: string;
  language?: string | null;
  borrowerType?: BorrowerType | null;
  showProgressBar: boolean;
  /** @format uuid */
  id: string;
}

export interface GetReport {
  loanRecords: LoanRecord[];
  invalidFieldIDs: string[];
}

export interface GetReportRequest {
  fields: FusionFieldDisplay[];
  filters?: FusionReportFilter[] | null;
  loanIDs?: string[] | null;
  /** @format int32 */
  startIndex?: number | null;
  /** @format int32 */
  limit?: number | null;
}

export interface GetSiteConfigurationByLOUserIDRequest {
  loUserID: string;
}

export interface GetSiteConfigurationRequest {
  url: string;
}

export interface GetSiteFormRequest {
  /**
   * @format uuid
   * @minLength 1
   */
  siteConfigurationId: string;
  /** @format int32 */
  formType: number;
  slug?: string | null;
}

export interface GetUserByEmailRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface GetWorkflowRequest {
  /** @minLength 1 */
  formType: string;
  borrowerType?: string | null;
  userRole?: string | null;
  language?: string | null;
}

export interface ImportUserLoanTaskRequest {
  /**
   * @format uuid
   * @minLength 1
   */
  taskID: string;
  /**
   * @format uuid
   * @minLength 1
   */
  userID: string;
}

export interface Invite {
  /** @format uuid */
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  relationship: string;
  loanID: string;
  route?: string | null;
  /** @format uuid */
  siteConfigurationID: string;
  isExistingAccount: boolean;
  completedLoanApplication: boolean;
  userRole: string;
  loanRole?: string | null;
  customData: any;
  /** @format uuid */
  oneTimeToken: string;
  /** @format date-time */
  createdAt: string;
  invitedBy?: User | null;
}

/** Array of operations to perform */
export type JsonPatchDocument = Operation[];

export interface LOSIntegration {
  instanceID: string;
}

export interface LOSSettings {
  retailLoanClosingDateFieldID: string;
  wholesaleLoanClosingDateFieldID: string;
  brokerLoanClosingDateFieldID: string;
  correspondentLoanClosingDateFieldID: string;
  customEConsentBucketTitle?: string | null;
  loanMilestoneNotificationsEnabled: boolean;
}

export interface LOSSettingsUpdateRequest {
  retailLoanClosingDateFieldID: string;
  wholesaleLoanClosingDateFieldID: string;
  brokerLoanClosingDateFieldID: string;
  correspondentLoanClosingDateFieldID: string;
  customEConsentBucketTitle?: string | null;
  loanMilestoneNotificationsEnabled: boolean;
}

export interface Listing {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  description?: string | null;
  mlsNumber?: string | null;
  address?: Address | null;
  /** @format int32 */
  salePrice?: number | null;
  /** @format date-time */
  activeDate: string;
  /** @format date-time */
  expirationDate?: string | null;
  zillowURL?: string | null;
  photos: ListingPhoto[];
  files: ListingFile[];
  backgroundImage?: File | null;
  /** @format date-time */
  openHouseDate?: string | null;
  /** @format double */
  buyerAgentCommissionPercent?: number | null;
  /** @format double */
  sellerAgentCommissionPercent?: number | null;
  isActive: boolean;
  slug: string;
  url?: string | null;
  loanOfficer?: LoanOfficer | null;
  siteConfiguration: SiteConfiguration;
}

export interface ListingFile {
  /** @format uuid */
  id: string;
  type: string;
  file: File;
  /** @format int32 */
  weight: number;
}

export interface ListingPaginated {
  rows: Listing[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface ListingPhoto {
  /** @format uuid */
  id: string;
  description?: string | null;
  file: File;
  /** @format int32 */
  weight: number;
}

export interface ListingRequest {
  description?: string | null;
  mlsNumber?: string | null;
  address: AddressRequest;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  salePrice?: number | null;
  /**
   * @format date-time
   * @minLength 1
   */
  activeDate: string;
  /** @format date-time */
  expirationDate?: string | null;
  zillowURL?: string | null;
  /** @format date-time */
  openHouseDate?: string | null;
  /** @format double */
  buyerAgentCommissionPercent?: number | null;
  /** @format double */
  sellerAgentCommissionPercent?: number | null;
  /** @format uuid */
  siteConfigurationId?: string | null;
}

export interface ListingSearchCriteria {
  searchText?: string | null;
  isActive?: boolean | null;
  partnerIds?: string[] | null;
}

export interface Loan {
  /** @format uuid */
  id: string;
  loanID: string;
  loanNumber?: string | null;
  /** @format date-time */
  initialDisclosureProvidedDate?: string | null;
  /** @format date-time */
  closingDisclosureSentDate?: string | null;
  /** @format date-time */
  underwritingApprovalDate?: string | null;
  /** @format date-time */
  closingDate?: string | null;
  /** @format date-time */
  fundingOrderDate?: string | null;
  /** @format date-time */
  currentStatusDate?: string | null;
  loanChannel?: string | null;
  /** @format double */
  totalLoanAmount?: number | null;
  currentLoanStatus?: string | null;
  currentMilestone?: string | null;
  lastCompletedMilestone?: string | null;
  /** @format date-time */
  startDate?: string | null;
  isInSync: boolean;
  /** @format date-time */
  syncDate?: string | null;
  fileStarter?: string | null;
  isPOSLoan?: boolean | null;
  referenceID: string;
  /** @format int32 */
  term?: number | null;
  loanProgram?: string | null;
  loanType?: string | null;
  status?: string | null;
  loanOfficer?: LoanOfficer | null;
  propertyAddress?: Address | null;
  loanLogs: LoanLog[];
  isLocked: boolean;
  source?: string | null;
  userLoans: UserLoan[];
  contacts: LoanContact[];
}

export interface LoanComparison {
  loanID: string;
  scenarios: LoanComparisonScenario[];
  loanLocked: boolean;
}

export interface LoanComparisonScenario {
  loanProgram?: string | null;
  /** @minLength 1 */
  loanType: string;
  propertyValue?: string | null;
  purchasePrice?: string | null;
  downpaymentAmount?: string | null;
  downpaymentPercent?: string | null;
  loanAmount?: string | null;
  totalAssets?: string | null;
  monthlyPayment?: string | null;
  totalMortgageAmount?: string | null;
  dtiFront?: string | null;
  dtiBack?: string | null;
  ltvFront?: string | null;
  ltvBack?: string | null;
  totalCashToClose?: string | null;
  apr?: string | null;
  mi?: string | null;
  miFactor?: string | null;
  rate?: string | null;
  loanTerm1?: string | null;
  loanTerm2?: string | null;
  closingCosts?: string | null;
  prepaidCharges?: string | null;
  totalCost?: string | null;
  totalFinancing?: string | null;
  discount?: string | null;
  lenderCredit?: string | null;
  fundingFee?: string | null;
}

export interface LoanContact {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  fullName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  companyName?: string | null;
  role:
    | "Borrower"
    | "CoBorrower"
    | "NonBorrower"
    | "LoanOfficer"
    | "LoanProcessor"
    | "LoanOfficerAssistant"
    | "SupportingLoanOfficer"
    | "BuyerAgent"
    | "SellerAgent"
    | "TitleInsuranceAgent"
    | "EscrowAgent"
    | "SettlementAgent";
}

export interface LoanDocument {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  name: string;
  loan: Loan;
  user?: User | null;
  initialBucket?: string | null;
  losDocumentID?: string | null;
  losStatus: string;
  contents?: string | null;
  failoverDocumentPath?: string | null;
}

export interface LoanDraftSearchCriteria {
  searchText?: string | null;
  /** @format uuid */
  loanOfficerId?: string | null;
  /** @format uuid */
  siteConfigurationId?: string | null;
  isUnassigned?: boolean | null;
}

export interface LoanImport {
  /** @format uuid */
  id: string;
  /** @format uuid */
  accountID: string;
  /** @format date-time */
  endDate: string;
  /** @format date-time */
  startDate: string;
  /** @format int32 */
  attemptCount: number;
  /** @format int32 */
  importedCount: number;
  statusMessage?: string | null;
  status:
    | "WaitingProcess"
    | "InProgress"
    | "Completed"
    | "Failed"
    | "Cancelled";
  /** @format date-time */
  createdAt?: string | null;
}

export interface LoanImportPaginated {
  rows: LoanImport[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface LoanLog {
  /** @format uuid */
  id: string;
  level: "None" | "Info" | "Warning" | "Error";
  type: "Loan" | "Queue" | "POSFlagChanged" | "Verification";
  message: string;
  /** @format date-time */
  createdAt: string;
}

export interface LoanOfficer {
  /** @format uuid */
  id: string;
  name?: string | null;
  email: string;
  phone?: string | null;
  title?: string | null;
  nmlsid: string;
  profilePhotoUrl: string;
  siteConfiguration: SiteConfiguration;
}

export interface LoanOfficerPublic {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  /** @format uuid */
  corporateID?: string | null;
  siteConfigurationIDs: string[];
}

export interface LoanOfficerSearchCriteria {
  searchText?: string | null;
  isActive?: boolean | null;
  /** @format uuid */
  branch?: string | null;
  /** @format uuid */
  brand?: string | null;
}

export interface LoanQueue {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  loan?: Loan | null;
  type: string;
  reason: string;
  status: string;
  details?: string | null;
  jobID?: string | null;
  user: UserPublic;
  loanOfficer: LoanOfficerPublic;
  siteConfiguration: SiteConfigurationReduced;
}

export interface LoanQueuePaginated {
  rows: LoanQueue[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface LoanQueueSearchCriteria {
  searchText?: string | null;
  loanID?: string | null;
  type?: LoanQueueType | null;
  status?: LOSStatus | null;
  reason?: LoanQueueReason | null;
}

export interface LoanQueueWithData {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  loan?: Loan | null;
  type: string;
  reason: string;
  status: string;
  details?: string | null;
  jobID?: string | null;
  user: UserPublic;
  loanOfficer: LoanOfficerPublic;
  siteConfiguration: SiteConfigurationReduced;
  data?: any;
}

export interface LoanRecord {
  loanGuid: string;
  loanFields: Record<string, string>;
}

export interface LoanSearchCriteria {
  searchText?: string | null;
  /** @format uuid */
  loanOfficerId?: string | null;
  loanNumber?: string | null;
  isClosed?: boolean | null;
  loanPurpose?: string | null;
  loanType?: string | null;
  /** @format uuid */
  siteConfigurationId?: string | null;
}

export interface LoanUpdateRequest {
  /** @format email */
  borrowerEmail?: string | null;
  borrowerEConsent?: boolean | null;
  borrowerCreditAuth?: boolean | null;
  borrowerTCPAOptIn?: boolean | null;
  additionalFields?: Record<string, string>;
}

export interface LoanUser {
  /** @format uuid */
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  role: string;
  isUser: boolean;
  /** @format date-time */
  createdAt: string;
}

export interface MdmUser {
  user_email?: string | null;
  user_id?: string | null;
  user_name?: string | null;
}

export interface MilestoneConfiguration {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  name: string;
  description?: string | null;
  fieldID: string;
  /** @format int32 */
  weight: number;
  /** @format uuid */
  accountID: string;
  loanType: string;
  notificationsEnabled: boolean;
}

export interface MilestoneConfigurationRequest {
  /** @minLength 1 */
  name: string;
  description?: string | null;
  /** @minLength 1 */
  fieldID: string;
  /**
   * @format int32
   * @min -1000
   * @max 1000
   */
  weight?: number | null;
  /** @minLength 1 */
  loanType: string;
  notificationsEnabled: boolean;
}

export interface Module {
  /** @format uuid */
  id: string;
  name: string;
  moduleType: string;
  active: boolean;
  isInherited: boolean;
  moduleParameterValues: ModuleParameterValue[];
}

export interface ModuleParameterValue {
  /** @format uuid */
  parameterID: string;
  parameterName: string;
  parameterType: string;
  value?: any;
  isInherited: boolean;
}

export interface NotificationTemplate {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  htmlBody: string;
  name: string;
  plainBody: string;
  description?: string | null;
  subject: string;
  textEnabled: boolean;
  pushNotificationEnabled: boolean;
  emailEnabled: boolean;
  textBody?: string | null;
  pushNotificationBody: string;
  isDefault: boolean;
  status: string;
  useDefaultHeaderAndFooter: boolean;
  versions: NotificationTemplateVersionBase[];
}

export interface NotificationTemplateBase {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  htmlBody: string;
  name: string;
  plainBody: string;
  description?: string | null;
  subject: string;
  textEnabled: boolean;
  pushNotificationEnabled: boolean;
  emailEnabled: boolean;
  textBody?: string | null;
  pushNotificationBody: string;
  isDefault: boolean;
  status: string;
  useDefaultHeaderAndFooter: boolean;
}

export interface NotificationTemplateRequest {
  /** @minLength 1 */
  htmlBody: string;
  /** @minLength 1 */
  name: string;
  plainBody: string;
  description?: string | null;
  /** @minLength 1 */
  subject: string;
  textEnabled: boolean;
  pushNotificationEnabled: boolean;
  emailEnabled: boolean;
  textBody?: string | null;
  pushNotificationBody: string;
  status: string;
  useDefaultHeaderAndFooter: boolean;
}

export interface NotificationTemplateVersion {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  /** @format int32 */
  version: number;
  name?: string | null;
  isActive: boolean;
  htmlBody: string;
  plainBody: string;
  textBody?: string | null;
  notificationTemplate: NotificationTemplate;
}

export interface NotificationTemplateVersionBase {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  /** @format int32 */
  version: number;
  name?: string | null;
  isActive: boolean;
  htmlBody: string;
  plainBody: string;
  textBody?: string | null;
}

export interface NotificationTemplateVersionRequest {
  /** @maxLength 255 */
  name?: string | null;
  isActive: boolean;
  htmlBody: string;
  plainBody: string;
  textBody?: string | null;
}

export interface NotificationTemplateVersionUpdateRequest {
  /**
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  isActive: boolean;
  /** @minLength 1 */
  htmlBody: string;
  /** @minLength 1 */
  plainBody: string;
  textBody?: string | null;
}

export interface Operation {
  op?: string;
  value?: object | null;
  path?: string;
}

export interface OverridePasswordRequest {
  /** @minLength 8 */
  password: string;
}

export interface Pagination {
  /** @format int32 */
  pageNumber: number;
  /** @format int32 */
  pageSize: number;
}

export interface PartnerSearchCriteria {
  searchText?: string | null;
  isActive?: boolean | null;
  brands?: string[] | null;
  roles?: UserRole[] | null;
}

export interface PostLoanComparisonPdfRequest {
  /**
   * @format uuid
   * @minLength 1
   */
  siteConfigurationID: string;
}

export interface PreliminaryCondition {
  /** @format uuid */
  id: string;
  conditionType: string;
  isRemoved: boolean;
  title: string;
  description?: string | null;
  forAllApplications: boolean;
  source?: string | null;
  /** @format date-time */
  expectedDate?: string | null;
  status: string;
  /** @format date-time */
  statusDate?: string | null;
  /** @format int32 */
  daysToReceive: number;
  requestedFrom?: string | null;
  /** @format date-time */
  createdDate?: string | null;
  createdBy?: CommentUserInformation | null;
  isRequested: boolean;
  /** @format date-time */
  requestedDate?: string | null;
  requestedBy?: CommentUserInformation | null;
  isReceived: boolean;
  /** @format date-time */
  receivedDate?: string | null;
  receivedBy?: CommentUserInformation | null;
  priorTo?: string | null;
  category?: string | null;
  isFulfilled: boolean;
  /** @format date-time */
  fulfilledDate?: string | null;
  fulfilledBy?: CommentUserInformation | null;
  comments: ConditionComment[];
  uwAccess?: string | null;
  isRerequested: boolean;
  /** @format date-time */
  rerequestedDate?: string | null;
  rerequestedBy?: CommentUserInformation | null;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
}

export interface RefreshTokenRequest {
  /** @minLength 1 */
  refreshToken: string;
  /** @minLength 1 */
  username: string;
  /** @format uuid */
  siteConfigurationId?: string | null;
}

export interface RegisterUserRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /** @minLength 8 */
  password: string;
  phone?: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  firstName: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  lastName: string;
  /**
   * @format uuid
   * @minLength 1
   */
  siteConfigurationId: string;
  /** @format uuid */
  inviteCode?: string | null;
}

export interface RequestImpersonationRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface RequestQueue {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  userEmail?: string | null;
  endpoint?: string | null;
  errorMessage?: string | null;
  status?: string | null;
}

export interface RunLOCalculation {
  loanID: string;
  loanAmount?: string | null;
  totalMortgageAmount?: string | null;
  propertyValue?: string | null;
  propertyType?: string | null;
  loanType?: string | null;
  zipCode?: string | null;
  county?: string | null;
  loanPurpose?: string | null;
  propertyOccupancy?: string | null;
  escrow?: string | null;
  loanTerm1?: string | null;
  loanTerm2?: string | null;
  creditScore?: string | null;
  taxes?: string | null;
  insurance?: string | null;
  borrowerIncome?: string | null;
  loanProgram?: string | null;
  rate?: string | null;
  monthlyPayment?: string | null;
  principleAndInterestPITIField?: string | null;
  dtiFront?: string | null;
  dtiBack?: string | null;
  ltvFront?: string | null;
  ltvBack?: string | null;
  totalCashtoClose?: string | null;
  apr?: string | null;
  flood?: string | null;
  hoa?: string | null;
  miFactor?: string | null;
  mi?: string | null;
  totalAssets?: string | null;
  loanLocked: boolean;
  canGeneratePreQual: boolean;
  canGeneratePreApproval: boolean;
  preApprovalNotes?: string | null;
  additionalPreApprovalNotes?: string | null;
  downPaymentAmount?: string | null;
  downPaymentPercent?: string | null;
  lienType?: string | null;
}

export interface RunLOCalculationRequest {
  /** @minLength 1 */
  loanID: string;
  /** @minLength 1 */
  loanAmount: string;
  /** @minLength 1 */
  propertyValue: string;
  propertyType?: string | null;
  zipCode?: string | null;
  county?: string | null;
  /** @minLength 1 */
  loanPurpose: string;
  propertyOccupancy?: string | null;
  escrow?: string | null;
  /** @minLength 1 */
  loanTerm1: string;
  /** @minLength 1 */
  loanTerm2: string;
  creditScore?: string | null;
  taxes?: string | null;
  insurance?: string | null;
  rate?: string | null;
  /** @minLength 1 */
  loanType: string;
  flood?: string | null;
  hoa?: string | null;
  miFactor?: string | null;
  downpaymentAmount?: string | null;
  /** @minLength 1 */
  lienType: string;
  preApprovalNotes?: string | null;
  additionalPreApprovalNotes?: string | null;
}

export interface SSOToken {
  /** @format uuid */
  ssoTokenForSignIn: string;
  ssoRedirectUriForSignIn: string;
}

export interface SSOTokenRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /** @minLength 1 */
  redirectUri: string;
}

export interface SamlMetadataRequest {
  ssoIntegration: "ConsumerConnect" | "TheBigPOS";
}

export interface SendForgotPasswordRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface SendNotificationForLoanRequest {
  /** @minLength 1 */
  loanID: string;
  templateName: string;
  loanOfficerEmail?: string | null;
  /** @format uuid */
  siteConfigurationId?: string | null;
  /** @minLength 1 */
  email: string;
  phone?: string | null;
  attachments: Attachment[];
}

export interface SiteConfiguration {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  type: "None" | "Account" | "Corporate" | "Branch" | "LoanOfficer" | "Partner";
  /** @format uuid */
  entityID: string;
  /** @format int32 */
  entityType: number;
  /** @minLength 1 */
  url: string;
  name: string;
  introduction?: string | null;
  introductionTitle?: string | null;
  /** @format int64 */
  nmlsid: number;
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  phone?: string | null;
  fax?: string | null;
  tollFree?: string | null;
  logoUrl?: string | null;
  portalLogoUrl?: string | null;
  mobileAppLogoUrl?: string | null;
  iconUrl?: string | null;
  bannerUrl?: string | null;
  secondaryBannerUrl?: string | null;
  profilePhotoUrl?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  textColor?: string | null;
  companyUrl?: string | null;
  termsUrl?: string | null;
  privacyPolicyUrl?: string | null;
  facebookUrl?: string | null;
  twitterUrl?: string | null;
  instagramUrl?: string | null;
  linkedInUrl?: string | null;
  licenses: string[];
  contactUsUrl?: string | null;
  licenseInfoUrl?: string | null;
  backgroundColor?: string | null;
  headerAlignment?: string | null;
  email?: string | null;
  /** @format int32 */
  landingPageType?: number | null;
  confirmPassword?: boolean | null;
  pageNotFoundUrl?: string | null;
  footerDisclaimerText1?: string | null;
  footerDisclaimerText2?: string | null;
  locationImageUrl?: string | null;
  eppsUserName?: string | null;
  mobilePrequalIconUrl?: string | null;
  fullAppIconUrl?: string | null;
  ringCenralIconUrl?: string | null;
  alexaIconUrl?: string | null;
  mobileAppIconUrl?: string | null;
  profilePhotoPlaceholderUrl?: string | null;
  losUserID?: string | null;
  iconColor?: string | null;
  /** @format uuid */
  byPhoneStaticIconID?: string | null;
  /** @format uuid */
  byPhoneAnimatedIconID?: string | null;
  /** @format uuid */
  shortAppStaticIconID?: string | null;
  /** @format uuid */
  shortAppAnimatedIconID?: string | null;
  /** @format uuid */
  fullAppStaticIconID?: string | null;
  /** @format uuid */
  fullAppAnimatedIconID?: string | null;
  /** @format uuid */
  rulesStaticIconID?: string | null;
  /** @format uuid */
  rulesAnimatedIconID?: string | null;
  /** @format uuid */
  myProfileStaticIconID?: string | null;
  /** @format uuid */
  myProfileAnimatedIconID?: string | null;
  /** @format uuid */
  accountSettingsStaticIconID?: string | null;
  /** @format uuid */
  accountSettingsAnimatedIconID?: string | null;
  /** @format uuid */
  brandStaticIconID?: string | null;
  /** @format uuid */
  brandAnimatedIconID?: string | null;
  /** @format uuid */
  branchesStaticIconID?: string | null;
  /** @format uuid */
  branchesAnimatedIconID?: string | null;
  /** @format uuid */
  loanOfficersStaticIconID?: string | null;
  /** @format uuid */
  loanOfficersAnimatedIconID?: string | null;
  /** @format uuid */
  usersStaticIconID?: string | null;
  /** @format uuid */
  usersAnimatedIconID?: string | null;
  counties: string[];
  /** @format uuid */
  pipelineStaticIconID?: string | null;
  /** @format uuid */
  pipelineAnimatedIconID?: string | null;
  /** @format uuid */
  loanApplicationsStaticIconID?: string | null;
  /** @format uuid */
  loanApplicationsAnimatedIconID?: string | null;
  /** @format uuid */
  documentsStaticIconID?: string | null;
  /** @format uuid */
  documentsAnimatedIconID?: string | null;
  /** @format uuid */
  calculatorStaticIconID?: string | null;
  /** @format uuid */
  calculatorAnimatedIconID?: string | null;
  /** @format uuid */
  dashboardStaticIconID?: string | null;
  /** @format uuid */
  dashboardAnimatedIconID?: string | null;
  /** @format uuid */
  signOutAnimatedIconID?: string | null;
  /** @format uuid */
  signInStaticIconID?: string | null;
  /** @format uuid */
  signInAnimatedIconID?: string | null;
  /** @format uuid */
  signOutStaticIconID?: string | null;
  backgroundImageUrl?: string | null;
  disclosuresUrl?: string | null;
  /** @format uuid */
  addCoBorrowerStaticIconID?: string | null;
  /** @format uuid */
  addCoBorrowerAnimatedIconID?: string | null;
  disclosuresSSOSiteID?: string | null;
  loanChannel?: string | null;
  loanFolder?: string | null;
  loanTemplate?: string | null;
  fromEmail?: string | null;
  ccEmails?: string | null;
  irsVerificationUrl?: string | null;
  byPhoneTitle?: string | null;
  byPhoneSubtitle?: string | null;
  shortAppTitle?: string | null;
  shortAppSubtitle?: string | null;
  fullAppTitle?: string | null;
  fullAppSubtitle?: string | null;
  spanishPrequalTitle?: string | null;
  spanishPrequalSubtitle?: string | null;
  spanishFullAppTitle?: string | null;
  spanishFullAppSubtitle?: string | null;
  userTitle?: string | null;
  darkModeLogoUrl?: string | null;
  darkModePortalLogoUrl?: string | null;
  darkModeIconUrl?: string | null;
  darkModePrimaryColor?: string | null;
  darkModeSecondaryColor?: string | null;
  calendarUrl?: string | null;
  surveysUrl?: string | null;
  enabledServices: EnabledServices;
  company: Company;
  companyName?: string | null;
  companySiteUrl?: string | null;
  companyAddress?: string | null;
  companyAddress2?: string | null;
  companyCity?: string | null;
  companyState?: string | null;
  companyZip?: string | null;
  companyPhone?: string | null;
  companyFax?: string | null;
  companyNMLSID?: string | null;
  branchName?: string | null;
  branchNMLSID?: string | null;
  mfaPreference?: string | null;
  /** @format int32 */
  allowedLoginsWithoutMFA: number;
  modules: Module[];
  user?: UserPublic | null;
  asoSettings?: ASOSettings | null;
  accountSettings: AccountSettings;
}

export interface SiteConfigurationByUrl {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  type: "None" | "Account" | "Corporate" | "Branch" | "LoanOfficer" | "Partner";
  /** @format uuid */
  entityID: string;
  /** @format int32 */
  entityType: number;
  /** @minLength 1 */
  url: string;
  name: string;
  introduction?: string | null;
  introductionTitle?: string | null;
  /** @format int64 */
  nmlsid: number;
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  phone?: string | null;
  fax?: string | null;
  tollFree?: string | null;
  logoUrl?: string | null;
  portalLogoUrl?: string | null;
  mobileAppLogoUrl?: string | null;
  iconUrl?: string | null;
  bannerUrl?: string | null;
  secondaryBannerUrl?: string | null;
  profilePhotoUrl?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  textColor?: string | null;
  companyUrl?: string | null;
  termsUrl?: string | null;
  privacyPolicyUrl?: string | null;
  facebookUrl?: string | null;
  twitterUrl?: string | null;
  instagramUrl?: string | null;
  linkedInUrl?: string | null;
  licenses: string[];
  contactUsUrl?: string | null;
  licenseInfoUrl?: string | null;
  backgroundColor?: string | null;
  headerAlignment?: string | null;
  email?: string | null;
  /** @format int32 */
  landingPageType?: number | null;
  confirmPassword?: boolean | null;
  pageNotFoundUrl?: string | null;
  footerDisclaimerText1?: string | null;
  footerDisclaimerText2?: string | null;
  locationImageUrl?: string | null;
  eppsUserName?: string | null;
  mobilePrequalIconUrl?: string | null;
  fullAppIconUrl?: string | null;
  ringCenralIconUrl?: string | null;
  alexaIconUrl?: string | null;
  mobileAppIconUrl?: string | null;
  profilePhotoPlaceholderUrl?: string | null;
  losUserID?: string | null;
  iconColor?: string | null;
  /** @format uuid */
  byPhoneStaticIconID?: string | null;
  /** @format uuid */
  byPhoneAnimatedIconID?: string | null;
  /** @format uuid */
  shortAppStaticIconID?: string | null;
  /** @format uuid */
  shortAppAnimatedIconID?: string | null;
  /** @format uuid */
  fullAppStaticIconID?: string | null;
  /** @format uuid */
  fullAppAnimatedIconID?: string | null;
  /** @format uuid */
  rulesStaticIconID?: string | null;
  /** @format uuid */
  rulesAnimatedIconID?: string | null;
  /** @format uuid */
  myProfileStaticIconID?: string | null;
  /** @format uuid */
  myProfileAnimatedIconID?: string | null;
  /** @format uuid */
  accountSettingsStaticIconID?: string | null;
  /** @format uuid */
  accountSettingsAnimatedIconID?: string | null;
  /** @format uuid */
  brandStaticIconID?: string | null;
  /** @format uuid */
  brandAnimatedIconID?: string | null;
  /** @format uuid */
  branchesStaticIconID?: string | null;
  /** @format uuid */
  branchesAnimatedIconID?: string | null;
  /** @format uuid */
  loanOfficersStaticIconID?: string | null;
  /** @format uuid */
  loanOfficersAnimatedIconID?: string | null;
  /** @format uuid */
  usersStaticIconID?: string | null;
  /** @format uuid */
  usersAnimatedIconID?: string | null;
  counties: string[];
  /** @format uuid */
  pipelineStaticIconID?: string | null;
  /** @format uuid */
  pipelineAnimatedIconID?: string | null;
  /** @format uuid */
  loanApplicationsStaticIconID?: string | null;
  /** @format uuid */
  loanApplicationsAnimatedIconID?: string | null;
  /** @format uuid */
  documentsStaticIconID?: string | null;
  /** @format uuid */
  documentsAnimatedIconID?: string | null;
  /** @format uuid */
  calculatorStaticIconID?: string | null;
  /** @format uuid */
  calculatorAnimatedIconID?: string | null;
  /** @format uuid */
  dashboardStaticIconID?: string | null;
  /** @format uuid */
  dashboardAnimatedIconID?: string | null;
  /** @format uuid */
  signOutAnimatedIconID?: string | null;
  /** @format uuid */
  signInStaticIconID?: string | null;
  /** @format uuid */
  signInAnimatedIconID?: string | null;
  /** @format uuid */
  signOutStaticIconID?: string | null;
  backgroundImageUrl?: string | null;
  disclosuresUrl?: string | null;
  /** @format uuid */
  addCoBorrowerStaticIconID?: string | null;
  /** @format uuid */
  addCoBorrowerAnimatedIconID?: string | null;
  disclosuresSSOSiteID?: string | null;
  loanChannel?: string | null;
  loanFolder?: string | null;
  loanTemplate?: string | null;
  fromEmail?: string | null;
  ccEmails?: string | null;
  irsVerificationUrl?: string | null;
  byPhoneTitle?: string | null;
  byPhoneSubtitle?: string | null;
  shortAppTitle?: string | null;
  shortAppSubtitle?: string | null;
  fullAppTitle?: string | null;
  fullAppSubtitle?: string | null;
  spanishPrequalTitle?: string | null;
  spanishPrequalSubtitle?: string | null;
  spanishFullAppTitle?: string | null;
  spanishFullAppSubtitle?: string | null;
  userTitle?: string | null;
  darkModeLogoUrl?: string | null;
  darkModePortalLogoUrl?: string | null;
  darkModeIconUrl?: string | null;
  darkModePrimaryColor?: string | null;
  darkModeSecondaryColor?: string | null;
  calendarUrl?: string | null;
  surveysUrl?: string | null;
  enabledServices: EnabledServices;
  company: Company;
  companyName?: string | null;
  companySiteUrl?: string | null;
  companyAddress?: string | null;
  companyAddress2?: string | null;
  companyCity?: string | null;
  companyState?: string | null;
  companyZip?: string | null;
  companyPhone?: string | null;
  companyFax?: string | null;
  companyNMLSID?: string | null;
  branchName?: string | null;
  branchNMLSID?: string | null;
  mfaPreference?: string | null;
  /** @format int32 */
  allowedLoginsWithoutMFA: number;
  modules: Module[];
  user?: UserPublic | null;
  asoSettings?: ASOSettings | null;
  accountSettings: AccountSettings;
  workflows: Workflow[];
}

export interface SiteConfigurationForm {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id?: string | null;
  /** @format uuid */
  siteConfigurationID: string;
  /** @format uuid */
  formID: string;
  formType?: string | null;
  slug?: string | null;
  userRole: string;
  borrowerType: string;
  tileLocation: string;
  icon: string;
  entityTypes: string[];
  siteConfiguration: SiteConfigurationReduced;
}

export interface SiteConfigurationReduced {
  /** @format uuid */
  id: string;
  type: "None" | "Account" | "Corporate" | "Branch" | "LoanOfficer" | "Partner";
  url?: string | null;
  name: string;
  /** @format int64 */
  nmlsid: number;
  email?: string | null;
  companyName?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
}

export interface SiteConfigurationRequest {
  /** @format uuid */
  entityID: string;
  /** @format int32 */
  entityType: number;
  type: "None" | "Account" | "Corporate" | "Branch" | "LoanOfficer" | "Partner";
  url: string;
  name: string;
  introduction?: string | null;
  introductionTitle?: string | null;
  /** @format int64 */
  nmlsid: number;
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  phone?: string | null;
  fax?: string | null;
  tollFree?: string | null;
  logoUrl?: string | null;
  portalLogoUrl?: string | null;
  mobileAppLogoUrl?: string | null;
  iconUrl?: string | null;
  bannerUrl?: string | null;
  secondaryBannerUrl?: string | null;
  profilePhotoUrl?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  textColor?: string | null;
  companyUrl?: string | null;
  termsUrl?: string | null;
  privacyPolicyUrl?: string | null;
  facebookUrl?: string | null;
  twitterUrl?: string | null;
  instagramUrl?: string | null;
  linkedInUrl?: string | null;
  licenses: string[];
  contactUsUrl?: string | null;
  licenseInfoUrl?: string | null;
  backgroundColor?: string | null;
  headerAlignment?: string | null;
  email?: string | null;
  /** @format int32 */
  landingPageType?: number | null;
  confirmPassword?: boolean | null;
  pageNotFoundUrl?: string | null;
  footerDisclaimerText1?: string | null;
  footerDisclaimerText2?: string | null;
  locationImageUrl?: string | null;
  eppsUserName?: string | null;
  mobilePrequalIconUrl?: string | null;
  fullAppIconUrl?: string | null;
  ringCenralIconUrl?: string | null;
  alexaIconUrl?: string | null;
  mobileAppIconUrl?: string | null;
  profilePhotoPlaceholderUrl?: string | null;
  losUserID?: string | null;
  iconColor?: string | null;
  /** @format uuid */
  byPhoneStaticIconID?: string | null;
  /** @format uuid */
  byPhoneAnimatedIconID?: string | null;
  /** @format uuid */
  shortAppStaticIconID?: string | null;
  /** @format uuid */
  shortAppAnimatedIconID?: string | null;
  /** @format uuid */
  fullAppStaticIconID?: string | null;
  /** @format uuid */
  fullAppAnimatedIconID?: string | null;
  /** @format uuid */
  rulesStaticIconID?: string | null;
  /** @format uuid */
  rulesAnimatedIconID?: string | null;
  /** @format uuid */
  myProfileStaticIconID?: string | null;
  /** @format uuid */
  myProfileAnimatedIconID?: string | null;
  /** @format uuid */
  accountSettingsStaticIconID?: string | null;
  /** @format uuid */
  accountSettingsAnimatedIconID?: string | null;
  /** @format uuid */
  brandStaticIconID?: string | null;
  /** @format uuid */
  brandAnimatedIconID?: string | null;
  /** @format uuid */
  branchesStaticIconID?: string | null;
  /** @format uuid */
  branchesAnimatedIconID?: string | null;
  /** @format uuid */
  loanOfficersStaticIconID?: string | null;
  /** @format uuid */
  loanOfficersAnimatedIconID?: string | null;
  /** @format uuid */
  usersStaticIconID?: string | null;
  /** @format uuid */
  usersAnimatedIconID?: string | null;
  counties: string[];
  /** @format uuid */
  pipelineStaticIconID?: string | null;
  /** @format uuid */
  pipelineAnimatedIconID?: string | null;
  /** @format uuid */
  loanApplicationsStaticIconID?: string | null;
  /** @format uuid */
  loanApplicationsAnimatedIconID?: string | null;
  /** @format uuid */
  documentsStaticIconID?: string | null;
  /** @format uuid */
  documentsAnimatedIconID?: string | null;
  /** @format uuid */
  calculatorStaticIconID?: string | null;
  /** @format uuid */
  calculatorAnimatedIconID?: string | null;
  /** @format uuid */
  dashboardStaticIconID?: string | null;
  /** @format uuid */
  dashboardAnimatedIconID?: string | null;
  /** @format uuid */
  signOutAnimatedIconID?: string | null;
  /** @format uuid */
  signInStaticIconID?: string | null;
  /** @format uuid */
  signInAnimatedIconID?: string | null;
  /** @format uuid */
  signOutStaticIconID?: string | null;
  backgroundImageUrl?: string | null;
  disclosuresUrl?: string | null;
  /** @format uuid */
  addCoBorrowerStaticIconID?: string | null;
  /** @format uuid */
  addCoBorrowerAnimatedIconID?: string | null;
  disclosuresSSOSiteID?: string | null;
  loanChannel?: string | null;
  loanFolder?: string | null;
  loanTemplate?: string | null;
  fromEmail?: string | null;
  ccEmails?: string | null;
  irsVerificationUrl?: string | null;
  byPhoneTitle?: string | null;
  byPhoneSubtitle?: string | null;
  shortAppTitle?: string | null;
  shortAppSubtitle?: string | null;
  fullAppTitle?: string | null;
  fullAppSubtitle?: string | null;
  spanishPrequalTitle?: string | null;
  spanishPrequalSubtitle?: string | null;
  spanishFullAppTitle?: string | null;
  spanishFullAppSubtitle?: string | null;
  darkModeLogoUrl?: string | null;
  darkModePortalLogoUrl?: string | null;
  darkModeIconUrl?: string | null;
  darkModePrimaryColor?: string | null;
  darkModeSecondaryColor?: string | null;
  calendarUrl?: string | null;
  surveysUrl?: string | null;
  enabledServices: EnabledServices;
  modules?: Module[] | null;
  /** @format uuid */
  userID?: string | null;
}

export interface SiteConfigurationSearchCriteria {
  searchText?: string | null;
  isActive?: boolean | null;
  entityType?: EntityType | null;
  /** @format uuid */
  branch?: string | null;
  /** @format uuid */
  brand?: string | null;
  role?: UserRole | null;
  branchType?: BranchType | null;
}

export interface SiteConfigurationSummary {
  /** @format uuid */
  id: string;
  type: "None" | "Account" | "Corporate" | "Branch" | "LoanOfficer" | "Partner";
  url?: string | null;
  name: string;
  /** @format int64 */
  nmlsid: number;
  email?: string | null;
  companyName?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  branch?: BranchBase | null;
  corporate?: CorporateBase | null;
  loanOfficer?: User | null;
  realtor?: User | null;
  branchName?: string | null;
}

export interface SiteConfigurationSummaryPaginated {
  rows: SiteConfigurationSummary[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface SiteConfigurationWithInherited {
  siteConfiguration: SiteConfiguration;
  inheritedSiteConfiguration?: SiteConfiguration | null;
}

export interface SocialSurveyRecord {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  review: string;
  /** @format double */
  rating: number;
  firstName: string;
  lastName: string;
  /** @format date-time */
  reviewCompletedTimeStamp?: string | null;
}

export interface SurveyEmailRequest {
  /** @minLength 1 */
  loanOfficerEmailAddress: string;
}

export interface SystemTokenRequest {
  /** @minLength 1 */
  clientId: string;
  /** @minLength 1 */
  clientSecret: string;
}

export interface Task {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  name: string;
  description?: string | null;
  type: string;
  losTarget?: string | null;
  targetUserRole?: string | null;
  /** @format int32 */
  daysDueFromApplication?: number | null;
  /** @format int32 */
  weight: number;
  isGlobal: boolean;
  /** @format uuid */
  id: string;
  user?: User | null;
  isFromLegacySource: boolean;
  usedInBusinessRule: boolean;
  willAutocompleteAfterResponse: boolean;
  hasAutoPropagationOnAdd: boolean;
}

export interface TaskComment {
  /** @format uuid */
  id: string;
  comment: string;
  createdBy: UserBase;
  /** @format date-time */
  createdAt: string;
}

export interface TaskCommentPaginated {
  rows: TaskComment[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface TaskCommentRequest {
  comment: string;
}

export interface TaskCommentSearchCriteria {
  searchText?: string | null;
}

export interface TaskPaginated {
  rows: Task[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface TaskRequest {
  /** @minLength 1 */
  name: string;
  description?: string | null;
  losTarget?: string | null;
  type: string;
  targetUserRole?: string | null;
  /**
   * @format int32
   * @min 0
   */
  daysDueFromApplication?: number | null;
  /** @format int32 */
  weight: number;
  isGlobal: boolean;
  willAutocompleteAfterResponse: boolean;
  hasAutoPropagationOnAdd: boolean;
}

export interface TaskSearchCriteria {
  searchText?: string | null;
  isBusinessRule?: boolean | null;
  isGlobal?: boolean | null;
  excludedIds?: string[] | null;
}

export interface TaskUpdateRequest {
  /** @minLength 1 */
  name: string;
  description?: string | null;
  losTarget?: string | null;
  type: string;
  targetUserRole?: string | null;
  /**
   * @format int32
   * @min 0
   */
  daysDueFromApplication?: number | null;
  /** @format int32 */
  weight: number;
  isGlobal: boolean;
  willAutocompleteAfterResponse: boolean;
  hasAutoPropagationOnAdd: boolean;
  /** @format uuid */
  id: string;
}

export interface TestSendNotificationForLoanRequest {
  loanData: Record<string, string>;
  /** @format uuid */
  siteConfigurationId: string;
  toAddress?: string | null;
  toPhoneNumber?: string | null;
  templateName?: string | null;
  attachments: Attachment[];
}

export interface Theme {
  logoURL: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor?: string | null;
  textColor?: string | null;
  iconColor?: string | null;
}

export interface Token {
  token_type: string;
  /** @format int32 */
  expires_in: number;
  access_token: string;
  refresh_token: string;
  scope: string;
}

export interface TokenChallengeRequest {
  /** @format email */
  username: string;
  /** @minLength 1 */
  sessionId: string;
  /** @minLength 1 */
  code: string;
  /**
   * @format uuid
   * @minLength 1
   */
  siteConfigurationId: string;
  isSupport: boolean;
}

export interface TokenRequest {
  /** @format email */
  username: string;
  /** @minLength 1 */
  password: string;
  /** @format uuid */
  siteConfigurationId?: string | null;
  isSupport: boolean;
}

export interface UnderwritingCondition {
  /** @format uuid */
  id: string;
  conditionType: string;
  isRemoved: boolean;
  title: string;
  description?: string | null;
  forAllApplications: boolean;
  source?: string | null;
  /** @format date-time */
  expectedDate?: string | null;
  status: string;
  /** @format date-time */
  statusDate?: string | null;
  /** @format int32 */
  daysToReceive: number;
  requestedFrom?: string | null;
  /** @format date-time */
  createdDate?: string | null;
  createdBy?: CommentUserInformation | null;
  isRequested: boolean;
  /** @format date-time */
  requestedDate?: string | null;
  requestedBy?: CommentUserInformation | null;
  isReceived: boolean;
  /** @format date-time */
  receivedDate?: string | null;
  receivedBy?: CommentUserInformation | null;
  priorTo?: string | null;
  category?: string | null;
  isFulfilled: boolean;
  /** @format date-time */
  fulfilledDate?: string | null;
  fulfilledBy?: CommentUserInformation | null;
  comments: ConditionComment[];
  allowToClear: boolean;
  printExternally: boolean;
  printInternally: boolean;
}

export interface UnprocessableEntity {
  message: string;
  errors: UnprocessableEntityError[];
}

export interface UnprocessableEntityError {
  error: string;
  property: string;
}

export interface UpdateAccountRequest {
  name: string;
  mfaPreference: string;
  /** @format int32 */
  allowedLoginsWithoutMFA: number;
  losSettings: LOSSettingsUpdateRequest;
  asoSettings?: ASOSettings | null;
  settings: AccountSettingsRequest;
}

export interface UpdateDocumentTemplateRequest {
  /** @minLength 1 */
  htmlBody: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  description?: string | null;
  destinationBucket?: string | null;
  status: string;
}

export interface UpdateListingFileRequest {
  /** @format uuid */
  id: string;
  /** @format int32 */
  weight: number;
  /**
   * @minLength 1
   * @maxLength 250
   */
  name: string;
}

export interface UpdateListingPhotoRequest {
  /** @format uuid */
  id: string;
  /**
   * @minLength 1
   * @maxLength 250
   */
  name: string;
  /** @maxLength 500 */
  description?: string | null;
  /** @format int32 */
  weight: number;
}

export interface UpdateLoanQueueRequest {
  data: any;
}

export interface UpdateMeRequest {
  phone?: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  firstName: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  lastName: string;
  email: string;
  title?: string | null;
  forcePasswordReset: boolean;
  mfaEnabled: boolean;
  notificationSettings: UserNotificationSettingsUpdateRequest;
}

export interface UpdateMobilePhoneRequest {
  phone: string;
}

export interface UpdateUserRequest {
  phone?: string | null;
  /**
   * @minLength 1
   * @maxLength 255
   */
  firstName: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  lastName: string;
  email: string;
  title?: string | null;
  /** @format uuid */
  branchId?: string | null;
  forcePasswordReset: boolean;
  mfaEnabled: boolean;
}

export interface User {
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  /** @format uuid */
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  title?: string | null;
  forcePasswordReset: boolean;
  mfaEnabled: boolean;
  phoneVerified: boolean;
  /** @format int32 */
  loginsWithoutMFACount: number;
  canImpersonate: boolean;
}

export interface UserAccountDeletionRequest {
  feedback: string;
}

export interface UserBase {
  /** @format uuid */
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserLoan {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
  loanID: string;
  user?: User | null;
  role:
    | "Borrower"
    | "CoBorrower"
    | "NonBorrower"
    | "LoanOfficer"
    | "LoanProcessor"
    | "LoanOfficerAssistant"
    | "SupportingLoanOfficer"
    | "BuyerAgent"
    | "SellerAgent"
    | "TitleInsuranceAgent"
    | "EscrowAgent"
    | "SettlementAgent";
  /** @format int32 */
  borrowerPair?: number | null;
  /** @format int32 */
  borrowerPosition?: number | null;
  customLoanData?: CustomLoanData | null;
}

export interface UserLoanTask {
  /** @format uuid */
  id: string;
  status: string;
  /** @format date-time */
  statusChangedDate?: string | null;
  task: Task;
  user: User;
  value?: string | null;
  documents: LoanDocument[];
  loanID: string;
  /** @format date-time */
  completedDate?: string | null;
  /** @format date-time */
  createdAt: string;
  createdBy: User;
  submittedBy?: User | null;
  completedBy?: User | null;
  /** @format int32 */
  commentsCount: number;
}

export interface UserLoanTaskRequest {
  value?: string | null;
  /**
   * @format uuid
   * @minLength 1
   */
  userID: string;
}

export interface UserLoanTaskUpdateRequest {
  status?: string | null;
  value?: string | null;
}

export interface UserMobilePhoneVerificationRequest {
  /** @minLength 1 */
  code: string;
}

export interface UserNotificationSettings {
  emailEnabled: boolean;
  textEnabled: boolean;
  textOptIn?: boolean | null;
}

export interface UserNotificationSettingsUpdateRequest {
  emailEnabled: boolean;
  textEnabled: boolean;
  textOptIn?: boolean | null;
}

export interface UserPaginated {
  rows: User[];
  pagination: Pagination;
  /** @format int64 */
  count: number;
}

export interface UserPublic {
  /** @format uuid */
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  title?: string | null;
}

export interface UserRelation {
  /**
   * @format uuid
   * @minLength 1
   */
  userId1: string;
  /**
   * @format uuid
   * @minLength 1
   */
  userId2: string;
  /** @minLength 1 */
  relationType: string;
  /** @format uuid */
  id: string;
  user1Email: string;
  user1Role: string;
  user2Email: string;
  user2Role: string;
}

export interface UserRelationship {
  /** @format uuid */
  id: string;
  role: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  siteConfigurations: SiteConfigurationReduced[];
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
}

export interface UserRelationshipProspect {
  /** @format uuid */
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  contactPhone?: string | null;
  licenseNumber?: string | null;
  /** @format uuid */
  branchID: string;
  companyName?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
}

export interface UserSearchCriteria {
  searchText?: string | null;
  isActive?: boolean | null;
  roles?: string[] | null;
}

export interface VerifyPasswordRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /** @minLength 1 */
  code: string;
  /** @minLength 8 */
  password: string;
  /** @format uuid */
  siteConfigurationId?: string | null;
}

export interface Workflow {
  formType: string;
  target: string;
  authType: string;
  name: string;
  isDefault: boolean;
  description: string;
  slug: string;
  status: string;
  userRole: string;
  borrowerType: string;
  showProgressBar: boolean;
  showTile: boolean;
  tileLocation: string;
  tileText: string;
  tileSubtitle: string;
  icon: string;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title The Big POS API
 * @version v2.18.3
 * @termsOfService https://www.thebigpos.com/terms-of-use/
 * @contact Mortgage Automation Technologies <support@thebigpos.com> (https://www.thebigpos.com/terms-of-use/)
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Saml
   * @name PostRoot
   * @request POST:/
   * @secure
   * @response `200` `void` Success
   */
  postRoot = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "POST",
      secure: true,
      ...params,
    });

  /**
   * No description
   *
   * @tags TheBigPOS
   * @name GetRoot
   * @request GET:/
   * @secure
   * @response `200` `string` Success
   */
  getRoot = (params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/`,
      method: "GET",
      secure: true,
      ...params,
    });

  api = {
    /**
     * No description
     *
     * @tags Account
     * @name GetMyAccount
     * @summary Get
     * @request GET:/api/account
     * @secure
     * @response `200` `Account` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getMyAccount: (params: RequestParams = {}) =>
      this.request<Account, ProblemDetails>({
        path: `/api/account`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name ReplaceMyAccount
     * @summary Replace
     * @request PUT:/api/account
     * @secure
     * @response `200` `Account` Success
     * @response `404` `ProblemDetails` Not Found
     * @response `422` `ProblemDetails` Client Error
     */
    replaceMyAccount: (
      data: UpdateAccountRequest,
      params: RequestParams = {},
    ) =>
      this.request<Account, ProblemDetails>({
        path: `/api/account`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name GetSiteConfigurationByAccount
     * @summary Get Site Configuration
     * @request GET:/api/account/site-configurations
     * @secure
     * @response `200` `SiteConfiguration` Success
     */
    getSiteConfigurationByAccount: (params: RequestParams = {}) =>
      this.request<SiteConfiguration, any>({
        path: `/api/account/site-configurations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name UpdateSiteConfigurationForAccount
     * @summary Update Site Configuration
     * @request PUT:/api/account/site-configurations
     * @secure
     * @response `200` `SiteConfiguration` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    updateSiteConfigurationForAccount: (
      data: SiteConfiguration,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntity>({
        path: `/api/account/site-configurations`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name GetAccounts
     * @summary Get All
     * @request GET:/api/accounts
     * @secure
     * @response `200` `(Account)[]` Success
     */
    getAccounts: (params: RequestParams = {}) =>
      this.request<Account[], any>({
        path: `/api/accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name CreateAccount
     * @summary Create
     * @request POST:/api/accounts
     * @secure
     * @response `201` `Account` Created
     * @response `422` `ProblemDetails` Client Error
     */
    createAccount: (data: CreateAccountRequest, params: RequestParams = {}) =>
      this.request<Account, ProblemDetails>({
        path: `/api/accounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name GetAccount
     * @summary Get by ID
     * @request GET:/api/accounts/{id}
     * @secure
     * @response `201` `Account` Created
     * @response `422` `ProblemDetails` Client Error
     */
    getAccount: (id: string, params: RequestParams = {}) =>
      this.request<Account, ProblemDetails>({
        path: `/api/accounts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name DeleteAccount
     * @summary Delete
     * @request DELETE:/api/accounts/{id}
     * @secure
     * @response `204` `Account` No Content
     * @response `404` `ProblemDetails` Not Found
     * @response `422` `ProblemDetails` Client Error
     */
    deleteAccount: (
      id: string,
      query?: {
        /** @default false */
        hardDelete?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Account, ProblemDetails>({
        path: `/api/accounts/${id}`,
        method: "DELETE",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name UpdateLoansByAccount
     * @summary Update Loans
     * @request PUT:/api/accounts/{id}/loan
     * @secure
     * @response `200` `void` Success
     * @response `404` `ProblemDetails` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    updateLoansByAccount: (
      id: string,
      data: Loan[],
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails | UnprocessableEntity>({
        path: `/api/accounts/${id}/loan`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accounts
     * @name GetLoansByAccount
     * @summary Get Loans
     * @request GET:/api/accounts/{id}/loan
     * @secure
     * @response `200` `(Loan)[]` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getLoansByAccount: (id: string, params: RequestParams = {}) =>
      this.request<Loan[], ProblemDetails>({
        path: `/api/accounts/${id}/loan`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name GetTokenFromRefreshToken
     * @summary Generate Token From Refresh Token
     * @request POST:/api/refresh-token
     * @secure
     * @response `200` `Token` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    getTokenFromRefreshToken: (
      data: RefreshTokenRequest,
      params: RequestParams = {},
    ) =>
      this.request<Token, UnprocessableEntity>({
        path: `/api/refresh-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name GetToken
     * @summary Get Token
     * @request POST:/api/token
     * @secure
     * @response `200` `Token` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    getToken: (data: TokenRequest, params: RequestParams = {}) =>
      this.request<Token, UnprocessableEntity>({
        path: `/api/token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name GetTokenFromChallengeCode
     * @summary Get Token From Challenge Code
     * @request POST:/api/token/code
     * @secure
     * @response `200` `Token` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    getTokenFromChallengeCode: (
      data: TokenChallengeRequest,
      params: RequestParams = {},
    ) =>
      this.request<Token, UnprocessableEntity>({
        path: `/api/token/code`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name GetSystemToken
     * @summary Get System Token
     * @request POST:/api/oauth2/token
     * @secure
     * @response `200` `Token` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    getSystemToken: (data: SystemTokenRequest, params: RequestParams = {}) =>
      this.request<Token, UnprocessableEntity>({
        path: `/api/oauth2/token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name GetSsoToken
     * @summary Get SSO Guid Token
     * @request POST:/api/token/sso
     * @secure
     * @response `200` `SSOToken` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    getSsoToken: (data: SSOTokenRequest, params: RequestParams = {}) =>
      this.request<SSOToken, UnprocessableEntity>({
        path: `/api/token/sso`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branches
     * @name GetBranches
     * @summary Get All
     * @request GET:/api/branches
     * @secure
     * @response `200` `GetBranchPaginated` Success
     */
    getBranches: (
      query?: {
        showAll?: boolean;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetBranchPaginated, any>({
        path: `/api/branches`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branches
     * @name CreateBranch
     * @summary Create
     * @request POST:/api/branches
     * @secure
     * @response `200` `GetBranch` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    createBranch: (data: CreateBranchRequest, params: RequestParams = {}) =>
      this.request<GetBranch, UnprocessableEntity>({
        path: `/api/branches`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branches
     * @name SearchBranches
     * @summary Search
     * @request POST:/api/branches/search
     * @secure
     * @response `200` `GetBranchPaginated` Success
     */
    searchBranches: (
      data: BranchSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetBranchPaginated, any>({
        path: `/api/branches/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branches
     * @name GetBranch
     * @summary Get by ID
     * @request GET:/api/branches/{branchId}
     * @secure
     * @response `200` `GetBranch` Success
     */
    getBranch: (branchId: string, params: RequestParams = {}) =>
      this.request<GetBranch, any>({
        path: `/api/branches/${branchId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branches
     * @name ReplaceBranch
     * @summary Replace
     * @request PUT:/api/branches/{branchId}
     * @secure
     * @response `200` `GetBranch` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceBranch: (
      branchId: string,
      data: CreateBranchRequest,
      params: RequestParams = {},
    ) =>
      this.request<GetBranch, UnprocessableEntity>({
        path: `/api/branches/${branchId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branches
     * @name DeleteBranch
     * @summary Delete
     * @request DELETE:/api/branches/{branchId}
     * @secure
     * @response `204` `void` No Content
     */
    deleteBranch: (branchId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/branches/${branchId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branches
     * @name RestoreBranch
     * @summary Restore
     * @request POST:/api/branches/{branchId}/restore
     * @secure
     * @response `204` `void` No Content
     * @response `400` `ProblemDetails` Bad Request
     */
    restoreBranch: (branchId: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/branches/${branchId}/restore`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branches
     * @name CreateBranchSiteConfiguration
     * @summary Create Branch Site Configuration
     * @request POST:/api/branches/{branchId}/site-configurations
     * @secure
     * @response `200` `SiteConfiguration` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    createBranchSiteConfiguration: (
      branchId: string,
      data: SiteConfigurationRequest,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntity>({
        path: `/api/branches/${branchId}/site-configurations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branches
     * @name GetBranchSiteConfiguration
     * @summary Get Branch Site Configuration
     * @request GET:/api/branches/{branchId}/site-configurations/{siteConfigurationId}
     * @secure
     * @response `200` `SiteConfigurationWithInherited` Success
     */
    getBranchSiteConfiguration: (
      branchId: string,
      siteConfigurationId: string,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfigurationWithInherited, any>({
        path: `/api/branches/${branchId}/site-configurations/${siteConfigurationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branches
     * @name ReplaceBranchSiteConfiguration
     * @summary Replace Branch Site Configuration
     * @request PUT:/api/branches/{branchId}/site-configurations/{siteConfigurationId}
     * @secure
     * @response `200` `SiteConfiguration` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceBranchSiteConfiguration: (
      branchId: string,
      siteConfigurationId: string,
      data: SiteConfigurationRequest,
      query?: {
        applyToChildren?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntity>({
        path: `/api/branches/${branchId}/site-configurations/${siteConfigurationId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branches
     * @name GetLoanOfficersByBranch
     * @summary Get Branch Loan Officers
     * @request GET:/api/branches/{branchId}/loan-officers
     * @secure
     * @response `200` `LoanOfficerPublic` Success
     */
    getLoanOfficersByBranch: (branchId: string, params: RequestParams = {}) =>
      this.request<LoanOfficerPublic, any>({
        path: `/api/branches/${branchId}/loan-officers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BusinessRules
     * @name GetBusinessRules
     * @summary Get All
     * @request GET:/api/business-rules
     * @secure
     * @response `200` `(BusinessRule)[]` Success
     */
    getBusinessRules: (
      query?: {
        showAll?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<BusinessRule[], any>({
        path: `/api/business-rules`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BusinessRules
     * @name CreateBusinessRule
     * @summary Create
     * @request POST:/api/business-rules
     * @secure
     * @response `200` `BusinessRule` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    createBusinessRule: (
      data: BusinessRuleRequest,
      params: RequestParams = {},
    ) =>
      this.request<BusinessRule, UnprocessableEntity>({
        path: `/api/business-rules`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BusinessRules
     * @name GetBusinessRule
     * @summary Get by ID
     * @request GET:/api/business-rules/{id}
     * @secure
     * @response `200` `BusinessRule` Success
     */
    getBusinessRule: (id: string, params: RequestParams = {}) =>
      this.request<BusinessRule, any>({
        path: `/api/business-rules/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BusinessRules
     * @name ReplaceBusinessRule
     * @summary Replace
     * @request PUT:/api/business-rules/{id}
     * @secure
     * @response `200` `BusinessRule` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceBusinessRule: (
      id: string,
      data: BusinessRuleRequest,
      params: RequestParams = {},
    ) =>
      this.request<BusinessRule, UnprocessableEntity>({
        path: `/api/business-rules/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BusinessRules
     * @name DeleteBusinessRule
     * @summary Delete
     * @request DELETE:/api/business-rules/{id}
     * @secure
     * @response `204` `void` No Content
     */
    deleteBusinessRule: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/business-rules/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BusinessRules
     * @name RestoreBusinessRule
     * @summary Restore
     * @request POST:/api/business-rules/{id}/restore
     * @secure
     * @response `200` `BusinessRule` Success
     */
    restoreBusinessRule: (id: string, params: RequestParams = {}) =>
      this.request<BusinessRule, any>({
        path: `/api/business-rules/${id}/restore`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name GetCorporates
     * @summary Get All
     * @request GET:/api/corporates
     * @secure
     * @response `200` `CorporatePaginated` Success
     */
    getCorporates: (
      query?: {
        showAll?: boolean;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CorporatePaginated, any>({
        path: `/api/corporates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name CreateCorporate
     * @summary Create
     * @request POST:/api/corporates
     * @secure
     * @response `200` `Corporate` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    createCorporate: (data: CorporateRequest, params: RequestParams = {}) =>
      this.request<Corporate, UnprocessableEntity>({
        path: `/api/corporates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name SearchCorporate
     * @summary Search
     * @request POST:/api/corporates/search
     * @secure
     * @response `200` `CorporatePaginated` Success
     */
    searchCorporate: (
      data: CorporateSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CorporatePaginated, any>({
        path: `/api/corporates/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name GetCorporate
     * @summary Get by ID
     * @request GET:/api/corporates/{id}
     * @secure
     * @response `200` `Corporate` Success
     */
    getCorporate: (id: string, params: RequestParams = {}) =>
      this.request<Corporate, any>({
        path: `/api/corporates/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name ReplaceCorporate
     * @summary Replace
     * @request PUT:/api/corporates/{id}
     * @secure
     * @response `200` `Corporate` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceCorporate: (
      id: string,
      data: CorporateRequest,
      params: RequestParams = {},
    ) =>
      this.request<Corporate, UnprocessableEntity>({
        path: `/api/corporates/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name DeleteCorporate
     * @summary Delete
     * @request DELETE:/api/corporates/{id}
     * @secure
     * @response `204` `void` No Content
     */
    deleteCorporate: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/corporates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name RestoreCorporate
     * @summary Restore
     * @request POST:/api/corporates/{id}/restore
     * @secure
     * @response `204` `void` No Content
     */
    restoreCorporate: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/corporates/${id}/restore`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name CreateCorporateSiteConfiguration
     * @summary Create Site Configuration
     * @request POST:/api/corporates/{corporateId}/site-configurations
     * @secure
     * @response `200` `SiteConfiguration` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    createCorporateSiteConfiguration: (
      corporateId: string,
      data: SiteConfigurationRequest,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntity>({
        path: `/api/corporates/${corporateId}/site-configurations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name GetCorporateSiteConfiguration
     * @summary Get Site Configuration
     * @request GET:/api/corporates/{corporateId}/site-configurations/{siteConfigurationId}
     * @secure
     * @response `200` `SiteConfigurationWithInherited` Success
     */
    getCorporateSiteConfiguration: (
      corporateId: string,
      siteConfigurationId: string,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfigurationWithInherited, any>({
        path: `/api/corporates/${corporateId}/site-configurations/${siteConfigurationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name ReplaceCorporateSiteConfiguration
     * @summary Replace Site Configuration
     * @request PUT:/api/corporates/{corporateId}/site-configurations/{siteConfigurationId}
     * @secure
     * @response `200` `SiteConfiguration` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceCorporateSiteConfiguration: (
      corporateId: string,
      siteConfigurationId: string,
      data: SiteConfigurationRequest,
      query?: {
        applyToChildren?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntity>({
        path: `/api/corporates/${corporateId}/site-configurations/${siteConfigurationId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name GetBranchesByCorporate
     * @summary Get Branches
     * @request GET:/api/corporates/{id}/branches
     * @secure
     * @response `200` `(BranchReduced)[]` Success
     */
    getBranchesByCorporate: (id: string, params: RequestParams = {}) =>
      this.request<BranchReduced[], any>({
        path: `/api/corporates/${id}/branches`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Corporates
     * @name GetLoanOfficersByCorporate
     * @summary Get Loan Officers
     * @request GET:/api/corporates/{id}/loan-officers
     * @secure
     * @response `200` `LoanOfficerPublic` Success
     */
    getLoanOfficersByCorporate: (id: string, params: RequestParams = {}) =>
      this.request<LoanOfficerPublic, any>({
        path: `/api/corporates/${id}/loan-officers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Devices
     * @name GetDevices
     * @summary Get All
     * @request GET:/api/devices
     * @secure
     * @response `200` `DevicePaginated` Success
     */
    getDevices: (
      query?: {
        /** @format uuid */
        posAccountId?: string;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DevicePaginated, any>({
        path: `/api/devices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Devices
     * @name GetDevice
     * @summary Get by ID
     * @request GET:/api/devices/{id}
     * @secure
     * @response `200` `Device` Success
     */
    getDevice: (id: string, params: RequestParams = {}) =>
      this.request<Device, any>({
        path: `/api/devices/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Devices
     * @name UpdateDevice
     * @summary Update
     * @request PUT:/api/devices/{id}
     * @secure
     * @response `200` `Device` Success
     */
    updateDevice: (
      id: string,
      data: DeviceRequest,
      params: RequestParams = {},
    ) =>
      this.request<Device, any>({
        path: `/api/devices/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Devices
     * @name GetDeviceBySerialNumber
     * @summary Get by Serial Number
     * @request GET:/api/devices/{sn}/profile
     * @secure
     * @response `200` `DeviceMDM` Success
     */
    getDeviceBySerialNumber: (sn: string, params: RequestParams = {}) =>
      this.request<DeviceMDM, any>({
        path: `/api/devices/${sn}/profile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Devices
     * @name CreateDeviceActionBySerialNumber
     * @summary Create Action by Serial Number
     * @request POST:/api/devices/{sn}/actions/{actionName}
     * @secure
     * @response `200` `Action` Success
     */
    createDeviceActionBySerialNumber: (
      sn: string,
      actionName: string,
      params: RequestParams = {},
    ) =>
      this.request<Action, any>({
        path: `/api/devices/${sn}/actions/${actionName}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentBuckets
     * @name GetDocumentBuckets
     * @summary Get All
     * @request GET:/api/document-buckets
     * @secure
     * @response `200` `(string)[]` Success
     */
    getDocumentBuckets: (
      query?: {
        /** @default false */
        includeSystemBuckets?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<string[], any>({
        path: `/api/document-buckets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplates
     * @name GetDocumentTemplates
     * @summary Get All
     * @request GET:/api/document-templates
     * @secure
     * @response `200` `(DocumentTemplateBase)[]` Success
     */
    getDocumentTemplates: (
      query?: {
        showAll?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateBase[], any>({
        path: `/api/document-templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplates
     * @name CreateDocumentTemplate
     * @summary Create
     * @request POST:/api/document-templates
     * @secure
     * @response `201` `DocumentTemplateBase` Created
     * @response `404` `ProblemDetails` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    createDocumentTemplate: (
      data: CreateDocumentTemplateRequest,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateBase, ProblemDetails | UnprocessableEntity>({
        path: `/api/document-templates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplates
     * @name GetCustomDocumentTemplates
     * @summary Get Custom
     * @request GET:/api/document-templates/{type}
     * @secure
     * @response `200` `(DocumentTemplateBase)[]` Success
     */
    getCustomDocumentTemplates: (
      type: string,
      query?: {
        /** @default false */
        showAll?: boolean;
        /** @default true */
        publishedOnly?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateBase[], any>({
        path: `/api/document-templates/${type}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplates
     * @name GetDocumentTemplate
     * @summary Get By ID
     * @request GET:/api/document-templates/{id}
     * @secure
     * @response `200` `DocumentTemplate` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getDocumentTemplate: (id: string, params: RequestParams = {}) =>
      this.request<DocumentTemplate, ProblemDetails>({
        path: `/api/document-templates/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplates
     * @name ReplaceDocumentTemplate
     * @summary Replace
     * @request PUT:/api/document-templates/{id}
     * @secure
     * @response `200` `DocumentTemplateBase` Success
     * @response `401` `ProblemDetails` Unauthorized
     * @response `404` `ProblemDetails` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceDocumentTemplate: (
      id: string,
      data: UpdateDocumentTemplateRequest,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateBase, ProblemDetails | UnprocessableEntity>({
        path: `/api/document-templates/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplates
     * @name DeleteDocumentTemplate
     * @summary Delete
     * @request DELETE:/api/document-templates/{id}
     * @secure
     * @response `204` `void` No Content
     * @response `401` `ProblemDetails` Unauthorized
     * @response `404` `ProblemDetails` Not Found
     */
    deleteDocumentTemplate: (id: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/document-templates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplates
     * @name RestoreDocumentTemplate
     * @summary Restore
     * @request POST:/api/document-templates/{id}/restore
     * @secure
     * @response `204` `void` No Content
     * @response `401` `ProblemDetails` Unauthorized
     * @response `404` `ProblemDetails` Not Found
     */
    restoreDocumentTemplate: (id: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/document-templates/${id}/restore`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplateVersions
     * @name GetDocumentTemplateVersions
     * @summary Get All
     * @request GET:/api/document-templates/{documentId}/versions
     * @secure
     * @response `200` `(DocumentTemplateVersion)[]` Success
     */
    getDocumentTemplateVersions: (
      documentId: string,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateVersion[], any>({
        path: `/api/document-templates/${documentId}/versions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplateVersions
     * @name CreateDocumentTemplateVersion
     * @summary Create
     * @request POST:/api/document-templates/{documentId}/versions
     * @secure
     * @response `200` `DocumentTemplateVersion` Success
     */
    createDocumentTemplateVersion: (
      documentId: string,
      data: DocumentTemplateVersionRequest,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateVersion, any>({
        path: `/api/document-templates/${documentId}/versions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplateVersions
     * @name GetDocumentTemplateVersion
     * @summary Get by ID
     * @request GET:/api/document-templates/{documentId}/versions/{id}
     * @secure
     * @response `200` `DocumentTemplateVersion` Success
     */
    getDocumentTemplateVersion: (
      documentId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateVersion, any>({
        path: `/api/document-templates/${documentId}/versions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplateVersions
     * @name ReplaceDocumentTemplateVersion
     * @summary Replace
     * @request PUT:/api/document-templates/{documentId}/versions/{id}
     * @secure
     * @response `200` `DocumentTemplateVersion` Success
     */
    replaceDocumentTemplateVersion: (
      documentId: string,
      id: string,
      data: DocumentTemplateVersionUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateVersion, any>({
        path: `/api/document-templates/${documentId}/versions/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DocumentTemplateVersions
     * @name DeleteDocumentTemplateVersion
     * @summary Delete
     * @request DELETE:/api/document-templates/{documentId}/versions/{id}
     * @secure
     * @response `200` `DocumentTemplateVersion` Success
     */
    deleteDocumentTemplateVersion: (
      documentId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateVersion, any>({
        path: `/api/document-templates/${documentId}/versions/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name GetAllFiles
     * @summary Get All
     * @request GET:/api/files
     * @secure
     * @response `200` `FilePaginated` Success
     */
    getAllFiles: (
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
        /** @default false */
        includeDeleted?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<FilePaginated, any>({
        path: `/api/files`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name UploadFile
     * @summary Upload
     * @request POST:/api/files
     * @secure
     * @response `201` `File` Created
     * @response `422` `UnprocessableEntity` Client Error
     */
    uploadFile: (
      data: {
        name?: string;
        /** @format binary */
        file?: File;
        isPublic?: boolean;
        bucket?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, UnprocessableEntity>({
        path: `/api/files`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name GetFileById
     * @summary Get By ID
     * @request GET:/api/files/{id}
     * @secure
     * @response `201` `File` Created
     */
    getFileById: (id: string, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/api/files/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name ReplaceFile
     * @summary Replace
     * @request PUT:/api/files/{id}
     * @secure
     * @response `200` `string` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceFile: (id: string, data: FileRequest, params: RequestParams = {}) =>
      this.request<string, UnprocessableEntity>({
        path: `/api/files/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name DeleteFile
     * @summary Delete
     * @request DELETE:/api/files/{id}
     * @secure
     * @response `204` `void` No Content
     */
    deleteFile: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/files/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name SearchFiles
     * @summary Search
     * @request POST:/api/files/search
     * @secure
     * @response `200` `FilePaginated` Success
     */
    searchFiles: (
      data: FileSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FilePaginated, any>({
        path: `/api/files/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name GetForms
     * @summary Get All
     * @request GET:/api/forms
     * @secure
     * @response `200` `(AdminAccessGetForms)[]` Success
     */
    getForms: (
      query?: {
        showAll?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminAccessGetForms[], any>({
        path: `/api/forms`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name CreateForm
     * @summary Create
     * @request POST:/api/forms
     * @secure
     * @response `201` `Form` Created
     * @response `422` `UnprocessableEntity` Client Error
     */
    createForm: (data: FormRequest, params: RequestParams = {}) =>
      this.request<Form, UnprocessableEntity>({
        path: `/api/forms`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name GetForm
     * @summary Get By ID
     * @request GET:/api/forms/{id}
     * @secure
     * @response `200` `Form` Success
     */
    getForm: (id: string, params: RequestParams = {}) =>
      this.request<Form, any>({
        path: `/api/forms/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name ReplaceForm
     * @summary Replace
     * @request PUT:/api/forms/{id}
     * @secure
     * @response `200` `Form` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceForm: (id: string, data: FormRequest, params: RequestParams = {}) =>
      this.request<Form, UnprocessableEntity>({
        path: `/api/forms/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name DeleteForm
     * @summary Delete
     * @request DELETE:/api/forms/{id}
     * @secure
     * @response `204` `void` No Content
     */
    deleteForm: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/forms/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name RestoreForm
     * @summary Restore
     * @request POST:/api/forms/{id}/restore
     * @secure
     * @response `200` `Form` Success
     */
    restoreForm: (id: string, params: RequestParams = {}) =>
      this.request<Form, any>({
        path: `/api/forms/${id}/restore`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormSubmissionFiles
     * @name AddFormSubmissionFile
     * @summary Add
     * @request POST:/api/form-submissions/{formSubmissionId}/files
     * @secure
     * @response `200` `FormSubmissionFile` Success
     */
    addFormSubmissionFile: (
      formSubmissionId: string,
      data: {
        /** @format binary */
        file?: File;
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FormSubmissionFile, any>({
        path: `/api/form-submissions/${formSubmissionId}/files`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormSubmissionFiles
     * @name DeleteFormSubmissionFile
     * @summary Delete
     * @request DELETE:/api/form-submissions/{formSubmissionId}/files/{formSubmissionFileId}
     * @secure
     * @response `204` `void` No Content
     */
    deleteFormSubmissionFile: (
      formSubmissionFileId: string,
      formSubmissionId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/form-submissions/${formSubmissionId}/files/${formSubmissionFileId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormSubmissionFiles
     * @name DownloadFormSubmissionFile
     * @summary Download by Id
     * @request GET:/api/form-submissions/{formSubmissionId}/files/{formSubmissionFileId}/download
     * @secure
     * @response `200` `FileWithBytes` Success
     */
    downloadFormSubmissionFile: (
      formSubmissionFileId: string,
      formSubmissionId: string,
      query?: {
        /** @format uuid */
        siteConfigurationId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FileWithBytes, any>({
        path: `/api/form-submissions/${formSubmissionId}/files/${formSubmissionFileId}/download`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormSubmissions
     * @name GetFormSubmissions
     * @summary Get All
     * @request GET:/api/form-submissions
     * @secure
     * @response `200` `FormSubmissionPaginated` Success
     */
    getFormSubmissions: (
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FormSubmissionPaginated, any>({
        path: `/api/form-submissions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormSubmissions
     * @name CreateFormSubmission
     * @summary Create
     * @request POST:/api/form-submissions
     * @secure
     * @response `201` `FormSubmission` Created
     */
    createFormSubmission: (
      data: FormSubmissionRequest,
      query?: {
        formID?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FormSubmission, any>({
        path: `/api/form-submissions`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormSubmissions
     * @name GetFormSubmission
     * @summary Get by ID
     * @request GET:/api/form-submissions/{id}
     * @secure
     * @response `200` `FormSubmission` Success
     */
    getFormSubmission: (id: string, params: RequestParams = {}) =>
      this.request<FormSubmission, any>({
        path: `/api/form-submissions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormSubmissions
     * @name ReplaceFormSubmission
     * @summary Replace
     * @request PUT:/api/form-submissions/{id}
     * @secure
     * @response `200` `FormSubmission` Success
     */
    replaceFormSubmission: (
      id: string,
      data: FormSubmissionRequest,
      params: RequestParams = {},
    ) =>
      this.request<FormSubmission, any>({
        path: `/api/form-submissions/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormSubmissions
     * @name DeleteFormSubmission
     * @summary Delete
     * @request DELETE:/api/form-submissions/{id}
     * @secure
     * @response `204` `void` No Content
     */
    deleteFormSubmission: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/form-submissions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormSubmissions
     * @name SearchFormSubmissions
     * @summary Search
     * @request POST:/api/form-submissions/search
     * @secure
     * @response `200` `FormSubmissionPaginated` Success
     */
    searchFormSubmissions: (
      data: FormSubmissionSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FormSubmissionPaginated, any>({
        path: `/api/form-submissions/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormVersions
     * @name GetFormVersions
     * @summary Get All
     * @request GET:/api/forms/{formId}/versions
     * @secure
     * @response `200` `(FormVersion)[]` Success
     */
    getFormVersions: (formId: string, params: RequestParams = {}) =>
      this.request<FormVersion[], any>({
        path: `/api/forms/${formId}/versions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormVersions
     * @name CreateFormVersion
     * @summary Create
     * @request POST:/api/forms/{formId}/versions
     * @secure
     * @response `200` `FormVersion` Success
     */
    createFormVersion: (
      formId: string,
      data: FormVersionRequest,
      params: RequestParams = {},
    ) =>
      this.request<FormVersion, any>({
        path: `/api/forms/${formId}/versions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormVersions
     * @name GetFormVersion
     * @summary Get by ID
     * @request GET:/api/forms/{formId}/versions/{id}
     * @secure
     * @response `200` `FormVersion` Success
     */
    getFormVersion: (formId: string, id: string, params: RequestParams = {}) =>
      this.request<FormVersion, any>({
        path: `/api/forms/${formId}/versions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormVersions
     * @name ReplaceFormVersion
     * @summary Replace
     * @request PUT:/api/forms/{formId}/versions/{id}
     * @secure
     * @response `200` `FormVersion` Success
     */
    replaceFormVersion: (
      formId: string,
      id: string,
      data: FormVersionUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<FormVersion, any>({
        path: `/api/forms/${formId}/versions/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FormVersions
     * @name DeleteFormVersion
     * @summary Delete
     * @request DELETE:/api/forms/{formId}/versions/{id}
     * @secure
     * @response `200` `FormVersion` Success
     */
    deleteFormVersion: (
      formId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<FormVersion, any>({
        path: `/api/forms/${formId}/versions/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name GetLoanData
     * @summary Get By ID
     * @request GET:/api/los/loan/application/{loanID}
     * @secure
     * @response `200` `Record<string,any>` Success
     */
    getLoanData: (loanId: string, params: RequestParams = {}) =>
      this.request<Record<string, any>, any>({
        path: `/api/los/loan/application/${loanId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name UpdateLoan
     * @summary Update Loan
     * @request PATCH:/api/los/loan/application/{loanID}
     * @secure
     * @response `200` `string` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    updateLoan: (
      loanId: string,
      data: JsonPatchDocument,
      params: RequestParams = {},
    ) =>
      this.request<string, UnprocessableEntity>({
        path: `/api/los/loan/application/${loanId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name GetLoansReport
     * @summary Get Report
     * @request POST:/api/los/loan/reports
     * @secure
     * @response `200` `GetReport` Success
     */
    getLoansReport: (data: GetReportRequest, params: RequestParams = {}) =>
      this.request<GetReport, any>({
        path: `/api/los/loan/reports`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name CreateLoan
     * @summary Create Loan
     * @request POST:/api/los/loan/application
     * @secure
     * @response `200` `string` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    createLoan: (data: any, params: RequestParams = {}) =>
      this.request<string, UnprocessableEntity>({
        path: `/api/los/loan/application`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name GetTaskDocumentsByLoan
     * @summary Get Documents
     * @request GET:/api/los/loan/tasks/documents/{loanID}
     * @secure
     * @response `200` `(DocumentData)[]` Success
     */
    getTaskDocumentsByLoan: (
      loanId: string,
      query?: {
        /** @default true */
        includeBase64?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<DocumentData[], any>({
        path: `/api/los/loan/tasks/documents/${loanId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name GetLoanDocumentContent
     * @summary Get Document Content
     * @request GET:/api/los/loan/{loanID}/document/{documentId}/content
     * @secure
     * @response `200` `void` Success
     */
    getLoanDocumentContent: (
      loanId: string,
      documentId: string,
      query?: {
        /** @default "base64" */
        contentType?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/los/loan/${loanId}/document/${documentId}/content`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name GetLoanRecipients
     * @summary Get Loan Recipients
     * @request GET:/api/los/loan/recipients/{loanID}
     * @secure
     * @response `204` `void` No Content
     */
    getLoanRecipients: (loanId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/los/loan/recipients/${loanId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name GetLoanContactInformation
     * @summary Get Contact Information
     * @request GET:/api/los/loan/contacts/{loanID}
     * @secure
     * @response `200` `Record<string,ContactRowData>` Success
     */
    getLoanContactInformation: (loanId: string, params: RequestParams = {}) =>
      this.request<Record<string, ContactRowData>, any>({
        path: `/api/los/loan/contacts/${loanId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name GetPreliminaryConditionsForLoan
     * @summary Get Preliminary Conditions
     * @request GET:/api/los/loan/{loanID}/conditions/preliminary
     * @secure
     * @response `200` `(PreliminaryCondition)[]` Success
     */
    getPreliminaryConditionsForLoan: (
      loanId: string,
      params: RequestParams = {},
    ) =>
      this.request<PreliminaryCondition[], any>({
        path: `/api/los/loan/${loanId}/conditions/preliminary`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name GetUnderwritingConditionsForLoan
     * @summary Get Underwriting Conditions
     * @request GET:/api/los/loan/{loanID}/conditions/underwriting
     * @secure
     * @response `200` `(UnderwritingCondition)[]` Success
     */
    getUnderwritingConditionsForLoan: (
      loanId: string,
      params: RequestParams = {},
    ) =>
      this.request<UnderwritingCondition[], any>({
        path: `/api/los/loan/${loanId}/conditions/underwriting`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name GetLoanEmbeddedSigningLink
     * @summary Get Embedded Signing Link
     * @request POST:/api/los/loan/embeddedsigning/{envelopeId}/{userName}/{email}
     * @secure
     * @response `200` `string` Success
     */
    getLoanEmbeddedSigningLink: (
      envelopeId: string,
      userName: string,
      email: string,
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/api/los/loan/embeddedsigning/${envelopeId}/${userName}/${email}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name CreateLegacyLoanDocument
     * @summary Create Document
     * @request POST:/api/los/loan/generatedocument
     * @deprecated
     * @secure
     * @response `200` `DocumentDataRequest` Success
     */
    createLegacyLoanDocument: (
      data: GenerateDocumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<DocumentDataRequest, any>({
        path: `/api/los/loan/generatedocument`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ListingFiles
     * @name AddListingFile
     * @summary Add
     * @request POST:/api/listings/{listingId}/files
     * @secure
     * @response `200` `ListingFile` Success
     */
    addListingFile: (
      listingId: string,
      data: {
        /** @format binary */
        file?: File;
        /** @format int32 */
        weight?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ListingFile, any>({
        path: `/api/listings/${listingId}/files`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ListingFiles
     * @name UpdateListingFiles
     * @summary Update
     * @request PATCH:/api/listings/{listingId}/files
     * @secure
     * @response `200` `ListingFile` Success
     */
    updateListingFiles: (
      listingId: string,
      data: JsonPatchDocument,
      params: RequestParams = {},
    ) =>
      this.request<ListingFile, any>({
        path: `/api/listings/${listingId}/files`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ListingFiles
     * @name RemoveListingFile
     * @summary Remove
     * @request DELETE:/api/listings/{listingId}/files/{id}
     * @secure
     * @response `204` `Listing` No Content
     */
    removeListingFile: (
      listingId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<Listing, any>({
        path: `/api/listings/${listingId}/files/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ListingPhotos
     * @name AddListingPhoto
     * @summary Add
     * @request POST:/api/listings/{listingId}/photos
     * @secure
     * @response `200` `ListingPhoto` Success
     */
    addListingPhoto: (
      listingId: string,
      data: {
        name?: string;
        description?: string;
        /** @format binary */
        file?: File;
        /** @format int32 */
        weight?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ListingPhoto, any>({
        path: `/api/listings/${listingId}/photos`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ListingPhotos
     * @name UpdateListingPhotos
     * @summary Update
     * @request PATCH:/api/listings/{listingId}/photos
     * @secure
     * @response `200` `(ListingPhoto)[]` Success
     */
    updateListingPhotos: (
      listingId: string,
      data: JsonPatchDocument,
      params: RequestParams = {},
    ) =>
      this.request<ListingPhoto[], any>({
        path: `/api/listings/${listingId}/photos`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ListingPhotos
     * @name RemoveListingPhoto
     * @summary Remove
     * @request DELETE:/api/listings/{listingId}/photos/{id}
     * @secure
     * @response `204` `Listing` No Content
     */
    removeListingPhoto: (
      listingId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<Listing, any>({
        path: `/api/listings/${listingId}/photos/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Listings
     * @name GetListings
     * @summary Get All
     * @request GET:/api/listings
     * @secure
     * @response `200` `ListingPaginated` Success
     */
    getListings: (
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ListingPaginated, any>({
        path: `/api/listings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Listings
     * @name CreateListing
     * @summary Create
     * @request POST:/api/listings
     * @secure
     * @response `201` `Listing` Created
     */
    createListing: (data: ListingRequest, params: RequestParams = {}) =>
      this.request<Listing, any>({
        path: `/api/listings`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Listings
     * @name GetListingBySlug
     * @summary Get by Slug
     * @request GET:/api/listings/slug/{slug}
     * @secure
     * @response `200` `Listing` Success
     */
    getListingBySlug: (slug: string, params: RequestParams = {}) =>
      this.request<Listing, any>({
        path: `/api/listings/slug/${slug}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Listings
     * @name GetListing
     * @summary Get by ID
     * @request GET:/api/listings/{id}
     * @secure
     * @response `200` `Listing` Success
     */
    getListing: (id: string, params: RequestParams = {}) =>
      this.request<Listing, any>({
        path: `/api/listings/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Listings
     * @name ReplaceListing
     * @summary Replace
     * @request PUT:/api/listings/{id}
     * @secure
     * @response `200` `Listing` Success
     */
    replaceListing: (
      id: string,
      data: ListingRequest,
      params: RequestParams = {},
    ) =>
      this.request<Listing, any>({
        path: `/api/listings/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Listings
     * @name DeleteListing
     * @summary Delete
     * @request DELETE:/api/listings/{id}
     * @secure
     * @response `204` `void` No Content
     */
    deleteListing: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/listings/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Listings
     * @name SearchListings
     * @summary Search
     * @request POST:/api/listings/search
     * @secure
     * @response `200` `ListingPaginated` Success
     */
    searchListings: (
      data: ListingSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ListingPaginated, any>({
        path: `/api/listings/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Listings
     * @name UpdateListingBackgroundImage
     * @summary Update Background Image
     * @request PUT:/api/listings/{id}/background-image
     * @secure
     * @response `200` `File` Success
     */
    updateListingBackgroundImage: (
      id: string,
      data: {
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/api/listings/${id}/background-image`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Listings
     * @name DeleteListingBackgroundImage
     * @summary Delete Background Image
     * @request DELETE:/api/listings/{id}/background-image
     * @secure
     * @response `204` `void` No Content
     */
    deleteListingBackgroundImage: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/listings/${id}/background-image`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Listings
     * @name GetListingOpenHouseFlyer
     * @summary Get Open House Flyer
     * @request GET:/api/listings/{id}/open-house-flyer
     * @secure
     * @response `200` `File` Success
     */
    getListingOpenHouseFlyer: (id: string, params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/api/listings/${id}/open-house-flyer`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanCalculators
     * @name GetLoanCalculator
     * @summary Get
     * @request GET:/api/loans/{loanID}/calculators/loan-calculator
     * @secure
     * @response `200` `RunLOCalculation` Success
     */
    getLoanCalculator: (loanId: string, params: RequestParams = {}) =>
      this.request<RunLOCalculation, any>({
        path: `/api/loans/${loanId}/calculators/loan-calculator`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanCalculators
     * @name RunLoanCalculator
     * @summary Run
     * @request POST:/api/loans/{loanID}/calculators/loan-calculator
     * @secure
     * @response `200` `RunLOCalculation` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    runLoanCalculator: (
      loanId: string,
      data: RunLOCalculationRequest,
      params: RequestParams = {},
    ) =>
      this.request<RunLOCalculation, UnprocessableEntity>({
        path: `/api/loans/${loanId}/calculators/loan-calculator`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanComparison
     * @name GetLoanComparisons
     * @summary Get All
     * @request GET:/api/loans/{loanID}/loan-comparison
     * @secure
     * @response `200` `LoanComparison` Success
     */
    getLoanComparisons: (loanId: string, params: RequestParams = {}) =>
      this.request<LoanComparison, any>({
        path: `/api/loans/${loanId}/loan-comparison`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanComparison
     * @name CreateLoanComparison
     * @summary Create
     * @request POST:/api/loans/{loanID}/loan-comparison/{index}
     * @secure
     * @response `201` `LoanComparisonScenario` Created
     * @response `422` `UnprocessableEntity` Client Error
     */
    createLoanComparison: (
      loanId: string,
      index: number,
      data: LoanComparisonScenario,
      params: RequestParams = {},
    ) =>
      this.request<LoanComparisonScenario, UnprocessableEntity>({
        path: `/api/loans/${loanId}/loan-comparison/${index}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanComparison
     * @name DeleteLoanComparison
     * @summary Delete
     * @request DELETE:/api/loans/{loanID}/loan-comparison/{index}
     * @secure
     * @response `204` `void` No Content
     */
    deleteLoanComparison: (
      loanId: string,
      index: number,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/loans/${loanId}/loan-comparison/${index}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanComparison
     * @name CreateLoanComparisonPdf
     * @summary Create PDF
     * @request POST:/api/loans/{loanID}/loan-comparison/pdf
     * @secure
     * @response `204` `void` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    createLoanComparisonPdf: (
      loanId: string,
      data: PostLoanComparisonPdfRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/loans/${loanId}/loan-comparison/pdf`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDocumentBuckets
     * @name GetLoanDocumentBuckets
     * @summary Get All
     * @request GET:/api/loans/{loanId}/documents/buckets
     * @secure
     * @response `200` `(string)[]` Success
     */
    getLoanDocumentBuckets: (loanId: string, params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/loans/${loanId}/documents/buckets`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDocumentBuckets
     * @name CreateLoanDocumentBuckets
     * @summary Create
     * @request POST:/api/loans/{loanId}/documents/buckets
     * @secure
     * @response `201` `(string)[]` Created
     */
    createLoanDocumentBuckets: (
      loanId: string,
      data: string[],
      params: RequestParams = {},
    ) =>
      this.request<string[], any>({
        path: `/api/loans/${loanId}/documents/buckets`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDocuments
     * @name GetLoanDocument
     * @summary Get By ID
     * @request GET:/api/loans/{loanId}/documents/{documentId}
     * @secure
     * @response `200` `LoanDocument` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getLoanDocument: (
      loanId: string,
      documentId: string,
      query?: {
        /** @default false */
        preview?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<LoanDocument, ProblemDetails>({
        path: `/api/loans/${loanId}/documents/${documentId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDocuments
     * @name DownloadLoanDocument
     * @summary Download By ID
     * @request GET:/api/loans/{loanId}/documents/{documentId}/download
     * @secure
     * @response `200` `string` Success
     * @response `404` `ProblemDetails` Not Found
     */
    downloadLoanDocument: (
      loanId: string,
      documentId: string,
      params: RequestParams = {},
    ) =>
      this.request<string, ProblemDetails>({
        path: `/api/loans/${loanId}/documents/${documentId}/download`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDocuments
     * @name CreateLoanDocument
     * @summary Create
     * @request POST:/api/loans/{loanId}/documents
     * @secure
     * @response `201` `LoanDocument` Created
     * @response `404` `ProblemDetails` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    createLoanDocument: (
      loanId: string,
      data: {
        name?: string;
        /** @format binary */
        file?: File;
        bucket?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LoanDocument, ProblemDetails | UnprocessableEntity>({
        path: `/api/loans/${loanId}/documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDocuments
     * @name RetryFailedLoanDocument
     * @summary Retry
     * @request POST:/api/loans/{loanId}/documents/{documentId}/retry
     * @secure
     * @response `200` `LoanDocument` Success
     * @response `404` `ProblemDetails` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    retryFailedLoanDocument: (
      loanId: string,
      documentId: string,
      params: RequestParams = {},
    ) =>
      this.request<LoanDocument, ProblemDetails | UnprocessableEntity>({
        path: `/api/loans/${loanId}/documents/${documentId}/retry`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDocuments
     * @name GenerateLoanDocument
     * @summary Generate PDF Document
     * @request POST:/api/loans/{loanId}/documents/generate
     * @secure
     * @response `200` `DocumentDataRequest` Success
     */
    generateLoanDocument: (
      loanId: string,
      data: GenerateDocumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<DocumentDataRequest, any>({
        path: `/api/loans/${loanId}/documents/generate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDrafts
     * @name CreateLoanDraft
     * @summary Create
     * @request POST:/api/loans/drafts
     * @secure
     * @response `201` `Draft` Created
     */
    createLoanDraft: (data: DraftRequest, params: RequestParams = {}) =>
      this.request<Draft, any>({
        path: `/api/loans/drafts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDrafts
     * @name GetLoanDrafts
     * @summary Get All
     * @request GET:/api/loans/drafts
     * @secure
     * @response `200` `(DraftContent)[]` Success
     */
    getLoanDrafts: (params: RequestParams = {}) =>
      this.request<DraftContent[], any>({
        path: `/api/loans/drafts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDrafts
     * @name GetLoanDraft
     * @summary Get by ID
     * @request GET:/api/loans/drafts/{draftId}
     * @secure
     * @response `200` `DraftContent` Success
     */
    getLoanDraft: (draftId: string, params: RequestParams = {}) =>
      this.request<DraftContent, any>({
        path: `/api/loans/drafts/${draftId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDrafts
     * @name ReplaceLoanDraft
     * @summary Replace
     * @request PUT:/api/loans/drafts/{draftId}
     * @secure
     * @response `200` `Draft` Success
     */
    replaceLoanDraft: (
      draftId: string,
      data: DraftRequest,
      params: RequestParams = {},
    ) =>
      this.request<Draft, any>({
        path: `/api/loans/drafts/${draftId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDrafts
     * @name DeleteLoanDraft
     * @summary Delete
     * @request DELETE:/api/loans/drafts/{draftId}
     * @secure
     * @response `204` `void` No Content
     */
    deleteLoanDraft: (draftId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/loans/drafts/${draftId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDrafts
     * @name SearchLoanDrafts
     * @summary Search
     * @request POST:/api/loans/drafts/search
     * @secure
     * @response `201` `DraftContentPaginated` Created
     */
    searchLoanDrafts: (
      data: LoanDraftSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DraftContentPaginated, any>({
        path: `/api/loans/drafts/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanDrafts
     * @name ReassignLoanOfficer
     * @summary Reassign Loan officer
     * @request PUT:/api/loans/drafts/{draftId}/reassign
     * @secure
     * @response `200` `Draft` Success
     */
    reassignLoanOfficer: (
      draftId: string,
      data: DraftLoanOfficerReassignRequest,
      params: RequestParams = {},
    ) =>
      this.request<Draft, any>({
        path: `/api/loans/drafts/${draftId}/reassign`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanImport
     * @name GetLoanImports
     * @summary Get Loan Imports
     * @request GET:/api/loan-imports
     * @secure
     * @response `200` `LoanImportPaginated` Success
     */
    getLoanImports: (
      query?: {
        status?: LoanImportStatus;
        searchText?: string;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LoanImportPaginated, any>({
        path: `/api/loan-imports`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanImport
     * @name CreateLoanImport
     * @summary Create Loan Import
     * @request POST:/api/loan-imports
     * @secure
     * @response `201` `LoanImport` Created
     */
    createLoanImport: (
      data: CreateLoanImportRequest,
      params: RequestParams = {},
    ) =>
      this.request<LoanImport, any>({
        path: `/api/loan-imports`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanImport
     * @name GetLoanImport
     * @summary Get Loan Import
     * @request GET:/api/loan-imports/{id}
     * @secure
     * @response `200` `LoanImport` Success
     */
    getLoanImport: (id: string, params: RequestParams = {}) =>
      this.request<LoanImport, any>({
        path: `/api/loan-imports/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanInvites
     * @name GetLoanInvites
     * @summary Get Invites
     * @request GET:/api/loans/{loanId}/invites
     * @secure
     * @response `200` `(Invite)[]` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getLoanInvites: (loanId: string, params: RequestParams = {}) =>
      this.request<Invite[], ProblemDetails>({
        path: `/api/loans/${loanId}/invites`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanInvites
     * @name InviteLoanContacts
     * @summary Invite Contacts
     * @request POST:/api/loans/{loanId}/invites
     * @secure
     * @response `200` `(Invite)[]` Success
     * @response `404` `ProblemDetails` Not Found
     */
    inviteLoanContacts: (
      loanId: string,
      data: string[],
      params: RequestParams = {},
    ) =>
      this.request<Invite[], ProblemDetails>({
        path: `/api/loans/${loanId}/invites`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanOfficers
     * @name GetLoanOfficers
     * @summary Get All
     * @request GET:/api/loan-officers
     * @secure
     * @response `200` `BranchUserPaginated` Success
     */
    getLoanOfficers: (
      query?: {
        showAll?: boolean;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BranchUserPaginated, any>({
        path: `/api/loan-officers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanOfficers
     * @name SearchLoanOfficers
     * @summary Search
     * @request POST:/api/loan-officers/search
     * @secure
     * @response `200` `BranchUserPaginated` Success
     */
    searchLoanOfficers: (
      data: LoanOfficerSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BranchUserPaginated, any>({
        path: `/api/loan-officers/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanOfficers
     * @name GetLoanOfficer
     * @summary Get by ID
     * @request GET:/api/loan-officers/{id}
     * @secure
     * @response `200` `BranchUser` Success
     */
    getLoanOfficer: (id: string, params: RequestParams = {}) =>
      this.request<BranchUser, any>({
        path: `/api/loan-officers/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanOfficers
     * @name GetLoanOfficerLoans
     * @summary Get Loans
     * @request GET:/api/loan-officers/applications
     * @secure
     * @response `200` `GetApplications` Success
     */
    getLoanOfficerLoans: (params: RequestParams = {}) =>
      this.request<GetApplications, any>({
        path: `/api/loan-officers/applications`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanOfficers
     * @name CreateLoanOfficerSiteConfiguration
     * @summary Create Site Configuration
     * @request POST:/api/loan-officers/{loanOfficerId}/site-configurations
     * @secure
     * @response `200` `SiteConfiguration` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    createLoanOfficerSiteConfiguration: (
      loanOfficerId: string,
      data: SiteConfigurationRequest,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntity>({
        path: `/api/loan-officers/${loanOfficerId}/site-configurations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanOfficers
     * @name GetLoanOfficerSiteConfiguration
     * @summary Get Site Configuration
     * @request GET:/api/loan-officers/{loanOfficerId}/site-configurations/{siteConfigurationId}
     * @secure
     * @response `200` `SiteConfigurationWithInherited` Success
     */
    getLoanOfficerSiteConfiguration: (
      loanOfficerId: string,
      siteConfigurationId: string,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfigurationWithInherited, any>({
        path: `/api/loan-officers/${loanOfficerId}/site-configurations/${siteConfigurationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanOfficers
     * @name ReplaceLoanOfficerSiteConfiguration
     * @summary Replace Site Configuration
     * @request PUT:/api/loan-officers/{loanOfficerId}/site-configurations/{siteConfigurationId}
     * @secure
     * @response `200` `SiteConfiguration` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceLoanOfficerSiteConfiguration: (
      loanOfficerId: string,
      siteConfigurationId: string,
      data: SiteConfigurationRequest,
      query?: {
        applyToChildren?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntity>({
        path: `/api/loan-officers/${loanOfficerId}/site-configurations/${siteConfigurationId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanQueue
     * @name SearchLoanQueue
     * @summary Search
     * @request POST:/api/loans/queue/search
     * @secure
     * @response `200` `LoanQueuePaginated` Success
     */
    searchLoanQueue: (
      data: LoanQueueSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LoanQueuePaginated, any>({
        path: `/api/loans/queue/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanQueue
     * @name GetLoanQueue
     * @summary Get Loan Queue Record
     * @request GET:/api/loans/queue/{loanQueueId}
     * @secure
     * @response `200` `any` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getLoanQueue: (loanQueueId: string, params: RequestParams = {}) =>
      this.request<any, ProblemDetails>({
        path: `/api/loans/queue/${loanQueueId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanQueue
     * @name ReplaceLoanQueue
     * @summary Replace Loan Queue Record
     * @request PUT:/api/loans/queue/{loanQueueId}
     * @secure
     * @response `200` `LoanQueueWithData` Success
     * @response `404` `ProblemDetails` Not Found
     */
    replaceLoanQueue: (
      loanQueueId: string,
      data: UpdateLoanQueueRequest,
      params: RequestParams = {},
    ) =>
      this.request<LoanQueueWithData, ProblemDetails>({
        path: `/api/loans/queue/${loanQueueId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanQueue
     * @name DeleteLoanQueue
     * @summary Delete Loan Queue Item
     * @request DELETE:/api/loans/queue/{loanQueueId}
     * @secure
     * @response `204` `void` No Content
     * @response `404` `ProblemDetails` Not Found
     */
    deleteLoanQueue: (loanQueueId: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/loans/queue/${loanQueueId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanQueue
     * @name RetryLoanQueue
     * @summary Retry
     * @request POST:/api/loans/queue/{loanQueueId}/retry
     * @secure
     * @response `204` `void` No Content
     * @response `404` `ProblemDetails` Not Found
     */
    retryLoanQueue: (loanQueueId: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/loans/queue/${loanQueueId}/retry`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Loans
     * @name GetLoans
     * @summary Get Loans
     * @request GET:/api/loans
     * @secure
     * @response `200` `GetApplications` Success
     */
    getLoans: (params: RequestParams = {}) =>
      this.request<GetApplications, any>({
        path: `/api/loans`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Loans
     * @name GetLoansByAccountSetting
     * @summary Get Loans by Account Setting
     * @request POST:/api/loans/temp-pipeline
     * @secure
     * @response `200` `any` Success
     */
    getLoansByAccountSetting: (
      data: LoanSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, any>({
        path: `/api/loans/temp-pipeline`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Loans
     * @name GetLoan
     * @summary Get By ID
     * @request GET:/api/loans/{loanID}
     * @secure
     * @response `200` `Loan` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getLoan: (loanId: string, params: RequestParams = {}) =>
      this.request<Loan, ProblemDetails>({
        path: `/api/loans/${loanId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Loans
     * @name SearchLoans
     * @summary Search
     * @request POST:/api/loans/search
     * @secure
     * @response `200` `ExtendedLoanPaginated` Success
     */
    searchLoans: (
      data: LoanSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExtendedLoanPaginated, any>({
        path: `/api/loans/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Loans
     * @name ImportLoanFromLos
     * @summary Import from LOS
     * @request POST:/api/loans/{loanId}/import-from-los
     * @secure
     * @response `200` `Loan` Success
     */
    importLoanFromLos: (loanId: string, params: RequestParams = {}) =>
      this.request<Loan, any>({
        path: `/api/loans/${loanId}/import-from-los`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTaskComments
     * @name SearchLoanTaskComments
     * @summary Search
     * @request POST:/api/loans/{loanId}/tasks/{userLoanTaskId}/comments/search
     * @secure
     * @response `200` `TaskCommentPaginated` Success
     * @response `404` `ProblemDetails` Not Found
     */
    searchLoanTaskComments: (
      loanId: string,
      userLoanTaskId: string,
      data: TaskCommentSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TaskCommentPaginated, ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/${userLoanTaskId}/comments/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTaskComments
     * @name GetLoanTaskComment
     * @summary Get by ID
     * @request GET:/api/loans/{loanId}/tasks/{userLoanTaskId}/comments/{id}
     * @secure
     * @response `200` `TaskComment` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getLoanTaskComment: (
      id: string,
      loanId: string,
      userLoanTaskId: string,
      params: RequestParams = {},
    ) =>
      this.request<TaskComment, ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/${userLoanTaskId}/comments/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTaskComments
     * @name CreateLoanTaskComment
     * @summary Create
     * @request POST:/api/loans/{loanId}/tasks/{userLoanTaskId}/comments
     * @secure
     * @response `201` `TaskComment` Created
     * @response `404` `ProblemDetails` Not Found
     */
    createLoanTaskComment: (
      loanId: string,
      userLoanTaskId: string,
      data: TaskCommentRequest,
      params: RequestParams = {},
    ) =>
      this.request<TaskComment, ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/${userLoanTaskId}/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTaskComments
     * @name ReplaceLoanTaskComment
     * @summary Replace
     * @request PUT:/api/loans/{loanId}/tasks/{userLoanTaskId}/comments/{commentId}
     * @secure
     * @response `200` `TaskComment` Success
     * @response `404` `ProblemDetails` Not Found
     */
    replaceLoanTaskComment: (
      loanId: string,
      userLoanTaskId: string,
      commentId: string,
      data: TaskCommentRequest,
      params: RequestParams = {},
    ) =>
      this.request<TaskComment, ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/${userLoanTaskId}/comments/${commentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTaskComments
     * @name DeleteLoanTaskComment
     * @summary Delete
     * @request DELETE:/api/loans/{loanId}/tasks/{userLoanTaskId}/comments/{commentId}
     * @secure
     * @response `204` `void` No Content
     * @response `404` `ProblemDetails` Not Found
     */
    deleteLoanTaskComment: (
      loanId: string,
      userLoanTaskId: string,
      commentId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/${userLoanTaskId}/comments/${commentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTaskDocuments
     * @name CreateLoanTaskDocument
     * @summary Create
     * @request POST:/api/loans/{loanID}/tasks/{loanTaskId}/documents
     * @secure
     * @response `201` `UserLoanTask` Created
     * @response `404` `ProblemDetails` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    createLoanTaskDocument: (
      loanId: string,
      loanTaskId: string,
      data: {
        name?: string;
        /** @format binary */
        file?: File;
        bucket?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserLoanTask, ProblemDetails | UnprocessableEntity>({
        path: `/api/loans/${loanId}/tasks/${loanTaskId}/documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTaskDocuments
     * @name CreateLoanTaskDocumentBucket
     * @summary Create Bucket
     * @request POST:/api/loans/{loanID}/tasks/{loanTaskId}/documents/bucket
     * @secure
     * @response `204` `UserLoanTask` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    createLoanTaskDocumentBucket: (
      loanId: string,
      loanTaskId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserLoanTask, UnprocessableEntity>({
        path: `/api/loans/${loanId}/tasks/${loanTaskId}/documents/bucket`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTasks
     * @name GetLoanTasks
     * @summary Get All
     * @request GET:/api/loans/{loanID}/tasks
     * @secure
     * @response `200` `(UserLoanTask)[]` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getLoanTasks: (loanId: string, params: RequestParams = {}) =>
      this.request<UserLoanTask[], ProblemDetails>({
        path: `/api/loans/${loanId}/tasks`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTasks
     * @name GetLoanTask
     * @summary Get by ID
     * @request GET:/api/loans/{loanID}/tasks/{id}
     * @secure
     * @response `200` `UserLoanTask` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getLoanTask: (id: string, loanId: string, params: RequestParams = {}) =>
      this.request<UserLoanTask, ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the difference between the current loan tasks and the tasks generated by business rules
     *
     * @tags LoanTasks
     * @name GetLoanTaskDifference
     * @summary Get Difference
     * @request GET:/api/loans/{loanID}/tasks/diff
     * @secure
     * @response `200` `(UserLoanTask)[]` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getLoanTaskDifference: (loanId: string, params: RequestParams = {}) =>
      this.request<UserLoanTask[], ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/diff`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTasks
     * @name CreateLoanTask
     * @summary Create
     * @request POST:/api/loans/{loanID}/tasks/{taskID}
     * @secure
     * @response `201` `UserLoanTask` Created
     * @response `404` `ProblemDetails` Not Found
     */
    createLoanTask: (
      loanId: string,
      taskId: string,
      data: UserLoanTaskRequest,
      params: RequestParams = {},
    ) =>
      this.request<UserLoanTask, ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/${taskId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTasks
     * @name ImportLoanTask
     * @summary Import
     * @request POST:/api/loans/{loanID}/tasks/import
     * @secure
     * @response `201` `(UserLoanTask)[]` Created
     * @response `404` `ProblemDetails` Not Found
     */
    importLoanTask: (
      loanId: string,
      data: ImportUserLoanTaskRequest[],
      params: RequestParams = {},
    ) =>
      this.request<UserLoanTask[], ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTasks
     * @name ReplaceLoanTask
     * @summary Replace
     * @request PUT:/api/loans/{loanID}/tasks/{userLoanTaskID}
     * @secure
     * @response `200` `UserLoanTask` Success
     * @response `404` `ProblemDetails` Not Found
     */
    replaceLoanTask: (
      loanId: string,
      userLoanTaskId: string,
      data: UserLoanTaskUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<UserLoanTask, ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/${userLoanTaskId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTasks
     * @name DeleteLoanTask
     * @summary Delete
     * @request DELETE:/api/loans/{loanID}/tasks/{userLoanTaskID}
     * @secure
     * @response `204` `void` No Content
     * @response `404` `ProblemDetails` Not Found
     */
    deleteLoanTask: (
      loanId: string,
      userLoanTaskId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/${userLoanTaskId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTasks
     * @name SendOutstandingLoanTaskNotification
     * @summary Send Outstanding Task Notification
     * @request POST:/api/loans/{loanID}/tasks/reminders/outstanding
     * @secure
     * @response `204` `void` No Content
     * @response `404` `ProblemDetails` Not Found
     */
    sendOutstandingLoanTaskNotification: (
      loanId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/reminders/outstanding`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanTaskVerifications
     * @name CreateLoanTaskVerification
     * @summary Create
     * @request POST:/api/loans/{loanID}/tasks/{loanTaskId}/verifications
     * @secure
     * @response `200` `UserLoanTask` Success
     * @response `404` `ProblemDetails` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    createLoanTaskVerification: (
      loanId: string,
      loanTaskId: string,
      params: RequestParams = {},
    ) =>
      this.request<UserLoanTask, ProblemDetails | UnprocessableEntity>({
        path: `/api/loans/${loanId}/tasks/${loanTaskId}/verifications`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanUsers
     * @name GetLoanUser
     * @summary Get Loan User
     * @request GET:/api/loans/{loanId}/users/{userId}
     * @secure
     * @response `200` `LoanUser` Success
     */
    getLoanUser: (loanId: string, userId: string, params: RequestParams = {}) =>
      this.request<LoanUser, any>({
        path: `/api/loans/${loanId}/users/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanUsers
     * @name AddLoanUser
     * @summary Add User to Loan
     * @request POST:/api/loans/{loanId}/users/{userId}
     * @secure
     * @response `201` `LoanUser` Created
     */
    addLoanUser: (loanId: string, userId: string, params: RequestParams = {}) =>
      this.request<LoanUser, any>({
        path: `/api/loans/${loanId}/users/${userId}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanUsers
     * @name SendLoanUserInviteReminderNotification
     * @summary Send Invite Reminder Notification
     * @request POST:/api/loans/{loanId}/users/{userId}/invite-reminder
     * @secure
     * @response `204` `void` No Content
     */
    sendLoanUserInviteReminderNotification: (
      loanId: string,
      userId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/loans/${loanId}/users/${userId}/invite-reminder`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Milestones
     * @name GetMilestones
     * @summary Get All
     * @request GET:/api/milestones
     * @secure
     * @response `200` `(MilestoneConfiguration)[]` Success
     */
    getMilestones: (params: RequestParams = {}) =>
      this.request<MilestoneConfiguration[], any>({
        path: `/api/milestones`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Milestones
     * @name CreateMilestone
     * @summary Create
     * @request POST:/api/milestones
     * @secure
     * @response `201` `MilestoneConfiguration` Created
     * @response `422` `UnprocessableEntity` Client Error
     */
    createMilestone: (
      data: MilestoneConfigurationRequest,
      params: RequestParams = {},
    ) =>
      this.request<MilestoneConfiguration, UnprocessableEntity>({
        path: `/api/milestones`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Milestones
     * @name GetMilestone
     * @summary Get By ID
     * @request GET:/api/milestones/{id}
     * @secure
     * @response `200` `MilestoneConfiguration` Success
     * @response `404` `Error` Not Found
     */
    getMilestone: (id: string, params: RequestParams = {}) =>
      this.request<MilestoneConfiguration, Error>({
        path: `/api/milestones/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Milestones
     * @name ReplaceMilestone
     * @summary Replace
     * @request PUT:/api/milestones/{id}
     * @secure
     * @response `200` `MilestoneConfiguration` Success
     * @response `404` `Error` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceMilestone: (
      id: string,
      data: MilestoneConfigurationRequest,
      params: RequestParams = {},
    ) =>
      this.request<MilestoneConfiguration, Error | UnprocessableEntity>({
        path: `/api/milestones/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Milestones
     * @name DeleteMilestone
     * @summary Delete
     * @request DELETE:/api/milestones/{id}
     * @secure
     * @response `204` `void` No Content
     * @response `404` `Error` Not Found
     */
    deleteMilestone: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/api/milestones/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name SendNotificationForLoan
     * @summary Send Notification for Loan
     * @request POST:/api/notifications
     * @secure
     * @response `200` `void` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    sendNotificationForLoan: (
      data: SendNotificationForLoanRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/notifications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name SendTestNotificationForLoan
     * @summary Send Test Notification for Loan
     * @request POST:/api/notifications/test
     * @secure
     * @response `200` `void` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    sendTestNotificationForLoan: (
      data: TestSendNotificationForLoanRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/notifications/test`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name GetNotificationTemplates
     * @summary Get All
     * @request GET:/api/notification-templates
     * @secure
     * @response `200` `(NotificationTemplateBase)[]` Success
     */
    getNotificationTemplates: (
      query?: {
        showAll?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<NotificationTemplateBase[], any>({
        path: `/api/notification-templates`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name CreateNotificationTemplate
     * @summary Create
     * @request POST:/api/notification-templates
     * @secure
     * @response `201` `NotificationTemplate` Created
     * @response `422` `UnprocessableEntity` Client Error
     */
    createNotificationTemplate: (
      data: NotificationTemplateRequest,
      params: RequestParams = {},
    ) =>
      this.request<NotificationTemplate, UnprocessableEntity>({
        path: `/api/notification-templates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name GetNotificationTemplate
     * @summary Get by ID
     * @request GET:/api/notification-templates/{id}
     * @secure
     * @response `200` `NotificationTemplate` Success
     */
    getNotificationTemplate: (id: string, params: RequestParams = {}) =>
      this.request<NotificationTemplate, any>({
        path: `/api/notification-templates/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name ReplaceNotificationTemplate
     * @summary Replace
     * @request PUT:/api/notification-templates/{id}
     * @secure
     * @response `200` `NotificationTemplate` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceNotificationTemplate: (
      id: string,
      data: NotificationTemplateRequest,
      params: RequestParams = {},
    ) =>
      this.request<NotificationTemplate, UnprocessableEntity>({
        path: `/api/notification-templates/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name DeleteNotificationTemplate
     * @summary Delete
     * @request DELETE:/api/notification-templates/{id}
     * @secure
     * @response `204` `void` No Content
     */
    deleteNotificationTemplate: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/notification-templates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name RestoreNotificationTemplate
     * @summary Restore
     * @request POST:/api/notification-templates/{id}/restore
     * @secure
     * @response `200` `NotificationTemplate` Success
     */
    restoreNotificationTemplate: (id: string, params: RequestParams = {}) =>
      this.request<NotificationTemplate, any>({
        path: `/api/notification-templates/${id}/restore`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplateVersions
     * @name GetNotificationTemplateVersions
     * @summary Get All
     * @request GET:/api/notification-templates/{notificationId}/versions
     * @secure
     * @response `200` `(NotificationTemplateVersion)[]` Success
     */
    getNotificationTemplateVersions: (
      notificationId: string,
      params: RequestParams = {},
    ) =>
      this.request<NotificationTemplateVersion[], any>({
        path: `/api/notification-templates/${notificationId}/versions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplateVersions
     * @name CreateNotificationTemplateVersion
     * @summary Create
     * @request POST:/api/notification-templates/{notificationId}/versions
     * @secure
     * @response `200` `NotificationTemplateVersion` Success
     */
    createNotificationTemplateVersion: (
      notificationId: string,
      data: NotificationTemplateVersionRequest,
      params: RequestParams = {},
    ) =>
      this.request<NotificationTemplateVersion, any>({
        path: `/api/notification-templates/${notificationId}/versions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplateVersions
     * @name GetNotificationTemplateVersion
     * @summary Get by ID
     * @request GET:/api/notification-templates/{notificationId}/versions/{id}
     * @secure
     * @response `200` `NotificationTemplateVersion` Success
     */
    getNotificationTemplateVersion: (
      notificationId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<NotificationTemplateVersion, any>({
        path: `/api/notification-templates/${notificationId}/versions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplateVersions
     * @name ReplaceNotificationTemplateVersion
     * @summary Replace
     * @request PUT:/api/notification-templates/{notificationId}/versions/{id}
     * @secure
     * @response `200` `NotificationTemplateVersion` Success
     */
    replaceNotificationTemplateVersion: (
      notificationId: string,
      id: string,
      data: NotificationTemplateVersionUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<NotificationTemplateVersion, any>({
        path: `/api/notification-templates/${notificationId}/versions/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplateVersions
     * @name DeleteNotificationTemplateVersion
     * @summary Delete
     * @request DELETE:/api/notification-templates/{notificationId}/versions/{id}
     * @secure
     * @response `200` `NotificationTemplateVersion` Success
     */
    deleteNotificationTemplateVersion: (
      notificationId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<NotificationTemplateVersion, any>({
        path: `/api/notification-templates/${notificationId}/versions/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Partners
     * @name GetPartners
     * @summary Get All
     * @request GET:/api/partners
     * @secure
     * @response `200` `BranchUserPaginated` Success
     */
    getPartners: (
      query?: {
        showAll?: boolean;
        /** @default "Realtor" */
        role?:
          | "Borrower"
          | "LoanOfficer"
          | "Admin"
          | "SuperAdmin"
          | "Realtor"
          | "SettlementAgent"
          | "LoanProcessor"
          | "LoanOfficerAssistant"
          | "BranchManager"
          | "SystemAdmin";
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BranchUserPaginated, any>({
        path: `/api/partners`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Partners
     * @name SearchPartners
     * @summary Search
     * @request POST:/api/partners/search
     * @secure
     * @response `200` `BranchUserPaginated` Success
     */
    searchPartners: (
      data: PartnerSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BranchUserPaginated, any>({
        path: `/api/partners/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Partners
     * @name GetPartner
     * @summary Get by ID
     * @request GET:/api/partners/{id}
     * @secure
     * @response `200` `BranchUser` Success
     */
    getPartner: (id: string, params: RequestParams = {}) =>
      this.request<BranchUser, any>({
        path: `/api/partners/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Partners
     * @name CreatePartnerSiteConfiguration
     * @summary Create Site Configuration
     * @request POST:/api/partners/{realtorId}/site-configurations
     * @secure
     * @response `200` `SiteConfiguration` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    createPartnerSiteConfiguration: (
      realtorId: string,
      data: SiteConfigurationRequest,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntity>({
        path: `/api/partners/${realtorId}/site-configurations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Partners
     * @name GetPartnerSiteConfiguration
     * @summary Get Site Configuration
     * @request GET:/api/partners/{realtorId}/site-configurations/{siteConfigurationId}
     * @secure
     * @response `200` `SiteConfigurationWithInherited` Success
     */
    getPartnerSiteConfiguration: (
      realtorId: string,
      siteConfigurationId: string,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfigurationWithInherited, any>({
        path: `/api/partners/${realtorId}/site-configurations/${siteConfigurationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Partners
     * @name ReplacePartnerSiteConfiguration
     * @summary Replace Site Configuration
     * @request PUT:/api/partners/{realtorId}/site-configurations/{siteConfigurationId}
     * @secure
     * @response `200` `SiteConfiguration` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    replacePartnerSiteConfiguration: (
      realtorId: string,
      siteConfigurationId: string,
      data: SiteConfigurationRequest,
      query?: {
        applyToChildren?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntity>({
        path: `/api/partners/${realtorId}/site-configurations/${siteConfigurationId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RequestQueue
     * @name GetRequestQueues
     * @summary Get All
     * @request GET:/api/request-queues
     * @deprecated
     * @secure
     * @response `200` `(RequestQueue)[]` Success
     */
    getRequestQueues: (params: RequestParams = {}) =>
      this.request<RequestQueue[], any>({
        path: `/api/request-queues`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RequestQueue
     * @name RunRequestQueue
     * @summary Run
     * @request POST:/api/request-queues/{id}/run
     * @deprecated
     * @secure
     * @response `200` `void` Success
     */
    runRequestQueue: (
      id: string,
      query?: {
        /** @default false */
        force?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/request-queues/${id}/run`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RequestQueue
     * @name DeleteQueueRequest
     * @summary Delete
     * @request DELETE:/api/request-queues/{id}
     * @deprecated
     * @secure
     * @response `204` `void` No Content
     */
    deleteQueueRequest: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/request-queues/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurations
     * @name GetSiteConfiguration
     * @summary Get By ID
     * @request GET:/api/site-configurations/{id}
     * @secure
     * @response `200` `SiteConfiguration` Success
     */
    getSiteConfiguration: (id: string, params: RequestParams = {}) =>
      this.request<SiteConfiguration, any>({
        path: `/api/site-configurations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurations
     * @name SearchSiteConfigurationByUrl
     * @summary Search By URL
     * @request POST:/api/site-configurations/url
     * @deprecated
     * @secure
     * @response `200` `SiteConfigurationByUrl` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    searchSiteConfigurationByUrl: (
      data: GetSiteConfigurationRequest,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfigurationByUrl, UnprocessableEntity>({
        path: `/api/site-configurations/url`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurations
     * @name GetSiteConfigurationByUrl
     * @summary Get By URL
     * @request GET:/api/site-configurations
     * @secure
     * @response `200` `SiteConfigurationByUrl` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    getSiteConfigurationByUrl: (
      query?: {
        url?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteConfigurationByUrl, UnprocessableEntity>({
        path: `/api/site-configurations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurations
     * @name SearchSiteConfigurationByLoanOfficerUser
     * @summary Search By Loan Officer User
     * @request POST:/api/site-configurations/louser
     * @deprecated
     * @secure
     * @response `200` `SiteConfiguration` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    searchSiteConfigurationByLoanOfficerUser: (
      data: GetSiteConfigurationByLOUserIDRequest,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntity>({
        path: `/api/site-configurations/louser`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurations
     * @name GetSiteConfigurationByLoanOfficerUser
     * @summary Get By Loan Officer User
     * @request GET:/api/site-configurations/louser/{loUserId}
     * @secure
     * @response `200` `SiteConfiguration` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    getSiteConfigurationByLoanOfficerUser: (
      loUserId: string,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntity>({
        path: `/api/site-configurations/louser/${loUserId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurations
     * @name SearchSiteConfigurations
     * @summary Search
     * @request POST:/api/site-configurations/search
     * @secure
     * @response `200` `SiteConfigurationSummaryPaginated` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    searchSiteConfigurations: (
      data: SiteConfigurationSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteConfigurationSummaryPaginated, UnprocessableEntity>({
        path: `/api/site-configurations/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurations
     * @name GetFormsBySiteConfiguration
     * @summary Get Forms by Site Configuration
     * @request GET:/api/site-configurations/{id}/forms
     * @secure
     * @response `200` `(AdminAccessGetForms)[]` Success
     */
    getFormsBySiteConfiguration: (id: string, params: RequestParams = {}) =>
      this.request<AdminAccessGetForms[], any>({
        path: `/api/site-configurations/${id}/forms`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurations
     * @name GetSamlMetadata
     * @summary Get Saml Metadata
     * @request GET:/api/site-configurations/sso/saml/{ssoIntegration}/metadata
     * @secure
     * @response `200` `File` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getSamlMetadata: (
      sSoIntegration: "ConsumerConnect" | "TheBigPOS",
      ssoIntegration: string,
      params: RequestParams = {},
    ) =>
      this.request<File, ProblemDetails>({
        path: `/api/site-configurations/sso/saml/${ssoIntegration}/metadata`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurations
     * @name CreateOrReplaceSamlMetadata
     * @summary Create or Replace Saml Metadata
     * @request POST:/api/site-configurations/sso/saml/{ssoIntegration}/metadata
     * @secure
     * @response `200` `File` Success
     */
    createOrReplaceSamlMetadata: (
      sSoIntegration: "ConsumerConnect" | "TheBigPOS",
      ssoIntegration: string,
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/api/site-configurations/sso/saml/${ssoIntegration}/metadata`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurationWorkflows
     * @name GetWorkflowSiteConfigurations
     * @summary List all site configurations assigned to a workflow
     * @request GET:/api/workflows/{workflowId}/site-configurations
     * @secure
     * @response `200` `(SiteConfigurationForm)[]` Success
     */
    getWorkflowSiteConfigurations: (
      workflowId: string,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfigurationForm[], any>({
        path: `/api/workflows/${workflowId}/site-configurations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurationWorkflows
     * @name GetWorkflowSiteConfiguration
     * @summary Get the workflow-site configuration assignment by composite key
     * @request GET:/api/workflows/{workflowId}/site-configurations/{siteConfigurationId}
     * @secure
     * @response `200` `SiteConfigurationForm` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getWorkflowSiteConfiguration: (
      workflowId: string,
      siteConfigurationId: string,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfigurationForm, ProblemDetails>({
        path: `/api/workflows/${workflowId}/site-configurations/${siteConfigurationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteConfigurationWorkflows
     * @name CreateWorkflowSiteConfiguration
     * @summary Assign a workflow to a site configuration
     * @request POST:/api/workflows/{workflowId}/site-configurations/{siteConfigurationId}
     * @secure
     * @response `201` `SiteConfigurationForm` Created
     * @response `409` `ProblemDetails` Conflict
     * @response `422` `UnprocessableEntity` Client Error
     */
    createWorkflowSiteConfiguration: (
      workflowId: string,
      siteConfigurationId: string,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfigurationForm, ProblemDetails | UnprocessableEntity>(
        {
          path: `/api/workflows/${workflowId}/site-configurations/${siteConfigurationId}`,
          method: "POST",
          secure: true,
          format: "json",
          ...params,
        },
      ),

    /**
     * No description
     *
     * @tags SiteConfigurationWorkflows
     * @name DeleteWorkflowSiteConfiguration
     * @summary Remove a workflow from a site configuration
     * @request DELETE:/api/workflows/{workflowId}/site-configurations/{siteConfigurationId}
     * @secure
     * @response `204` `void` No Content
     */
    deleteWorkflowSiteConfiguration: (
      workflowId: string,
      siteConfigurationId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/workflows/${workflowId}/site-configurations/${siteConfigurationId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteForms
     * @name GetFormBySiteConfigurationSlug
     * @summary Get By Site Configuration Slug
     * @request POST:/api/site-forms
     * @secure
     * @response `200` `GetForm` Success
     */
    getFormBySiteConfigurationSlug: (
      data: GetSiteFormRequest,
      params: RequestParams = {},
    ) =>
      this.request<GetForm, any>({
        path: `/api/site-forms`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Surveys
     * @name GetSurveysByUsers
     * @summary Get by Users
     * @request GET:/api/surveys
     * @secure
     * @response `200` `(SocialSurveyRecord)[]` Success
     */
    getSurveysByUsers: (
      query?: {
        /** @format int32 */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SocialSurveyRecord[], any>({
        path: `/api/surveys`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Surveys
     * @name GetSurveysByUser
     * @summary Get by User
     * @request POST:/api/surveys
     * @secure
     * @response `200` `(SocialSurveyRecord)[]` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    getSurveysByUser: (data: SurveyEmailRequest, params: RequestParams = {}) =>
      this.request<SocialSurveyRecord[], UnprocessableEntity>({
        path: `/api/surveys`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name GetTasks
     * @summary Get All
     * @request GET:/api/tasks
     * @secure
     * @response `200` `Task` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getTasks: (
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Task, ProblemDetails>({
        path: `/api/tasks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name CreateTask
     * @summary Create
     * @request POST:/api/tasks
     * @secure
     * @response `201` `Task` Created
     */
    createTask: (data: TaskRequest, params: RequestParams = {}) =>
      this.request<Task, any>({
        path: `/api/tasks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name GetTask
     * @summary Get By ID
     * @request GET:/api/tasks/{id}
     * @secure
     * @response `200` `Task` Success
     * @response `404` `ProblemDetails` Not Found
     */
    getTask: (id: string, params: RequestParams = {}) =>
      this.request<Task, ProblemDetails>({
        path: `/api/tasks/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name ReplaceTask
     * @summary Replace
     * @request PUT:/api/tasks/{id}
     * @secure
     * @response `200` `void` Success
     * @response `404` `ProblemDetails` Not Found
     */
    replaceTask: (id: string, data: TaskRequest, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/tasks/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name DeleteTask
     * @summary Delete
     * @request DELETE:/api/tasks/{id}
     * @secure
     * @response `204` `void` No Content
     * @response `404` `ProblemDetails` Not Found
     */
    deleteTask: (id: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/tasks/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name SearchTasks
     * @summary Search
     * @request POST:/api/tasks/search
     * @secure
     * @response `200` `TaskPaginated` Success
     */
    searchTasks: (
      data: TaskSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<TaskPaginated, any>({
        path: `/api/tasks/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TheBigPOS
     * @name IntegrationsLosLoansLockedList
     * @request GET:/api/integrations/los/loans/{loanID}/locked
     * @secure
     * @response `200` `void` Success
     */
    integrationsLosLoansLockedList: (
      loanId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/integrations/los/loans/${loanId}/locked`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserImpersonation
     * @name RequestImpersonation
     * @summary Request Impersonation as Impersonator
     * @request POST:/api/users/impersonation/request
     * @secure
     * @response `204` `void` No Content
     * @response `404` `Error` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    requestImpersonation: (
      data: RequestImpersonationRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, Error | UnprocessableEntity>({
        path: `/api/users/impersonation/request`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserImpersonation
     * @name AllowImpersonation
     * @summary Allow Impersonation as Impersonatee
     * @request POST:/api/users/impersonation/allow
     * @secure
     * @response `204` `void` No Content
     * @response `404` `Error` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    allowImpersonation: (
      data: AllowImpersonationRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, Error | UnprocessableEntity>({
        path: `/api/users/impersonation/allow`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserImpersonation
     * @name AllowImpersonationWithGuid
     * @summary Allow Impersonation as Impersonatee via AllowGuid
     * @request POST:/api/users/impersonation/allow/{allowToken}
     * @secure
     * @response `204` `void` No Content
     * @response `404` `Error` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    allowImpersonationWithGuid: (
      allowToken: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error | UnprocessableEntity>({
        path: `/api/users/impersonation/allow/${allowToken}`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserImpersonation
     * @name BeginImpersonation
     * @summary Begin Impersonation as Impersonator
     * @request POST:/api/users/impersonation
     * @secure
     * @response `204` `void` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    beginImpersonation: (params: RequestParams = {}) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/users/impersonation`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserImpersonation
     * @name StopImpersonation
     * @summary Stop Impersonation as either Impersonator or Impersonatee
     * @request DELETE:/api/users/impersonation
     * @secure
     * @response `204` `void` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    stopImpersonation: (params: RequestParams = {}) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/users/impersonation`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserImpersonation
     * @name ForceImpersonation
     * @summary Force Impersonation as Super Admin Impersonator
     * @request POST:/api/users/impersonation/force
     * @secure
     * @response `204` `void` No Content
     * @response `404` `Error` Not Found
     * @response `422` `UnprocessableEntity` Client Error
     */
    forceImpersonation: (
      data: RequestImpersonationRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, Error | UnprocessableEntity>({
        path: `/api/users/impersonation/force`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserImpersonation
     * @name ExtendImpersonation
     * @summary Extend Impersonation Session as Impersonator
     * @request POST:/api/users/impersonation/extend
     * @secure
     * @response `204` `void` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    extendImpersonation: (params: RequestParams = {}) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/users/impersonation/extend`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserInvites
     * @name InviteUser
     * @summary Invite
     * @request POST:/api/users/invites
     * @secure
     * @response `204` `void` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    inviteUser: (data: CreateInviteRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/users/invites`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserInvites
     * @name ResendInviteNotification
     * @summary Re-Send Notification
     * @request PUT:/api/users/invites/{id}/resend
     * @secure
     * @response `204` `void` No Content
     * @response `401` `UnprocessableEntity` Unauthorized
     * @response `404` `UnprocessableEntity` Not Found
     */
    resendInviteNotification: (id: string, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/users/invites/${id}/resend`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserInvites
     * @name VerifyUserInvite
     * @summary Verify
     * @request GET:/api/users/invites/{token}/verify
     * @secure
     * @response `200` `Invite` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    verifyUserInvite: (token: string, params: RequestParams = {}) =>
      this.request<Invite, UnprocessableEntity>({
        path: `/api/users/invites/${token}/verify`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserRelations
     * @name GetUserRelations
     * @summary Get All
     * @request GET:/api/users/{userID}/relations
     * @secure
     * @response `200` `(UserRelation)[]` Success
     */
    getUserRelations: (userId: string, params: RequestParams = {}) =>
      this.request<UserRelation[], any>({
        path: `/api/users/${userId}/relations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserRelations
     * @name CreateUserRelation
     * @summary Create
     * @request POST:/api/users/{userID}/relations
     * @secure
     * @response `204` `void` No Content
     */
    createUserRelation: (
      userId: string,
      data: CreateUserRelationRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/users/${userId}/relations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserRelations
     * @name GetUserRelation
     * @summary Get by ID
     * @request GET:/api/users/{userID}/relations/{id}
     * @secure
     * @response `200` `UserRelation` Success
     */
    getUserRelation: (userId: string, id: string, params: RequestParams = {}) =>
      this.request<UserRelation, any>({
        path: `/api/users/${userId}/relations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserRelations
     * @name DeleteUserRelation
     * @summary Delete
     * @request DELETE:/api/users/{userID}/relations/{id}
     * @secure
     * @response `204` `void` No Content
     */
    deleteUserRelation: (
      userId: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/users/${userId}/relations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUsers
     * @summary Get All
     * @request GET:/api/users
     * @secure
     * @response `200` `(User)[]` Success
     */
    getUsers: (
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<User[], any>({
        path: `/api/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CreateUser
     * @summary Create
     * @request POST:/api/users
     * @secure
     * @response `200` `DetailedUser` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    createUser: (data: CreateUserRequest, params: RequestParams = {}) =>
      this.request<DetailedUser, UnprocessableEntity>({
        path: `/api/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name SearchUsers
     * @summary Search
     * @request POST:/api/users/search
     * @secure
     * @response `200` `UserPaginated` Success
     */
    searchUsers: (
      data: UserSearchCriteria,
      query?: {
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserPaginated, any>({
        path: `/api/users/search`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUserByEmail
     * @summary Get by Email
     * @request POST:/api/users/byemail
     * @secure
     * @response `200` `AdminAccessUser` Success
     */
    getUserByEmail: (data: GetUserByEmailRequest, params: RequestParams = {}) =>
      this.request<AdminAccessUser, any>({
        path: `/api/users/byemail`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name SignUp
     * @summary Sign Up
     * @request POST:/api/users/register
     * @secure
     * @response `200` `User` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    signUp: (data: RegisterUserRequest, params: RequestParams = {}) =>
      this.request<User, UnprocessableEntity>({
        path: `/api/users/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ReplaceUser
     * @summary Update
     * @request PUT:/api/users/{id}
     * @secure
     * @response `200` `DetailedUser` Success
     * @response `422` `UnprocessableEntity` Client Error
     */
    replaceUser: (
      id: string,
      data: UpdateUserRequest,
      params: RequestParams = {},
    ) =>
      this.request<DetailedUser, UnprocessableEntity>({
        path: `/api/users/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name DeleteUser
     * @summary Delete
     * @request DELETE:/api/users/{id}
     * @secure
     * @response `204` `void` No Content
     */
    deleteUser: (
      id: string,
      query?: {
        /** @default false */
        permanent?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/users/${id}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name RestoreUser
     * @summary Restore User
     * @request POST:/api/users/{id}/restore
     * @secure
     * @response `204` `void` No Content
     */
    restoreUser: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/restore`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ChangePassword
     * @summary Change Password
     * @request POST:/api/users/change-password
     * @secure
     * @response `204` `void` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    changePassword: (data: ChangePasswordRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/users/change-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name VerifyPassword
     * @summary Verify Password
     * @request POST:/api/users/verify-password
     * @secure
     * @response `204` `void` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    verifyPassword: (data: VerifyPasswordRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/users/verify-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name OverridePassword
     * @summary Override Password
     * @request POST:/api/users/{id}/override-password
     * @secure
     * @response `204` `void` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    overridePassword: (
      id: string,
      data: OverridePasswordRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/users/${id}/override-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ForgotPassword
     * @summary Forgot Password
     * @request POST:/api/users/forgot-password
     * @secure
     * @response `204` `void` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    forgotPassword: (
      data: SendForgotPasswordRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/users/forgot-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name SendMobilePhoneVerificationCode
     * @summary Send Verification Code
     * @request POST:/api/users/mobile-phone/send-code
     * @secure
     * @response `204` `void` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    sendMobilePhoneVerificationCode: (params: RequestParams = {}) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/users/mobile-phone/send-code`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name VerifyUserMobilePhone
     * @summary Verify Mobile Phone
     * @request PUT:/api/users/mobile-phone/verify-code
     * @secure
     * @response `204` `void` No Content
     * @response `422` `UnprocessableEntity` Client Error
     */
    verifyUserMobilePhone: (
      data: UserMobilePhoneVerificationRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, UnprocessableEntity>({
        path: `/api/users/mobile-phone/verify-code`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UsersMe
     * @name GetMe
     * @summary Get
     * @request GET:/api/users/me
     * @secure
     * @response `200` `DetailedUser` Success
     */
    getMe: (params: RequestParams = {}) =>
      this.request<DetailedUser, any>({
        path: `/api/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UsersMe
     * @name ReplaceMe
     * @summary Replace
     * @request PUT:/api/users/me
     * @secure
     * @response `200` `DetailedUser` Success
     */
    replaceMe: (data: UpdateMeRequest, params: RequestParams = {}) =>
      this.request<DetailedUser, any>({
        path: `/api/users/me`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update the phone number If changed will send a verification code to the new number
     *
     * @tags UsersMe
     * @name UpdateMyPhone
     * @summary Update Phone
     * @request PUT:/api/users/me/phone-number
     * @secure
     * @response `204` `DetailedUser` No Content
     */
    updateMyPhone: (
      data: UpdateMobilePhoneRequest,
      params: RequestParams = {},
    ) =>
      this.request<DetailedUser, any>({
        path: `/api/users/me/phone-number`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UsersMe
     * @name GetMyRelationships
     * @summary Get Relationships
     * @request GET:/api/users/me/relationships
     * @secure
     * @response `200` `(UserRelationship)[]` Success
     */
    getMyRelationships: (params: RequestParams = {}) =>
      this.request<UserRelationship[], any>({
        path: `/api/users/me/relationships`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UsersMe
     * @name GetMyRelationshipProspects
     * @summary Get Relationship Prospects
     * @request GET:/api/users/me/relationships/prospects
     * @secure
     * @response `200` `(UserRelationshipProspect)[]` Success
     */
    getMyRelationshipProspects: (params: RequestParams = {}) =>
      this.request<UserRelationshipProspect[], any>({
        path: `/api/users/me/relationships/prospects`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UsersMe
     * @name DeleteRelationshipProspect
     * @summary Delete Relationship Prospect
     * @request DELETE:/api/users/me/relationships/prospects/{id}
     * @secure
     * @response `204` `void` No Content
     */
    deleteRelationshipProspect: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/me/relationships/prospects/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UsersMe
     * @name DeleteMe
     * @summary Delete
     * @request POST:/api/users/me/delete
     * @secure
     * @response `204` `void` No Content
     */
    deleteMe: (data: UserAccountDeletionRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/me/delete`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workflow
     * @name GetWorkflow
     * @summary Get Workflow
     * @request POST:/api/workflow
     * @secure
     * @response `200` `GetForm` Success
     */
    getWorkflow: (data: GetWorkflowRequest, params: RequestParams = {}) =>
      this.request<GetForm, any>({
        path: `/api/workflow`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
