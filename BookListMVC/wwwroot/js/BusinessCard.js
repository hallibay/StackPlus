var React = require('react');
var Chat = require('./Chat.js');


function BusinessCard() {
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
            <Chat
                name="Mr Manager"
                imgUrl="/image/1.jpeg"
                phone="(212) 555-6734977"
                email="mr.manager@gmail.com"
            />
            <Chat
                name="Mr Console"
                imgUrl="/image/2.jpeg"
                phone="(212) 555-6734977"
                email="mr.Console@gmail.com"
            />
            <Chat
                name="Mr Explorer"
                imgUrl="/image/3.jpeg"
                phone="(212) 555-6734977"
                email="mr.Explorer@gmail.com"
            />
            <Chat
                name="Mr Package"
                imgUrl="/image/4.jpeg"
                phone="(212) 555-6734977"
                email="mr.Package@gmail.com"
            />


        </div>
    );
}

ReactDOM.render(
    React.createElement(BusinessCard, null),
    document.getElementById('root')
);

//module.exports = BusinessCard;
