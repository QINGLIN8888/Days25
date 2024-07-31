//translation language
import { useTranslation } from "react-i18next";


export function Translanguage() {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <div>
                <h1>{t("hello")}</h1>
                <h2>{t("link")}</h2>
            </div>
            <div>
                <button onClick={() => i18n.changeLanguage("en")}>
                    英文
                </button>
                <button onClick={() => i18n.changeLanguage("zh_TW")}>
                    中文
                </button>
                <button onClick={() => i18n.changeLanguage("es")}>
                    西班牙文
                </button>
                <button onClick={() => i18n.changeLanguage("sa")}>
                    梵文
                </button>
            </div>
        </div>
    );

}
