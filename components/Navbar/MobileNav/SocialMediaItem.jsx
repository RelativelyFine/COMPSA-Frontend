const SocialMediaItem = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
        {icon}
      </div>
    </a>
  );
};

export default SocialMediaItem;
