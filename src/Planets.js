import React, { Component } from 'react';

const renderPlanet = ({ url, name }) => <li key={url}>{name}</li>;

class Planets extends Component {
  state = {
    error: null,
    loading: true,
    planets: null,
  };

  async componentDidMount() {
    try {
      const response = await fetch('https://swapi.co/api/planets');
      const { results } = await response.json();
      this.setState({ error: null, loading: false, planets: results });
    } catch (error) {
      this.setState({ error, loading: false, planets: null });
    }
  }

  render() {
    const { error, loading, planets } = this.state;
    if (error) return <div style={{ color: 'red' }}>Error loading</div>;
    if (loading) return <div>Loading ...</div>;
    return <ul>{planets.map(renderPlanet)}</ul>;
  }
}

export default Planets;
