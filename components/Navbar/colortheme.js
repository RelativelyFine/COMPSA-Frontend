const colortheme = (color, type) => {
  if (color === "light") {
    if (type === "background") {
      return "bg-[#aea2e336]";
    }
    if (type === "text") {
      return "text-black";
    }
  } else {
    if (type === "background") {
      return "bg-[#1e0d44d5]";
    }
    if (type === "text") {
      return "text-white";
    }
  }
};

export default colortheme;
