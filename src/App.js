import React from 'react';
import styled from 'styled-components';

const App = ({className}) => (
  <div className={className}>
    <h1>Hi, I'm Doug</h1>
    <h2> I'm a software developer at <a href="thoughtworks.com">Thoughtworks</a> </h2>    
    <h2> I lived in Brisbane, I moved to Melbourne </h2>
    <h2> Then I started doing Improv Comedy at <a href="improvconspiracy.com">The Improv Conspiracy</a></h2>
    <h2> I also like to make projects like <a href="convergence.dougneale.com">Convergence With A Computer</a> </h2>
    <h2> I also like to make sketch videos and music </h2>
    <h2> I've written some articles at The Manufacturer </h2>
    <h3> I'm on LinkedIn, Twitter, Facebook, and Instagram </h3>
  </div>
)

export default styled(App)`
  margin: auto;
  padding: 5em;
  max-width: 700px;
  h1 {
    font-size: 5em;
  }
` ;
