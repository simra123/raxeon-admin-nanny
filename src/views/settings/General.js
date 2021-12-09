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
  import { User  } from 'react-feather'
  import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
  import {HiOutlineLocationMarker} from 'react-icons/hi'
  import {FaPencilAlt, FaFacebook, FaTwitter, FaLinkedinIn, FaGooglePlus} from 'react-icons/fa'

  
  const GeneralSettings = () => {
  
    return (
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>General Settings</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='12'>
                {/* category form */}
                <Label for='name'>Website name</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaPencilAlt size={18} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='name' placeholder='Enter Your Website name' />
                </InputGroup>
              </Col>

                {/* basic image upload */}
                <Col md='6' sm='12'>
                    <FormGroup>
                    <Label for='header'>Header Logo</Label>
                    <CustomInput type='file' id='header' name='customFile' />
                    </FormGroup>
                </Col>
                 {/* basic image upload */}
                 <Col md='6' sm='12'>
                    <FormGroup>
                    <Label for='footer'>Footer Logo</Label>
                    <CustomInput type='file' id='footer' name='customFile' />
                    </FormGroup>
                </Col>
                <Col sm='12' md="12" className="my-2">
                 <h4>Social Media Links</h4>
               </Col>
              <Col sm='12' md="6">
                {/* category form */}
                <Label for='facebook'>Facebook</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaFacebook size={18} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='facebook' placeholder='Enter Your  Facebook Link' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/* category form */}
                <Label for='google'>Google</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaGooglePlus size={18} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='google' placeholder='Enter Your  google Link' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/* category form */}
                <Label for='twitter'>Twitter</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTwitter size={18} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='twitter' placeholder='Enter Your Twitter Link' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/* category form */}
                <Label for='LinkedIn'>LinkedIn</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaLinkedinIn size={18} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='LinkedIn' placeholder='Enter Your LinkedIn Link' />
                </InputGroup>
              </Col>
              <Col sm='12' md="12" className="my-2">
                 <h4>Personal Info</h4>
               </Col>
              <Col sm='12' md="6">
                {/* category form */}
                <Label for='address'> Address</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <HiOutlineLocationMarker size={18} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id=' address' placeholder='Enter Your  Address Link' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/* category form */}
                <Label for='phone-number'>Phone Number</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <AiOutlinePhone size={18} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='number' id=' phone-number' placeholder='Enter Your Phone Number' />
                </InputGroup>
              </Col>
              <Col sm='12' md="12">
                {/* category form */}
                <Label for='email'>Email</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <AiOutlineMail size={18} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='email' id='email' placeholder='Enter Your Email' />
                </InputGroup>
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