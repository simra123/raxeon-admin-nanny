import { useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
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
import '../../../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import {AiOutlineLink} from 'react-icons/ai'
const CustomerForm = () => {
         //  file Uploader
    const [img, setImg] = useState(null)
   
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
            <CardTitle tag='h4'>Edit For Customer Section</CardTitle>
          </CardHeader>
          <CardBody>
          <Form>
              <Row>
                <Col sm='12' className="my-2">
                    {/* basic image upload */}
                
                <h6> Upload Application Image </h6>
                    <DragDrop uppy={uppy} />
                    {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
                </Col>
                <Col sm="12" >
                  {/* customer form */}
                  <Label for='icon-heading'>Button Link</Label>
                  <InputGroup className='input-group-merge' tag={FormGroup}>
                  <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                      <AiOutlineLink size={15} />
                      </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' id='icon-heading' placeholder='Enter your App link' />
                  </InputGroup>
                </Col> 
                <Col sm="12" md="6">
                  {/* customer form */}
                  <Label for='icon-heading'>Heading</Label>
                  <InputGroup className='input-group-merge' tag={FormGroup}>
                  <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                      <FaTextWidth size={15} />
                      </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' id='icon-heading' placeholder='Enter your Heading' />
                  </InputGroup>
                </Col> 
  
  
                <Col sm="12" md="6">
                  {/* customer form */}
                  <Label for='icon-text'>Text</Label>
                  <InputGroup className='input-group-merge' tag={FormGroup}>
                  <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                      <FaTextWidth size={15} />
                      </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' id='icon-text' placeholder='Enter your Text' />
                  </InputGroup>
                </Col> 
                <Col sm="12" md="6">
                  {/* customer form */}
                  <Label for='icon-heading'>Heading</Label>
                  <InputGroup className='input-group-merge' tag={FormGroup}>
                  <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                      <FaTextWidth size={15} />
                      </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' id='icon-heading' placeholder='Enter your Heading' />
                  </InputGroup>
                </Col> 
  
  
                <Col sm="12" md="6">
                  {/* customer form */}
                  <Label for='icon-text'>Text</Label>
                  <InputGroup className='input-group-merge' tag={FormGroup}>
                  <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                      <FaTextWidth size={15} />
                      </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' id='icon-text' placeholder='Enter your Text' />
                  </InputGroup>
                </Col> 
                <Col sm="12" md="6">
                  {/* customer form */}
                  <Label for='icon-heading'>Heading</Label>
                  <InputGroup className='input-group-merge' tag={FormGroup}>
                  <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                      <FaTextWidth size={15} />
                      </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' id='icon-heading' placeholder='Enter your Heading' />
                  </InputGroup>
                </Col> 
  
  
                <Col sm="12" md="6">
                  {/* customer form */}
                  <Label for='icon-text'>Text</Label>
                  <InputGroup className='input-group-merge' tag={FormGroup}>
                  <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                      <FaTextWidth size={15} />
                      </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' id='icon-text' placeholder='Enter your Text' />
                  </InputGroup>
                </Col> 
  
  
                <Col sm="12" md="6">
                  {/* customer form */}
                  <Label for='icon-heading'>Heading</Label>
                  <InputGroup className='input-group-merge' tag={FormGroup}>
                  <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                      <FaTextWidth size={15} />
                      </InputGroupText>
                  </InputGroupAddon>
                  <Input type='text' id='icon-heading' placeholder='Enter your Heading' />
                  </InputGroup>
                </Col> 
                <Col sm="12" md="6">
                  {/* customer form */}
                  <Label for='icon-text'>Text</Label>
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
    export default CustomerForm
    