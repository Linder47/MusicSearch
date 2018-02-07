import React from 'react';
import './UserSearch.css';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';

const UserSearch = (props) => {
    return (
        <div className='UserSearchForm'>
            <Form horizontal onSubmit={props.onAddSearch}>
                <FormGroup controlId='formHorizontalSearch'>
                    <Col componentClass={ControlLabel} sm={2}>
                        Поиск:
                </Col>
                    <Col sm={6}>
                        <FormControl
                            type='text'
                            value={props.value}
                            onChange={(e) => { props.onAddTextChange(e.target.value) }} />
                    </Col>
                    <Col sm={2}>
                        <Button type='submit'>
                            Искать {props.value}</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default UserSearch;