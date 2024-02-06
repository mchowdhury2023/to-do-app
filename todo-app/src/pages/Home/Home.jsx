import React from "react";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="text-center text-3xl mb-10 mt-10">My Task</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
