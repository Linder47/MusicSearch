import React from 'react';
import './UserSearch.css';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col, Row } from 'react-bootstrap';

const UserSearch = (props) => {
    return (
        <div className='form'>
            <Form horizontal onSubmit={props.onAddSearch}>
                <FormGroup controlId='formHorizontalSearch'>
                    <Row className="form__input">
                        <Col className="form__search-label-col" componentClass={ControlLabel} sm={2}>
                            <p className="form__search-label">Поиск:</p>
                        </Col>
                        <Col sm={8}>
                            <FormControl
                                className="form__form-control"
                                type='text'
                                value={props.value}
                                maxLength="60"
                                onChange={(e) => { props.onAddTextChange(e.target.value) }} />
                        </Col>
                        <Col className="form__button-col" sm={2}>
                            <Button className="form__button" type='submit'>
                                Искать</Button>
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
        </div>
    )
}

export default UserSearch;