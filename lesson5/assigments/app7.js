function checkRole(role) {
  if (role === "admin") {
    console.log("add");
    console.log("edit");
    console.log("delete");
    console.log("view");
  } else if (role === "editor") {
    console.log("qoshishga ruxsat yoq");
    console.log("edit");
    console.log("not ochirishga ruxsat yoq");
    console.log("view");
  } else if (role === "viewer") {
    console.log("qoshishga ruxsat yoq");
    console.log("tahrirlashga ruxsat yoq");
    console.log("not ochirishga ruxsat yoq");
    console.log("view");
  }
}

checkRole("admin");
