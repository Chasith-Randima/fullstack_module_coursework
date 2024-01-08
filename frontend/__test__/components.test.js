import { render, screen } from "@testing-library/react";
import Footer from "@/src/components/Footer";

describe(" Component", () => {
  test("Navbar renders without errors", async () => {
    const mockCartItems = {
      "659763242e3662df0451a8c6": {
        itemid: "659763242e3662df0451a8c6",
        itemprice: 250000,
        itemtitle: "",
        itemimages: "product-6588ebdb294cda52249904ac-1704420131723-1.jpeg",
        count: 4,
      },
      "659958460e3faaa293367a53": {
        itemid: "659958460e3faaa293367a53",
        itemprice: 999.99,
        itemtitle: "Laptop XYZ",
        count: 2,
      },
    };

    render(
      <ShopContext.Provider value={{ cartItems: mockCartItems }}>
        <NavBar />
      </ShopContext.Provider>
    );

    // Assert that the component renders without throwing any errors
  });
  test("Navbar text render without errors", async () => {
    const mockCartItems = {
      "659763242e3662df0451a8c6": {
        itemid: "659763242e3662df0451a8c6",
        itemprice: 250000,
        itemtitle: "",
        itemimages: "product-6588ebdb294cda52249904ac-1704420131723-1.jpeg",
        count: 4,
      },
      "659958460e3faaa293367a53": {
        itemid: "659958460e3faaa293367a53",
        itemprice: 999.99,
        itemtitle: "Laptop XYZ",
        count: 2,
      },
    };

    render(
      <ShopContext.Provider value={{ cartItems: mockCartItems }}>
        <NavBar />
      </ShopContext.Provider>
    );

    const titleElement = screen.getByText("Laptop.LK");
    expect(titleElement).toBeInTheDocument();

    // Assert that the component renders without throwing any errors
  });
  test("renders without errors", async () => {
    const mockCartItems = {
      "659763242e3662df0451a8c6": {
        itemid: "659763242e3662df0451a8c6",
        itemprice: 250000,
        itemtitle: "",
        itemimages: "product-6588ebdb294cda52249904ac-1704420131723-1.jpeg",
        count: 4,
      },
      "659958460e3faaa293367a53": {
        itemid: "659958460e3faaa293367a53",
        itemprice: 999.99,
        itemtitle: "Laptop XYZ",
        count: 2,
      },
    };

    render(
      <ShopContext.Provider value={{ cartItems: mockCartItems }}>
        <NavBar />
      </ShopContext.Provider>
    );

    // Assert that the component renders without throwing any errors
  });
  test("renders without errors", async () => {
    const mockCartItems = {
      "659763242e3662df0451a8c6": {
        itemid: "659763242e3662df0451a8c6",
        itemprice: 250000,
        itemtitle: "",
        itemimages: "product-6588ebdb294cda52249904ac-1704420131723-1.jpeg",
        count: 4,
      },
      "659958460e3faaa293367a53": {
        itemid: "659958460e3faaa293367a53",
        itemprice: 999.99,
        itemtitle: "Laptop XYZ",
        count: 2,
      },
    };

    render(
      <ShopContext.Provider value={{ cartItems: mockCartItems }}>
        <NavBar />
      </ShopContext.Provider>
    );

    const titleElement = screen.getByText("Login");
    expect(titleElement).toBeInTheDocument();
    // Assert that the component renders without throwing any errors
  });

  test("Footer component renders without errors", async () => {
    render(<Footer />);

    // Assert that the component renders without throwing any errors
  });
  test("footer text renders without errors", async () => {
    render(<Footer />);

    const titleElement = screen.getByText("Socials");
    expect(titleElement).toBeInTheDocument();

    // Assert that the component renders without throwing any errors
  });
  test("footer text renders without errors", async () => {
    render(<Footer />);

    const titleElement = screen.getByText("Facebook");
    expect(titleElement).toBeInTheDocument();

    // Assert that the component renders without throwing any errors
  });
  test("footer text renders without errors", async () => {
    render(<Footer />);

    const titleElement = screen.getByText("All right reserved");
    expect(titleElement).toBeInTheDocument();

    // Assert that the component renders without throwing any errors
  });
});
