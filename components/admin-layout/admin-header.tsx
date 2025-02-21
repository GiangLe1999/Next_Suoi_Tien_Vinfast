import { FC } from "react";
import { MdViewList } from "react-icons/md";
import { FaAngleDoubleLeft } from "react-icons/fa";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import AdminNotifications from "./admin-notifications";

interface Props {
  isExpand: boolean;
  setIsExpand: (isExpand: boolean) => void;
}

const AdminHeader: FC<Props> = ({ isExpand, setIsExpand }) => {
  return (
    <div className={`${isExpand ? "md:ml-[260px]" : "md:ml-[80px]"} ml-0`}>
      <header className="px-6 py-3 flex items-center flex-wrap gap-x-2 gap-y-6 md:justify-between justify-start">
        <button
          onClick={() => setIsExpand(!isExpand)}
          className="w-10 h-10 md:grid hidden admin-item-shadow  place-items-center border-admin_gray_text rounded-full bg-white text-admin_gray_text"
        >
          {isExpand ? (
            <FaAngleDoubleLeft size={20} />
          ) : (
            <MdViewList size={22} />
          )}
        </button>

        <div className="flex md:items-center flex-wrap gap-8 md:flex-row flex-col">
          <Link href="/" className="flex items-center gap-1 text-sm font-bold">
            <IoMdHome size={20} className="-mt-[2px]" />
            Đến Trang Chủ
          </Link>
          <AdminNotifications />
        </div>
      </header>
    </div>
  );
};

export default AdminHeader;
