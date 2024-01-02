const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center text-sm text-gray-600 dark:text-gray-100 absolute w-full">
      <div className=" mx-auto">
        <p>&copy; {currentYear} Raj Yadav. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
