import CommunityLifeCard from "../components/CommunityLifeCard";

const CommunityLife = () => {
  return (
    <section className="bg-[#F6F6F6] flex justify-center px-[60px] pt-[96px] pb-[400px] relative overflow-hidden">
      <div className="flex flex-col text-center gap-[96px]">
        <div>
          <h2 className="text-[48px] font-[600] mb-[18px]">Community life</h2>
          <p className="text-[24px] leading-[33.6px]">
            We believe in dynamic Christian worship as the foundation for daily
            life, and <br /> we strive to teach sound Biblical principles with
            love as our guiding <br /> principle.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 max-w-[1392px] mx-auto absolute left-0 2xl:left-[10%] bottom-[-25%] group-hover:top-0 px-[60px] transition duration-500 group">
          <CommunityLifeCard
            name="Activity name"
            img={`https://s3-alpha-sig.figma.com/img/7497/5458/3ece825df1b8343b31b953d041d1d7b8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bh64GqwURz2G5yHjT6VVjHgJ-oC1pJxmLn5C6GLK26t99-hdYjcv2gkIICwZo47vc3TEVGaWbMKNbgPCV1e2~n8SMF~Rr9RIQh2Ett8-r4CK2tNGAK6LOfW9m8Y5rC6e0qe-5876RHOz8qoMwZPsH8tKoFF2Qk7guiXT-Iaoem6771F3O--wZQkoYxbZwvB4TNqFMGu5HPSTgILzVrG0uQLJys-79FfVG2i4nvPg4HW8jnLqSAFS-HoWY4Al43UzN4nbxT-gjeEQXzJQYqHS~ZRBgHNs2tihtRIEVOImSKSr62U3xVnyVoMOkzI2psINcRiSKa~UivbgfALrCQ-djA__`}
          />
          <CommunityLifeCard
            name="Activity name"
            img={`https://s3-alpha-sig.figma.com/img/6dd5/c099/00a8a22a9c432b64a9c33cab0480bb27?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W51l12YJiEUigso9sBHf3omrCm285giRXhRJauYK-bSzWzGScvhVwwVLjkUTFPRyBzrqlzZDi1IvXRTjAiMttJ9a~scmZOOwxdt-mZATt~FJLcnhvSEP4zFHIMBy3KlZUIl36nsKE4HNWAMrz81lIvcR3JYc0c827STunCXERZ-PtyhgLcbkZlvzLZ5ya33M~o4bSu~3jO9VLvZA-pgNhJx5M~cJ0J~7tmGY3cEeGy-KHWwj9FJP7vz7QQYrh0IZXYyjtcn3pR47TgTd06npTPvqfjbylBsDEiKM3dzn-ptN3~VheCzj3qpZVZSwPN7Kk38jc6Mh1d5vJaevdlABLA__`}
          />
          <CommunityLifeCard
            name="Activity name"
            img={`https://s3-alpha-sig.figma.com/img/463d/2ba8/5dd94b8901ab674e48f5fcae7c4f7880?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRLe3SvSIAl9L1ddT8uKAD2zwO-FfLlRR4lkI1fgqvvzGMp8KM6EZT8KrJL7a0lKPez6siwm~3KOdnVObnyQigYsC6sg168VSqph6P71w4GysCjV840s~f5mOiYsr4cm~cwFKtihi82cWmXqwm8Leo8Gd4Fz9mL1c5fRJ31HibJpOyJBoputofuQon1OfAOqPaOEzkP~fgvEuFfLw8b~nXAw32g2CXxpcABODbQZhM3Dcx174WOqplZgD3MyiesGUrfdp1QwE-7VfBdsMx0n07N8jVp4ULEC32g6~Ofw2yfJNiEDE7lsl5SUiypY6GIKsUT80Zsj1n50Av5-v38XDA__`}
          />
          <CommunityLifeCard
            name="Activity name"
            img={`https://s3-alpha-sig.figma.com/img/7497/5458/3ece825df1b8343b31b953d041d1d7b8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bh64GqwURz2G5yHjT6VVjHgJ-oC1pJxmLn5C6GLK26t99-hdYjcv2gkIICwZo47vc3TEVGaWbMKNbgPCV1e2~n8SMF~Rr9RIQh2Ett8-r4CK2tNGAK6LOfW9m8Y5rC6e0qe-5876RHOz8qoMwZPsH8tKoFF2Qk7guiXT-Iaoem6771F3O--wZQkoYxbZwvB4TNqFMGu5HPSTgILzVrG0uQLJys-79FfVG2i4nvPg4HW8jnLqSAFS-HoWY4Al43UzN4nbxT-gjeEQXzJQYqHS~ZRBgHNs2tihtRIEVOImSKSr62U3xVnyVoMOkzI2psINcRiSKa~UivbgfALrCQ-djA__`}
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityLife;
