import React, { Component } from 'react';
import styled from 'styled-components';

const App = ({className}) => (
  <div className={className}>
    <h1>Hi, I'm Doug</h1>
    <h2> I lived in Brisbane </h2>
    <h2> I moved to Melbourne </h2>
    <h2> I'm a software developer at Thoughtworks </h2>
    <h2> I do improv comedy at The Improv Conspiracy </h2>
    <h2> I also like to make projects like this and this </h2>
    <h2> I also like to make music </h2>
    <h2> I sometimes write articles </h2>
    <h2> I've written some articles at The Manufacturer </h2>
    <h3> I'm on LinkedIn, Twitter, Facebook, and Instagram </h3>
  </div>
)

export default styled(App)`
  margin: auto;
  padding: 5em;
  max-width: 700px;
` ;
