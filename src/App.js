import React from 'react';
import Sunburst from './components/Sunburst';
import data from './api/data';

class App extends React.Component {
  constructor(props) {
    super(props);

    //figure out max size viewport we can place the sunburst in
    this.box = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight
  }

  onSelect(event) {
    console.log(event);
  }

  render() {
    return (
        <div className="App" align={"center"}>
          test
          <Sunburst
              data={data}
              width={this.box.toString()}
              height={this.box.toString()}
              count_member="size"
              labelFunc={(node) => node.data.name}
              _debug={false}
          />
        </div>
    );
  }
}

export default App