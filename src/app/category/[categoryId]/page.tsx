import NewsCard from "@/components/NewsCard";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}


const CategoryNews =async ({params}:{params:{categoryId:string}}) => {
    const {categoryId} = await params;
    // console.log(categoryId);


    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const categoryNews: News [] = data.data;



    return (
        <div className="max-w-7xl mx-auto mt-5">
            <h2 className=" text-2xl font-bold border-b-2 border-red-700 mb-5">{data.title}</h2>

            <div className="grid grid-cols-3 gap-4 shadow-sm">
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}/>)

                }
            </div>
        </div>
    );
};

export default CategoryNews;