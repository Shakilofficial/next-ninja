import Hero from "@/components/Hero";

const MainPage = () => {
  console.log("Hello World"); // This is server component, this log will not be shown in the browser, it will only be shown in the terminal
  return (
    <div>
      <Hero />
    </div>
  );
};

export default MainPage;
