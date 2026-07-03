const dashboardService = require("../services/dashboardService");

const asyncHandler = require("../middleware/asyncHandler");

const ApiResponse = require("../utils/apiResponse");

const getDashboardStats = asyncHandler(async (req, res) => {

    const stats = await dashboardService.getDashboardStats();

    res.status(200).json(

        new ApiResponse(

            true,

            "Dashboard statistics fetched successfully",

            stats

        )

    );

});

module.exports = {
    getDashboardStats,
};