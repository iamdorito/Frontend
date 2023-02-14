import "./latest.scss";

const Latest = () => {
  const latest = [
    {
      id: 1,
      name: "Medium",
      img: "https://images.pexels.com/photos/159652/table-food-book-newspaper-159652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "The New York Times",
      img: "https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 3,
      name: "Washington Post",
      img: "https://images.pexels.com/photos/3886870/pexels-photo-3886870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "CoinDesk",
      img: "https://images.pexels.com/photos/7682249/pexels-photo-7682249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="latest">
      {latest.map((news) => {
        return (
          <div className="news" key={news.id}>
            <img src={news.img} alt="" />
            <span>{news.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Latest;
