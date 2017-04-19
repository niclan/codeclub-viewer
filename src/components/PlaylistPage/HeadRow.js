import React, {PropTypes} from 'react';
import {capitalize} from '../../util';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import CourseInfo from './CourseInfo';

const HeadRow = React.createClass({
  render() {
    return (
      <Row>
        <Col xs={12} sm={9} smOffset={3}>
          <h1>{capitalize(this.props.courseName)} Oppgaver &nbsp;
            <Button bsSize="large">Start her!</Button>
            <CourseInfo courseName={this.props.courseName}/>
          </h1>
        </Col>
      </Row>
    );
  }
});

HeadRow.propTypes = {
  courseName: PropTypes.string
};

export default HeadRow;
