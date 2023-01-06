export const NavBar = () => {
  return (
    <header className="w-full">
      <div className="container flex justify-center items-center h-12">
        <a
          href="https://s1map.gladcraft.ru"
          target="_blank"
          rel="noreferrer"
          className="flex text-zinc-300 hover:underline"
        >
          Карта сервера
        </a>
      </div>
    </header>
  );
};
