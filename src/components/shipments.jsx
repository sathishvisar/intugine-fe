import React from 'react';
import { withStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        //marginTop: theme.spacing(3),
        overflowX: 'auto',
      },
      table: {
        //minWidth: 320,
      },
});

function createData(awb_no, tran, src, dest, brand, sdate, etd, state) {
    return { awb_no, tran, src, dest, brand, sdate, etd, state };
  }
  
  const rows = [
    createData(12345678, 'DTDC', 'Bangalore', 'Delhi', 'USPA' , '01/07/2019', '01/07/2019', 'OOD'),
    createData(12345678, 'DTDC', 'Bangalore', 'Delhi', 'USPA' , '01/07/2019', '01/07/2019', 'OOD'),
    createData(12345678, 'DTDC', 'Bangalore', 'Delhi', 'USPA' , '01/07/2019', '01/07/2019', 'OOD'),
    createData(12345678, 'DTDC', 'Bangalore', 'Delhi', 'USPA' , '01/07/2019', '01/07/2019', 'OOD'),
    createData(12345678, 'DTDC', 'Bangalore', 'Delhi', 'USPA' , '01/07/2019', '01/07/2019', 'OOD'),
    createData(12345678, 'DTDC', 'Bangalore', 'Delhi', 'USPA' , '01/07/2019', '01/07/2019', 'OOD'),
    createData(12345678, 'DTDC', 'Bangalore', 'Delhi', 'USPA' , '01/07/2019', '01/07/2019', 'OOD')
  ];

class Shipments extends React.Component {
    
    render(){
        const { classes } = this.props;

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
                        {rows.map( (row,i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    #{row.awb_no}
                                </TableCell>
                                <TableCell align="right">{row.tran}</TableCell>
                                <TableCell align="right">{row.src}</TableCell>
                                <TableCell align="right">{row.dest}</TableCell>
                                <TableCell align="right">{row.brand}</TableCell>
                                <TableCell align="right">{row.sdate}</TableCell>
                                <TableCell align="right">{row.etd}</TableCell>
                                <TableCell align="right">{row.state}</TableCell>
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