import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { EDIT_PROFILE } from '../utils/mutations';

const EditProfile = () => {
    const [formState, setFormState] = useState({
        age: '',
        levels: ''
    });

    const [formGoals, setGoals] = useState([]);

    const [editProfile, { error, data }] = useMutation(EDIT_PROFILE);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });

    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await editProfile({
                variables: { ...formState },
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Card style={{ width: '50%' }}>
            <Card.Body>
                <Card.Title>Edit Profile</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>
                            Age
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" value={formState.levels} onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>
                            Levels
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" value={formState.levels} onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>
                            Goals
                        </Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Add Goals"
                                aria-label="Add-Goals"
                                aria-describedby="basic-addon2"
                            />
                            <button variant="outline-secondary" id="button-addon2" className="add-goal">
                                Add Goal
                            </button>
                        </InputGroup>
                    </Form.Group>
                    <Link
                        className="button-link secondary"
                        to={`/editprofile/`}
                    >Submit</Link>
                </Form>
            </Card.Body>
        </Card>
    )
};

export default EditProfile;