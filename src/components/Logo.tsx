import React from 'react';
import { Building2 } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Building2 size={32} className="text-primary-600 mr-2" />
      <span className="text-xl font-bold text-gray-800">Future Craft</span>
    </div>
  );
};

export default Logo;