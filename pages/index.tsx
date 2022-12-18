import { Button, Input } from "components";
import { MainLayout } from "layouts";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, getValues } = useForm();

  const handleSubmit = () => {
    console.log(getValues());
  };
  return (
    <MainLayout title="Главная | GladCraft.ru">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-around">
        <div className="flex flex-col text-center justify-start">
          <h1 className="text-2xl md:text-5xl font-bold text-zinc-200">
            GladCraft: Новогодний сезон
          </h1>
          <p className="text-md text-zinc-300 font-mono">
            Возвращение легендарного сервера в новом обличии!
          </p>
        </div>
        <div className="dark:bg-gray-600 w-full md:w-1/4 rounded-xl flex flex-col items-center justify-center gap-2 p-4">
          <h2 className="font-bold text-xl mb-2 text-zinc-200">Регистрация</h2>
          <Input placeholder="Login" {...register("login")} />
          <Input placeholder="E-mail" {...register("email")} />
          <Input placeholder="Password" {...register("password")} />
          <Button className="mt-2" disabled onClick={() => handleSubmit()}>
            Создать аккаунт
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
