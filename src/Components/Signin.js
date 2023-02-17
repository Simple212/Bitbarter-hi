import React from "react";  
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './signin.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Signin = ({backtosignup,binance,gologin,signinpassword,signinemail,value1500,value1503,signinpassword2}) =>{
    return (
		<div>
		<Container>
            <article class="mw6 mt-5 mb-5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-3">
                   <Form>
                   <h5 className='b f3 mt-2'>बिटबार्टर में लॉग इन करें</h5>
                    <hr className='mb-4 mt-0' />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='b f6'>ई-मेल</Form.Label>
                        <Form.Control className='p-3 f5 input101' onChange={signinemail} type="email" placeholder="अपना ई-मेल पता दर्ज करें" />
                        <p className='b text-red text-center tc para3000 mt-2' style={{'display':`${value1500}`}} >कृप्या एक वैध ई-मेल पता दर्ज करें</p>
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicPassword">
                        <Form.Label className='b f6'>पासवर्ड</Form.Label>
                        <Form.Control className='p-3 f5 input101' type="password" onBlur={signinpassword2} onFocus={signinpassword} onChange={signinpassword} placeholder="अपना पासवर्ड दर्ज करें" />
                        <p className='b text-red text-center tc para3000 mt-2' style={{'display':`${value1503}`}} >कृप्या एक पासवर्ड दर्ज करें</p>
                    </Form.Group>
                    <Button className='b tc d-flex justify-content-center align-items-center w-100 flex-row btn100 p-2' onClick={gologin} >
                       लॉग इन
                    </Button>
                    <Row className='tc mt-3'>
                        <Col className='col-md-12'>
                            <a onClick={backtosignup}  className='b anchor_t'>साइनअप करें</a>
                        </Col>
                    </Row>
                    <Row className='tc mt-3'>
                        <Col className='col-md-12'>
                            <a href='https://www.google.com' className='b anchor_t'>पासवर्ड भूल गए ?</a>
                        </Col>
                    </Row>

                    </Form>
                </article>
             
                </Container>
                
          
                </div>
                
    )
}

export default Signin
