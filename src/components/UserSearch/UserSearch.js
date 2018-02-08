import React from 'react';
import './UserSearch.css';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col, Row } from 'react-bootstrap';

const UserSearch = (props) => {
    return (
        <div className='UserSearchForm'>
            <Form horizontal onSubmit={props.onAddSearch}>
                <FormGroup controlId='formHorizontalSearch'>
                <Row className="rowInput">
                    <Col componentClass={ControlLabel} sm={2}>
                        <p>Поиск:</p>
                </Col>
                    <Col sm={7}>
                        <FormControl
                            type='text'
                            value={props.value}
                            maxLength="60"
                            onChange={(e) => { props.onAddTextChange(e.target.value) }} />
                    </Col>
                    <Col sm={3}>
                        <Button type='submit'>
                            Искать</Button>
                    </Col>
                    </Row>
                </FormGroup>
            </Form>
        </div>
    )
}

export default UserSearch;