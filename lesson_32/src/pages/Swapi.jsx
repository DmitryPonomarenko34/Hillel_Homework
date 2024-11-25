import { useState } from 'react';
import { Input, Button, Form, Typography, Space, Tag, Card } from 'antd';

const mockFetchByEndpoint = async (endpoint) => {
  // Мокані дані для демонстрації
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        url: `https://swapi.dev/api/${endpoint}/example/123`,
        data: {
          name: 'Luke Skywalker',
          birth_year: '19BBY',
          gender: 'male'
        }
      });
    }, 1000);
  });
};

export default function SwapiPage() {
  const [value, setValue] = useState('');
  const [data, setData] = useState(null);

  const onSubmit = async () => {
    if (!value.trim()) return;

    const result = await mockFetchByEndpoint(value);
    setData(result);
  };

  const reset = () => {
    setValue('');
    setData(null);
  };

  const words = data?.url?.split('/').splice(-3, 2);

  return (
    <Card title="Swapi" style={{ maxWidth: 600, margin: 'auto', marginTop: 50 }}>
      <Form layout="vertical" onFinish={onSubmit}>
        <Form.Item label="Endpoint" extra="Enter an endpoint to fetch data" required>
          <Input
            addonBefore="https://swapi.dev/api/"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter endpoint"
          />
        </Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="default" onClick={reset}>
            Reset
          </Button>
        </Space>
      </Form>
      {words && (
        <Space style={{ marginTop: 20 }}>
          {words.map((word, index) => (
            <Tag color="blue" key={index}>
              {word}
            </Tag>
          ))}
        </Space>
      )}
      {data && (
        <Typography.Paragraph
          style={{
            marginTop: 20,
            padding: 10,
            border: '1px solid #ddd',
            borderRadius: 4
          }}>
          {JSON.stringify(data, null, 2)}
        </Typography.Paragraph>
      )}
    </Card>
  );
}
