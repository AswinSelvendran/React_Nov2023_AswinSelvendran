import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './home.css';

const StyledTitle = styled(Typography)({
  marginBottom: (theme) => theme.spacing(2),
});

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSchedulerOpen, setSchedulerOpen] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState({
    title: '',
    description: '',
    // Add more fields as needed
  });

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  const handleOpenScheduler = () => {
    setSchedulerOpen(true);
  };

  const handleCloseScheduler = () => {
    setSchedulerOpen(false);
  };

  const handleScheduleMeeting = () => {
    // Implement logic to handle the scheduled meeting
    console.log('Meeting Details:', meetingDetails);
    // Add logic to save meeting details, send requests, etc.
    handleCloseScheduler();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Paper className="bb" style={{ backgroundColor: 'black', color: 'white', borderBottom: '5px solid white', padding: '10px' }}>
            <Toolbar>
              <Typography variant="h6">SHrooVe👽!</Typography>
              <div style={{ marginLeft: 'auto' }}>
                <Button color="inherit" href="/login">
                  Sign UP/In
                </Button>
                <Button color="inherit" onClick={handleOpenScheduler} sx={{ marginLeft: 'auto' }}>
                  Start
                </Button>
              </div>
            </Toolbar>
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12}>
          <Paper className="hi" style={{ padding: '20px' }}>
            <StyledTitle variant="h2" align="center" style={{ marginTop: '1em' }}>
              Create your Schedule with our app
            </StyledTitle>
            <Typography variant="body1" align="center" sx={{ padding: '30px' }}>
              An effective meeting agenda is a plan you share with your meeting participants. It’ll help your team set clear expectations of what needs to happen before, during, and after the meeting.
            </Typography>
            <Typography variant="h5" align="center" style={{ margin: '20px 0', color: 'darkblue' }}>
              Current Time: {formattedTime}
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Calendar />
            </div>
            <Button variant="contained" color="primary" onClick={handleOpenScheduler} sx={{ padding: '15px', display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: '20px', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
              Start
            </Button>
          </Paper>
        </Grid>

       {/* Footer */}
<Grid item xs={12}>
  <footer className="site-footer">
    <Paper style={{ padding: '20px', backgroundColor: 'black' }}>
      <div className="social-icons">
        <div>
          <p style={{ color: 'white' }}>123, 7-Street, Coimbatore</p>
          <p style={{ color: 'white' }}>For Contact: 9999988888</p>
          <p style={{ color: 'white' }}>Email: 727722euit023@skcet.ac.in</p>
        </div>
        <a href="#" className="text-white">
          <InstagramIcon style={{ height: '50px', width: '70px' }} />
        </a>
        <a href="#" className="text-white1">
          <FacebookIcon style={{ height: '50px', width: '70px' }} />
        </a>
        <a href="#" className="text-white1">
          <LinkedInIcon style={{ height: '50px', width: '70px' }} />
        </a>
        <a href="#" className="text-white1">
          <TwitterIcon style={{ height: '50px', width: '70px' }} />
        </a>
        <a href="#" className="text-white2">
          <YouTubeIcon style={{ height: '50px', width: '70px' }} />
        </a>
        <a href="#" className="text-white3">
          <WhatsAppIcon style={{ height: '50px', width: '70px' }} />
        </a>
      </div>
    </Paper>
  </footer>


        </Grid>
      </Grid>

      {/* Meeting Scheduler Dialog */}
      <Dialog open={isSchedulerOpen} onClose={handleCloseScheduler}>
        <DialogTitle>Schedule a Meeting</DialogTitle>
        <DialogContent>
          <TextField
            label="Meeting Title"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="title"
            value={meetingDetails.title}
            onChange={handleInputChange}
          />
          <TextField
            label="Meeting Description"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="description"
            value={meetingDetails.description}
            onChange={handleInputChange}
          />
          {/* Add more fields as needed */}
          <Button variant="contained" color="primary" onClick={handleScheduleMeeting}>
            Schedule
          </Button>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default HomePage;
