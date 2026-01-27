"use client";
import Image from "next/image";
import One from "@/public/images/video/video-image1.jpg";

const ModalThree = () => {

  return (
    <>
      <div className="banner-video-area">
        <div className="container">
          <div className="banner-video__wrp image">
            <Image src={One} alt="Image" priority />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalThree;
