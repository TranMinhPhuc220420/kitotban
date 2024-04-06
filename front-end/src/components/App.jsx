import {Button} from 'antd'
import {Card} from 'antd';

// import SignUpForm from '@components/forms/SignUp';
import BusinessRegisterForm from "./forms/BusinessRegister";

function App() {

  return (
    <>
      <Card title="Sign Up" bordered={false} style={{width: 400}}>
        <BusinessRegisterForm/>
      </Card>
    </>
  )
}

export default App
