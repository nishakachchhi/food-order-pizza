function Helmet({ title, children }) {
  document.title = ` Food for Delivery - ` + title;
  return <div>{children}</div>;
}

export default Helmet;
