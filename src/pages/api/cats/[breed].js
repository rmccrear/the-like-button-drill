
export default async function handler(req, res) {
  const { breed } = req.query;

  if (!breed) {
    return res.status(400).json({ error: 'Breed is required' });
  }

  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/cats?name=${breed}`, {
      headers: {
        'X-Api-Key': process.env.API_NINJAS_KEY
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}