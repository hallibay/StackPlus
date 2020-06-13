var React = require('react');
var Joke = require('./Joke.js');
var JokesData = require('./jokesData.js');

function JokeIndex(props) {
    const jokeComponents = JokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    const mystyle = {
        backgroundColor: "white",
        margin: "auto",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignitems: "center",
        border: "1px solid #efefef",
        boxshadow:
            "0 1px 1px rgba(0, 0, 0, 15), 0 10px 0 -5px #eee,0 10px 1px - 4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px - 9px rgba(0,0,0,0.15)",
        padding: "30px"
    };
    return (
        <div style={mystyle}>
            {jokeComponents}
        </div>
    );
}

ReactDOM.render(
    React.createElement(JokeIndex, null),
    document.getElementById('root')
);
