import heroImg from "../../../assets/pngs/hero-img.png";
import youtubeicon from "../assets/youtube-btn-icon.svg";
import spotifyIcon from "../assets/spotify-btn-icon.svg";
import CustomBtn from "@/app/shared/components/CustomBtn";

const Messages = () => {
  return (
    <section className="px-[18px] py-[120px] text-white">
      <div className="flex gap-[18px]">
        <div
          className="w-1/2 py-[26%] rounded-[24px] relative"
          style={{
            height: "100%",
            backgroundImage: `url(${heroImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute bottom-0 left-0 px-[36px] pb-[45px]">
            <h2 className="text-[30px] font-[600]">
              Turn the Table - Reverend <br /> Samson Aderinto Adedokun
            </h2>
            <p className="text-[20px] mt-[20px] mb-[30px]">
              Volunteers works tirelessly to build a welcoming and inclusive
              community for all who seek to know God and experience the love and
              grace of Jesus Christ.
            </p>
            <div>
              <CustomBtn
                title="Watch our latest Sermons"
                hasIcon
                icon={youtubeicon}
              />
            </div>
          </div>
        </div>
        <div
          className="w-1/2 py-[26%] rounded-[24px] relative"
          style={{
            height: "100%",
            backgroundImage: `url(${heroImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute bottom-0 left-0 px-[36px] pb-[45px]">
            <h2 className="text-[30px] font-[600]">
              The Quiet Champion - Reverend Samson Aderinto Adedokun
            </h2>
            <p className="text-[20px] mt-[20px] mb-[30px]">
              Volunteers works tirelessly to build a welcoming and inclusive
              community for all who seek to know God and experience the love and
              grace of Jesus Christ.
            </p>
            <div>
              <CustomBtn title="Listen on Spotify" hasIcon icon={spotifyIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
