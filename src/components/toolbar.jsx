import React from 'react';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

//Assets
import logo from './../assets/logo.svg';
import profile from './../assets/profile.svg';


const styles = theme => ({
    appBar:{
        background: "#ffffff"
    },
    toolbar:{
        margin: 10,
    },
    logoText:{
        color: "#000000",
        "& h6":{
            color: "#000000"
        }
    },
    avatar: {
        margin: 10,
        background: '#E0E0E0',
        "& img": {
            width: 25,
            height: "auto"
          }
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
  });

class ToolBar extends React.Component {

    render(){
        const { classes } = this.props;

        return(
            <div>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Grid container spacing={3}>
                            {/* Left Side */}
                            <Grid   item container direction="row" justify="flex-start" alignItems="center" xs={6}>
                                <img src={logo} alt=""/>
                                <Typography variant="h6" color="inherit" className={classes.logoText}>
                                    intugine
                                </Typography>
                            </Grid>
                            {/* Right Side */}
                            <Grid item xs={6} container direction="row" justify="flex-end" alignItems="stretch">
                                <Button>Home</Button>
                                <Button>Brands</Button>
                                <Button>Transporters</Button>
                                <Avatar alt="User" src={profile} className={classes.avatar}/>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(ToolBar);