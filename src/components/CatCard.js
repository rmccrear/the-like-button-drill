import { useState } from 'react';
import LikeCatButton from './LikeCatButton';

const CatCard = ({ catData }) => {
  // TODO: Use state for like and setLike
  const [likes, setLikes] = useState(0);

  if (!catData) {
    return <div>Loading...</div>;
  }

  const description = `${catData.name} is a ${catData.family_friendly > 3 ? 'family friendly' : ''} cat breed originating in ${catData.origin}.`

  // TODO: Add click handler for like button
  function handleLike(){
    setLikes(likes+1);
  }

  return (
    <div className="card">
      <figure>
        <img src={catData.image_link} alt={catData.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Breed: {catData.name}</h2>
        <p>{description}</p>
        {/*TODO: onClick = increment like */}
        <LikeCatButton likes={likes} 
                      onLike={handleLike} />
      </div>
    </div>
  );
};

export default CatCard;
