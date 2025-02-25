"use client";

import { FormEvent, useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import Swal from "sweetalert2";
import { ImSpinner3 } from "react-icons/im";
import { useQuery } from "@tanstack/react-query";
import { getAllCarsNameVsSlug } from "@/queries/car.query";
import NextImage from "../next-image";
import { createQuickConsult } from "@/actions/quick-consult.actions";

const HomeQuickConsultModal = () => {
  const { data: cars, isPending } = useQuery({
    queryKey: ["get-car-names-for-modal"],
    queryFn: getAllCarsNameVsSlug,
  });

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [choseCar, setChoseCar] = useState("");
  const [loading, setLoading] = useState(false);

  const resetFormHandler = () => {
    setName("");
    setPhone("");
    setChoseCar("");
    setLoading(false);
  };

  const handleScroll = () => {
    const supportBuyersSection = document.getElementById("support-buyers");

    if (!supportBuyersSection) return;

    const supportBuyersPosition =
      supportBuyersSection.getBoundingClientRect().top;
    const isScrolledToSupportBuyers =
      supportBuyersPosition < window.innerHeight;

    if (isScrolledToSupportBuyers) {
      setShow(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (!name?.trim() || !phone?.trim() || !choseCar?.trim()) {
      Swal.fire({
        icon: "error",
        title: "Không hợp lệ!",
        text: "Vui lòng kiểm tra lại thông tin trước khi gửi form.",
        confirmButtonColor: "#C4161C",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await createQuickConsult({ name, phone, choseCar });

      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Thành công!",
          text: "Chúng tôi sẽ liên hệ đến Anh (Chị) trong thời gian sớm nhất.",
          confirmButtonColor: "green",
        });

        window.removeEventListener("scroll", handleScroll);
        resetFormHandler();
        setShow(false);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.error("Lỗi gửi form:", error);
      Swal.fire({
        icon: "error",
        title: "Lỗi gửi yêu cầu!",
        text:
          error instanceof Error
            ? error.message
            : "Đã xảy ra lỗi, vui lòng thử lại.",
        confirmButtonColor: "#C4161C",
      });
    }

    setLoading(false);
  };

  return (
    <Modal
      open={show}
      onClose={() => setShow(false)}
      center
      classNames={{
        modal: "customModal !max-w-initial !w-[80vw]",
      }}
    >
      <form
        className="bg-white relative rounded-md space-y-3"
        onSubmit={submitHandler}
      >
        <div className="w-full aspect-[2.3] relative rounded-t-md overflow-hidden">
          <NextImage
            src="/images/home/popup-banner.webp"
            alt="Home Popup banner"
          />
        </div>

        <div className="p-8 pt-4 space-y-6">
          <div>
            <h5 className="text-center text-primary font-bold text-3xl mb-3">
              Đăng ký nhận báo giá
            </h5>
            <p className="text-center text-lg mb-3">
              Vui lòng cung cấp thông tin, chúng tôi sẽ liên hệ Anh/Chị ngay!
            </p>
          </div>

          <div className="form-input-wrapper">
            <label htmlFor="name" className="text-sm font-bold mb-1 block">
              Họ tên *
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nguyễn Văn A"
              className="w-full py-[10px] px-4 rounded-md bg-[#f5f5f5] outline-none border"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-input-wrapper">
            <label htmlFor="phone" className="text-sm font-bold mb-1 block">
              Số điện thoại *
            </label>
            <input
              type="number"
              id="phone"
              placeholder="0989 223 653"
              className="w-full py-[10px] px-4 rounded-md bg-[#f5f5f5] outline-none border"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-input-wrapper">
            <label htmlFor="car" className="text-sm font-bold mb-1 block">
              Dòng xe quan tâm
            </label>
            <select
              id="car"
              className="w-full py-[10px] px-4 rounded-md bg-[#f5f5f5] outline-none border"
              value={choseCar}
              onChange={(e) => setChoseCar(e.target.value)}
              disabled={isPending}
            >
              <option value="">-- Chọn dòng xe -- </option>
              {cars?.map((car: any, index: number) => (
                <option value={car.name} key={index}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="bg-secondary rounded-md w-full text-white uppercase py-3 flex items-center justify-center gap-1 hover:scale-[1.01] disabled:opacity-50"
          >
            {loading ? (
              <>
                <ImSpinner3 size={20} className="animate-spin" />
                Đang gửi
              </>
            ) : (
              "Đăng ký"
            )}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default HomeQuickConsultModal;
