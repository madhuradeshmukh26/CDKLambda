// import {main} from '../resources/lambda.cjs';
const main=require('../resources/lambda.cjs')
const AWS = require('aws-sdk');
const S3 = new AWS.S3();

describe('testing main',()=>{
    const consoleSpy=jest.spyOn(global.console,'log');
    test('main function',async()=>{
        const result =await main()
        const data = await S3.listObjectsV2({ Bucket: 'cdklambdastack-mylambdastore367fee0e-o3e9kvmjvpgy' }).promise();
        expect(data).toHaveBeenCalledWith(expect.stringContaining('Slip'))
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Entering Lambda!'))
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('after s3'))
        // expect(result).toBe('something')
    })
})