import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-50 mx-auto">
      <div>
        <div className="card bg-card">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <label
                  for="username">
                  Username
                </label>
                <input
                  className="form-control"
                  id="username"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <label
                  for="email">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <label
                  for="password">
                  Password
                </label>
                <input
                  className="form-control"
                  id="password"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <label className="form-check-label">Role</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="role" value="skater" checked={formState.role === 'skater'} onChange={handleRadioChange} />
                  <label className="form-check-label">Skater</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="role" value="sponsor" checked={formState.role === 'sponsor'} onChange={handleRadioChange} />
                  <label className="form-check-label">Sponsor</label>
                </div>
                <button className="btn formbtn"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
            {error && (
              <section className="">
                {error.message}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
