import React from "react";
import { Container } from "../components/Container";

export default function CommunityAll() {
  return (
    <Container showcircles title="Community All - Gonzalo Axel ">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          Leave a note
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Community Wall
        </span>
      </h1>
      <p>
        Thank you for visiting my site! If you feel so inclined, leave me a
        comment, note or suggestion below! I'd love to hear from you!
      </p>
    </Container>
  );
}
