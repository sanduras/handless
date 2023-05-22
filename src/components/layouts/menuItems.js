export default [
  {
    key: "/home",
    label: "Home",
    href: "/",
  },
  {
    key: "/products",
    label: "Products",

    children: [
      {
        key: "/products/edit",
        label: "Products edit",
        href: "/products/edit",
      },
      {
        key: "/products/add",
        label: "Products add",
        href: "/products/add",
      },
    ],
  },

];
