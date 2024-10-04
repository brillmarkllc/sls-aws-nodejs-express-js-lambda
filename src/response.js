export const successResponse = (
  response,
  data = "success",
  statusCode = 200
) => {
  return response.status(statusCode).json(data);
};
