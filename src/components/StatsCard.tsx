import React from 'react';

interface StatsCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-quadro-lightGray rounded-full text-quadro-teal">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold text-quadro-dark">{value}</div>
          <div className="text-gray-500">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;