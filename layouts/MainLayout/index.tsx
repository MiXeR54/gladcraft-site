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
      </Head>
      <SnowFlakes />
      {/* <NavBar /> */}
      <main className="container py-2 h-full">{children}</main>
      {/* <footer className="bg-gray-400">
        <div className="container"></div>
      </footer> */}
    </div>
  );
};
