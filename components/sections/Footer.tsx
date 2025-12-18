"use client";

import { QertexLogo } from "../ui/QertexLogo";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Company (About) */}
                    <div className="space-y-6">
                        <QertexLogo />
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {t("footer_col_company_desc")}
                        </p>
                        <a href="mailto:info@qertex.com" className="inline-block text-[var(--color-cobalt)] font-medium hover:underline">
                            info@qertex.com
                        </a>
                        <div className="flex gap-4 text-slate-400">
                            <a href="#" className="hover:text-[var(--color-cobalt)] transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-[var(--color-cobalt)] transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-[var(--color-cobalt)] transition-colors"><Github size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">{t("footer_col_services")}</h4>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li><a href="#services" className="hover:text-[var(--color-cobalt)] transition-colors">{t("service_ai_title")}</a></li>
                            <li><a href="#services" className="hover:text-[var(--color-cobalt)] transition-colors">{t("service_cyber_title")}</a></li>
                            <li><a href="#services" className="hover:text-[var(--color-cobalt)] transition-colors">{t("service_qa_title")}</a></li>
                            <li><a href="#services" className="hover:text-[var(--color-cobalt)] transition-colors">{t("service_gov_title")}</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Products */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">{t("footer_col_products")}</h4>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li><a href="#products" className="hover:text-[var(--color-mint)] transition-colors font-medium">{t("product_faheem_title")}</a></li>
                            <li><a href="#products" className="hover:text-[var(--color-mint)] transition-colors font-medium">{t("product_compliance_title")}</a></li>
                            <li><a href="#academy" className="hover:text-[var(--color-cobalt)] transition-colors font-medium">{t("academy_title")}</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Global Offices */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">{t("footer_col_offices")}</h4>
                        <div className="space-y-4 text-sm text-slate-600">
                            <div className="flex flex-col">
                                <span className="font-semibold text-slate-900">{t("footer_office_canada")}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-slate-900">{t("footer_office_jordan")}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-slate-900">{t("footer_office_uae")}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <span>{t("footer_rights")}</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-900">{t("footer_privacy")}</a>
                        <a href="#" className="hover:text-slate-900">{t("footer_terms")}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
