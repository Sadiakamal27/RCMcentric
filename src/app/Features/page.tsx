"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const features = [
    {
        title: "Simplicity & Choice",
        desc: "Grow your practice without any restrictions and more freedom.",
        image: "/Chase-Excellence.svg",
    },
    {
        title: "Worry-Free Experience",
        desc: "Get control over your practice and track each claim & payment.",
        image: "/revenue1.svg",
    },
    {
        title: "Performance That Scale",
        desc: "Quality results and strategies boost your practice revenue.",
        image: "/Chase-Excellence.svg",
    },
    {
        title: "Transparent Pricing",
        desc: "Pricing plans that work for each medical practice or hospital.",
        image: "/Money.svg",
    },
];

const sidebarItems = [
    "Medical Billing",
    "Medical Coding",
    "Credentialing",
    "Performance",
    "Expert Support",
    "Cloud-Centric",
    "Security",
];

export default function FeaturesPage() {
    const lastSectionRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [activeSidebar, setActiveSidebar] = useState(0);
    const [isSidebarSticky, setIsSidebarSticky] = useState(true);
    // Add refs for each section
    const sectionRefs = sidebarItems.map(() => useRef<HTMLDivElement>(null));

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                setIsSidebarSticky(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,
            }
        );
        if (lastSectionRef.current) {
            observer.observe(lastSectionRef.current);
        }
        return () => {
            if (lastSectionRef.current) {
                observer.unobserve(lastSectionRef.current);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-12 px-2 sm:px-6 text-center">
                <h1 className="text-2xl sm:text-5xl font-extrabold text-white mb-4 mt-19">
                    Healthcare Billing Made Simple, Fast & Convenient
                </h1>
                <p className="text-white text-base sm:text-lg mb-6">
                    Our managed healthcare billing services simplify your entire experience, allowing you to stay focused on growing your practice.
                </p>
                <Link href="/TalktoSales" target="_blank" rel="noopener noreferrer">

                <Button
                    className="bg-red-400 hover:bg-white hover:text-blue-700 text-white px-8 py-3 rounded-full text-md shadow-md transition mb-10"
                >
                    GET STARTED NOW
                </Button>
                </Link>
            </section>

            {/* Features Card Section */}
            <section className="max-w-5xl mx-auto -mt-12 z-10 relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center text-center px-2">
                            <div className="mb-2">
                                <Image src={feature.image} alt={feature.title} width={48} height={48} />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                            <p className="text-gray-500 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Content with Sticky Sidebar */}
            <section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-12 px-2 sm:px-4 relative">
                {/* Sidebar */}
                <aside className="md:w-1/4 w-full z-20">
                    <div
                        ref={sidebarRef}
                        className={`bg-white rounded-2xl shadow-md p-0 border border-red-200 relative overflow-hidden
              ${isSidebarSticky ? "md:sticky md:top-20" : "md:static"}
            `}
                    >
                        <div className="absolute left-0 top-0 h-full w-1 bg-red-400 rounded-l-2xl" />
                        <ul className="space-y-1 py-4">
                            {sidebarItems.map((item, idx) => (
                                <li
                                    key={idx}
                                    className={`px-6 py-2 font-medium cursor-pointer transition relative
                    ${activeSidebar === idx ? "text-red-500" : "text-gray-800 hover:text-red-500"}
                  `}
                                    onClick={() => {
                                        setActiveSidebar(idx);
                                        sectionRefs[idx].current?.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }}
                                >
                                    <span className="relative">
                                        {item}
                                        {activeSidebar === idx && (
                                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-400 rounded transition-all" />
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
                {/* Main Sections */}
                <main className="flex-1 space-y-12">
                    {/* Example Section 1 */}
                    <section ref={sectionRefs[0]} className="bg-white rounded-2xl  p-6 mb-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2">Medical Billing Features & Benefits</h2>
                        <p className="text-gray-600 mb-4">End-to-end billing services with advanced features and benefits.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Feature Cards */}
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Registration / Demographics</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">We follow simple and clean methods to register new patients to the practice and keep all the details accurate.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent">
                                <h3 className="font-bold text-gray-900 mb-1">Charge Entry</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">After coverage and benefits verifications, our team enters accurate patient visits into the billing software.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Claim Submission</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">We submit claims within 24 hours after verifying all the required details and daily submission reports.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Insurance verification</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Plan coverage and benefits verifications for private and commercial insurance through live calls and web portals.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Payment Posting</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Posting payments to patient's accounts accordingly. Our payment posting team can work on all software.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Clearing House rejections</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our billing process is advanced that keeps tracking claim rejections and fix automatically.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Denial management</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our denial management team works on denied claims and appeals to insurance companies if needed.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">A/R Recovery</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our expert A/R team works for old AR recovery and follow-up on claims, rejections, and fixing errors.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Quality Check</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our quality assurance team works only to monitor quality work, so each claim is sent with accurate and error-free billing.</p>
                            </div>
                        </div>
                    </section>
                    {/* Example Section 2 */}
                    <section ref={sectionRefs[1]} className="bg-white rounded-2xl  p-6 mb-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2">Accurate Medical Coding Solution</h2>
                        <p className="text-gray-600 mb-4">Hire certified medical coders with quality and accurate codes.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">ICD-9, ICD-10 Coding</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Get the right DX code for provided medical services to get faster reimbursement.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">DME Coding</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Get error-free DME coding for your durable medical equipment company.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">CPT, HCPCS Coding</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">We provide a uniform coding system to identify medical services and procedures.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">HCC Coding</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Get hierarchical condition category (HCC) coding for your practice billing.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Code Reviews</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Get code review by our expert certified coders and identify errors before submission.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Payer Specific Coding</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Get a payer-specific coding solution acceptable to each payer to process the claim.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Chart Audits</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our customized chart reviews include an analysis of paid claims and claims before submission.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Offshore Coding Audits</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our offshore coding benefits cost savings, labor accessibility, and turnaround time.</p>
                            </div>
                        </div>
                    </section>
                    {/* Example Section 3 */}
                    <section ref={sectionRefs[2]} className="bg-white rounded-2xl  p-6 mb-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2">Credentialing & Enrollment Services</h2>
                        <p className="text-gray-600 mb-4">Get rid of your credentialing woes and get enroll with excellent efficiency.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Dedicated Credentialing Team</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">A team that completes the credentialing details and submits it to commercial Insurance, Medicare, and Medicaid, as requested by healthcare physicians.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Our Credentialing Compliance</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our Credentialing Services ensure 100% compliance with the National Committee for Quality Assurance and the Department of Health and Family Services.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Crucial Follow Ups</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our medical billing and credentialing services ensure that all follow-ups are adequately performed for a smooth enrollment.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Portal Registration</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Create and update CAQH & PECOS credentialing portals, Insurance portals, and web logins for providers.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Contracting Issues</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">We resolve contracting issues, address issues, verifications, credentialing requirements, and detailed coverage reports.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Data Integrity</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">We integrate data between insurance and practice or in the billing software. Our IT team can integrate all data accurately.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent">
                                <h3 className="font-bold text-gray-900 mb-1">Updates or Changes</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our medical credentialing team can update or change your information for credentialing or re-credentialing.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Maintenance of Data</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Auditing, organizing, and correcting data in management systems and databases to ensure accuracy and accessibility.</p>
                            </div>
                        </div>
                    </section>
                    {/* Example Section 4 */}
                    <section ref={sectionRefs[3]} className="bg-white rounded-2xl  p-6 mb-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2">High-Quality Results Assured</h2>
                        <p className="text-gray-600 mb-4">The process is easy and delivers results with a guarantee.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Go Fast</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Billing and coding key processes so you can understand and improve operations as it happens.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Go Big</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Improve your practice billing and coding errors and streamline maximum collections.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Go Bold</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Dream up and deliver more care to your patients' that advances your practice health.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Go Smooth</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">With WeCare RCM, your practice will achieve the results set for success in a short time.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Modernize</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Modernize + streamline your practice to be smooth, accurate, and serve—on the fly.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Practice Health</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">We are improving the financial health of your practice by managing everything at WeCare RCM.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Increased Revenue</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Guaranteed revenue increases up to 25% by working with our expert billing and coding teams.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Dedicated Teams</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">We will assign a dedicated expert team, especially for your practice billing.</p>
                            </div>
                        </div>
                    </section>
                    {/* Example Section 5 */}
                    <section ref={sectionRefs[4]} className="bg-white rounded-2xl p-6 mb-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2">Best-in-Class Support Available Every Hour of Every Day</h2>
                        <p className="text-gray-600 mb-4">Our support and technical teams are available 24/7 for urgent problem-solving.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">24/7 Support</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Agents are available 24/7 for WeCare RCM's clients to provide quick solutions or status.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Online Ticketing</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Track more complex queries, payments, or issues online as our team work on them.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Urgent Tasks</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our team can work on urgent tasks such as tracking payments, claims, insurance, or eligibility.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Client Portal</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Access and manage your accounts, invoices, contracts, etc., at our client portal.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Live Chat Support</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Reach out to our sales and support representatives any time and get answered in minutes.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent">
                                <h3 className="font-bold text-gray-900 mb-1">Knowledge Base</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Explore our Knowledge base to find our services process or easy assistance.</p>
                            </div>
                        </div>
                    </section>
                    {/* Example Section 6 */}
                    <section ref={sectionRefs[5]} className="bg-white rounded-2xl  p-6 mb-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2">HIPAA Compliant Cloud-Centric Solution</h2>
                        <p className="text-gray-600 mb-4">Manage your important documents at our HIPAA-compliant Cloud servers.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent">
                                <h3 className="font-bold text-gray-900 mb-1">HIPAA Compliant</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our servers are based on cloud-centric, HIPAA-compliant, and highly secured.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent">
                                <h3 className="font-bold text-gray-900 mb-1">Easy Cloud Access</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Get access to our cloud server by Android, IOS, or desktop applications.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Easy Transmission</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Upload daily scanning, super bills, AR, or files easily using the cloud account assigned to you.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Data Backup</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Our cloud server creates a daily backup of your files within our HIPAA cloud storage.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">24/7 Available</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Access your cloud account from anywhere, anytime, without any interruptions.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Free Forever</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">We provide HIPAA-compliant cloud storage for free without any hidden charges.</p>
                            </div>
                        </div>
                    </section>
                    {/* Example Section 7 */}
                    <section ref={sectionRefs[6]} className="bg-white rounded-2xl  p-6 mb-8 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-blue-800 mb-2">Our Services Comes With Manage Security</h2>
                        <p className="text-gray-600 mb-4">Control over your practice and secure each document with special care.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Practice Backup</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">We maintain a cloud backup of your medical practice to recover from a disaster.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Security Rules</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">We set up security rules for each employee to access practice data and record tasks.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Cybersecurity Audit</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">We evaluate our systems to find vulnerabilities and improve our security posture daily.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent">
                                <h3 className="font-bold text-gray-900 mb-1">Patient Privacy</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Control over patient information and protect important documents with encryptions.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">Third-Party Access</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Approval or permission will be required to access practice information by a third party.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow border border-transparent ">
                                <h3 className="font-bold text-gray-900 mb-1">PHI Safety</h3>
                                <div className="w-10 h-1 bg-red-300 mb-2 rounded"></div>
                                <p className="text-gray-600 text-sm">Protected health information (PHI) is our first priority, and we manage it with special care.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </section>
            {/* End Section: Peace of Mind */}

            <section className="py-10 lg:py-16 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-2 sm:px-4">
                    {/* Left: Text and Button */}
                    <div className="flex-1 max-w-xl text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                            Engage WeCare RCM For Your Specialty Billing Needs
                        </h2>
                        <div className="w-24 h-1 bg-red-500 mb-6"></div>
                        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl">
                            We'll move your practice documents to our Cloud WeCare RCM from any
                            server or drive for FREE, so you don’t have to worry about migration
                            complexities & technicalities of moving your practice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/Pricing" target="_blank" rel="noopener noreferrer">
                                <Button
                                    className="bg-white border-2 rounded-full border-blue-600 text-blue-600 hover:bg-red-500 hover:border-red-500 hover:text-white px-8 py-3 w-full sm:w-auto"
                                >
                                    CONNECT NOW  <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {/* Right: Image */}
                    <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                        <img src="/new_migration_image1.png" alt="Cloud WeCare RCM Peace of Mind" className="max-w-full h-auto" />
                    </div>
                </div>
            </section>


        </div>
    );
} 