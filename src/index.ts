/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Account {
  /** @format uuid */
  id: string;
  name: string;
  fusionCustomerID: string;
  mfaPreference: string;
  losLockoutFieldID?: string | null;
  eConsentBucket?: string | null;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  /** @format int32 */
  allowedLoginsWithoutMFA: number;
  loanMilestoneNotificationsEnabled: boolean;
}

export interface AccountUpdateRequest {
  mfaPreference: string;
  /** @format int32 */
  allowedLoginsWithoutMFA: number;
  loanMilestoneNotificationsEnabled: boolean;
}

export interface ActionResponse {
  /** @format uuid */
  id: string;
  name: string;
  comments?: string | null;
  /** @format uuid */
  siteConfigurationID: string;
  applicationSettings?: any;
  surveysToken?: string | null;
}

export interface AddFormToSiteConfigurationRequest {
  /** @minLength 1 */
  slug: string;
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
  borrowerType: BorrowerType;
  name: string;
  isDefault: boolean;
  description?: string | null;
  slug?: string | null;
  status: string;
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
  drafts: DraftResponse[];
  /** @format uuid */
  accountID?: string | null;
  loans: UserLoan[];
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
  buyerAgent: LoanContactResponse;
  sellerAgent: LoanContactResponse;
  settlementAgent: LoanContactResponse;
  escrowAgent: LoanContactResponse;
  titleInsuranceAgent: LoanContactResponse;
}

export interface Attachment {
  fileName?: string | null;
  base64Data?: string | null;
}

export type BorrowerRelationship = "NotApplicable" | "Spouse" | "NonSpouse";

export type BorrowerType = "Borrower" | "CoBorrower" | "Unknown";

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
  drafts: DraftResponse[];
  /** @format uuid */
  branchID: string;
  branchName: string;
  /** @format uuid */
  corporateID: string;
  corporateName: string;
  siteConfigurations: SiteConfigurationReduced[];
}

export interface BranchUserPaginatedResponse {
  rows: BranchUser[];
  pagination: PaginationResponse;
  /** @format int64 */
  count: number;
}

export interface BusinessRule {
  /** @format date-time */
  createdAt?: string | null;
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
  tasks: TaskRequest[];
  filter: BusinessRuleCondition[];
  applyToAllBorrowerPairs: boolean;
}

export interface ChangePasswordRequest {
  /** @minLength 1 */
  oldPassword: string;
  /** @minLength 8 */
  newPassword: string;
}

export interface CommentUserInformationResponse {
  entityId: string;
  entityType: string;
  entityName?: string | null;
  entityUri?: string | null;
}

