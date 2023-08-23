import PropTypes from 'prop-types'
import moment from 'moment'
// import 'moment/locale/es'  // without this line it didn't work
// moment.locale('es')

import {
  withStyles,
  Typography,
  ButtonBase,
  Paper,
  Grid,
  Chip,
  Link,
} from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  chip: {
    margin: theme.spacing(1),
  },
  link: {
    margin: theme.spacing(1),
  },
})

/* eslint-disable camelcase */
const Repo = ({
  classes,
  avatar_url,
  name,
  html_url,
  owner,
  description,
  stargazers_count,
  open_issues_count,
  // issues_url,
  // stargazers_url,
  created_at,
}) => (
  <div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        {' '}
        {/* Update this line */}
        <Grid item>
          <ButtonBase className={`btn btn-primary ${classes.image}`}>
            <a
              href={`https://github.com/${owner}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={`img-fluid ${classes.img}`}
                alt="Owner Avatar"
                src={`${avatar_url}`}
              />
            </a>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6">
                {' '}
                <Link
                  href={html_url}
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  className={classes.link}
                >
                  {name}
                </Link>
              </Typography>
              <Typography gutterBottom variant="body1">
                {' '}
                {description}
              </Typography>
              <Chip
                label={` Stars: ${stargazers_count} `}
                className={classes.chip}
                href="#chip"
                clickable
                variant="outlined"
              />
              <Chip
                label={` Issues: ${open_issues_count} `}
                className={classes.chip}
                clickable
                variant="outlined"
              />
              <Typography color="primary">
                Submitted {moment(created_at).fromNow()} By {owner}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </div>
)

Repo.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  avatar_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string, // Remove isRequired from here
  stargazers_count: PropTypes.number.isRequired,
  open_issues_count: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
}

Repo.defaultProps = {
  description: '',
}

export default withStyles(styles)(Repo)
