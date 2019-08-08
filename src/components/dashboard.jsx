import React from "react";
import Grid from '@material-ui/core/Grid';
import { PulseLoader } from 'react-spinners';

//Components
import ToolBar from './toolbar';
import Counter from './counter';
import Shipments from './shipments';
import Timeline from './timeline';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.handler = this.funSelectedRow.bind(this);

        this.state= {
            loading: false,
            userInfo:{
                name: '',
                email: '',
            },
            shipments: [],
            counter: {
                del: 0,
                int: 0,
                ood: 0,
                dex: 0,
                nfi: 0,
            },
            selectedRow: []
        }
    }

    funSelectedRow = (data)  =>{
        console.log(data);
        this.setState({
            selectedRow: data.scan
        });
    }

    componentDidMount() {
        this.getShipments();
    }

    //GET Shipments
    getShipments(){
        this.setState({ loading : true});
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
            this.setState({ shipments : result.data })
            this.setState( state => {
                state.userInfo.email = result.email
                state.userInfo.name = result.name
                return state;
            })
            this.counterData();
            this.state.loading = false;
            this.setState({ loading : false});
        })
        .catch((error) => {
            console.error(error);
            this.setState({ loading : false});

        });
    }

    //Filter Counter Data
    counterData(){
        //DEL Count
        let DELData=  this.state.shipments.filter(function(row) {
            return row.current_status_code == 'DEL';
        });

        //INT Count
        let INTData=  this.state.shipments.filter(function(row) {
            return row.current_status_code == 'INT';
        });

        //OOD Count
        let OODData=  this.state.shipments.filter(function(row) {
            return row.current_status_code == 'OOD';
        });

        //DEX Count
        let DEXData=  this.state.shipments.filter(function(row) {
            return row.current_status_code == 'DEX';
        });

        //NFI Count
        let NFIData=  this.state.shipments.filter(function(row) {
            return row.current_status_code == 'NFI';
        });

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
                    <Grid  item  xs={12} md={4} style={
                        this.state.selectedRow.length > 0
                        ? {
                            'display': 'block',
                          }
                        : {
                            'display': 'none',
                          }
                    }>
                        <Timeline timelineData={this.state.selectedRow} />
                    </Grid>
 
                    {/* Shipments */}
                    <Grid item xs={12} md={this.state.selectedRow.length > 0 ? 8 : 12}>
                        <Shipments 
                        selectedRow={ this.funSelectedRow }
                        shipmentData={ this.state.shipments } />
                    </Grid>

                </Grid>

                {this.state.loading && (
                 <div className='sweet-loading'>
                    <PulseLoader
                    sizeUnit={"px"}
                    size={15}
                    color={'#123abc'}
                    loading={this.state.loading}
                    />
                </div> 
                )}

                

            </div>
        )
    }
}

export default Dashboard;