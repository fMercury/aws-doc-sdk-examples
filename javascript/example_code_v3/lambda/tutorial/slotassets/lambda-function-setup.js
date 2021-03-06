/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS SDK for JavaScript,
which is scheduled for release later in 2020. The prerelease version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release later in 2020, and the topic containing this example will be hosted at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/using-lambda-function-prep.html.
Purpose:
lambda-function-setup.js demonstrates how to create an AWS Lambda function.

Inputs (replace in code):
- REGION
- BUCKET_NAME
- ZIP_FILE_NAME
- IAM_ROLE_ARN

Running the code:
node lambda-function-setup.js
*/

// snippet-start:[lambda.JavaScript.LambdaFunctionSetUpV3]
// Load the Lambda client
const {
  LambdaClient,
  CreateFunctionCommand,
} = require("@aws-sdk/client-lambda");

//Set the AWS Region
const REGION = "region"; //e.g. "us-east-1"

//Set the parameters
var params = {
  Code: {
    S3Bucket: "BUCKET_NAME", // BUCKET_NAME
    S3Key: "ZIP_FILE_NAME", // ZIP_FILE_NAME
  },
  FunctionName: "slotpull",
  Handler: "index.handler",
  Role: "IAM_ROLE_ARN", // ZIP_FILE_NAME; e.g., arn:aws:iam::650138640062:role/v3-lambda-tutorial-lambda-role
  Runtime: "nodejs12.x",
  Description: "Slot machine game results generator",
};

// Instantiate a Lambda client
const lambda = new LambdaClient(REGION);

const run = async () => {
  try {
    const data = await lambda.send(ddb.send(new PutItemCommand(params)));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
// snippet-end:[lambda.JavaScript.LambdaFunctionSetUpV3]
run();
