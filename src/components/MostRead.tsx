import Link from 'next/link';
import React from 'react';
interface MostReadNews{
    id: string;
    title: string;
}

const MostRead = async () => {
    const res  = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const news: MostReadNews[] = data.data;
    // console.log(news);
    return (
        <div className='card  bg-base-100 border border-gray-300 p-4'>
            <h2 className='font-bold text-red-700 mb-5'>সর্বাধিক পঠিত</h2>

            <div className='grid gap-5'>
                {news.map((n, i) => <Link href={`/news/${n.id}`} key={n.id} className='flex gap-2 items-center'>
                    
                   <p className='text-2xl font-bold text-red-500'>{i+1}</p> <h3>{n.title}</h3>
                   
                </Link>)}
            </div>
        </div>
    );
};

export default MostRead;