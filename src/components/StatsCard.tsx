import React from 'react';

interface StatsCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ number, label, icon }) => {
  return (
    <div className="stats-card">
      {icon && <div className="mb-3 text-quadro-teal">{icon}</div>}
      <p className="text-3xl md:text-4xl font-bold text-quadro-teal">{number}</p>
      <p className="text-gray-600 text-center mt-2">{label}</p>
    </div>
  );
};

export default StatsCard;
