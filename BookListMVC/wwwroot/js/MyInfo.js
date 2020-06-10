class MyData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

    }


    render() {
        return (
            React.createElement('div', null, ``,
                React.createElement('h1', { style: { color: "red",background:"purple" }, id: 'someId', className: "navbar" }, 'God_s kenny'),
                React.createElement('p', {}, 'This is a paragraph about me....'),
                React.createElement('li', { id: 'li1' }, 'Canada'),
                React.createElement('li', { id: 'li1' }, 'UK'),
                React.createElement('li', { id: 'li1' }, 'US')
            )
        );
    }
}

ReactDOM.render(
    React.createElement(MyData, null),
    document.getElementById('root')
);

