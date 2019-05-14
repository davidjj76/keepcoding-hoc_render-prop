import React from 'react';

import withFetch from './withFetch';

const renderPlanet = ({ url, name }) => <li key={url}>{name}</li>;

const Planets = ({ planets, sort }) => (
  <ul>{planets.sort(sort).map(renderPlanet)}</ul>
);

export default withFetch({
  dataProp: 'planets',
  url: 'https://swapi.co/api/planets',
})(Planets);
