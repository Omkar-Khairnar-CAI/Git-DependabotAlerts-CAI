const colorConfig = {
  severity: {
    critical: "purple",
    high: "red",
    medium: "orange",
    low: "green"
  },
  ecosystem: {
    npm: "blue",
    maven: "yellow",
    pip: "pink",
    nuget: "cyan"
  },
  state: {
    open: "green",
    closed: "gray",
    fixed: "blue"
  },
  scope:{
    devlopment: "green ",
    runtime: "yellow"
  }
};

const getColor = (type, option) => {
  return colorConfig[type][option] || "gray";
};

export { getColor };