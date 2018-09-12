import React from "react";
import "./pictureCard.css";

class PictureCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: null,
            name: null
        };
    }

    render() {
        return (
            <button>
                <img className="pictureCard" src={this.props.src} alt={this.props.name} onClick={() =>
                    this.props.onClick()
                } />
            </button>
        );
    }
}

export default PictureCard;
