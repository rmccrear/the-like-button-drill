import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CatCard from '@/components/CatCard';

const CatBreedPage = () => {
  const router = useRouter();
  const { breed } = router.query;
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    if (breed) {
      fetch(`/api/cats/${breed}`)
        .then(response => response.json())
        .then(data => setCatData(data))
        .catch(error => console.error('Error fetching cat data:', error));
    }
  }, [breed]);

  if (!catData || catData.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CatCard catData={catData[0]} />
    </div>
  );
};

export default CatBreedPage;