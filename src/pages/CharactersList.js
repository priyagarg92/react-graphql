import { Link } from 'react-router-dom';
import useCharacters from '../hooks/useCharacters';

const CharactersList = () => {
  const { data, loading, error } = useCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="wrapper-inner">
      <h1>Characters List</h1>
      <div className="characters-list">
        {data.characters.results.map(({ id, name, gender, image, species }) => {
          return (
            <Link to={id}>
              <div key={id} className="character-card">
                <img alt="character-img" src={image} />
                <h3>{name}</h3>
                <div className="specifications">
                  <p>
                    <span>Gender:</span> {gender}
                  </p>
                  <p>
                    <span>Species:</span> {species}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CharactersList;
