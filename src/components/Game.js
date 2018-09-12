import React from "react";
import PictureCard from "./PictureCard";


class nflTeam {
    constructor(src, name) {
        this.src = src;
        this.name = name;
    }
}

class Card {
    constructor(pictureCard, id) {
        this.pictureCard = pictureCard;
        this.clicked = false;
        this.id = id;
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureCards: [],
            currentScore: 0,
            bestScore: 0
        };
        this.nflTeams = [new nflTeam("http://www.teambarfinder.com/wp-content/uploads/dallas-cowboys.jpg", "Cowboys"),
        new nflTeam("http://www.advancedphysicalmedicine.org/blog/wp-content/uploads/2012/10/ny-jets-300x240.jpg", "Jets"),
        new nflTeam("http://4.bp.blogspot.com/-fyFj8SLHPSw/TxnuOca6LBI/AAAAAAAAAP0/6vqXt18yMic/s1600/Steelers.jpg", "Steelers"),
        new nflTeam("http://4.bp.blogspot.com/-ohsAayLXtP0/UelsGhS6HZI/AAAAAAAADhY/CNiE5WqCCY4/s1600/detroit-lions-logo.png", "Lions"),
        new nflTeam("http://www.ranklogos.com/wp-content/uploads/2013/07/San-Francisco-49ers-Logo.png", "49ers"),
        new nflTeam("https://i.pinimg.com/originals/e6/04/31/e604319328d3c877368569a2d70ae51a.png", "Chargers"),
        new nflTeam("http://content.sportslogos.net/logos/7/171/full/1471_green_bay_packers-alternate-1980.png", "Packers"),
        new nflTeam("http://www.tower13.com/wp-content/uploads/2013/08/cleveland_browns_logo.jpg", "Browns"),
        new nflTeam("http://4.bp.blogspot.com/-m1yF_eXsJW4/T0P5YyBCMyI/AAAAAAABL0E/H_YdW7scHn4/s1600/Chicago_Bears_Logo1.jpg", "Bears"),
        new nflTeam("https://i.pinimg.com/originals/18/86/78/1886787e87f9f0463d52d3be9ec8e7b2.jpg", "Raiders"),
        new nflTeam("http://cdn.na16.netdna-cdn.com/wp-content/uploads/2013/10/houston-texans-logo.jpg", "Texans"),
        new nflTeam("https://wallpapercave.com/wp/ojZ07Xm.jpg", "Falcons")];

        this.setClicked = this.setClicked.bind(this);

    }

    mapTeams() {
        this.nflTeams.map((item) => {
            let picturecard = (<PictureCard src={item.src} name={item.name} key={item.name} onClick={() => this.setClicked(item)} />)
            let card = new Card(picturecard, item.name);
            this.state.pictureCards.push(card);
        });
    }

    setClicked(item) {

        let picturecard = this.state.pictureCards.find((i) => {
            return i.id === item.name;
        });

        if (picturecard.clicked) {
            if (this.state.currentScore > this.state.bestScore) {
                this.setState({ bestScore: this.state.currentScore });
            }
            this.setState({ currentScore: 0 });

            this.setState({ pictureCards: [] });
        }
        else {
            picturecard.clicked = true;

            this.setState({ currentScore: this.state.currentScore + 1 });
        }
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
        if (this.state.pictureCards === null || this.state.pictureCards.length === 0) {
            this.mapTeams();
        }
        return this.shuffle(this.state.pictureCards).map((item) => item.pictureCard);

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



