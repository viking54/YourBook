
import { S3 } from "aws-sdk";

export const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Replace with your AWS access key
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Replace with your AWS secret access key
  region: process.env.AWS_REGION, // Replace with your AWS region
});


