import React from 'react';

import Fetch from './Fetch';

const renderPlanet = ({ url, name }) => <li key={url}>{name}</li>;

const Planets = ({ sort }) => (
  <Fetch
    url="https://swapi.co/api/planets"
    render={planets => <ul>{planets.sort(sort).map(renderPlanet)}</ul>}
  />
);

export default Planets;
