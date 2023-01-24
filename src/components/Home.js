import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rmvStudent } from "../redux";

const Home = () => {
  const arr = useSelector((state) => state.student);
  const dispatch = useDispatch();

  return (
    <div className="container text-center w-50">
      {arr.length === 0 ? (
        <h2 className="text-center mt-5 p-3 text-danger">
          Not a Single Student Enrolled Right Now
        </h2>
      ) : (
        arr.map((item) => (
          <div
            key={item.id}
            className="d-flex justify-content-evenly align-items-center  my-3 p-2 "
          >
            <span className="fs-3">Name : {item.name}</span>

            <span className="fs-3">Role : {item.role}</span>
            <br />
            <button
              className="btn btn-danger flex-end"
              onClick={() => dispatch(rmvStudent(item.id))}
            >
              REMOVE
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
