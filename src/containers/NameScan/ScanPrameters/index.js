import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';
import Button from '../../../components/uielements/button';
import Card from './card.style';
import basicStyle from '../../../config/basicStyle';
import Box from '../../../components/utility/box';
import { CheckboxGroup } from '../../../components/uielements/checkbox';
import { Slider } from 'antd';
import { rtl } from '../../../config/withDirection';

class ScanPrameters extends Component {

  handleOnChange = checkedValues => { };

  render() {
    const plainOptions = ['All', 'PEP', 'Sanction'];
    const marks = {
      0: '0%',
      100: '100%(exact)'
    };
    const margin = {
      margin: rtl === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0'
    };
    const { rowStyle, colStyle, gutter, marginbttm40 } = basicStyle;
    return (
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          <ContentHolder>
            <Card
              title={<IntlMessages id="namescan.scanParameters" />}
              style={{ width: '100%' }}
            >
              <Box>
                <Row style={marginbttm40}>
                  <Col span={4}>
                    <h3><IntlMessages id="namescan.scanParameters.scanCategories" /></h3>
                  </Col>
                  <Col span={20}>
                    <CheckboxGroup
                      options={plainOptions}
                      defaultValue={['All', 'PEP', 'Sanction']}
                      onChange={this.handleOnChange}
                    />
                  </Col>
                </Row><br />
                <Row>
                  <Col span={4}>
                    <h3><IntlMessages id="namescan.scanParameters.matchRate" /></h3>
                  </Col>
                  <Col span={20}>
                    <Slider marks={marks} defaultValue={20} />
                  </Col> <br/>
                  <Col offset={11}>
                    <Button onClick={this.props.onClick} type="primary" style={margin}>
                      {<IntlMessages id="namescan.scanParameters.scannow" />}
                    </Button>
                  </Col>
                </Row>
              </Box>
            </Card>
          </ContentHolder>
        </Col>
      </Row>
    );
  }
}

export default ScanPrameters;