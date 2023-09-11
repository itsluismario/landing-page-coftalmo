import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex justify-center text-md m-10 sm:m-10 text-gray-900 text-center">
      <p>
        Para contactarnos{" "}
        <Link
          href="https://wa.me/524431280937"
          target="_blank"
          className="font-bold"
          rel="noopener noreferrer"
        >
          dale click aquí
        </Link>
      </p>
    </div>
  );
}
