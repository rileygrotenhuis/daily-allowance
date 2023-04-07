import prisma from '@/config/prisma';

class AllowanceController {
  updateDailyAllowance = async (res, res) => {
    const user = await prisma.user.update({
      where: {
        id: req.user,
      },
      data: {
        dailyAllowance: req.body.amount,
        currentBalance: req.body.amount,
      },
    });

    return res.status(200).json(user);
  };
}

export default AllowanceController;
