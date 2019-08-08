import React from "react";
import Grid from '@material-ui/core/Grid';

//Components
import ToolBar from './toolbar';
import Counter from './counter';
import Shipments from './shipments';
import Timeline from './timeline';


class Dashboard extends React.Component {

    state = {
        shipments: [],
        counter: {
            del: 0,
            int: 0,
            ood: 0,
            dex: 0,
            nfi: 0,
        }
    }

    componentDidMount() {
        this.getShipments();
    }

    //GET Shipments
    getShipments(){
        let url = "https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/sathish.visar";
        let bearer_token = 'tTU3gFVUdP';
        let bearer = 'Bearer ' + bearer_token;
        let bodyData = {email: 'sathish.visar@gmail.com'};

        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
        })
        .then((response) => response.json())
        .then((result) => {
            this.setState({ shipments: result.data });
            this.counterData();
        })
        .catch((error) => {
            console.error(error);
        });
    }

    //Filter Counter Data
    counterData(){
        //console.log(this.state.shipments);
        //DEL Count
        let DELData=  this.state.shipments.filter(function(row) {
            return row.current_status_code == 'DEL';
        });

        //INT Count
        let INTData=  this.state.shipments.filter(function(row) {
            return row.current_status_code == 'INT';
        });
        this.state.counter.int = INTData.length;

        //OOD Count
        let OODData=  this.state.shipments.filter(function(row) {
            return row.current_status_code == 'OOD';
        });
        this.state.counter.ood = OODData.length;

        //DEX Count
        let DEXData=  this.state.shipments.filter(function(row) {
            return row.current_status_code == 'DEX';
        });
        this.state.counter.dex = DEXData.length;

        //NFI Count
        let NFIData=  this.state.shipments.filter(function(row) {
            return row.current_status_code == 'NFI';
        });
        this.state.counter.nfi = NFIData.length;

        this.setState( state => {
            state.counter.del = DELData.length;
            state.counter.int = INTData.length;
            state.counter.ood = OODData.length;
            state.counter.dex = DEXData.length;
            state.counter.nfi = NFIData.length;
            return state;
        });
    }

    render(){

        return(
            <div>

                {/* Toolbar */}
                <ToolBar/>

                {/* Counter */}
                <Counter counterData={this.state.counter} />

                {/* Shipments & Timeline */}
                <Grid item container >

                    {/* Timeline */}
                    {/* <Grid   xs={3}>
                        <Timeline/>
                    </Grid> */}

                    {/* Shipments */}
                    <Grid item  xs={12}>
                        <Shipments/>
                    </Grid>

                </Grid>

            </div>
        )
    }
}

export default Dashboard;