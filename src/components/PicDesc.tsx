type PictureProps = {
  date: string;
  copyRight: string;
  imgDesc: string;
  title: string;
};

export const PicDesc = ({ imgDesc, date, copyRight, title }: PictureProps) => {
  return (
    <div className="w-full mt-4 py-6 px-6  text-white pop">
      <h2 className="text-white pop text-xl font-semibold mb-6">{title}</h2>

      <p className="leading-7">{imgDesc}</p>

      <div className="w-full flex justify-between items-center mt-7 font-semibold pop ">
        <span className="text-xs">{copyRight}</span>
        <h4 className="text-xs">{date}</h4>
      </div>
    </div>
  );
};
