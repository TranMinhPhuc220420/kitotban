import { Button, Checkbox, Form, Input } from 'antd';
import { username_rule } from "@components/forms/rules/index.js";

import { useTranslation } from 'react-i18next';

const SignUpForm = () => {
  const { t } = useTranslation();

  return (
    <div className={'wrap-form'}>
      <Form name={'sign_up_form'}>
        <Form.Item
          label={t('LABEL_USERNAME')}
          name="username"
          rules={username_rule}>
          <Input />
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignUpForm;