import {Button, Checkbox, Form, Input} from 'antd';
import {useTranslation} from 'react-i18next';
import BusinessRequest from "../../requests/business";

const BusinessRegisterForm = () => {
  const {t} = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // const formData = new FormData();
    // Object.entries(values).forEach(entry => {
    //   const [key, value] = entry;
    //   formData.append(key, value);
    // });

    BusinessRequest.register(values);
  };

  return (
    <div className={'wrap-form'}>
      <Form name={'sign_up_form'} form={form} onFinish={onFinish}>
        <Form.Item
          label={t('namespace')}
          name="namespace"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label={t('name')}
          name="name"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label={t('cancel_date')}
          name="cancel_date"
        >
          <Input type={'date'}/>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 8, span: 16}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default BusinessRegisterForm;