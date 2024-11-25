/* eslint-disable react/prop-types */
import { Checkbox, Button, Typography, Space } from 'antd';

const { Text } = Typography;

export default function TodoItem({ todo }) {
  const handleDelete = () => {
    console.log('Deleted:', todo.text);
  };

  return (
    <Space
      align="center"
      className="todo-item"
      style={{ display: 'flex', justifyContent: 'space-between', width: 'fit-content' }}>
      <Checkbox defaultChecked={todo.checked} />
      <Text className="todo-item__description" style={{ flex: 1, margin: '0 10px' }}>
        {todo.text}
      </Text>
      <Button type="primary" danger onClick={handleDelete} className="todo-item__delete">
        Видалити
      </Button>
    </Space>
  );
}
