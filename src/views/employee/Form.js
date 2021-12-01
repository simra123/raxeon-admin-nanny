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
  InputGroupAddon,
  Spinner
  } from 'reactstrap' 
  import { User, Mail, Smartphone, Lock } from 'react-feather'
  import {BsGenderAmbiguous} from 'react-icons/bs'
  import {FaAddressBook} from 'react-icons/fa'

  
  const EmployeeForm = () => {
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
          <CardTitle tag='h4'>Add New Employee</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
            <Col sm='12' md="6">
                {/*employee form */}
                <Label for='name'> Name</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <User size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='name' placeholder='Enter your Name' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/*employee form */}
                <Label for='email'>Email</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <Mail size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='email'  id='email' placeholder='Enter your Email' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/*employee form */}
                <Label for='phone'>Phone Number</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <Smartphone size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='number'  id='phone' placeholder='Enter your phone number' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/*employee form */}
                <Label for='password'>Password</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <Lock size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='password'  id='password' placeholder='Enter your password' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/*employee form */}
                <Label for='confirm-pass'>Confirm Password</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <Lock size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='confirm-pass' placeholder='Enter your confirm password' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/*employee form */}
                <Label for='gender'>Gender</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <BsGenderAmbiguous size={15}/>
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='gender' placeholder='Enter your gender' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/*employee form */}
                <Label for='address'>Address (location or manually)</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <FaAddressBook size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='address' placeholder='Enter your address' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/*employee form */}
                <Label for='city'>City</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <User size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text'  id='city' placeholder='Enter your City' />
                </InputGroup>
              </Col>
              <Col sm='12'>
                {/*employee textarea */}
               <Label>Short Bio</Label>

               <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Enter your Biography' />
               
              </Col>
              <Col sm='12' className="mt-2">
                {/* basic image upload */}
            
               <h6> Employee Image </h6>
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
  export default EmployeeForm
  