import { formatDateToMonthDay } from '@/utils/dateFormatter';
import { CalendarDays, MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function BlogsCard({ title, date, onclick, image, description }) {
  return (
    <div className="bg-[#F9F9F7] p-4 py-8 rounded-lg shadow-md flex flex-col justify-start gap-4 w-full max-w-sm min-h-[520px]">
      <div className="flex flex-col gap-3 flex-grow">
        <h2 className="text-2xl font-bold text-left line-clamp-2">{title}</h2>

        <div className="flex items-center gap-2 text-gray-600">
          <CalendarDays className="text-gray-500" size={18} />
          <p>{formatDateToMonthDay(date)}</p>
        </div>

        <div className="w-full h-[200px] relative">
          <Image
            src={image}
            alt="Blog Image"
            fill
            className="rounded-md object-cover"
          />
        </div>

        {/* Short Description */}
        <p className="text-gray-700 text-sm line-clamp-3">{description}</p>
      </div>

      <div>
        <button
          onClick={onclick}
          className="bg-white rounded-full px-4 py-2 shadow-md hover:bg-green-500 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
        >
          Read more
          <MoveRight size={18} />
        </button>
      </div>
    </div>
  );
}
