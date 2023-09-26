import AppBarHeader from "../../shared/components/app-bar";
export const Introducao = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F5FBEF",
        color: "rgba(0,0,0,0.7)",
      }}
    >
      <AppBarHeader></AppBarHeader>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "80%",
          flexDirection: "row-reverse",
        }}
      >
        <img
          style={{ width: "40%" }}
          src={require("../../assets/img/ai.png")}
        ></img>

        <div style={{ width: "100%" }}>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              listStyle: "none",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <li>Arthur Barata</li>
            <li>Amaury Brito</li>
            <li>Matheus Mendes</li>
            <li>Sávio Batista</li>
            <li>Kamilla Peres</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
