
import React from 'react';

//异步加载函数

export default class AsyncLoader extends React.Component {

  static propTypes = {
    path: React.PropTypes.string.isRequired,
    loading: React.PropTypes.element,
  };

  static defaultProps = {
    path: '',
    loading: <p>Loading...</p>,
    error: <p>Error</p>
  };

  constructor(props) {
    super(props);
    this.state = {
      module: null
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.path !== this.props.path
      || nextProps.error !== this.props.error
      || nextProps.loading !== this.props.loading) {
      this.load(nextProps);
    }
  }

  load(props) {

    this.setState({module: props.loading});


    import(`./${props.path}`)
      .then((m) => {
        let Module = m.default ? m.default : m;
//      console.log("module: ", Module);
        this.setState({module: <Module/>});
      }).catch(() => {
        this.setState({module: props.error});
      });
  }

  render() {
    return this.state.module;
  }
}
