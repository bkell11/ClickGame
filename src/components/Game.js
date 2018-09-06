import React from "react";
import PictureCard from "./PictureCard";

class nflTeam {
    constructor(src, name) {
        this.src = src;
        this.name = name;
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureCards: Array(12).fill(null),
            currentScore: 0,
            bestScore: 0
        };
        this.nflTeams = [new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys1"),
        new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys2"),
        new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys3"),
        new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys4"),
        new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys5"),
        new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys6"),
        new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys7"),
        new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys8"),
        new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys9"),
        new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys10"),
        new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys11"),
        new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys12")];

        this.mapTeams();

    }

    mapTeams() {
        this.nflTeams.map((item) => {
            let picturecard = (<PictureCard src={item.src} name={item.name} key={item.name} />)
            this.state.pictureCards.push(picturecard);
        });
    }

    handleClick() {
        //Check to see is the item has been clicked
        //If it has then reset ie. this.mapTeams() set best score clear currentscore
        // if not then add one to current score
        //redraw to show the changes.
    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    renderPictureCards() {

        return this.shuffle(this.state.pictureCards).map((item) => item);

    }
    render() {
        return (
            <div>
                <div className="container">
                    {this.renderPictureCards()}
                </div>
            </div>
        );
    }
}

export default Game;



