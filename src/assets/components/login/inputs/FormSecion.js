// FormSecion.jsx
import React from "react";
import "../../../../styles/login/login.css";
export const FormSecion = ({
  ChildrenInput,
  handleClickLogin,
  ciudadesSelect,
  title_fom,
  action_btn,
}) => {
  return (
    <div className="content_secion">
      <div className="form_sec">
        onSubmit={handleClickLogin}
        <form onSubmit={(e)=>handleClickLogin(e)}>
          <div className="titulo_form">
            <h2>{title_fom}</h2>
          </div>
          {ChildrenInput}
          {ciudadesSelect}
          <div className="pagination">
            <button
              type="submit"
              style={{ marginTop: "1rem" }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              {action_btn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
