import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <Image src={imageSrc} alt={title} style={styles.image}  fill={true} />
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  },
  imageContainer: {
    position:"relative" as const, 
    width: '100%', 
    aspectRatio: 1,
  },
  image: {
    objectFit: 'contain' as const,
  },
  content: {
    padding: 12,
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '16px',
    fontWeight: 700,
    margin: '0 0 10px 0',
    color: 'black'
  },
  description: {
    fontSize: '12px',
    color: '#666',
  },
};

export default Card;
