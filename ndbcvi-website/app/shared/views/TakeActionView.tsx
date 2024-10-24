const actionLiks = [
  "Celebrate Anniversary",
  "Child Dedication",
  "Share a Testiomony",
  "Share a Celebrate Birthday",
];

const TakeActionView = () => {
  return (
    <div className="flex flex-col gap-[16px] justify-start">
      {actionLiks.map((link, i) => (
        <div key={i}>
          <button type="button" className="text-[30px] font-[600]">
            {link}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TakeActionView;
