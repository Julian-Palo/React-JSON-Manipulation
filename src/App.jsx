import { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`);
        if (!response.ok) throw Error("Did not receive expected data");
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Header>
        <button onClick={() => setReqType("users")}>users</button>
        <button onClick={() => setReqType("posts")}>posts</button>
        <button onClick={() => setReqType("comments")}>comments</button>
      </Header>
      {fetchError && <p style={{ color: "red" }}>{`Error:${fetchError}`}</p>}
      {!fetchError && <Content items={items} />}
    </div>
  );
}

export default App;
