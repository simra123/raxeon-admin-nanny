import { useState } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../@core/scss/react/libs/editor/editor.scss'

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
  Spinner
  } from 'reactstrap'
  import { User, Mail, Smartphone, Lock } from 'react-feather'

  
  const EditPage = () => {
   
    //text editor
     const [value, setValue] = useState(EditorState.createEmpty())

    return (
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Edit Page</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='12'>
                {/* service form */}
                <Label for='nameVerticalIcons'>Page Title</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <User size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='nameVerticalIcons' placeholder='Enter your Page Title' />
                </InputGroup>
              </Col>
              
              <Col sm='12' className="mt-2">
                {/* text editor */}
              <h6>Page Description </h6>
              <Editor editorState={value} onEditorStateChange={data => setValue(data)} />
              </Col>
              
              <Col sm='12' className="mt-4">
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
  export default EditPage
  