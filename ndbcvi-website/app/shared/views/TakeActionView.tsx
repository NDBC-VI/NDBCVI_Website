import { MenuLink } from "./MenuLink";

const actionLinks = [
  'Celebrate Anniversary',
  "Child Dedication",
  "Share a Testiomony",
  "Share a Celebrate Birthday",
];

const TakeActionView = () => {
  return (
    <div className="flex flex-col gap-[16px] justify-start items-start">
      {actionLinks.map((link, i) => (
        <MenuLink key={i} link={{ title: actionLinks[i], path:"/", id: i}}/>
      ))}
    </div>
  );
};

export default TakeActionView;
