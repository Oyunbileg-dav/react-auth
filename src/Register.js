import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export default function Register(){
    // Initial state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        // set configurations 
        const configuration = {
            method: "post",
            url: "http://localhost:9000/register",
            data: {
                email,
                password
            },
        };
        // make the API call
        axios(configuration)
            .then((result) => {
                // redirect user to the auth page
                window.location.href = "/";

                setRegister(true);
            })
            .catch((error) => {
                error = new Error();
            })

      }
    return (
        <>
        <div className='content'>
        <h2 className='word'>Start your learning today!</h2>
        <Form onSubmit={(e)=>handleSubmit(e)} style={{color:'white'}}>
            {/* email */}
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email" 
            />
            </Form.Group>

            {/* password */}
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" />
            </Form.Group>

            {/* submit button */}
            <Button className="btn" variant="secondary" type="submit" onClick={(e) => handleSubmit(e)} style={{backgroundColor:'#232323'}}>
            Sign Up
            </Button>
            {/* display success message */}
            {register ? (
            <p className="text-success">You are registered successfully!</p>
            ) : (
            <p className="text-danger">You are not registered</p>
            )}

        </Form>
        </div>

        </>
    )
}