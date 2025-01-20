const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

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
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created an airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating airplane",
      data: {},
      error: error,
    });
  }
};

module.exports = {
  createAirplane,
};
