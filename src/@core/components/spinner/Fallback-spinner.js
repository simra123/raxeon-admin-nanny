// ** Logo
import logo from '@src/assets/images/logo/logo2.png'

const SpinnerComponent = () => {
  return (
    <div className='fallback-spinner vh-100'>
      <img className='' src={logo} height={100} width={200} alt='logo' />
      <div className='loading'>
        <div className='effect-1 effects'></div>
        {/* <div className='effect-2 effects'></div>
        <div className='effect-3 effects'></div> */}
      </div>
    </div>
  )
}

export default SpinnerComponent
