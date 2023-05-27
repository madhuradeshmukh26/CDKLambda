// import {main} from '../resources/lambda.cjs';
const main=require('../resources/lambda.mjs')
const AWS = require('aws-sdk');
//const AWS = require('aws-sdk/clients/s3');
const S3 = require('aws-cdk-lib/aws_s3')
const miss= require('../resources/lambda.mjs')
const cdk =require('aws-cdk-lib')

const findConntract= require('../resources/lambda.mjs')


class somm {
    bul;
    bulname;
    buckname

    constructor(scope,id){
        this.bul="hello"

        this.buckname= cdk.Fn.importValue('sourcebucketappflow')
        console.log(this.buckname)
        const bu=S3.fromBucketArn(scope, "bucketexport", this.buckname)
    }
}

let res= new somm();
console.log(`${res.bul}`)
console.log(`${res.buckname}`)


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