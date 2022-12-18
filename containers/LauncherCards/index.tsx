import Image from "next/image";

const launchers = [
  {
    type: "Windows",
    img: "/windows.svg",
    alt: "windows logo",
    url: "http://launcher.gladcraft.ru/Launcher.exe",
  },
  {
    type: "MacOS",
    img: "/mac.svg",
    alt: "macos logo",
    url: "http://launcher.gladcraft.ru/Launcher.jar",
  },
  {
    type: "Linux",
    img: "/linux.svg",
    alt: "linux logo",
    url: "http://launcher.gladcraft.ru/Launcher.jar",
  },
];

export const LauncherCards = () => {
  return (
    <div className="flex flex-col gap-2 mt-8">
      <h2 className="text-zinc-300">Доступные лаунчеры:</h2>
      <div className="flex flex-row gap-2 justify-center">
        {launchers.map((launcher) => {
          return <LauncherCard key={launcher.type} {...launcher} />;
        })}
      </div>
    </div>
  );
};

interface ILauncherCard {
  type: string;
  url: string;
  img: string;
  alt: string;
}

const LauncherCard = ({ type, url, img, alt }: ILauncherCard) => {
  return (
    <a
      className="dark:bg-gray-600 hover:bg-gray-500 p-2 rounded-xl text-zinc-200 flex gap-2 flex-col"
      href={url}
    >
      <Image src={img} width={80} height={80} alt={alt} />
      <p>{type}</p>
    </a>
  );
};
