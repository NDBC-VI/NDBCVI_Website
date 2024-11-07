import ReusableCardComponent from "@/app/shared/components/ReusableCardComponent";

const prompts = [
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/7ab9/f7c3/5e56b436301c21aa48c6c80115b8932d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IwUiUK9SS4plbIxpqGfBzfcNUhMZ2YmJaMEZf5hosVvnrc6rHkpv7dVH5W4IoU-nUuceCdnvVwdKYWkhchilR7iDk8DOquJtlAPOAZdwgR0oPZ893Z0gFmMLztMXHdQfXzssr0lOta6SCa8M7ydFbJFwkYlDD-x7Yvd6JYiEzFY22UO8ku8XOJpVQSKAXiny6j9as0qyKjf224pukc9GHjqcdsvnguzRVArh9aBdEGRd4b74th7fS7SC5mOmMez9FR24Hrc85pVHkGRIfyktDwGxuTcFEy72JVIoNJuooYZwdIuF7S~pkJNAjhfx5hJKW-YCmyiPSbQRlrPPI0OMbg__",
    title: "Hausa Church",
    body: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle.",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/c399/a4aa/cbd312b546258322b4fb6eadc0c8c032?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mt8A9Nqq0f-4V2j6Tz9krgCo3aTWKRBrlu8NGdcwF4HXKYaSfzkITpDQKeGwu-JAn7~pGxmVNUEOWH8BqMZl5BbQE245uspjtN2cMqrj10Q3K2o9Zl-ZTgy5zUzwM0kTVBpueJHmhZPCr2ZiFkX5vNNeIfxdnlIbPvlfVlxWSOd45JiOjcN3dFYbVq-HfL5~nuOB~UnsWLhY1JE1bXk34-wLqXTkT9amR4kCS3hWMOJ44T84YKNnEOOEhjQ~WQbDv~hxUB6LzC4EOIipepj4mNbvu62-spfZDPOENNaTAly7hZ0TZTNSaR6Gy3Tk44UMhtyvJ5wRj5EPLNfw25Jwdg__",
    title: "Pastoral Ministry",
    body: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle.",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/3dc6/ac7e/02f63cd84abc597b4ee10623f3b5f3d5?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ajMGBrqJCsMRTuBTJ2NosePyQzVPSMO6gDTyzpWqioZGmLRbCxs0kivHsKzlXj7T7ZVSEQhTxvI3wW5m0rQIStea3AgXiMANJLcMPjTH1bnwRwhLpJQ8HEwEM6IMRU6RmP0gKGHlrnBSIipmDj1Sg8qdLinWGp624lYvICYgRuMRIQ6Va8T2wQUuo7VH3LMVqCpq2dSd6k8IbMLkjR5fW24Jv59YZJzoRqQMmlHHI3qpi2CE2teYHqW4jOT9cZJRABbg1vahBPHpSCrKf0RaaCOJSRtzATE68qgJTWWo1mqw-krJjMcuXifIeVzs~WyKUb9HrmGqShA4Jo0Li2MeLg__",
    title: "Church History",
    body: "We believe in dynamic Christian worship as the foundation for daily life, and we strive to teach sound Biblical principles with love as our guiding principle.",
  },
];

const MoreAboutNewDawn = () => {
  return (
    <section className="py-[60px] lg:py-[120px]">
      <div className="max-w-[1512px] mx-auto">
        <div className="text-center">
          <h2 className="text-[24px] lg:text-[48px] font-[600] mb-[18px]">
            More about New Dawn
          </h2>
          <p className="text-[18px] lg:text-[24px] lg:leading-[33.6px]">
            Join us and experience the <br className="lg:hidden"/> love of God at NDBC
          </p>
        </div>
        <div className="pt-[40px] lg:pt-[60px] flex flex-col lg:flex-row">
          {prompts.map((prompt, i) => (
            <ReusableCardComponent
              key={i}
              imgUrl={prompt.imgUrl}
              title={prompt.title}
              body={prompt.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreAboutNewDawn;
