var React = require('react');
var Joke = require('./Joke.js');

function JokeIndex(props) {

    return (
        <div>
            <Joke />
            <Joke />
            <Joke />
            <Joke />
            <Joke />
        </div>
    );
}

ReactDOM.render(
    React.createElement(JokeIndex, null),
    document.getElementById('root')
);
