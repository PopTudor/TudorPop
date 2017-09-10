import React from 'react';
import ReactDOM from 'react-dom';

// injectTapEventPlugin();

class App extends React.Component {
    render() {
        return (
            <p>
                Hello world!
            </p>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));