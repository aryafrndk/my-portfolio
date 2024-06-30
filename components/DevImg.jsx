import Image from "next/image";

const DevImg = ({ containerStyles, imgsrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgsrc} fill priority alt="" />
    </div>
  );
};

export default DevImg;
