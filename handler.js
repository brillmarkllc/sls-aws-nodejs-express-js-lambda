import serverless from "serverless-http"; // Import the serverless-http library to wrap the Express app for AWS Lambda
import app from "./src/app.js"; // Import the Express app from the src/app.js file

// Export the handler function wrapped by serverless to run the Express app as an AWS Lambda function
export const handler = serverless(app);
