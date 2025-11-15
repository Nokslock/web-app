import Link from "next/link";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-4 px-50 py-10 ">
        <div className="text-start text-lg font-base col-span-3">
          &copy; Nockslock 2025, All rights reserved.
        </div>
        <div className="text-end">
          <div>
            <Link href="#">
              <FaTwitter className="text-2xl inline mr-5" />
              <FaInstagram className="text-2xl inline mr-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
