import React from 'react';
import './App.css';

// The back of the cards
const POKEBALL = "http://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest"
// The front of the cards
const BULBASAUR = "http://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png"
const CHARMANDER = "http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/600px-004Charmander.png"
const SQUIRTLE = "http://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png"
const PIKACHU = "http://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"
const JIGGLYPUFF = "http://cdn.bulbagarden.net/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png"
const ABRA = "http://cdn.bulbagarden.net/upload/6/62/063Abra.png"
const GYARADOS = "http://cdn.bulbagarden.net/upload/4/41/130Gyarados.png"
const MEWTWO = "http://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png"

// shuffle function found on stack overflow
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

let oneset = [BULBASAUR, CHARMANDER, SQUIRTLE, PIKACHU, JIGGLYPUFF, ABRA, GYARADOS, MEWTWO]
let cards = oneset.concat(oneset)
let randomized = shuffle(cards)

class Concentration extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: randomized.map((elem, index) => {
        return (
          <Card 
            ref="child" 
            clicked={this.choose.bind(this)} 
            imglink={elem} 
            index={index} 
            key={index} />
        )
      }),
      score: 0,
      current1: ["", 0],
      current2: ["", 0],
      count: 0
    }
  }
  choose(img, index) {
    let currentCount = this.state.count + 1;
    if (this.state.count % 2 === 0){
      this.setState({
        current1: [img, index],
        count: currentCount
      })
    } else {
      this.setState({
        current2: [img, index],
        count: currentCount
      })
      setTimeout(() => {
        if (this.state.current1[0] === this.state.current2[0]) {
          let currentScore = this.state.score + 1;
          this.setState({
            score: currentScore
          })
        } else {
          this.refs.child.hide()
        }
      }, 200)
    }
  }
  render() {
  	return (
      <div id="container">
        {this.state.cards}
        <h1>score: {this.state.score}</h1>
      </div>
    )
  }
}

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      face: false,
      correct: false
    }
    this.show = this.show.bind(this);
  }
  show() {
    this.setState({
      face: true
    })
    this.props.clicked(this.props.imglink, this.props.index)
  }
  hide(){
    console.log("wtf")
    this.setState({
      face: false
    })
  }
  render() {
    return (
      <div>
      {(this.state.face) ? <img name={this.props.index} src={this.props.imglink} alt="" /> : <img name={this.props.index} onClick={this.show} src={POKEBALL} alt="" />}
      </div>
    )
  }
}

export default Concentration;