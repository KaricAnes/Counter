import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import "./Results.css";

const Results = (props) => (
  <div>
    {props.storedResults.map((str) => (
      <div className="Results">
        <li key={str.id}>{str.value}</li>
        <button onClick={() => props.onDeleteResult(str.id)}>
          DELETE RESULT
        </button>
      </div>
    ))}
  </div>
);

//1. konfiguracija
const mapStateToProps = (state) => {
  return {
    storedResults: state.rezultat.results,
  };
};

//2. konfiguracija
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteResult: (idAAA) => dispatch(actionCreators.deleteResult(idAAA)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
