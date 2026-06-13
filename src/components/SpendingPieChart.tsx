import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { useAccountDataStore } from '@/store/accountDataStore';

type CategoryObj = {
  name: string;
  value: number;
};

// "an object whose keys are strings and whose values are CategoryObj"
type CategoryMap = Record<string, CategoryObj>;

const COLORS = [
  '#8b5cf6',
  '#3b82f6',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#06b6d4',
  '#ec4899',
  '#a78bfa',
  '#84cc16',
  '#f97316',
];

export const SpendingPieChart = () => {
  const allTransactions = useAccountDataStore((state) => state.allTransactions);
  const data = Object.values(
    allTransactions.reduce<CategoryMap>((acc, transaction) => {
      // check if transaction type is expenses, savings don't have categories
      if (transaction.type === 'saving') return acc;

      const category = transaction.category || 'Other';

      // check if category exists already
      if (!acc[category]) {
        acc[category] = {
          name: category,
          value: 0,
        };
      }

      // add amount
      acc[category].value += Number(transaction.amount);

      return acc;
    }, {}),
  );

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={100}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
