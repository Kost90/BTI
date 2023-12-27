"use client";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/input/Input";
import styles from "./contactForm.module.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useAppSelector } from "@/lib/hooks";

type Inputs = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const contactSchema = {
  name: string().trim().required().min(3).max(40),
  email: string()
    .email()
    .required()
    .matches(/@[^.]*\./),
  phone: string().matches(phoneNumberRegex, "Is not a number"),
  message: string().trim().required().min(3),
};

function ContactForm() {
  const theme = useAppSelector((state) => state.theme.theme)
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(contactSchema)),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(process.env.PUBLIC_KEY);
    if (form.current) {
      emailjs.sendForm(
        "bti_contact_form",
        "contact_form",
        form.current,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
      );
    }
    reset();
    router.replace("/services/modalwindow");
  };
  return (
    <form
      className={theme === 'light'?styles.light_contactform:styles.dark_contactform}
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
    >
      <Input
        type={"text"}
        placeholder={"Введіть Ваше імя"}
        name={"name"}
        register={register}
        label={"Імя та побатькові:"}
        required={true}
        errors={errors}
      />

      <Input
        type={"email"}
        placeholder={"Введіть Ваш email"}
        name={"email"}
        register={register}
        label={"Введіть email:"}
        required={true}
        errors={errors}
      />

      <Input
        type={"text"}
        placeholder={"Введіть Ваш телефон"}
        name={"phone"}
        register={register}
        label={"Введіть номер телефону:"}
        required={true}
        errors={errors}
      />
      <label>Повідомлення:</label>
      <textarea
        placeholder="Ваше повідомлення"
        {...register("message", { required: true })}
        className={theme === 'light'?styles.light_textarea:styles.dark_textarea}
      />

      {errors.message?.message && (
        <div style={{ color: "red" }}>Введіть повідомлення</div>
      )}
      <Button type={"submit"}>Надіслати</Button>
    </form>
  );
}

export default ContactForm;
