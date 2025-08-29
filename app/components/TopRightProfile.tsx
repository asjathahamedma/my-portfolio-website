// components/TopRightProfile.tsx
import Image from "next/image";

export default function TopRightProfile() {
  return (
    <div className="z-50 max-w-[90vw]">
      <div className="flex items-center p-2 rounded-full ">

        {/* Spinning border wrapper */}
        <div className="relative w-14 h-14 flex items-center justify-center hover:scale-200 transform transition-transform duration-900">
          {/* Spinning border */}
          <div className="absolute inset-0 rounded-full border-dotted border-6 border-fuchsia-900 dark:border-[#00D9FF] animate-spin"></div>

          {/* Static image inside */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-black">
            <Image
              src="/profile.png"
              alt="Profile"
              width={48}
              height={48}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
