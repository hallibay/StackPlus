class MyData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

    }

//     <div>
////            <h1>God's kenny</h1>
////            <p>This is a paragraph about me....</p>
////            <ul>
////                <li>Canada</li>
////                <li>UK</li>
////                <li>US</li>
////            </ul>
////        </div>
   

    render() {
        return (
            React.createElement('div', null, ``,
                React.createElement('h1', {}, 'God_s kenny'),
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