import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MusicIcon from '@material-ui/icons/MusicNoteTwoTone';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './album.css';

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Album extends Component {

    state = {
        albums : ""
        }

        componentDidMount() {
            console.log("여기에 들어왔니?");
            this.callApi().then(res => this.setState({albums : res}).then(console.log(typeof res, res))
            .catch(err => console.log("데이터 전송 실패 >>> ", err)));
        }

        callApi = async() => {
        const response = await fetch('/');
        const body = await response.json();
        return body;
        }
    
  render(){

    return (
        <React.Fragment>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <MusicIcon className="useStyles-icon" />
              <Typography variant="h6" color="inherit" noWrap>
                TODAY's ALBUM
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            {/* Hero unit */}
            <Container className="useStyles-cardGrid" maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {cards.map(card => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className="useStyles-card">
                      <CardMedia
                        className="useStyles-cardMedia"
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className="useStyles-cardContent">
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to describe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
          {/* Footer */}
          <footer className="useStyles-footer">
            <Typography variant="h6" align="center" gutterBottom>
                TODAY's ALBUM
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Free & Useful Mini Music Application
            </Typography>
            <Copyright />
          </footer>
          {/* End footer */}
        </React.Fragment>
      );
  }
}

export default Album;