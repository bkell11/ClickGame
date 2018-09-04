import React from "react";
import PictureCard from "./PictureCard";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureCards: Array(12).fill(null),
            currentScore: 0,
            bestScore: 0
        };
    }
    renderPictureCard(i) {
        return <PictureCard src="http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg" name={i} />;
    }
    render() {
        return (
            <div>
                <div className="container">
                    {this.renderPictureCard(0)}
                    {this.renderPictureCard(1)}
                    {this.renderPictureCard(2)}
                    {this.renderPictureCard(3)}
                    {this.renderPictureCard(4)}
                    {this.renderPictureCard(5)}
                    {this.renderPictureCard(6)}
                    {this.renderPictureCard(7)}
                    {this.renderPictureCard(8)}
                    {this.renderPictureCard(9)}
                    {this.renderPictureCard(10)}
                    {this.renderPictureCard(11)}
                </div>
            </div>
        );
    }
}

export default Game;



