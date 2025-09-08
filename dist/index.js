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
    ContentType["JsonPatch"] = "application/json-patch+json";
    ContentType["Json"] = "application/json";
    ContentType["JsonApi"] = "application/vnd.api+json";
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
            if (type === ContentType.FormData &&
                body &&
                body !== null &&
                typeof body === "object") {
                body = this.createFormData(body);
            }
            if (type === ContentType.Text &&
                body &&
                body !== null &&
                typeof body !== "string") {
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
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.instance.defaults), params1), (params2 || {})), { headers: Object.assign(Object.assign(Object.assign({}, ((method &&
                this.instance.defaults.headers[method.toLowerCase()]) ||
                {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
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
 * @version v2.22.1
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
         * @response `200` `void` OK
         */
        this.postRoot = (params = {}) => this.request(Object.assign({ path: `/`, method: "POST", secure: true }, params));
        /**
         * No description
         *
         * @tags TheBigPOS
         * @name GetRoot
         * @request GET:/
         * @secure
         * @response `200` `string` OK
         */
        this.getRoot = (params = {}) => this.request(Object.assign({ path: `/`, method: "GET", secure: true }, params));
        this.api = {
            /**
             * No description
             *
             * @tags Account
             * @name GetMyAccount
             * @summary Get
             * @request GET:/api/account
             * @secure
             * @response `200` `Account` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `Account` OK
             * @response `404` `ProblemDetails` Not Found
             * @response `422` `ProblemDetails` Unprocessable Content
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
             * @response `200` `SiteConfiguration` OK
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
             * @response `200` `SiteConfiguration` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `(Account)[]` OK
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
             * @response `201` `Account` Created
             * @response `422` `ProblemDetails` Unprocessable Content
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
             * @response `201` `Account` Created
             * @response `422` `ProblemDetails` Unprocessable Content
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
             * @response `204` `Account` No Content
             * @response `404` `ProblemDetails` Not Found
             * @response `422` `ProblemDetails` Unprocessable Content
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
             * @response `200` `void` OK
             * @response `404` `ProblemDetails` Not Found
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `(Loan)[]` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `Token` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `Token` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `Token` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `Token` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `SSOToken` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `GetBranchPaginated` OK
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
             * @response `200` `GetBranch` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `GetBranchPaginated` OK
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
             * @response `200` `GetBranch` OK
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
             * @response `200` `GetBranch` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
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
             * @response `204` `void` No Content
             * @response `400` `ProblemDetails` Bad Request
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
             * @response `200` `SiteConfiguration` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `SiteConfigurationWithInherited` OK
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
             * @response `200` `SiteConfiguration` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `LoanOfficerPublic` OK
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
             * @response `200` `(BusinessRule)[]` OK
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
             * @response `200` `BusinessRule` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `BusinessRule` OK
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
             * @response `200` `BusinessRule` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
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
             * @response `200` `BusinessRule` OK
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
             * @response `200` `CorporatePaginated` OK
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
             * @response `200` `Corporate` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `CorporatePaginated` OK
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
             * @response `200` `Corporate` OK
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
             * @response `200` `Corporate` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
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
             * @response `204` `void` No Content
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
             * @response `200` `SiteConfiguration` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `SiteConfigurationWithInherited` OK
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
             * @response `200` `SiteConfiguration` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `(BranchReduced)[]` OK
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
             * @response `200` `LoanOfficerPublic` OK
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
             * @response `200` `DevicePaginated` OK
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
             * @response `200` `Device` OK
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
             * @response `200` `Device` OK
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
             * @response `200` `DeviceMDM` OK
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
             * @response `200` `Action` OK
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
             * @response `200` `(string)[]` OK
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
             * @response `200` `(DocumentTemplateBase)[]` OK
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
             * @response `201` `DocumentTemplateBase` Created
             * @response `404` `ProblemDetails` Not Found
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `(DocumentTemplateBase)[]` OK
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
             * @response `200` `DocumentTemplate` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `DocumentTemplateBase` OK
             * @response `401` `ProblemDetails` Unauthorized
             * @response `404` `ProblemDetails` Not Found
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `401` `ProblemDetails` Unauthorized
             * @response `404` `ProblemDetails` Not Found
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
             * @response `204` `void` No Content
             * @response `401` `ProblemDetails` Unauthorized
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `(DocumentTemplateVersion)[]` OK
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
             * @response `200` `DocumentTemplateVersion` OK
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
             * @response `200` `DocumentTemplateVersion` OK
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
             * @response `200` `DocumentTemplateVersion` OK
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
             * @response `200` `DocumentTemplateVersion` OK
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
             * @response `200` `FilePaginated` OK
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
             * @response `201` `File` Created
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `201` `File` Created
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
             * @response `200` `string` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
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
             * @response `200` `FilePaginated` OK
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
             * @response `200` `(AdminAccessGetForms)[]` OK
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
             * @response `201` `Form` Created
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `Form` OK
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
             * @response `200` `Form` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
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
             * @response `200` `Form` OK
             */
            restoreForm: (id, params = {}) => this.request(Object.assign({ path: `/api/forms/${id}/restore`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags FormSubmissionFiles
             * @name AddFormSubmissionFile
             * @summary Add
             * @request POST:/api/form-submissions/{formSubmissionId}/files
             * @secure
             * @response `200` `FormSubmissionFile` OK
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
             * @response `204` `void` No Content
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
             * @response `200` `FileWithBytes` OK
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
             * @response `200` `FormSubmissionPaginated` OK
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
             * @response `201` `FormSubmission` Created
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
             * @response `200` `FormSubmission` OK
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
             * @response `200` `FormSubmission` OK
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
             * @response `204` `void` No Content
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
             * @response `200` `FormSubmissionPaginated` OK
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
             * @response `200` `(FormVersion)[]` OK
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
             * @response `200` `FormVersion` OK
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
             * @response `200` `FormVersion` OK
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
             * @response `200` `FormVersion` OK
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
             * @response `200` `FormVersion` OK
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
             * @response `200` `Record<string,any>` OK
             */
            getLoanData: (loanId, params = {}) => this.request(Object.assign({ path: `/api/los/loan/application/${loanId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name UpdateLoanConsent
             * @summary Update Loan Consent
             * @request PATCH:/api/los/loan/application/{loanID}
             * @secure
             * @response `200` `string` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
             */
            updateLoanConsent: (loanId, data, params = {}) => this.request(Object.assign({ path: `/api/los/loan/application/${loanId}`, method: "PATCH", body: data, secure: true, type: ContentType.JsonPatch, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetLoansReport
             * @summary Get Report
             * @request POST:/api/los/loan/reports
             * @secure
             * @response `200` `GetReport` OK
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
             * @response `200` `string` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
             * @response `423` `UnprocessableEntity` Locked
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
             * @response `200` `(DocumentData)[]` OK
             */
            getTaskDocumentsByLoan: (loanId, params = {}) => this.request(Object.assign({ path: `/api/los/loan/tasks/documents/${loanId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetLoanDocumentContent
             * @summary Get Document Content
             * @request GET:/api/los/loan/{loanID}/document/{documentId}/content
             * @secure
             * @response `200` `void` OK
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
             * @response `204` `void` No Content
             */
            getLoanRecipients: (loanId, params = {}) => this.request(Object.assign({ path: `/api/los/loan/recipients/${loanId}`, method: "GET", secure: true }, params)),
            /**
             * No description
             *
             * @tags LegacyLoan
             * @name GetPreliminaryConditionsForLoan
             * @summary Get Preliminary Conditions
             * @request GET:/api/los/loan/{loanID}/conditions/preliminary
             * @secure
             * @response `200` `(PreliminaryCondition)[]` OK
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
             * @response `200` `(UnderwritingCondition)[]` OK
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
             * @response `200` `string` OK
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
             * @response `200` `DocumentDataRequest` OK
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
             * @response `200` `ListingFile` OK
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
             * @response `200` `ListingFile` OK
             */
            updateListingFiles: (listingId, data, params = {}) => this.request(Object.assign({ path: `/api/listings/${listingId}/files`, method: "PATCH", body: data, secure: true, type: ContentType.JsonPatch, format: "json" }, params)),
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
            removeListingFile: (listingId, id, params = {}) => this.request(Object.assign({ path: `/api/listings/${listingId}/files/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags ListingPhotos
             * @name AddListingPhoto
             * @summary Add
             * @request POST:/api/listings/{listingId}/photos
             * @secure
             * @response `200` `ListingPhoto` OK
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
             * @response `200` `(ListingPhoto)[]` OK
             */
            updateListingPhotos: (listingId, data, params = {}) => this.request(Object.assign({ path: `/api/listings/${listingId}/photos`, method: "PATCH", body: data, secure: true, type: ContentType.JsonPatch, format: "json" }, params)),
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
            removeListingPhoto: (listingId, id, params = {}) => this.request(Object.assign({ path: `/api/listings/${listingId}/photos/${id}`, method: "DELETE", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Listings
             * @name GetListings
             * @summary Get All
             * @request GET:/api/listings
             * @secure
             * @response `200` `ListingPaginated` OK
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
             * @response `201` `Listing` Created
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
             * @response `200` `Listing` OK
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
             * @response `200` `Listing` OK
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
             * @response `200` `Listing` OK
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
             * @response `204` `void` No Content
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
             * @response `200` `ListingPaginated` OK
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
             * @response `200` `File` OK
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
             * @response `204` `void` No Content
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
             * @response `200` `File` OK
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
             * @response `200` `RunLOCalculation` OK
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
             * @response `200` `RunLOCalculation` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
             * @response `423` `UnprocessableEntity` Locked
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
             * @response `200` `LoanComparison` OK
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
             * @response `201` `LoanComparisonScenario` Created
             * @response `422` `UnprocessableEntity` Unprocessable Content
             * @response `423` `UnprocessableEntity` Locked
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
             * @response `204` `void` No Content
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
             * @response `204` `void` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `(string)[]` OK
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
             * @response `201` `(string)[]` Created
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
             * @response `200` `LoanDocument` OK
             * @response `404` `ProblemDetails` Not Found
             */
            getLoanDocument: (loanId, documentId, query, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/documents/${documentId}`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDocuments
             * @name SearchLoanDocuments
             * @summary Search loan documents
             * @request POST:/api/loans/{loanId}/documents/search
             * @secure
             * @response `200` `LoanDocumentSearchPaginated` OK
             */
            searchLoanDocuments: (loanId, data, query, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/documents/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDocuments
             * @name DownloadLoanDocument
             * @summary Download By ID
             * @request GET:/api/loans/{loanId}/documents/{documentId}/download
             * @secure
             * @response `200` `string` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `201` `LoanDocument` Created
             * @response `404` `ProblemDetails` Not Found
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `LoanDocument` OK
             * @response `404` `ProblemDetails` Not Found
             * @response `422` `UnprocessableEntity` Unprocessable Content
             */
            retryFailedLoanDocument: (loanId, documentId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/documents/${documentId}/retry`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDocuments
             * @name GenerateLoanDocument
             * @summary Generate PDF Document
             * @request POST:/api/loans/{loanId}/documents/generate
             * @secure
             * @response `200` `DocumentDataRequest` OK
             */
            generateLoanDocument: (loanId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/documents/generate`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDocuments
             * @name SendLoanDocuments
             * @summary Send existing documents to loan users or external emails
             * @request POST:/api/loans/{loanId}/documents/distribute
             * @secure
             * @response `200` `void` OK
             * @response `400` `ProblemDetails` Bad Request
             * @response `404` `ProblemDetails` Not Found
             */
            sendLoanDocuments: (loanId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/documents/distribute`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
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
            createLoanDraft: (data, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanDrafts
             * @name GetLoanDrafts
             * @summary Get All
             * @request GET:/api/loans/drafts
             * @secure
             * @response `200` `(DraftContent)[]` OK
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
             * @response `200` `DraftContent` OK
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
             * @response `200` `Draft` OK
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
             * @response `204` `void` No Content
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
             * @response `201` `DraftContentPaginated` Created
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
             * @response `200` `Draft` OK
             */
            reassignLoanOfficer: (draftId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts/${draftId}/reassign`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanImport
             * @name GetLoanImports
             * @summary Get Loan Imports
             * @request GET:/api/loan-imports
             * @secure
             * @response `200` `LoanImportPaginated` OK
             */
            getLoanImports: (query, params = {}) => this.request(Object.assign({ path: `/api/loan-imports`, method: "GET", query: query, secure: true, format: "json" }, params)),
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
            createLoanImport: (data, params = {}) => this.request(Object.assign({ path: `/api/loan-imports`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanImport
             * @name GetLoanImport
             * @summary Get Loan Import
             * @request GET:/api/loan-imports/{id}
             * @secure
             * @response `200` `LoanImport` OK
             */
            getLoanImport: (id, params = {}) => this.request(Object.assign({ path: `/api/loan-imports/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanImport
             * @name GetLoanImportLogs
             * @summary Get Loan Import Logs
             * @request GET:/api/loan-imports/{id}/logs
             * @secure
             * @response `200` `LoanImportLogPaginated` OK
             */
            getLoanImportLogs: (id, query, params = {}) => this.request(Object.assign({ path: `/api/loan-imports/${id}/logs`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanInvites
             * @name GetLoanInvites
             * @summary Get Invites
             * @request GET:/api/loans/{loanId}/invites
             * @secure
             * @response `200` `(Invite)[]` OK
             * @response `404` `ProblemDetails` Not Found
             */
            getLoanInvites: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/invites`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanInvites
             * @name InviteLoanContacts
             * @summary Invite Contacts
             * @request POST:/api/loans/{loanId}/invites
             * @secure
             * @response `200` `(Invite)[]` OK
             * @response `404` `ProblemDetails` Not Found
             */
            inviteLoanContacts: (loanId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/invites`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanLogs
             * @name SearchLoanLogs
             * @summary Search loan logs
             * @request POST:/api/loans/{loanId}/logs/search
             * @secure
             * @response `200` `LoanLogPaginated` OK
             */
            searchLoanLogs: (loanId, data, query, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/logs/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanOfficers
             * @name GetLoanOfficers
             * @summary Get All
             * @request GET:/api/loan-officers
             * @secure
             * @response `200` `BranchUserPaginated` OK
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
             * @response `200` `BranchUserPaginated` OK
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
             * @response `200` `BranchUser` OK
             */
            getLoanOfficer: (id, params = {}) => this.request(Object.assign({ path: `/api/loan-officers/${id}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanOfficers
             * @name CreateLoanOfficerSiteConfiguration
             * @summary Create Site Configuration
             * @request POST:/api/loan-officers/{loanOfficerId}/site-configurations
             * @secure
             * @response `200` `SiteConfiguration` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `SiteConfigurationWithInherited` OK
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
             * @response `200` `SiteConfiguration` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `LoanQueuePaginated` OK
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
             * @response `200` `any` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `LoanQueueWithData` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `204` `void` No Content
             * @response `404` `ProblemDetails` Not Found
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
             * @response `204` `void` No Content
             * @response `404` `ProblemDetails` Not Found
             */
            retryLoanQueue: (loanQueueId, params = {}) => this.request(Object.assign({ path: `/api/loans/queue/${loanQueueId}/retry`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags Loans
             * @name CreateLoanByDraftId
             * @summary Create Loan by DraftId
             * @request POST:/api/loans
             * @secure
             * @response `200` `string` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
             */
            createLoanByDraftId: (data, params = {}) => this.request(Object.assign({ path: `/api/loans`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Loans
             * @name GetLoans
             * @summary Get Loans
             * @request GET:/api/loans
             * @secure
             * @response `200` `GetApplications` OK
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
             * @response `200` `any` OK
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
             * @response `200` `Loan` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `LoanListPaginated` OK
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
             * @response `200` `Loan` OK
             */
            importLoanFromLos: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/import-from-los/${loanId}`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Loans
             * @name UpdateLoan
             * @summary Update loan fields
             * @request PATCH:/api/loans/{loanId}
             * @secure
             * @response `200` `Loan` OK
             */
            updateLoan: (loanId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}`, method: "PATCH", body: data, secure: true, type: ContentType.JsonPatch, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanTaskComments
             * @name SearchLoanTaskComments
             * @summary Search
             * @request POST:/api/loans/{loanId}/tasks/{userLoanTaskId}/comments/search
             * @secure
             * @response `200` `TaskCommentPaginated` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `TaskComment` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `201` `TaskComment` Created
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `TaskComment` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `204` `void` No Content
             * @response `404` `ProblemDetails` Not Found
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
             * @response `201` `UserLoanTask` Created
             * @response `404` `ProblemDetails` Not Found
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `UserLoanTask` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `(UserLoanTask)[]` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `UserLoanTask` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `(UserLoanTask)[]` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `201` `UserLoanTask` Created
             * @response `404` `ProblemDetails` Not Found
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
             * @response `201` `(UserLoanTask)[]` Created
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `UserLoanTask` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `204` `void` No Content
             * @response `404` `ProblemDetails` Not Found
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
             * @response `204` `void` No Content
             * @response `404` `ProblemDetails` Not Found
             */
            sendOutstandingLoanTaskNotification: (loanId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/reminders/outstanding`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags LoanTaskVerifications
             * @name CreateLoanTaskVerification
             * @summary Create
             * @request POST:/api/loans/{loanID}/tasks/{loanTaskId}/verifications
             * @secure
             * @response `200` `UserLoanTask` OK
             * @response `404` `ProblemDetails` Not Found
             * @response `422` `UnprocessableEntity` Unprocessable Content
             */
            createLoanTaskVerification: (loanId, loanTaskId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/tasks/${loanTaskId}/verifications`, method: "POST", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags LoanUsers
             * @name GetLoanUser
             * @summary Get Loan User
             * @request GET:/api/loans/{loanId}/users/{userId}
             * @secure
             * @response `200` `LoanUser` OK
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
             * @response `201` `LoanUser` Created
             */
            addLoanUser: (loanId, userId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/users/${userId}`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
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
            removeLoanUser: (loanId, userId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/users/${userId}`, method: "DELETE", secure: true, format: "json" }, params)),
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
            sendLoanUserInviteReminderNotification: (loanId, userId, params = {}) => this.request(Object.assign({ path: `/api/loans/${loanId}/users/${userId}/invite-reminder`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags Milestones
             * @name GetMilestones
             * @summary Get All
             * @request GET:/api/milestones
             * @secure
             * @response `200` `(MilestoneConfiguration)[]` OK
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
             * @response `201` `MilestoneConfiguration` Created
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `MilestoneConfiguration` OK
             * @response `404` `Error` Not Found
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
             * @response `200` `MilestoneConfiguration` OK
             * @response `404` `Error` Not Found
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `404` `Error` Not Found
             */
            deleteMilestone: (id, params = {}) => this.request(Object.assign({ path: `/api/milestones/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags MortgageCalculators
             * @name CalculateMortgageMonthlyPayment
             * @summary Calculate Monthly Payment
             * @request POST:/api/mortgage-calculators/monthly-payment
             * @secure
             * @response `200` `MonthlyPaymentCalculator` OK
             * @response `422` `ProblemDetails` Unprocessable Content
             */
            calculateMortgageMonthlyPayment: (data, params = {}) => this.request(Object.assign({ path: `/api/mortgage-calculators/monthly-payment`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags MortgageCalculators
             * @name CalculateMortgageAffordability
             * @summary Calculate Affordability
             * @request POST:/api/mortgage-calculators/affordability
             * @secure
             * @response `200` `AffordabilityCalculator` OK
             * @response `422` `ProblemDetails` Unprocessable Content
             */
            calculateMortgageAffordability: (data, params = {}) => this.request(Object.assign({ path: `/api/mortgage-calculators/affordability`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags MortgageCalculators
             * @name CalculateMortgageLoanComparison
             * @summary Calculate Loan Comparison
             * @request POST:/api/mortgage-calculators/loan-comparison
             * @secure
             * @response `200` `LoanComparisonCalculator` OK
             * @response `422` `ProblemDetails` Unprocessable Content
             */
            calculateMortgageLoanComparison: (data, params = {}) => this.request(Object.assign({ path: `/api/mortgage-calculators/loan-comparison`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags MortgageCalculators
             * @name CalculateMortgageRefinance
             * @summary Calculate Refinance
             * @request POST:/api/mortgage-calculators/refinance
             * @secure
             * @response `200` `RefinanceCalculator` OK
             * @response `422` `ProblemDetails` Unprocessable Content
             */
            calculateMortgageRefinance: (data, params = {}) => this.request(Object.assign({ path: `/api/mortgage-calculators/refinance`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Notifications
             * @name SendNotificationForLoan
             * @summary Send Notification for Loan
             * @request POST:/api/notifications
             * @secure
             * @response `200` `void` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `void` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `(NotificationTemplateBase)[]` OK
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
             * @response `201` `NotificationTemplate` Created
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `NotificationTemplate` OK
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
             * @response `200` `NotificationTemplate` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
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
             * @response `200` `NotificationTemplate` OK
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
             * @response `200` `(NotificationTemplateVersion)[]` OK
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
             * @response `200` `NotificationTemplateVersion` OK
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
             * @response `200` `NotificationTemplateVersion` OK
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
             * @response `200` `NotificationTemplateVersion` OK
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
             * @response `200` `NotificationTemplateVersion` OK
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
             * @response `200` `BranchUserPaginated` OK
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
             * @response `200` `BranchUserPaginated` OK
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
             * @response `200` `BranchUser` OK
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
             * @response `200` `SiteConfiguration` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `SiteConfigurationWithInherited` OK
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
             * @response `200` `SiteConfiguration` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
             */
            replacePartnerSiteConfiguration: (realtorId, siteConfigurationId, data, query, params = {}) => this.request(Object.assign({ path: `/api/partners/${realtorId}/site-configurations/${siteConfigurationId}`, method: "PUT", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags RequestQueue
             * @name GetRequestQueues
             * @summary Get All
             * @request GET:/api/request-queues
             * @deprecated
             * @secure
             * @response `200` `(RequestQueue)[]` OK
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
             * @response `200` `void` OK
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
             * @response `204` `void` No Content
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
             * @response `200` `SiteConfiguration` OK
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
             * @response `200` `SiteConfigurationByUrl` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `SiteConfigurationByUrl` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `SiteConfiguration` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `SiteConfiguration` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `SiteConfigurationSummaryPaginated` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `(AdminAccessGetForms)[]` OK
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
             * @response `200` `File` OK
             * @response `404` `ProblemDetails` Not Found
             */
            getSamlMetadata: (sSoIntegration, ssoIntegration, params = {}) => this.request(Object.assign({ path: `/api/site-configurations/sso/saml/${ssoIntegration}/metadata`, method: "GET", secure: true }, params)),
            /**
             * No description
             *
             * @tags SiteConfigurations
             * @name CreateOrReplaceSamlMetadata
             * @summary Create or Replace Saml Metadata
             * @request POST:/api/site-configurations/sso/saml/{ssoIntegration}/metadata
             * @secure
             * @response `200` `File` OK
             */
            createOrReplaceSamlMetadata: (sSoIntegration, ssoIntegration, params = {}) => this.request(Object.assign({ path: `/api/site-configurations/sso/saml/${ssoIntegration}/metadata`, method: "POST", secure: true }, params)),
            /**
             * No description
             *
             * @tags SiteConfigurationWorkflows
             * @name GetWorkflowSiteConfigurations
             * @summary List all site configurations assigned to a workflow
             * @request GET:/api/workflows/{workflowId}/site-configurations
             * @secure
             * @response `200` `(SiteConfigurationForm)[]` OK
             */
            getWorkflowSiteConfigurations: (workflowId, params = {}) => this.request(Object.assign({ path: `/api/workflows/${workflowId}/site-configurations`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags SiteConfigurationWorkflows
             * @name GetWorkflowSiteConfiguration
             * @summary Get the workflow-site configuration assignment by composite key
             * @request GET:/api/workflows/{workflowId}/site-configurations/{siteConfigurationId}
             * @secure
             * @response `200` `SiteConfigurationForm` OK
             * @response `404` `ProblemDetails` Not Found
             */
            getWorkflowSiteConfiguration: (workflowId, siteConfigurationId, params = {}) => this.request(Object.assign({ path: `/api/workflows/${workflowId}/site-configurations/${siteConfigurationId}`, method: "GET", secure: true, format: "json" }, params)),
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
             * @response `422` `UnprocessableEntity` Unprocessable Content
             */
            createWorkflowSiteConfiguration: (workflowId, siteConfigurationId, params = {}) => this.request(Object.assign({ path: `/api/workflows/${workflowId}/site-configurations/${siteConfigurationId}`, method: "POST", secure: true, format: "json" }, params)),
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
            deleteWorkflowSiteConfiguration: (workflowId, siteConfigurationId, params = {}) => this.request(Object.assign({ path: `/api/workflows/${workflowId}/site-configurations/${siteConfigurationId}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags SiteForms
             * @name GetFormBySiteConfigurationSlug
             * @summary Get By Site Configuration Slug
             * @request POST:/api/site-forms
             * @secure
             * @response `200` `GetForm` OK
             */
            getFormBySiteConfigurationSlug: (data, params = {}) => this.request(Object.assign({ path: `/api/site-forms`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Surveys
             * @name GetSurveysByUsers
             * @summary Get by Users
             * @request GET:/api/surveys
             * @secure
             * @response `200` `(SocialSurveyRecord)[]` OK
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
             * @response `200` `(SocialSurveyRecord)[]` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `Task` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `201` `Task` Created
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
             * @response `200` `Task` OK
             * @response `404` `ProblemDetails` Not Found
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
             * @response `200` `Task` OK
             * @response `404` `ProblemDetails` Not Found
             */
            replaceTask: (id, data, params = {}) => this.request(Object.assign({ path: `/api/tasks/${id}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
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
            deleteTask: (id, params = {}) => this.request(Object.assign({ path: `/api/tasks/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags Tasks
             * @name SearchTasks
             * @summary Search
             * @request POST:/api/tasks/search
             * @secure
             * @response `200` `TaskPaginated` OK
             */
            searchTasks: (data, query, params = {}) => this.request(Object.assign({ path: `/api/tasks/search`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags TheBigPOS
             * @name IntegrationsLosLoansCreate
             * @request POST:/api/integrations/los/loans
             * @secure
             * @response `200` `void` OK
             */
            integrationsLosLoansCreate: (data, params = {}) => this.request(Object.assign({ path: `/api/integrations/los/loans`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
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
            createUserDevice: (data, params = {}) => this.request(Object.assign({ path: `/api/userdevices`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
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
            deleteUserDevice: (id, params = {}) => this.request(Object.assign({ path: `/api/userdevices/${id}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags UserDraft
             * @name GetDraftUsers
             * @summary Get draft users
             * @request GET:/api/loans/drafts/{draftId}/users
             * @secure
             * @response `200` `UserDraftPaginated` OK
             */
            getDraftUsers: (draftId, query, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts/${draftId}/users`, method: "GET", query: query, secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserDraft
             * @name GetDraftUser
             * @summary Get draft user
             * @request GET:/api/loans/drafts/{draftId}/users/{userId}
             * @secure
             * @response `200` `UserDraft` OK
             */
            getDraftUser: (draftId, userId, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts/${draftId}/users/${userId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserDraft
             * @name AddDraftUsers
             * @summary Add draft user
             * @request POST:/api/loans/drafts/{draftId}/users/{userId}
             * @secure
             * @response `200` `UserDraft` OK
             */
            addDraftUsers: (draftId, userId, data, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts/${draftId}/users/${userId}`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
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
            deleteDraftUser: (draftId, userId, params = {}) => this.request(Object.assign({ path: `/api/loans/drafts/${draftId}/users/${userId}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags UserGroupAccessScopes
             * @name ListGroupScopes
             * @summary List Group Access Scopes
             * @request GET:/api/user-groups/{groupId}/scopes
             * @secure
             * @response `200` `(UserGroupAccessScope)[]` OK
             */
            listGroupScopes: (groupId, params = {}) => this.request(Object.assign({ path: `/api/user-groups/${groupId}/scopes`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserGroupAccessScopes
             * @name CreateGroupScope
             * @summary Create Group Access Scope
             * @request POST:/api/user-groups/{groupId}/scopes
             * @secure
             * @response `200` `UserGroupAccessScope` OK
             */
            createGroupScope: (groupId, data, params = {}) => this.request(Object.assign({ path: `/api/user-groups/${groupId}/scopes`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserGroupAccessScopes
             * @name RemoveGroupScope
             * @summary Remove Group Access Scope
             * @request DELETE:/api/user-groups/{groupId}/scopes/{scopeId}
             * @secure
             * @response `204` `void` No Content
             */
            removeGroupScope: (groupId, scopeId, params = {}) => this.request(Object.assign({ path: `/api/user-groups/${groupId}/scopes/${scopeId}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags UserGroupMembers
             * @name ListGroupMembers
             * @summary List Group Members
             * @request GET:/api/user-groups/{groupId}/members
             * @secure
             * @response `200` `(UserGroupMember)[]` OK
             */
            listGroupMembers: (groupId, params = {}) => this.request(Object.assign({ path: `/api/user-groups/${groupId}/members`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserGroupMembers
             * @name CreateGroupMember
             * @summary Create Group Member
             * @request POST:/api/user-groups/{groupId}/members
             * @secure
             * @response `200` `UserGroupMember` OK
             */
            createGroupMember: (groupId, data, query, params = {}) => this.request(Object.assign({ path: `/api/user-groups/${groupId}/members`, method: "POST", query: query, body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserGroupMembers
             * @name RemoveGroupMember
             * @summary Remove Group Member
             * @request DELETE:/api/user-groups/{groupId}/members/{userId}
             * @secure
             * @response `204` `void` No Content
             */
            removeGroupMember: (groupId, userId, params = {}) => this.request(Object.assign({ path: `/api/user-groups/${groupId}/members/${userId}`, method: "DELETE", secure: true }, params)),
            /**
             * No description
             *
             * @tags UserGroups
             * @name ListUserGroups
             * @summary List User Groups
             * @request GET:/api/user-groups
             * @secure
             * @response `200` `UserGroupPaginated` OK
             */
            listUserGroups: (query, params = {}) => this.request(Object.assign({ path: `/api/user-groups`, method: "GET", query: query, secure: true, format: "json" }, params)),
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
            createUserGroup: (data, params = {}) => this.request(Object.assign({ path: `/api/user-groups`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserGroups
             * @name GetUserGroup
             * @summary Get User Group by ID
             * @request GET:/api/user-groups/{groupId}
             * @secure
             * @response `200` `UserGroup` OK
             */
            getUserGroup: (groupId, params = {}) => this.request(Object.assign({ path: `/api/user-groups/${groupId}`, method: "GET", secure: true, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserGroups
             * @name UpdateUserGroup
             * @summary Update User Group
             * @request PUT:/api/user-groups/{groupId}
             * @secure
             * @response `200` `UserGroup` OK
             */
            updateUserGroup: (groupId, data, params = {}) => this.request(Object.assign({ path: `/api/user-groups/${groupId}`, method: "PUT", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags UserGroups
             * @name DeleteUserGroup
             * @summary Delete (soft) User Group
             * @request DELETE:/api/user-groups/{groupId}
             * @secure
             * @response `204` `void` No Content
             */
            deleteUserGroup: (groupId, params = {}) => this.request(Object.assign({ path: `/api/user-groups/${groupId}`, method: "DELETE", secure: true }, params)),
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
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `404` `Error` Not Found
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `404` `Error` Not Found
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `404` `Error` Not Found
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
             */
            inviteUser: (data, params = {}) => this.request(Object.assign({ path: `/api/users/invites`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
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
            resendInviteNotification: (id, params = {}) => this.request(Object.assign({ path: `/api/users/invites/${id}/resend`, method: "PUT", secure: true }, params)),
            /**
             * No description
             *
             * @tags UserInvites
             * @name VerifyUserInvite
             * @summary Verify
             * @request GET:/api/users/invites/{token}/verify
             * @secure
             * @response `200` `Invite` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `(UserRelation)[]` OK
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
             * @response `204` `void` No Content
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
             * @response `200` `UserRelation` OK
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
             * @response `204` `void` No Content
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
             * @response `200` `(User)[]` OK
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
             * @response `200` `DetailedUser` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `UserPaginated` OK
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
             * @response `200` `AdminAccessUser` OK
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
             * @response `200` `User` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
             */
            signUp: (data, params = {}) => this.request(Object.assign({ path: `/api/users/register`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
            /**
             * No description
             *
             * @tags Users
             * @name ReplaceUser
             * @summary Update
             * @request PUT:/api/users/{id}
             * @secure
             * @response `200` `DetailedUser` OK
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
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
             * @response `204` `void` No Content
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
             * @response `204` `void` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `204` `void` No Content
             * @response `422` `UnprocessableEntity` Unprocessable Content
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
             * @response `200` `ImpersonatedDetailedUser` OK
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
             * @response `200` `DetailedUser` OK
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
             * @response `204` `DetailedUser` No Content
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
             * @response `200` `(UserRelationship)[]` OK
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
             * @response `200` `(UserRelationshipProspect)[]` OK
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
             * @response `204` `void` No Content
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
             * @response `204` `void` No Content
             */
            deleteMe: (data, params = {}) => this.request(Object.assign({ path: `/api/users/me/delete`, method: "POST", body: data, secure: true, type: ContentType.Json }, params)),
            /**
             * No description
             *
             * @tags Workflow
             * @name GetWorkflow
             * @summary Get Workflow
             * @request POST:/api/workflow
             * @secure
             * @response `200` `GetForm` OK
             */
            getWorkflow: (data, params = {}) => this.request(Object.assign({ path: `/api/workflow`, method: "POST", body: data, secure: true, type: ContentType.Json, format: "json" }, params)),
        };
    }
}
//# sourceMappingURL=index.js.map