// import {main} from '../resources/lambda.cjs';
const main=require('../resources/lambda.mjs')
const AWS = require('aws-sdk');
//const AWS = require('aws-sdk/clients/s3');
// const s3 = require('aws-cdk-lib/aws_s3')
// const miss= require('../resources/lambda.mjs')


const findConntract= require('../resources/lambda.mjs')

describe('testing main',()=>{
    test('main function',async()=>{
        const consoleSpy=jest.spyOn(global.console,'log');
        const result=await main('cdklambdastack-mylambdastore367fee0e-o3e9kvmjvpgy')

        //const result = await main(bucketNameis)
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('resolved error'));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Entering Lambda!'));
        expect(consoleSpy.mock.calls.some(args => args.join(' ').includes('something'))).toBe(true);
        expect(consoleSpy.mock.calls.some(args => args.join(' ').includes('after deleting'))).toBe(true);
        expect(consoleSpy.mock.calls.some(args => args.join(' ').includes('error occured'))).toBe(false);
        consoleSpy.mockRestore();



    })
})