
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
  import {FaTextWidth} from 'react-icons/fa'

  
  const WorksForm = () => {

    return (
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Edit How it Works</CardTitle>
        </CardHeader>
        <CardBody>
        <Form>
            <Row>
              <Col md="4" sm='12'>
                <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput type='file' id='icon' name='customFile' />
                </FormGroup>
               
              </Col>
              
              <Col sm="12" md="4">
                {/* how it works form */}
                <Label for='icon-heading'>Icon Heading</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='icon-heading' placeholder='Enter your Heading' />
                </InputGroup>
              </Col> 


              <Col sm="12" md="4">
                {/* how it works form */}
                <Label for='icon-text'>Icon Text</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='icon-text' placeholder='Enter your Text' />
                </InputGroup>
              </Col> 


              <Col md="4" sm='12'>
                <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput type='file' id='icon' name='customFile' />
                </FormGroup>
               
              </Col>
              
              <Col sm="12" md="4">
                {/* how it works form */}
                <Label for='icon-heading'>Icon Heading</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='icon-heading' placeholder='Enter your Heading' />
                </InputGroup>
              </Col> 


              <Col sm="12" md="4">
                {/* how it works form */}
                <Label for='icon-text'>Icon Text</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='icon-text' placeholder='Enter your Text' />
                </InputGroup>
              </Col> 


              <Col md="4" sm='12'>
                <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput type='file' id='icon' name='customFile' />
                </FormGroup>
               
              </Col>
              
              <Col sm="12" md="4">
                {/* how it works form */}
                <Label for='icon-heading'>Icon Heading</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='icon-heading' placeholder='Enter your Heading' />
                </InputGroup>
              </Col> 


              <Col sm="12" md="4">
                {/* how it works form */}
                <Label for='icon-text'>Icon Text</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='icon-text' placeholder='Enter your Text' />
                </InputGroup>
              </Col>

              <Col md="4" sm='12'>
                <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput type='file' id='icon' name='customFile' />
                </FormGroup>
               
              </Col>
              
              <Col sm="12" md="4">
                {/* how it works form */}
                <Label for='icon-heading'>Icon Heading</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='icon-heading' placeholder='Enter your Heading' />
                </InputGroup>
              </Col> 


              <Col sm="12" md="4">
                {/* how it works form */}
                <Label for='icon-text'>Icon Text</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' id='icon-text' placeholder='Enter your Text' />
                </InputGroup>
              </Col> 
              <Col sm="12" className="mt-2">
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
  export default WorksForm
  