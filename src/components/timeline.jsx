import React from 'react';
import { withStyles } from '@material-ui/styles';
import Moment from 'moment';



const styles = theme => ({
  
});

class Timeline extends React.Component {

    

    render(){
        const { classes, timelineData} = this.props;

        const items = timelineData.map((item, key) =>
            <li key={key}>
                <div className={"bullet blue"}></div>
                <div className={"desc" + " desc_"+key}>
                    <span className={"state"}>{item.status_detail}</span>
                    <span>
                        <span className={"date"}>{Moment(item.time).format('L')} </span>
                        <span className={"timing"}>{Moment(item.time).format('LT')}</span>
                    </span>
                </div>
            </li>
        );
        
        return(
            <div>
                {/* {JSON.stringify(timelineData.scan, null, 2) } */}

                 <div className={"timeline"}>
                    <ul>
                        {items}
                    </ul>
                </div> 
            </div>
        )
    }
}

export default withStyles(styles)(Timeline);