"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import { useAppSelector } from "@/lib/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { addOrder } from "@/lib/features/orders/OrderSlice";
import { TypeDevelopEnum, IFormInput } from "./models";
import emailjs from "@emailjs/browser";
import styles from "./BookForm.module.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { popUpVariant } from "@/constants/animation";

function BookForm() {
  const form = useRef<HTMLFormElement>(null);
  const book = useAppSelector((state) => state.booking.booking);
  const router = useRouter();

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
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
    if (form.current) {
      emailjs.sendForm(
        "bti_booking_form",
        "booking_form",
        form.current,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
      );
    }
    reset();
    router.replace("/services/modalwindow");
  };

  return (
    <>
      {book.time !== undefined ? (
        <>
          <motion.h2 
          initial={"initial"}
          whileInView={"visible"}
          transition={{ duration: 0.3 }}
          className="uppercase font-semibold">
            Введіть Ваші данні та адресу:
          </motion.h2>
          <motion.form
          initial={"initial"}
          whileInView={"visible"}
          transition={{ duration: 0.3 }}
          variants={popUpVariant}
            onSubmit={handleSubmit(onSubmit)}
            className={styles.bookform}
            ref={form}
          >
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
            <input
              type="text"
              value={book.date}
              {...register("date")}
              className="hidden"
            />
            <input
              type="text"
              value={book.time}
              {...register("time")}
              className="hidden"
            />
            <Button type={"submit"}>Надіслати</Button>
          </motion.form>
        </>
      ) : null}
    </>
  );
}

export default BookForm;
