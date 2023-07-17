function Footer(input) {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {input.year} {input.fullName} {input.studenId}
      </p>
    </div>
  );
}
export default Footer;
