import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";

export default function MobileNav() {
  return (
    <div className="flex items-center justify-between px-4 py-2 border rounded m-1 ">
      <div className="flex items-center gap-4">
        <Search></Search>
        <div className="">
          <span className="">
            <h4 className=" font-semibold">Any Where</h4>
            <p className="text-sm">
              <span>Anytime</span> <span>AnyGuest</span>
            </p>
          </span>
        </div>
      </div>

      <div>
        <SlidersHorizontal></SlidersHorizontal>
      </div>
    </div>
  );
}
