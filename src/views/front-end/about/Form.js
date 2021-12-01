import { useState } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../../@core/scss/react/libs/editor/editor.scss'

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
  import { User } from 'react-feather'
  import {FaTextWidth} from 'react-icons/fa'
  import {AiOutlineLink} from 'react-icons/ai'

  
  const AboutForm = () => {
   
    //text editor
     const [value, setValue] = useState(EditorState.createEmpty())

    return (
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>About Form</CardTitle>
        </CardHeader>
        <CardBody>
             
            <Col sm='12' className="my-2 p-0">
                {/* text editor */}
              <h6>About Content </h6>
              <Editor editorState={value} onEditorStateChange={data => setValue(data)} />
            </Col>
          <Form>
            <Row>

              <Col md="6" sm='12'>
                <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput type='file' id='icon' name='customFile' />
                </FormGroup>
               
              </Col>

              <Col md="6" sm="12">
                {/* about form */}
                <Label for='icon-text'>Icon Text</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='icon-text' placeholder='Enter your icon text' />
                </InputGroup>
              </Col> 


              <Col md="6" sm='12'>
                <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput type='file' id='icon' name='customFile' />
                </FormGroup>
               
              </Col>

              <Col md="6" sm="12">
                {/* about form */}
                <Label for='icon-text'>Icon Text</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='icon-text' placeholder='Enter your icon text' />
                </InputGroup>
              </Col> 


              <Col md="6" sm='12'>
                <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput type='file' id='icon' name='customFile' />
                </FormGroup>
               
              </Col>

              <Col md="6" sm="12">
                {/* about form */}
                <Label for='icon-text'>Icon Text</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='icon-text' placeholder='Enter your icon text' />
                </InputGroup>
              </Col> 
 
              <Col md="6" sm='12'>
                <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput type='file' id='icon' name='customFile' />
                </FormGroup>
               
              </Col>

              <Col md="6" sm="12">
                {/* about form */}
                <Label for='icon-text'>Icon Text</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaTextWidth size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='icon-text' placeholder='Enter your icon text' />
                </InputGroup>
              </Col> 

              <Col  sm="12">
                {/* about form */}
                <Label for='url'>Video Url</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <AiOutlineLink size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='url' placeholder='Enter your Video Url' />
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
  export default AboutForm
  