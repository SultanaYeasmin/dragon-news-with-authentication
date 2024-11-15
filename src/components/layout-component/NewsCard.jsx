const NewsCard = (props ={ }) => {
    const {news } = props || {}
    const { title, details, author, image_url, thumbnail_url, rating, total_view } = news;
  
    return (
      <div className="my-6 p-6 border border-gray-200 rounded-lg">
        <div className="flex">
          <img src={thumbnail_url} alt="Thumbnail" className="w-32 h-32 object-cover rounded-lg" />
          <div className="ml-6">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-gray-600 mt-2">{details}</p>
          </div>
        </div>
  
        <div className="mt-6 flex items-center">
          <img src={author.img} alt="Author" className="w-12 h-12 object-cover rounded-full" />
          <div className="ml-4">
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{author.published_date}</p>
          </div>
        </div>
  
        <div className="mt-4">
          <p className="text-sm text-gray-500">Views: {total_view}</p>
          <div className="flex items-center mt-2">
            <span className="text-xl font-bold">{rating.number}</span>
            <span className="ml-2 text-sm text-gray-500">({rating.badge})</span>
          </div>
        </div>
  
        <div className="mt-4">
          <img src={image_url} alt="Article" className="w-full h-96 object-cover rounded-lg" />
        </div>
      </div>
    );
  };

  export default NewsCard;