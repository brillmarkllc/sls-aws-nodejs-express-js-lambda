export const errorHandler = (error, request, response, next) => {
  console.error("Error:", error.stack); // Log the error stack

  const issue = {
    success: false,
    status: error.status || 500,
    message: error.message || "Internal Server Error",
    stack: process.env.NODE_ENV !== "production" ? error.stack : "",
  };

  response.status(error.status || 500).json(issue);
};

export const createError = (message, status = 500) => {
  const error = new Error(message);
  error.status = status;
  return error;
};
