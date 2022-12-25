import { Button, Input } from "components";
import { LauncherCards } from "containers";
import { MainLayout } from "layouts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IRegisterForm {
  login: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    login: yup
      .string()
      .required("Поле является обязательным")
      .min(6, "Минимум 6 символов"),
    email: yup
      .string()
      .email("Введите валидный email адрес")
      .required("Поле является обязательным"),
    password: yup
      .string()
      .required("Поле является обязательным")
      .min(6, "Минимум 6 символов"),
  })
  .required();

export default function Home() {
  const { getValues, control } = useForm<IRegisterForm>({
    mode: "all",
    defaultValues: {
      login: "",
      password: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async () => {
    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getValues()),
    })
      .then((res) => res.json())
      .then(console.log);
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
          <LauncherCards />
        </div>
        <div className="dark:bg-gray-600 w-full md:w-1/4 rounded-xl flex flex-col items-center justify-center gap-2 p-4">
          <h2 className="font-bold text-xl mb-2 text-zinc-200">Регистрация</h2>

          <Input name="login" control={control} />
          <Input name="email" control={control} />
          <Input name="password" control={control} />
          <Button className="mt-2" disabled onClick={() => handleSubmit()}>
            Создать аккаунт
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
