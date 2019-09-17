import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Album from './components/album';
import MusicIcon from '@material-ui/icons/MusicNoteTwoTone';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
});

class App extends Component {

  state = {
     albums : ""
    }

    componentDidMount() {
        this.callApi().then(res => {
          this.setState({albums : res}).catch(err => console.log("데이터 전송 실패 >>> ", err))
        });
    }

    callApi = async () => {
      const response = await fetch('/');
      const body = await response.json();
      return body;
    }

  render(){

    const { classes } = this.props;

    return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MusicIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            TODAY's ALBUM
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* Show default table when setState error occured*/}
          {this.state.albums ? this.state.albums.map(a => {
              return (<Album title={a.album_title} artist={a.album_artist} image={a.album_image_uri}/>)}) 
          : <Album title="Album Title" artist="Artist" image="https://source.unsplash.com/random"/>}
        </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
              TODAY's ALBUM
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Free & Useful Music Application
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

class Copyright extends Component {
  render(){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            EUNJIN LEE
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
  }
}

export default withStyles(useStyles)(App);
