import { CalendarDays, MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function BlogsCard({ title, date, onclick, image }) {
  return (
    <div className="bg-[#F9F9F7] p-4 py-10 rounded-lg shadow-md flex flex-col items-start justify-start gap-4 w-full max-w-sm">
      <h2 className="text-2xl font-bold text-left h-20 line-clamp-2">{title}</h2>

      <div className="flex items-center gap-2 text-gray-600">
        <CalendarDays className="text-gray-500" size={18} />
        <p>{date}</p>
      </div>

      <Image
        src={image}
        alt="Blog Image"
        width={400}
        height={200}
        className="rounded-md mt-2 w-full object-cover"
      />

      <button
        onClick={onclick}
        className="bg-white rounded-full px-4 py-2 shadow-md hover:bg-green-500 hover:text-white transition-colors cursor-pointer flex items-center gap-2 self-start"
      >
        Read more
        <MoveRight size={18} />
      </button>
    </div>
  );
}
