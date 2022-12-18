import { Button, Input } from "components";
import { MainLayout } from "layouts";

export default function Home() {
  return (
    <MainLayout title="Главная | GladCraft.ru">
      <div className="w-full h-full flex items-center justify-around">
        <div>
          <h1 className="flex text-5xl ">GladCraft: Начало</h1>
        </div>
        <div className="dark:bg-gray-600 w-1/4 rounded-xl flex flex-col items-center justify-center gap-2 p-4">
          <h2 className="font-bold text-xl mb-2 text-gray-200">Регистрация</h2>
          <Input placeholder="Login" />
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <Button className="mt-2">Зарегистрироваться</Button>
        </div>
      </div>
    </MainLayout>
  );
}
