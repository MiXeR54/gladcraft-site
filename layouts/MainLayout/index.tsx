import { SnowFlakes } from "components";
import Head from "next/head";

interface IMainLayout {
  title: string;
  children: React.ReactNode;
}

export const MainLayout = ({ title, children }: IMainLayout) => {
  return (
    <div className="flex flex-col h-full min-h-full dark:bg-gray-700">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="GladCraft.ru - лучший майнкрафт сервер с индустриальными модами"
        />
      </Head>
      <SnowFlakes />
      {/* <NavBar /> */}
      <main className="container p-2 h-full">{children}</main>
      {/* <footer className="bg-gray-400">
        <div className="container"></div>
      </footer> */}
    </div>
  );
};
