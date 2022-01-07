const getday = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var seperator = "/";
  return (
    <div>
      {month} {seperator} {year}{" "}
    </div>
  );
};

export default getday;
