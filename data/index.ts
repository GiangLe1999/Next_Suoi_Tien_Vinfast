import {
  FaEnvelopeOpenText,
  FaCalculator,
  FaCarAlt,
  FaChartPie,
  FaFlag,
  FaThumbsUp,
  FaShieldAlt,
  FaHeartbeat,
  FaHome,
  FaInfoCircle,
  FaBlog,
  FaCar,
} from "react-icons/fa";

import { BiSolidContact } from "react-icons/bi";

import { MdPhone } from "react-icons/md";

import { IconType } from "react-icons";
import { linkConstants } from "./constants";

export const homeBanners = [
  {
    title: "Vinfast VF8",
    link: "/vf8",
    image: "/images/home/banners/vf8-banner.webp",
  },
  {
    title: "Vinfast VF9",
    link: "/vf9",
    image: "/images/home/banners/vf9-banner.webp",
  },
  {
    title: "Vinfast VF-e34",
    link: "/",
    image: "/images/home/banners/vf-e34-banner.webp",
  },
  {
    title: "Vinfast VF6",
    link: "/vf6",
    image: "/images/home/banners/vf6-banner.webp",
  },
];

export const navItems: {
  title: string;
  link: string;
  isParent?: boolean;
  icon?: IconType;
}[] = [
  {
    title: "trang chủ",
    link: linkConstants.home,
    icon: FaHome,
  },
  {
    title: "giới thiệu",
    link: linkConstants.introduce,
    icon: FaInfoCircle,
  },
  {
    title: "giá xe vinfast",
    link: linkConstants.quote,
    isParent: true,
  },
  {
    title: "mua xe",
    link: "/#",
    isParent: true,
  },
  {
    title: "dịch vụ",
    link: "/#",
    isParent: true,
  },
  {
    title: "tin tức",
    link: linkConstants.news,
    icon: FaBlog,
  },
  {
    title: "liên hệ",
    link: linkConstants.contact,
    icon: BiSolidContact,
  },
];

export const adminNavItems: {
  title: string;
  link: string;
  icon?: IconType;
}[] = [
  {
    title: "Dashboard",
    link: linkConstants.dashboard,
    icon: FaHome,
  },
  {
    title: "List xe",
    link: linkConstants.admin_cars,
    icon: FaCar,
  },
  {
    title: "Bài viết",
    link: linkConstants.admin_articles,
    icon: FaBlog,
  },
];

type navCarItemType = {
  img: string;
  name: string;
  price: string;
  link: string;
};

export const navCarMenu: navCarItemType[] = [
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740191819/Suoi%20Tien%20Vinfast/airek9me2u7sszbqwsd7.jpg",
    name: "Vinfast VF3",
    price: "240",
    link: "vf3",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740213021/Suoi%20Tien%20Vinfast/ab4jerelgiwhckcbknam.webp",
    name: "Vinfast VF5",
    price: "480",
    link: "vf5",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740214584/Suoi%20Tien%20Vinfast/ke7xwcyrxqnsryxnhla0.webp",
    name: "Vinfast VF6",
    price: "640",
    link: "vf6",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740240220/Suoi%20Tien%20Vinfast/x88b0dix3dojiwtiygy1.png",
    name: "Vinfast VF7",
    price: "760",
    link: "vf7",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740216994/Suoi%20Tien%20Vinfast/uk573tijp6c9o6qmqn7d.webp",
    name: "Vinfast VF8",
    price: "970",
    link: "vf8",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1740219323/Suoi%20Tien%20Vinfast/sqfnwwdqze8jrz6qhwlg.webp",
    name: "Vinfast VF9",
    price: "1380",
    link: "vf9",
  },
];

type homeOptionType = {
  title: string;
  link: string;
  icon: IconType;
  des: string;
};

export const homeOptions: homeOptionType[] = [
  {
    title: "yêu cầu báo giá",
    link: linkConstants.requireQuotation,
    icon: FaEnvelopeOpenText,
    des: "Đăng ký để nhận báo giá mới nhất cho các <strong>dòng xe Vinfast</strong>",
  },
  {
    title: "tính phí lăn bánh",
    link: linkConstants.finalPrice,
    icon: FaCalculator,
    des: "Giá các phiên bản xe Vinfast cùng các khoản phí chi tiết tại <strong>Vinfast Suối Tiên</strong>",
  },
  {
    title: "mua xe trả góp",
    link: linkConstants.installment,
    icon: FaChartPie,
    des: "Trả góp đến <strong>85% giá trị xe</strong>, lãi suất chỉ <strong>0%/tháng</strong>",
  },
  {
    title: "đăng ký lái thử",
    link: linkConstants.testDrive,
    icon: FaCarAlt,
    des: "Đến với <strong>Vinfast Suối Tiên</strong> để được lái thử những mẫu xe Vinfast mới nhất",
  },
];

