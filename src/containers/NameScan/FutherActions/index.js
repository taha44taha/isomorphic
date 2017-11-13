import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';
import { InputGroup, Textarea } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
import Card from './card.style';
import basicStyle from '../../../config/basicStyle';
import Button from '../../../components/uielements/button';
import { rtl } from '../../../config/withDirection';
import Comments from './comments';
const Option = SelectOption;

class FutherActions extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const margin = {
      margin: rtl === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0'
    };
    return (
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          <ContentHolder>
            <Card
              title={<IntlMessages id="namescan.futherActions" />}
              style={{ width: '100%' }}
            >
              <InputGroup compact style={{ marginBottom: '15px' }}>
                <Col md={4} sm={5} xs={8}>
                  <h3><Icon type="desktop" /> <IntlMessages id="namescan.futherActions.ongoingMonitoring" /></h3>
                </Col>
                <Col md={20} sm={19} xs={16}>
                  <Select defaultValue="Off" style={{ width: '33%' }}>
                    <Option value="Off">Off</Option>
                    <Option value="monthly">Monthly</Option>
                    <Option value="3month">Every 3 Months</Option>
                    <Option value="6month">Every 6 Months</Option>
                    <Option value="Year">Every Year</Option>
                  </Select>
                </Col>
              </InputGroup>
              <InputGroup compact style={{ marginBottom: '15px' }}>
                <Col md={4} sm={5} xs={8}>
                  <h3><Icon type="dingding" /><IntlMessages id="namescan.risk" /></h3>
                </Col>
                <Col md={20} sm={19} xs={16}>
                  <Select defaultValue="unknown" style={{ width: '33%' }}>
                    <Option value="unknown">Unknown</Option>
                    <Option value="low">Low</Option>
                    <Option value="medium">Medium</Option>
                    <Option value="high">High</Option>
                  </Select>
                </Col>
              </InputGroup>
              <InputGroup compact style={{ marginBottom: '15px' }}>
                <Col md={4} sm={5} xs={8} style={{ verticalAlign: 'top' }}>
                  <h3><Icon type="message" /><IntlMessages id="namescan.comment" /></h3>
                </Col>
                <Col md={20} sm={19} xs={16}>
                  <Textarea rows={6} style={{ width: '60%' }} placeholder="Type Something" />
                </Col>
              </InputGroup>
              <Col span={2} offset={11} style={{ padding: '20px 0' }}>
                <Button onClick={this.props.onClick} type="primary" style={margin}>
                  {<IntlMessages id="namescan.futherActions.save" />}
                </Button>
              </Col>
              <br />
              <Col span={20} offset={2}>
                <h3><Icon type="message" /><IntlMessages id="namescan.comment" /></h3><br/>
                <Comments />
              </Col>
            </Card>
          </ContentHolder>
        </Col>
      </Row>
    );
  }
}

export default FutherActions;