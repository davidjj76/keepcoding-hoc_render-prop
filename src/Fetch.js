import React, { Component } from 'react';

class Fetch extends Component {
  state = {
    error: null,
    loading: true,
    data: null,
  };

  async componentDidMount() {
    const { url } = this.props;
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
    const { render } = this.props;
    if (error) return <div style={{ color: 'red' }}>Error loading</div>;
    if (loading) return <div>Loading ...</div>;
    return render(data);
  }
}

export default Fetch;
