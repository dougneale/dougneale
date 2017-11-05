import React from 'react';
import styled from 'styled-components';

const App = ({className}) => (
  <div className={className}>
    <h1> I'm Doug Neale 🤝</h1>
    <hr />
    <h2> I'm a technologist <i>👨‍💻</i> at <a href="https://www.thoughtworks.com/about-us">Thoughtworks</a></h2>    
    <h2> I lived in Brisbane<i>🌞</i> I moved to Melbourne <i>🚋</i></h2>
    <h2> Then I started doing improv comedy at <a href="http://improvconspiracy.com">The Improv Conspiracy <i>🎭</i></a></h2>
    <h2> I create <a href="https://www.youtube.com/channel/UCVzstBi1Nf5DTlBoc2ioRYg/videos">sketch videos <i>📹</i></a> and produce <a href="https://soundcloud.com/doug-neale">music <i>🎹</i></a> </h2>
    <h2> I also like to tinker on <a href="https://github.com/dneale">projects</a> like <a href="http://convergence.dougneale.com">Convergence With A Computer <i>🤖</i></a></h2>
    <h2> I've written <a href="https://www.themanufacturer.com/author/doug-neale/">some articles <i>⌨️</i></a> at The Manufacturer </h2>
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
  max-width: 800px;
  h1 {
    font-size: 5em;
    margin: 0;
  }
  h2 {
    font-size: 1.4em;
    margin-bottom: 1em;
  }
  a {
    text-decoration: none;
    color: navy;

    &:hover {
      text-decoration: underline;
    }
  }
  i {
    font-style: normal;
    font-size: 1.5em
  }

  hr {
    border: solid #CCC 2px;
  }
` ;
