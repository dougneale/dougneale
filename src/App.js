import React from 'react';
import styled from 'styled-components';

const links = {
  standup: 'https://www.facebook.com/futuredoug/',
  improv: 'https://improvconspiracy.com/performers/doug-neale',
  ld50s: 'https://www.instagram.com/ld50s/',
  videos: 'https://vimeo.com/dougneale',
  songs: 'https://soundcloud.com/doug-neale',
  convergence: 'http://convergence.dougneale.com',
  manufacturer: 'https://www.themanufacturer.com/author/doug-neale/',
  tribeArticles: 'https://www.tribegroup.co/blog/author/doug-neale?',
  tribe: 'https://www.tribegroup.co',
  twitter: 'https://twitter.com/dougneale',
  linkedin: 'https://www.linkedin.com/in/dougneale',
  facebook: 'https://facebook.com/dougneale',
  instagram: 'https://instagram.com/dougneale'
}

const App = ({className}) => (
  <div className={className}>
    <h2>Hi I'm Doug Neale <span role="img" aria-label="emoji">🤝</span> and I...</h2>
    <h3>...do <a href={links.standup}>stand up</a> and <a href={links.improv}>improv</a> comedy in Melbourne. <span role="img" aria-label="emoji">🎭</span> </h3>
    <h3>...make <a href={links.videos}>videos</a> <span role="img" aria-label="emoji">📹</span> </h3>
    <h3>...write <a href={links.songs}>songs</a> and play drums for the <a href={links.ld50s}>LD50's</a> <span role="img" aria-label="emoji">🎹</span></h3>
    <h3>...write articles like <a href={links.tribeArticles}>these</a> and <a href={links.manufacturer}>these</a> <span role="img" aria-label="emoji">📰</span></h3>
    <h3>...am a <a href={links.linkedin}>software developer</a> at <a href={links.tribe}>Tribe</a> <span role="img" aria-label="emoji">💻</span></h3>
    <h3>...created a game called <a href={links.convergence}>Convergence with a Computer </a><span role="img" aria-label="emoji">🤖</span></h3>
    <h3>...have <a href={links.facebook}>facebook</a>, <a href={links.instagram}>instagram</a> and <a href={links.twitter}>twitter</a> </h3>
  </div>
)

export default styled(App)`
  margin: auto;
  padding: 5em;

  @media screen and (max-width: 720px) {
    padding: 1em 3em;
  }
  max-width: 900px;
  h1 {
    font-size: 5em;
    margin: 0;

    & span {
      font-size: 1em;
    }

    @media screen and (max-width: 720px) {
      font-size: 3em;
    }
  }
  h2 {
    font-size: 1.4em;
    margin-bottom: 1em;
    @media screen and (max-width: 720px) {
      font-size: 1.2em;
    }
  }
  a {
    text-decoration: none;
    color: navy;

    &:hover {
      text-decoration: underline;
    }
  }
  span {
    font-size: 1.5em
  }

  hr {
    border: solid #CCC 2px;
  }
` ;
