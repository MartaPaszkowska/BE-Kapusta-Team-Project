import Transaction from '../../models/transactionSchema.js';
import { StatusCodes } from 'http-status-codes';

const getIncome = async (req, res) => {
  try {
    const userId = req.user._id;

    const incomes = await Transaction.find({ userId, type: 'income' });

    if (!incomes || incomes.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'No incomes found for this user' });
    }

    return res.status(StatusCodes.OK).json({ incomes });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Error fetching incomes', error: error.message });
  }
};

export default getIncome;
