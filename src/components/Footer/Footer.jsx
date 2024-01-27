import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer className='footer'>
			<p>
				Этот проект создан в качестве демонстрации кода:)
				<br />
				Ссылки для связи с автором:
			</p>
			<nav className='footer__navigate'>
				<Link to='https://web.telegram.org/a/'>
					telegram.org/Бд Бд 🚀
				</Link>
				<Link to='https://github.com/EROSION6'>
					github.com/EROSION6 🌎
				</Link>
			</nav>
		</footer>
	);
};

export default Footer;
