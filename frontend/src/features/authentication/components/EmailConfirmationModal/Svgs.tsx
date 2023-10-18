import { Dispatch } from "react";
import { modals } from ".";

export function ArrowLeftSvg({
  setCurrentModal,
}: {
  setCurrentModal: Dispatch<string>;
}) {
  return (
    <svg
      onClick={() => setCurrentModal(modals[0])}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-left-circle"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 12H8" />
      <path d="m12 8-4 4 4 4" />
    </svg>
  );
}

export function ArrowRightSvg({
  setCurrentModal,
}: {
  setCurrentModal: Dispatch<string>;
}) {
  return (
    <svg
      onClick={() => setCurrentModal(modals[1])}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-right-circle"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="m12 16 4-4-4-4" />
    </svg>
  );
}
