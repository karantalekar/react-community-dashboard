import { useState } from "react";
import { members } from "../data/mock";
import SearchBar from "./Searchbar";
import Card from "./Card";

export default function Dashboard() {
  const [query, setQuery] = useState("");

  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container-fluid p-4">
      <div className="row mb-4 g-3">
        <div className="col-md-4">
          <Card title="Total Members" value="120" color="success" />
        </div>
        <div className="col-md-4">
          <Card title="Active Users" value="85" color="warning" />
        </div>
        <div className="col-md-4">
          <Card title="Pending Requests" value="9" color="danger" />
        </div>
      </div>

      <SearchBar onChange={setQuery} />

      <ul className="list-group">
        {filtered.map((m) => (
          <li key={m.id} className="list-group-item">
            {m.name} — {m.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
