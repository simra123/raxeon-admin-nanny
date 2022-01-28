import { useState, useEffect } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../@core/scss/react/libs/editor/editor.scss'
import { AiFillQuestionCircle } from 'react-icons/ai'

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
import { User } from 'react-feather'
import Action from '../../middleware/API'

const FAQForm = () => {

  //GET DATA
  const [data, setData] = useState([])
  const [section, setSection] = useState([])

  async function fetchAboutData() {
    const response = await Action.push('/Work', {})
    if (response.data.success === true) {
      // setSection(response.data.data)
      console.log(response)
    } else {
      setSection([])
    }
  }

  useEffect(async () => {
    fetchAboutData()
    section.map((value) => {
      setData(value.works)
      console.log(data)
    })
  }, [])

  //text editor
  const [value, setValue] = useState(EditorState.createEmpty())

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Add New FAQ</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col sm='12'>
              {/* service form */}
              <Label for='ques'>Question</Label>
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <AiFillQuestionCircle size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='ques'
                  onChange={(e) => {
                    setBody({ ...body, Button_text: e.target.value })
                  }
                  }
                  placeholder='Enter your Question' />
              </InputGroup>
            </Col>
            <Col sm='12' className="mt-2">
              {/* text editor */}
              <h6>Answer</h6>
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
export default FAQForm
