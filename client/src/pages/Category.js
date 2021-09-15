import React from "react";
import CategoryTable from "../components/CategoryTable";

const Category = () => {
  return (
    <>
      <main id="main">
        <div className="container">
          <form action="/" method="POST" className="clear">
            <table className="table">
              <CategoryTable />
            </table>
          </form>
        </div>
      </main>
    </>
  );
};

export default Category;
