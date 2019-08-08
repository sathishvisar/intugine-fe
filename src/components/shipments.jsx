import React from 'react';
import { withStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Moment from 'moment';

const styles = theme => ({
    root: {
        width: '100%',
        //marginTop: theme.spacing(3),
        overflowX: 'auto',    
        maxHeight: "calc( 100vh - 270px)"
      },
      table: {
        //minWidth: 320,
      },
});

 

class Shipments extends React.Component {

    state = {
        selectedRow:0
    }
 
    render(){
        const { classes, shipmentData, selectedRow } = this.props;

     
        return(
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                        <TableRow>
                            <TableCell>AWB NUMBER</TableCell>
                            <TableCell align="right">TRANSPORTER</TableCell>
                            <TableCell align="right">SOURCE</TableCell>
                            <TableCell align="right">DESTINATION</TableCell>
                            <TableCell align="right">BRAND</TableCell>
                            <TableCell align="right">START DATE</TableCell>
                            <TableCell align="right">ETD</TableCell>
                            <TableCell align="right">STATUS</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* awb_no, tran, src, dest, brand, sdate, etd, state */}
                        {shipmentData.map( (row,i) => (
                            <TableRow key={i} onClick={() => selectedRow(row)}>
                                {/* AWB Number */}
                                <TableCell component="th" scope="row">
                                    <span onClick={() => selectedRow(row)}>#{row.awbno}</span>
                                </TableCell>
                                {/* Transporter */}
                                <TableCell align="right">{row.carrier}</TableCell>
                                {/* Source */}
                                <TableCell align="right">{row.from}</TableCell>
                                {/* Destination */}
                                <TableCell align="right">{row.to}</TableCell>
                                {/* Brand */}
                                <TableCell align="right">{row.awbno}</TableCell>
                                {/* Start Date */}
                                <TableCell align="right">
                                {   Moment(row.pickup_date).format('L')} 
                                </TableCell>
                                {/* ETD */}
                                <TableCell align="right">{row.awbno}</TableCell>
                                {/* Status */}
                                <TableCell align="right">
                                    <span className={row.current_status_code} >
                                        {row.current_status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Shipments);