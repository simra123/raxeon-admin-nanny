import { useState, useEffect } from 'react'
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
import { FaTextWidth } from 'react-icons/fa'
import { AiOutlineLink } from 'react-icons/ai'
import Action from '../../../middleware/API'
import baseURL from '../../../middleware/BaseURL'

const AboutForm = () => {
  //GET DATA
  const [about, setAbout] = useState([])
  async function fetchAboutData() {
    const response = await Action.get('/about', {})
    if (response.data.success === true) {
      setAbout(response.data.data)
      console.log(about)
    } else {
      setAbout([])
    }
  }

  useEffect(async () => {
    fetchAboutData()
  }, [])

  const [sData, setSData] = useState([
    {
      text: '',
      image: []
    },
    {
      text: '',
      image: []
    },
    {
      text: '',
      image: []
    },
    {
      text: '',
      image: []
    }
  ]
  )
  const updatedtext = (index, e, val) => {
    console.log(index)
    console.log(e.target.value)
    const newArr = [...sData]
    val.text = e.target.value
    newArr[index] = val
    setSData(newArr)
    console.log(sData)
  }

  const updatedicon = (index, e, val) => {
    console.log(index)
    console.log(e.target.value)
    const newArr = [...sData]
    val.image = e.target.value
    newArr[index] = val
    setSData(newArr)
    console.log(sData)
  }

  const [body, setBody] = useState({
    text: '',
    sections: sData,
    video: []

  })

  //update Data

  async function updateAbout() {
    const response = await Action.put(`/about/${about[0]._id}`, body, {})
    console.log(response)
    if (response.data.success === true) {
      console.log(response.data)
    } else {
      console.log(err)
    }
    console.log(body.sections)
    console.log(sData)
  }

  //text editor
  // const [value, setValue] = useState(EditorState.createEmpty())

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>About Form</CardTitle>
      </CardHeader>
      <CardBody>
        <Col sm='12' className="my-2 p-0">
          {/* text editor */}
          <h6>About Content </h6>
          <Editor
            EditorState={initialVal.text}
            onChange={(e) => {
              setBody({ ...about, text: e.blocks[0].text })
              console.log(body.text)
            }}
          />
        </Col>
        <Form>
          {sData.map((d, index) => {
            return (
              <Row>
                <Col md="6" sm='12'>
                  <FormGroup>
                    <Label for='icon'>Upload Icon</Label>
                    <CustomInput type='file' id='icon' name='customFile'
                      onChange={(e) => {
                        updatedicon(index, e, d)
                      }}
                    />
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
                    <Input type='text' name='name' id='icon-text'
                      onChange={(e) => {
                        updatedtext(index, e, d)
                        console.log(d)
                        console.log(e.target.value)
                      }}
                    />
                  </InputGroup>
                </Col>

                {/* 
<Col md="6" sm='12'>
<FormGroup>
<Label for='icon'>Upload Icon</Label>
<CustomInput type='file' id='icon' name='customFile'
onChange={(e) => {
updatedicon(index, e, d)
}}
/>
</FormGroup>

</Col>

<Col md="6" sm="12">
<Label for='icon-text'>Icon Text</Label>
<InputGroup className='input-group-merge' tag={FormGroup}>
<InputGroupAddon addonType='prepend'>
<InputGroupText>
<FaTextWidth size={15} />
</InputGroupText>
</InputGroupAddon>
<Input type='text' name='name' id='icon-text' placeholder='Enter your icon text'
onChange={(e) => {
updatedtext(index, e, d)
}}
/>
</InputGroup>
</Col> */}

                {/* 
<Col md="6" sm='12'>
<FormGroup>
<Label for='icon'>Upload Icon</Label>
<CustomInput type='file' id='icon' name='customFile'
onChange={(e) => {
updatedicon(index, e, d)
}}
/>
</FormGroup>

</Col>

<Col md="6" sm="12">
<Label for='icon-text'>Icon Text</Label>
<InputGroup className='input-group-merge' tag={FormGroup}>
<InputGroupAddon addonType='prepend'>
<InputGroupText>
<FaTextWidth size={15} />
</InputGroupText>
</InputGroupAddon>
<Input type='text' name='name' id='icon-text' placeholder='Enter your icon text'
onChange={(e) => {
updatedtext(index, e, d)
}}
/>
</InputGroup>
</Col>

<Col md="6" sm='12'>
<FormGroup>
<Label for='icon'>Upload Icon</Label>
<CustomInput type='file' id='icon' name='customFile'
onChange={(e) => {
updatedicon(index, e, d)
}}
/>
</FormGroup>

</Col>

<Col md="6" sm="12">
<Label for='icon-text'>Icon Text</Label>
<InputGroup className='input-group-merge' tag={FormGroup}>
<InputGroupAddon addonType='prepend'>
<InputGroupText>
<FaTextWidth size={15} />
</InputGroupText>
</InputGroupAddon>
<Input type='text' name='name' id='icon-text' placeholder='Enter your icon text'
onChange={(e) => {
updatedtext(index, e, d)
}}
/>
</InputGroup>
</Col> */}

              </Row>
            )
          })}
          <Col sm="12">
            <Label for='url'>Video Url</Label>
            <InputGroup className='input-group-merge' tag={FormGroup}>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <AiOutlineLink size={15} />
                </InputGroupText>
              </InputGroupAddon>
              <Input type='text' name='name' id='url' placeholder='Enter your Video Url'
                onChange={(e) => {
                  setBody({ ...about, video: e.target.value })
                  console.log(e.target.value)
                }}
              />
            </InputGroup>
          </Col>

          <Col sm="12" className="mt-2">
            <FormGroup className='d-flex mb-0'>
              <Button.Ripple className='mr-1' color='primary' onClick={() => updateAbout()} >
                Submit
                {/* spinner */}
                {/* <Spinner color='light' /> */}
              </Button.Ripple>

            </FormGroup>
          </Col>

        </Form>
      </CardBody>
    </Card>
  )
}
export default AboutForm
