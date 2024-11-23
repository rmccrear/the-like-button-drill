import { useState } from 'react';

const CatCard = ({ catData }) => {
  // TODO: Use state for like and setLike

  if (!catData) {
    return <div>Loading...</div>;
  }

  const description = `${catData.name} is a ${catData.family_friendly > 3 ? 'family friendly' : ''} cat breed originating in ${catData.origin}.`

  // TODO: Add click handler for like button

  return (
    <div className="card">
      <figure>
        <img src={catData.image_link} alt={catData.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{catData.name}</h2>
        <p>{description}</p>
        {/*TODO: onClick = increment like */}
        <button className='btn btn-primary'> 
          ❤️ Like 
          </button>
      </div>
    </div>
  );
};

export default CatCard;
