import React from "react";
import Image from "next/image";
export default function ProfileLogo({ src }) {
  return (
    <Image
      alt="Braydon Coyer"
      height={48}
      width={48}
      src={src}
      placeholder="blur"
      blurDataURL={src}
      className="rounded-full"
    />
  );
}
