
export interface CardTypes {
    src: string;
    id: number;
  }
  
export interface CardProps {
    image: CardTypes;
    handleChoice: (card: CardTypes) => void;
    flipped: boolean;
    paired: boolean;
  }
  