import React from "react";

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
            <button
                className="pictureCard"
            >
                <img src={this.props.src} alt={this.props.name} onClick={() =>
                    this.props.onClick()
                } />
            </button>
        );
    }
}

export default PictureCard;
