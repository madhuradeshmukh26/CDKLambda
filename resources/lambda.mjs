const AWS = require('aws-sdk');
const { findConfigFile } = require('typescript');
const s3 = new AWS.S3();
import * as cdk from 'aws-cdk-lib';

//const bucketName = process.env.BUCKET;
async function main (bucketName,event, context) {
      console.log("Entering Lambda!")
      const buckname= cdk.Fn.importValue('bucket')
      console.log('Bucket name:', buckname.bucketName);
      const data = await new Promise((resolve, reject) => {s3.listObjectsV2({ Bucket: bucketName },
        function(err,data){
          if(err) {console.log('error occured',err,err.stack);
          reject(err)}
          else{
            console.log("something",data.Contents);
            clifiles=JSON.parse(JSON.stringify(data.Contents))
            console.log(clifiles)

            resolve(data);
          };
        })});
      console.log('after s3')
      console.log(data)
      let param = { Bucket: 'cdklambdastack-mylambdastore367fee0e-o3e9kvmjvpgy', Key: 'Pay Slip_100077690_Apr-23.pdf' }
      const data3= await deleteparam(param)
      console.log(data3)
      console.log('after deleting')
      return 'hello'
  }

async function deleteparam(params){
  console.log('inside function')
  await new Promise((resolve, reject) => {
    s3.deleteObject({ Bucket: 'cdklambdastack-mylambdastore367fee0e-o3e9kvmjvpgy', Key: 'Pay Slip_100077690_Apr-23.pdf' }, function(err, data) {
      if (err) {
        console.log('error occured')
       reject(err);
      } else {
        console.log('resolved error')
        console.log(JSON.stringify(data));
       resolve(data);
      }
     });

  })
}

module.exports=main