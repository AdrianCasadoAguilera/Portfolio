import { render, screen } from "@testing-library/react";
import ImageScroller from "./image-scroller";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<"img">) => <img {...props} />,
}));

describe("ImageScroller", () => {
  it("mostra totes les imatges correctament", () => {
    render(<ImageScroller />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);

    expect(images[0]).toHaveAttribute("src", "/1.jpeg");
    expect(images[0]).toHaveAttribute("alt", "1.jpeg");

    expect(images[1]).toHaveAttribute("src", "/2.jpeg");
    expect(images[1]).toHaveAttribute("alt", "2.jpeg");

    expect(images[2]).toHaveAttribute("src", "/3.jpeg");
    expect(images[2]).toHaveAttribute("alt", "3.jpeg");
  });
});
