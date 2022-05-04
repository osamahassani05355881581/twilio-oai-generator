/**
 * Twilio - Accounts
 * This is the public Twilio REST API.
 *
 * The version of the OpenAPI document: 1.11.0
 * Contact: support@twilio.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect } from 'util';


/**
 * Options to pass to create a CallInstance
 *
 * @property { string } requiredStringProperty 
 * @property { Array<string> } [testArrayOfStrings] 
 */
export interface CallInstanceCreateOptions {
    requiredStringProperty: string;
    testArrayOfStrings?: Array<string>;
}

export class CallListInstance {
    protected _solution: any;
    protected _uri: string;


    constructor(protected _version: Version, accountSid: string, sid: string) {
        this._solution = { accountSid, sid };
        this._uri = `/2010-04-01/Accounts/${accountSid}/Calls/${sid}.json`;
    }

    /**
     * Create a CallInstance
     *
     * @param { CallInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    public async create(params: CallInstanceCreateOptions, callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance>;
    public async create(params: any, callback?: any): Promise<CallInstance> {

        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }

        if (params.requiredStringProperty === null || params.requiredStringProperty === undefined) {
            throw new Error('Required parameter "params.requiredStringProperty" missing.');
        }

        const data: any = {};

        data['RequiredStringProperty'] = params.requiredStringProperty;
        if (params.testArrayOfStrings !== undefined) data['TestArrayOfStrings'] = params.testArrayOfStrings;

        const headers: any = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };


        let promise = this._version.create({ uri: this._uri, method: 'POST', data, headers });

        promise = promise.then(payload => new CallInstance(this._version, payload, this._solution.accountSid, this._solution.sid));

        if (typeof callback === 'function') {
            promise = promise
                .then(value => callback(null, value))
                .catch(error => callback(error));
        }

        return promise;
    }

    /**
     *  a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    public async (callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance> { 


        let promise = this._version.({ uri: this._uri, method: 'DELETE' });

        promise = promise.then(payload => new CallInstance(this._version, payload, this._solution.accountSid, this._solution.sid));

        if (typeof callback === 'function') {
            promise = promise
                .then(value => callback(null, value))
                .catch(error => callback(error));
        }

        return promise;
    }

    /**
     * Page a CallInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed CallInstance
     */
    public async page(callback?: (error: Error | null, item?: CallInstance) => any): Promise<CallInstance> { 


        let promise = this._version.page({ uri: this._uri, method: 'GET' });

        promise = promise.then(payload => new CallInstance(this._version, payload, this._solution.accountSid, this._solution.sid));

        if (typeof callback === 'function') {
            promise = promise
                .then(value => callback(null, value))
                .catch(error => callback(error));
        }

        return promise;
    }

    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return this._solution;
    }

    [inspect.custom](depth, options) {
        return inspect(this.toJSON(), options);
    }
}

