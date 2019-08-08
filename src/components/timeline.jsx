import React from 'react';
import { withStyles } from '@material-ui/styles';
 


const styles = theme => ({
  
});

class Timeline extends React.Component {

    render(){
        //const { classes } = this.props;

        return(
            <div>
                {/* <h3>AWB NUMBER	: #123456</h3> */}

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