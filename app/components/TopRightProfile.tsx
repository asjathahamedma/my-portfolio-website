// components/TopRightProfile.tsx
import Image from "next/image";

export default function TopRightProfile() {
  return (
    <div className="fixed top-6 right-10 z-50">
      <div className="flex items-center space-x-2 p-2 rounded-full ">

        {/* Spinning border wrapper */}
        <div className="relative w-14 h-14 flex items-center justify-center hover:scale-200 transform transition-transform duration-900">
          {/* Spinning border */}
          <div className="absolute inset-0 rounded-full border-dotted border-6 border-[#00D9FF] animate-spin"></div>

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
