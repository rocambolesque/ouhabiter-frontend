import React, { Component } from 'react';
import './SidePanel.css'
import Station from './Station.js';
import Search from './Search.js';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from "react-router-dom";
import stationService from '../services/StationService';

class SidePanel extends Component {
    constructor(props) {
        super(props);
        this.handleCloseStation = this.handleCloseStation.bind(this);
        let station = null;
        let searchActive = true;
        if (props.match.params.destination) {
            station = stationService.getStationBySlug(props.match.params.destination);
            if (station) {
                searchActive = false;
            }
        }
        this.state = {
            searchActive: searchActive,
            station: station,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.destination && !this.props.match.params.destination) { // no destination anymore
            this.setState({
                searchActive: true,
                station: null,
            });
        } else if (
            (!prevProps.match.params.destination && this.props.match.params.destination) || // first destination
            (prevProps.match.params.destination !== this.props.match.params.destination) // new destination
        ) {
            let station = stationService.getStationBySlug(this.props.match.params.destination);
            this.setState({
                searchActive: false,
                station: station
            });
        }
    }

    handleCloseStation() {
        this.props.history.push('');
        this.setState({
            searchActive: true
        });
    }

    render() {
        return (
            <Box pl={1} className="SidePanel">
                <img src={process.env.PUBLIC_URL + "/logo.png"} width="30%"/>
                <Collapse in={this.state.searchActive}>
                    <Search onSearchChange={this.props.onSearchChange}></Search>
                </Collapse>
                { !this.state.searchActive &&
                    <Box m={2}>
                        <Box display="flex" justifyContent="flex-end">
                            <IconButton onClick={this.handleCloseStation}><CloseIcon /></IconButton>
                        </Box>
                        <Station station={this.state.station} />
                    </Box>
                }
            </Box>
        )
    }
}

export default withRouter(SidePanel);