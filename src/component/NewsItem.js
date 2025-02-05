export default function NewsItem({ list }) {
  return (
    <div className="news-box">
    {list && list.results && list.results.length > 0 ? (
      list.results.map((item, index) => (
        <div key={index} className="itemBox">
          <figure className="img">
            <img src={item.image_url} alt={item.title} />
          </figure>
          <div className="text-box">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))
    ) : (
      <p>No News Available</p>
    )}
  </div>
  );
}