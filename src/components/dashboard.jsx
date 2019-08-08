import React from "react";
import Grid from '@material-ui/core/Grid';

//Components
import ToolBar from './toolbar';
import Counter from './counter';
import Shipments from './shipments';
import Timeline from './timeline';


class Dashboard extends React.Component {

    render(){

        return(
            <div>

                {/* Toolbar */}
                <ToolBar/>

                {/* Counter */}
                <Counter/>

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