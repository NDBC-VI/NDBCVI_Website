import Image from "next/image";
import mapImg from "../../../assets/pngs/map-img.png";
const WorshipSection = () => {
  return (
    <section className="px-[60px] pt-[180px]">
      <div className="max-w-[1392px] mx-auto flex gap-3">
        <div className="w-1/2 relative">
          <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full rounded-[10px]"></div>
          <img
            src="https://s3-alpha-sig.figma.com/img/2584/b045/999f1536b1d1e7c1831f8c3e12f69f5f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcSNheu8kMjoOi0BsMREqNpK6Bo8fjXABpr1v0aVKRLGdyyXz52w6NmZqpYWlgwHkmGu7iXgQFm2AsoekKweEpRoLEspGbS6-yDcAu~NhM~vOHCqogMnwci2D3~-qoU-nq~Aelx4~7lQlTRHnqkWi3um-J7qYCBcec4q~6EBoD6JCDa30O8-Cb8MJT2AmHt6qhCyAyHx1ausIu-iSILBwrZO3l5jTLYqoeP82OW21xM3BpXkOn-vgpVr3n2zGRQwuf8j1NU5uamC8HKbfjmn7IFzHXWDeAbNIhbBSMF2tSDtpWjS68HfM~SliSktHy85hmTcp9UaWXWk7WhSdHtBOg__"
            alt="info card img"
            className="object-cover rounded-[10px]  h-full"
          />
          <div className="absolute text-white bottom-0 pl-[36px] pb-[48px]">
            <p className="text-[18px]">
              We believe in Christian worship as the foundation for daily life
            </p>
            <h2 className="text-[40px] font-[600]">
              Worship with us by <br /> 8am - 11am on Sundays
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <div className="relative">
            <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full rounded-[10px]"></div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/2584/b045/999f1536b1d1e7c1831f8c3e12f69f5f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcSNheu8kMjoOi0BsMREqNpK6Bo8fjXABpr1v0aVKRLGdyyXz52w6NmZqpYWlgwHkmGu7iXgQFm2AsoekKweEpRoLEspGbS6-yDcAu~NhM~vOHCqogMnwci2D3~-qoU-nq~Aelx4~7lQlTRHnqkWi3um-J7qYCBcec4q~6EBoD6JCDa30O8-Cb8MJT2AmHt6qhCyAyHx1ausIu-iSILBwrZO3l5jTLYqoeP82OW21xM3BpXkOn-vgpVr3n2zGRQwuf8j1NU5uamC8HKbfjmn7IFzHXWDeAbNIhbBSMF2tSDtpWjS68HfM~SliSktHy85hmTcp9UaWXWk7WhSdHtBOg__"
                alt="info card img"
                className="object-cover rounded-[10px] h-1/2"
              />
            </div>
            <div className="absolute text-white bottom-0 pl-[36px] pb-[48px]">
              <p className="text-[18px]">
                We believe in Christian worship as the foundation for daily life
              </p>
              <h2 className="text-[40px] font-[600]">
                Worship with us by <br /> 8am - 11am on Wednesdays
              </h2>
            </div>
          </div>
          <div className="bg-[#F6F6F6] pl-[36px] pr-[78px] py-[87px] rounded-[10px] flex gap-[48px] w-full items-center">
            <Image src={mapImg} alt="map image" width={200} />
            <div>
              <h2 className="text-[36px] font-[600] leading-[43.57px] mb-6">
                Locate our centre in VI, Lagos
              </h2>
              <p className="text-[#2C2563] font-[500] underline">
                Open in Google Maps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipSection;
