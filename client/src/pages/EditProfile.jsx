import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { EDIT_PROFILE } from '../utils/mutations';


const EditProfile = () => {
    const { profileId } = useParams();
    console.log(profileId);
    const [formState, setFormState] = useState({
        profileId: profileId,
        age: '',
        levels: ''
    });

    const [formGoals, setGoals] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const addGoal = (event) => {
        event.preventDefault();
        if (inputValue !== "") {
            const updatedGoals = [...formGoals, inputValue];
            setGoals(updatedGoals);
            setFormState({
                ...formState,
                goals: updatedGoals
            });
            setInputValue('');
        }
    }

  const [editProfile, { error, data }] = useMutation(EDIT_PROFILE);

    const handleChange = (event) => {
        let { name, value } = event.target;
        if (name === "age") {
            value = parseInt(value);
        }
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
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicNumeric">
                        <Form.Label>
                            Age
                        </Form.Label>
                        <Col>
                            <Form.Control type="numeric" name="age" value={formState.age} onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>
                            Levels
                        </Form.Label>
                        <Col>
                            <Form.Control type="text" name="levels" value={formState.levels} onChange={handleChange} />
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
                                value={inputValue}
                                name="goals"
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button variant="outline-secondary" id="button-addon2" className="bg-primary" onClick={addGoal}>
                                Add Goal
                            </button>
                        </InputGroup>
                    </Form.Group>
                    <ul>
                        {formGoals.map((goal, index) => (
                            <li key={index}>{goal}</li>
                        ))}
                    </ul>
                    <button
                        className="button-link bg-primary">Submit</button>
                </Form>
            </Card.Body>
        </Card>
    )
};

export default EditProfile;
