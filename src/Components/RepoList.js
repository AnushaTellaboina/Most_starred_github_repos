// Make sure you have this import statement
import PropTypes from 'prop-types'
import Repo from './Repo' // Make sure you import the Repo component

const RepoList = ({repo}) => (
  <div>
    {repo.map(item => (
      <Repo
        key={item.id}
        avatar_url={item.owner.avatar_url}
        owner={item.owner.login}
        name={item.name}
        html_url={item.html_url}
        description={item.description}
        stargazers_count={item.stargazers_count}
        open_issues_count={item.open_issues_count}
        created_at={item.created_at}
      />
    ))}
  </div>
)

RepoList.propTypes = {
  repo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      description: PropTypes.string,
      stargazers_count: PropTypes.number.isRequired,
      open_issues_count: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default RepoList
