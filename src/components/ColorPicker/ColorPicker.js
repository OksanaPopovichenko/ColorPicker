import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import OutsideClickHandler from 'react-outside-click-handler';
import './ColorPicker.scss';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showListOfColors: false,
            showSliders: false,
            colorSnipped: this.props.value,
        }

        this.updateColor = this.updateColor.bind(this);
        this.handleListOfColors = this.handleListOfColors.bind(this);
        this.handleSliders = this.handleSliders.bind(this);
        this.setColorFromList = this.setColorFromList.bind(this);
        this.cancelChangeColor = this.cancelChangeColor.bind(this);
        this.setColorFromRGB = this.setColorFromRGB.bind(this);
        this.hexToRgb = this.hexToRgb.bind(this);
        this.rgbToHex = this.rgbToHex.bind(this);
        this.componentToHex = this.componentToHex.bind(this);
    }

    componentDidMount = () => {
        this.hexToRgb(this.props.value)
    }

    updateColor = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });

        let hex = this.rgbToHex(this.state.red, this.state.green, this.state.blue);
        this.setState({ colorSnipped: hex });
    }

    handleListOfColors = () => {
        this.setState(prevState => ({
            showListOfColors: !prevState.showListOfColors,
        }));
    }

    handleSliders = () => {
        this.setState(prevState => ({
            showSliders: !prevState.showSliders,
        }));
    }

    setColorFromList = (color) => {
        this.setState({
            colorSnipped: color,
        })

        this.handleListOfColors();
        this.hexToRgb(color);
        this.props.onChange(color)
    }

    cancelChangeColor = () => {
        this.setState({ colorSnipped: this.props.value });

        this.handleSliders();
        this.hexToRgb(this.props.value);
    }

    hexToRgb = (hex) => {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        this.setState({
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16),
        })
    }

    componentToHex = (c) => {
        let hex = Math.abs(c).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    rgbToHex = (r, g, b) => {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    setColorFromRGB = () => {
        let hex = this.rgbToHex(this.state.red, this.state.green, this.state.blue);

        this.setState({
            colorSnipped: hex
        })

        this.handleSliders();
        this.props.onChange(hex);
    }

    render() {
        const { showListOfColors, showSliders } = this.state;

        const items = []
        for (const [key, value] of Object.entries(this.props.colors)) {
            items.push(<li onClick={() => this.setColorFromList(value)} key={key}>{key} <Grid style={{ background: `${value}` }}></Grid></li>)
        }

        return (
            <Grid className="wrap">
                <Grid container
                    className="color-picker"
                    direction="row"
                    wrap="nowrap"
                    justify="flex-start"
                    alignItems="center">
                    <TextField className="text-field" value={this.props.value} />
                    <Grid className="btn-color" onClick={this.handleSliders}>
                        <Grid className="color-squadre" style={{ background: `${this.state.colorSnipped}` }}></Grid>
                    </Grid>
                    <Grid className="btn-down" onClick={this.handleListOfColors}>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </Grid>

                    {showListOfColors ?
                        <OutsideClickHandler onOutsideClick={() => this.handleListOfColors()}>
                            <Grid className="color-list-wrap">
                                <ul className="color-list">
                                    {items}
                                </ul>
                            </Grid>
                        </OutsideClickHandler>
                    : null}

                    {showSliders ?
                        <OutsideClickHandler onOutsideClick={() => this.handleSliders()}>
                            <Grid className="color-list-wrap color-slider-wrap">
                                <Grid className="sliders">
                                    <Grid className="track">
                                        <label>R:</label>
                                        <input id="red" type="range"
                                            name="red"
                                            min="0"
                                            max="255"
                                            steps="1"
                                            value={this.state.red}
                                            onChange={event => this.updateColor(event)}
                                        />
                                    </Grid>
                                    <Grid className="track">
                                        <label>G:</label>
                                        <input id="green" type="range"
                                            min="0"
                                            name="green"
                                            max="255"
                                            steps="1"
                                            value={this.state.green}
                                            onChange={event => this.updateColor(event)}
                                        />
                                    </Grid>
                                    <Grid className="track">
                                        <label>B:</label>
                                        <input id="blue" type="range"
                                            min="0"
                                            max="255"
                                            name="blue"
                                            steps="1"
                                            value={this.state.blue}
                                            onChange={event => this.updateColor(event)}
                                        />
                                    </Grid>
                                    <Grid className="btns-group"
                                        container
                                        direction="row"
                                        justify='flex-end'>
                                        <Button variant="outlined" className="cancel" onClick={this.cancelChangeColor}>Cancel</Button>
                                        <Button variant="outlined" className="okay" onClick={this.setColorFromRGB}>Okay</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </OutsideClickHandler>
                    : null}
                </Grid>
            </Grid>
        );
    }
}

export default ColorPicker;
