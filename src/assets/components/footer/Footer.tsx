import { useTranslation } from "react-i18next";
import mail from "../../images/footer/mail.svg";
import github from "../../images/footer/github.svg";
import linkedin from "../../images/footer/linkedin.svg";
import twitter from "../../images/footer/twitter.svg";
import "./Footer.css";

function Footer() {
	const { t } = useTranslation();

	return (
		<footer>
			<h3 id="name">Yakup SENEL</h3>
			<h4 id="social">{t("footer.social")}</h4>
			<cite id="citation">{t("footer.bio")}</cite>
			<div id="mail">
				<a href="mailto:yakup.senel33@gmail.com">
					<img src={mail} alt={t("alt.footerMail")} />
				</a>
				<a href="mailto:yakup.senel33@gmail.com">yakup.senel33@gmail.com</a>
			</div>
			<a id="github" href="https://github.com/SYakup33">
				<img src={github} alt={t("alt.footerGithub")} />
			</a>
			<a
				id="linkedin"
				href="https://www.linkedin.com/in/yakup-senel-8159a7146/"
			>
				<img src={linkedin} alt={t("alt.footerLinkedin")} />
			</a>

			<a id="twitter" href="https://x.com/Yakup33100">
				<img src={twitter} alt={t("alt.footerTwitter")} />
			</a>

			<hr />
			<p id="copyright">
				© Copyright. {t("footer.copyright")}{" "}
				<b>
					<ins>Yakup SENEL</ins>
				</b>
			</p>
		</footer>
	);
}

export default Footer;
