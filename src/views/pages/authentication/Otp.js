import { Link } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import { ChevronLeft } from 'react-feather'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import Logo from '../../../../src/assets/images/logo/logo-m.png'


const ForgotPasswordV2 = () => {
  const [skin, setSkin] = useSkin()

  const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
        <img src={Logo} width="100" height="120" alt=""/>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              OTP Code
            </CardTitle>
            <CardText className='mb-2'>
              Enter your otp code we have sent to your email
            </CardText>
            <Form className='auth-forgot-password-form mt-2' onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Otp 
                </Label>
                <Input type='email' id='login-email' placeholder='Enter your Code' autoFocus />
              </FormGroup>
              <Link to="/reset-password">
              <Button color='primary' block>
                Change Password
              </Button>
                {/* spinner */}
                {/* <Spinner color='light' /> */}
              </Link>
            </Form>
            <p className='text-center mt-2'>
              <Link to='/forgot-password'>
                <ChevronLeft className='mr-25' size={14} />
                <span className='align-middle'>Back to Forgot password</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default ForgotPasswordV2
