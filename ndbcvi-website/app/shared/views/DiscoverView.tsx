const discoverLinks = [
  "About New Dawn",
  "Media",
  "Information Centre",
  "Events",
  "Donations",
  "Partners",
  "Hausa Church",
];
const DiscoverView = () => {
  return (
    <div className="flex flex-col gap-[16px] justify-start">
      {discoverLinks.map((link, i) => (
        <div key={i}>
          <button type="button" className="text-[30px] font-[600]">
            {link}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DiscoverView;
