import prisma from '@/config/prisma';

class BalanceController {
  resetBalance = async (req, res) => {
    const user = await prisma.user.update({
      where: {
        id: req.user,
      },
      data: {
        currentBalance: parseFloat(req.body.amount),
      },
    });

    return res.status(200).json(user);
  };
}

export default BalanceController;
