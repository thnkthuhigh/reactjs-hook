import "../App.scss";
import useFetch from "../customize/fetch";

const Country = () => {
  // "https://restcountries.com/v3.1/alpha?codes=col,VN,ID,BM,CN,VA,SO,KE,KW,GB,TH,KP.CN&currencies&name&capital&maps"
  // "https://restcountries.com/v3.1/all";
  const {
    data: Country,
    isLoading,
    isErr,
  } = useFetch("https://restcountries.com/v3.1/all");
  return (
    <>
      {/* chua viet gì het cbi viet bo loc */}
      <span>
        <input />
        <button> Loc </button>
      </span>
      <br />
      {/** */}
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Quốc gia</th>
            <th>Thủ đô</th>
            <th>Khu vực</th>
            <th>Map</th>
            <th>Múi giờ</th>
          </tr>
        </thead>
        <tbody>
          {isLoading === false &&
            Country &&
            Country.length > 0 &&
            Country.map((item, index) => {
              return (
                <tr key={item.name.common}>
                  <td>{index}</td>
                  <td>{item.name.common}</td>
                  <td>{item.capital}</td>
                  <td>{item.region}</td>
                  <td>
                    <a href={item.maps.googleMaps}>Map {item.name.common}</a>
                  </td>
                  <td>{item.timezones[0]}</td>
                </tr>
              );
            })}

          {isLoading === true && (
            <tr>
              <td colSpan={"5"} style={{ textAlign: "center" }}>
                isLoading...
              </td>
            </tr>
          )}
          {isErr === true && (
            <tr>
              <td colSpan={"5"} style={{ textAlign: "center" }}>
                Something wrong...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Country;
