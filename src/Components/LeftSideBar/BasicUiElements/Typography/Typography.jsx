import { Space, Typography } from "antd";
const { Text, Link } = Typography;
const { Title } = Typography;
const Typographys = () => (
  <div className="mx-auto w-11/12 md:my-12 my-8">
    <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-12 gap-8">
      <div className="shadow-2xl p-4">
        <Title>h1. Heading 1</Title>
        <Title level={2}>h2. Heading 2</Title>
        <Title level={3}>h3. Heading 3</Title>
        <Title level={4}>h4. Heading 4</Title>
        <Title level={5}>h5. Heading 5</Title>
      </div>
      <div className="shadow-2xl p-4">
        <Space direction="vertical">
          <Text>Text (default)</Text>
          <Text type="secondary">Text (secondary)</Text>
          <Text type="success">Text (success)</Text>
          <Text type="warning">Text (warning)</Text>
          <Text type="danger">Text (danger)</Text>
          <Text disabled>Text (disabled)</Text>
          <Text mark>Text (mark)</Text>
          <Text code>Text (code)</Text>
          <Text keyboard>AText(keyboard)</Text>
          <Text underline>Text (underline)</Text>
          <Text delete>Text (delete)</Text>
          <Text strong>Text (strong)</Text>
          <Text italic>Text (italic)</Text>
        </Space>
      </div>
      <div className="shadow-2xl p-4">
        <Space direction="vertical">
          <Text>Text (default)</Text>
          <Text type="secondary">Text (secondary)</Text>
          <Text type="success">Text (success)</Text>
          <Text type="warning">Text (warning)</Text>
          <Text type="danger">Text (danger)</Text>
          <Text disabled>Text (disabled)</Text>
          <Text mark>Text (mark)</Text>
          <Text code>Text (code)</Text>
          <Text keyboard>AText(keyboard)</Text>
          <Text underline>Text (underline)</Text>
          <Text delete>Text (delete)</Text>
          <Text strong>Text (strong)</Text>
          <Text italic>Text (italic)</Text>
        </Space>
      </div>
      <div className="shadow-2xl p-4">
        <Title>h1. Heading 1</Title>
        <Title level={2}>h2. Heading 2</Title>
        <Title level={3}>h3. Heading 3</Title>
        <Title level={4}>h4. Heading 4</Title>
        <Title level={5}>h5. Heading 5</Title>
      </div>
    </div>
  </div>
);
export default Typographys;
