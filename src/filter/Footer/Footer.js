import "./Footer.css";
import PropTypes from "prop-types";

const Footer = ({ name, link }) => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <a className="footer-link" target="_blank" href={link}>
          <p className="pull-right">
            <b>
              Copyright &copy; 2019 - {year} Design By {name}{" "}
            </b>
          </p>
        </a>
      </div>
    </>
  );
};

Footer.propTypes = {
  name: PropTypes.string,
  link: PropTypes.func,
};
Footer.defaultProps = {
  name: "Fırat AKSOY",
  link: "https://aksoyfirat.net/about",
};

export default Footer;
