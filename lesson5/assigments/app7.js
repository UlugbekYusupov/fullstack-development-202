function checkRole(role) {
  switch (role) {
    case "admin":
      console.log("add");
      console.log("edit");
      console.log("delete");
      console.log("view");
    case "editor":
      console.log("qoshishga ruxsat yoq");
      console.log("edit");
      console.log("not ochirishga ruxsat yoq");
      console.log("view");
    case "viewer":
      console.log("qoshishga ruxsat yoq");
      console.log("tahrirlashga ruxsat yoq");
      console.log("not ochirishga ruxsat yoq");
      console.log("view");
  }
}

checkRole("admin");
checkRole("editor");
checkRole("viewer");
