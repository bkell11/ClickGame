import React from "react";
import ReactDOM from 'react-dom';
import App from '../App';

class PictureCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            src: null,
            name: null
        };
    }
    setClicked() {

        this.setState({ clicked: true });
        ReactDOM.render(<App />, document.getElementById('root'));

    }

    render() {
        return (
            <button
                className="pictureCard"
            >
                <img src={this.props.src} alt={this.props.name} onClick={() => this.setClicked()}
                />
            </button>
        );
    }
}

export default PictureCard;
