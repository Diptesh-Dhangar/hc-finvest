import { Title, Meta } from "react-head";

const SEO = ({ title, description }) => {
  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <link rel="icon" href="/public/fevicon.ico" />
    </>
  );
}
export default SEO;