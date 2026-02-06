export type UserRole = "Borrower" | "LoanOfficer" | "Admin" | "SuperAdmin" | "Realtor" | "SettlementAgent" | "LoanProcessor" | "LoanOfficerAssistant" | "BranchManager" | "SystemAdmin";
export type SiteConfigurationType = "None" | "Account" | "Corporate" | "Branch" | "LoanOfficer" | "Partner";
export type SSOIntegrationType = "ConsumerConnect" | "TheBigPOS" | "POSF";
export type LogLevel = "None" | "Info" | "Warning" | "Error";
export type LoanType = "Fha" | "Conventional" | "UsdaRd" | "Va" | "Other";
export type LoanTrustType = "Living" | "Land" | "Testamentary" | "Other";
export type LoanTitleHeld = "Sole" | "JointWithSpouse" | "JointWithOtherThanSpouse";
export type LoanRole = "Borrower" | "CoBorrower" | "NonBorrower" | "LoanOfficer" | "LoanProcessor" | "LoanOfficerAssistant" | "SupportingLoanOfficer" | "BuyerAgent" | "SellerAgent" | "TitleInsuranceAgent" | "EscrowAgent" | "SettlementAgent";
export type LoanRealEstateStatus = "Keep" | "Rent" | "Sell";
export type LoanQueueType = "Unknown" | "New" | "Append" | "Update" | "FieldUpdates" | "Document" | "Buckets";
export type LoanQueueReason = "Unknown" | "Locked" | "LOSError" | "Exception";
export type LoanPurpose = "Purchase" | "Refinance";
export type LoanPropertyType = "SingleFamily" | "MultiFamily" | "Condominium" | "Townhouse" | "ManufacturedHome" | "PlannedUnitDevelopment" | "ModularHome" | "Other";
export type LoanPhoneNumberType = "Home" | "Cell" | "Work" | "Fax" | "Other";
export type LoanPacificIslanderRace = "NativeHawaiian" | "GuamanianOrChamorro" | "Samoan" | "Other";
export type LoanOwnershipInterestPropertyType = "PrimaryResidence" | "FHASecondaryResidence" | "SecondaryResidence" | "Investment";
export type LoanOtherLiabilityType = "Alimony" | "ChildSupport" | "SeparateMaintenance" | "JobRelatedExpense" | "Other";
export type LoanOtherIncomeType = "AccessoryUnitIncome" | "Alimony" | "AutomobileAllowance" | "BoarderIncome" | "CapitalGains" | "ChildSupport" | "DefinedContributionPlan" | "Disability" | "DividendsInterest" | "EmploymentRelatedAccount" | "FosterCare" | "HousingAllowance" | "HousingChoiceVoucherProgram" | "MortgageCreditCertificate" | "MortgageDifferential" | "NonBorrowerHouseholdIncome" | "NotesReceivableInstallment" | "Pension" | "PublicAssistance" | "Royalties" | "SeparateMaintenance" | "SocialSecurity" | "TemporaryLeave" | "TipIncome" | "Trust" | "VABenefitsNonEducational" | "Other";
export type LoanOtherAssetType = "ProceedsRealEstate" | "ProceedsNonRealEstate" | "SecuredBorrowerFunds" | "UnsecuredBorrowerFunds" | "EarnestMoney" | "EmployerAssistance" | "LotEquity" | "ReAddressFunds" | "RentCredit" | "SweatEquity" | "TradeEquity" | "Other";
export type LoanOccupancyType = "PrimaryHome" | "SecondHome" | "InvestmentProperty" | "Other";
export type LoanNameSuffix = "Jr" | "Sr" | "II" | "III" | "IV" | "V" | "VI" | "VII";
export type LoanNamePrefix = "Mr" | "Mrs" | "Ms";
export type LoanMilitaryServiceType = "Current" | "RetiredDischargedSeparated" | "NonActivatedNationalGuard" | "SurvivingSpouse";
export type LoanMaritalStatus = "Married" | "Separated" | "Unmarried";
export type LoanLogType = "Loan" | "Queue" | "POSFlagChanged" | "Verification" | "DocumentUploaded" | "LoanCreated" | "WorkflowSubmitted" | "UserInvitationSent" | "CoBorrowerAdded" | "TaskCompleted" | "LoanStatusChanged" | "EConsent";
export type LoanLienPosition = "First" | "Subordinate";
export type LoanLiabilityType = "Revolving" | "Installment" | "Open30Day" | "Lease" | "Other";
export type LoanLanguagePreference = "English" | "Chinese" | "Korean" | "Spanish" | "Tagalog" | "Vietnamese" | "Other";
export type LoanImportStatus = "WaitingProcess" | "InProgress" | "Completed" | "Failed" | "Cancelled";
export type LoanImportMode = "All" | "NewOnly" | "UpdateOnly";
export type LoanHousingType = "NoExpense" | "Own" | "Rent";
export type LoanHomeOwnershipType = "Counseling" | "Education" | "Other";
export type LoanHomeOwnershipFormat = "InPerson" | "Online" | "Telephone";
export type LoanHispanicEthnicity = "Mexican" | "PuertoRican" | "Cuban" | "Other";
export type LoanGiftSource = "CommunityNonProfit" | "Employer" | "FederalAgency" | "LocalAgency" | "Relative" | "ReligiousNonProfit" | "StateAgency" | "UnmarriedPartner" | "Lender" | "Other";
export type LoanGiftAssetType = "Cash" | "Asset" | "Equity";
export type LoanGenderType = "Male" | "Female";
export type LoanCitizenship = "USCitizen" | "PermanentResidentAlien" | "NonPermanentResidentAlien";
export type LoanBankruptcyType = "Chapter7" | "Chapter11" | "Chapter12" | "Chapter13";
export type LoanAsianRace = "AsianIndian" | "Chinese" | "Filipino" | "Japanese" | "Korean" | "Vietnamese" | "Other";
export type LoanAccountAssetType = "Checking" | "Savings" | "MoneyMarket" | "CertificateOfDeposit" | "MutualFund" | "Stocks" | "Bonds" | "Retirement" | "BridgeLoanProceeds" | "IndividualDevelopmentAccount" | "TrustAccount" | "CashValueOfLifeInsurance" | "Other";
export type LoanAccessScopeType = "User" | "Branch";
export type LOSStatus = "Unknown" | "Pending" | "Retrying" | "Successful" | "Failed" | "FailedPermanently" | "Uploaded" | "PendingSync";
export type FilterType = "DateGreaterThanOrEqualTo" | "DateGreaterThan" | "DateLessThan" | "DateLessThanOrEqualTo" | "DateEquals" | "DateDoesntEqual" | "DateNonEmpty" | "DateEmpty" | "StringContains" | "StringEquals" | "StringNotEmpty" | "StringNotEquals" | "StringNotContains";
export type Environment = "Development" | "Staging" | "UAT" | "Production";
export type EntityType = "Account" | "Corporate" | "Branch" | "LoanOfficer" | "Realtor";
export type DraftType = "NewLoan" | "EditLoan";
export type ConsentType = "Econsent" | "CreditAuthorization" | "Tcpa";
export type BranchType = "Mortgage" | "RealEstate";
export type BorrowerType = "Borrower" | "CoBorrower" | "Unknown";
export type BorrowerRelationship = "NotApplicable" | "Spouse" | "NonSpouse";
export type AddressFamily = "Unspecified" | "Unix" | "InterNetwork" | "ImpLink" | "Pup" | "Chaos" | "NS" | "Ipx" | "Iso" | "Osi" | "Ecma" | "DataKit" | "Ccitt" | "Sna" | "DecNet" | "DataLink" | "Lat" | "HyperChannel" | "AppleTalk" | "NetBios" | "VoiceView" | "FireFox" | "Banyan" | "Atm" | "InterNetworkV6" | "Cluster" | "Ieee12844" | "Irda" | "NetworkDesigners" | "Max" | "Packet" | "ControllerAreaNetwork" | "Unknown";
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
export interface AccountReportFailure {
    /** @format uuid */
    accountID: string;
    accountName: string;
    errorMessage: string;
}
export interface AccountSettings {
    isSmsEnabled: boolean;
    isLoanEditEnabled: boolean;
    smsNumber?: string | null;
    ssoHostOverride?: string | null;
    isEarlyAdopter: boolean;
}
export interface AccountSettingsRequest {
    isSmsEnabled: boolean;
    smsNumber?: string | null;
    isEarlyAdopter: boolean;
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
    /**
     * @minLength 1
     * @maxLength 255
     */
    street: string;
    /** @maxLength 50 */
    unit?: string | null;
    /** @maxLength 50 */
    unitType?: string | null;
    /**
     * @minLength 1
     * @maxLength 100
     */
    city: string;
    /** @minLength 1 */
    state: string;
    /** @maxLength 100 */
    county?: string | null;
    /** @minLength 1 */
    postalCode: string;
}
export interface AddressV3 {
    /** @format uuid */
    id?: string | null;
    street?: string | null;
    unit?: string | null;
    unitType?: string | null;
    city?: string | null;
    state?: string | null;
    county?: string | null;
    postalCode?: string | null;
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
export interface AffordabilityCalculator {
    /** @format double */
    monthlyPrincipalAndInterest: number;
    /** @format double */
    monthlyTaxes: number;
    /** @format double */
    monthlyInsurance: number;
    /** @format double */
    monthlyPmi: number;
    /** @format double */
    monthlyTotal: number;
    /** @format double */
    actualFrontRatio: number;
    /** @format double */
    actualBackRatio: number;
    /** @format double */
    loanAmount: number;
    /** @format double */
    downPayment: number;
    /** @format double */
    homeValue: number;
    amortization: Amortization;
}
export interface AffordabilityCalculatorRequest {
    /**
     * @format double
     * @min 0
     * @max 200000
     */
    totalMonthlyIncome: number;
    /**
     * @format double
     * @min 0
     */
    totalMonthlyExpenses: number;
    /**
     * @format double
     * @min 0
     * @max 95
     */
    downPayment: number;
    /**
     * @format double
     * @min 1
     * @max 25
     */
    interestRate: number;
    /**
     * @format int32
     * @min 1
     * @max 40
     */
    term: number;
    /**
     * @format double
     * @min 0
     * @max 10
     */
    pmi: number;
    /**
     * @format double
     * @min 5
     * @max 60
     */
    frontRatio: number;
    /**
     * @format double
     * @min 5
     * @max 80
     */
    backRatio: number;
    /**
     * @format double
     * @min 0
     * @max 200000
     */
    annualTaxes: number;
    /**
     * @format double
     * @min 200
     * @max 50000
     */
    annualInsurance: number;
}
export interface AllowImpersonationRequest {
    /**
     * @format email
     * @minLength 1
     */
    email: string;
}
export interface Amortization {
    /** @format double */
    balance: number;
    /** @format double */
    periodicInterest: number;
    /** @format int32 */
    periods: number;
    /** @format double */
    periodicPayment: number;
    /** @format double */
    totalInterest: number;
    /** @format double */
    totalPayment: number;
    /** @format date-time */
    startDate: string;
    /** @format date-time */
    endDate?: string | null;
    schedule: AmortizationSchedule[];
    /** @format int32 */
    monthsWithPmi: number;
}
export interface AmortizationSchedule {
    /** @format double */
    interest: number;
    /** @format double */
    principal: number;
    /** @format double */
    balance: number;
    /** @format date-time */
    date: string;
    /** @format double */
    pmi: number;
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
    /** @format uuid */
    id: string;
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
export interface BranchSummary {
    /** @format uuid */
    id: string;
    name: string;
    type: string;
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
export interface ClosedLoansReport {
    /** @format int32 */
    totalClosedPosLoans: number;
    /** @format int32 */
    totalClosedNonPosLoans: number;
    /** @format double */
    totalUtilization: number;
    accounts: ClosedLoansReportAccount[];
}
export interface ClosedLoansReportAccount {
    /** @format uuid */
    id: string;
    name: string;
    /** @format int32 */
    closedPosLoans: number;
    /** @format int32 */
    closedNonPosLoans: number;
    /** @format double */
    utilization: number;
}
export interface ClosedLoansReportRequest {
    /**
     * @format date
     * @minLength 1
     */
    startDate: string;
    /**
     * @format date
     * @minLength 1
     */
    endDate: string;
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
export interface ContactInfo {
    phone: string;
    tollFreePhone?: string | null;
    fax?: string | null;
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
export interface CreateAccessScopeRequest {
    scopeType: "User" | "Branch";
    /** @format uuid */
    userId?: string | null;
    /** @format uuid */
    branchId?: string | null;
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
export interface CreateGroupMemberRequest {
    /** @format uuid */
    userId: string;
    loanRole: "Borrower" | "CoBorrower" | "NonBorrower" | "LoanOfficer" | "LoanProcessor" | "LoanOfficerAssistant" | "SupportingLoanOfficer" | "BuyerAgent" | "SellerAgent" | "TitleInsuranceAgent" | "EscrowAgent" | "SettlementAgent";
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
    /** @format uuid */
    accountID: string;
    /**
     * @format date-time
     * @minLength 1
     */
    endDate: string;
    /**
     * @format date-time
     * @minLength 1
     */
    startDate: string;
    importMode: "All" | "NewOnly" | "UpdateOnly";
}
export interface CreateSession {
    sessionId: string;
    sessionUrl: string;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    expiresAt?: string | null;
}
export interface CreateSessionRequest {
    packageId: string;
    recipientId: string;
}
export interface CreateUserDeviceRequest {
    token: string;
}
export interface CreateUserDraft {
    loanRole: "Borrower" | "CoBorrower" | "NonBorrower" | "LoanOfficer" | "LoanProcessor" | "LoanOfficerAssistant" | "SupportingLoanOfficer" | "BuyerAgent" | "SellerAgent" | "TitleInsuranceAgent" | "EscrowAgent" | "SettlementAgent";
}
export interface CreateUserGroupRequest {
    /**
     * @minLength 1
     * @maxLength 200
     */
    name: string;
    /** @maxLength 1000 */
    description?: string | null;
}
export interface CreateUserLoan {
    loanRole?: LoanRole | null;
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
    documentBucketTitle?: string | null;
    documentName?: string | null;
    /** @format date-time */
    createdAt: string;
    extension?: string | null;
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
export interface DocumentFile {
    /** @format uuid */
    id: string;
    name: string;
    losStatus: string;
}
export interface DocumentFolder {
    folderName: string;
    /** @format int32 */
    count: number;
    files: DocumentFile[];
}
export interface DocumentSync {
    /** @format int32 */
    syncedCount: number;
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
    /** @format uuid */
    loanID?: string | null;
    type: "NewLoan" | "EditLoan";
    isCoBorrower: boolean;
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
    /** @format uuid */
    loanID?: string | null;
    type: "NewLoan" | "EditLoan";
    isCoBorrower: boolean;
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
    autoTaskReminders?: boolean | null;
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
    autoNameTaskDocuments?: boolean | null;
}
export interface EncompassContact {
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    company?: string | null;
}
export interface EncompassError {
    errorCode: string;
    message: string;
    details?: string[] | null;
}
export interface EncompassPackageItem {
    packageId: string;
    status: string;
    /** @format date-time */
    createdAt: string;
    recipientId: string;
}
export interface EncompassPackageList {
    packages: EncompassPackageItem[];
    /** @format int32 */
    totalCount: number;
    /** @format int32 */
    page: number;
    /** @format int32 */
    pageSize: number;
    /** @format int32 */
    totalPages: number;
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
    filterType: "DateGreaterThanOrEqualTo" | "DateGreaterThan" | "DateLessThan" | "DateLessThanOrEqualTo" | "DateEquals" | "DateDoesntEqual" | "DateNonEmpty" | "DateEmpty" | "StringContains" | "StringEquals" | "StringNotEmpty" | "StringNotEquals" | "StringNotContains";
    targetField: string;
    targetValue: string;
}
export interface GenerateDocumentRequest {
    /** @deprecated */
    loanID?: string | null;
    /**
     * @format uuid
     * @minLength 1
     */
    templateID: string;
    /**
     * @deprecated
     * @format uuid
     */
    siteConfigurationID?: string | null;
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
export interface GuidPatchOperation {
    op: string;
    path: string;
    value?: any;
    from?: string | null;
}
export interface IPAddress {
    addressFamily: "Unspecified" | "Unix" | "InterNetwork" | "ImpLink" | "Pup" | "Chaos" | "NS" | "Ipx" | "Iso" | "Osi" | "Ecma" | "DataKit" | "Ccitt" | "Sna" | "DecNet" | "DataLink" | "Lat" | "HyperChannel" | "AppleTalk" | "NetBios" | "VoiceView" | "FireFox" | "Banyan" | "Atm" | "InterNetworkV6" | "Cluster" | "Ieee12844" | "Irda" | "NetworkDesigners" | "Max" | "Packet" | "ControllerAreaNetwork" | "Unknown";
    /** @format int64 */
    scopeId: number;
    isIPv6Multicast: boolean;
    isIPv6LinkLocal: boolean;
    isIPv6SiteLocal: boolean;
    isIPv6Teredo: boolean;
    isIPv6UniqueLocal: boolean;
    isIPv4MappedToIPv6: boolean;
    /**
     * @deprecated
     * @format int64
     */
    address: number;
}
export interface ImpersonatedDetailedUser {
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
    /** @deprecated */
    impersonatedBy?: string | null;
    impersonatingUser?: User | null;
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
    /** @deprecated */
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
    loan: LoanIdentifier;
    url: string;
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
    useLocalPipeline: boolean;
    usageReportLoanStatusFilter?: string | null;
}
export interface LOSSettingsUpdateRequest {
    retailLoanClosingDateFieldID: string;
    wholesaleLoanClosingDateFieldID: string;
    brokerLoanClosingDateFieldID: string;
    correspondentLoanClosingDateFieldID: string;
    customEConsentBucketTitle?: string | null;
    loanMilestoneNotificationsEnabled: boolean;
    usageReportLoanStatusFilter?: string | null;
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
    referenceID: string;
    type?: LoanType | null;
    purpose?: LoanPurpose | null;
    lienPosition?: LoanLienPosition | null;
    status?: string | null;
    currentLoanStatus?: string | null;
    currentMilestone?: string | null;
    lastCompletedMilestone?: string | null;
    /** @format date-time */
    currentStatusDate?: string | null;
    isActive: boolean;
    loanChannel?: string | null;
    loanProgram?: string | null;
    loanType?: string | null;
    /** @format int32 */
    term?: number | null;
    /** @format double */
    totalLoanAmount?: number | null;
    fileStarter?: string | null;
    source?: string | null;
    isPOSLoan?: boolean | null;
    /** @format date-time */
    startDate?: string | null;
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
    isInSync: boolean;
    /** @format date-time */
    syncDate?: string | null;
    isLocked: boolean;
    isLockedFromEditing: boolean;
    excludeFromAutoTaskReminders?: boolean | null;
    loanSettings?: LoanSettings | null;
    loanOfficer?: LoanOfficer | null;
    propertyAddress?: Address | null;
    property?: LoanProperty | null;
    financial?: LoanFinancial | null;
    borrowers: LoanBorrower[];
    nonOwningBorrowers: LoanNonOwningBorrower[];
    loanLogs: LoanLog[];
    userLoans: UserLoan[];
    contacts: LoanContact[];
}
export interface LoanApplication {
    /** @format uuid */
    id?: string | null;
    loanOfficerEmail?: string | null;
    type?: LoanType | null;
    purpose?: LoanPurpose | null;
    lienPosition?: LoanLienPosition | null;
    number?: string | null;
    program?: string | null;
    channel?: string | null;
    /** @format date-time */
    startDate?: string | null;
    property?: LoanProperty | null;
    financial?: LoanFinancial | null;
    borrowers: LoanBorrower[];
    nonOwningBorrowers: LoanNonOwningBorrower[];
}
export interface LoanApplicationRequest {
    /** @format uuid */
    accountID: string;
    /** @format uuid */
    userID: string;
    /** @format uuid */
    siteConfigurationID: string;
    loanOfficerEmail?: string | null;
    purpose?: LoanPurpose | null;
    referrer?: string | null;
    companyName?: string | null;
    property?: LoanPropertyRequest | null;
    financial?: LoanFinancialRequest | null;
    /** @minItems 1 */
    borrowers: LoanBorrowerRequest[];
    nonOwningBorrowers: LoanNonOwningBorrowerRequest[];
    /** @format uuid */
    existingLoanId?: string | null;
}
export interface LoanBorrower {
    /** @format uuid */
    id?: string | null;
    ssn?: string | null;
    email?: string | null;
    lastName?: string | null;
    firstName?: string | null;
    middleName?: string | null;
    prefix?: LoanNamePrefix | null;
    suffix?: LoanNameSuffix | null;
    /** @format date */
    birthDate?: string | null;
    citizenship?: LoanCitizenship | null;
    maritalStatus?: LoanMaritalStatus | null;
    languagePreference?: LoanLanguagePreference | null;
    /** @format int32 */
    numberOfDependents?: number | null;
    isPrimaryBorrower: boolean;
    isFirstTimeHomeBuyer?: boolean | null;
    hasJointAssetsAndLiabilities?: boolean | null;
    dependentAges?: number[] | null;
    demographics?: LoanBorrowerDemographics | null;
    declarations?: LoanBorrowerDeclarations | null;
    militaryService?: LoanBorrowerMilitaryService | null;
    gifts: LoanBorrowerGift[];
    addresses: LoanBorrowerAddress[];
    consents: LoanBorrowerConsent[];
    liabilities: LoanBorrowerLiability[];
    otherAssets: LoanBorrowerOtherAsset[];
    otherIncome: LoanBorrowerOtherIncome[];
    phoneNumbers: LoanBorrowerPhoneNumber[];
    accountAssets: LoanBorrowerAccountAsset[];
    homeOwnership: LoanBorrowerHomeOwnership[];
    alternateNames: LoanBorrowerAlternateName[];
    otherLiabilities: LoanBorrowerOtherLiability[];
    realEstateAssets: LoanBorrowerRealEstateAsset[];
    currentEmployment: LoanBorrowerEmploymentCurrent[];
    previousEmployment: LoanBorrowerEmploymentPrevious[];
}
export interface LoanBorrowerAccountAsset {
    /** @format uuid */
    id?: string | null;
    name?: string | null;
    accountNumber?: string | null;
    financialInstitution?: string | null;
    /** @format double */
    value?: number | null;
    type?: LoanAccountAssetType | null;
}
export interface LoanBorrowerAccountAssetRequest {
    /** @maxLength 255 */
    financialInstitution?: string | null;
    /**
     * @format double
     * @min 0
     */
    value?: number | null;
    type?: LoanAccountAssetType | null;
}
export interface LoanBorrowerAddress {
    /** @format uuid */
    id?: string | null;
    street?: string | null;
    unit?: string | null;
    unitType?: string | null;
    city?: string | null;
    state?: string | null;
    county?: string | null;
    postalCode?: string | null;
    housing?: LoanHousingType | null;
    /** @format double */
    rentAmount?: number | null;
    isCurrent?: boolean | null;
    isMailingAddress?: boolean | null;
    timeAtAddress?: TimeAtAddress | null;
}
export interface LoanBorrowerAddressRequest {
    /** @maxLength 255 */
    street?: string | null;
    /** @maxLength 50 */
    unit?: string | null;
    /** @maxLength 50 */
    unitType?: string | null;
    /** @maxLength 100 */
    city?: string | null;
    state?: string | null;
    /** @maxLength 100 */
    county?: string | null;
    postalCode?: string | null;
    housing?: LoanHousingType | null;
    /**
     * @format double
     * @min 0
     */
    rentAmount?: number | null;
    isCurrent?: boolean | null;
    isMailingAddress?: boolean | null;
    timeAtAddress?: TimeAtAddressRequest | null;
}
export interface LoanBorrowerAlternateName {
    /** @format uuid */
    id?: string | null;
    suffix?: string | null;
    lastName?: string | null;
    firstName?: string | null;
    middleName?: string | null;
}
export interface LoanBorrowerAlternateNameRequest {
    /** @maxLength 20 */
    suffix?: string | null;
    /** @maxLength 100 */
    lastName?: string | null;
    /** @maxLength 100 */
    firstName?: string | null;
    /** @maxLength 100 */
    middleName?: string | null;
}
export interface LoanBorrowerBankruptcyChaptersRequest {
    chapter7?: boolean | null;
    chapter11?: boolean | null;
    chapter12?: boolean | null;
    chapter13?: boolean | null;
}
export interface LoanBorrowerBankruptcyDeclaration {
    /** @format uuid */
    id?: string | null;
    isAffirmative?: boolean | null;
    description?: string | null;
    types?: LoanBankruptcyType[] | null;
}
export interface LoanBorrowerBankruptcyDeclarationRequest {
    isAffirmative?: boolean | null;
    /** @maxLength 1000 */
    description?: string | null;
    chapters?: LoanBorrowerBankruptcyChaptersRequest | null;
    types?: LoanBankruptcyType[] | null;
}
export interface LoanBorrowerConsent {
    /** @format uuid */
    id?: string | null;
    type?: ConsentType | null;
    providedConsent?: boolean | null;
    ipAddress?: string | null;
}
export interface LoanBorrowerConsentRequest {
    type?: ConsentType | null;
    providedConsent?: boolean | null;
    ipAddress?: IPAddress | null;
}
export interface LoanBorrowerDeclarations {
    /** @format uuid */
    id?: string | null;
    borrowingMoney?: LoanBorrowerMoneyDeclaration | null;
    bankruptcy?: LoanBorrowerBankruptcyDeclaration | null;
    primaryResidence?: LoanBorrowerPrimaryResidenceDeclaration | null;
    foreclosure?: LoanBorrowerSimpleDeclaration | null;
    coSignerOnDebt?: LoanBorrowerSimpleDeclaration | null;
    partyToLawsuit?: LoanBorrowerSimpleDeclaration | null;
    outstandingJudgments?: LoanBorrowerSimpleDeclaration | null;
    applyingForNewCredit?: LoanBorrowerSimpleDeclaration | null;
    subjectToLienPriority?: LoanBorrowerSimpleDeclaration | null;
    inDelinquencyOrDefault?: LoanBorrowerSimpleDeclaration | null;
    relationshipWithSeller?: LoanBorrowerSimpleDeclaration | null;
    preForeclosureOrShortSale?: LoanBorrowerSimpleDeclaration | null;
    applyingForAnotherMortgage?: LoanBorrowerSimpleDeclaration | null;
    conveyedTitleToPropertyForeclosure?: LoanBorrowerSimpleDeclaration | null;
}
export interface LoanBorrowerDeclarationsRequest {
    borrowingMoney?: LoanBorrowerMoneyDeclarationRequest | null;
    bankruptcy?: LoanBorrowerBankruptcyDeclarationRequest | null;
    primaryResidence?: LoanBorrowerPrimaryResidenceDeclarationRequest | null;
    foreclosure?: LoanBorrowerSimpleDeclarationRequest | null;
    coSignerOnDebt?: LoanBorrowerSimpleDeclarationRequest | null;
    partyToLawsuit?: LoanBorrowerSimpleDeclarationRequest | null;
    outstandingJudgments?: LoanBorrowerSimpleDeclarationRequest | null;
    applyingForNewCredit?: LoanBorrowerSimpleDeclarationRequest | null;
    subjectToLienPriority?: LoanBorrowerSimpleDeclarationRequest | null;
    inDelinquencyOrDefault?: LoanBorrowerSimpleDeclarationRequest | null;
    relationshipWithSeller?: LoanBorrowerSimpleDeclarationRequest | null;
    preForeclosureOrShortSale?: LoanBorrowerSimpleDeclarationRequest | null;
    applyingForAnotherMortgage?: LoanBorrowerSimpleDeclarationRequest | null;
    conveyedTitleToPropertyForeclosure?: LoanBorrowerSimpleDeclarationRequest | null;
}
export interface LoanBorrowerDemographics {
    /** @format uuid */
    id?: string | null;
    race?: LoanBorrowerDemographicsRace | null;
    gender?: LoanBorrowerDemographicsGender | null;
    ethnicity?: LoanBorrowerDemographicsEthnicity | null;
}
export interface LoanBorrowerDemographicsEthnicity {
    /** @format uuid */
    id?: string | null;
    isDeclined?: boolean | null;
    isHispanicOrLatino?: boolean | null;
    otherHispanicOrLatino?: string | null;
    hispanicOrLatinoEthnicities?: LoanHispanicEthnicity[] | null;
}
export interface LoanBorrowerDemographicsEthnicityRequest {
    OptOut?: boolean | null;
    Hispanic?: boolean | null;
    /** @maxLength 255 */
    OtherHispanic?: string | null;
    Mexican?: boolean | null;
    PuertoRican?: boolean | null;
    Cuban?: boolean | null;
    NotHispanic?: boolean | null;
    hispanicOrLatinoEthnicities?: LoanHispanicEthnicity[] | null;
}
export interface LoanBorrowerDemographicsGender {
    /** @format uuid */
    id?: string | null;
    isDeclined?: boolean | null;
    gender?: LoanGenderType | null;
}
export interface LoanBorrowerDemographicsGenderRequest {
    Male?: boolean | null;
    Female?: boolean | null;
    OptOut?: boolean | null;
    gender?: LoanGenderType | null;
}
export interface LoanBorrowerDemographicsRace {
    /** @format uuid */
    id?: string | null;
    isAmericanIndianOrAlaskanNative?: boolean | null;
    otherAmericanIndianOrAlaskanNative?: string | null;
    isAsian?: boolean | null;
    asianRaces?: LoanAsianRace[] | null;
    otherAsianRace?: string | null;
    isBlackOrAfrican?: boolean | null;
    isPacificIslander?: boolean | null;
    pacificIslanderRace?: LoanPacificIslanderRace[] | null;
    otherPacificIslanderRace?: string | null;
    isWhite?: boolean | null;
    isDeclined?: boolean | null;
}
export interface LoanBorrowerDemographicsRaceRequest {
    AmericanIndian?: boolean | null;
    /** @maxLength 255 */
    TribeName?: string | null;
    Asian?: boolean | null;
    AsianIndian?: boolean | null;
    Chinese?: boolean | null;
    Filipino?: boolean | null;
    Japanese?: boolean | null;
    Korean?: boolean | null;
    Vietnamese?: boolean | null;
    /** @maxLength 255 */
    OtherAsian?: string | null;
    Black?: boolean | null;
    NativeIslander?: boolean | null;
    NativeHawaiian?: boolean | null;
    Guamanian?: boolean | null;
    Samoan?: boolean | null;
    /** @maxLength 255 */
    OtherNativeIslander?: string | null;
    White?: boolean | null;
    OptOut?: boolean | null;
    asianRaces?: LoanAsianRace[] | null;
    pacificIslanderRace?: LoanPacificIslanderRace[] | null;
}
export interface LoanBorrowerDemographicsRequest {
    race?: LoanBorrowerDemographicsRaceRequest | null;
    gender?: LoanBorrowerDemographicsGenderRequest | null;
    ethnicity?: LoanBorrowerDemographicsEthnicityRequest | null;
}
export interface LoanBorrowerEmploymentCurrent {
    /** @format uuid */
    id?: string | null;
    name?: string | null;
    title?: string | null;
    phoneNumber?: string | null;
    /** @format date */
    startDate?: string | null;
    isSelfEmployed?: boolean | null;
    isEmployedByPartyInTransaction?: boolean | null;
    address?: AddressV3 | null;
    ownership?: LoanBorrowerEmploymentCurrentOwnership | null;
    grossIncome?: LoanBorrowerEmploymentCurrentGrossIncome | null;
    timeInLineOfWork?: LoanBorrowerEmploymentCurrentTimeInLineOfWork | null;
}
export interface LoanBorrowerEmploymentCurrentGrossIncome {
    /** @format uuid */
    id?: string | null;
    /** @format double */
    base?: number | null;
    /** @format double */
    other?: number | null;
    /** @format double */
    bonus?: number | null;
    /** @format double */
    overtime?: number | null;
    /** @format double */
    commission?: number | null;
    /** @format double */
    militaryEntitlements?: number | null;
}
export interface LoanBorrowerEmploymentCurrentGrossIncomeRequest {
    /**
     * @format double
     * @min 0
     */
    base?: number | null;
    /** @format double */
    hourlyRate?: number | null;
    /** @format int32 */
    hoursPerWeek?: number | null;
    /** @format double */
    distributions?: number | null;
    /**
     * @format double
     * @min 0
     */
    other?: number | null;
    /**
     * @format double
     * @min 0
     */
    bonus?: number | null;
    /**
     * @format double
     * @min 0
     */
    overtime?: number | null;
    /**
     * @format double
     * @min 0
     */
    commission?: number | null;
    /**
     * @format double
     * @min 0
     */
    militaryEntitlements?: number | null;
}
export interface LoanBorrowerEmploymentCurrentOwnership {
    /** @format uuid */
    id?: string | null;
    isOwner?: boolean | null;
    hasOwnershipOver25Percent?: boolean | null;
    /** @format double */
    monthlyIncome?: number | null;
}
export interface LoanBorrowerEmploymentCurrentOwnershipRequest {
    isOwner?: boolean | null;
    hasOwnershipOver25Percent?: boolean | null;
    /**
     * @format double
     * @min 0
     */
    monthlyIncome?: number | null;
}
export interface LoanBorrowerEmploymentCurrentRequest {
    /** @maxLength 255 */
    name?: string | null;
    /** @maxLength 100 */
    title?: string | null;
    phoneNumber?: string | null;
    /** @format date */
    startDate?: string | null;
    isSelfEmployed?: boolean | null;
    isEmployedByPartyInTransaction?: boolean | null;
    address?: AddressRequest | null;
    ownership?: LoanBorrowerEmploymentCurrentOwnershipRequest | null;
    grossIncome?: LoanBorrowerEmploymentCurrentGrossIncomeRequest | null;
    timeInLineOfWork?: LoanBorrowerEmploymentCurrentTimeInLineOfWorkRequest | null;
}
export interface LoanBorrowerEmploymentCurrentTimeInLineOfWork {
    /** @format uuid */
    id?: string | null;
    /** @format int32 */
    years?: number | null;
    /** @format int32 */
    months?: number | null;
}
export interface LoanBorrowerEmploymentCurrentTimeInLineOfWorkRequest {
    /** @format int32 */
    years?: number | null;
    /** @format int32 */
    months?: number | null;
}
export interface LoanBorrowerEmploymentPrevious {
    /** @format uuid */
    id?: string | null;
    name?: string | null;
    title?: string | null;
    phoneNumber?: string | null;
    /** @format date */
    startDate?: string | null;
    /** @format date */
    endDate?: string | null;
    /** @format double */
    grossIncome?: number | null;
    isSelfEmployed?: boolean | null;
    address?: AddressV3 | null;
}
export interface LoanBorrowerEmploymentPreviousRequest {
    /** @maxLength 255 */
    name?: string | null;
    /** @maxLength 100 */
    title?: string | null;
    phoneNumber?: string | null;
    /** @format date */
    startDate?: string | null;
    /** @format date */
    endDate?: string | null;
    /**
     * @format double
     * @min 0
     */
    grossIncome?: number | null;
    isSelfEmployed?: boolean | null;
    address?: AddressRequest | null;
}
export interface LoanBorrowerGift {
    /** @format uuid */
    id?: string | null;
    /** @format double */
    value?: number | null;
    isDeposited?: boolean | null;
    source?: LoanGiftSource | null;
    assetType?: LoanGiftAssetType | null;
}
export interface LoanBorrowerGiftRequest {
    /**
     * @format double
     * @min 0
     */
    value?: number | null;
    isDeposited?: boolean | null;
    source?: LoanGiftSource | null;
    assetType?: LoanGiftAssetType | null;
}
export interface LoanBorrowerHomeOwnership {
    /** @format uuid */
    id?: string | null;
    /** @format date */
    dateCompleted?: string | null;
    type?: LoanHomeOwnershipType | null;
    format?: LoanHomeOwnershipFormat | null;
    provider?: LoanBorrowerHomeOwnershipProvider | null;
}
export interface LoanBorrowerHomeOwnershipProvider {
    /** @format uuid */
    id?: string | null;
    name?: string | null;
    phoneNumber?: string | null;
    address?: AddressV3 | null;
}
export interface LoanBorrowerHomeOwnershipProviderRequest {
    /** @maxLength 255 */
    name?: string | null;
    phoneNumber?: string | null;
    address?: AddressRequest | null;
}
export interface LoanBorrowerHomeOwnershipRequest {
    /** @format date */
    dateCompleted?: string | null;
    type?: LoanHomeOwnershipType | null;
    format?: LoanHomeOwnershipFormat | null;
    provider?: LoanBorrowerHomeOwnershipProviderRequest | null;
}
export interface LoanBorrowerLiability {
    /** @format uuid */
    id?: string | null;
    type?: LoanLiabilityType | null;
    name?: string | null;
    accountNumber?: string | null;
    financialInstitution?: string | null;
    /** @format double */
    balance?: number | null;
    /** @format double */
    monthlyPayment?: number | null;
    /** @format int32 */
    monthsLeftToPay?: number | null;
    isPaidOffBeforeClosing?: boolean | null;
}
export interface LoanBorrowerLiabilityRequest {
    type?: LoanLiabilityType | null;
    /** @maxLength 255 */
    name?: string | null;
    /** @maxLength 50 */
    accountNumber?: string | null;
    /** @maxLength 255 */
    financialInstitution?: string | null;
    /**
     * @format double
     * @min 0
     */
    balance?: number | null;
    /**
     * @format double
     * @min 0
     */
    monthlyPayment?: number | null;
    /**
     * @format int32
     * @min 0
     */
    monthsLeftToPay?: number | null;
    isPaidOffBeforeClosing?: boolean | null;
}
export interface LoanBorrowerMilitaryService {
    /** @format uuid */
    id?: string | null;
    hasServed?: boolean | null;
    /** @format date */
    endDate?: string | null;
    type?: LoanMilitaryServiceType | null;
}
export interface LoanBorrowerMilitaryServiceRequest {
    hasServed?: boolean | null;
    /** @format date */
    endDate?: string | null;
    type?: LoanMilitaryServiceType | null;
}
export interface LoanBorrowerMoneyDeclaration {
    /** @format uuid */
    id?: string | null;
    isAffirmative?: boolean | null;
    description?: string | null;
    /** @format double */
    amount?: number | null;
}
export interface LoanBorrowerMoneyDeclarationRequest {
    isAffirmative?: boolean | null;
    /** @maxLength 1000 */
    description?: string | null;
    /**
     * @format double
     * @min 0
     */
    amount?: number | null;
}
export interface LoanBorrowerOtherAsset {
    /** @format uuid */
    id?: string | null;
    type?: LoanOtherAssetType | null;
    other?: string | null;
    /** @format double */
    value?: number | null;
}
export interface LoanBorrowerOtherAssetRequest {
    type?: LoanOtherAssetType | null;
    /** @maxLength 255 */
    other?: string | null;
    /**
     * @format double
     * @min 0
     */
    value?: number | null;
}
export interface LoanBorrowerOtherIncome {
    /** @format uuid */
    id?: string | null;
    /** @format double */
    value?: number | null;
    type?: LoanOtherIncomeType | null;
}
export interface LoanBorrowerOtherIncomeRequest {
    /**
     * @format double
     * @min 0
     */
    value?: number | null;
    type?: LoanOtherIncomeType | null;
}
export interface LoanBorrowerOtherLiability {
    /** @format uuid */
    id?: string | null;
    /** @format double */
    monthlyPayment?: number | null;
    type?: LoanOtherLiabilityType | null;
}
export interface LoanBorrowerOtherLiabilityRequest {
    /**
     * @format double
     * @min 0
     */
    monthlyPayment?: number | null;
    type?: LoanOtherLiabilityType | null;
}
export interface LoanBorrowerPhoneNumber {
    /** @format uuid */
    id?: string | null;
    ext?: string | null;
    number?: string | null;
    type?: LoanPhoneNumberType | null;
}
export interface LoanBorrowerPhoneNumberRequest {
    /** @maxLength 10 */
    ext?: string | null;
    number?: string | null;
    type?: LoanPhoneNumberType | null;
}
export interface LoanBorrowerPrimaryResidenceDeclaration {
    /** @format uuid */
    id?: string | null;
    isAffirmative?: boolean | null;
    description?: string | null;
    hasInterestInLastThreeYears?: boolean | null;
    titleHeld?: LoanTitleHeld | null;
    propertyType?: LoanOccupancyType | null;
}
export interface LoanBorrowerPrimaryResidenceDeclarationRequest {
    isAffirmative?: boolean | null;
    /** @maxLength 1000 */
    description?: string | null;
    hasInterestInLastThreeYears?: boolean | null;
    titleHeld?: LoanTitleHeld | null;
    propertyType?: LoanOwnershipInterestPropertyType | null;
}
export interface LoanBorrowerRealEstateAsset {
    /** @format uuid */
    id?: string | null;
    status?: LoanRealEstateStatus | null;
    occupancy?: LoanOccupancyType | null;
    /** @format double */
    marketValue?: number | null;
    /** @format double */
    monthlyInsTaxDues?: number | null;
    /** @format double */
    monthlyRentalIncome?: number | null;
    address?: AddressV3 | null;
    mortgages?: LoanBorrowerRealEstateAssetMortgage[] | null;
}
export interface LoanBorrowerRealEstateAssetMortgage {
    /** @format uuid */
    id?: string | null;
    creditor?: string | null;
    accountNumber?: string | null;
    /** @format double */
    balance?: number | null;
    /** @format double */
    creditLimit?: number | null;
    /** @format double */
    monthlyMortgagePayment?: number | null;
    isBalancePaidBeforeClosing?: boolean | null;
    loanType?: LoanType | null;
}
export interface LoanBorrowerRealEstateAssetMortgageRequest {
    /** @maxLength 255 */
    creditor?: string | null;
    /** @maxLength 50 */
    accountNumber?: string | null;
    /**
     * @format double
     * @min 0
     */
    balance?: number | null;
    /**
     * @format double
     * @min 0
     */
    creditLimit?: number | null;
    /**
     * @format double
     * @min 0
     */
    monthlyMortgagePayment?: number | null;
    isBalancePaidBeforeClosing?: boolean | null;
    loanType?: LoanType | null;
}
export interface LoanBorrowerRealEstateAssetRequest {
    status?: LoanRealEstateStatus | null;
    occupancy?: LoanOccupancyType | null;
    /**
     * @format double
     * @min 0
     */
    marketValue?: number | null;
    /** @format double */
    purchasePrice?: number | null;
    /** @format int32 */
    yearBuilt?: number | null;
    /** @format int32 */
    numberOfUnits?: number | null;
    /**
     * @format double
     * @min 0
     */
    monthlyRentalIncome?: number | null;
    /**
     * @format double
     * @min 0
     */
    maintenanceExpense?: number | null;
    address?: AddressRequest | null;
    mortgages?: LoanBorrowerRealEstateAssetMortgageRequest[] | null;
}
export interface LoanBorrowerRequest {
    ssn?: string | null;
    email?: string | null;
    /** @maxLength 100 */
    lastName?: string | null;
    /** @maxLength 100 */
    firstName?: string | null;
    /** @maxLength 100 */
    middleName?: string | null;
    prefix?: LoanNamePrefix | null;
    suffix?: LoanNameSuffix | null;
    /** @format date */
    birthDate?: string | null;
    citizenship?: LoanCitizenship | null;
    maritalStatus?: LoanMaritalStatus | null;
    languagePreference?: LoanLanguagePreference | null;
    /** @format int32 */
    numberOfDependents?: number | null;
    isPrimaryBorrower: boolean;
    isFirstTimeHomeBuyer?: boolean | null;
    hasJointAssetsAndLiabilities?: boolean | null;
    dependentAges?: number[] | null;
    demographics?: LoanBorrowerDemographicsRequest | null;
    declarations?: LoanBorrowerDeclarationsRequest | null;
    militaryService?: LoanBorrowerMilitaryServiceRequest | null;
    gifts: LoanBorrowerGiftRequest[];
    addresses: LoanBorrowerAddressRequest[];
    consents: LoanBorrowerConsentRequest[];
    liabilities: LoanBorrowerLiabilityRequest[];
    otherAssets: LoanBorrowerOtherAssetRequest[];
    otherIncome: LoanBorrowerOtherIncomeRequest[];
    phoneNumbers: LoanBorrowerPhoneNumberRequest[];
    accountAssets: LoanBorrowerAccountAssetRequest[];
    homeOwnership: LoanBorrowerHomeOwnershipRequest[];
    alternateNames: LoanBorrowerAlternateNameRequest[];
    otherLiabilities: LoanBorrowerOtherLiabilityRequest[];
    realEstateAssets: LoanBorrowerRealEstateAssetRequest[];
    currentEmployment: LoanBorrowerEmploymentCurrentRequest[];
    previousEmployment: LoanBorrowerEmploymentPreviousRequest[];
}
export interface LoanBorrowerSimpleDeclaration {
    /** @format uuid */
    id?: string | null;
    isAffirmative?: boolean | null;
    description?: string | null;
}
export interface LoanBorrowerSimpleDeclarationRequest {
    isAffirmative?: boolean | null;
    /** @maxLength 1000 */
    description?: string | null;
}
export interface LoanComparison {
    loanID: string;
    scenarios: LoanComparisonScenario[];
    loanLocked: boolean;
}
export interface LoanComparisonCalculator {
    /** @format double */
    loanAmount: number;
    loans: LoanComparisonCalculatorLoan[];
}
export interface LoanComparisonCalculatorLoan {
    /** @format double */
    points: number;
    /** @format double */
    originationFees: number;
    /** @format double */
    closingCosts: number;
    /** @format double */
    totalClosingCosts: number;
    /** @format double */
    monthlyPrincipalAndInterest: number;
    amortization: Amortization;
}
export interface LoanComparisonCalculatorLoanRequest {
    /**
     * @format double
     * @min 1
     * @max 25
     */
    interestRate: number;
    /**
     * @format int32
     * @min 1
     * @max 40
     */
    term: number;
    /**
     * @format double
     * @min 0
     * @max 3
     */
    points: number;
    /**
     * @format double
     * @min 0
     * @max 5
     */
    originationFees: number;
    /**
     * @format double
     * @min 500
     * @max 100000
     */
    closingCosts: number;
    /**
     * @format double
     * @min 25000
     * @max 10000000
     */
    homeValue: number;
    /**
     * @format double
     * @min 0
     * @max 10
     */
    pmi: number;
}
export interface LoanComparisonCalculatorRequest {
    /**
     * @format double
     * @min 30000
     */
    loanAmount: number;
    loans: LoanComparisonCalculatorLoanRequest[];
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
export interface LoanConsentRequest {
    /** @format email */
    borrowerEmail?: string | null;
    borrowerEConsent?: boolean | null;
    borrowerCreditAuth?: boolean | null;
    borrowerTCPAOptIn?: boolean | null;
    additionalFields?: Record<string, string>;
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
    role: "Borrower" | "CoBorrower" | "NonBorrower" | "LoanOfficer" | "LoanProcessor" | "LoanOfficerAssistant" | "SupportingLoanOfficer" | "BuyerAgent" | "SellerAgent" | "TitleInsuranceAgent" | "EscrowAgent" | "SettlementAgent";
}
export interface LoanContactList {
    email: string;
}
export interface LoanCustomFieldsRequest {
    additionalFields?: Record<string, string>;
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
export interface LoanDocumentSearch {
    /** @format date-time */
    createdAt?: string | null;
    /** @format date-time */
    updatedAt?: string | null;
    /** @format date-time */
    deletedAt?: string | null;
    /** @format uuid */
    id: string;
    name: string;
    loanID?: string | null;
    userID?: string | null;
    initialBucket?: string | null;
    losDocumentID?: string | null;
    losStatus: string;
    contents?: string | null;
    failoverDocumentPath?: string | null;
}
export interface LoanDocumentSearchCriteria {
    searchText?: string | null;
    bucket?: string | null;
    /** @format uuid */
    userID?: string | null;
    documentIDs?: string[] | null;
    losStatuses?: LOSStatus[] | null;
}
export interface LoanDocumentSearchPaginated {
    rows: LoanDocumentSearch[];
    pagination: Pagination;
    /** @format int64 */
    count: number;
}
export interface LoanDraftSearchCriteria {
    searchText?: string | null;
    /** @format uuid */
    loanOfficerId?: string | null;
    /** @format uuid */
    siteConfigurationId?: string | null;
    isUnassigned?: boolean | null;
    includeDeleted?: boolean | null;
    excludeLinkedToLoan?: boolean | null;
    draftTypes?: DraftType[] | null;
}
export interface LoanFinancial {
    /** @format uuid */
    id?: string | null;
    isDebtsAssetsReviewed?: boolean | null;
    /** @format double */
    cashToClose?: number | null;
    /** @format double */
    cashDownPayment?: number | null;
    /** @format double */
    maximumPurchasePrice?: number | null;
}
export interface LoanFinancialRequest {
    isDebtsAssetsReviewed?: boolean | null;
    /**
     * @format double
     * @min 0
     */
    cashToClose?: number | null;
    /**
     * @format double
     * @min 0
     */
    cashDownPayment?: number | null;
    /**
     * @format double
     * @min 0
     */
    maximumPurchasePrice?: number | null;
    isDownPaymentGift?: boolean | null;
    /** @format double */
    downPaymentGiftAmount?: number | null;
    /** @format int32 */
    loanTermYears?: number | null;
}
export interface LoanIdentifier {
    /** @format uuid */
    id: string;
    losLoanID: string;
}
export interface LoanImport {
    /** @format uuid */
    id: string;
    account: Account;
    /** @format date-time */
    endDate: string;
    /** @format date-time */
    startDate: string;
    /** @format int32 */
    attemptCount: number;
    /** @format int32 */
    importedCount: number;
    statusMessage?: string | null;
    status: "WaitingProcess" | "InProgress" | "Completed" | "Failed" | "Cancelled";
    importMode: "All" | "NewOnly" | "UpdateOnly";
    /** @format date-time */
    createdAt?: string | null;
}
export interface LoanImportLog {
    level: "None" | "Info" | "Warning" | "Error";
    message: string;
    /** @format date-time */
    createdAt: string;
}
export interface LoanImportLogPaginated {
    rows: LoanImportLog[];
    pagination: Pagination;
    /** @format int64 */
    count: number;
}
export interface LoanImportPaginated {
    rows: LoanImport[];
    pagination: Pagination;
    /** @format int64 */
    count: number;
}
export interface LoanList {
    /** @format uuid */
    id: string;
    status?: string | null;
    loanID?: string | null;
    loanNumber?: string | null;
    type?: LoanType | null;
    purpose?: LoanPurpose | null;
    /** @format double */
    totalLoanAmount?: number | null;
    /** @format date-time */
    startDate?: string | null;
    isActive: boolean;
    propertyAddress?: Address | null;
    loanOfficer?: LoanOfficerList | null;
    buyerAgentContact?: LoanContactList | null;
    sellerAgentContact?: LoanContactList | null;
    userLoans: UserLoan[];
    contacts: LoanContact[];
    borrowers: LoanListBorrower[];
}
export interface LoanListBorrower {
    /** @format uuid */
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    isPrimaryBorrower: boolean;
}
export interface LoanListPaginated {
    rows: LoanList[];
    pagination: Pagination;
    /** @format int64 */
    count: number;
}
export interface LoanLog {
    /** @format uuid */
    id: string;
    level: "None" | "Info" | "Warning" | "Error";
    type: "Loan" | "Queue" | "POSFlagChanged" | "Verification" | "DocumentUploaded" | "LoanCreated" | "WorkflowSubmitted" | "UserInvitationSent" | "CoBorrowerAdded" | "TaskCompleted" | "LoanStatusChanged" | "EConsent";
    message: string;
    /** @format date-time */
    createdAt: string;
}
export interface LoanLogPaginated {
    rows: LoanLog[];
    pagination: Pagination;
    /** @format int64 */
    count: number;
}
export interface LoanLogSearchCriteria {
    searchText?: string | null;
    types?: LoanLogType[] | null;
    levels?: LogLevel[] | null;
}
export interface LoanNonOwningBorrower {
    /** @format uuid */
    id?: string | null;
    email?: string | null;
    lastName?: string | null;
    firstName?: string | null;
    middleName?: string | null;
    prefix?: LoanNamePrefix | null;
    suffix?: LoanNameSuffix | null;
    consents: LoanBorrowerConsent[];
}
export interface LoanNonOwningBorrowerRequest {
    email?: string | null;
    /** @maxLength 100 */
    lastName?: string | null;
    /** @maxLength 100 */
    firstName?: string | null;
    /** @maxLength 100 */
    middleName?: string | null;
    prefix?: LoanNamePrefix | null;
    suffix?: LoanNameSuffix | null;
    consents: LoanBorrowerConsentRequest[];
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
export interface LoanOfficerList {
    name?: string | null;
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
export interface LoanPatchRequestGuidPatchDocument {
    operations: GuidPatchOperation[];
}
export interface LoanProperty {
    /** @format uuid */
    id?: string | null;
    trustType?: LoanTrustType | null;
    occupancy?: LoanOccupancyType | null;
    propertyType?: LoanPropertyType | null;
    referenceId?: string | null;
    /** @format int32 */
    yearBuilt?: number | null;
    /** @format int32 */
    yearAcquired?: number | null;
    /** @format int32 */
    numberOfUnits?: number | null;
    /** @format double */
    salePrice?: number | null;
    /** @format double */
    propertyValue?: number | null;
    /** @format double */
    purchasePrice?: number | null;
    /** @format double */
    estimatedValue?: number | null;
    /** @format double */
    monthlyRentalIncome?: number | null;
    isMixedUseProperty?: boolean | null;
    isManufacturedHome?: boolean | null;
    isFhaSecondaryResidence?: boolean | null;
    address?: AddressV3 | null;
    mortgages: LoanPropertyMortgage[];
}
export interface LoanPropertyMortgage {
    /** @format uuid */
    id?: string | null;
    creditor?: string | null;
    /** @format double */
    loanAmount?: number | null;
    /** @format double */
    creditLimit?: number | null;
    /** @format double */
    monthlyPayment?: number | null;
    lienType?: LoanLienPosition | null;
}
export interface LoanPropertyMortgageRequest {
    /** @maxLength 255 */
    creditor?: string | null;
    /**
     * @format double
     * @min 0
     */
    loanAmount?: number | null;
    /**
     * @format double
     * @min 0
     */
    creditLimit?: number | null;
    /**
     * @format double
     * @min 0
     */
    monthlyPayment?: number | null;
    lienType?: LoanLienPosition | null;
}
export interface LoanPropertyRequest {
    trustType?: LoanTrustType | null;
    occupancy?: LoanOccupancyType | null;
    propertyType?: LoanPropertyType | null;
    /** @maxLength 100 */
    referenceId?: string | null;
    /**
     * @format int32
     * @min 1800
     * @max 2036
     */
    yearBuilt?: number | null;
    /**
     * @format int32
     * @min 1900
     * @max 2036
     */
    yearAcquired?: number | null;
    /** @format int32 */
    numberOfUnits?: number | null;
    /**
     * @format double
     * @min 0
     */
    salePrice?: number | null;
    /**
     * @format double
     * @min 0
     */
    propertyValue?: number | null;
    /**
     * @format double
     * @min 0
     */
    purchasePrice?: number | null;
    /**
     * @format double
     * @min 0
     */
    estimatedValue?: number | null;
    /**
     * @format double
     * @min 0
     */
    monthlyRentalIncome?: number | null;
    isMixedUseProperty?: boolean | null;
    isManufacturedHome?: boolean | null;
    isFhaSecondaryResidence?: boolean | null;
    address?: AddressRequest | null;
    mortgages: LoanPropertyMortgageRequest[];
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
export interface LoanSettings {
    excludeFromAutoTaskReminders: boolean;
}
export interface LoanUser {
    /** @format uuid */
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string | null;
    role: string;
    loanRole: "Borrower" | "CoBorrower" | "NonBorrower" | "LoanOfficer" | "LoanProcessor" | "LoanOfficerAssistant" | "SupportingLoanOfficer" | "BuyerAgent" | "SellerAgent" | "TitleInsuranceAgent" | "EscrowAgent" | "SettlementAgent";
    isUser: boolean;
    /** @format date-time */
    createdAt: string;
}
export interface LosLoanCreationRequest {
    loanOfficerUserName?: string | null;
    loanTemplate?: string | null;
    additionalFields: Record<string, string | null>;
    folder?: string | null;
    /** @format int32 */
    borrowerPair: number;
    applyLoanAssociation: boolean;
    siteID?: string | null;
    existingLoanID?: string | null;
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
export interface MobileSettings {
    /** @format uuid */
    id: string;
    hasMobile: boolean;
    /** @deprecated */
    downloadLink?: string | null;
    universalUrl?: string | null;
    appleStoreUrl?: string | null;
    googlePlayStoreUrl?: string | null;
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
export interface MonthlyPaymentCalculator {
    /** @format double */
    monthlyPrincipalAndInterest: number;
    /** @format double */
    monthlyTaxes: number;
    /** @format double */
    monthlyInsurance: number;
    /** @format double */
    loanToValue: number;
    /** @format double */
    monthlyPmi: number;
    /** @format double */
    monthlyPayment: number;
    amortization: Amortization;
}
export interface MonthlyPaymentCalculatorRequest {
    /**
     * @format double
     * @min 30000
     */
    loanAmount: number;
    /**
     * @format double
     * @min 25000
     * @max 10000000
     */
    homeValue: number;
    /**
     * @format double
     * @min 0
     * @max 10
     */
    pmi: number;
    /**
     * @format double
     * @min 0
     * @max 200000
     */
    annualTaxes: number;
    /**
     * @format double
     * @min 200
     * @max 50000
     */
    annualInsurance: number;
    /**
     * @format double
     * @min 1
     * @max 25
     */
    interestRate: number;
    /**
     * @format int32
     * @min 1
     * @max 40
     */
    term: number;
}
export interface NoContentResult {
    /** @format int32 */
    statusCode: number;
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
    pushNotificationBody?: string | null;
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
    pushNotificationBody?: string | null;
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
    pushNotificationBody?: string | null;
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
    pushNotificationBody?: string | null;
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
    pushNotificationBody?: string | null;
}
export interface NotificationTemplateVersionRequest {
    /** @maxLength 255 */
    name?: string | null;
    isActive: boolean;
    htmlBody: string;
    plainBody: string;
    textBody?: string | null;
    pushNotificationBody?: string | null;
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
    pushNotificationBody?: string | null;
}
export interface Operation {
    op?: string;
    value?: string | number | boolean | null | object;
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
export interface RefinanceCalculator {
    currentLoan: RefinanceLoan;
    refinanceLoan: RefinanceLoan;
    /** @format double */
    monthlyPaymentSavings: number;
    /** @format double */
    taxSavingsLosses: number;
    /** @format double */
    balanceLosses: number;
    /** @format double */
    totalLosses: number;
    /** @format double */
    totalClosingCosts: number;
    /** @format double */
    totalBenefit: number;
}
export interface RefinanceCalculatorRequest {
    /**
     * @format double
     * @min 25000
     * @max 10000000
     */
    homeValue: number;
    currentLoan: RefinanceCurrentLoanRequest;
    refinanceLoan: RefinanceRefinanceLoanRequest;
    taxRates: TaxRatesRequest;
}
export interface RefinanceCurrentLoanRequest {
    /**
     * @format double
     * @min 1
     * @max 25
     */
    interestRate: number;
    /**
     * @format int32
     * @min 1
     * @max 40
     */
    term: number;
    /**
     * @format double
     * @min 0
     * @max 10
     */
    pmi: number;
    /**
     * @format double
     * @min 30000
     */
    originalLoanAmount: number;
    /**
     * @format int32
     * @min 0
     * @max 480
     */
    monthsPaid: number;
}
export interface RefinanceLoan {
    /** @format double */
    loanAmount: number;
    /** @format double */
    monthlyPayment: number;
    /** @format double */
    totalMonthlyPayments: number;
    /** @format double */
    balanceAtSale: number;
    /** @format double */
    interestPaid: number;
    /** @format double */
    taxSavings: number;
    /** @format double */
    points: number;
    amortization: Amortization;
}
export interface RefinanceRefinanceLoanRequest {
    /**
     * @format double
     * @min 1
     * @max 25
     */
    interestRate: number;
    /**
     * @format int32
     * @min 1
     * @max 40
     */
    term: number;
    /**
     * @format double
     * @min 0
     * @max 10
     */
    pmi: number;
    /**
     * @format double
     * @min 0
     * @max 3
     */
    points: number;
    /**
     * @format double
     * @min 0
     * @max 5
     */
    originationFees: number;
    /**
     * @format double
     * @min 500
     * @max 100000
     */
    closingCosts: number;
    /**
     * @format int32
     * @min 0
     * @max 30
     */
    yearsBeforeSale: number;
}
export interface RefreshTokenRequest {
    /** @minLength 1 */
    refreshToken: string;
    /**
     * @deprecated
     * @format uuid
     */
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
    ssoIntegration: "ConsumerConnect" | "TheBigPOS" | "POSF";
}
export interface SendForgotPasswordRequest {
    /**
     * @format email
     * @minLength 1
     */
    email: string;
}
export interface SendLoanDocumentsRequest {
    documentIDs: string[];
    loanUserIDs: string[];
    emailAddresses: string[];
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
    youTubeUrl?: string | null;
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
    autoTaskReminderIntervalsInDays?: number[] | null;
    mobileSettings?: MobileSettings | null;
    losSettings?: LOSSettings | null;
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
    youTubeUrl?: string | null;
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
    autoTaskReminderIntervalsInDays?: number[] | null;
    mobileSettings?: MobileSettings | null;
    losSettings?: LOSSettings | null;
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
    youTubeUrl?: string | null;
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
    mobileSettings?: MobileSettings | null;
    modules?: Module[] | null;
    /** @format uuid */
    userID?: string | null;
    autoTaskReminderIntervalsInDays?: number[] | null;
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
export interface TaxRatesRequest {
    /**
     * @format double
     * @min 0
     * @max 15
     */
    stateTaxRate: number;
    /**
     * @format double
     * @min 0
     * @max 50
     */
    marginalIncomeTaxRate: number;
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
export interface TimeAtAddress {
    /** @format uuid */
    id?: string | null;
    /** @format int32 */
    years?: number | null;
    /** @format int32 */
    months?: number | null;
}
export interface TimeAtAddressRequest {
    /** @format int32 */
    years?: number | null;
    /** @format int32 */
    months?: number | null;
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
export interface UpdateUserGroupRequest {
    /**
     * @minLength 1
     * @maxLength 200
     */
    name: string;
    /** @maxLength 1000 */
    description?: string | null;
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
export interface UsageReport {
    /** @format uuid */
    id: string;
    /** @format uuid */
    accountID: string;
    accountName: string;
    /** @format int32 */
    month: number;
    /** @format int32 */
    year: number;
    /** @format int32 */
    posClosedLoansCount: number;
    /** @format int32 */
    nonPOSClosedLoansCount: number;
    /** @format int32 */
    reconciledLoansCount: number;
    /** @format int32 */
    loanOfficersCount: number;
    /** @format int32 */
    leadsCount: number;
    hasMobileApp: boolean;
    hasSms: boolean;
    fileKey: string;
    fileUrl: string;
    /** @format date-time */
    createdAt: string;
}
export interface UsageReportGenerationResult {
    fileKey: string;
    fileUrl: string;
    /** @format int32 */
    successCount: number;
    /** @format int32 */
    failureCount: number;
    reports: UsageReport[];
    failures: AccountReportFailure[];
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
export interface UserDevice {
    /** @format uuid */
    id: string;
    /** @format uuid */
    userID: string;
    token: string;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    deletedAt?: string | null;
}
export interface UserDraft {
    /** @format uuid */
    draftID: string;
    role: "Borrower" | "CoBorrower" | "NonBorrower" | "LoanOfficer" | "LoanProcessor" | "LoanOfficerAssistant" | "SupportingLoanOfficer" | "BuyerAgent" | "SellerAgent" | "TitleInsuranceAgent" | "EscrowAgent" | "SettlementAgent";
    user: User;
}
export interface UserDraftPaginated {
    rows: UserDraft[];
    pagination: Pagination;
    /** @format int64 */
    count: number;
}
export interface UserGroup {
    /** @format uuid */
    id: string;
    name: string;
    description?: string | null;
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt?: string | null;
}
export interface UserGroupAccessScope {
    /** @format uuid */
    id: string;
    /** @format uuid */
    groupId: string;
    scopeType: "User" | "Branch";
    /** @format uuid */
    userId?: string | null;
    /** @format uuid */
    branchId?: string | null;
    user?: UserSummary | null;
    branch?: BranchSummary | null;
}
export interface UserGroupMember {
    /** @format uuid */
    id: string;
    /** @format uuid */
    groupId: string;
    /** @format uuid */
    userId: string;
    loanRole: string;
    user: UserSummary;
}
export interface UserGroupPaginated {
    rows: UserGroup[];
    pagination: Pagination;
    /** @format int64 */
    count: number;
}
export interface UserLoan {
    /** @format date-time */
    createdAt: string;
    /** @format date-time */
    updatedAt?: string | null;
    /** @format date-time */
    deletedAt?: string | null;
    loanID: string;
    user: User;
    role: "Borrower" | "CoBorrower" | "NonBorrower" | "LoanOfficer" | "LoanProcessor" | "LoanOfficerAssistant" | "SupportingLoanOfficer" | "BuyerAgent" | "SellerAgent" | "TitleInsuranceAgent" | "EscrowAgent" | "SettlementAgent";
    /** @format int32 */
    borrowerPair?: number | null;
    /** @format int32 */
    borrowerPosition?: number | null;
    customLoanData?: CustomLoanData | null;
}
export interface UserLoanConsent {
    /** @format uuid */
    id: string;
    /** @format uuid */
    userLoanID: string;
    type: "Econsent" | "CreditAuthorization" | "Tcpa";
    providedConsent: boolean;
    ipAddress?: string | null;
    /** @format date-time */
    createdAt: string;
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
    loan: LoanIdentifier;
    /** @deprecated */
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
    pushEnabled: boolean;
}
export interface UserNotificationSettingsUpdateRequest {
    emailEnabled: boolean;
    textEnabled: boolean;
    textOptIn?: boolean | null;
    pushEnabled: boolean;
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
export interface UserSummary {
    /** @format uuid */
    id: string;
    name?: string | null;
    email?: string | null;
    role: "Borrower" | "LoanOfficer" | "Admin" | "SuperAdmin" | "Realtor" | "SettlementAgent" | "LoanProcessor" | "LoanOfficerAssistant" | "BranchManager" | "SystemAdmin";
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
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
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
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    JsonPatch = "application/json-patch+json",
    Json = "application/json",
    JsonApi = "application/vnd.api+json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
    protected stringifyFormItem(formItem: unknown): string;
    protected createFormData(input: Record<string, unknown>): FormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title The Big POS API
 * @version v2.34.0
 * @termsOfService https://www.thebigpos.com/terms-of-use/
 * @contact Mortgage Automation Technologies <support@thebigpos.com> (https://www.thebigpos.com/terms-of-use/)
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Saml
     * @name PostRoot
     * @request POST:/
     * @secure
     * @response `200` `void` Success
     */
    postRoot: (params?: RequestParams) => Promise<AxiosResponse<void, any>>;
    /**
     * No description
     *
     * @tags TheBigPOS
     * @name GetRoot
     * @request GET:/
     * @secure
     * @response `200` `string` Success
     */
    getRoot: (params?: RequestParams) => Promise<AxiosResponse<string, any>>;
    api: {
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
        getMyAccount: (params?: RequestParams) => Promise<AxiosResponse<Account, any>>;
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
        replaceMyAccount: (data: UpdateAccountRequest, params?: RequestParams) => Promise<AxiosResponse<Account, any>>;
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
        getSiteConfigurationByAccount: (params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        updateSiteConfigurationForAccount: (data: SiteConfiguration, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        getAccounts: (params?: RequestParams) => Promise<AxiosResponse<Account[], any>>;
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
        createAccount: (data: CreateAccountRequest, params?: RequestParams) => Promise<AxiosResponse<Account, any>>;
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
        getAccount: (id: string, params?: RequestParams) => Promise<AxiosResponse<Account, any>>;
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
        deleteAccount: (id: string, query?: {
            /** @default false */
            hardDelete?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<Account, any>>;
        /**
         * No description
         *
         * @tags Authentication
         * @name GetTokenFromRefreshToken
         * @summary Generate Token From Refresh Token
         * @request POST:/api/refresh-token
         * @secure
         * @response `200` `Token` Success
         * @response `401` `ProblemDetails` Unauthorized
         * @response `422` `UnprocessableEntity` Client Error
         */
        getTokenFromRefreshToken: (data: RefreshTokenRequest, params?: RequestParams) => Promise<AxiosResponse<Token, any>>;
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
        getToken: (data: TokenRequest, params?: RequestParams) => Promise<AxiosResponse<Token, any>>;
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
        getTokenFromChallengeCode: (data: TokenChallengeRequest, params?: RequestParams) => Promise<AxiosResponse<Token, any>>;
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
        getSystemToken: (data: SystemTokenRequest, params?: RequestParams) => Promise<AxiosResponse<Token, any>>;
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
        getSsoToken: (data: SSOTokenRequest, params?: RequestParams) => Promise<AxiosResponse<SSOToken, any>>;
        /**
         * No description
         *
         * @tags Authentication
         * @name LogOut
         * @summary Sign out (clear auth cookies)
         * @request POST:/api/logout
         * @secure
         * @response `204` `NoContentResult` No Content
         * @response `422` `UnprocessableEntity` Client Error
         */
        logOut: (params?: RequestParams) => Promise<AxiosResponse<NoContentResult, any>>;
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
        getBranches: (query?: {
            showAll?: boolean;
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<GetBranchPaginated, any>>;
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
        createBranch: (data: CreateBranchRequest, params?: RequestParams) => Promise<AxiosResponse<GetBranch, any>>;
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
        searchBranches: (data: BranchSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<GetBranchPaginated, any>>;
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
        getBranch: (branchId: string, params?: RequestParams) => Promise<AxiosResponse<GetBranch, any>>;
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
        replaceBranch: (branchId: string, data: CreateBranchRequest, params?: RequestParams) => Promise<AxiosResponse<GetBranch, any>>;
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
        deleteBranch: (branchId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        restoreBranch: (branchId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        createBranchSiteConfiguration: (branchId: string, data: SiteConfigurationRequest, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        getBranchSiteConfiguration: (branchId: string, siteConfigurationId: string, params?: RequestParams) => Promise<AxiosResponse<SiteConfigurationWithInherited, any>>;
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
        replaceBranchSiteConfiguration: (branchId: string, siteConfigurationId: string, data: SiteConfigurationRequest, query?: {
            applyToChildren?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        getLoanOfficersByBranch: (branchId: string, params?: RequestParams) => Promise<AxiosResponse<LoanOfficerPublic, any>>;
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
        getBusinessRules: (query?: {
            showAll?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<BusinessRule[], any>>;
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
        createBusinessRule: (data: BusinessRuleRequest, params?: RequestParams) => Promise<AxiosResponse<BusinessRule, any>>;
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
        getBusinessRule: (id: string, params?: RequestParams) => Promise<AxiosResponse<BusinessRule, any>>;
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
        replaceBusinessRule: (id: string, data: BusinessRuleRequest, params?: RequestParams) => Promise<AxiosResponse<BusinessRule, any>>;
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
        deleteBusinessRule: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        restoreBusinessRule: (id: string, params?: RequestParams) => Promise<AxiosResponse<BusinessRule, any>>;
        /**
         * @description Returns closed loan counts per account within the specified date range, including POS vs non-POS breakdown and utilization ratios.
         *
         * @tags ClosedLoanReports
         * @name GetClosedLoansReport
         * @summary Get Closed Loans Report
         * @request POST:/api/loans/reports/closed-loans
         * @secure
         * @response `200` `ClosedLoansReport` Success
         */
        getClosedLoansReport: (data: ClosedLoansReportRequest, params?: RequestParams) => Promise<AxiosResponse<ClosedLoansReport, any>>;
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
        getCorporates: (query?: {
            showAll?: boolean;
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<CorporatePaginated, any>>;
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
        createCorporate: (data: CorporateRequest, params?: RequestParams) => Promise<AxiosResponse<Corporate, any>>;
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
        searchCorporate: (data: CorporateSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<CorporatePaginated, any>>;
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
        getCorporate: (id: string, params?: RequestParams) => Promise<AxiosResponse<Corporate, any>>;
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
        replaceCorporate: (id: string, data: CorporateRequest, params?: RequestParams) => Promise<AxiosResponse<Corporate, any>>;
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
        deleteCorporate: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        restoreCorporate: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        createCorporateSiteConfiguration: (corporateId: string, data: SiteConfigurationRequest, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        getCorporateSiteConfiguration: (corporateId: string, siteConfigurationId: string, params?: RequestParams) => Promise<AxiosResponse<SiteConfigurationWithInherited, any>>;
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
        replaceCorporateSiteConfiguration: (corporateId: string, siteConfigurationId: string, data: SiteConfigurationRequest, query?: {
            applyToChildren?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        getBranchesByCorporate: (id: string, params?: RequestParams) => Promise<AxiosResponse<BranchReduced[], any>>;
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
        getLoanOfficersByCorporate: (id: string, params?: RequestParams) => Promise<AxiosResponse<LoanOfficerPublic, any>>;
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
        getDevices: (query?: {
            /** @format uuid */
            posAccountId?: string;
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<DevicePaginated, any>>;
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
        getDevice: (id: string, params?: RequestParams) => Promise<AxiosResponse<Device, any>>;
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
        updateDevice: (id: string, data: DeviceRequest, params?: RequestParams) => Promise<AxiosResponse<Device, any>>;
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
        getDeviceBySerialNumber: (sn: string, params?: RequestParams) => Promise<AxiosResponse<DeviceMDM, any>>;
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
        createDeviceActionBySerialNumber: (sn: string, actionName: string, params?: RequestParams) => Promise<AxiosResponse<Action, any>>;
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
        getDocumentBuckets: (query?: {
            /** @default false */
            includeSystemBuckets?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<string[], any>>;
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
        getDocumentTemplates: (query?: {
            showAll?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<DocumentTemplateBase[], any>>;
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
        createDocumentTemplate: (data: CreateDocumentTemplateRequest, params?: RequestParams) => Promise<AxiosResponse<DocumentTemplateBase, any>>;
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
        getCustomDocumentTemplates: (type: string, query?: {
            /** @default false */
            showAll?: boolean;
            /** @default true */
            publishedOnly?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<DocumentTemplateBase[], any>>;
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
        getDocumentTemplate: (id: string, params?: RequestParams) => Promise<AxiosResponse<DocumentTemplate, any>>;
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
        replaceDocumentTemplate: (id: string, data: UpdateDocumentTemplateRequest, params?: RequestParams) => Promise<AxiosResponse<DocumentTemplateBase, any>>;
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
        deleteDocumentTemplate: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        restoreDocumentTemplate: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getDocumentTemplateVersions: (documentId: string, params?: RequestParams) => Promise<AxiosResponse<DocumentTemplateVersion[], any>>;
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
        createDocumentTemplateVersion: (documentId: string, data: DocumentTemplateVersionRequest, params?: RequestParams) => Promise<AxiosResponse<DocumentTemplateVersion, any>>;
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
        getDocumentTemplateVersion: (documentId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<DocumentTemplateVersion, any>>;
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
        replaceDocumentTemplateVersion: (documentId: string, id: string, data: DocumentTemplateVersionUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<DocumentTemplateVersion, any>>;
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
        deleteDocumentTemplateVersion: (documentId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<DocumentTemplateVersion, any>>;
        /**
         * No description
         *
         * @tags Encompass Packages
         * @name GetUserPackages
         * @request GET:/api/los/encompass/eclose/packages
         * @secure
         * @response `200` `EncompassPackageList` Success
         * @response `400` `EncompassError` Bad Request
         * @response `401` `EncompassError` Unauthorized
         * @response `500` `EncompassError` Server Error
         */
        getUserPackages: (query?: {
            /** @default "all" */
            status?: string;
            /**
             * @format int32
             * @default 1
             */
            page?: number;
            /**
             * @format int32
             * @default 20
             */
            pageSize?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<EncompassPackageList, any>>;
        /**
         * No description
         *
         * @tags Encompass Sessions
         * @name CreateEncompassSession
         * @request POST:/api/los/encompass/eclose/sessions
         * @secure
         * @response `200` `CreateSession` Success
         * @response `400` `EncompassError` Bad Request
         * @response `401` `EncompassError` Unauthorized
         * @response `403` `EncompassError` Forbidden
         * @response `404` `EncompassError` Not Found
         * @response `500` `EncompassError` Server Error
         */
        createEncompassSession: (data: CreateSessionRequest, params?: RequestParams) => Promise<AxiosResponse<CreateSession, any>>;
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
        getAllFiles: (query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
            /** @default false */
            includeDeleted?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<FilePaginated, any>>;
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
        uploadFile: (data: {
            name?: string;
            /** @format binary */
            file?: File;
            isPublic?: boolean;
            bucket?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<File, any>>;
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
        getFileById: (id: string, params?: RequestParams) => Promise<AxiosResponse<File, any>>;
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
        replaceFile: (id: string, data: FileRequest, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
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
        deleteFile: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        searchFiles: (data: FileSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FilePaginated, any>>;
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
        getForms: (query?: {
            showAll?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<AdminAccessGetForms[], any>>;
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
        createForm: (data: FormRequest, params?: RequestParams) => Promise<AxiosResponse<Form, any>>;
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
        getForm: (id: string, params?: RequestParams) => Promise<AxiosResponse<Form, any>>;
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
        replaceForm: (id: string, data: FormRequest, params?: RequestParams) => Promise<AxiosResponse<Form, any>>;
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
        deleteForm: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        restoreForm: (id: string, params?: RequestParams) => Promise<AxiosResponse<Form, any>>;
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
        addFormSubmissionFile: (formSubmissionId: string, data: {
            /** @format binary */
            file?: File;
            name?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FormSubmissionFile, any>>;
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
        deleteFormSubmissionFile: (formSubmissionFileId: string, formSubmissionId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        downloadFormSubmissionFile: (formSubmissionFileId: string, formSubmissionId: string, query?: {
            /** @format uuid */
            siteConfigurationId?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FileWithBytes, any>>;
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
        getFormSubmissions: (query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FormSubmissionPaginated, any>>;
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
        createFormSubmission: (data: FormSubmissionRequest, query?: {
            formID?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FormSubmission, any>>;
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
        getFormSubmission: (id: string, params?: RequestParams) => Promise<AxiosResponse<FormSubmission, any>>;
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
        replaceFormSubmission: (id: string, data: FormSubmissionRequest, params?: RequestParams) => Promise<AxiosResponse<FormSubmission, any>>;
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
        deleteFormSubmission: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        searchFormSubmissions: (data: FormSubmissionSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<FormSubmissionPaginated, any>>;
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
        getFormVersions: (formId: string, params?: RequestParams) => Promise<AxiosResponse<FormVersion[], any>>;
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
        createFormVersion: (formId: string, data: FormVersionRequest, params?: RequestParams) => Promise<AxiosResponse<FormVersion, any>>;
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
        getFormVersion: (formId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<FormVersion, any>>;
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
        replaceFormVersion: (formId: string, id: string, data: FormVersionUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<FormVersion, any>>;
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
        deleteFormVersion: (formId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<FormVersion, any>>;
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
        getLoanData: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<Record<string, any>, any>>;
        /**
         * No description
         *
         * @tags LegacyLoan
         * @name UpdateLoanConsentAndCustomFieldsObsolete
         * @summary Update Loan Consent and Custom Fields
         * @request PATCH:/api/los/loan/application/{loanID}
         * @deprecated
         * @secure
         * @response `200` `string` Success
         * @response `422` `UnprocessableEntity` Client Error
         */
        updateLoanConsentAndCustomFieldsObsolete: (loanId: string, data: JsonPatchDocument, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
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
        getLoansReport: (data: GetReportRequest, params?: RequestParams) => Promise<AxiosResponse<GetReport, any>>;
        /**
         * No description
         *
         * @tags LegacyLoan
         * @name CreateLoan
         * @summary Create Loan
         * @request POST:/api/los/loan/application
         * @deprecated
         * @secure
         * @response `200` `string` Success
         * @response `422` `UnprocessableEntity` Client Error
         * @response `423` `UnprocessableEntity` Client Error
         */
        createLoan: (data: any, query?: {
            /** @default false */
            isPatch?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
        /**
         * No description
         *
         * @tags LegacyLoan
         * @name CreateLoanInternal
         * @summary Create Loan Returning Internal Loan ID
         * @request POST:/api/los/loan/application/internal
         * @secure
         * @response `200` `string` Success
         * @response `422` `UnprocessableEntity` Client Error
         * @response `423` `UnprocessableEntity` Client Error
         */
        createLoanInternal: (data: any, query?: {
            /** @default false */
            isPatch?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
        /**
         * No description
         *
         * @tags LegacyLoan
         * @name UpdateLoanCustomFields
         * @summary Update Loan Custom Fields
         * @request PATCH:/api/los/loan/application/{loanID}/custom-fields
         * @secure
         * @response `200` `string` Success
         * @response `422` `UnprocessableEntity` Client Error
         */
        updateLoanCustomFields: (loanId: string, data: JsonPatchDocument, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
        /**
         * No description
         *
         * @tags LegacyLoan
         * @name UpdateLoanConsent
         * @summary Update Loan Consent and Custom Fields
         * @request PATCH:/api/los/loan/application/{loanID}/consent
         * @secure
         * @response `200` `string` Success
         * @response `202` `string` Accepted
         * @response `422` `UnprocessableEntity` Client Error
         */
        updateLoanConsent: (loanId: string, data: JsonPatchDocument, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
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
        getTaskDocumentsByLoan: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<DocumentData[], any>>;
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
        getLoanDocumentContent: (loanId: string, documentId: string, query?: {
            /** @default "base64" */
            contentType?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getLoanRecipients: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getPreliminaryConditionsForLoan: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<PreliminaryCondition[], any>>;
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
        getUnderwritingConditionsForLoan: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<UnderwritingCondition[], any>>;
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
        getLoanEmbeddedSigningLink: (envelopeId: string, userName: string, email: string, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
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
        createLegacyLoanDocument: (data: GenerateDocumentRequest, params?: RequestParams) => Promise<AxiosResponse<DocumentDataRequest, any>>;
        /**
         * No description
         *
         * @tags LegacyLoan
         * @name CreateEditDraftForLoan
         * @summary Create Edit Draft for Loan
         * @request PUT:/api/los/loan/{loanID}/edit
         * @secure
         * @response `200` `Draft` Success
         * @response `400` `ProblemDetails` Bad Request
         * @response `404` `ProblemDetails` Not Found
         * @response `423` `ProblemDetails` Client Error
         */
        createEditDraftForLoan: (loanId: string, query?: {
            /** @default false */
            isCoBorrower?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<Draft, any>>;
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
        addListingFile: (listingId: string, data: {
            /** @format binary */
            file?: File;
            /** @format int32 */
            weight?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ListingFile, any>>;
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
        updateListingFiles: (listingId: string, data: JsonPatchDocument, params?: RequestParams) => Promise<AxiosResponse<ListingFile, any>>;
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
        removeListingFile: (listingId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<Listing, any>>;
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
        addListingPhoto: (listingId: string, data: {
            name?: string;
            description?: string;
            /** @format binary */
            file?: File;
            /** @format int32 */
            weight?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ListingPhoto, any>>;
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
        updateListingPhotos: (listingId: string, data: JsonPatchDocument, params?: RequestParams) => Promise<AxiosResponse<ListingPhoto[], any>>;
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
        removeListingPhoto: (listingId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<Listing, any>>;
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
        getListings: (query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<ListingPaginated, any>>;
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
        createListing: (data: ListingRequest, params?: RequestParams) => Promise<AxiosResponse<Listing, any>>;
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
        getListingBySlug: (slug: string, params?: RequestParams) => Promise<AxiosResponse<Listing, any>>;
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
        getListing: (id: string, params?: RequestParams) => Promise<AxiosResponse<Listing, any>>;
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
        replaceListing: (id: string, data: ListingRequest, params?: RequestParams) => Promise<AxiosResponse<Listing, any>>;
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
        deleteListing: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        searchListings: (data: ListingSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<ListingPaginated, any>>;
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
        updateListingBackgroundImage: (id: string, data: {
            /** @format binary */
            file?: File;
        }, params?: RequestParams) => Promise<AxiosResponse<File, any>>;
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
        deleteListingBackgroundImage: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getListingOpenHouseFlyer: (id: string, params?: RequestParams) => Promise<AxiosResponse<File, any>>;
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
        getLoanCalculator: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<RunLOCalculation, any>>;
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
         * @response `423` `UnprocessableEntity` Client Error
         */
        runLoanCalculator: (loanId: string, data: RunLOCalculationRequest, params?: RequestParams) => Promise<AxiosResponse<RunLOCalculation, any>>;
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
        getLoanComparisons: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<LoanComparison, any>>;
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
         * @response `423` `UnprocessableEntity` Client Error
         */
        createLoanComparison: (loanId: string, index: number, data: LoanComparisonScenario, params?: RequestParams) => Promise<AxiosResponse<LoanComparisonScenario, any>>;
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
        deleteLoanComparison: (loanId: string, index: number, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        createLoanComparisonPdf: (loanId: string, data: PostLoanComparisonPdfRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getLoanDocumentBuckets: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<string[], any>>;
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
        createLoanDocumentBuckets: (loanId: string, data: string[], params?: RequestParams) => Promise<AxiosResponse<string[], any>>;
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
        getLoanDocument: (loanId: string, documentId: string, query?: {
            /** @default false */
            preview?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<LoanDocument, any>>;
        /**
         * No description
         *
         * @tags LoanDocuments
         * @name SearchLoanDocuments
         * @summary Search loan documents
         * @request POST:/api/loans/{loanId}/documents/search
         * @secure
         * @response `200` `LoanDocumentSearchPaginated` Success
         */
        searchLoanDocuments: (loanId: string, data: LoanDocumentSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<LoanDocumentSearchPaginated, any>>;
        /**
         * @description Returns all documents grouped by folder for sidebar display
         *
         * @tags LoanDocuments
         * @name GetLoanDocumentFolders
         * @summary Get document folder hierarchy
         * @request GET:/api/loans/{loanId}/documents/folders
         * @secure
         * @response `200` `(DocumentFolder)[]` Success
         */
        getLoanDocumentFolders: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<DocumentFolder[], any>>;
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
        downloadLoanDocument: (loanId: string, documentId: string, params?: RequestParams) => Promise<AxiosResponse<string, any>>;
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
        createLoanDocument: (loanId: string, data: {
            name?: string;
            /** @format binary */
            file?: File;
            bucket?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<LoanDocument, any>>;
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
        retryFailedLoanDocument: (loanId: string, documentId: string, params?: RequestParams) => Promise<AxiosResponse<LoanDocument, any>>;
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
        generateLoanDocument: (loanId: string, data: GenerateDocumentRequest, params?: RequestParams) => Promise<AxiosResponse<DocumentDataRequest, any>>;
        /**
         * No description
         *
         * @tags LoanDocuments
         * @name SendLoanDocuments
         * @summary Send existing documents to loan users or external emails
         * @request POST:/api/loans/{loanId}/documents/distribute
         * @secure
         * @response `200` `void` Success
         * @response `400` `ProblemDetails` Bad Request
         * @response `404` `ProblemDetails` Not Found
         */
        sendLoanDocuments: (loanId: string, data: SendLoanDocumentsRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * @description Fetches all documents from Encompass that don't exist locally and stores them in S3
         *
         * @tags LoanDocuments
         * @name SyncLoanDocumentsFromEncompass
         * @summary Sync documents from Encompass
         * @request POST:/api/loans/{loanId}/documents/sync
         * @secure
         * @response `200` `DocumentSync` Success
         * @response `404` `ProblemDetails` Not Found
         */
        syncLoanDocumentsFromEncompass: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<DocumentSync, any>>;
        /**
         * @description Re-attempts to push a failed document to Encompass
         *
         * @tags LoanDocuments
         * @name RetrySyncLoanDocumentToEncompass
         * @summary Retry syncing a document to Encompass
         * @request POST:/api/loans/{loanId}/documents/{documentId}/sync/retry
         * @secure
         * @response `200` `void` Success
         * @response `404` `ProblemDetails` Not Found
         * @response `423` `ProblemDetails` Client Error
         */
        retrySyncLoanDocumentToEncompass: (loanId: string, documentId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        createLoanDraft: (data: DraftRequest, params?: RequestParams) => Promise<AxiosResponse<Draft, any>>;
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
        getLoanDrafts: (params?: RequestParams) => Promise<AxiosResponse<DraftContent[], any>>;
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
        getLoanDraft: (draftId: string, params?: RequestParams) => Promise<AxiosResponse<DraftContent, any>>;
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
        replaceLoanDraft: (draftId: string, data: DraftRequest, params?: RequestParams) => Promise<AxiosResponse<Draft, any>>;
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
        deleteLoanDraft: (draftId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        searchLoanDrafts: (data: LoanDraftSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<DraftContentPaginated, any>>;
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
        reassignLoanOfficer: (draftId: string, data: DraftLoanOfficerReassignRequest, params?: RequestParams) => Promise<AxiosResponse<Draft, any>>;
        /**
         * No description
         *
         * @tags LoanDrafts
         * @name RestoreLoanDraft
         * @summary Restore deleted draft
         * @request POST:/api/loans/drafts/{draftId}/restore
         * @secure
         * @response `200` `Draft` Success
         */
        restoreLoanDraft: (draftId: string, params?: RequestParams) => Promise<AxiosResponse<Draft, any>>;
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
        getLoanImports: (query?: {
            status?: LoanImportStatus;
            searchText?: string;
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<LoanImportPaginated, any>>;
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
        createLoanImport: (data: CreateLoanImportRequest, params?: RequestParams) => Promise<AxiosResponse<LoanImport, any>>;
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
        getLoanImport: (id: string, params?: RequestParams) => Promise<AxiosResponse<LoanImport, any>>;
        /**
         * No description
         *
         * @tags LoanImport
         * @name GetLoanImportLogs
         * @summary Get Loan Import Logs
         * @request GET:/api/loan-imports/{id}/logs
         * @secure
         * @response `200` `LoanImportLogPaginated` Success
         */
        getLoanImportLogs: (id: string, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<LoanImportLogPaginated, any>>;
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
        getLoanInvites: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<Invite[], any>>;
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
        inviteLoanContacts: (loanId: string, data: string[], params?: RequestParams) => Promise<AxiosResponse<Invite[], any>>;
        /**
         * No description
         *
         * @tags LoanLogs
         * @name SearchLoanLogs
         * @summary Search loan logs
         * @request POST:/api/loans/{loanId}/logs/search
         * @secure
         * @response `200` `LoanLogPaginated` Success
         */
        searchLoanLogs: (loanId: string, data: LoanLogSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<LoanLogPaginated, any>>;
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
        getLoanOfficers: (query?: {
            showAll?: boolean;
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<BranchUserPaginated, any>>;
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
        searchLoanOfficers: (data: LoanOfficerSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<BranchUserPaginated, any>>;
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
        getLoanOfficer: (id: string, params?: RequestParams) => Promise<AxiosResponse<BranchUser, any>>;
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
        createLoanOfficerSiteConfiguration: (loanOfficerId: string, data: SiteConfigurationRequest, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        getLoanOfficerSiteConfiguration: (loanOfficerId: string, siteConfigurationId: string, params?: RequestParams) => Promise<AxiosResponse<SiteConfigurationWithInherited, any>>;
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
        replaceLoanOfficerSiteConfiguration: (loanOfficerId: string, siteConfigurationId: string, data: SiteConfigurationRequest, query?: {
            applyToChildren?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        searchLoanQueue: (data: LoanQueueSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<LoanQueuePaginated, any>>;
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
        getLoanQueue: (loanQueueId: string, params?: RequestParams) => Promise<AxiosResponse<any, any>>;
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
        replaceLoanQueue: (loanQueueId: string, data: UpdateLoanQueueRequest, params?: RequestParams) => Promise<AxiosResponse<LoanQueueWithData, any>>;
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
        deleteLoanQueue: (loanQueueId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        retryLoanQueue: (loanQueueId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getLoan: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<Loan, any>>;
        /**
         * No description
         *
         * @tags Loans
         * @name GetLoans
         * @summary Get Loans
         * @request GET:/api/loans
         * @deprecated
         * @secure
         * @response `200` `GetApplications` Success
         */
        getLoans: (params?: RequestParams) => Promise<AxiosResponse<GetApplications, any>>;
        /**
         * No description
         *
         * @tags Loans
         * @name CreateLoanv3
         * @summary Submit Loan Application
         * @request POST:/api/loans
         * @secure
         * @response `201` `LoanApplication` Created
         * @response `400` `any` Bad Request
         * @response `401` `ProblemDetails` Unauthorized
         * @response `403` `ProblemDetails` Forbidden
         */
        createLoanv3: (data: LoanApplicationRequest, params?: RequestParams) => Promise<AxiosResponse<LoanApplication, any>>;
        /**
         * No description
         *
         * @tags Loans
         * @name SearchLoans
         * @summary Search
         * @request POST:/api/loans/search
         * @secure
         * @response `200` `LoanListPaginated` Success
         */
        searchLoans: (data: LoanSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<LoanListPaginated, any>>;
        /**
         * No description
         *
         * @tags Loans
         * @name UpdateLoan
         * @summary Update loan fields
         * @request PATCH:/api/loans/{loanId}
         * @secure
         * @response `200` `Loan` Success
         * @response `400` `any` Bad Request
         * @response `401` `ProblemDetails` Unauthorized
         * @response `403` `ProblemDetails` Forbidden
         * @response `404` `ProblemDetails` Not Found
         * @response `409` `any` Conflict
         */
        updateLoan: (loanId: string, data: any, params?: RequestParams) => Promise<AxiosResponse<Loan, any>>;
        /**
         * No description
         *
         * @tags Loans
         * @name ImportLoanFromLos
         * @summary Import from LOS
         * @request POST:/api/loans/import-from-los/{loanId}
         * @secure
         * @response `200` `Loan` Success
         */
        importLoanFromLos: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<Loan, any>>;
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
        searchLoanTaskComments: (loanId: string, userLoanTaskId: string, data: TaskCommentSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<TaskCommentPaginated, any>>;
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
        getLoanTaskComment: (id: string, loanId: string, userLoanTaskId: string, params?: RequestParams) => Promise<AxiosResponse<TaskComment, any>>;
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
        createLoanTaskComment: (loanId: string, userLoanTaskId: string, data: TaskCommentRequest, params?: RequestParams) => Promise<AxiosResponse<TaskComment, any>>;
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
        replaceLoanTaskComment: (loanId: string, userLoanTaskId: string, commentId: string, data: TaskCommentRequest, params?: RequestParams) => Promise<AxiosResponse<TaskComment, any>>;
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
        deleteLoanTaskComment: (loanId: string, userLoanTaskId: string, commentId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        createLoanTaskDocument: (loanId: string, loanTaskId: string, data: {
            name?: string;
            /** @format binary */
            file?: File;
            bucket?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<UserLoanTask, any>>;
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
        createLoanTaskDocumentBucket: (loanId: string, loanTaskId: string, params?: RequestParams) => Promise<AxiosResponse<UserLoanTask, any>>;
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
        getLoanTasks: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<UserLoanTask[], any>>;
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
        getLoanTask: (id: string, loanId: string, params?: RequestParams) => Promise<AxiosResponse<UserLoanTask, any>>;
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
        getLoanTaskDifference: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<UserLoanTask[], any>>;
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
        createLoanTask: (loanId: string, taskId: string, data: UserLoanTaskRequest, params?: RequestParams) => Promise<AxiosResponse<UserLoanTask, any>>;
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
        importLoanTask: (loanId: string, data: ImportUserLoanTaskRequest[], params?: RequestParams) => Promise<AxiosResponse<UserLoanTask[], any>>;
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
        replaceLoanTask: (loanId: string, userLoanTaskId: string, data: UserLoanTaskUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<UserLoanTask, any>>;
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
        deleteLoanTask: (loanId: string, userLoanTaskId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        sendOutstandingLoanTaskNotification: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        createLoanTaskVerification: (loanId: string, loanTaskId: string, params?: RequestParams) => Promise<AxiosResponse<UserLoanTask, any>>;
        /**
         * No description
         *
         * @tags LoanUserConsents
         * @name GetLoanUserConsents
         * @summary Get User Loan Consents
         * @request GET:/api/loans/{loanId}/users/{userId}/consents
         * @secure
         * @response `200` `(UserLoanConsent)[]` Success
         */
        getLoanUserConsents: (loanId: string, userId: string, params?: RequestParams) => Promise<AxiosResponse<UserLoanConsent[], any>>;
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
        getLoanUser: (loanId: string, userId: string, params?: RequestParams) => Promise<AxiosResponse<LoanUser, any>>;
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
        addLoanUser: (loanId: string, userId: string, data: CreateUserLoan, params?: RequestParams) => Promise<AxiosResponse<LoanUser, any>>;
        /**
         * No description
         *
         * @tags LoanUsers
         * @name RemoveLoanUser
         * @summary Remove User from Loan
         * @request DELETE:/api/loans/{loanId}/users/{userId}
         * @secure
         * @response `204` `LoanUser` No Content
         */
        removeLoanUser: (loanId: string, userId: string, params?: RequestParams) => Promise<AxiosResponse<LoanUser, any>>;
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
        sendLoanUserInviteReminderNotification: (loanId: string, userId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getMilestones: (params?: RequestParams) => Promise<AxiosResponse<MilestoneConfiguration[], any>>;
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
        createMilestone: (data: MilestoneConfigurationRequest, params?: RequestParams) => Promise<AxiosResponse<MilestoneConfiguration, any>>;
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
        getMilestone: (id: string, params?: RequestParams) => Promise<AxiosResponse<MilestoneConfiguration, any>>;
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
        replaceMilestone: (id: string, data: MilestoneConfigurationRequest, params?: RequestParams) => Promise<AxiosResponse<MilestoneConfiguration, any>>;
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
        deleteMilestone: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * No description
         *
         * @tags MortgageCalculators
         * @name CalculateMortgageMonthlyPayment
         * @summary Calculate Monthly Payment
         * @request POST:/api/mortgage-calculators/monthly-payment
         * @secure
         * @response `200` `MonthlyPaymentCalculator` Success
         * @response `422` `ProblemDetails` Client Error
         */
        calculateMortgageMonthlyPayment: (data: MonthlyPaymentCalculatorRequest, params?: RequestParams) => Promise<AxiosResponse<MonthlyPaymentCalculator, any>>;
        /**
         * No description
         *
         * @tags MortgageCalculators
         * @name CalculateMortgageAffordability
         * @summary Calculate Affordability
         * @request POST:/api/mortgage-calculators/affordability
         * @secure
         * @response `200` `AffordabilityCalculator` Success
         * @response `422` `ProblemDetails` Client Error
         */
        calculateMortgageAffordability: (data: AffordabilityCalculatorRequest, params?: RequestParams) => Promise<AxiosResponse<AffordabilityCalculator, any>>;
        /**
         * No description
         *
         * @tags MortgageCalculators
         * @name CalculateMortgageLoanComparison
         * @summary Calculate Loan Comparison
         * @request POST:/api/mortgage-calculators/loan-comparison
         * @secure
         * @response `200` `LoanComparisonCalculator` Success
         * @response `422` `ProblemDetails` Client Error
         */
        calculateMortgageLoanComparison: (data: LoanComparisonCalculatorRequest, params?: RequestParams) => Promise<AxiosResponse<LoanComparisonCalculator, any>>;
        /**
         * No description
         *
         * @tags MortgageCalculators
         * @name CalculateMortgageRefinance
         * @summary Calculate Refinance
         * @request POST:/api/mortgage-calculators/refinance
         * @secure
         * @response `200` `RefinanceCalculator` Success
         * @response `422` `ProblemDetails` Client Error
         */
        calculateMortgageRefinance: (data: RefinanceCalculatorRequest, params?: RequestParams) => Promise<AxiosResponse<RefinanceCalculator, any>>;
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
        sendNotificationForLoan: (data: SendNotificationForLoanRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        sendTestNotificationForLoan: (data: TestSendNotificationForLoanRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getNotificationTemplates: (query?: {
            showAll?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<NotificationTemplateBase[], any>>;
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
        createNotificationTemplate: (data: NotificationTemplateRequest, params?: RequestParams) => Promise<AxiosResponse<NotificationTemplate, any>>;
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
        getNotificationTemplate: (id: string, params?: RequestParams) => Promise<AxiosResponse<NotificationTemplate, any>>;
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
        replaceNotificationTemplate: (id: string, data: NotificationTemplateRequest, params?: RequestParams) => Promise<AxiosResponse<NotificationTemplate, any>>;
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
        deleteNotificationTemplate: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        restoreNotificationTemplate: (id: string, params?: RequestParams) => Promise<AxiosResponse<NotificationTemplate, any>>;
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
        getNotificationTemplateVersions: (notificationId: string, params?: RequestParams) => Promise<AxiosResponse<NotificationTemplateVersion[], any>>;
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
        createNotificationTemplateVersion: (notificationId: string, data: NotificationTemplateVersionRequest, params?: RequestParams) => Promise<AxiosResponse<NotificationTemplateVersion, any>>;
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
        getNotificationTemplateVersion: (notificationId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<NotificationTemplateVersion, any>>;
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
        replaceNotificationTemplateVersion: (notificationId: string, id: string, data: NotificationTemplateVersionUpdateRequest, params?: RequestParams) => Promise<AxiosResponse<NotificationTemplateVersion, any>>;
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
        deleteNotificationTemplateVersion: (notificationId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<NotificationTemplateVersion, any>>;
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
        getPartners: (query?: {
            showAll?: boolean;
            /** @default "Realtor" */
            role?: "Borrower" | "LoanOfficer" | "Admin" | "SuperAdmin" | "Realtor" | "SettlementAgent" | "LoanProcessor" | "LoanOfficerAssistant" | "BranchManager" | "SystemAdmin";
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<BranchUserPaginated, any>>;
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
        searchPartners: (data: PartnerSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<BranchUserPaginated, any>>;
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
        getPartner: (id: string, params?: RequestParams) => Promise<AxiosResponse<BranchUser, any>>;
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
        createPartnerSiteConfiguration: (realtorId: string, data: SiteConfigurationRequest, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        getPartnerSiteConfiguration: (realtorId: string, siteConfigurationId: string, params?: RequestParams) => Promise<AxiosResponse<SiteConfigurationWithInherited, any>>;
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
        replacePartnerSiteConfiguration: (realtorId: string, siteConfigurationId: string, data: SiteConfigurationRequest, query?: {
            applyToChildren?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        getSiteConfiguration: (id: string, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        searchSiteConfigurationByUrl: (data: GetSiteConfigurationRequest, params?: RequestParams) => Promise<AxiosResponse<SiteConfigurationByUrl, any>>;
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
        getSiteConfigurationByUrl: (query?: {
            url?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<SiteConfigurationByUrl, any>>;
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
        searchSiteConfigurationByLoanOfficerUser: (data: GetSiteConfigurationByLOUserIDRequest, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        getSiteConfigurationByLoanOfficerUser: (loUserId: string, params?: RequestParams) => Promise<AxiosResponse<SiteConfiguration, any>>;
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
        searchSiteConfigurations: (data: SiteConfigurationSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<SiteConfigurationSummaryPaginated, any>>;
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
        getFormsBySiteConfiguration: (id: string, params?: RequestParams) => Promise<AxiosResponse<AdminAccessGetForms[], any>>;
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
        getSamlMetadata: (sSoIntegration: "ConsumerConnect" | "TheBigPOS" | "POSF", ssoIntegration: string, params?: RequestParams) => Promise<AxiosResponse<File, any>>;
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
        createOrReplaceSamlMetadata: (sSoIntegration: "ConsumerConnect" | "TheBigPOS" | "POSF", ssoIntegration: string, params?: RequestParams) => Promise<AxiosResponse<File, any>>;
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
        getWorkflowSiteConfigurations: (workflowId: string, params?: RequestParams) => Promise<AxiosResponse<SiteConfigurationForm[], any>>;
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
        getWorkflowSiteConfiguration: (workflowId: string, siteConfigurationId: string, params?: RequestParams) => Promise<AxiosResponse<SiteConfigurationForm, any>>;
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
        createWorkflowSiteConfiguration: (workflowId: string, siteConfigurationId: string, params?: RequestParams) => Promise<AxiosResponse<SiteConfigurationForm, any>>;
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
        deleteWorkflowSiteConfiguration: (workflowId: string, siteConfigurationId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getFormBySiteConfigurationSlug: (data: GetSiteFormRequest, params?: RequestParams) => Promise<AxiosResponse<GetForm, any>>;
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
        getSurveysByUsers: (query?: {
            /** @format int32 */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<SocialSurveyRecord[], any>>;
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
        getSurveysByUser: (data: SurveyEmailRequest, params?: RequestParams) => Promise<AxiosResponse<SocialSurveyRecord[], any>>;
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
        getTasks: (query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Task, any>>;
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
        createTask: (data: TaskRequest, params?: RequestParams) => Promise<AxiosResponse<Task, any>>;
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
        getTask: (id: string, params?: RequestParams) => Promise<AxiosResponse<Task, any>>;
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
        replaceTask: (id: string, data: TaskRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        deleteTask: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        searchTasks: (data: TaskSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<TaskPaginated, any>>;
        /**
         * No description
         *
         * @tags TheBigPOS
         * @name IntegrationsLosLoansCreate
         * @request POST:/api/integrations/los/loans
         * @secure
         * @response `200` `void` Success
         */
        integrationsLosLoansCreate: (data: LosLoanCreationRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * No description
         *
         * @tags UsageReports
         * @name GenerateUsageReports
         * @summary Generate usage reports for all active production accounts
         * @request POST:/api/usage-reports
         * @secure
         * @response `200` `UsageReportGenerationResult` Success
         * @response `400` `ProblemDetails` Bad Request
         */
        generateUsageReports: (query?: {
            /** @format int32 */
            month?: number;
            /** @format int32 */
            year?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<UsageReportGenerationResult, any>>;
        /**
         * No description
         *
         * @tags UsageReports
         * @name GetUsageReportsByPeriod
         * @summary Get usage reports by month and year
         * @request GET:/api/usage-reports
         * @secure
         * @response `200` `(UsageReport)[]` Success
         * @response `400` `ProblemDetails` Bad Request
         */
        getUsageReportsByPeriod: (query?: {
            /** @format int32 */
            month?: number;
            /** @format int32 */
            year?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<UsageReport[], any>>;
        /**
         * No description
         *
         * @tags UsageReports
         * @name GenerateAndSendUsageReport
         * @summary Generate and send monthly usage report email
         * @request POST:/api/usage-reports/generate-and-send
         * @secure
         * @response `204` `void` No Content
         * @response `500` `void` Server Error
         */
        generateAndSendUsageReport: (query?: {
            /** @format int32 */
            month?: number;
            /** @format int32 */
            year?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * No description
         *
         * @tags UsageReports
         * @name GetUsageReportById
         * @summary Get usage report by ID
         * @request GET:/api/usage-reports/{id}
         * @secure
         * @response `200` `UsageReport` Success
         * @response `404` `ProblemDetails` Not Found
         */
        getUsageReportById: (id: string, params?: RequestParams) => Promise<AxiosResponse<UsageReport, any>>;
        /**
         * No description
         *
         * @tags UserDevices
         * @name CreateUserDevice
         * @summary Create a new user device
         * @request POST:/api/userdevices
         * @secure
         * @response `201` `UserDevice` Created
         * @response `400` `ProblemDetails` Bad Request
         */
        createUserDevice: (data: CreateUserDeviceRequest, params?: RequestParams) => Promise<AxiosResponse<UserDevice, any>>;
        /**
         * No description
         *
         * @tags UserDevices
         * @name DeleteUserDevice
         * @summary Delete user device
         * @request DELETE:/api/userdevices/{id}
         * @secure
         * @response `204` `void` No Content
         * @response `404` `ProblemDetails` Not Found
         */
        deleteUserDevice: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * No description
         *
         * @tags UserDraft
         * @name GetDraftUsers
         * @summary Get draft users
         * @request GET:/api/loans/drafts/{draftId}/users
         * @secure
         * @response `200` `UserDraftPaginated` Success
         */
        getDraftUsers: (draftId: string, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<UserDraftPaginated, any>>;
        /**
         * No description
         *
         * @tags UserDraft
         * @name GetDraftUser
         * @summary Get draft user
         * @request GET:/api/loans/drafts/{draftId}/users/{userId}
         * @secure
         * @response `200` `UserDraft` Success
         */
        getDraftUser: (draftId: string, userId: string, params?: RequestParams) => Promise<AxiosResponse<UserDraft, any>>;
        /**
         * No description
         *
         * @tags UserDraft
         * @name AddDraftUsers
         * @summary Add draft user
         * @request POST:/api/loans/drafts/{draftId}/users/{userId}
         * @secure
         * @response `200` `UserDraft` Success
         */
        addDraftUsers: (draftId: string, userId: string, data: CreateUserDraft, params?: RequestParams) => Promise<AxiosResponse<UserDraft, any>>;
        /**
         * No description
         *
         * @tags UserDraft
         * @name DeleteDraftUser
         * @summary Delete draft user
         * @request DELETE:/api/loans/drafts/{draftId}/users/{userId}
         * @secure
         * @response `204` `void` No Content
         */
        deleteDraftUser: (draftId: string, userId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * No description
         *
         * @tags UserGroupAccessScopes
         * @name GetUserGroupAccessScopes
         * @summary Get All
         * @request GET:/api/user-groups/{groupId}/scopes
         * @secure
         * @response `200` `(UserGroupAccessScope)[]` Success
         */
        getUserGroupAccessScopes: (groupId: string, params?: RequestParams) => Promise<AxiosResponse<UserGroupAccessScope[], any>>;
        /**
         * No description
         *
         * @tags UserGroupAccessScopes
         * @name CreateUserGroupAccessScope
         * @summary Create a new scope
         * @request POST:/api/user-groups/{groupId}/scopes
         * @secure
         * @response `200` `UserGroupAccessScope` Success
         */
        createUserGroupAccessScope: (groupId: string, data: CreateAccessScopeRequest, params?: RequestParams) => Promise<AxiosResponse<UserGroupAccessScope, any>>;
        /**
         * No description
         *
         * @tags UserGroupAccessScopes
         * @name DeleteUserGroupAccessScope
         * @summary Delete a scope
         * @request DELETE:/api/user-groups/{groupId}/scopes/{scopeId}
         * @secure
         * @response `204` `void` No Content
         */
        deleteUserGroupAccessScope: (groupId: string, scopeId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * No description
         *
         * @tags UserGroupMembers
         * @name GetUserGroupMembers
         * @summary Get All
         * @request GET:/api/user-groups/{groupId}/members
         * @secure
         * @response `200` `(UserGroupMember)[]` Success
         */
        getUserGroupMembers: (groupId: string, params?: RequestParams) => Promise<AxiosResponse<UserGroupMember[], any>>;
        /**
         * No description
         *
         * @tags UserGroupMembers
         * @name CreateUserGroupMember
         * @summary Create User Group Member
         * @request POST:/api/user-groups/{groupId}/members
         * @secure
         * @response `200` `UserGroupMember` Success
         */
        createUserGroupMember: (groupId: string, data: CreateGroupMemberRequest, query?: {
            /** @format uuid */
            userId?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<UserGroupMember, any>>;
        /**
         * No description
         *
         * @tags UserGroupMembers
         * @name DeleteUserGroupMember
         * @summary Delete User Group Member
         * @request DELETE:/api/user-groups/{groupId}/members/{userId}
         * @secure
         * @response `204` `void` No Content
         */
        deleteUserGroupMember: (groupId: string, userId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * No description
         *
         * @tags UserGroups
         * @name SearchUserGroups
         * @summary Get All
         * @request POST:/api/user-groups/search
         * @secure
         * @response `200` `UserGroupPaginated` Success
         */
        searchUserGroups: (query?: {
            searchText?: string;
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<UserGroupPaginated, any>>;
        /**
         * No description
         *
         * @tags UserGroups
         * @name GetUserGroup
         * @summary Get User Group by ID
         * @request GET:/api/user-groups/{groupId}
         * @secure
         * @response `200` `UserGroup` Success
         */
        getUserGroup: (groupId: string, params?: RequestParams) => Promise<AxiosResponse<UserGroup, any>>;
        /**
         * No description
         *
         * @tags UserGroups
         * @name UpdateUserGroup
         * @summary Update User Group
         * @request PUT:/api/user-groups/{groupId}
         * @secure
         * @response `200` `UserGroup` Success
         */
        updateUserGroup: (groupId: string, data: UpdateUserGroupRequest, params?: RequestParams) => Promise<AxiosResponse<UserGroup, any>>;
        /**
         * No description
         *
         * @tags UserGroups
         * @name DeleteUserGroup
         * @summary Delete User Group
         * @request DELETE:/api/user-groups/{groupId}
         * @secure
         * @response `204` `void` No Content
         */
        deleteUserGroup: (groupId: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * No description
         *
         * @tags UserGroups
         * @name CreateUserGroup
         * @summary Create User Group
         * @request POST:/api/user-groups
         * @secure
         * @response `201` `UserGroup` Created
         */
        createUserGroup: (data: CreateUserGroupRequest, params?: RequestParams) => Promise<AxiosResponse<UserGroup, any>>;
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
        requestImpersonation: (data: RequestImpersonationRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        allowImpersonation: (data: AllowImpersonationRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        allowImpersonationWithGuid: (allowToken: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        beginImpersonation: (params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        stopImpersonation: (params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        forceImpersonation: (data: RequestImpersonationRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        extendImpersonation: (params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        inviteUser: (data: CreateInviteRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        resendInviteNotification: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        verifyUserInvite: (token: string, params?: RequestParams) => Promise<AxiosResponse<Invite, any>>;
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
        getUserRelations: (userId: string, params?: RequestParams) => Promise<AxiosResponse<UserRelation[], any>>;
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
        createUserRelation: (userId: string, data: CreateUserRelationRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getUserRelation: (userId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<UserRelation, any>>;
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
        deleteUserRelation: (userId: string, id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getUsers: (query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<User[], any>>;
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
        createUser: (data: CreateUserRequest, params?: RequestParams) => Promise<AxiosResponse<DetailedUser, any>>;
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
        searchUsers: (data: UserSearchCriteria, query?: {
            /** @format int32 */
            pageSize?: number;
            /** @format int32 */
            pageNumber?: number;
            sortBy?: string;
            sortDirection?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<UserPaginated, any>>;
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
        getUserByEmail: (data: GetUserByEmailRequest, params?: RequestParams) => Promise<AxiosResponse<AdminAccessUser, any>>;
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
        signUp: (data: RegisterUserRequest, params?: RequestParams) => Promise<AxiosResponse<User, any>>;
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
        replaceUser: (id: string, data: UpdateUserRequest, params?: RequestParams) => Promise<AxiosResponse<DetailedUser, any>>;
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
        deleteUser: (id: string, query?: {
            /** @default false */
            permanent?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        restoreUser: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        changePassword: (data: ChangePasswordRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        verifyPassword: (data: VerifyPasswordRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        overridePassword: (id: string, data: OverridePasswordRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        forgotPassword: (data: SendForgotPasswordRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        sendMobilePhoneVerificationCode: (params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        verifyUserMobilePhone: (data: UserMobilePhoneVerificationRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
        /**
         * No description
         *
         * @tags UsersMe
         * @name GetMe
         * @summary Get
         * @request GET:/api/users/me
         * @secure
         * @response `200` `ImpersonatedDetailedUser` Success
         * @response `401` `ProblemDetails` Unauthorized
         */
        getMe: (params?: RequestParams) => Promise<AxiosResponse<ImpersonatedDetailedUser, any>>;
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
        replaceMe: (data: UpdateMeRequest, params?: RequestParams) => Promise<AxiosResponse<DetailedUser, any>>;
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
        updateMyPhone: (data: UpdateMobilePhoneRequest, params?: RequestParams) => Promise<AxiosResponse<DetailedUser, any>>;
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
        getMyRelationships: (params?: RequestParams) => Promise<AxiosResponse<UserRelationship[], any>>;
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
        getMyRelationshipProspects: (params?: RequestParams) => Promise<AxiosResponse<UserRelationshipProspect[], any>>;
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
        deleteRelationshipProspect: (id: string, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        deleteMe: (data: UserAccountDeletionRequest, params?: RequestParams) => Promise<AxiosResponse<void, any>>;
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
        getWorkflow: (data: GetWorkflowRequest, params?: RequestParams) => Promise<AxiosResponse<GetForm, any>>;
    };
    sso: {
        /**
         * No description
         *
         * @tags Saml
         * @name LogoutList
         * @request GET:/sso/logout
         * @secure
         * @response `200` `void` Success
         */
        logoutList: (params?: RequestParams) => Promise<AxiosResponse<void, any>>;
    };
}
