import addVisitReducer from "./features/addVisit";
import temporaryPassReducer from "./features/temporaryPass";
import viewMyVisitorReducer from "./features/viewMyVisitor";

const rootReducer = {
  addVisit: addVisitReducer,
  temporaryPass: temporaryPassReducer,
  viewMyVisitor: viewMyVisitorReducer,
};

export default rootReducer;
