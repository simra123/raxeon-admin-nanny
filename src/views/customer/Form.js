import { useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import { EditorState } from 'draft-js'
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
  InputGroupAddon
  } from 'reactstrap' 
  import { User, Mail, Smartphone, Lock } from 'react-feather'
  import {BsGenderAmbiguous} from 'react-icons/bs'
  import {FaAddressBook} from 'react-icons/fa'

  
  const CustomerForm = () => {
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
          <CardTitle tag='h4'>Add New Customer</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='12'>
                {/*customer form */}
                <Label for='nameVerticalIcons'>Full Name</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <User size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='nameVerticalIcons' placeholder='Name' />
                </InputGroup>
              </Col>
              <Col sm='12'>
                {/*customer form */}
                <Label for='nameVerticalIcons'>Email</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <Mail size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='email'  id='nameVerticalIcons' placeholder='@' />
                </InputGroup>
              </Col>
              <Col sm='12'>
                {/*customer form */}
                <Label for='nameVerticalIcons'>Phone Number</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <Smartphone size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='number'  id='nameVerticalIcons' placeholder='XXXXXXXXXX' />
                </InputGroup>
              </Col>
              <Col sm='12'>
                {/*customer form */}
                <Label for='nameVerticalIcons'>Password</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <Lock size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='password'  id='nameVerticalIcons' placeholder='******' />
                </InputGroup>
              </Col>
              <Col sm='12'>
                {/*customer form */}
                <Label for='nameVerticalIcons'>Confirm Password</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <Lock size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='nameVerticalIcons' placeholder='******' />
                </InputGroup>
              </Col>
              <Col sm='12'>
                {/*customer form */}
                <Label for='nameVerticalIcons'>Gender</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <BsGenderAmbiguous size={15}/>
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='nameVerticalIcons' placeholder='M/F' />
                </InputGroup>
              </Col>
              <Col sm='12'>
                {/*customer form */}
                <Label for='nameVerticalIcons'>Address</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaAddressBook size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='nameVerticalIcons' placeholder='location or manually' />
                </InputGroup>
              </Col>
              <Col sm='12'>
                {/*customer form */}
                <Label for='nameVerticalIcons'>City</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <User size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='nameVerticalIcons' placeholder='karachi' />
                </InputGroup>
              </Col> 
              <Col sm='12'>
                {/*customer textarea */}
               <Label>Short Bio</Label>

               <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Short Bio' />
               
              </Col>
              <Col sm='12' className="mt-2">
                {/* basic image upload */}
            
               <h6> customer Image </h6>
                <DragDrop uppy={uppy} />
                {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
             </Col>
             
              
              <Col sm='12' className="mt-4">
                <FormGroup className='d-flex mb-0'>
                  <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                    Submit
                  </Button.Ripple>
                  <Button.Ripple outline color='secondary' type='reset'>
                    Reset
                  </Button.Ripple>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
  export default CustomerForm
  