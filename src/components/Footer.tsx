import { Film, Mail, Phone } from "lucide-react";
export const Footer = () => {
  return (
    <div>
      <div className="bg-[#4338CA] p-10 md:flex md:justify-between">
        <div className="flex-col gap-y-[12px] ">
          <div className="flex ">
            <Film color="white" className="w-[20px] h-[20px]" />
            <p className="text-[16px, #4338CA] text-[#fff] font-bold">
              Movie Z
            </p>
          </div>
          <p className="text-[#fff] font-[14px]">
            © 2025 Movie Z. All Rights Reserved.
          </p>
        </div>
        <div className="flex md:flex gap-12">
          <div className="flex-col">
            <div className="flex-col gap-4">
              <p className="text-[#fff] font-[14px]">Contact Information</p>
              <div className="flex items-center gap-3">
                <Mail color="white" />
                <div className="flex-col">
                  <p className="text-[#fff] font-[14px]">Email:</p>
                  <p className="text-[#fff] font-[14px]">support@movieZ.com</p>
                </div>
              </div>
            </div>

            <div className="flex-col">
              <div className="flex items-center gap-3">
                <Phone color="white" />
                <div className="flex-col">
                  <p className="text-[#fff] font-[14px]">Phone:</p>
                  <p className="text-[#fff] font-[14px]">+976 (11) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-row md:items-center">
            <p className="text-[#fff] font-[14px]">Follow us</p>
            <div className="flex-row md:flex gap-3 ">
              <p className="text-[#fff] font-[14px]">Facebook</p>
              <p className="text-[#fff] font-[14px]">Instagram</p>
              <p className="text-[#fff] font-[14px]">Twitter</p>
              <p className="text-[#fff] font-[14px]">Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
