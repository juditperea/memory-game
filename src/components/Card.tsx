import '.././Card.css';

interface CardTypes {
  image: {
    src: string;
    id: number;
  };
}

function Card({ image }: CardTypes) {
  return (
    <div className='backCard'>
      <img src={image.src}  />
    </div>
  );
}

export default Card;
