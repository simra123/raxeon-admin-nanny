import { useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../@core/scss/react/libs/editor/editor.scss'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
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

  
  const ServiceForm = () => {
    //  file Uploader
    const [img, setImg] = useState(null)
    //text editor
     const [value, setValue] = useState(EditorState.createEmpty())


    const uppy = new Uppy({
      meta: { type: 'avatar' },
      restrictions: { maxNumberOfFiles: 1 },
      autoProceed: true
    })
  
    uppy.use(thumbnailGenerator)
  
    uppy.on('thumbnail:generated', (file, preview) => {
      setImg(preview)
    })
    return (
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Add New Service</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='12'>
                {/* service form */}
                <Label for='nameVerticalIcons'>Service Name</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <User size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='nameVerticalIcons' placeholder='Enter your service Name' />
                </InputGroup>
              </Col>
              <Col sm='12' className="mt-2">
                {/* basic image upload */}
            
               <h6> Service Image </h6>
                <DragDrop uppy={uppy} />
                {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
            
    
              </Col>
              <Col sm='12' className="mt-2">
                {/* text editor */}
              <h6>service Text</h6>
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
  export default ServiceForm
  