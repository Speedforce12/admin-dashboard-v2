const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      return { ...state, currentUser: action.payload };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user._id !== action.payload),
      };

    case "START_EDITING":
      return { ...state, editMode: true };

    case "END_EDITING":
      return { ...state, editMode: false };

    case "SHOW_SIDEBAR":
      return { ...state, ShowSidebar: true };

    case "HIDE_SIDEBAR":
      return { ...state, ShowSidebar: false };

    case "OPEN_EDIT":
      return { ...state, openEdit: true };

    case "CLOSE_EDIT":
      return { ...state, openEdit: false };

    case "UPDATE_ALERT":
      return { ...state, alert: action.payload };

    case "START_LOADING":
      return { ...state, loading: true };

    case "END_LOADING":
      return { ...state, loading: false };

    case "UPDATE_USERS":
      return { ...state, users: action.payload };

    case "UPDATE_STUDENTS":
      return { ...state, students: action.payload };

    case "UPDATE_TEACHERS":
      return { ...state, teachers: action.payload };

    case "UPDATE_TEACHER":
      return { ...state, teacher: action.payload };
    case "UPDATE_INCOMES":
      return { ...state, incomes: action.payload };

    case "UPDATE_INCOME":
      return { ...state, income: action.payload };

    case "UPDATE_EXPENSES":
      return { ...state, expenses: action.payload };

    case "UPDATE_EXPENSE":
      return { ...state, expense: action.payload };

    case "ADD_INFO":
      sessionStorage.setItem("info", JSON.stringify(action.payload));
      return { ...state, info: action.payload };

    case "UPDATE_STUDENT":
      return { ...state, student: action.payload };

    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student._id !== action.payload
        ),
      };

    case "DELETE_TEACHER":
      return {
        ...state,
        teachers: state.teachers.filter(
          (teacher) => teacher._id !== action.payload
        ),
      };

    case "DELETE_INCOME":
      return {
        ...state,
        incomes: state.incomes.filter(
          (income) => income._id !== action.payload
        ),
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense._id !== action.payload
        ),
      };

    default:
      throw new Error(`No matching action ${action.type}`);
  }
};

export default reducer;
