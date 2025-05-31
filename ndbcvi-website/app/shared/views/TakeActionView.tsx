import { MenuLink } from "./MenuLink";

const actionLinks = [
  'Celebrate Anniversary',
  "Child Dedication",
  "Share a Testimony",
  "Celebrate Birthday",
];

const TakeActionView = () => {
  return (
    <div className="flex flex-col gap-[30px] md:gap-[16px] justify-start items-start">
      {actionLinks.map((link, i) => (
        <MenuLink key={i} link={{ title: actionLinks[i], path:"/", id: i}}/>
      ))}
    </div>
  );
};

export default TakeActionView;
