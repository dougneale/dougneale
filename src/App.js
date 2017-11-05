import React from 'react';
import styled from 'styled-components';

const App = ({className}) => (
  <div className={className}>
    <h1> I'm Doug Neale <span role="img" aria-label="handshake">🤝</span></h1>
    <hr />
    <h2> I'm a technologist at <a href="https://www.thoughtworks.com/about-us">ThoughtWorks <span role="img" aria-label="male technologist">👨‍💻</span></a></h2>    
    {/* <h2> I lived in Brisbane<span role="img" aria-label="sun">🌞</span> I moved to Melbourne <span role="img" aria-label="tram">🚋</span></h2> */}
    <h2> I do improv comedy at <a href="http://improvconspiracy.com">The Improv Conspiracy <span role="img" aria-label="drama">🎭</span></a></h2>
    <h2> I create <a href="https://www.youtube.com/channel/UCVzstBi1Nf5DTlBoc2ioRYg/videos">sketch videos <span role="img" aria-label="camcorder">📹</span></a> and produce <a href="https://soundcloud.com/doug-neale">music <span role="img" aria-label="musical keyboard">🎹</span></a> </h2>
    <h2> I also like to tinker on <a href="https://github.com/dneale">projects <i className="em em-octocat"></i></a> like <a href="http://convergence.dougneale.com">Convergence With A Computer <span role="img" aria-label="robot face">🤖</span></a></h2>
    <h2> I've written some articles <a href="https://www.themanufacturer.com/author/doug-neale/">at The Manufacturer <span role="img" aria-label="newspaper">📰</span></a></h2>
    <h3> Find me on 
      <a href="https://twitter.com/dougneale"> Twitter</a>,     
      <a href="https://www.linkedin.com/in/dougneale"> LinkedIn</a>, 
      <a href="https://www.facebook.com/dougneale"> Facebook</a>, and 
      <a href="https://www.instagram.com/thedouglyf/"> Instagram </a>
    </h3>
  </div>
)

export default styled(App)`
  margin: auto;
  padding: 5em;

  @media screen and (max-width: 720px) {
    padding: 1em 3em;
  }
  max-width: 800px;
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
