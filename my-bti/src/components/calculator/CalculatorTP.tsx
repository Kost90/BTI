"use client";
import Input from "../input/Input";
import Button from "../button/Button";
import { Calculation } from "./utility";
import { useForm, SubmitHandler } from "react-hook-form";
import { TypeDevelopEnum } from "../forms/bookingeneer/models";
import { useState } from "react";
import styles from "./CalculatorTP.module.css";
import Link from "next/link";

interface IInputData {
  squar: number;
  type: string;
}

interface ICalculatorTPProps {
  onChange: (sum: number) => void;
}

function CalculatorTP({ onChange }: ICalculatorTPProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInputData>();

  const onSubmit: SubmitHandler<IInputData> = (data) => {
    const sum = Calculation(data);
    onChange(sum);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.calc_form}>
      <label className={styles.label}>Тип обєкту</label>
      <select {...register("type")} className={styles.select}>
        <option value="" disabled selected>
          Оберіть тип обєкту
        </option>
        <option value={TypeDevelopEnum.flat}>квартира</option>
        <option value={TypeDevelopEnum.house}>будинок</option>
        <option value={TypeDevelopEnum.other}>приміщення</option>
      </select>
      <Input
        type={"number"}
        placeholder={"Введіть орієнтовну площу обєкту"}
        label={"Площа"}
        name={"squar"}
        required={true}
        register={register}
        errors={errors}
      />
      <Button type={"submit"}>Розрахувати</Button>
    </form>
  );
}

function CalcResult() {
  const [count, setCount] = useState(0);

  const handelChange = (sum: number) => {
    setCount(sum);
  };
  return (
    <div className="flex flex-col gap-2 items-center">
      <CalculatorTP onChange={handelChange} />
      <h1 className={styles.h1}>
        Вартість технічного паспорту становитеме:{" "}
        <span className={styles.span}>{count} грн.</span>
      </h1>
      {count !== 0 ? (
        <>
          <Button type={"button"}>
            <Link href="/services/bookingeneer">ЗАБРОНЮВАТИ ОБМІР</Link>
          </Button>
        </>
      ) : null}
    </div>
  );
}

export default CalcResult;
