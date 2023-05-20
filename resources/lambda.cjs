const { data } = require('aws-cdk/lib/logging');
const AWS = require('aws-sdk');
const S3 = new AWS.S3();

const bucketName = process.env.BUCKET;


async function main (event, context) {
  try {
      console.log("Entering Lambda!")
      const data = await S3.listObjectsV2({ Bucket: bucketName }).promise();
      console.log('after s3')
      console.log(data)
      console.log(data)
      return data
  } catch(error) {
    return data
  }
}
module.exports=main