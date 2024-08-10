import React, { useState, forwardRef } from 'react';
import { Container } from '../../common/container/Container';
import { DropDownItem } from '../drop-down-item/DropDownItem';

interface DropDownBoxProps extends React.HTMLAttributes<HTMLElement> {
  options: string[];
}

export const DropDownBox = forwardRef<HTMLElement, DropDownBoxProps>(({ options }, ref) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Container display="flex">
        <Container
          display="flex"
          flexDirection="column"
          padding={6}
          gap={4}
          borderRadius="s"
          boxShadow="s"
          backgroundColor="backgroundNormalPrimary"
        >
          {options.map((item, index) => (
            <DropDownItem
              key={index}
              state={activeIndex === index ? 'active' : 'default'}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </DropDownItem>
          ))}
        </Container>
      </Container>
    </>
  );
});
