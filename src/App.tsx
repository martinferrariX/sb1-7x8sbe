import React, { useState, useRef } from 'react';
import { Upload, Search, Image as ImageIcon, Loader2 } from 'lucide-react';
import ProductResult from './components/ProductResult';
import ChatInput from './components/ChatInput';
import ImageUpload from './components/ImageUpload';

function App() {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [result, setResult] = useState<ProductResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  type ProductResult = {
    name: string;
    description: string;
    imageUrl: string;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description && !selectedImage) {
      setError('Por favor, proporciona una descripción o una imagen.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulated API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Example response
      setResult({
        name: "Producto de Ejemplo",
        description: "Descripción detallada del producto encontrado basado en tu búsqueda.",
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
      });
    } catch (err) {
      setError('Ha ocurrido un error al procesar tu solicitud.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-12 pt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Asistente de Búsqueda IA
          </h1>
          <p className="text-gray-600">
            Describe el producto que buscas o sube una imagen
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <ChatInput
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isLoading}
          />

          <ImageUpload
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            fileInputRef={fileInputRef}
            disabled={isLoading}
          />

          {error && (
            <div className="text-red-500 text-sm mt-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || (!description && !selectedImage)}
            className={`w-full py-3 px-6 rounded-lg text-white font-medium 
              ${isLoading || (!description && !selectedImage)
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 transition-colors'}
              flex items-center justify-center space-x-2`}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Procesando...</span>
              </>
            ) : (
              <>
                <Search size={20} />
                <span>Buscar</span>
              </>
            )}
          </button>
        </form>

        {result && <ProductResult result={result} />}
      </div>
    </div>
  );
}

export default App;