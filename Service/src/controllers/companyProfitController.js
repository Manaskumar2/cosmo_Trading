
// const companyProfitModel = require("../models/companyModel");
// const getCompanyProfit = async (req, res) => {
//     try {
//         const { specificDate, specificDay, page = 1, pageSize = 10 } = req.query;

//         let startDate, endDate;

//         if (specificDate) {
//             const date = new Date(specificDate);
//             startDate = new Date(date.getFullYear(), date.getMonth(), 1);
//             endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
//         } else {
//             const currentDate = new Date();
//             startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 5, 1);
//             endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
//         }

//         const matchStage = {
//             createdAt: {
//                 $gte: startDate,
//                 $lte: endDate,
//             },
//         };

//         if (specificDay) {
//             const day = new Date(specificDay).getDate();
//             matchStage.$expr = { $eq: [{ $dayOfMonth: "$createdAt" }, day] };
//         }

//         const totalCount = await companyProfitModel.countDocuments(matchStage);

//         const results = await companyProfitModel.aggregate([
//             {
//                 $match: matchStage,
//             },
//             {
//                 $group: {
//                     _id: {
//                         $dateToString: { format: "%Y-%m-%d", date: "$createdAt", timezone: "Asia/Kolkata" },
//                     },
//                     totalProfit: { $sum: "$profitAmount" },
//                 },
//             },
//             {
//                 $sort: { _id: 1 },
//             },
//             {
//                 $skip: (page - 1) * pageSize,
//             },
//             {
//                 $limit: parseInt(pageSize),
//             },
//         ]);

//         const totalPages = Math.ceil(totalCount / pageSize);

//         return res.status(200).json({ status: true, data: results, totalPages: totalPages });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ status: false, message: error.message });
//     }
// };

// module.exports = { getCompanyProfit };
const Company= require("../models/companyModel");





const getCompanyProfit = async (req, res) => {
  try {
    const { specificMonth, specificDay, page = 1, pageSize = 10 } = req.query;

    let startDate, endDate;

    if (specificMonth) {
      const date = new Date(specificMonth);
      startDate = new Date(date.getFullYear(), date.getMonth(), 1);
      endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    } else {
      const currentDate = new Date();
      startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 5, 1);
      endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    }

 
    const currentDate = new Date();
    // if (startDate > currentDate || endDate < currentDate) {
    //   return res.status(200).json({ status: true, data: [], totalPages: 0, overallTotalProfit: 0 });
    // }

    let matchStage = {
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    };

    if (specificDay) {
      matchStage = {
        createdAt: {
          $gte: new Date(specificDay),
          $lt: new Date(specificDay + 'T23:59:59.999Z'),
        },
      };
    }


    const totalCount = await Company.countDocuments(matchStage);

    const results = await Company.aggregate([
      {
        $match: matchStage,
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt", timezone: "Asia/Kolkata" },
          },
          totalProfit: { $sum: "$profitAmount" },
        },
      },
      {
        $sort: { _id: 1 },
      },
      {
        $skip: (page - 1) * pageSize,
      },
      {
        $limit: parseInt(pageSize),
      },
    ]);

    const overallTotalProfit = await Company.aggregate([
      {
        $match: matchStage,
      },
      {
        $group: {
          _id: null,
          totalProfit: { $sum: "$profitAmount" },
        },
      },
    ]);

    const totalPages = Math.ceil(totalCount / pageSize);

    return res.status(200).json({
      status: true,
      data: results,
      totalPages: totalPages,
      overallTotalProfit: overallTotalProfit.length > 0 ? overallTotalProfit[0].totalProfit : 0,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = { getCompanyProfit };


