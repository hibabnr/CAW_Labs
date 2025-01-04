import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  ArcElement, 
} from 'chart.js';

import { Line, Pie } from 'react-chartjs-2';
import { useTransactions } from '../../TransactionsContext';
import './Reports.css';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, ArcElement);

export const Reports = () => {
  const { transactions } = useTransactions();
  const [lineChartData, setLineChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});

  useEffect(() => {
    const monthlyData = {};

    transactions.forEach(({ date, type, amount }) => {
      const month = new Date(date).toLocaleString('default', { month: 'short' }); 
      if (!monthlyData[month]) monthlyData[month] = { income: 0, expense: 0 };
      if (type === 'Income') monthlyData[month].income += parseFloat(amount);
      if (type === 'Expense') monthlyData[month].expense += parseFloat(amount);
    });

    const months = Object.keys(monthlyData);
    const incomeData = months.map(month => monthlyData[month].income || 0);
    const expenseData = months.map(month => monthlyData[month].expense || 0);

    setLineChartData({
      labels: months,
      datasets: [
        {
          label: 'Income',
          data: incomeData,
          borderColor: 'green',
          backgroundColor: 'rgba(0, 128, 0, 0.2)',
          fill: false,
        },
        {
          label: 'Expense',
          data: expenseData,
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          fill: false,
        },
      ],
    });
  }, [transactions]);

  useEffect(() => {
    const categoryWiseExpense = {};

    transactions
      .filter(transaction => transaction.type === 'Expense')
      .forEach(({ category, amount }) => {
        if (!categoryWiseExpense[category]) categoryWiseExpense[category] = 0;
        categoryWiseExpense[category] += parseFloat(amount);
      });

    const categories = Object.keys(categoryWiseExpense);
    const amounts = categories.map(category => categoryWiseExpense[category]);

    setPieChartData({
      labels: categories,
      datasets: [
        {
          label: 'Category-wise Expense',
          data: amounts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [transactions]);

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,

        text: 'Income vs Expense Report',
      },
    },
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Category-wise Expense Distribution',
      },
    },
  };

  return (
    <div className="reports-page">
      <h1>Reports</h1>

      <div className="chart-container">
        <h2>Income vs Expense Over Months</h2>
        {lineChartData.labels && <Line data={lineChartData} options={lineChartOptions} />}
      </div>

      <div className="pie-container">
        <h2>Category-wise Expense Distribution</h2>
        {pieChartData.labels && <Pie data={pieChartData} options={pieChartOptions} />}
      </div>
    </div>
  );
};
