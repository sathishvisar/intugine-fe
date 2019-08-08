import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';


const styles = theme => ({
    counterRow: {
        margin: '30px 0'
    },
    card: {
        width: 100,
        padding: 15,
        margin: '0 10px',
        background: '#d5deff',
        color: '#2e5bff',
        marginBottom: 15,
        // "& :hover":{
        //     background: '#2e5bff',
        //     color: '#d5deff',
        // }
      },
});


class Counter extends React.Component {

    render(){
        const { classes, counterData } = this.props;

        return(
            <div>
                <Grid container direction="row" justify="center" alignItems="center" className={classes.counterRow}>

                    <Card className={classes.card}>
                        <Typography variant="h6" color="inherit">DEL</Typography>
                        <Typography variant="h3" color="inherit"  key={counterData.del}>{this.props.counterData.del}</Typography>
                    </Card>
                    <Card className={classes.card}>
                        <Typography variant="h6" color="inherit">INT</Typography>
                        <Typography variant="h3" color="inherit">{counterData.int}</Typography>
                    </Card>
                    <Card className={classes.card}>
                        <Typography variant="h6" color="inherit">OOD</Typography>
                        <Typography variant="h3" color="inherit">{counterData.ood}</Typography>
                    </Card>
                    <Card className={classes.card}>
                        <Typography variant="h6" color="inherit">DEX</Typography>
                        <Typography variant="h3" color="inherit">{counterData.dex}</Typography>
                    </Card>
                    <Card className={classes.card}>
                        <Typography variant="h6" color="inherit">NFI</Typography>
                        <Typography variant="h3" color="inherit">{counterData.nfi}</Typography>
                    </Card>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Counter);