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
      <div className="w-full h-full flex items-center justify-around">
        <div>
          <h1 className="flex text-5xl ">GladCraft: Начало</h1>
        </div>
        <div className="dark:bg-gray-600 w-1/4 rounded-xl flex flex-col items-center justify-center gap-2 p-4">
          <h2 className="font-bold text-xl mb-2 text-gray-200">Регистрация</h2>
          <Input placeholder="Login" {...register("login")} />
          <Input placeholder="E-mail" {...register("email")} />
          <Input placeholder="Password" {...register("password")} />
          <Button className="mt-2" onClick={() => handleSubmit()}>
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
