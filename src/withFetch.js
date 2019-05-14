import React, { Component } from 'react';

const withFetch = ({ dataProp = 'data', url }) => WrappedComponent => {
  class WrappedComponentWithFetch extends Component {
    state = {
      error: null,
      loading: true,
      data: null,
    };

    async componentDidMount() {
      try {
        const response = await fetch(url);
        const { results } = await response.json();
        this.setState({ error: null, loading: false, data: results });
      } catch (error) {
        this.setState({ error, loading: false, data: null });
      }
    }

    render() {
      const { error, loading, data } = this.state;
      if (error) return <div style={{ color: 'red' }}>Error loading</div>;
      if (loading) return <div>Loading ...</div>;
      const props = {
        ...this.props,
        [dataProp]: data,
      };
      return <WrappedComponent {...props} />;
    }
  }
  return WrappedComponentWithFetch;
};

export default withFetch;
