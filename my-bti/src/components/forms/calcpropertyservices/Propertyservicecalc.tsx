"use client";
import React, { memo, useCallback, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PropertyServicesEnum, IInput, IObjectdata } from "./models";
import { TypeChecker } from "./utility";
import Button from "@/components/button/Button";
import styles from "./Propertyservice.module.css";
import ServicesDisplay from "./ServicesDisplay";
import Loader from "@/components/loader/Loader";

interface IPropertycervProps {
  onChange: (type: IObjectdata) => void;
  onClick: () => void;
}

const Propertyservicecalc = memo(
  ({ onChange, onClick }: IPropertycervProps) => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<IInput>();

    const handelChange: SubmitHandler<IInput> = (data: IInput) => {
      onClick();
      const result = TypeChecker(data);
      console.log(result);
      onChange(result);
      reset();
    };

    return (
      <form onSubmit={handleSubmit(handelChange)} className={styles.calc_form}>
        <label className={styles.label}>Перелік послуг</label>
        <select {...register("type")} className={styles.select}>
          <option value="" disabled selected>
            Оберіть послугу
          </option>
          <option value={PropertyServicesEnum.newhouse}>
            введення в експлуатацію житлового будинку
          </option>
          <option value={PropertyServicesEnum.registration}>
            реєстрація права власності на квартиру
          </option>
          <option value={PropertyServicesEnum.divisionorunion}>
            поділ/обєднання обєкту нерухомості
          </option>
          <option value={PropertyServicesEnum.changetypeofprop}>
            зміна призначення обєкту нерухомого майна
          </option>
        </select>
        <Button type={"submit"}>Розрахувати</Button>
      </form>
    );
  }
);

function PropertyServResult() {
  const [service, setService] = useState({});
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(show);
    console.log(loading);
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const handelClick = () => {
    setLoading(!loading);
    setShow(!show);
  };

  const handelChangeService = () => {
    setShow(!show);
  };

  const handelChange = useCallback((type: IObjectdata) => {
    setService(type);
  }, []);
  return (
    <div className="flex flex-col gap-2 items-center">
      {loading && <Loader />}
      {show === true && loading === false ? (
        <ServicesDisplay services={service} onClick={handelChangeService} />
      ) : null}
      {show === false ? (
        <Propertyservicecalc onClick={handelClick} onChange={handelChange} />
      ) : null}
    </div>
  );
}

Propertyservicecalc.displayName = 'Propertyservicecalc';

export default PropertyServResult;
