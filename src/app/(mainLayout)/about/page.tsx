import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

const AboutPage = () => {
  return (
    <div>
      <h1>This is the About page component</h1>
    </div>
  );
};

export default AboutPage;
