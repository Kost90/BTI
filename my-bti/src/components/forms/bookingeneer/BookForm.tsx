"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import { useAppSelector } from "@/lib/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { addOrder } from "@/lib/features/orders/OrderSlice";
import { TypeDevelopEnum, IFormInput } from "./models";
import styles from "./BookForm.module.css";

function BookForm() {
  const book = useAppSelector((state) => state.booking.booking);
  const order = useAppSelector((state) => state.orders.orders);
  const router = useRouter();
  console.log(order);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const booking = {
      ...book,
      name: data.name,
      adress: data.adress,
      typeDevelop: data.typeDevelop,
      phone: data.phone ?? "",
      email: data.email,
      square: data.square,
    };
    dispatch(addOrder(booking));
    reset();
    router.replace("/services/modalwindow");
  };

  return (
    <>
      {book.time !== undefined ? (
        <>
          <h2 className="uppercase font-semibold">
            Введіть Ваші данні та адресу:
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.bookform}>
            <Input
              type={"text"}
              placeholder={"Ваше імя"}
              label={"Ваше імя"}
              name={"name"}
              required={true}
              minLength={3}
              maxLength={50}
              register={register}
              errors={errors}
            />
            <label className={styles.label}>Тип обєкту</label>
            <select {...register("typeDevelop")} className={styles.select}>
              <option value="" disabled selected>
                Оберіть тип обєкту
              </option>
              <option value={TypeDevelopEnum.flat}>квартира</option>
              <option value={TypeDevelopEnum.house}>будинок</option>
              <option value={TypeDevelopEnum.other}>приміщення</option>
            </select>
            <Input
              type={"text"}
              placeholder={"Введіть адресу обєкту"}
              label={"Вулиця"}
              name={"adress"}
              required={true}
              minLength={3}
              maxLength={50}
              register={register}
              errors={errors}
            />
            <Input
              type={"text"}
              placeholder={"Введіть номер телефону"}
              label={"Телефон"}
              name={"phone"}
              required={true}
              pattern={/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/}
              register={register}
              errors={errors}
            />
            <Input
              type={"email"}
              placeholder={"Введіть Ваш email"}
              label={"Email"}
              name={"email"}
              required={true}
              register={register}
              errors={errors}
            />
            <Input
              type={"number"}
              placeholder={"Введіть орієнтовну площу обєкту"}
              label={"Площа"}
              name={"square"}
              required={true}
              register={register}
              errors={errors}
            />
            <Button type={"submit"}>Надіслати</Button>
          </form>
        </>
      ) : null}
    </>
  );
}

export default BookForm;
