const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-errors");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.modelNo) {
    ErrorResponse.message = "Something went wrong while creating airplane";
    ErrorResponse.error = new AppError(
      ["Model Number not found in the correct format"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
};

const validateUpdateRequest = (req, res, next) => {
  if (!req.body.capacity) {
    ErrorResponse.message = "Please check the input capacity";
    ErrorResponse.error = new AppError(
      ["Capacity is mandatory to change"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (parseInt(req.body.capacity) < 0) {
    ErrorResponse.message = "Capacity should be a valid number";
    ErrorResponse.error = new AppError(
      ["Capacity is not valid"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
};

module.exports = {
  validateCreateRequest,
  validateUpdateRequest,
};
