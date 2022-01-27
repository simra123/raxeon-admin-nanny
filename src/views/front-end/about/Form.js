import { useState, useEffect } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../../@core/scss/react/libs/editor/editor.scss'
import Action from '../../../middleware/API'
import { stateFromHTML } from 'draft-js-import-html'
import { stateToHTML } from 'draft-js-export-html'
import { useHistory } from 'react-router-dom'
import baseURL from '../../../middleware/BaseURL'

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
import { FaTextWidth } from 'react-icons/fa'
import { AiOutlineLink } from 'react-icons/ai'


const AboutForm = () => {
  //iocns 
  const [icon1, setIcon1] = useState(null)
  const [icon2, setIcon2] = useState(null)
  const [icon3, setIcon3] = useState(null)
  const [icon4, setIcon4] = useState(null)
  const [text, setText] = useState({
    text1: '',
    text2: '',
    text3: '',
    text4: '',
    video: ''
  })
  //text editor
  const [value, setValue] = useState(EditorState.createEmpty())
  const [success, setSuccess] = useState(false)

  //conveting the text from editor into plain html
  const paraToHtml = stateToHTML(value.getCurrentContent())

  //redirect url 
  const history = useHistory()

  //get about us
  useEffect(() => {
    const fetchAboutData = async () => {
      const { data } = await Action.get('/about', {})
      if (data.success === true) {

        //setting the intial value before update
        setValue(EditorState.createWithContent(stateFromHTML(data.data[0].text)))
        setText({
          text1: data.data[0].sections[0].text,
          text2: data.data[0].sections[1].text,
          text3: data.data[0].sections[2].text,
          text4: data.data[0].sections[3].text,
          video: data.data[0].video
        })
        setIcon1(data.data[0].sections[0].image)
        setIcon2(data.data[0].sections[1].image)
        setIcon3(data.data[0].sections[2].image)
        setIcon4(data.data[0].sections[3].image)
      } else {
        setAbout([])
      }
    }
    fetchAboutData()
  }, [])
  const onChangeDetails = (e) => {
    const { name, value } = e.target
    setText(e => {
      return {
        ...e,
        [name]: value
      }
    })
  }
  //update api 

  const updateAbout = async (e) => {
    e.preventDeafault()
    const res = await Action.put(`/work/`)
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>About Form</CardTitle>
      </CardHeader>
      <CardBody>

        <Col sm='12' className="my-2 p-0">
          {/* text editor */ }
          <h6>About Content </h6>
          <Editor editorState={ value } onEditorStateChange={ data => setValue(data) } />
        </Col>
        <Form>
          <Row>

            <Col md="6" sm='12'>
              <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput onChange={ (e) => setIcon1(e.target.files[0]) } name="icon1" type='file' id='icon' name='customFile' />
              </FormGroup>

            </Col>

            <Col md="6" sm="12">
              {/* about form */ }
              <Label for='icon-text'>Icon Text</Label>
              <InputGroup className='input-group-merge' tag={ FormGroup }>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <FaTextWidth size={ 15 } />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='text1' value={ text.text1 } id='icon-text' placeholder='Enter your icon text' onChange={ onChangeDetails } />
              </InputGroup>
            </Col>

            <Col md="6" sm='12'>
              <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput onChange={ (e) => setIcon2(e.target.files[0]) } type='file' id='icon' name='customFile' />
              </FormGroup>

            </Col>

            <Col md="6" sm="12">
              {/* about form */ }
              <Label for='icon-text'>Icon Text</Label>
              <InputGroup className='input-group-merge' tag={ FormGroup }>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <FaTextWidth size={ 15 } />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='text2' value={ text.text2 } id='icon-text' placeholder='Enter your icon text' onChange={ onChangeDetails } />
              </InputGroup>
            </Col>


            <Col md="6" sm='12'>
              <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput onChange={ (e) => setIcon3(e.target.files[0]) } type='file' id='icon' name='customFile' />
              </FormGroup>

            </Col>

            <Col md="6" sm="12">
              {/* about form */ }
              <Label for='icon-text'>Icon Text</Label>
              <InputGroup className='input-group-merge' tag={ FormGroup }>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <FaTextWidth size={ 15 } />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='text3' value={ text.text3 } id='icon-text' placeholder='Enter your icon text' onChange={ onChangeDetails } />
              </InputGroup>
            </Col>

            <Col md="6" sm='12'>
              <FormGroup>
                <Label for='icon'>Upload Icon</Label>
                <CustomInput onChange={ (e) => setIcon4(e.target.files[0]) } type='file' id='icon' name='customFile' />
              </FormGroup>

            </Col>

            <Col md="6" sm="12">
              {/* about form */ }
              <Label for='icon-text'>Icon Text</Label>
              <InputGroup className='input-group-merge' tag={ FormGroup }>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <FaTextWidth size={ 15 } />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='text4' value={ text.text4 } id='icon-text' placeholder='Enter your icon text' onChange={ onChangeDetails } />
              </InputGroup>
            </Col>

            <Col sm="12">
              {/* about form */ }
              <Label for='url'>Video Url</Label>
              <InputGroup className='input-group-merge' tag={ FormGroup }>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <AiOutlineLink size={ 15 } />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='video' value={ text.video } onChange={ onChangeDetails } placeholder='Enter your Video Url' />

              </InputGroup>
            </Col>


            <Col sm="12" className="mt-2">
              <FormGroup className='d-flex mb-0'>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={ e => updateAbout(e) }>
                  Submit
                </Button.Ripple>
                { success ? <Spinner color='primary' /> : null }

              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default AboutForm
