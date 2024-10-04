export const Profile = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h1>{`${user.name} ${user.lastname}`}</h1>
          <p>{user.email}</p>
          <p>{user.age}</p>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
