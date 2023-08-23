// import React from 'react' // Import React
import ReactDOM from 'react-dom'
import App from './Containers/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
