import React from 'react';
import './UserSearch.css';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col, Row } from 'react-bootstrap';

const UserSearch = (props) => {
    return (
        <div className='user-search-form'>
            <Form horizontal onSubmit={props.onAddSearch}>
                <FormGroup controlId='formHorizontalSearch'>
                    <Row className="user-search-form__row-input">
                        <Col className="user-search-form__row-search-label-col" componentClass={ControlLabel} sm={2}>
                            <p className="user-search-form__row-search-label-col">Поиск:</p>
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                className="user-search-form__row-form-control"
                                type='text'
                                value={props.value}
                                maxLength="60"
                                onChange={(e) => { props.onAddTextChange(e.target.value) }} />
                        </Col>
                        <Col className="user-search-form__row-button-col" sm={2}>
                            <Button className="user-search-form__row-button" type='submit'>
                                Искать</Button>
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
        </div>
    )
}

export default UserSearch;