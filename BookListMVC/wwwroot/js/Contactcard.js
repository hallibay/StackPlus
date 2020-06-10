//<script data-main="libs/main" src="libs/require.js"></script>
import BusinessCard from "./BusinessCard";
<script src="bundle.js"></script>
//var unique = require('BusinessCard');
class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

    }

    render() {
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
        const todoitem = {
            justifycontent: "flex-start",
            alignitems: "center",
            borderbottom: "1px solid #cecece",
            fontfamily: "Roboto, sans-serif",
            fontweight: "100",
        }
        return (
            <div style={mystyle}>
                <div style={todoitem}>
                    <img src='/image/1.jpeg' height="150px" width="150px"/>
                    <h3>Mr Package</h3>
                    <p>Phone: (212) 555-6735475</p>
                    <p>Email: Mr.package@yahoo.com </p>
                </div>
                <div style={todoitem}>
                    <img src='/image/2.jpeg' height="150px" width="150px"/>
                    <h3>Mr Manager</h3>
                    <p>Phone: (212) 555-6424789</p>
                    <p>Email: Mr.Manager@yahoo.com </p>
                </div>
                <div style={todoitem}>
                    <img src='/image/3.jpeg' height="150px" width="150px"/>
                    <h3>Mr Console</h3>
                    <p>Phone: (212) 555-2345678</p>
                    <p>Email: Mr.Console@yahoo.com </p>
                </div>
                <div style={todoitem}>
                    <img src='/image/4.jpeg' height="150px" width="150px"/>
                    <h3>Mr Explorer</h3>
                    <p>Phone: (212) 555-987654654</p>
                    <p>Email: Mr.Explorer@yahoo.com </p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    React.createElement(ToDoForm, null),
    document.getElementById('root')
);

