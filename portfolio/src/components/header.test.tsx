import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./header";
import "@/__mocks__/i18nForTests";
import { act } from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<"img">) => <img {...props} />,
}));

test("Show default catalan translation on button", () => {
  render(<Header />);
  expect(screen.getByText("Descarregar CV")).toBeInTheDocument();
});

test("Change translation when clicking language selector", async () => {
  render(<Header />);

  fireEvent.click(screen.getByText("Català"));

  await act(() => fireEvent.click(screen.getByText("Español")));

  expect(await screen.findByText("Descargar CV")).toBeInTheDocument();
});
