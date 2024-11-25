import { useState } from 'react';
import { Input, Button, Form, Typography } from 'antd';

const { Text } = Typography;

export default function TodoForm() {
  const [formValues, setFormValues] = useState({ text: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = () => {
    if (!formValues.text.trim()) {
      setError('The field cannot be empty.');
      return;
    }
    console.log('Form submitted:', formValues.text);
    setFormValues({ text: '' });
  };

  return (
    <Form layout="inline" onFinish={handleSubmit} className="todo-form">
      <Form.Item>
        <Input
          type="text"
          name="text"
          placeholder="Enter your task"
          value={formValues.text}
          onChange={handleInputChange}
          className="form__input"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="form__btn">
          Add
        </Button>
      </Form.Item>
      {error && <Text type="danger">{error}</Text>}
    </Form>
  );
}
