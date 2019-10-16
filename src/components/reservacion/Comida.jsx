import React, {Component} from 'react';
import Select from 'react-select';




const options = [
  { value: 'suecia', label: 'Suecia' },
  { value: 'islandia', label: 'Islandia' },
  { value: 'finlandia', label: 'Finlandia' },
];

class Comida extends Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption }
     
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
        <div className="">
        <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
        />
        </div>
    );
  }
}

export default Comida;

