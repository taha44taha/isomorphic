import React, { Component } from 'react';
import { ContactCardWrapper } from './contactCard.style';
import { Row, Col } from 'antd';
import Box from '../../../components/utility/box';

export default class Comments extends Component {
  render() {
    const name = 'Janice Jones';
    const value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum facilis tenetur a voluptatibus quia deserunt.'
    const scanInfo = [
      'scanID: s223232',
      'scanTerms: DavidCameron'
    ];
    const extraInfos = (
      <div className="isoContactCardInfos">
        <p className="isoInfoDetails">
          {value}
        </p>
      </div>
    );
    const avatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/benefritz/128.jpg';
    return (
      <ContactCardWrapper className="isoContactCard">        
        <Box>
          <Col md={3}>
            <div className="isoPersonImage">
              <img alt="#" src={avatar} />
            </div>
          </Col>
          <Col className="isoPersonName" md={20}>
            <h1>
              {name}
            </h1>
            <p className="isoInfoLabel">
              {scanInfo[0]} <br />
              {scanInfo[1]}
            </p>
          </Col>
          <Col md={24}>
            <div className="isoContactInfoWrapper">
              {extraInfos}
            </div>
          </Col>
        </Box>
      </ContactCardWrapper>
    );
  }
}
