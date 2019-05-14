import React from 'react';

import Fetch from './Fetch';

const renderPlanet = ({ url, name }) => <li key={url}>{name}</li>;

const Planets = ({ sort }) => (
  <Fetch url="https://swapi.co/api/planets">
    {planets => <ul>{planets.sort(sort).map(renderPlanet)}</ul>}
  </Fetch>
);

export default Planets;
