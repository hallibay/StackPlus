'use strict';
class BusinessCard extends React.Component {
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
                    <img src='/image/1.jpeg' height="150px" width="150px" />
                    <h3>Mr Package</h3>
                    <p>Phone: (212) 555-6735475</p>
                    <p>Email: Mr.package@yahoo.com </p>
                </div>
                
            </div>
        );
    }
}
export default BusinessCard

