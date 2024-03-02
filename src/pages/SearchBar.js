import { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Searchbar = () => {
  const [name, setName] = useState('');
  const [getLocations, { data, loading, error, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter keyword to search..."
          className="searchbar"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => getLocations()}>Search</button>

        {loading && <div>Loading...</div>}
        {error && <div>Something went wrong!</div>}
        {data && (
          <ul>
            {data.characters.results.map((character, index) => {
              return <li key={index}>{character.location.name}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Searchbar;
