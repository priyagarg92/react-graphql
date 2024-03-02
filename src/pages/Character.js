import { useParams } from 'react-router-dom';
import useCharacter from '../hooks/useCharacter';

const Character = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <div>Spinner</div>;
  return (
    <div className="character">
      <img src={data.character.image} alt={data.character.name} />
      <div className="description">
        <h2>{data.character.name}</h2>
        <p>{data.character.gender}</p>
        <div className="episodes">
          {data.character.episode.map((episode) => {
            return (
              <div className="episode-li">
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
