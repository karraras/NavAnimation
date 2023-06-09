import React from "react";

const SideBar = () => {
  const [open, setOpen] = React.useState(true);
  const Menu = [
    {
      icon: "fa-duotone fa-chart-line",
      name: "Dashboard",
      link: "/#",
      duration: "0.1s",
    },
    {
      icon: "fa-solid fa-inbox",
      name: "Inbox",
      link: "/#",
      duration: "0.2s",
    },
    {
      icon: "fa-regular fa-user",
      name: "Accounts",
      link: "/#",
      gap: true,
      duration: "0.3s",
    },
    {
      icon: "fa-solid fa-calendar-days",
      name: "Schedule",
      link: "/#",
      duration: "0.4s",
    },
    {
      icon: "fa-regular fa-search",
      name: "Search",
      link: "/#",
      duration: "0.5s",
    },
    {
      icon: "fa-solid fa-chart-simple",
      name: "Analytics",
      link: "/#",
      gap: true,
      duration: "0.6s",
    },
    {
      icon: "fa-regular fa-file",
      name: "Files",
      link: "/#",
      duration: "0.7s",
    },
    {
      icon: "fa-solid fa-gear",
      name: "Setting",
      link: "/#",
      duration: "0.8s",
    },
  ];

  return (
    <aside
      className={`bg-slate-900 h-screen duration-500 ${
        open ? " w-[270px]" : "w-[80px]"
      } pt-[70px] px-[20px] relative`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="absolute text-white text-xl top-[15px] right-[20px] "
      >
        <i className="fa-solid fa-bars-staggered font-FontAwesome"></i>
      </button>

      <ul>
        {Menu.map((items, index) => {
          return (
            <li
              key={index}
              className={`text-white flex gap-[15px] p-2 pl-[12px] h-[40px] my-[10px] items-center rounded  ${
                items.gap && "mb-[30px]"
              } cursor-pointer en relative`}
            >
              <i className={`${items.icon} font-FontAwesome `}></i>
              <span
                style={{ transitionDuration: `${items.duration}` }}
                className={`origin-left ${
                  !open
                    ? `absolute  opacity-0 translate-x-[150px] animat   bg-white text-black rounded font-bold p-[8px]`
                    : " absolute delay-300   translate-x-[30px] "
                }  `}
              >
                {items.name}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default SideBar;
