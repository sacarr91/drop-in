import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Form, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { EDIT_PROFILE } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const EditProfile = () => {
    const { loading: loadingMe, data: myData } = useQuery(QUERY_ME);
    const me = myData?.me || {};

    const [formState, setFormState] = useState({
        profileId: '',
        name: '',
        age: '',
        levels: '',
        goals: []
    });

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (me) {
            setFormState({
                profileId: me._id,  
                name: me.name || '',
                age: me.age || '',
                levels: me.levels || '',
                goals: me.goals || []
            });
        }
    }, [me]);

    const [editProfile, { error }] = useMutation(EDIT_PROFILE);

    const handleChange = (event) => {
        const { name, value } = event.target;
        // Convert age to integer if it's being changed
        if (name === 'age') {
            setFormState({
                ...formState,
                [name]: parseInt(value, 10) || '' // Convert to integer
            });
        } else {
            setFormState({
                ...formState,
                [name]: value
            });
        }
    };

    const addGoal = (event) => {
        event.preventDefault();
        if (inputValue !== "") {
            setFormState({
                ...formState,
                goals: [...formState.goals, inputValue]
            });
            setInputValue('');
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await editProfile({
                variables: { 
                    profileId: formState.profileId,  
                    name: formState.name,
                    age: formState.age,
                    levels: formState.levels,
                    goals: formState.goals
                }
            });
            // Redirect or show success message
            window.location.href = `/profiles/${formState.profileId}`;
        } catch (e) {
            console.error(e);
        }
    };

    if (loadingMe) {
        return <p>Loading...</p>;
    }

    return (
        <Card style={{ width: '50%' }}>
            <Card.Body>
                <Card.Title>Edit Profile</Card.Title>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formState.name || ''}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                name="age"
                                value={formState.age}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Level</Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                name="levels"
                                value={formState.levels}
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Goals</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Add Goals"
                                aria-label="Add-Goals"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <Button
                                variant="outline-secondary"
                                id="button-addon2"
                                onClick={addGoal}
                            >
                                Add Goal
                            </Button>
                        </InputGroup>
                    </Form.Group>
                    <ul>
                        {formState.goals.map((goal, index) => (
                            <li key={index}>{goal}</li>
                        ))}
                    </ul>
                    <Button
                        type="submit"
                        className="button-link bg-primary"
                    >
                        Submit
                    </Button>
                    {error && <p className="text-danger">An error occurred. Please try again.</p>}
                </Form>
            </Card.Body>
        </Card>
    );
};

export default EditProfile;
