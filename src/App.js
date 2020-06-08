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
    <h2> Doug Neale</h2>
    <p> 
      I'm an existential engineer, writer and comedian. I care about extreme programming, technology’s impact on society, and the future of software development. Currently writing for Honeypot's .cult
    </p>
    <p> 
      You can find me on Twitter,  LinkedIn and Facebook
    </p>
    <p> 
      You can also sign up to my mailing list below for updates on upcoming works.
    </p>
    
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
