const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /airplanes
 * req-body {modelNumber : 'Arbus320', capacity : 200}
 */
const createAirplane = async (req, res) => {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNo: req.body.modelNo,
      capacity: req.body.capacity,
    });
    SuccessResponse.message = "Successfully created an airplane";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

module.exports = {
  createAirplane,
};
