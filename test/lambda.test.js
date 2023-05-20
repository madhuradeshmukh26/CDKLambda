// import {main} from '../resources/lambda.cjs';
const main=require('../resources/lambda.cjs')
const AWS = require('aws-sdk');
const S3 = new AWS.S3();

describe('testing main',()=>{
    const consoleSpy=jest.spyOn(global.console,'log');
    test('main function',async()=>{
        const result =await main()
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('after s3'))
        // expect(result).toBe('something')
    })
})