interface Props {
  cartItemsCount: number;
}
function Navbar({ cartItemsCount }: Props) {
  return (
    <>
      <div>Navbar: {cartItemsCount}</div>
    </>
  );
}

export default Navbar;
