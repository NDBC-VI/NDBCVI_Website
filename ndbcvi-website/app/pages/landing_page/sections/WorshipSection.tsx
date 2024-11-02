import Image from "next/image";
import mapImg from "../../../assets/pngs/map-img.png";
import Link from "next/link";
const WorshipSection = () => {
  return (
    <section className="px-[60px] pt-[120px]">
      <div className="max-w-[1392px] mx-auto flex gap-3">
        <div className="w-1/2 relative">
          <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full rounded-[10px]"></div>
          <img
            src="https://s3-alpha-sig.figma.com/img/2584/b045/999f1536b1d1e7c1831f8c3e12f69f5f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UR3yK7u94yw8E7WFrdU8P8pkeAtb9vnO52TTjbYp7jT9RJp~m3OQPaKl7E24I6Du9Wp8SA6DaNQEhWN-08p9wdoRZwZmCilRxrC68FOMoxGxRB-6k74N7Ln2O7Mh41CMuq1ad1LF2HANCfeufeteqrLoZz4WObUTGbGT0iNMUElSXdIGBp2aJljwoAJGWetU8ApBvgD4NeAoexhHOVV5NR8zgRdXzrotphe9dp180bGIDdDkK5bNHNW8m2HvisLqwqrzrlmEFBSldR33PTFj--DdwN2-LVXDNNRHZ7iC3EjZwJ8m7JeFa66acIkeeim6RJBuXmFqxsvP-vEd9wT-0g__"
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
                src="https://s3-alpha-sig.figma.com/img/2584/b045/999f1536b1d1e7c1831f8c3e12f69f5f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UR3yK7u94yw8E7WFrdU8P8pkeAtb9vnO52TTjbYp7jT9RJp~m3OQPaKl7E24I6Du9Wp8SA6DaNQEhWN-08p9wdoRZwZmCilRxrC68FOMoxGxRB-6k74N7Ln2O7Mh41CMuq1ad1LF2HANCfeufeteqrLoZz4WObUTGbGT0iNMUElSXdIGBp2aJljwoAJGWetU8ApBvgD4NeAoexhHOVV5NR8zgRdXzrotphe9dp180bGIDdDkK5bNHNW8m2HvisLqwqrzrlmEFBSldR33PTFj--DdwN2-LVXDNNRHZ7iC3EjZwJ8m7JeFa66acIkeeim6RJBuXmFqxsvP-vEd9wT-0g__"
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

              <Link
                href="https://www.google.com/maps/place/New+Dawn+Baptist+Church/@6.4281179,3.4498356,14z/data=!4m6!3m5!1s0x103bf513ff9bd641:0x596799a9108ac311!8m2!3d6.4245334!4d3.4463048!16s%2Fg%2F11cm10mf2g?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <p className="text-[#2C2563] font-[500] underline">
                    Open in Google Maps
                  </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipSection;
