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
			<h2 id="name">Yakup SENEL</h2>
			<h2 id="social">{t("footer.social")}</h2>
			<cite id="citation">{t("footer.bio")}</cite>
			<a id="mail" href="mailto:yakup.senel33@gmail.com">
				<img src={mail} alt={t("alt.footerMail")} />
				<p>yakup.senel33@gmail.com</p>
			</a>
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
