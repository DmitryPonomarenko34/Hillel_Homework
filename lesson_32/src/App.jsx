import { Card, Typography, Space, List } from 'antd';

const { Title, Text } = Typography;

const projects = [
  { name: 'ReplyNext', link: 'https://replynext.com/' },
  { name: 'Rakhaa (blog / social media)', link: 'https://asasas-lake.vercel.app/' },
  { name: 'GoHard Company Site', link: 'https://gohard.ua/' },
  { name: 'Kankotriwale', link: 'https://asasas-lake.vercel.app/' },
  { name: 'CodeRoad', link: 'https://code-road-next-js-tailwind-css-react-js.vercel.app/' },
  { name: 'Aargo', link: 'https://next-js-bootstrap-react-js.vercel.app/' },
  { name: 'ProductListingAI Landing Page', link: '#' },
  { name: 'CV Generator', link: 'https://github.com/DmitryPonomarenko34/cvGen/tree/master' },
  { name: 'IStick - Online Store', link: 'https://dmitryponomarenko34.github.io/istick-prod/' },
  { name: 'Focus - Ukraine News Site', link: 'https://dmitryponomarenko34.github.io/facts-prod/' },
  { name: 'Online Store', link: 'https://dmitryponomarenko34.github.io/from0to1glee-production/' }
];

export default function App() {
  return (
    <Card
      style={{
        background: '#141414', // Темний фон
        color: '#fff',
        borderRadius: '8px',
        padding: '20px'
      }}>
      <Space direction="vertical" size="middle">
        <Title level={3} style={{ color: '#fff' }}>
          About Me
        </Title>
        <Text style={{ color: '#d9d9d9' }}>
          I am Dmytro Ponomarenko, a Front-end Developer with 2 years of commercial experience. I
          specialize in building modern SPA applications using React.js and collaborate with diverse
          development teams to deliver high-quality projects.
        </Text>
        <Text style={{ color: '#d9d9d9' }}>
          I am constantly seeking opportunities to enhance my technical skills and take on exciting
          challenges in innovative projects.
        </Text>
        <Title level={4} style={{ color: '#fff', marginTop: '20px' }}>
          My Projects
        </Title>
        <List
          dataSource={projects}
          renderItem={(project) => (
            <List.Item>
              <a href={project.link} target="_blank" style={{ color: '#1890ff' }}>
                {project.name}
              </a>
            </List.Item>
          )}
          style={{ color: '#d9d9d9' }}
        />
      </Space>
    </Card>
  );
}
