import { useState } from 'react'
import Uppy from '@uppy/core'
import { useHistory } from 'react-router-dom'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { stateToHTML } from 'draft-js-export-html'
import '../../@core/scss/react/libs/editor/editor.scss'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import Action from '../../middleware/API'
//import toast types from components 
import { SuccessToast, ErrorToast } from '../components/toastify'
//import toasts from react
import { toast } from 'react-toastify'
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
import { FaPencilAlt } from 'react-icons/fa'

const ServiceForm = () => {
  //  file Uploader
  const [img, setImg] = useState(null)
  //text editor
  const [value, setValue] = useState(EditorState.createEmpty())

  const [sName, setSName] = useState('')

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    setImg(file.data)
  })
  console.log(img)
  //conveting the text from editor into plain html
  const answerToHtml = stateToHTML(value.getCurrentContent())
  console.log(answerToHtml)
  //loading success 
  const [success, setSuccess] = useState(false)
  const data = {
    heading: ' getting ',
    paragraph: 'A home help service m',
    btnLink: 'http://google.com',
    file: 'banner-one.jpg'
  }
  //redirect url 
  const history = useHistory()
  //post api
  const postService = async (e) => {
    e.preventDefault()
    const res = await Action.post(`/Service`, data, {})
    console.log(res)

    // if (res.data.success) {
    //   toast.success(<SuccessToast title="Success" text="FAQ added Successfully!" />)
    //   setSuccess(true)
    //   setTimeout(() => {
    //     history.push('/faq/list')
    //   }, 1000)
    // } else {
    //   setSuccess(false)
    //   toast.error(<ErrorToast title="error" text="Something went wrong, try again later" />)
    // }


  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Add New Service</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col sm='12'>
              {/* service form */ }
              <Label for='nameVerticalIcons'>Service Name</Label>
              <InputGroup className='input-group-merge' tag={ FormGroup }>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <FaPencilAlt size={ 15 } />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' value={ sName } onChange={ (e) => setSName(e.target.value) } id='nameVerticalIcons' placeholder='Enter your service Name' />
              </InputGroup>
            </Col>
            <Col sm='12' className="mt-2">
              {/* basic image upload */ }

              <h6> Service Image </h6>
              <DragDrop uppy={ uppy } />
              { img !== null ? <img className='rounded mt-2' src={ img } alt='avatar' /> : null }


            </Col>
            <Col sm='12' className="mt-2">
              {/* text editor */ }
              <h6>service Text</h6>
              <Editor editorState={ value } onEditorStateChange={ data => setValue(data) } />
            </Col>

            <Col sm='12' className="mt-4">
              <FormGroup className='d-flex mb-0'>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={ async (e) => {
                  e.preventDefault()
                  const res = await Action.post(`/Service`, data, {})
                  console.log(res)
                } }>
                  Submit
                </Button.Ripple>
                <Spinner color='primary' />

              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default ServiceForm
