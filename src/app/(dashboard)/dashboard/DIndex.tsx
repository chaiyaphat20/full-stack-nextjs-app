"use client";
import { useAuthStore } from "@/lib/zustand/store";

export default function DIndex() {
  const { userProfile, setUserProfile } = useAuthStore((state) => state);
  return (
    <div>
      {userProfile?.user && <h1>สวัสดีคุณ {userProfile?.user?.name}:{userProfile?.user?.email} </h1>}
    </div>
  );
}
