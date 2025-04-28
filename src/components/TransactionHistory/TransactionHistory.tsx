import css from './TransactionHistory.module.css';

interface TransactionHistoryProps {
  type: string;
  amount: string;
  currency: string;
  id: string;
}

interface TransactionsHistoriesProps {
  items: TransactionHistoryProps[];
}

export const TransactionHistory = ({ items }: TransactionsHistoriesProps) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.header}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(transaction => (
            <tr key={transaction.id}>
              <td>{capitalizeFirstLetter(transaction.type)}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
