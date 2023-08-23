import {Component} from 'react'
import axios from 'axios'
import moment from 'moment'
import RepoList from '../Components/RepoList'
import Loading from '../Components/Loading'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repo: [],
      userStartDate: moment().subtract(30, 'days'),
      userEndDate: moment(),
      isLoading: false,
    }
  }

  componentDidMount() {
    this.loadRepo()
  }

  loadRepo = async () => {
    const {userStartDate, userEndDate} = this.state
    const apiUrl = `https://api.github.com/search/repositories?q=created:${userStartDate.format(
      'YYYY-MM-DD',
    )}..${userEndDate.format('YYYY-MM-DD')}&sort=stars&order=desc&page=1`

    try {
      this.setState({isLoading: true})
      const response = await axios.get(apiUrl)
      const repoData = response.data.items
      this.setState({repo: repoData, isLoading: false})
    } catch (error) {
      console.error(error)
      this.setState({isLoading: false})
    }
  }

  handleUserStartDateChange = date => {
    this.setState({userStartDate: date})
  }

  handleUserEndDateChange = date => {
    this.setState({userEndDate: date})
  }

  handleSearch = () => {
    this.loadRepo()
  }

  render() {
    const {repo, userStartDate, userEndDate, isLoading} = this.state

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="userStartDate">User Start Date:</label>
              <input
                type="date"
                id="userStartDate"
                className="form-control"
                value={userStartDate.format('YYYY-MM-DD')}
                onChange={e =>
                  this.handleUserStartDateChange(moment(e.target.value))
                }
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="userEndDate">User End Date:</label>
              <input
                type="date"
                id="userEndDate"
                className="form-control"
                value={userEndDate.format('YYYY-MM-DD')}
                onChange={e =>
                  this.handleUserEndDateChange(moment(e.target.value))
                }
              />
            </div>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <RepoList repo={repo} />
        {isLoading && <Loading />}
      </div>
    )
  }
}

export default App
