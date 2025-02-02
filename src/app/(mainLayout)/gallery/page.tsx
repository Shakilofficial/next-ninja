import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery page",
};



import coverImg from "@/assets/Blog-Project.png";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <h1>Gallery Page</h1>
      {/* use next/image for showing local images */}
      {/* <img src={coverImg} alt="Ninja" width={500} height={500} /> */}
      {/* but img tag can not shows local images. So need to use next/image */}

      <h1>Gallery Page use next/image</h1>
      <Image src={coverImg} alt="Ninja" width={500} height={500} />
    </div>
  );
};

export default GalleryPage;
