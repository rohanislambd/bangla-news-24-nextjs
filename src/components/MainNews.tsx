import Image from "next/image";
export interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string

}

const MainNews = ({ news }:{news:News[]}) => {
  const [firstNews, ...otherNews]= news;

  return (
    <div className="flex gap-4">
      <div className="card bg-base-100 w-96 shadow-sm ">
        <figure>
          <Image
            src={firstNews.imageUrl}
            height={600}
            width={600}
            alt={firstNews.imageAlt}
          />
        </figure>
        <div className="card-body">
            <p className="text-red-600 font-semibold">{firstNews.category}</p>
          <h2 className="card-title">{firstNews
            .title}</h2>
          <p>
            {firstNews.description}
          </p>
         
        </div>
      </div>
      <div className="grid gap-2 shadow-sm">
        {
            otherNews.slice(0,4).map(on => <div className="card bg-base-100 border border-gray-300 py-5 px-3" key={on.id}>
                <p className="text-red-600 font-semibold">{firstNews.category}</p>
                <div>{on.title}</div>
            </div>)
        }
      </div>
    </div>
  );
};

export default MainNews;
