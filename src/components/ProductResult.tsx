import React from 'react';

interface ProductResultProps {
  result: {
    name: string;
    description: string;
    imageUrl: string;
  };
}

const ProductResult: React.FC<ProductResultProps> = ({ result }) => {
  return (
    <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden transition-all">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {result.name}
        </h2>
        <p className="text-gray-600 mb-6">
          {result.description}
        </p>
        <div className="rounded-lg overflow-hidden">
          <img
            src={result.imageUrl}
            alt={result.name}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductResult;