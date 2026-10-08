import Image from 'next/image';
import React from 'react';
import { News } from './MainNews';



const NewsCard = ({news}:{news:News}) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-sm ">
                    <figure>
                      <Image
                        src={news.imageUrl}
                        height={600}
                        width={600}
                        alt={news.imageAlt} 
                      />
                    </figure>
                    <div className="card-body">
                        <p className="text-red-600 font-semibold">{news.category}</p>
                      <h2 className="card-title">{news
                        .title}</h2>
                      <p>
                        {news.description}
                      </p>
                     
                    </div>
                  </div>
        </div>
    );
};

export default NewsCard;