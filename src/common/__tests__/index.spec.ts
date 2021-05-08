import { BASE, color, fontFamily, fontSize, margins } from "../";

describe("Should match with constants", () => {
  it("Should match base URL", () => {
    expect(BASE).toEqual("http://localhost:4000");
  });
  it("Should match with style constants", () => {
    expect(color).toEqual({
      accent: "#f65261",
      blackDarker: "#232323",
      blackNormal: "#424242",
      blackLighter: "#555",
      white: "#fff",
    });
    expect(fontFamily).toEqual('"roboto", sans-serif');
    expect(fontSize).toEqual({
      small: "14px",
      normal: "16px",
      large: "24px",
    });
    expect(margins).toEqual({
      small: "8px",
      normal: "16px",
      large: "24px",
      giant: "36px",
    });
  });
});
