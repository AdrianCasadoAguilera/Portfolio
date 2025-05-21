import { render, screen } from "@testing-library/react";
import Working from "./working";

describe("Working component", () => {
  it("mostra l'enllaç a GitHub amb l'URL correcte", () => {
    render(<Working />);
    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });
    expect(githubLink).toHaveAttribute("href", "https://github.com/AdrianCasadoAguilera");
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("mostra l'enllaç a LinkedIn amb l'URL correcte", () => {
    render(<Working />);
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/adri%C3%A1n-casado-aguilera-133a38238/"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });
});
