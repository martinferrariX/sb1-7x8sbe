import React from 'react';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, disabled }) => {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder="Escribe aquí la descripción del producto que buscas..."
        className="w-full min-h-[120px] p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
        style={{ scrollbarWidth: 'thin' }}
      />
    </div>
  );
};

export default ChatInput;