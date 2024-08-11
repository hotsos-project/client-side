import React, { createContext, useContext, useState, forwardRef, Ref } from 'react';

interface ChipsGroupContextType {
  activeValue: string | null;
  onChange: (value: string) => void;
}

const ChipsGroupContext = createContext<ChipsGroupContextType | null>(null);

interface ChipsGroupProps {
  name: string;
  children: React.ReactNode;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const ChipsGroup = forwardRef<HTMLDivElement, ChipsGroupProps>(
  ({ name, children, defaultValue, onChange }, ref) => {
    const [activeValue, setActiveValue] = useState<string | null>(defaultValue || null);

    const handleChange = (value: string) => {
      setActiveValue(value);
      if (onChange) {
        onChange(value);
      }
    };

    return (
      <div ref={ref}>
        <ChipsGroupContext.Provider value={{ activeValue, onChange: handleChange }}>
          {children}
        </ChipsGroupContext.Provider>
      </div>
    );
  },
);

export const useChipsGroup = () => {
  const context = useContext(ChipsGroupContext);
  if (!context) {
    throw new Error('useChipsGroup must be used within a ChipsGroup');
  }
  return context;
};
