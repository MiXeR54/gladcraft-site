import Head from "next/head";

interface IMainLayout {
  title: string;
  children: React.ReactNode;
}

export const MainLayout = ({ title, children }: IMainLayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
