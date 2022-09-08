/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Accounts
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from 'util';
import Page from '../../../../../base/Page';
import V2010 from '../../../V2010';
const deserialize = require('../../../../../base/deserialize');
const serialize = require('../../../../../base/serialize');


/**
 * Options to pass to create a FeedbackSummaryInstance
 *
 * @property { string } endDate 
 * @property { string } startDate 
 */
export interface FeedbackSummaryListInstanceCreateOptions {
    endDate: string;
    startDate: string;
}

export interface FeedbackSummaryListInstance {


    /**
     * Create a FeedbackSummaryInstance
     *
     * @param { FeedbackSummaryListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FeedbackSummaryInstance
     */
    create(params: FeedbackSummaryListInstanceCreateOptions, callback?: (error: Error | null, item?: FeedbackSummaryInstance) => any): Promise<FeedbackSummaryInstance>;
    create(params: any, callback?: any): Promise<FeedbackSummaryInstance>
;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}


interface FeedbackSummaryListInstanceImpl extends FeedbackSummaryListInstance {}
class FeedbackSummaryListInstanceImpl implements FeedbackSummaryListInstance {
    _version?: V2010;
    _solution?: any;
    _uri?: string;

}

export function FeedbackSummaryListInstance(version: V2010, accountSid: string): FeedbackSummaryListInstance {
    const instance = {} as FeedbackSummaryListInstanceImpl;

    instance._version = version;
    instance._solution = { accountSid };
    instance._uri = `/2010-04-01/Accounts/${accountSid}/Calls/FeedbackSummary.json`;

    instance.create = function create(params: any, callback?: any): Promise<FeedbackSummaryInstance> {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }

        if (params.endDate === null || params.endDate === undefined) {
            throw new Error('Required parameter "params.endDate" missing.');
        }

        if (params.startDate === null || params.startDate === undefined) {
            throw new Error('Required parameter "params.startDate" missing.');
        }

        const data: any = {};

        data['EndDate'] = serialize.iso8601Date(params.endDate);
        data['StartDate'] = serialize.iso8601Date(params.startDate);

        const headers: any = {};
        headers['Content-Type'] = 'application/x-www-form-urlencoded'


        let operationVersion = version,
            operationPromise = operationVersion.create({ uri: this._uri, method: 'POST', params: data, headers });

        operationPromise = operationPromise.then(payload => new FeedbackSummaryInstance(operationVersion, payload, this._solution.accountSid));

        if (typeof callback === 'function') {
            operationPromise = operationPromise
                .then(value => callback(null, value))
                .catch(error => callback(error));
        }

        return operationPromise;

    }

    instance.toJSON = function toJSON() {
        return this._solution;
    }

    instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
        return inspect(this.toJSON(), options);
    }

    return instance;
}

interface FeedbackSummaryPayload extends FeedbackSummaryResource, Page.TwilioResponsePayload {
}

interface FeedbackSummaryResource {
    account_sid?: string | null;
    sid?: string | null;
    test_string?: string | null;
    test_integer?: number | null;
    test_object?: object | null;
    test_date_time?: string | null;
    test_number?: number | null;
    price_unit?: string | null;
    test_number_float?: number | null;
    test_enum?: object;
    test_array_of_integers?: Array<number>;
    test_array_of_array_of_integers?: Array<Array<number>>;
    test_array_of_objects?: Array<object> | null;
    test_array_of_enum?: Array<object> | null;
}

export class FeedbackSummaryInstance {
    protected _solution: any;
    protected _context?: FeedbackSummaryListInstance;

    constructor(protected _version: V2010, payload: FeedbackSummaryPayload, accountSid?: string) {
        this.accountSid = payload.account_sid;
        this.sid = payload.sid;
        this.testString = payload.test_string;
        this.testInteger = deserialize.integer(payload.test_integer);
        this.testObject = payload.test_object;
        this.testDateTime = deserialize.rfc2822DateTime(payload.test_date_time);
        this.testNumber = payload.test_number;
        this.priceUnit = payload.price_unit;
        this.testNumberFloat = payload.test_number_float;
        this.testEnum = payload.test_enum;
        this.testArrayOfIntegers = payload.test_array_of_integers;
        this.testArrayOfArrayOfIntegers = payload.test_array_of_array_of_integers;
        this.testArrayOfObjects = payload.test_array_of_objects;
        this.testArrayOfEnum = payload.test_array_of_enum;

        this._solution = { accountSid: accountSid || this.accountSid };
    }

    accountSid?: string | null;
    sid?: string | null;
    testString?: string | null;
    testInteger?: number | null;
    testObject?: object | null;
    testDateTime?: string | null;
    testNumber?: number | null;
    priceUnit?: string | null;
    testNumberFloat?: number | null;
    testEnum?: object;
    testArrayOfIntegers?: Array<number>;
    testArrayOfArrayOfIntegers?: Array<Array<number>>;
    testArrayOfObjects?: Array<object> | null;
    /**
     * Permissions authorized to the app
     */
    testArrayOfEnum?: Array<object> | null;

    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid, 
            sid: this.sid, 
            testString: this.testString, 
            testInteger: this.testInteger, 
            testObject: this.testObject, 
            testDateTime: this.testDateTime, 
            testNumber: this.testNumber, 
            priceUnit: this.priceUnit, 
            testNumberFloat: this.testNumberFloat, 
            testEnum: this.testEnum, 
            testArrayOfIntegers: this.testArrayOfIntegers, 
            testArrayOfArrayOfIntegers: this.testArrayOfArrayOfIntegers, 
            testArrayOfObjects: this.testArrayOfObjects, 
            testArrayOfEnum: this.testArrayOfEnum
        }
    }

    [inspect.custom](_depth: any, options: InspectOptions) {
        return inspect(this.toJSON(), options);
    }
}
