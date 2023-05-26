import * as cdk from 'aws-cdk-lib';
const main=require('./lambda.mjs')
const AWS = require('aws-sdk');
const S3 = new AWS.S3();

const findConntract= require('../resources/lambda.mjs')
const bucketNameis=process.env.BUCKETNAME
console.log(bucketNameis)

const buckname= cdk.Fn.importValue('bucket')
console.log('Bucket name:', buckname.bucketName);