export interface ConditionCommentResponse {
  commentId: string;
  comments: string;
  /** @format int32 */
  forRoleId: number;
  forRole: CommentUserInformationResponse;
  /** @format date-time */
  dateCreated: string;
  createdBy: string;
  createdByName: string;
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

export interface CorporateRequest {
  /**
   * @minLength 1
   * @maxLength 250
   */
  name: string;
}

export interface CorporateResponse {
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

export interface CorporateResponsePaginatedResponse {
  rows: CorporateResponse[];
  pagination: PaginationResponse;
  /** @format int64 */
  count: number;
}

export interface CorporateSearchCriteria {
  searchText?: string | null;
  isActive?: boolean | null;
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
  status: string;
}

export interface CreateDraftRequest {
  applicationPayload: any;
  customData?: any;
}

export interface CreateInviteRequest {
  /** @minLength 1 */
  firstName: string;
  /** @minLength 1 */
  lastName: string;
  /** @format email */
  emailAddress: string;
  phoneNumber: string;
  relationship: BorrowerRelationship;
  loanID: string;
  route?: string | null;
  /** @format uuid */
  siteConfigurationID: string;
  isExistingAccount: boolean;
  completedLoanApplication: boolean;
  userRole: string;
  loanRole: string;
  customData: any;
  /** @format date-time */
  createdAt: string;
  sourceUrl?: string | null;
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
  eConsentInformation: EConsentInformation;
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
  drafts: DraftResponse[];
}

export interface DeviceActionResponse {
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

export interface DeviceMDMResponse {
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
  user: MdmUserResponse;
  actions?: DeviceActionResponse[] | null;
}

export interface DeviceResponse {
  /** @format uuid */
  id: string;
  /** @format uuid */
  accountID: string;
  serialNumber: string;
  apps: any;
  /** @format uuid */
  createdBy: string;
  /** @format uuid */
  updatedBy: string;
  /** @format uuid */
  managedBy: string;
  name?: string | null;
  type?: string | null;
  status?: string | null;
  comments?: string | null;
}

export interface DeviceResponsePaginatedResponse {
  rows: DeviceResponse[];
  pagination: PaginationResponse;
  /** @format int64 */
  count: number;
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

export interface DocumentTemplateBaseResponse {
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
  status: string;
}

export interface DocumentTemplateResponse {
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
  status: string;
  versions: DocumentTemplateVersionBaseRequest[];
}

export interface DocumentTemplateVersionBaseRequest {
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

export interface DocumentTemplateVersionResponse {
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
  documentTemplate: DocumentTemplateBaseResponse;
}

export interface DocumentTemplateVersionUpdateRequest {
  /** @maxLength 255 */
  name: string;
  isActive: boolean;
  /** @minLength 1 */
  htmlBody: string;
}

export interface DraftContentResponse {
  /** @format uuid */
  id: string;
  customData: any;
  applicationPayload: any;
}

export interface DraftContentResponsePaginatedResponse {
  rows: DraftContentResponse[];
  pagination: PaginationResponse;
  /** @format int64 */
  count: number;
}

export interface DraftResponse {
  /** @format uuid */
  id: string;
  customData: any;
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
  pricingCalculator?: boolean | null;
  rates?: boolean | null;
  socialSurvey?: boolean | null;
  borrowerTasks?: boolean | null;
  borrowerMissions?: boolean | null;
  docusign?: boolean | null;
  emailNotifications?: boolean | null;
  textNotifications?: boolean | null;
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
}

export interface Error {
  message: string;
}

export interface File {
  /** @format uuid */
  id: string;
  fileName: string;
  name: string;
  s3FilePath: string;
  user: User;
  account: Account;
  url: string;
}

export interface FilePaginatedResponse {
  rows: File[];
  pagination: PaginationResponse;
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

export type FilterType =
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

export interface FormRequest {
  formJSON: any;
  /** @format int32 */
  type: number;
  target: string;
  authType: string;
  inviteUser: boolean;
  borrowerType: BorrowerType;
  name: string;
  description?: string | null;
  slug?: string | null;
  status: string;
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
  loanOfficer: User;
  /** @format uuid */
  branchID?: string | null;
  branch: GetBranch;
  status: string;
  subjectPropertyAddressStreet?: string | null;
  subjectPropertyAddressCity?: string | null;
  subjectPropertyAddressCounty?: string | null;
  subjectPropertyAddressState?: string | null;
  subjectPropertyAddressZip?: string | null;
  data?: any;
  /** @format uuid */
  listingID?: string | null;
  listing: Listing;
  files: FormSubmissionFileResponse[];
}

export interface FormSubmissionFileResponse {
  /** @format uuid */
  id: string;
  file: File;
}

export interface FormSubmissionPaginatedResponse {
  rows: FormSubmission[];
  pagination: PaginationResponse;
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
  filterType: FilterType;
  targetField: string;
  targetValue: string;
}

export interface GenerateDocumentRequest {
  /** @minLength 1 */
  loanID: string;
  /**
   * @format uuid
   * @minLength 1
   */
  templateID: string;
  /**
   * @format uuid
   * @minLength 1
   */
  siteConfigurationID: string;
  preview: boolean;
}

export interface GetApplicationsResponse {
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

export interface GetBranchPaginatedResponse {
  rows: GetBranch[];
  pagination: PaginationResponse;
  /** @format int64 */
  count: number;
}

export interface GetForm {
  formJSON: any;
  /** @format int32 */
  type: number;
  target: string;
  authType: string;
  borrowerType: BorrowerType;
  name: string;
  isDefault: boolean;
  description?: string | null;
  slug?: string | null;
  status: string;
  showProgressBar: boolean;
  /** @format uuid */
  id: string;
}

export interface GetPricingCalculationRequest {
  eppsUserName?: string | null;
  /** @format int32 */
  loanAmount: number;
  /** @format int32 */
  totalMortgageAmount: number;
  /** @format int32 */
  propertyValue: number;
  propertyType?: string | null;
  zipCode?: string | null;
  county?: string | null;
  city?: string | null;
  state?: string | null;
  /** @minLength 1 */
  loanPurpose: string;
  propertyOccupancy?: string | null;
  escrow?: string | null;
  escrowInsurance: boolean;
  escrowTaxes: boolean;
  loanTerm?: string | null;
  loanType?: string | null;
  creditScore?: string | null;
  /** @format uuid */
  siteConfigurationId: string;
}

export interface GetPricingForLoanOfficerResponse {
  rates: PricingRates[];
}

export interface GetReportRequest {
  fields: FusionFieldDisplay[];
  filters: FusionReportFilter[];
  loanIDs: string[];
}

export interface GetReportResponse {
  loanRecords: LoanRecord[];
  invalidFieldIDs: string[];
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

export interface InviteResponse {
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
  loanRole: string;
  customData: any;
  /** @format date-time */
  createdAt: string;
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
  address: Address;
  /** @format int32 */
  salePrice?: number | null;
  /** @format date-time */
  activeDate: string;
  /** @format date-time */
  expirationDate?: string | null;
  zillowURL?: string | null;
  photos: ListingPhoto[];
  files: ListingFile[];
  backgroundImage: File;
  /** @format date-time */
  openHouseDate?: string | null;
  /** @format double */
  buyerAgentCommissionPercent?: number | null;
  /** @format double */
  sellerAgentCommissionPercent?: number | null;
  isActive: boolean;
  slug: string;
  url?: string | null;
  loanOfficer: LoanOfficer;
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

export interface ListingPaginatedResponse {
  rows: Listing[];
  pagination: PaginationResponse;
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
  loanID: string;
  loanNumber?: string | null;
  borrowerLastName?: string | null;
  initialDisclosureProvidedDate?: string | null;
  closingDisclosureSentDate?: string | null;
  underwritingApprovalDate?: string | null;
  closingDate?: string | null;
  fundingOrderDate?: string | null;
  currentStatusDate?: string | null;
  loanChannel?: string | null;
  totalLoanAmount?: string | null;
  currentLoanStatus?: string | null;
  applicationDate?: string | null;
  currentMilestone?: string | null;
  lastCompleted?: string | null;
  startDate?: string | null;
  fileStarter?: string | null;
  isPOSLoan?: boolean | null;
}

export interface LoanComparisonResponse {
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

export interface LoanContactResponse {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
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
  user: User;
  initialBucket: string;
  losDocumentID: string;
  losStatus: string;
  contents: string;
}

export interface LoanDraftSearchCriteria {
  isActive?: boolean | null;
  /** @format uuid */
  loanOfficerId?: string | null;
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

export interface LoanOfficerSearchCriteria {
  searchText?: string | null;
  isActive?: boolean | null;
  /** @format uuid */
  branch?: string | null;
  /** @format uuid */
  brand?: string | null;
}

export interface LoanRecord {
  loanGuid: string;
  loanFields: Record<string, string>;
}

export type LoanTaskRole = "Borrowers" | "Borrower" | "CoBorrower";

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

export interface MdmUserResponse {
  user_email?: string | null;
  user_id?: string | null;
  user_name?: string | null;
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

export interface MilestoneConfigurationResponse {
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
  textBody: string;
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
  textBody: string;
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
  textBody: string;
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
}

export interface NotificationTemplateVersionRequest {
  /** @maxLength 255 */
  name?: string | null;
  isActive: boolean;
  htmlBody: string;
  plainBody: string;
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
}

export interface Operation {
  operationType: OperationType;
  path?: string | null;
  op?: string | null;
  from?: string | null;
  value?: any;
}

export type OperationType = "Add" | "Remove" | "Replace" | "Move" | "Copy" | "Test" | "Invalid";

export interface OverridePasswordRequest {
  /** @minLength 8 */
  password: string;
}

export interface PaginationResponse {
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

export interface PostCreditAuthorizationRequest {
  /** @minLength 1 */
  loanID: string;
  /** @format uuid */
  accountId?: string | null;
}

export interface PostEConsentRequest {
  /** @minLength 1 */
  loanID: string;
  /** @format uuid */
  siteConfigurationID: string;
  clientIP?: string | null;
}

export interface PostLoanComparisonPdfRequest {
  /**
   * @format uuid
   * @minLength 1
   */
  siteConfigurationID: string;
}

export interface PostTaskDocumentsRequest {
  /** @minLength 1 */
  loanGuid: string;
  documents: DocumentDataRequest[];
}

export interface PreliminaryConditionResponse {
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
  createdBy: CommentUserInformationResponse;
  isRequested: boolean;
  /** @format date-time */
  requestedDate?: string | null;
  requestedBy: CommentUserInformationResponse;
  isReceived: boolean;
  /** @format date-time */
  receivedDate?: string | null;
  receivedBy: CommentUserInformationResponse;
  priorTo?: string | null;
  category?: string | null;
  isFulfilled: boolean;
  /** @format date-time */
  fulfilledDate?: string | null;
  fulfilledBy: CommentUserInformationResponse;
  comments: ConditionCommentResponse[];
  uwAccess?: string | null;
  isRerequested: boolean;
  /** @format date-time */
  rerequestedDate?: string | null;
  rerequestedBy: CommentUserInformationResponse;
}

export interface PricingRates {
  rate: string;
  loanProgram: string;
  apr: string;
  /** @format float */
  price: number;
  /** @format float */
  payment: number;
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

export interface PublicLoanOfficer {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  /** @format uuid */
  corporateID?: string | null;
  siteConfigurationIDs: string[];
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
  sendNotification: boolean;
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

export interface RunLOCalculationRequest {
  /** @minLength 1 */
  loanID: string;
  /** @minLength 1 */
  loanAmount: string;
  /** @minLength 1 */
  propertyValue: string;
  propertyType: string;
  zipCode: string;
  county: string;
  /** @minLength 1 */
  loanPurpose: string;
  propertyOccupancy: string;
  escrow: string;
  /** @minLength 1 */
  loanTerm1: string;
  /** @minLength 1 */
  loanTerm2: string;
  creditScore: string;
  taxes: string;
  insurance: string;
  rate: string;
  /** @minLength 1 */
  loanType: string;
  flood: string;
  hoa: string;
  miFactor: string;
  downpaymentAmount: string;
  /** @minLength 1 */
  lienType: string;
}

export interface RunLOCalculationResponse {
  loanID: string;
  loanAmount: string;
  totalMortgageAmount: string;
  propertyValue: string;
  propertyType: string;
  loanType: string;
  zipCode: string;
  county: string;
  loanPurpose: string;
  propertyOccupancy: string;
  escrow: string;
  loanTerm1: string;
  loanTerm2: string;
  creditScore: string;
  taxes: string;
  insurance: string;
  borrowerIncome: string;
  loanProgram: string;
  rate: string;
  monthlyPayment: string;
  principleAndInterestPITIField: string;
  dtiFront: string;
  dtiBack: string;
  ltvFront: string;
  ltvBack: string;
  totalCashtoClose: string;
  apr: string;
  flood: string;
  hoa: string;
  miFactor: string;
  mi: string;
  totalAssets: string;
  loanLocked: boolean;
  canGeneratePreQual: boolean;
  canGeneratePreApproval: boolean;
  downPaymentAmount: string;
  downPaymentPercent: string;
  lienType: string;
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

export interface SSOTokenResponse {
  /** @format uuid */
  ssoTokenForSignIn: string;
  ssoRedirectUriForSignIn: string;
}

export interface SendForgotPasswordRequest {
  /**
   * @format email
   * @minLength 1
   */
  email: string;
  /** @format uuid */
  siteConfigurationId?: string | null;
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
  /** @format uuid */
  entityID: string;
  /** @format int32 */
  entityType: number;
  /** @minLength 1 */
  url: string;
  name: string;
  introduction?: string | null;
  introductionTitle?: string | null;
  /** @format int32 */
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
  enabledServices: EnabledServices;
  companyName?: string | null;
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
  user: UserPublic;
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
}

export interface SiteConfigurationPaginatedResponse {
  rows: SiteConfiguration[];
  pagination: PaginationResponse;
  /** @format int64 */
  count: number;
}

export interface SiteConfigurationReduced {
  /** @format uuid */
  id: string;
  url?: string | null;
  name: string;
  /** @format int32 */
  nmlsid: number;
  email?: string | null;
  companyName?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  /** @format date-time */
  deletedAt?: string | null;
}

export interface SiteConfigurationSearchCriteria {
  searchText?: string | null;
  isActive?: boolean | null;
  entityType?: string | null;
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
  type: TaskType;
  losTarget?: string | null;
  targetUserRole: LoanTaskRole;
  /** @format int32 */
  daysDueFromApplication?: number | null;
  isGlobal: boolean;
  /** @format uuid */
  id: string;
  user: User;
  isFromLegacySource: boolean;
}

export interface TaskRequest {
  /** @minLength 1 */
  name: string;
  description?: string | null;
  losTarget?: string | null;
  type: TaskType;
  targetUserRole: LoanTaskRole;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  daysDueFromApplication?: number | null;
  isGlobal: boolean;
}

export interface TaskSearchCriteria {
  searchText?: string | null;
  isBusinessRule?: boolean | null;
  isGlobal?: boolean | null;
  excludedIds?: string[] | null;
}

export type TaskType =
  | "Document"
  | "Field"
  | "Signature"
  | "EDisclosure"
  | "EConsent"
  | "VerificationOfAssets"
  | "VerificationOfIncome"
  | "VerificationOfEmployment"
  | "VerificationOfCredit"
  | "Payment"
  | "VerificationOfIncomeAndEmployment"
  | "VerificationOfTaxes";

export interface TestSendNotificationForLoanRequest {
  loanData: Record<string, string>;
  /** @format uuid */
  siteConfigurationId: string;
  toAddress?: string | null;
  templateName?: string | null;
  attachments: Attachment[];
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
}

export interface TokenRequest {
  /** @format email */
  username: string;
  /** @minLength 1 */
  password: string;
  /** @format uuid */
  siteConfigurationId?: string | null;
}

export interface TokenResponse {
  token_type: string;
  /** @format int32 */
  expires_in: number;
  access_token: string;
  refresh_token: string;
  scope: string;
}

export interface UnderwritingConditionResponse {
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
  createdBy: CommentUserInformationResponse;
  isRequested: boolean;
  /** @format date-time */
  requestedDate?: string | null;
  requestedBy: CommentUserInformationResponse;
  isReceived: boolean;
  /** @format date-time */
  receivedDate?: string | null;
  receivedBy: CommentUserInformationResponse;
  priorTo?: string | null;
  category?: string | null;
  isFulfilled: boolean;
  /** @format date-time */
  fulfilledDate?: string | null;
  fulfilledBy: CommentUserInformationResponse;
  comments: ConditionCommentResponse[];
  allowToClear: boolean;
  printExternally: boolean;
  printInternally: boolean;
}

export interface UnprocessableEntityError {
  error: string;
  property: string;
}

export interface UnprocessableEntityResponse {
  message: string;
  errors: UnprocessableEntityError[];
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
  title?: string | null;
  forcePasswordReset: boolean;
  mfaEnabled: boolean;
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

export interface UserLoan {
  loanID: string;
  customLoanData: CustomLoanData;
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
  submittedBy: User;
  completedBy: User;
}

export interface UserLoanTaskRequest {
  value?: string | null;
  /** @format uuid */
  userID: string;
}

export interface UserLoanTaskUpdateRequest {
  status: string;
  value: string;
}

export interface UserMobilePhoneVerificationRequest {
  /** @minLength 1 */
  code: string;
}

export interface UserPaginatedResponse {
  rows: User[];
  pagination: PaginationResponse;
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

export interface UserRelationResponse {
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

export type UserRole =
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

export interface UserSearchCriteria {
  searchText?: string | null;
  isActive?: boolean | null;
  roles?: string[] | null;
}

export interface VerificationRequest {
  requestID: string;
  /** @minLength 1 */
  loanID: string;
  operations: string[];
  /** @format int32 */
  _VerificationOperations?: number | null;
  /** @format int32 */
  verificationOperations: number;
  newRequest: boolean;
  /** @format uuid */
  loanTaskID?: string | null;
}

export interface VerificationResponse {
  requestId: string;
  message?: string | null;
  status?: string | null;
  ssoUrls?: Record<string, string>;
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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: FormData) =>
      (Array.from(input.keys()) || []).reduce((formData, key) => {
        const property = input.get(key);
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title The Big POS API
 * @version v2.8.2
 * @termsOfService https://www.thebigpos.com/terms-of-use/
 * @contact Mortgage Automation Technologies <support@thebigpos.com> (https://www.thebigpos.com/terms-of-use/)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Saml
   * @name PostRoot
   * @request POST:/
   * @secure
   */
  postRoot = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "POST",
      secure: true,
      ...params,
    });

  api = {
    /**
     * No description
     *
     * @tags Account
     * @name GetAccount
     * @summary Get
     * @request GET:/api/account
     * @secure
     */
    getAccount: (params: RequestParams = {}) =>
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
     * @name ReplaceAccount
     * @summary Replace
     * @request PUT:/api/account
     * @secure
     */
    replaceAccount: (data: AccountUpdateRequest, params: RequestParams = {}) =>
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
     * @name UpdateAccount
     * @summary Update
     * @request PATCH:/api/account
     * @secure
     */
    updateAccount: (data: Operation[], params: RequestParams = {}) =>
      this.request<Account, ProblemDetails>({
        path: `/api/account`,
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
     * @tags Account
     * @name GetSiteConfigurationByAccount
     * @summary Get Site Configuration By Account
     * @request GET:/api/account/site-configurations
     * @secure
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
     * @summary Update Site Configuration For Account
     * @request PUT:/api/account/site-configurations
     * @secure
     */
    updateSiteConfigurationForAccount: (data: SiteConfiguration, params: RequestParams = {}) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
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
     * @tags Branches
     * @name GetBranches
     * @summary Get All
     * @request GET:/api/branches
     * @secure
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
      this.request<GetBranchPaginatedResponse, any>({
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
     */
    createBranch: (data: CreateBranchRequest, params: RequestParams = {}) =>
      this.request<GetBranch, UnprocessableEntityResponse>({
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
      this.request<GetBranchPaginatedResponse, any>({
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
     */
    replaceBranch: (branchId: string, data: CreateBranchRequest, params: RequestParams = {}) =>
      this.request<GetBranch, UnprocessableEntityResponse>({
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
     */
    createBranchSiteConfiguration: (branchId: string, data: SiteConfiguration, params: RequestParams = {}) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
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
     * @name ReplaceBranchSiteConfiguration
     * @summary Replace Branch Site Configuration
     * @request PUT:/api/branches/{branchId}/site-configurations
     * @secure
     */
    replaceBranchSiteConfiguration: (
      branchId: string,
      data: SiteConfiguration,
      query?: {
        applyToChildren?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
        path: `/api/branches/${branchId}/site-configurations`,
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
     * @name GetBranchSiteConfiguration
     * @summary Get Branch Site Configuration
     * @request GET:/api/branches/{branchId}/site-configurations/{siteConfigurationId}
     * @secure
     */
    getBranchSiteConfiguration: (branchId: string, siteConfigurationId: string, params: RequestParams = {}) =>
      this.request<SiteConfiguration, any>({
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
     * @name GetLoanOfficersByBranch
     * @summary Get Branch Loan Officers
     * @request GET:/api/branches/{branchId}/loan-officers
     * @secure
     */
    getLoanOfficersByBranch: (branchId: string, params: RequestParams = {}) =>
      this.request<PublicLoanOfficer, any>({
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
     */
    createBusinessRule: (data: BusinessRuleRequest, params: RequestParams = {}) =>
      this.request<BusinessRule, UnprocessableEntityResponse>({
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
     */
    replaceBusinessRule: (id: string, data: BusinessRuleRequest, params: RequestParams = {}) =>
      this.request<BusinessRule, UnprocessableEntityResponse>({
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
      this.request<CorporateResponsePaginatedResponse, any>({
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
     */
    createCorporate: (data: CorporateRequest, params: RequestParams = {}) =>
      this.request<CorporateResponse, UnprocessableEntityResponse>({
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
      this.request<CorporateResponsePaginatedResponse, any>({
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
     */
    getCorporate: (id: string, params: RequestParams = {}) =>
      this.request<CorporateResponse, any>({
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
     */
    replaceCorporate: (id: string, data: CorporateRequest, params: RequestParams = {}) =>
      this.request<CorporateResponse, UnprocessableEntityResponse>({
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
     */
    createCorporateSiteConfiguration: (corporateId: string, data: SiteConfiguration, params: RequestParams = {}) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
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
     * @name ReplaceCorporateSiteConfiguration
     * @summary Replace Site Configuration
     * @request PUT:/api/corporates/{corporateId}/site-configurations
     * @secure
     */
    replaceCorporateSiteConfiguration: (
      corporateId: string,
      data: SiteConfiguration,
      query?: {
        applyToChildren?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
        path: `/api/corporates/${corporateId}/site-configurations`,
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
     * @name GetCorporateSiteConfiguration
     * @summary Get Site Configuration
     * @request GET:/api/corporates/{corporateId}/site-configurations/{siteConfigurationId}
     * @secure
     */
    getCorporateSiteConfiguration: (corporateId: string, siteConfigurationId: string, params: RequestParams = {}) =>
      this.request<SiteConfiguration, any>({
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
     * @name GetBranchesByCorporate
     * @summary Get Branches
     * @request GET:/api/corporates/{id}/branches
     * @secure
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
     */
    getLoanOfficersByCorporate: (id: string, params: RequestParams = {}) =>
      this.request<PublicLoanOfficer, any>({
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
      this.request<DeviceResponsePaginatedResponse, any>({
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
     * @name GetDeviceById
     * @summary Get by ID
     * @request GET:/api/devices/{id}
     * @secure
     */
    getDeviceById: (id: string, params: RequestParams = {}) =>
      this.request<DeviceResponse, any>({
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
     * @name GetDeviceBySerialNumber
     * @summary Get by Serial Number
     * @request GET:/api/devices/{sn}/profile
     * @secure
     */
    getDeviceBySerialNumber: (sn: string, params: RequestParams = {}) =>
      this.request<DeviceMDMResponse, any>({
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
     * @name CreateActionBySerialNumber
     * @summary Create Action by Serial Number
     * @request POST:/api/devices/{sn}/actions/{actionName}
     * @secure
     */
    createActionBySerialNumber: (sn: string, actionName: string, params: RequestParams = {}) =>
      this.request<ActionResponse, any>({
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
     */
    getDocumentBuckets: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/document-buckets`,
        method: "GET",
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
     */
    getDocumentTemplates: (
      query?: {
        showAll?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateBaseResponse[], any>({
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
     */
    createDocumentTemplate: (data: CreateDocumentTemplateRequest, params: RequestParams = {}) =>
      this.request<DocumentTemplateBaseResponse, ProblemDetails | UnprocessableEntityResponse>({
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
      this.request<DocumentTemplateBaseResponse[], any>({
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
     */
    getDocumentTemplate: (id: string, params: RequestParams = {}) =>
      this.request<DocumentTemplateResponse, ProblemDetails>({
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
     */
    replaceDocumentTemplate: (id: string, data: UpdateDocumentTemplateRequest, params: RequestParams = {}) =>
      this.request<DocumentTemplateBaseResponse, ProblemDetails | UnprocessableEntityResponse>({
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
     */
    getDocumentTemplateVersions: (documentId: string, params: RequestParams = {}) =>
      this.request<DocumentTemplateVersionResponse[], any>({
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
     */
    createDocumentTemplateVersion: (
      documentId: string,
      data: DocumentTemplateVersionRequest,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateVersionResponse, any>({
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
     */
    getDocumentTemplateVersion: (documentId: string, id: string, params: RequestParams = {}) =>
      this.request<DocumentTemplateVersionResponse, any>({
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
     */
    replaceDocumentTemplateVersion: (
      documentId: string,
      id: string,
      data: DocumentTemplateVersionUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<DocumentTemplateVersionResponse, any>({
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
     */
    deleteDocumentTemplateVersion: (documentId: string, id: string, params: RequestParams = {}) =>
      this.request<DocumentTemplateVersionResponse, any>({
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
      this.request<FilePaginatedResponse, any>({
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
      this.request<File, UnprocessableEntityResponse>({
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
     */
    replaceFile: (id: string, data: FileRequest, params: RequestParams = {}) =>
      this.request<string, UnprocessableEntityResponse>({
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
      this.request<FilePaginatedResponse, any>({
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
     * @name GetFormBySiteConfigurationSlug
     * @summary Get By Site Configuration Slug
     * @request POST:/api/siteform
     * @secure
     */
    getFormBySiteConfigurationSlug: (data: GetSiteFormRequest, params: RequestParams = {}) =>
      this.request<GetForm, any>({
        path: `/api/siteform`,
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
     * @name GetSiteForms
     * @summary Get All Site Forms
     * @request GET:/api/siteform
     * @secure
     */
    getSiteForms: (params: RequestParams = {}) =>
      this.request<SiteConfigurationForm[], any>({
        path: `/api/siteform`,
        method: "GET",
        secure: true,
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
     */
    createForm: (data: FormRequest, params: RequestParams = {}) =>
      this.request<AdminAccessGetForms, UnprocessableEntityResponse>({
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
     */
    getForm: (id: string, params: RequestParams = {}) =>
      this.request<AdminAccessGetForms, any>({
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
     */
    replaceForm: (id: string, data: FormRequest, params: RequestParams = {}) =>
      this.request<AdminAccessGetForms, UnprocessableEntityResponse>({
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
     */
    restoreForm: (id: string, params: RequestParams = {}) =>
      this.request<AdminAccessGetForms, any>({
        path: `/api/forms/${id}/restore`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name AddFormToSiteConfiguration
     * @summary Add to Site Configuration
     * @request POST:/api/forms/{formId}/site-configurations/{siteConfigurationId}
     * @secure
     */
    addFormToSiteConfiguration: (
      formId: string,
      siteConfigurationId: string,
      data: AddFormToSiteConfigurationRequest,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfigurationForm, UnprocessableEntityResponse>({
        path: `/api/forms/${formId}/site-configurations/${siteConfigurationId}`,
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
     * @name RemoveFormFromSiteConfiguration
     * @summary Remove from Site Configuration
     * @request DELETE:/api/forms/{formId}/site-configurations/{siteConfigurationId}
     * @secure
     */
    removeFormFromSiteConfiguration: (formId: string, siteConfigurationId: string, params: RequestParams = {}) =>
      this.request<AdminAccessGetForms, any>({
        path: `/api/forms/${formId}/site-configurations/${siteConfigurationId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Forms
     * @name GetSiteConfigurationsByForm
     * @summary Get Site Configurations by Form
     * @request GET:/api/forms/{formId}/site-configurations
     * @secure
     */
    getSiteConfigurationsByForm: (formId: string, params: RequestParams = {}) =>
      this.request<SiteConfigurationReduced[], UnprocessableEntityResponse>({
        path: `/api/forms/${formId}/site-configurations`,
        method: "GET",
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
      this.request<FormSubmissionFileResponse, any>({
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
     */
    deleteFormSubmissionFile: (formSubmissionFileId: string, formSubmissionId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/form-submissions/${formSubmissionId}/files/${formSubmissionFileId}`,
        method: "DELETE",
        secure: true,
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
      this.request<FormSubmissionPaginatedResponse, any>({
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
     */
    replaceFormSubmission: (id: string, data: FormSubmissionRequest, params: RequestParams = {}) =>
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
      this.request<FormSubmissionPaginatedResponse, any>({
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
     */
    createFormVersion: (formId: string, data: FormVersionRequest, params: RequestParams = {}) =>
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
     */
    replaceFormVersion: (formId: string, id: string, data: FormVersionUpdateRequest, params: RequestParams = {}) =>
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
     */
    deleteFormVersion: (formId: string, id: string, params: RequestParams = {}) =>
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
     * @name GetLoan
     * @summary Get By ID
     * @request GET:/api/los/loan/application/{loanID}
     * @secure
     */
    getLoan: (loanId: string, params: RequestParams = {}) =>
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
     */
    updateLoan: (loanId: string, data: any, params: RequestParams = {}) =>
      this.request<string, UnprocessableEntityResponse>({
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
     */
    getLoansReport: (data: GetReportRequest, params: RequestParams = {}) =>
      this.request<GetReportResponse, any>({
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
     */
    createLoan: (data: any, params: RequestParams = {}) =>
      this.request<string, UnprocessableEntityResponse>({
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
     * @name UploadDocuments
     * @summary Upload Documents
     * @request POST:/api/los/loan/tasks/documents
     * @secure
     */
    uploadDocuments: (data: PostTaskDocumentsRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
        path: `/api/los/loan/tasks/documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name CreateEConsent
     * @summary Create EConsent
     * @request POST:/api/los/loan/econsent
     * @secure
     */
    createEConsent: (data: PostEConsentRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
        path: `/api/los/loan/econsent`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LegacyLoan
     * @name CreateCreditAuthorization
     * @summary Create Credit Authorization
     * @request POST:/api/los/loan/creditauth
     * @secure
     */
    createCreditAuthorization: (data: PostCreditAuthorizationRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
        path: `/api/los/loan/creditauth`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
     */
    getPreliminaryConditionsForLoan: (loanId: string, params: RequestParams = {}) =>
      this.request<PreliminaryConditionResponse[], any>({
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
     */
    getUnderwritingConditionsForLoan: (loanId: string, params: RequestParams = {}) =>
      this.request<UnderwritingConditionResponse[], any>({
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
     */
    getLoanEmbeddedSigningLink: (envelopeId: string, userName: string, email: string, params: RequestParams = {}) =>
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
     */
    createLegacyLoanDocument: (data: GenerateDocumentRequest, params: RequestParams = {}) =>
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
     */
    updateListingFiles: (listingId: string, data: UpdateListingFileRequest[], params: RequestParams = {}) =>
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
     */
    removeListingFile: (listingId: string, id: string, params: RequestParams = {}) =>
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
     */
    updateListingPhotos: (listingId: string, data: UpdateListingPhotoRequest[], params: RequestParams = {}) =>
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
     */
    removeListingPhoto: (listingId: string, id: string, params: RequestParams = {}) =>
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
      this.request<ListingPaginatedResponse, any>({
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
     */
    replaceListing: (id: string, data: ListingRequest, params: RequestParams = {}) =>
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
      this.request<ListingPaginatedResponse, any>({
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
     * @name GetListingOpenHouseFlyer
     * @summary Get Open House Flyer
     * @request GET:/api/listings/{id}/open-house-flyer
     * @secure
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
     */
    getLoanCalculator: (loanId: string, params: RequestParams = {}) =>
      this.request<RunLOCalculationResponse, any>({
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
     */
    runLoanCalculator: (loanId: string, data: RunLOCalculationRequest, params: RequestParams = {}) =>
      this.request<RunLOCalculationResponse, UnprocessableEntityResponse>({
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
     */
    getLoanComparisons: (loanId: string, params: RequestParams = {}) =>
      this.request<LoanComparisonResponse, any>({
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
     */
    createLoanComparison: (loanId: string, index: number, data: LoanComparisonScenario, params: RequestParams = {}) =>
      this.request<LoanComparisonScenario, UnprocessableEntityResponse>({
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
     */
    deleteLoanComparison: (loanId: string, index: number, params: RequestParams = {}) =>
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
     */
    createLoanComparisonPdf: (loanId: string, data: PostLoanComparisonPdfRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     * @tags LoanDocuments
     * @name GetLoanDocumentBuckets
     * @summary Get Buckets
     * @request GET:/api/loans/{loanId}/documents/buckets
     * @secure
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
     * @tags LoanDocuments
     * @name GetLoanDocument
     * @summary Get By ID
     * @request GET:/api/loans/{loanId}/documents/{documentId}
     * @secure
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
     * @name CreateLoanDocument
     * @summary Create
     * @request POST:/api/loans/{loanId}/documents
     * @secure
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
      this.request<LoanDocument, ProblemDetails | UnprocessableEntityResponse>({
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
     * @tags LoanDrafts
     * @name CreateLoanDraft
     * @summary Create
     * @request POST:/api/loans/drafts
     * @secure
     */
    createLoanDraft: (data: CreateDraftRequest, params: RequestParams = {}) =>
      this.request<DraftResponse, any>({
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
     */
    getLoanDrafts: (params: RequestParams = {}) =>
      this.request<DraftContentResponse[], any>({
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
     * @name SearchLoanDrafts
     * @summary Search
     * @request POST:/api/loans/drafts/search
     * @secure
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
      this.request<DraftContentResponsePaginatedResponse, any>({
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
     * @name ReplaceLoanDraft
     * @summary Replace
     * @request PUT:/api/loans/drafts/{draftId}
     * @secure
     */
    replaceLoanDraft: (draftId: string, data: CreateDraftRequest, params: RequestParams = {}) =>
      this.request<DraftResponse, any>({
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
     * @name GetLoanDraft
     * @summary Get by ID
     * @request GET:/api/loans/drafts/{draftId}
     * @secure
     */
    getLoanDraft: (draftId: string, params: RequestParams = {}) =>
      this.request<DraftContentResponse, any>({
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
     * @name DeleteLoanDraft
     * @summary Delete
     * @request DELETE:/api/loans/drafts/{draftId}
     * @secure
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
     * @tags LoanOfficers
     * @name GetLoanOfficers
     * @summary Get All
     * @request GET:/api/loan-officers
     * @secure
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
      this.request<BranchUserPaginatedResponse, any>({
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
      this.request<BranchUserPaginatedResponse, any>({
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
     */
    getLoanOfficerLoans: (params: RequestParams = {}) =>
      this.request<GetApplicationsResponse, any>({
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
     */
    createLoanOfficerSiteConfiguration: (loanOfficerId: string, data: SiteConfiguration, params: RequestParams = {}) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
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
     */
    getLoanOfficerSiteConfiguration: (loanOfficerId: string, siteConfigurationId: string, params: RequestParams = {}) =>
      this.request<SiteConfiguration, any>({
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
     */
    replaceLoanOfficerSiteConfiguration: (
      loanOfficerId: string,
      siteConfigurationId: string,
      data: SiteConfiguration,
      query?: {
        applyToChildren?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
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
     * @tags Loans
     * @name GetLoans
     * @summary Get Loans
     * @request GET:/api/loans
     * @secure
     */
    getLoans: (params: RequestParams = {}) =>
      this.request<GetApplicationsResponse, any>({
        path: `/api/loans`,
        method: "GET",
        secure: true,
        format: "json",
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
      this.request<UserLoanTask, ProblemDetails | UnprocessableEntityResponse>({
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
     * @tags LoanTasks
     * @name GetLoanTasks
     * @summary Get All
     * @request GET:/api/loans/{loanID}/tasks
     * @secure
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
     */
    getLoanTaskDifference: (loanId: string, params: RequestParams = {}) =>
      this.request<UserLoanTask, ProblemDetails>({
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
     */
    createLoanTask: (loanId: string, taskId: string, data: UserLoanTaskRequest, params: RequestParams = {}) =>
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
     * @name ReplaceLoanTask
     * @summary Replace
     * @request PUT:/api/loans/{loanID}/tasks/{userLoanTaskID}
     * @secure
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
     */
    deleteLoanTask: (loanId: string, userLoanTaskId: string, params: RequestParams = {}) =>
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
     */
    sendOutstandingLoanTaskNotification: (loanId: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/api/loans/${loanId}/tasks/reminders/outstanding`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LoanUsers
     * @name GetLoanUsers
     * @summary Get All
     * @request GET:/api/loans/{loanId}/users
     * @secure
     */
    getLoanUsers: (loanId: string, params: RequestParams = {}) =>
      this.request<LoanUser[], any>({
        path: `/api/loans/${loanId}/users`,
        method: "GET",
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
     * @tags Milestones
     * @name GetMilestones
     * @summary Get All
     * @request GET:/api/milestones
     * @secure
     */
    getMilestones: (params: RequestParams = {}) =>
      this.request<MilestoneConfigurationResponse[], any>({
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
     */
    createMilestone: (data: MilestoneConfigurationRequest, params: RequestParams = {}) =>
      this.request<MilestoneConfigurationResponse, UnprocessableEntityResponse>({
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
     */
    getMilestone: (id: string, params: RequestParams = {}) =>
      this.request<MilestoneConfigurationResponse, Error>({
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
     */
    replaceMilestone: (id: string, data: MilestoneConfigurationRequest, params: RequestParams = {}) =>
      this.request<MilestoneConfigurationResponse, Error | UnprocessableEntityResponse>({
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
     */
    sendNotificationForLoan: (data: SendNotificationForLoanRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     */
    sendTestNotificationForLoan: (data: TestSendNotificationForLoanRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     */
    createNotificationTemplate: (data: NotificationTemplateRequest, params: RequestParams = {}) =>
      this.request<NotificationTemplate, UnprocessableEntityResponse>({
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
     */
    replaceNotificationTemplate: (id: string, data: NotificationTemplateRequest, params: RequestParams = {}) =>
      this.request<NotificationTemplate, UnprocessableEntityResponse>({
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
     */
    getNotificationTemplateVersions: (notificationId: string, params: RequestParams = {}) =>
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
     */
    getNotificationTemplateVersion: (notificationId: string, id: string, params: RequestParams = {}) =>
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
     */
    deleteNotificationTemplateVersion: (notificationId: string, id: string, params: RequestParams = {}) =>
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
     */
    getPartners: (
      query?: {
        showAll?: boolean;
        role?: UserRole;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        pageNumber?: number;
        sortBy?: string;
        sortDirection?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BranchUserPaginatedResponse, any>({
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
      this.request<BranchUserPaginatedResponse, any>({
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
     */
    createPartnerSiteConfiguration: (realtorId: string, data: SiteConfiguration, params: RequestParams = {}) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
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
     */
    getPartnerSiteConfiguration: (realtorId: string, siteConfigurationId: string, params: RequestParams = {}) =>
      this.request<SiteConfiguration, any>({
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
     */
    replacePartnerSiteConfiguration: (
      realtorId: string,
      siteConfigurationId: string,
      data: SiteConfiguration,
      query?: {
        applyToChildren?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
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
     * @tags Pricing
     * @name GetPricingCalculation
     * @summary Get Pricing Calculation
     * @request POST:/api/pricing/calculator
     * @secure
     */
    getPricingCalculation: (data: GetPricingCalculationRequest, params: RequestParams = {}) =>
      this.request<GetPricingForLoanOfficerResponse, UnprocessableEntityResponse>({
        path: `/api/pricing/calculator`,
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
     * @tags RequestQueue
     * @name GetRequestQueues
     * @summary Get All
     * @request GET:/api/request-queue
     * @secure
     */
    getRequestQueues: (params: RequestParams = {}) =>
      this.request<RequestQueue[], any>({
        path: `/api/request-queue`,
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
     * @request POST:/api/request-queue/{id}/run
     * @secure
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
        path: `/api/request-queue/${id}/run`,
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
     * @request DELETE:/api/request-queue/{id}
     * @secure
     */
    deleteQueueRequest: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/request-queue/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SelfProvisioning
     * @name CreateSelfProvisioningItem
     * @summary Create
     * @request POST:/api/selfprovisioning/newcustomer
     * @secure
     */
    createSelfProvisioningItem: (data: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/selfprovisioning/newcustomer`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
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
     */
    searchSiteConfigurationByUrl: (data: GetSiteConfigurationRequest, params: RequestParams = {}) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
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
     */
    getSiteConfigurationByUrl: (
      query?: {
        url?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
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
     */
    searchSiteConfigurationByLoanOfficerUser: (
      data: GetSiteConfigurationByLOUserIDRequest,
      params: RequestParams = {},
    ) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
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
     */
    getSiteConfigurationByLoanOfficerUser: (loUserId: string, params: RequestParams = {}) =>
      this.request<SiteConfiguration, UnprocessableEntityResponse>({
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
      this.request<SiteConfigurationPaginatedResponse, UnprocessableEntityResponse>({
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
     */
    getSamlMetadata: (ssoIntegration: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/api/site-configurations/sso/saml/${ssoIntegration}/metadata`,
        method: "GET",
        secure: true,
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
     */
    getSurveysByUser: (data: SurveyEmailRequest, params: RequestParams = {}) =>
      this.request<SocialSurveyRecord[], UnprocessableEntityResponse>({
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
      this.request<Task[], any>({
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
     * @tags UserImpersonation
     * @name RequestImpersonation
     * @summary Request Impersonation as Impersonator
     * @request POST:/api/users/impersonation/request
     * @secure
     */
    requestImpersonation: (data: RequestImpersonationRequest, params: RequestParams = {}) =>
      this.request<void, Error | UnprocessableEntityResponse>({
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
     */
    allowImpersonation: (data: AllowImpersonationRequest, params: RequestParams = {}) =>
      this.request<void, Error | UnprocessableEntityResponse>({
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
     */
    allowImpersonationWithGuid: (allowToken: string, params: RequestParams = {}) =>
      this.request<void, Error | UnprocessableEntityResponse>({
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
     */
    beginImpersonation: (params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     */
    stopImpersonation: (params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
        path: `/api/users/impersonation`,
        method: "DELETE",
        secure: true,
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
     */
    extendImpersonation: (params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     */
    inviteUser: (data: CreateInviteRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     * @name VerifyUserInvite
     * @summary Verify
     * @request GET:/api/users/invites/{token}/verify
     * @secure
     */
    verifyUserInvite: (token: string, params: RequestParams = {}) =>
      this.request<InviteResponse, UnprocessableEntityResponse>({
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
     * @name CreateUserRelation
     * @summary Create
     * @request POST:/api/users/{userId}/relations
     * @secure
     */
    createUserRelation: (userId: string, data: CreateUserRelationRequest, params: RequestParams = {}) =>
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
     * @name GetUserRelations
     * @summary Get All
     * @request GET:/api/users/{userId}/relations
     * @secure
     */
    getUserRelations: (userId: string, params: RequestParams = {}) =>
      this.request<UserRelationResponse[], any>({
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
     * @name GetUserRelationsByAccount
     * @summary Get by Account
     * @request GET:/api/users/{userId}/relations/account
     * @secure
     */
    getUserRelationsByAccount: (userId: string, params: RequestParams = {}) =>
      this.request<UserRelationResponse[], any>({
        path: `/api/users/${userId}/relations/account`,
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
     * @request DELETE:/api/users/{userId}/relations/{id}
     * @secure
     */
    deleteUserRelation: (id: string, userId: string, params: RequestParams = {}) =>
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
     */
    createUser: (data: CreateUserRequest, params: RequestParams = {}) =>
      this.request<DetailedUser, UnprocessableEntityResponse>({
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
      this.request<UserPaginatedResponse, any>({
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
     */
    signUp: (data: RegisterUserRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
        path: `/api/users/register`,
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
     * @name ReplaceUser
     * @summary Update
     * @request PUT:/api/users/{id}
     * @secure
     */
    replaceUser: (id: string, data: UpdateUserRequest, params: RequestParams = {}) =>
      this.request<DetailedUser, UnprocessableEntityResponse>({
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
     */
    changePassword: (data: ChangePasswordRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     */
    verifyPassword: (data: VerifyPasswordRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     */
    overridePassword: (id: string, data: OverridePasswordRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     */
    forgotPassword: (data: SendForgotPasswordRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     */
    sendMobilePhoneVerificationCode: (params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     */
    verifyUserMobilePhone: (data: UserMobilePhoneVerificationRequest, params: RequestParams = {}) =>
      this.request<void, UnprocessableEntityResponse>({
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
     */
    updateMyPhone: (data: UpdateMobilePhoneRequest, params: RequestParams = {}) =>
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
     * @tags Verifications
     * @name Verify
     * @summary Verify
     * @request POST:/api/verifications/verify
     * @secure
     */
    verify: (data: VerificationRequest, params: RequestParams = {}) =>
      this.request<VerificationResponse, UnprocessableEntityResponse>({
        path: `/api/verifications/verify`,
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
     * @tags Verifications
     * @name GetVerificationStatus
     * @summary Get Status
     * @request POST:/api/verifications/status
     * @secure
     */
    getVerificationStatus: (data: VerificationRequest, params: RequestParams = {}) =>
      this.request<VerificationResponse, UnprocessableEntityResponse>({
        path: `/api/verifications/status`,
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
     * @tags Verifications
     * @name GetVerificationFrontEndMaterials
     * @summary Get Front End Materials
     * @request GET:/api/verifications/frontend-materials/{requestId}
     * @secure
     */
    getVerificationFrontEndMaterials: (requestId: string, params: RequestParams = {}) =>
      this.request<VerificationResponse, UnprocessableEntityResponse>({
        path: `/api/verifications/frontend-materials/${requestId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  accounts = {
    /**
     * No description
     *
     * @tags Accounts
     * @name GetAccounts
     * @summary Get All
     * @request GET:/accounts
     * @secure
     */
    getAccounts: (params: RequestParams = {}) =>
      this.request<Account[], any>({
        path: `/accounts`,
        method: "GET",
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
     * @request PUT:/accounts/{id}/loan
     * @secure
     */
    updateLoansByAccount: (id: string, data: Loan[], params: RequestParams = {}) =>
      this.request<void, ProblemDetails | UnprocessableEntityResponse>({
        path: `/accounts/${id}/loan`,
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
     * @request GET:/accounts/{id}/loan
     * @secure
     */
    getLoansByAccount: (id: string, params: RequestParams = {}) =>
      this.request<Loan[], ProblemDetails>({
        path: `/accounts/${id}/loan`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  refreshToken = {
    /**
     * No description
     *
     * @tags Authentication
     * @name GetTokenFromRefreshToken
     * @summary Generate Token From Refresh Token
     * @request POST:/refresh-token
     * @secure
     */
    getTokenFromRefreshToken: (data: RefreshTokenRequest, params: RequestParams = {}) =>
      this.request<TokenResponse, UnprocessableEntityResponse>({
        path: `/refresh-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  token = {
    /**
     * No description
     *
     * @tags Authentication
     * @name GetToken
     * @summary Get Token
     * @request POST:/token
     * @secure
     */
    getToken: (data: TokenRequest, params: RequestParams = {}) =>
      this.request<TokenResponse, UnprocessableEntityResponse>({
        path: `/token`,
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
     * @request POST:/token/code
     * @secure
     */
    getTokenFromChallengeCode: (data: TokenChallengeRequest, params: RequestParams = {}) =>
      this.request<TokenResponse, UnprocessableEntityResponse>({
        path: `/token/code`,
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
     * @request POST:/token/sso
     * @secure
     */
    getSsoToken: (data: SSOTokenRequest, params: RequestParams = {}) =>
      this.request<SSOTokenResponse, UnprocessableEntityResponse>({
        path: `/token/sso`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  oauth2 = {
    /**
     * No description
     *
     * @tags Authentication
     * @name GetSystemToken
     * @summary Get System Token
     * @request POST:/oauth2/token
     * @secure
     */
    getSystemToken: (data: SystemTokenRequest, params: RequestParams = {}) =>
      this.request<TokenResponse, UnprocessableEntityResponse>({
        path: `/oauth2/token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
