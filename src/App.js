import React from 'react';

class ReactComponent extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
class ReactPureComponent extends React.PureComponent {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

const ReactFunctionComponent = (props) => {
  return <h1>{props.title}</h1>;
}

function App(props) {
  return (
    <div>
      {props.title}
      <ReactComponent title='render React Component' />
      <ReactPureComponent title='render React Pure Component' />
      <ReactFunctionComponent title='render React Function Component' />
    </div>
  );
}

export default App;

