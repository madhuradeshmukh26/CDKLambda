const core = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const s3 = require("@aws-cdk/aws-s3");
const cdk = require('aws-cdk-lib');

class MyLambda extends core.Construct {
  constructor(scope, id) {
    super(scope, id);

    const bucket = new s3.Bucket(this, "Store"); //note that it appends everything
    console.log(bucket)

    const handler = new lambda.Function(this, "Handler", {
      runtime: lambda.Runtime.NODEJS_16_X, // So we can use async in my_lambda.js
      code: lambda.Code.fromAsset("resources"), // Note 'resources' is the folder we created
      handler: "lambda.main", //Note lambda is our filename, and main is our function
      environment: {
        BUCKET: bucket.bucketName
      }
    });

    new cdk.CfnOutput(this,"SourceBucketAppFlow",{
      value: bucket.bucketName,
      description:"app flow bucket",
      exportname:"bucket"
    })

    bucket.grantReadWrite(handler); // give our lambda IAM permissions to access the lambda
  }
}

module.exports = { MyLambda }