import React from 'react';
import { withStyles } from '@material-ui/styles';
 


const styles = theme => ({
  
});

class Timeline extends React.Component {

    render(){
        const { classes, timelineData } = this.props;

        return(
            <div>
                {/* {JSON.stringify(this.props.timelineData, null, 2) } */}

                 <div className={"timeline"}>
                    <ul>
                        <li>
                            <div className={"bullet blue"}></div>
                            <div className={"desc"}>
                                <span className={"state"}>Delivered</span>
                                <span className={"date"}>07/11/2019</span>
                                <span className={"timing"}>14:00</span>
                            </div>
                        </li>
                        <li>
                            <div className={"bullet blue"}></div>
                            <div className={"desc"}>
                                <span className={"state"}>Delivered</span>
                                <span className={"date"}>07/11/2019</span>
                                <span className={"timing"}>14:00</span>
                            </div>
                        </li>
                        <li>
                            <div className={"bullet blue"}></div>
                            <div className={"desc"}>
                                <span className={"state"}>Delivered</span>
                                <span className={"date"}>07/11/2019</span>
                                <span className={"timing"}>14:00</span>
                            </div>
                        </li>
                        <li>
                            <div className={"bullet blue"}></div>
                            <div className={"desc"}>
                                <span className={"state"}>Delivered</span>
                                <span className={"date"}>07/11/2019</span>
                                <span className={"timing"}>14:00</span>
                            </div>
                        </li>
                        
                    </ul>
                </div> 
            </div>
        )
    }
}

export default withStyles(styles)(Timeline);