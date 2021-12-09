import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  CustomInput,
  Spinner
  } from 'reactstrap'

  const GeneralSettings = () => {
  
    return (
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>SMTP Configuration</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
                <Col className='mb-1' md='6' sm='12'>
                    <FormGroup>
                    <Label for='MAIL-HOST'>MAIL HOST</Label>
                    <Input type='text' id='MAIL-HOST' placeholder='Enter Your MAIL HOST' />
                    </FormGroup>
                </Col>
                <Col className='mb-1' md='6' sm='12'>
                    <FormGroup>
                    <Label for='MAIL-PORT'>MAIL PORT</Label>
                    <Input type='text' id='MAIL-PORT' placeholder='Enter Your MAIL PORT' />
                    </FormGroup>
                </Col>
                <Col className='mb-1' md='6' sm='12'>
                    <FormGroup>
                    <Label for='MAIL-USERNAME'>MAIL USERNAME</Label>
                    <Input type='text' id='MAIL-USERNAME' placeholder='Enter Your MAIL USERNAME' />
                    </FormGroup>
                </Col>
                <Col className='mb-1' md='6' sm='12'>
                    <FormGroup>
                    <Label for='MAIL-PASSWORD'>MAIL PASSWORD</Label>
                    <Input type='password' id='MAIL-PASSWORD' placeholder='Enter Your MAIL PASSWORD' />
                    </FormGroup>
                </Col>
                <Col className='' md='6' sm='12'>
                    <FormGroup>
                    <Label for='MAIL-ADDRESS'>MAIL FROM ADDRESS</Label>
                    <Input type='email' id='MAIL-ADDRESS' placeholder='Enter Your MAIL FROM ADDRESS' />
                    </FormGroup>
                </Col>
                <Col className='' md='6' sm='12'>
                    <FormGroup>
                    <Label for='MAIL-NAME'>MAIL FROM NAME</Label>
                    <Input type='email' id='MAIL-NAME' placeholder='Enter Your MAIL FROM NAME' />
                    </FormGroup>
                </Col>
 
              <Col sm='12' className="mt-2">
                <FormGroup className='d-flex mb-0'>
                  <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                    Submit
                    {/* spinner */}
                    {/* <Spinner color='light' /> */}  
                  </Button.Ripple>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
  export default GeneralSettings