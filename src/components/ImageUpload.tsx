import React from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploadProps {
  selectedImage: File | null;
  setSelectedImage: (file: File | null) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  disabled: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  selectedImage,
  setSelectedImage,
  fileInputRef,
  disabled
}) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('La imagen no debe superar los 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecciona un archivo de imagen válido');
        return;
      }
      setSelectedImage(file);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
        disabled={disabled}
      />

      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 border-dashed
            ${disabled
              ? 'border-gray-300 text-gray-400 cursor-not-allowed'
              : 'border-blue-300 text-blue-600 hover:border-blue-400 hover:text-blue-700'}
            transition-colors`}
        >
          <Upload size={20} />
          <span>Cargar Imagen</span>
        </button>
      </div>

      {selectedImage && (
        <div className="relative inline-block">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            className="max-w-xs rounded-lg shadow-md"
          />
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <p className="text-sm text-gray-500 text-center">
        Asegúrate de que la imagen sea nítida y esté sobre un fondo liso
      </p>
    </div>
  );
};

export default ImageUpload;