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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import axios from "axios";
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(_a = {}) {
        var { securityWorker, secure, format } = _a, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = (_a) => __awaiter(this, void 0, void 0, function* () {
            var { secure, path, type, query, format, body } = _a, params = __rest(_a, ["secure", "path", "type", "query", "format", "body"]);
            const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (yield this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = format || this.format || undefined;
            if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
                body = this.createFormData(body);
            }
            if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
                body = JSON.stringify(body);
            }
            return this.instance.request(Object.assign(Object.assign({}, requestParams), { headers: Object.assign(Object.assign({}, (requestParams.headers || {})), (type ? { "Content-Type": type } : {})), params: query, responseType: responseFormat, data: body, url: path }));
        });
        this.instance = axios.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || "" }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
        const method = params1.method || (params2 && params2.method);
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.instance.defaults), params1), (params2 || {})), { headers: Object.assign(Object.assign(Object.assign({}, ((method && this.instance.defaults.headers[method.toLowerCase()]) || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    }
    stringifyFormItem(formItem) {
        if (typeof formItem === "object" && formItem !== null) {
            return JSON.stringify(formItem);
        }
        else {
            return `${formItem}`;
        }
    }
    createFormData(input) {
        if (input instanceof FormData) {
            return input;
        }
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent = property instanceof Array ? property : [property];
            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    }
}
/**
 * @title The Big POS API
 * @version v2.14.2
 * @termsOfService https://www.thebigpos.com/terms-of-use/
 * @contact Mortgage Automation Technologies <support@thebigpos.com> (https://www.thebigpos.com/terms-of-use/)
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Saml
         * @name PostRoot
         * @request POST:/
         * @secure
         */
        this.postRoot = (params = {}) => this.request(Object.assign({ path: `/`, method: "POST", secure: true }, params));
        this.api = {
            /**
             * No description
             *
             * @tags Account
             * @name GetMyAccount
             * @summary Get
             * @request GET:/api/account
             * @secure
             */
            getMyAccount: (params = {}) => this.request(Object.assign({ path: `/api/account`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Account
             * @name ReplaceMyAccount
             * @summary Replace
             * @request PUT:/api/account
             * @secure
             */
            replaceMyAccount: (data, params = {}) => this.request(Object.assign({ path: `/api/account`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Account
             * @name GetSiteConfigurationByAccount
             * @summary Get Site Configuration
             * @request GET:/api/account/site-configurations
             * @secure
             */
            getSiteConfigurationByAccount: (params = {}) => this.request(Object.assign({ path: `/api/account/site-configurations`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Account
             * @name UpdateSiteConfigurationForAccount
             * @summary Update Site Configuration
             * @request PUT:/api/account/site-configurations
             * @secure
             */
            updateSiteConfigurationForAccount: (data, params = {}) => this.request(Object.assign({ path: `/api/account/site-configurations`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Accounts
             * @name GetAccounts
             * @summary Get All
             * @request GET:/api/accounts
             * @secure
             */
            getAccounts: (params = {}) => this.request(Object.assign({ path: `/api/accounts`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Accounts
             * @name CreateAccount
             * @summary Create
             * @request POST:/api/accounts
             * @secure
             */
            createAccount: (data, params = {}) => this.request(Object.assign({ path: `/api/accounts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Accounts
             * @name GetAccount
             * @summary Get by ID
             * @request GET:/api/accounts/{id}
             * @secure
             */
            getAccount: (id, params = {}) => this.request(Object.assign({ path: `/api/accounts/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Accounts
             * @name DeleteAccount
             * @summary Delete
             * @request DELETE:/api/accounts/{id}
             * @secure
             */
            deleteAccount: (id, query, params = {}) => this.request(Object.assign({ path: `/api/accounts/${id}`, method: "DELETE", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Accounts
             * @name UpdateLoansByAccount
             * @summary Update Loans
             * @request PUT:/api/accounts/{id}/loan
             * @secure
             */
            updateLoansByAccount: (id, data, params = {}) => this.request(Object.assign({ path: `/api/accounts/${id}/loan`, method: "PUT", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags Accounts
             * @name GetLoansByAccount
             * @summary Get Loans
             * @request GET:/api/accounts/{id}/loan
             * @secure
             */
            getLoansByAccount: (id, params = {}) => this.request(Object.assign({ path: `/api/accounts/${id}/loan`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Authentication
             * @name GetTokenFromRefreshToken
             * @summary Generate Token From Refresh Token
             * @request POST:/api/refresh-token
             * @secure
             */
            getTokenFromRefreshToken: (data, params = {}) => this.request(Object.assign({ path: `/api/refresh-token`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Authentication
             * @name GetToken
             * @summary Get Token
             * @request POST:/api/token
             * @secure
             */
            getToken: (data, params = {}) => this.request(Object.assign({ path: `/api/token`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Authentication
             * @name GetTokenFromChallengeCode
             * @summary Get Token From Challenge Code
             * @request POST:/api/token/code
             * @secure
             */
            getTokenFromChallengeCode: (data, params = {}) => this.request(Object.assign({ path: `/api/token/code`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Authentication
             * @name GetSystemToken
             * @summary Get System Token
             * @request POST:/api/oauth2/token
             * @secure
             */
            getSystemToken: (data, params = {}) => this.request(Object.assign({ path: `/api/oauth2/token`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Authentication
             * @name GetSsoToken
             * @summary Get SSO Guid Token
             * @request POST:/api/token/sso
             * @secure
             */
            getSsoToken: (data, params = {}) => this.request(Object.assign({ path: `/api/token/sso`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Branches
             * @name GetBranches
             * @summary Get All
             * @request GET:/api/branches
             * @secure
             */
            getBranches: (query, params = {}) => this.request(Object.assign({ path: `/api/branches`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Branches
             * @name CreateBranch
             * @summary Create
             * @request POST:/api/branches
             * @secure
             */
            createBranch: (data, params = {}) => this.request(Object.assign({ path: `/api/branches`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Branches
             * @name SearchBranches
             * @summary Search
             * @request POST:/api/branches/search
             * @secure
             */
            searchBranches: (data, query, params = {}) => this.request(Object.assign({ path: `/api/branches/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Branches
             * @name GetBranch
             * @summary Get by ID
             * @request GET:/api/branches/{branchId}
             * @secure
             */
            getBranch: (branchId, params = {}) => this.request(Object.assign({ path: `/api/branches/${branchId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Branches
             * @name ReplaceBranch
             * @summary Replace
             * @request PUT:/api/branches/{branchId}
             * @secure
             */
            replaceBranch: (branchId, data, params = {}) => this.request(Object.assign({ path: `/api/branches/${branchId}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Branches
             * @name DeleteBranch
             * @summary Delete
             * @request DELETE:/api/branches/{branchId}
             * @secure
             */
            deleteBranch: (branchId, params = {}) => this.request(Object.assign({ path: `/api/branches/${branchId}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags Branches
             * @name RestoreBranch
             * @summary Restore
             * @request POST:/api/branches/{branchId}/restore
             * @secure
             */
            restoreBranch: (branchId, params = {}) => this.request(Object.assign({ path: `/api/branches/${branchId}/restore`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags Branches
             * @name CreateBranchSiteConfiguration
             * @summary Create Branch Site Configuration
             * @request POST:/api/branches/{branchId}/site-configurations
             * @secure
             */
            createBranchSiteConfiguration: (branchId, data, params = {}) => this.request(Object.assign({ path: `/api/branches/${branchId}/site-configurations`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Branches
             * @name GetBranchSiteConfiguration
             * @summary Get Branch Site Configuration
             * @request GET:/api/branches/{branchId}/site-configurations/{siteConfigurationId}
             * @secure
             */
            getBranchSiteConfiguration: (branchId, siteConfigurationId, params = {}) => this.request(Object.assign({ path: `/api/branches/${branchId}/site-configurations/${siteConfigurationId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Branches
             * @name ReplaceBranchSiteConfiguration
             * @summary Replace Branch Site Configuration
             * @request PUT:/api/branches/{branchId}/site-configurations/{siteConfigurationId}
             * @secure
             */
            replaceBranchSiteConfiguration: (branchId, siteConfigurationId, data, query, params = {}) => this.request(Object.assign({ path: `/api/branches/${branchId}/site-configurations/${siteConfigurationId}`, method: "PUT", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Branches
             * @name GetLoanOfficersByBranch
             * @summary Get Branch Loan Officers
             * @request GET:/api/branches/{branchId}/loan-officers
             * @secure
             */
            getLoanOfficersByBranch: (branchId, params = {}) => this.request(Object.assign({ path: `/api/branches/${branchId}/loan-officers`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags BusinessRules
             * @name GetBusinessRules
             * @summary Get All
             * @request GET:/api/business-rules
             * @secure
             */
            getBusinessRules: (query, params = {}) => this.request(Object.assign({ path: `/api/business-rules`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags BusinessRules
             * @name CreateBusinessRule
             * @summary Create
             * @request POST:/api/business-rules
             * @secure
             */
            createBusinessRule: (data, params = {}) => this.request(Object.assign({ path: `/api/business-rules`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags BusinessRules
             * @name GetBusinessRule
             * @summary Get by ID
             * @request GET:/api/business-rules/{id}
             * @secure
             */
            getBusinessRule: (id, params = {}) => this.request(Object.assign({ path: `/api/business-rules/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags BusinessRules
             * @name ReplaceBusinessRule
             * @summary Replace
             * @request PUT:/api/business-rules/{id}
             * @secure
             */
            replaceBusinessRule: (id, data, params = {}) => this.request(Object.assign({ path: `/api/business-rules/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags BusinessRules
             * @name DeleteBusinessRule
             * @summary Delete
             * @request DELETE:/api/business-rules/{id}
             * @secure
             */
            deleteBusinessRule: (id, params = {}) => this.request(Object.assign({ path: `/api/business-rules/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags BusinessRules
             * @name RestoreBusinessRule
             * @summary Restore
             * @request POST:/api/business-rules/{id}/restore
             * @secure
             */
            restoreBusinessRule: (id, params = {}) => this.request(Object.assign({ path: `/api/business-rules/${id}/restore`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name GetCorporates
             * @summary Get All
             * @request GET:/api/corporates
             * @secure
             */
            getCorporates: (query, params = {}) => this.request(Object.assign({ path: `/api/corporates`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name CreateCorporate
             * @summary Create
             * @request POST:/api/corporates
             * @secure
             */
            createCorporate: (data, params = {}) => this.request(Object.assign({ path: `/api/corporates`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name SearchCorporate
             * @summary Search
             * @request POST:/api/corporates/search
             * @secure
             */
            searchCorporate: (data, query, params = {}) => this.request(Object.assign({ path: `/api/corporates/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name GetCorporate
             * @summary Get by ID
             * @request GET:/api/corporates/{id}
             * @secure
             */
            getCorporate: (id, params = {}) => this.request(Object.assign({ path: `/api/corporates/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name ReplaceCorporate
             * @summary Replace
             * @request PUT:/api/corporates/{id}
             * @secure
             */
            replaceCorporate: (id, data, params = {}) => this.request(Object.assign({ path: `/api/corporates/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name DeleteCorporate
             * @summary Delete
             * @request DELETE:/api/corporates/{id}
             * @secure
             */
            deleteCorporate: (id, params = {}) => this.request(Object.assign({ path: `/api/corporates/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name RestoreCorporate
             * @summary Restore
             * @request POST:/api/corporates/{id}/restore
             * @secure
             */
            restoreCorporate: (id, params = {}) => this.request(Object.assign({ path: `/api/corporates/${id}/restore`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name CreateCorporateSiteConfiguration
             * @summary Create Site Configuration
             * @request POST:/api/corporates/{corporateId}/site-configurations
             * @secure
             */
            createCorporateSiteConfiguration: (corporateId, data, params = {}) => this.request(Object.assign({ path: `/api/corporates/${corporateId}/site-configurations`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name GetCorporateSiteConfiguration
             * @summary Get Site Configuration
             * @request GET:/api/corporates/{corporateId}/site-configurations/{siteConfigurationId}
             * @secure
             */
            getCorporateSiteConfiguration: (corporateId, siteConfigurationId, params = {}) => this.request(Object.assign({ path: `/api/corporates/${corporateId}/site-configurations/${siteConfigurationId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name ReplaceCorporateSiteConfiguration
             * @summary Replace Site Configuration
             * @request PUT:/api/corporates/{corporateId}/site-configurations/{siteConfigurationId}
             * @secure
             */
            replaceCorporateSiteConfiguration: (corporateId, siteConfigurationId, data, query, params = {}) => this.request(Object.assign({ path: `/api/corporates/${corporateId}/site-configurations/${siteConfigurationId}`, method: "PUT", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name GetBranchesByCorporate
             * @summary Get Branches
             * @request GET:/api/corporates/{id}/branches
             * @secure
             */
            getBranchesByCorporate: (id, params = {}) => this.request(Object.assign({ path: `/api/corporates/${id}/branches`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Corporates
             * @name GetLoanOfficersByCorporate
             * @summary Get Loan Officers
             * @request GET:/api/corporates/{id}/loan-officers
             * @secure
             */
            getLoanOfficersByCorporate: (id, params = {}) => this.request(Object.assign({ path: `/api/corporates/${id}/loan-officers`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Devices
             * @name GetDevices
             * @summary Get All
             * @request GET:/api/devices
             * @secure
             */
            getDevices: (query, params = {}) => this.request(Object.assign({ path: `/api/devices`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Devices
             * @name GetDevice
             * @summary Get by ID
             * @request GET:/api/devices/{id}
             * @secure
             */
            getDevice: (id, params = {}) => this.request(Object.assign({ path: `/api/devices/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Devices
             * @name UpdateDevice
             * @summary Update
             * @request PUT:/api/devices/{id}
             * @secure
             */
            updateDevice: (id, data, params = {}) => this.request(Object.assign({ path: `/api/devices/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Devices
             * @name GetDeviceBySerialNumber
             * @summary Get by Serial Number
             * @request GET:/api/devices/{sn}/profile
             * @secure
             */
            getDeviceBySerialNumber: (sn, params = {}) => this.request(Object.assign({ path: `/api/devices/${sn}/profile`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Devices
             * @name CreateDeviceActionBySerialNumber
             * @summary Create Action by Serial Number
             * @request POST:/api/devices/{sn}/actions/{actionName}
             * @secure
             */
            createDeviceActionBySerialNumber: (sn, actionName, params = {}) => this.request(Object.assign({ path: `/api/devices/${sn}/actions/${actionName}`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags DocumentBuckets
             * @name GetDocumentBuckets
             * @summary Get All
             * @request GET:/api/document-buckets
             * @secure
             */
            getDocumentBuckets: (query, params = {}) => this.request(Object.assign({ path: `/api/document-buckets`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplates
             * @name GetDocumentTemplates
             * @summary Get All
             * @request GET:/api/document-templates
             * @secure
             */
            getDocumentTemplates: (query, params = {}) => this.request(Object.assign({ path: `/api/document-templates`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplates
             * @name CreateDocumentTemplate
             * @summary Create
             * @request POST:/api/document-templates
             * @secure
             */
            createDocumentTemplate: (data, params = {}) => this.request(Object.assign({ path: `/api/document-templates`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplates
             * @name GetCustomDocumentTemplates
             * @summary Get Custom
             * @request GET:/api/document-templates/{type}
             * @secure
             */
            getCustomDocumentTemplates: (type, query, params = {}) => this.request(Object.assign({ path: `/api/document-templates/${type}`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplates
             * @name GetDocumentTemplate
             * @summary Get By ID
             * @request GET:/api/document-templates/{id}
             * @secure
             */
            getDocumentTemplate: (id, params = {}) => this.request(Object.assign({ path: `/api/document-templates/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplates
             * @name ReplaceDocumentTemplate
             * @summary Replace
             * @request PUT:/api/document-templates/{id}
             * @secure
             */
            replaceDocumentTemplate: (id, data, params = {}) => this.request(Object.assign({ path: `/api/document-templates/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplates
             * @name DeleteDocumentTemplate
             * @summary Delete
             * @request DELETE:/api/document-templates/{id}
             * @secure
             */
            deleteDocumentTemplate: (id, params = {}) => this.request(Object.assign({ path: `/api/document-templates/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplates
             * @name RestoreDocumentTemplate
             * @summary Restore
             * @request POST:/api/document-templates/{id}/restore
             * @secure
             */
            restoreDocumentTemplate: (id, params = {}) => this.request(Object.assign({ path: `/api/document-templates/${id}/restore`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplateVersions
             * @name GetDocumentTemplateVersions
             * @summary Get All
             * @request GET:/api/document-templates/{documentId}/versions
             * @secure
             */
            getDocumentTemplateVersions: (documentId, params = {}) => this.request(Object.assign({ path: `/api/document-templates/${documentId}/versions`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplateVersions
             * @name CreateDocumentTemplateVersion
             * @summary Create
             * @request POST:/api/document-templates/{documentId}/versions
             * @secure
             */
            createDocumentTemplateVersion: (documentId, data, params = {}) => this.request(Object.assign({ path: `/api/document-templates/${documentId}/versions`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplateVersions
             * @name GetDocumentTemplateVersion
             * @summary Get by ID
             * @request GET:/api/document-templates/{documentId}/versions/{id}
             * @secure
             */
            getDocumentTemplateVersion: (documentId, id, params = {}) => this.request(Object.assign({ path: `/api/document-templates/${documentId}/versions/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplateVersions
             * @name ReplaceDocumentTemplateVersion
             * @summary Replace
             * @request PUT:/api/document-templates/{documentId}/versions/{id}
             * @secure
             */
            replaceDocumentTemplateVersion: (documentId, id, data, params = {}) => this.request(Object.assign({ path: `/api/document-templates/${documentId}/versions/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags DocumentTemplateVersions
             * @name DeleteDocumentTemplateVersion
             * @summary Delete
             * @request DELETE:/api/document-templates/{documentId}/versions/{id}
             * @secure
             */
            deleteDocumentTemplateVersion: (documentId, id, params = {}) => this.request(Object.assign({ path: `/api/document-templates/${documentId}/versions/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Files
             * @name GetAllFiles
             * @summary Get All
             * @request GET:/api/files
             * @secure
             */
            getAllFiles: (query, params = {}) => this.request(Object.assign({ path: `/api/files`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Files
             * @name UploadFile
             * @summary Upload
             * @request POST:/api/files
             * @secure
             */
            uploadFile: (data, params = {}) => this.request(Object.assign({ path: `/api/files`, method: "POST", body: data, secure: true, type: ContentType.FormData, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Files
             * @name GetFileById
             * @summary Get By ID
             * @request GET:/api/files/{id}
             * @secure
             */
            getFileById: (id, params = {}) => this.request(Object.assign({ path: `/api/files/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Files
             * @name ReplaceFile
             * @summary Replace
             * @request PUT:/api/files/{id}
             * @secure
             */
            replaceFile: (id, data, params = {}) => this.request(Object.assign({ path: `/api/files/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Files
             * @name DeleteFile
             * @summary Delete
             * @request DELETE:/api/files/{id}
             * @secure
             */
            deleteFile: (id, params = {}) => this.request(Object.assign({ path: `/api/files/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags Files
             * @name SearchFiles
             * @summary Search
             * @request POST:/api/files/search
             * @secure
             */
            searchFiles: (data, query, params = {}) => this.request(Object.assign({ path: `/api/files/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Forms
             * @name GetForms
             * @summary Get All
             * @request GET:/api/forms
             * @secure
             */
            getForms: (query, params = {}) => this.request(Object.assign({ path: `/api/forms`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Forms
             * @name CreateForm
             * @summary Create
             * @request POST:/api/forms
             * @secure
             */
            createForm: (data, params = {}) => this.request(Object.assign({ path: `/api/forms`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Forms
             * @name GetForm
             * @summary Get By ID
             * @request GET:/api/forms/{id}
             * @secure
             */
            getForm: (id, params = {}) => this.request(Object.assign({ path: `/api/forms/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Forms
             * @name ReplaceForm
             * @summary Replace
             * @request PUT:/api/forms/{id}
             * @secure
             */
            replaceForm: (id, data, params = {}) => this.request(Object.assign({ path: `/api/forms/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Forms
             * @name DeleteForm
             * @summary Delete
             * @request DELETE:/api/forms/{id}
             * @secure
             */
            deleteForm: (id, params = {}) => this.request(Object.assign({ path: `/api/forms/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags Forms
             * @name RestoreForm
             * @summary Restore
             * @request POST:/api/forms/{id}/restore
             * @secure
             */
            restoreForm: (id, params = {}) => this.request(Object.assign({ path: `/api/forms/${id}/restore`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Forms
             * @name AddFormToSiteConfiguration
             * @summary Add to Site Configuration
             * @request POST:/api/forms/{formId}/site-configurations/{siteConfigurationId}
             * @secure
             */
            addFormToSiteConfiguration: (formId, siteConfigurationId, data, params = {}) => this.request(Object.assign({ path: `/api/forms/${formId}/site-configurations/${siteConfigurationId}`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Forms
             * @name RemoveFormFromSiteConfiguration
             * @summary Remove from Site Configuration
             * @request DELETE:/api/forms/{formId}/site-configurations/{siteConfigurationId}
             * @secure
             */
            removeFormFromSiteConfiguration: (formId, siteConfigurationId, params = {}) => this.request(Object.assign({ path: `/api/forms/${formId}/site-configurations/${siteConfigurationId}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Forms
             * @name GetSiteConfigurationsByForm
             * @summary Get Site Configurations by Form
             * @request GET:/api/forms/{formId}/site-configurations
             * @secure
             */
            getSiteConfigurationsByForm: (formId, params = {}) => this.request(Object.assign({ path: `/api/forms/${formId}/site-configurations`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormSubmissionFiles
             * @name AddFormSubmissionFile
             * @summary Add
             * @request POST:/api/form-submissions/{formSubmissionId}/files
             * @secure
             */
            addFormSubmissionFile: (formSubmissionId, data, params = {}) => this.request(Object.assign({ path: `/api/form-submissions/${formSubmissionId}/files`, method: "POST", body: data, secure: true, type: ContentType.FormData, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormSubmissionFiles
             * @name DeleteFormSubmissionFile
             * @summary Delete
             * @request DELETE:/api/form-submissions/{formSubmissionId}/files/{formSubmissionFileId}
             * @secure
             */
            deleteFormSubmissionFile: (formSubmissionFileId, formSubmissionId, params = {}) => this.request(Object.assign({ path: `/api/form-submissions/${formSubmissionId}/files/${formSubmissionFileId}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags FormSubmissionFiles
             * @name DownloadFormSubmissionFile
             * @summary Download by Id
             * @request GET:/api/form-submissions/{formSubmissionId}/files/{formSubmissionFileId}/download
             * @secure
             */
            downloadFormSubmissionFile: (formSubmissionFileId, formSubmissionId, query, params = {}) => this.request(Object.assign({ path: `/api/form-submissions/${formSubmissionId}/files/${formSubmissionFileId}/download`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormSubmissions
             * @name GetFormSubmissions
             * @summary Get All
             * @request GET:/api/form-submissions
             * @secure
             */
            getFormSubmissions: (query, params = {}) => this.request(Object.assign({ path: `/api/form-submissions`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormSubmissions
             * @name CreateFormSubmission
             * @summary Create
             * @request POST:/api/form-submissions
             * @secure
             */
            createFormSubmission: (data, query, params = {}) => this.request(Object.assign({ path: `/api/form-submissions`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormSubmissions
             * @name GetFormSubmission
             * @summary Get by ID
             * @request GET:/api/form-submissions/{id}
             * @secure
             */
            getFormSubmission: (id, params = {}) => this.request(Object.assign({ path: `/api/form-submissions/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormSubmissions
             * @name ReplaceFormSubmission
             * @summary Replace
             * @request PUT:/api/form-submissions/{id}
             * @secure
             */
            replaceFormSubmission: (id, data, params = {}) => this.request(Object.assign({ path: `/api/form-submissions/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormSubmissions
             * @name DeleteFormSubmission
             * @summary Delete
             * @request DELETE:/api/form-submissions/{id}
             * @secure
             */
            deleteFormSubmission: (id, params = {}) => this.request(Object.assign({ path: `/api/form-submissions/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags FormSubmissions
             * @name SearchFormSubmissions
             * @summary Search
             * @request POST:/api/form-submissions/search
             * @secure
             */
            searchFormSubmissions: (data, query, params = {}) => this.request(Object.assign({ path: `/api/form-submissions/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormVersions
             * @name GetFormVersions
             * @summary Get All
             * @request GET:/api/forms/{formId}/versions
             * @secure
             */
            getFormVersions: (formId, params = {}) => this.request(Object.assign({ path: `/api/forms/${formId}/versions`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormVersions
             * @name CreateFormVersion
             * @summary Create
             * @request POST:/api/forms/{formId}/versions
             * @secure
             */
            createFormVersion: (formId, data, params = {}) => this.request(Object.assign({ path: `/api/forms/${formId}/versions`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormVersions
             * @name GetFormVersion
             * @summary Get by ID
             * @request GET:/api/forms/{formId}/versions/{id}
             * @secure
             */
            getFormVersion: (formId, id, params = {}) => this.request(Object.assign({ path: `/api/forms/${formId}/versions/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormVersions
             * @name ReplaceFormVersion
             * @summary Replace
             * @request PUT:/api/forms/{formId}/versions/{id}
             * @secure
             */
            replaceFormVersion: (formId, id, data, params = {}) => this.request(Object.assign({ path: `/api/forms/${formId}/versions/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormVersions
             * @name DeleteFormVersion
             * @summary Delete
             * @request DELETE:/api/forms/{formId}/versions/{id}
             * @secure
             */
            deleteFormVersion: (formId, id, params = {}) => this.request(Object.assign({ path: `/api/forms/${formId}/versions/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetLoanData
             * @summary Get By ID
             * @request GET:/api/los/loan/application/{loanID}
             * @secure
             */
            getLoanData: (loanId, params = {}) => this.request(Object.assign({ path: `/api/los/loan/application/${loanId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name UpdateLoan
             * @summary Update Loan
             * @request PATCH:/api/los/loan/application/{loanID}
             * @secure
             */
            updateLoan: (loanId, data, params = {}) => this.request(Object.assign({ path: `/api/los/loan/application/${loanId}`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetLoansReport
             * @summary Get Report
             * @request POST:/api/los/loan/reports
             * @secure
             */
            getLoansReport: (data, params = {}) => this.request(Object.assign({ path: `/api/los/loan/reports`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name CreateLoan
             * @summary Create Loan
             * @request POST:/api/los/loan/application
             * @secure
             */
            createLoan: (data, params = {}) => this.request(Object.assign({ path: `/api/los/loan/application`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetTaskDocumentsByLoan
             * @summary Get Documents
             * @request GET:/api/los/loan/tasks/documents/{loanID}
             * @secure
             */
            getTaskDocumentsByLoan: (loanId, query, params = {}) => this.request(Object.assign({ path: `/api/los/loan/tasks/documents/${loanId}`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetLoanDocumentContent
             * @summary Get Document Content
             * @request GET:/api/los/loan/{loanID}/document/{documentId}/content
             * @secure
             */
            getLoanDocumentContent: (loanId, documentId, query, params = {}) => this.request(Object.assign({ path: `/api/los/loan/${loanId}/document/${documentId}/content`, method: "GET", query: query, secure: true }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetLoanRecipients
             * @summary Get Loan Recipients
             * @request GET:/api/los/loan/recipients/{loanID}
             * @secure
             */
            getLoanRecipients: (loanId, params = {}) => this.request(Object.assign({ path: `/api/los/loan/recipients/${loanId}`, method: "GET", secure: true }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetLoanContactInformation
             * @summary Get Contact Information
             * @request GET:/api/los/loan/contacts/{loanID}
             * @secure
             */
            getLoanContactInformation: (loanId, params = {}) => this.request(Object.assign({ path: `/api/los/loan/contacts/${loanId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetPreliminaryConditionsForLoan
             * @summary Get Preliminary Conditions
             * @request GET:/api/los/loan/{loanID}/conditions/preliminary
             * @secure
             */
            getPreliminaryConditionsForLoan: (loanId, params = {}) => this.request(Object.assign({ path: `/api/los/loan/${loanId}/conditions/preliminary`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetUnderwritingConditionsForLoan
             * @summary Get Underwriting Conditions
             * @request GET:/api/los/loan/{loanID}/conditions/underwriting
             * @secure
             */
            getUnderwritingConditionsForLoan: (loanId, params = {}) => this.request(Object.assign({ path: `/api/los/loan/${loanId}/conditions/underwriting`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetLoanEmbeddedSigningLink
             * @summary Get Embedded Signing Link
             * @request POST:/api/los/loan/embeddedsigning/{envelopeId}/{userName}/{email}
             * @secure
             */
            getLoanEmbeddedSigningLink: (envelopeId, userName, email, params = {}) => this.request(Object.assign({ path: `/api/los/loan/embeddedsigning/${envelopeId}/${userName}/${email}`, method: "POST", secure: true, format: "json" }, params)),
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
            createLegacyLoanDocument: (data, params = {}) => this.request(Object.assign({ path: `/api/los/loan/generatedocument`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags ListingFiles
             * @name AddListingFile
             * @summary Add
             * @request POST:/api/listings/{listingId}/files
             * @secure
             */
            addListingFile: (listingId, data, params = {}) => this.request(Object.assign({ path: `/api/listings/${listingId}/files`, method: "POST", body: data, secure: true, type: ContentType.FormData, format: "json" }, params)),
            /**
             * No description
             *
             * @tags ListingFiles
             * @name UpdateListingFiles
             * @summary Update
             * @request PATCH:/api/listings/{listingId}/files
             * @secure
             */
            updateListingFiles: (listingId, data, params = {}) => this.request(Object.assign({ path: `/api/listings/${listingId}/files`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags ListingFiles
             * @name RemoveListingFile
             * @summary Remove
             * @request DELETE:/api/listings/{listingId}/files/{id}
             * @secure
             */
            removeListingFile: (listingId, id, params = {}) => this.request(Object.assign({ path: `/api/listings/${listingId}/files/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags ListingPhotos
             * @name AddListingPhoto
             * @summary Add
             * @request POST:/api/listings/{listingId}/photos
             * @secure
             */
            addListingPhoto: (listingId, data, params = {}) => this.request(Object.assign({ path: `/api/listings/${listingId}/photos`, method: "POST", body: data, secure: true, type: ContentType.FormData, format: "json" }, params)),
            /**
             * No description
             *
             * @tags ListingPhotos
             * @name UpdateListingPhotos
             * @summary Update
             * @request PATCH:/api/listings/{listingId}/photos
             * @secure
             */
            updateListingPhotos: (listingId, data, params = {}) => this.request(Object.assign({ path: `/api/listings/${listingId}/photos`, method: "PATCH", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags ListingPhotos
             * @name RemoveListingPhoto
             * @summary Remove
             * @request DELETE:/api/listings/{listingId}/photos/{id}
             * @secure
             */
            removeListingPhoto: (listingId, id, params = {}) => this.request(Object.assign({ path: `/api/listings/${listingId}/photos/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Listings
             * @name GetListings
             * @summary Get All
             * @request GET:/api/listings
             * @secure
             */
            getListings: (query, params = {}) => this.request(Object.assign({ path: `/api/listings`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Listings
             * @name CreateListing
             * @summary Create
             * @request POST:/api/listings
             * @secure
             */
            createListing: (data, params = {}) => this.request(Object.assign({ path: `/api/listings`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Listings
             * @name GetListingBySlug
             * @summary Get by Slug
             * @request GET:/api/listings/slug/{slug}
             * @secure
             */
            getListingBySlug: (slug, params = {}) => this.request(Object.assign({ path: `/api/listings/slug/${slug}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Listings
             * @name GetListing
             * @summary Get by ID
             * @request GET:/api/listings/{id}
             * @secure
             */
            getListing: (id, params = {}) => this.request(Object.assign({ path: `/api/listings/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Listings
             * @name ReplaceListing
             * @summary Replace
             * @request PUT:/api/listings/{id}
             * @secure
             */
            replaceListing: (id, data, params = {}) => this.request(Object.assign({ path: `/api/listings/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Listings
             * @name DeleteListing
             * @summary Delete
             * @request DELETE:/api/listings/{id}
             * @secure
             */
            deleteListing: (id, params = {}) => this.request(Object.assign({ path: `/api/listings/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags Listings
             * @name SearchListings
             * @summary Search
             * @request POST:/api/listings/search
             * @secure
             */
            searchListings: (data, query, params = {}) => this.request(Object.assign({ path: `/api/listings/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Listings
             * @name UpdateListingBackgroundImage
             * @summary Update Background Image
             * @request PUT:/api/listings/{id}/background-image
             * @secure
             */
            updateListingBackgroundImage: (id, data, params = {}) => this.request(Object.assign({ path: `/api/listings/${id}/background-image`, method: "PUT", body: data, secure: true, type: ContentType.FormData, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Listings
             * @name DeleteListingBackgroundImage
             * @summary Delete Background Image
             * @request DELETE:/api/listings/{id}/background-image
             * @secure
             */
            deleteListingBackgroundImage: (id, params = {}) => this.request(Object.assign({ path: `/api/listings/${id}/background-image`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags Listings
             * @name GetListingOpenHouseFlyer
             * @summary Get Open House Flyer
             * @request GET:/api/listings/{id}/open-house-flyer
             * @secure
             */
            getListingOpenHouseFlyer: (id, params = {}) => this.request(Object.assign({ path: `/api/listings/${id}/open-house-flyer`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanCalculators
             * @name GetLoanCalculator
             * @summary Get
             * @request GET:/api/loans/{loanID}/calculators/loan-calculator
             * @secure
             */
            getLoanCalculator: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/calculators/loan-calculator`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanCalculators
             * @name RunLoanCalculator
             * @summary Run
             * @request POST:/api/loans/{loanID}/calculators/loan-calculator
             * @secure
             */
            runLoanCalculator: (loanId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/calculators/loan-calculator`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanComparison
             * @name GetLoanComparisons
             * @summary Get All
             * @request GET:/api/loans/{loanID}/loan-comparison
             * @secure
             */
            getLoanComparisons: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/loan-comparison`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanComparison
             * @name CreateLoanComparison
             * @summary Create
             * @request POST:/api/loans/{loanID}/loan-comparison/{index}
             * @secure
             */
            createLoanComparison: (loanId, index, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/loan-comparison/${index}`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanComparison
             * @name DeleteLoanComparison
             * @summary Delete
             * @request DELETE:/api/loans/{loanID}/loan-comparison/{index}
             * @secure
             */
            deleteLoanComparison: (loanId, index, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/loan-comparison/${index}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags LoanComparison
             * @name CreateLoanComparisonPdf
             * @summary Create PDF
             * @request POST:/api/loans/{loanID}/loan-comparison/pdf
             * @secure
             */
            createLoanComparisonPdf: (loanId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/loan-comparison/pdf`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags LoanDocumentBuckets
             * @name GetLoanDocumentBuckets
             * @summary Get All
             * @request GET:/api/loans/{loanId}/documents/buckets
             * @secure
             */
            getLoanDocumentBuckets: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/documents/buckets`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDocumentBuckets
             * @name CreateLoanDocumentBuckets
             * @summary Create
             * @request POST:/api/loans/{loanId}/documents/buckets
             * @secure
             */
            createLoanDocumentBuckets: (loanId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/documents/buckets`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDocuments
             * @name GetLoanDocument
             * @summary Get By ID
             * @request GET:/api/loans/{loanId}/documents/{documentId}
             * @secure
             */
            getLoanDocument: (loanId, documentId, query, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/documents/${documentId}`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDocuments
             * @name DownloadLoanDocument
             * @summary Download By ID
             * @request GET:/api/loans/{loanId}/documents/{documentId}/download
             * @secure
             */
            downloadLoanDocument: (loanId, documentId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/documents/${documentId}/download`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDocuments
             * @name CreateLoanDocument
             * @summary Create
             * @request POST:/api/loans/{loanId}/documents
             * @secure
             */
            createLoanDocument: (loanId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/documents`, method: "POST", body: data, secure: true, type: ContentType.FormData, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDocuments
             * @name RetryFailedLoanDocument
             * @summary Retry
             * @request POST:/api/loans/{loanId}/documents/{documentId}/retry
             * @secure
             */
            retryFailedLoanDocument: (loanId, documentId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/documents/${documentId}/retry`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDrafts
             * @name CreateLoanDraft
             * @summary Create
             * @request POST:/api/loans/drafts
             * @secure
             */
            createLoanDraft: (data, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDrafts
             * @name GetLoanDrafts
             * @summary Get All
             * @request GET:/api/loans/drafts
             * @secure
             */
            getLoanDrafts: (params = {}) => this.request(Object.assign({ path: `/api/loans/drafts`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDrafts
             * @name GetLoanDraft
             * @summary Get by ID
             * @request GET:/api/loans/drafts/{draftId}
             * @secure
             */
            getLoanDraft: (draftId, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts/${draftId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDrafts
             * @name ReplaceLoanDraft
             * @summary Replace
             * @request PUT:/api/loans/drafts/{draftId}
             * @secure
             */
            replaceLoanDraft: (draftId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts/${draftId}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDrafts
             * @name DeleteLoanDraft
             * @summary Delete
             * @request DELETE:/api/loans/drafts/{draftId}
             * @secure
             */
            deleteLoanDraft: (draftId, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts/${draftId}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags LoanDrafts
             * @name SearchLoanDrafts
             * @summary Search
             * @request POST:/api/loans/drafts/search
             * @secure
             */
            searchLoanDrafts: (data, query, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDrafts
             * @name ReassignLoanOfficer
             * @summary Reassign Loan officer
             * @request PUT:/api/loans/drafts/{draftId}/reassign
             * @secure
             */
            reassignLoanOfficer: (draftId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts/${draftId}/reassign`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanOfficers
             * @name GetLoanOfficers
             * @summary Get All
             * @request GET:/api/loan-officers
             * @secure
             */
            getLoanOfficers: (query, params = {}) => this.request(Object.assign({ path: `/api/loan-officers`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanOfficers
             * @name SearchLoanOfficers
             * @summary Search
             * @request POST:/api/loan-officers/search
             * @secure
             */
            searchLoanOfficers: (data, query, params = {}) => this.request(Object.assign({ path: `/api/loan-officers/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanOfficers
             * @name GetLoanOfficer
             * @summary Get by ID
             * @request GET:/api/loan-officers/{id}
             * @secure
             */
            getLoanOfficer: (id, params = {}) => this.request(Object.assign({ path: `/api/loan-officers/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanOfficers
             * @name GetLoanOfficerLoans
             * @summary Get Loans
             * @request GET:/api/loan-officers/applications
             * @secure
             */
            getLoanOfficerLoans: (params = {}) => this.request(Object.assign({ path: `/api/loan-officers/applications`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanOfficers
             * @name CreateLoanOfficerSiteConfiguration
             * @summary Create Site Configuration
             * @request POST:/api/loan-officers/{loanOfficerId}/site-configurations
             * @secure
             */
            createLoanOfficerSiteConfiguration: (loanOfficerId, data, params = {}) => this.request(Object.assign({ path: `/api/loan-officers/${loanOfficerId}/site-configurations`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanOfficers
             * @name GetLoanOfficerSiteConfiguration
             * @summary Get Site Configuration
             * @request GET:/api/loan-officers/{loanOfficerId}/site-configurations/{siteConfigurationId}
             * @secure
             */
            getLoanOfficerSiteConfiguration: (loanOfficerId, siteConfigurationId, params = {}) => this.request(Object.assign({ path: `/api/loan-officers/${loanOfficerId}/site-configurations/${siteConfigurationId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanOfficers
             * @name ReplaceLoanOfficerSiteConfiguration
             * @summary Replace Site Configuration
             * @request PUT:/api/loan-officers/{loanOfficerId}/site-configurations/{siteConfigurationId}
             * @secure
             */
            replaceLoanOfficerSiteConfiguration: (loanOfficerId, siteConfigurationId, data, query, params = {}) => this.request(Object.assign({ path: `/api/loan-officers/${loanOfficerId}/site-configurations/${siteConfigurationId}`, method: "PUT", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanQueue
             * @name SearchLoanQueue
             * @summary Search
             * @request POST:/api/loans/queue/search
             * @secure
             */
            searchLoanQueue: (data, query, params = {}) => this.request(Object.assign({ path: `/api/loans/queue/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanQueue
             * @name GetLoanQueue
             * @summary Get Loan Queue Record
             * @request GET:/api/loans/queue/{loanQueueId}
             * @secure
             */
            getLoanQueue: (loanQueueId, params = {}) => this.request(Object.assign({ path: `/api/loans/queue/${loanQueueId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanQueue
             * @name ReplaceLoanQueue
             * @summary Replace Loan Queue Record
             * @request PUT:/api/loans/queue/{loanQueueId}
             * @secure
             */
            replaceLoanQueue: (loanQueueId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/queue/${loanQueueId}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanQueue
             * @name DeleteLoanQueue
             * @summary Delete Loan Queue Item
             * @request DELETE:/api/loans/queue/{loanQueueId}
             * @secure
             */
            deleteLoanQueue: (loanQueueId, params = {}) => this.request(Object.assign({ path: `/api/loans/queue/${loanQueueId}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags LoanQueue
             * @name RetryLoanQueue
             * @summary Retry
             * @request POST:/api/loans/queue/{loanQueueId}/retry
             * @secure
             */
            retryLoanQueue: (loanQueueId, params = {}) => this.request(Object.assign({ path: `/api/loans/queue/${loanQueueId}/retry`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags Loans
             * @name GetLoans
             * @summary Get Loans
             * @request GET:/api/loans
             * @secure
             */
            getLoans: (params = {}) => this.request(Object.assign({ path: `/api/loans`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Loans
             * @name GetLoansByAccountSetting
             * @summary Get Loans by Account Setting
             * @request POST:/api/loans/temp-pipeline
             * @secure
             */
            getLoansByAccountSetting: (data, query, params = {}) => this.request(Object.assign({ path: `/api/loans/temp-pipeline`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Loans
             * @name GetLoan
             * @summary Get By ID
             * @request GET:/api/loans/{loanID}
             * @secure
             */
            getLoan: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Loans
             * @name SearchLoans
             * @summary Search
             * @request POST:/api/loans/search
             * @secure
             */
            searchLoans: (data, query, params = {}) => this.request(Object.assign({ path: `/api/loans/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Loans
             * @name ImportLoanFromLos
             * @summary Import from LOS
             * @request POST:/api/loans/import-from-los/{loanId}
             * @secure
             */
            importLoanFromLos: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/import-from-los/${loanId}`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTaskComments
             * @name SearchLoanTaskComments
             * @summary Search
             * @request POST:/api/loans/{loanId}/tasks/{userLoanTaskId}/comments/search
             * @secure
             */
            searchLoanTaskComments: (loanId, userLoanTaskId, data, query, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${userLoanTaskId}/comments/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTaskComments
             * @name GetLoanTaskComment
             * @summary Get by ID
             * @request GET:/api/loans/{loanId}/tasks/{userLoanTaskId}/comments/{id}
             * @secure
             */
            getLoanTaskComment: (id, loanId, userLoanTaskId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${userLoanTaskId}/comments/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTaskComments
             * @name CreateLoanTaskComment
             * @summary Create
             * @request POST:/api/loans/{loanId}/tasks/{userLoanTaskId}/comments
             * @secure
             */
            createLoanTaskComment: (loanId, userLoanTaskId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${userLoanTaskId}/comments`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTaskComments
             * @name ReplaceLoanTaskComment
             * @summary Replace
             * @request PUT:/api/loans/{loanId}/tasks/{userLoanTaskId}/comments/{commentId}
             * @secure
             */
            replaceLoanTaskComment: (loanId, userLoanTaskId, commentId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${userLoanTaskId}/comments/${commentId}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTaskComments
             * @name DeleteLoanTaskComment
             * @summary Delete
             * @request DELETE:/api/loans/{loanId}/tasks/{userLoanTaskId}/comments/{commentId}
             * @secure
             */
            deleteLoanTaskComment: (loanId, userLoanTaskId, commentId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${userLoanTaskId}/comments/${commentId}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags LoanTaskDocuments
             * @name CreateLoanTaskDocument
             * @summary Create
             * @request POST:/api/loans/{loanID}/tasks/{loanTaskId}/documents
             * @secure
             */
            createLoanTaskDocument: (loanId, loanTaskId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${loanTaskId}/documents`, method: "POST", body: data, secure: true, type: ContentType.FormData, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTaskDocuments
             * @name CreateLoanTaskDocumentBucket
             * @summary Create Bucket
             * @request POST:/api/loans/{loanID}/tasks/{loanTaskId}/documents/bucket
             * @secure
             */
            createLoanTaskDocumentBucket: (loanId, loanTaskId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${loanTaskId}/documents/bucket`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTasks
             * @name GetLoanTasks
             * @summary Get All
             * @request GET:/api/loans/{loanID}/tasks
             * @secure
             */
            getLoanTasks: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTasks
             * @name GetLoanTask
             * @summary Get by ID
             * @request GET:/api/loans/{loanID}/tasks/{id}
             * @secure
             */
            getLoanTask: (id, loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * @description Get the difference between the current loan tasks and the tasks generated by business rules
             *
             * @tags LoanTasks
             * @name GetLoanTaskDifference
             * @summary Get Difference
             * @request GET:/api/loans/{loanID}/tasks/diff
             * @secure
             */
            getLoanTaskDifference: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/diff`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTasks
             * @name CreateLoanTask
             * @summary Create
             * @request POST:/api/loans/{loanID}/tasks/{taskID}
             * @secure
             */
            createLoanTask: (loanId, taskId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${taskId}`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTasks
             * @name ImportLoanTask
             * @summary Import
             * @request POST:/api/loans/{loanID}/tasks/import
             * @secure
             */
            importLoanTask: (loanId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/import`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTasks
             * @name ReplaceLoanTask
             * @summary Replace
             * @request PUT:/api/loans/{loanID}/tasks/{userLoanTaskID}
             * @secure
             */
            replaceLoanTask: (loanId, userLoanTaskId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${userLoanTaskId}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTasks
             * @name DeleteLoanTask
             * @summary Delete
             * @request DELETE:/api/loans/{loanID}/tasks/{userLoanTaskID}
             * @secure
             */
            deleteLoanTask: (loanId, userLoanTaskId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${userLoanTaskId}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags LoanTasks
             * @name SendOutstandingLoanTaskNotification
             * @summary Send Outstanding Task Notification
             * @request POST:/api/loans/{loanID}/tasks/reminders/outstanding
             * @secure
             */
            sendOutstandingLoanTaskNotification: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/reminders/outstanding`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags LoanUsers
             * @name GetLoanUsers
             * @summary Get All
             * @request GET:/api/loans/{loanId}/users
             * @secure
             */
            getLoanUsers: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/users`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanUsers
             * @name GetLoanUser
             * @summary Get Loan User
             * @request GET:/api/loans/{loanId}/users/{userId}
             * @secure
             */
            getLoanUser: (loanId, userId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/users/${userId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanUsers
             * @name AddLoanUser
             * @summary Add User to Loan
             * @request POST:/api/loans/{loanId}/users/{userId}
             * @secure
             */
            addLoanUser: (loanId, userId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/users/${userId}`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Milestones
             * @name GetMilestones
             * @summary Get All
             * @request GET:/api/milestones
             * @secure
             */
            getMilestones: (params = {}) => this.request(Object.assign({ path: `/api/milestones`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Milestones
             * @name CreateMilestone
             * @summary Create
             * @request POST:/api/milestones
             * @secure
             */
            createMilestone: (data, params = {}) => this.request(Object.assign({ path: `/api/milestones`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Milestones
             * @name GetMilestone
             * @summary Get By ID
             * @request GET:/api/milestones/{id}
             * @secure
             */
            getMilestone: (id, params = {}) => this.request(Object.assign({ path: `/api/milestones/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Milestones
             * @name ReplaceMilestone
             * @summary Replace
             * @request PUT:/api/milestones/{id}
             * @secure
             */
            replaceMilestone: (id, data, params = {}) => this.request(Object.assign({ path: `/api/milestones/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Milestones
             * @name DeleteMilestone
             * @summary Delete
             * @request DELETE:/api/milestones/{id}
             * @secure
             */
            deleteMilestone: (id, params = {}) => this.request(Object.assign({ path: `/api/milestones/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags Notifications
             * @name SendNotificationForLoan
             * @summary Send Notification for Loan
             * @request POST:/api/notifications
             * @secure
             */
            sendNotificationForLoan: (data, params = {}) => this.request(Object.assign({ path: `/api/notifications`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags Notifications
             * @name SendTestNotificationForLoan
             * @summary Send Test Notification for Loan
             * @request POST:/api/notifications/test
             * @secure
             */
            sendTestNotificationForLoan: (data, params = {}) => this.request(Object.assign({ path: `/api/notifications/test`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags NotificationTemplates
             * @name GetNotificationTemplates
             * @summary Get All
             * @request GET:/api/notification-templates
             * @secure
             */
            getNotificationTemplates: (query, params = {}) => this.request(Object.assign({ path: `/api/notification-templates`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags NotificationTemplates
             * @name CreateNotificationTemplate
             * @summary Create
             * @request POST:/api/notification-templates
             * @secure
             */
            createNotificationTemplate: (data, params = {}) => this.request(Object.assign({ path: `/api/notification-templates`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags NotificationTemplates
             * @name GetNotificationTemplate
             * @summary Get by ID
             * @request GET:/api/notification-templates/{id}
             * @secure
             */
            getNotificationTemplate: (id, params = {}) => this.request(Object.assign({ path: `/api/notification-templates/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags NotificationTemplates
             * @name ReplaceNotificationTemplate
             * @summary Replace
             * @request PUT:/api/notification-templates/{id}
             * @secure
             */
            replaceNotificationTemplate: (id, data, params = {}) => this.request(Object.assign({ path: `/api/notification-templates/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags NotificationTemplates
             * @name DeleteNotificationTemplate
             * @summary Delete
             * @request DELETE:/api/notification-templates/{id}
             * @secure
             */
            deleteNotificationTemplate: (id, params = {}) => this.request(Object.assign({ path: `/api/notification-templates/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags NotificationTemplates
             * @name RestoreNotificationTemplate
             * @summary Restore
             * @request POST:/api/notification-templates/{id}/restore
             * @secure
             */
            restoreNotificationTemplate: (id, params = {}) => this.request(Object.assign({ path: `/api/notification-templates/${id}/restore`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags NotificationTemplateVersions
             * @name GetNotificationTemplateVersions
             * @summary Get All
             * @request GET:/api/notification-templates/{notificationId}/versions
             * @secure
             */
            getNotificationTemplateVersions: (notificationId, params = {}) => this.request(Object.assign({ path: `/api/notification-templates/${notificationId}/versions`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags NotificationTemplateVersions
             * @name CreateNotificationTemplateVersion
             * @summary Create
             * @request POST:/api/notification-templates/{notificationId}/versions
             * @secure
             */
            createNotificationTemplateVersion: (notificationId, data, params = {}) => this.request(Object.assign({ path: `/api/notification-templates/${notificationId}/versions`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags NotificationTemplateVersions
             * @name GetNotificationTemplateVersion
             * @summary Get by ID
             * @request GET:/api/notification-templates/{notificationId}/versions/{id}
             * @secure
             */
            getNotificationTemplateVersion: (notificationId, id, params = {}) => this.request(Object.assign({ path: `/api/notification-templates/${notificationId}/versions/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags NotificationTemplateVersions
             * @name ReplaceNotificationTemplateVersion
             * @summary Replace
             * @request PUT:/api/notification-templates/{notificationId}/versions/{id}
             * @secure
             */
            replaceNotificationTemplateVersion: (notificationId, id, data, params = {}) => this.request(Object.assign({ path: `/api/notification-templates/${notificationId}/versions/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags NotificationTemplateVersions
             * @name DeleteNotificationTemplateVersion
             * @summary Delete
             * @request DELETE:/api/notification-templates/{notificationId}/versions/{id}
             * @secure
             */
            deleteNotificationTemplateVersion: (notificationId, id, params = {}) => this.request(Object.assign({ path: `/api/notification-templates/${notificationId}/versions/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Partners
             * @name GetPartners
             * @summary Get All
             * @request GET:/api/partners
             * @secure
             */
            getPartners: (query, params = {}) => this.request(Object.assign({ path: `/api/partners`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Partners
             * @name SearchPartners
             * @summary Search
             * @request POST:/api/partners/search
             * @secure
             */
            searchPartners: (data, query, params = {}) => this.request(Object.assign({ path: `/api/partners/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Partners
             * @name GetPartner
             * @summary Get by ID
             * @request GET:/api/partners/{id}
             * @secure
             */
            getPartner: (id, params = {}) => this.request(Object.assign({ path: `/api/partners/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Partners
             * @name CreatePartnerSiteConfiguration
             * @summary Create Site Configuration
             * @request POST:/api/partners/{realtorId}/site-configurations
             * @secure
             */
            createPartnerSiteConfiguration: (realtorId, data, params = {}) => this.request(Object.assign({ path: `/api/partners/${realtorId}/site-configurations`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Partners
             * @name GetPartnerSiteConfiguration
             * @summary Get Site Configuration
             * @request GET:/api/partners/{realtorId}/site-configurations/{siteConfigurationId}
             * @secure
             */
            getPartnerSiteConfiguration: (realtorId, siteConfigurationId, params = {}) => this.request(Object.assign({ path: `/api/partners/${realtorId}/site-configurations/${siteConfigurationId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Partners
             * @name ReplacePartnerSiteConfiguration
             * @summary Replace Site Configuration
             * @request PUT:/api/partners/{realtorId}/site-configurations/{siteConfigurationId}
             * @secure
             */
            replacePartnerSiteConfiguration: (realtorId, siteConfigurationId, data, query, params = {}) => this.request(Object.assign({ path: `/api/partners/${realtorId}/site-configurations/${siteConfigurationId}`, method: "PUT", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Pricing
             * @name GetPricingCalculation
             * @summary Get Pricing Calculation
             * @request POST:/api/pricing/calculator
             * @secure
             */
            getPricingCalculation: (data, params = {}) => this.request(Object.assign({ path: `/api/pricing/calculator`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags RequestQueue
             * @name GetRequestQueues
             * @summary Get All
             * @request GET:/api/request-queues
             * @deprecated
             * @secure
             */
            getRequestQueues: (params = {}) => this.request(Object.assign({ path: `/api/request-queues`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags RequestQueue
             * @name RunRequestQueue
             * @summary Run
             * @request POST:/api/request-queues/{id}/run
             * @deprecated
             * @secure
             */
            runRequestQueue: (id, query, params = {}) => this.request(Object.assign({ path: `/api/request-queues/${id}/run`, method: "POST", query: query, secure: true }, params)),
            /**
             * No description
             *
             * @tags RequestQueue
             * @name DeleteQueueRequest
             * @summary Delete
             * @request DELETE:/api/request-queues/{id}
             * @deprecated
             * @secure
             */
            deleteQueueRequest: (id, params = {}) => this.request(Object.assign({ path: `/api/request-queues/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags SiteConfigurations
             * @name GetSiteConfiguration
             * @summary Get By ID
             * @request GET:/api/site-configurations/{id}
             * @secure
             */
            getSiteConfiguration: (id, params = {}) => this.request(Object.assign({ path: `/api/site-configurations/${id}`, method: "GET", secure: true, format: "json" }, params)),
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
            searchSiteConfigurationByUrl: (data, params = {}) => this.request(Object.assign({ path: `/api/site-configurations/url`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags SiteConfigurations
             * @name GetSiteConfigurationByUrl
             * @summary Get By URL
             * @request GET:/api/site-configurations
             * @secure
             */
            getSiteConfigurationByUrl: (query, params = {}) => this.request(Object.assign({ path: `/api/site-configurations`, method: "GET", query: query, secure: true, format: "json" }, params)),
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
            searchSiteConfigurationByLoanOfficerUser: (data, params = {}) => this.request(Object.assign({ path: `/api/site-configurations/louser`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags SiteConfigurations
             * @name GetSiteConfigurationByLoanOfficerUser
             * @summary Get By Loan Officer User
             * @request GET:/api/site-configurations/louser/{loUserId}
             * @secure
             */
            getSiteConfigurationByLoanOfficerUser: (loUserId, params = {}) => this.request(Object.assign({ path: `/api/site-configurations/louser/${loUserId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags SiteConfigurations
             * @name SearchSiteConfigurations
             * @summary Search
             * @request POST:/api/site-configurations/search
             * @secure
             */
            searchSiteConfigurations: (data, query, params = {}) => this.request(Object.assign({ path: `/api/site-configurations/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags SiteConfigurations
             * @name GetFormsBySiteConfiguration
             * @summary Get Forms by Site Configuration
             * @request GET:/api/site-configurations/{id}/forms
             * @secure
             */
            getFormsBySiteConfiguration: (id, params = {}) => this.request(Object.assign({ path: `/api/site-configurations/${id}/forms`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags SiteConfigurations
             * @name GetSamlMetadata
             * @summary Get Saml Metadata
             * @request GET:/api/site-configurations/sso/saml/{ssoIntegration}/metadata
             * @secure
             */
            getSamlMetadata: (ssoIntegration, params = {}) => this.request(Object.assign({ path: `/api/site-configurations/sso/saml/${ssoIntegration}/metadata`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags SiteForms
             * @name GetFormBySiteConfigurationSlug
             * @summary Get By Site Configuration Slug
             * @request POST:/api/site-forms
             * @secure
             */
            getFormBySiteConfigurationSlug: (data, params = {}) => this.request(Object.assign({ path: `/api/site-forms`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags SiteForms
             * @name GetSiteForms
             * @summary Get All Site Forms
             * @request GET:/api/site-forms
             * @secure
             */
            getSiteForms: (params = {}) => this.request(Object.assign({ path: `/api/site-forms`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Surveys
             * @name GetSurveysByUsers
             * @summary Get by Users
             * @request GET:/api/surveys
             * @secure
             */
            getSurveysByUsers: (query, params = {}) => this.request(Object.assign({ path: `/api/surveys`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Surveys
             * @name GetSurveysByUser
             * @summary Get by User
             * @request POST:/api/surveys
             * @secure
             */
            getSurveysByUser: (data, params = {}) => this.request(Object.assign({ path: `/api/surveys`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Tasks
             * @name GetTasks
             * @summary Get All
             * @request GET:/api/tasks
             * @secure
             */
            getTasks: (query, params = {}) => this.request(Object.assign({ path: `/api/tasks`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Tasks
             * @name CreateTask
             * @summary Create
             * @request POST:/api/tasks
             * @secure
             */
            createTask: (data, params = {}) => this.request(Object.assign({ path: `/api/tasks`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Tasks
             * @name GetTask
             * @summary Get By ID
             * @request GET:/api/tasks/{id}
             * @secure
             */
            getTask: (id, params = {}) => this.request(Object.assign({ path: `/api/tasks/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Tasks
             * @name ReplaceTask
             * @summary Replace
             * @request PUT:/api/tasks/{id}
             * @secure
             */
            replaceTask: (id, data, params = {}) => this.request(Object.assign({ path: `/api/tasks/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags Tasks
             * @name DeleteTask
             * @summary Delete
             * @request DELETE:/api/tasks/{id}
             * @secure
             */
            deleteTask: (id, params = {}) => this.request(Object.assign({ path: `/api/tasks/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags Tasks
             * @name SearchTasks
             * @summary Search
             * @request POST:/api/tasks/search
             * @secure
             */
            searchTasks: (data, query, params = {}) => this.request(Object.assign({ path: `/api/tasks/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserImpersonation
             * @name RequestImpersonation
             * @summary Request Impersonation as Impersonator
             * @request POST:/api/users/impersonation/request
             * @secure
             */
            requestImpersonation: (data, params = {}) => this.request(Object.assign({ path: `/api/users/impersonation/request`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags UserImpersonation
             * @name AllowImpersonation
             * @summary Allow Impersonation as Impersonatee
             * @request POST:/api/users/impersonation/allow
             * @secure
             */
            allowImpersonation: (data, params = {}) => this.request(Object.assign({ path: `/api/users/impersonation/allow`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags UserImpersonation
             * @name AllowImpersonationWithGuid
             * @summary Allow Impersonation as Impersonatee via AllowGuid
             * @request POST:/api/users/impersonation/allow/{allowToken}
             * @secure
             */
            allowImpersonationWithGuid: (allowToken, params = {}) => this.request(Object.assign({ path: `/api/users/impersonation/allow/${allowToken}`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags UserImpersonation
             * @name BeginImpersonation
             * @summary Begin Impersonation as Impersonator
             * @request POST:/api/users/impersonation
             * @secure
             */
            beginImpersonation: (params = {}) => this.request(Object.assign({ path: `/api/users/impersonation`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags UserImpersonation
             * @name StopImpersonation
             * @summary Stop Impersonation as either Impersonator or Impersonatee
             * @request DELETE:/api/users/impersonation
             * @secure
             */
            stopImpersonation: (params = {}) => this.request(Object.assign({ path: `/api/users/impersonation`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags UserImpersonation
             * @name ForceImpersonation
             * @summary Force Impersonation as Super Admin Impersonator
             * @request POST:/api/users/impersonation/force
             * @secure
             */
            forceImpersonation: (data, params = {}) => this.request(Object.assign({ path: `/api/users/impersonation/force`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags UserImpersonation
             * @name ExtendImpersonation
             * @summary Extend Impersonation Session as Impersonator
             * @request POST:/api/users/impersonation/extend
             * @secure
             */
            extendImpersonation: (params = {}) => this.request(Object.assign({ path: `/api/users/impersonation/extend`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags UserInvites
             * @name InviteUser
             * @summary Invite
             * @request POST:/api/users/invites
             * @secure
             */
            inviteUser: (data, params = {}) => this.request(Object.assign({ path: `/api/users/invites`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags UserInvites
             * @name VerifyUserInvite
             * @summary Verify
             * @request GET:/api/users/invites/{token}/verify
             * @secure
             */
            verifyUserInvite: (token, params = {}) => this.request(Object.assign({ path: `/api/users/invites/${token}/verify`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserRelations
             * @name GetUserRelations
             * @summary Get All
             * @request GET:/api/users/{userID}/relations
             * @secure
             */
            getUserRelations: (userId, params = {}) => this.request(Object.assign({ path: `/api/users/${userId}/relations`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserRelations
             * @name CreateUserRelation
             * @summary Create
             * @request POST:/api/users/{userID}/relations
             * @secure
             */
            createUserRelation: (userId, data, params = {}) => this.request(Object.assign({ path: `/api/users/${userId}/relations`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags UserRelations
             * @name GetUserRelation
             * @summary Get by ID
             * @request GET:/api/users/{userID}/relations/{id}
             * @secure
             */
            getUserRelation: (userId, id, params = {}) => this.request(Object.assign({ path: `/api/users/${userId}/relations/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserRelations
             * @name DeleteUserRelation
             * @summary Delete
             * @request DELETE:/api/users/{userID}/relations/{id}
             * @secure
             */
            deleteUserRelation: (userId, id, params = {}) => this.request(Object.assign({ path: `/api/users/${userId}/relations/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name GetUsers
             * @summary Get All
             * @request GET:/api/users
             * @secure
             */
            getUsers: (query, params = {}) => this.request(Object.assign({ path: `/api/users`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name CreateUser
             * @summary Create
             * @request POST:/api/users
             * @secure
             */
            createUser: (data, params = {}) => this.request(Object.assign({ path: `/api/users`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name SearchUsers
             * @summary Search
             * @request POST:/api/users/search
             * @secure
             */
            searchUsers: (data, query, params = {}) => this.request(Object.assign({ path: `/api/users/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name GetUserByEmail
             * @summary Get by Email
             * @request POST:/api/users/byemail
             * @secure
             */
            getUserByEmail: (data, params = {}) => this.request(Object.assign({ path: `/api/users/byemail`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name SignUp
             * @summary Sign Up
             * @request POST:/api/users/register
             * @secure
             */
            signUp: (data, params = {}) => this.request(Object.assign({ path: `/api/users/register`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name ReplaceUser
             * @summary Update
             * @request PUT:/api/users/{id}
             * @secure
             */
            replaceUser: (id, data, params = {}) => this.request(Object.assign({ path: `/api/users/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name DeleteUser
             * @summary Delete
             * @request DELETE:/api/users/{id}
             * @secure
             */
            deleteUser: (id, query, params = {}) => this.request(Object.assign({ path: `/api/users/${id}`, method: "DELETE", query: query, secure: true }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name RestoreUser
             * @summary Restore User
             * @request POST:/api/users/{id}/restore
             * @secure
             */
            restoreUser: (id, params = {}) => this.request(Object.assign({ path: `/api/users/${id}/restore`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name ChangePassword
             * @summary Change Password
             * @request POST:/api/users/change-password
             * @secure
             */
            changePassword: (data, params = {}) => this.request(Object.assign({ path: `/api/users/change-password`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name VerifyPassword
             * @summary Verify Password
             * @request POST:/api/users/verify-password
             * @secure
             */
            verifyPassword: (data, params = {}) => this.request(Object.assign({ path: `/api/users/verify-password`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name OverridePassword
             * @summary Override Password
             * @request POST:/api/users/{id}/override-password
             * @secure
             */
            overridePassword: (id, data, params = {}) => this.request(Object.assign({ path: `/api/users/${id}/override-password`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name ForgotPassword
             * @summary Forgot Password
             * @request POST:/api/users/forgot-password
             * @secure
             */
            forgotPassword: (data, params = {}) => this.request(Object.assign({ path: `/api/users/forgot-password`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name SendMobilePhoneVerificationCode
             * @summary Send Verification Code
             * @request POST:/api/users/mobile-phone/send-code
             * @secure
             */
            sendMobilePhoneVerificationCode: (params = {}) => this.request(Object.assign({ path: `/api/users/mobile-phone/send-code`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name VerifyUserMobilePhone
             * @summary Verify Mobile Phone
             * @request PUT:/api/users/mobile-phone/verify-code
             * @secure
             */
            verifyUserMobilePhone: (data, params = {}) => this.request(Object.assign({ path: `/api/users/mobile-phone/verify-code`, method: "PUT", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags UsersMe
             * @name GetMe
             * @summary Get
             * @request GET:/api/users/me
             * @secure
             */
            getMe: (params = {}) => this.request(Object.assign({ path: `/api/users/me`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UsersMe
             * @name ReplaceMe
             * @summary Replace
             * @request PUT:/api/users/me
             * @secure
             */
            replaceMe: (data, params = {}) => this.request(Object.assign({ path: `/api/users/me`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * @description Update the phone number If changed will send a verification code to the new number
             *
             * @tags UsersMe
             * @name UpdateMyPhone
             * @summary Update Phone
             * @request PUT:/api/users/me/phone-number
             * @secure
             */
            updateMyPhone: (data, params = {}) => this.request(Object.assign({ path: `/api/users/me/phone-number`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UsersMe
             * @name GetMyRelationships
             * @summary Get Relationships
             * @request GET:/api/users/me/relationships
             * @secure
             */
            getMyRelationships: (params = {}) => this.request(Object.assign({ path: `/api/users/me/relationships`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UsersMe
             * @name GetMyRelationshipProspects
             * @summary Get Relationship Prospects
             * @request GET:/api/users/me/relationships/prospects
             * @secure
             */
            getMyRelationshipProspects: (params = {}) => this.request(Object.assign({ path: `/api/users/me/relationships/prospects`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UsersMe
             * @name DeleteRelationshipProspect
             * @summary Delete Relationship Prospect
             * @request DELETE:/api/users/me/relationships/prospects/{id}
             * @secure
             */
            deleteRelationshipProspect: (id, params = {}) => this.request(Object.assign({ path: `/api/users/me/relationships/prospects/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags UsersMe
             * @name DeleteMe
             * @summary Delete
             * @request POST:/api/users/me/delete
             * @secure
             */
            deleteMe: (data, params = {}) => this.request(Object.assign({ path: `/api/users/me/delete`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags Verifications
             * @name Verify
             * @summary Verify
             * @request POST:/api/verifications/verify
             * @secure
             */
            verify: (data, params = {}) => this.request(Object.assign({ path: `/api/verifications/verify`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Verifications
             * @name GetVerificationStatus
             * @summary Get Status
             * @request POST:/api/verifications/status
             * @secure
             */
            getVerificationStatus: (data, params = {}) => this.request(Object.assign({ path: `/api/verifications/status`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Verifications
             * @name GetVerificationFrontEndMaterials
             * @summary Get Front End Materials
             * @request GET:/api/verifications/frontend-materials/{requestId}
             * @secure
             */
            getVerificationFrontEndMaterials: (requestId, params = {}) => this.request(Object.assign({ path: `/api/verifications/frontend-materials/${requestId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Workflow
             * @name GetWorkflow
             * @summary Get Workflow
             * @request POST:/api/workflow
             * @secure
             */
            getWorkflow: (data, params = {}) => this.request(Object.assign({ path: `/api/workflow`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
    }
}
//# sourceMappingURL=index.js.map