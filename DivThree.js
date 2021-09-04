

class DivThree extends Component {
  state = {
    caps: false,
  };
  changeIt = () => {
    console.log('Reached Here');
    if (this.state.caps) {
      this.setState({
        caps: false,
      });
    } else {
      this.setState({
        caps: true,
      });
    }
  };
  render() {
    return (
      <div>
        <h3 onClick={() => this.changeIt()}>
          {this.state.caps
            ? this.props.text.name.toUpperCase()
            : this.props.text.name.toLowerCase()}
        </h3>
      </div>
    );
  }
}

export default DivThree;