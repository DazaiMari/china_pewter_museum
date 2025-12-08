import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useLocation } from "react-router-dom";

export default function SEOHead({
    titleKey = "site.name",
    descriptionKey = "site.description",
    customTitle,
    customDescription,
}) {
    const { language, isZh } = useLanguage();
    const location = useLocation();

    useEffect(() => {
        const baseUrl = "https://pewtermuseum.org";

        // 构建当前页面的完整 URL
        const currentPath = location.pathname;
        const canonicalUrl = isZh
            ? `${baseUrl}/zh${currentPath.replace("/zh", "")}`
            : `${baseUrl}${currentPath}`;

        // 构建备用语言的 URL
        const alternatePath = currentPath.replace("/zh", "");
        const alternateUrl = isZh
            ? `${baseUrl}${alternatePath || "/"}`
            : `${baseUrl}/zh${alternatePath}`;

        // 更新标题
        const siteTitle = isZh ? "中国锡器博物馆" : "China Pewter Museum";
        const pageTitle = customTitle || siteTitle;
        document.title = pageTitle;

        // 更新或创建 meta 标签
        const updateMetaTag = (name, content, property = null) => {
            const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
            let meta = document.querySelector(selector);

            if (!meta) {
                meta = document.createElement("meta");
                if (property) {
                    meta.setAttribute("property", property);
                } else {
                    meta.setAttribute("name", name);
                }
                document.head.appendChild(meta);
            }

            meta.setAttribute("content", content);
        };

        // 更新 description
        const description =
            customDescription ||
            (isZh
                ? "探索中国锡器工艺的艺术与历史"
                : "Exploring the art and history of Chinese pewter craftsmanship");
        updateMetaTag("description", description);

        // 更新 keywords
        const keywords = isZh
            ? "中国锡器博物馆, 锡器, 中国锡器, 锡工艺, 锡器博物馆"
            : "china pewter museum, pewter, Chinese pewter, tin crafts, pewter museum";
        updateMetaTag("keywords", keywords);

        // Open Graph 标签
        updateMetaTag("og:title", pageTitle, "og:title");
        updateMetaTag("og:description", description, "og:description");
        updateMetaTag("og:url", canonicalUrl, "og:url");
        updateMetaTag("og:type", "website", "og:type");
        updateMetaTag("og:locale", isZh ? "zh_CN" : "en_US", "og:locale");
        updateMetaTag("og:site_name", siteTitle, "og:site_name");

        // Twitter Card 标签
        updateMetaTag("twitter:card", "summary_large_image");
        updateMetaTag("twitter:title", pageTitle);
        updateMetaTag("twitter:description", description);

        // 更新 canonical link
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }
        canonical.setAttribute("href", canonicalUrl);

        // 更新 hreflang 标签
        const updateHreflangLink = (hreflang, href) => {
            let link = document.querySelector(`link[hreflang="${hreflang}"]`);
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "alternate");
                link.setAttribute("hreflang", hreflang);
                document.head.appendChild(link);
            }
            link.setAttribute("href", href);
        };

        // 添加 hreflang 标签
        updateHreflangLink("en", `${baseUrl}${alternatePath || "/"}`);
        updateHreflangLink("zh", `${baseUrl}/zh${alternatePath}`);
        updateHreflangLink("x-default", `${baseUrl}${alternatePath || "/"}`);

        // 更新 html lang 属性
        document.documentElement.lang = isZh ? "zh-CN" : "en";
    }, [language, location.pathname, customTitle, customDescription, isZh]);

    return null;
}
