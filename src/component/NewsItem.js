export default function NewsItem({ list }) {
  return (
    <div>
    {list && list.results && list.results.length > 0 ? (
      list.results.map((item, index) => (
        <div key={index} className="ItemBox">
          <figure className="img">
            <img src={item.image_url} alt={item.title} />
          </figure>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div></div>
        </div>
      ))
    ) : (
      <p>No News Available</p>
    )}
  </div>
  );
}