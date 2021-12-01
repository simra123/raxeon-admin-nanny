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
  CustomInput,
  Spinner
  } from 'reactstrap'
  import { User, Mail, Smartphone, Lock } from 'react-feather'

  
  const CategoryForm = () => {
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
          <CardTitle tag='h4'>Add New Category</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='12'>
                {/* category form */}
                <Label for='name'>Category Name</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <User size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='name' placeholder='Enter Your Category Name' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/* category form */}
                <Label for='descrip'>Category Description</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <User size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='descrip' placeholder='Enter Your Category description' />
                </InputGroup>
              </Col>

                {/* basic image upload */}
            
                <Col md='6' sm='12'>
                    <FormGroup>
                    <Label for='exampleCustomFileBrowser'>Category icon</Label>
                    <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
                    </FormGroup>
                </Col>
                
                <Col sm='12' className="mt-2">
                {/* basic image upload */}
            
               <h6> Category Image </h6>
                <DragDrop uppy={uppy} />
                {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
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
  export default CategoryForm
  