type itemType = { icon: IconType; title: string; desc: string };

export const aboutItems: itemType[] = [
  {
    icon: FaFlag,
    title: "THIẾT KẾ",
    desc: "Chúng tôi mang đến niềm vui lái xe thuần túy bằng cách tạo nên những mẫu xe chứa đựng tính cách và tâm hồn. Trong đó, ngôn ngữ thiết kế chính là nét độc đáo mà Mazda sử dụng để tác động và kết nối các giác quan của người nhìn.",
  },
  {
    icon: FaThumbsUp,
    title: "SÁNG TẠO",
    desc: "Tại Mazda, tất cả chúng ta đều nói về việc lái xe và cảm giác hứng khởi mà điều đó mang lại. Lái xe không đơn thuần chỉ là vận hành một cỗ máy mà còn liên hệ đến những va chạm và cảm xúc. Một chiếc xe không những phải phản ứng hoàn hảo với các thao tác của người lái mà còn phải sở hữu các hệ thống trực quan.",
  },
  {
    icon: FaShieldAlt,
    title: "AN TOÀN",
    desc: "Mazda nhắm đến mục tiêu mang đến cho tất cả khách hàng niềm vui lái xe và hiệu suất an toàn trong một môi trường vượt trội. Dựa trên triết lý này, Mazda đang thúc đẩy nghiên cứu và phát triển các tính năng an toàn để hoàn thành mục tiêu quan trọng: xe lưu thông an toàn và không xảy ra tai nạn.",
  },
  {
    icon: FaHeartbeat,
    title: "CẢM XÚC",
    desc: "Tại Mazda, Chúng tôi không chỉ sản xuất xe, mà còn mang lại niềm vui và hạnh phúc cho khách hàng bởi Mazda tin rằng chiếc xe sẽ lay động cảm xúc và thức tỉnh các giác quan, tạo sự phấn khích cho người sở hữu.",
  },
];

export const footerCol1: string[] = [
  "Chuyên cung cấp dòng xe Vinfast các loại",
  "Xe 4 chỗ VinFast VF 5, 5 chỗ VinFast VF 6 và VF 7, 5 chỗ gầm cao VinFast VF 8, 7 chỗ VinFast VF 9",
  "Địa chỉ : 127 Quốc Lộ 13, Khu phố 1, Thủ Đức, Ho Chi Minh City, Vietnam",
];

type footerItemType = { title: string; link: string };

export const footerCol2: footerItemType[] = [
  { title: "Vinfast VF3", link: "/vf3" },
  { title: "Vinfast VF5", link: "/vf5" },
  { title: "Vinfast VF6", link: "/vf6" },
  { title: "Vinfast VF7", link: "/vf7" },
  { title: "Vinfast VF8", link: "/vf8" },
  { title: "Vinfast VF9", link: "/vf9" },
];

export const footerCol3: footerItemType[] = [
  { title: "Bảng giá chi tiết", link: linkConstants.quote },
  { title: "Tính phí lăn bánh", link: linkConstants.finalPrice },
  { title: "Thủ tục trả góp", link: linkConstants.installment },
  { title: "Đăng ký lái thử", link: linkConstants.testDrive },
];

export const footerCol32: footerItemType[] = [
  { title: "Chính sách Thanh toán", link: linkConstants.paymentPolicy },
  { title: "Chính sách Bảo mật", link: linkConstants.privacyPolicy },
  {
    title: "Chính sách Giao nhận - Vận chuyển",
    link: linkConstants.deliveryPolicy,
  },
];

export const footerCol4: { title: string; link: string; icon: IconType }[] = [
  { title: "Hotline: 0333122512", link: "tel:0333122512", icon: MdPhone },
  // {
  //   title: "hualong02072000@gmail.com",
  //   link: "mailto:hualong02072000@gmail.com",
  //   icon: MdMail,
  // },
];

export const carFees = {
  phiDkyBienso: 20000000,
  phiDuongbo: 1560000,
  phiDkiem: 90000,
  bhTNDS: 530700,
};

export const carNames: string[] = [
  "new mazda 2",
  "new mazda 2 sport",
  "new mazda cx-3",
  "new mazda 3",
  "new mazda3 sport",
  "new mazda cx-30",
  "new mazda 6",
  "new mazda cx-5 ipm",
  "new mazda cx-8",
  "new mazda bt-50",
];
