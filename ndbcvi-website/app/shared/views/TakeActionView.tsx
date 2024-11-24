const actionLiks = [
  "Celebrate Anniversary",
  "Child Dedication",
  "Share a Testiomony",
  "Share a Celebrate Birthday",
];

const TakeActionView = () => {
  return (
    <div className="h-full flex flex-col gap-[16px] items-start justify-start">
      {actionLiks.map((link, i) => (
        <div key={i}>
          <button type="button" className="text-[24px] lg:text-[30px] font-[600] whitespace-nowrap">
            {link}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TakeActionView;
