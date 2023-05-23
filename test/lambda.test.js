// import {main} from '../resources/lambda.cjs';
const exp = require('constants');
const main=require('../resources/lambda.cjs')
const AWS = require('aws-sdk');
const { timeout } = require('async');
const S3 = new AWS.S3();

const findConntract= require('../resources/lambda.cjs')
const bucketNameis=process.env.BUCKETNAME
console.log(bucketNameis)


describe('testing main',()=>{
    test('main function',async()=>{
        const consoleSpy=jest.spyOn(global.console,'log');
        //const result=await main('cdklambdastack-mylambdastore367fee0e-o3e9kvmjvpgy')

        const result = await main(bucketNameis)
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('resolved error'));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Entering Lambda!'));
        expect(consoleSpy.mock.calls.some(args => args.join(' ').includes('something'))).toBe(true);
        expect(consoleSpy.mock.calls.some(args => args.join(' ').includes('after deleting'))).toBe(true);
        expect(consoleSpy.mock.calls.some(args => args.join(' ').includes('error occured'))).toBe(false);
        consoleSpy.mockRestore();



    })
})