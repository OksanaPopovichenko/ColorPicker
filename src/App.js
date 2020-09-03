import React from 'react';
import './App.scss';
import ColorPicker from './components/ColorPicker/ColorPicker';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '#f2b74c',
            colors: {
                yellow: "#f2b74c",
                red: "#ef3c33",
                green: "#00a05a",
                blue: "#00adeb"
            }
        }
    }


    handleColor = (color) => {
        this.setState({ value: color })
    }

    render() {
        return (
            <div className="App">
                <ColorPicker colors={this.state.colors} value={this.state.value} onChange={this.handleColor} />
            </div>
        );
    }
}

export default App;
