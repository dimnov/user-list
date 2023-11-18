import Search from "../search/Search.jsx";
import UserListTable from "../user-list-table/UserListTable.jsx";

export default function UserList() {
  return (
    <section className="card users-container">
      <Search />

      <UserListTable />

      <button className="btn-add btn">Add new user</button>
    </section>
  );
}
