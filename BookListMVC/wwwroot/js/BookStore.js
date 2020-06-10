class MyBookStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

    }

    render() {
        const style = {
            backgroundColor: "#FF2D00",
            fontSize:"20px"
        }
        const date = new Date();
        const hours = date.getHours();
        let timeofday;
        if (hours < 12) {
            timeofday = "Morning";
            style.color = "white";
        } else if (hours >= 12 && hours < 17) {
            timeofday = "Afternoon";
            style.color = "red";
        } else {
            timeofday = "Night";
            style.color = "black";
        }
        return (
            React.createElement('div', timeofday, ``,
                React.createElement('p', { style},'Good ' + timeofday + '!')
            )
        );
    }
}

ReactDOM.render(
    React.createElement(MyBookStore, null),
    document.getElementById('root')
);

