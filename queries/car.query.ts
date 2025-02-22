"use server";

import dbConnect from "@/lib/db";
import Car from "@/model/Car";

export const getCarBySlug = async (slug: string) => {
  if (!slug) {
    console.error("Slug không hợp lệ.");
  }

  try {
    await dbConnect();
    const car = await Car.findOne({ slug }).lean();

    if (!car) {
      console.error(`Không tìm thấy xe với slug: ${slug}`);
    }

    return JSON.parse(JSON.stringify(car));
  } catch (error) {
    console.error("Lỗi khi fetch xe theo slug:", error);
  }
};

export const getAllCarsForAdmin = async () => {
  try {
    await dbConnect();
    const cars: any[] = await Car.find().select("name priceFrom slug").lean();

    // Chuyển đổi _id thành chuỗi
    const serializedCars = cars.map((car) => ({
      ...car,
      _id: car._id.toString(),
    }));

    return serializedCars;
  } catch (error) {
    console.error("Lỗi khi fetch xe cho admin:", error);
    throw new Error("Lỗi khi lấy danh sách xe");
  }
};
