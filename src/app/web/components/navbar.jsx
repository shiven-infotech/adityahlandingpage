"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `block py-2  hover:text-green-700 break-words whitespace-normal ${
      isActive(path) ? " " : ""
    }`;

  const menu = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/web/aboutus",
      children: [
        {label:"About Us", href:"/web/aboutus/aboutus"},
        { label: "Fundamentals of Homeopathy", href: "/web/aboutus/fundamentalsofhomeopathy" },
        { label: "Myths & Facts About Homeopathy", href: "/web/aboutus/myths&factsabouthomeopathy" },
        {label:"Vision and Mission", href:"/web/aboutus/visionandmission"},
        {label:"Our Team", href:"/web/aboutus/ourteam"}
      ],
    },
    {
      label: "Acute Ailments",
      children: [
        {
          label: "Skin Ailments",
          href: "/web/acuteailments/skinailments",
          children: [
            { label: "Eczema", href: "/web/acuteailments/skinailments/eczemahomeopathytreatment" },
            { label: "Psoriasis", href: "/web/acuteailments/skinailments/psoriasishomeopathytreatment" },
            { label: "Dermatitis", href: "/web/acuteailments/skinailments/dermatitishomeopathytreatment" },
            { label: "Crack on Heels", href: "/web/acuteailments/skinailments/crackonheelshomeopathytreatment" },
            { label: "Lichen Planus", href: "/web/acuteailments/skinailments/lichenplanushomeopathytreatment" },
            { label: "Dry Skin", href: "/web/acuteailments/skinailments/dryskinhomeopathytreatment" },
            { label: "Acne And Pimples", href: "/web/acuteailments/skinailments/acneandpimpleshomeopathytreatment" },
            { label: "Black Discoloration on Face", href: "/web/acuteailments/skinailments/blackdiscolorationonfacehomeopathytreatment" },
            { label: "Alopecia Areata", href: "/web/acuteailments/skinailments/alopeciaareatahomeopathytreatment" },
            { label: "Warts", href: "/web/acuteailments/skinailments/wartshomeopathytreatment" },
            { label: "Corn", href: "/web/acuteailments/skinailments/cornhomeopathytreatment" },
            { label: "Vitilligo", href: "/web/acuteailments/skinailments/vitilligohomeopathytreatment" },
            { label: "Heat Storks", href: "/web/acuteailments/skinailments/heatstorkshomeopathytreatment" },
            { label: "Sun Burns", href: "/web/acuteailments/skinailments/sunburnshomeopathytreatment" },
            { label: "Skin Rashes", href: "/web/acuteailments/skinailments/skinrasheshomeopathytreatment" },
            { label: "Varicose Veins", href: "/web/acuteailments/skinailments/varicoseveinshomeopathytreatment" },
          ],
        },
        {
          label: "Beauty ailments",
          href: "/web/AcuteAilments/beautyailments",
          children: [
            { label: "Hair Loss", href: "/web/acuteailments/beautyailments/hairloss" },
            { label: "Greying of Hair", href: "/web/acuteailments/beautyailments/greyingofhair" },
            { label: "Dandruff", href: "/web/acuteailments/beautyailments/dandruff" },
            { label: "Freckles", href: "/web/acuteailments/beautyailments/freckles" },
            { label: "Dark Circles Under Eyes", href: "/web/acuteailments/beautyailments/darkcirclesundereyes" },
            { label: "Pimples", href: "/web/acuteailments/beautyailments/pimples" },
            { label: "Ear Infection", href: "/web/acuteailments/beautyailments/earinfection" },
            { label: "Conjunctivits", href: "/web/acuteailments/beautyailments/conjunctivits" },
            { label: "Vision Improvement", href: "/web/acuteailments/beautyailments/visionimprovement" },
          ],
        },
        { label: "Bone Ailments", href: "/web/acuteailments/boneailments",
          children: [
            { label: "Cervical Spondylosis", href: "/web/acuteailments/boneailments/cervicalspondylosis" },
            { label: "Lumbar Spondylosis", href: "/web/acuteailments/boneailments/lumbarspondylosis" },
            { label: "Gout", href: "/web/acuteailments/boneailments/gout" },
            { label: "Sciatica", href: "/web/acuteailments/boneailments/sciatica" },
            { label: "Spinal Stenosis", href: "/web/acuteailments/boneailments/spinalstenosis" },
            { label: "Degenerative Changes", href: "/web/acuteailments/boneailments/degenerativechanges" },
            { label: "Joint pain", href: "/web/acuteailments/boneailments/jointpain" },
            { label: "Rheumatism", href: "/web/acuteailments/boneailments/rheumatism" },
            { label: "Joint and Muscular Pain", href: "/web/acuteailments/boneailments/jointandmuscularpain" },
          ]
         },
         { label: "Children Aliments", href: "/web/AcuteAilments/childrenaliments",
          children: [
            { label: "Late Learning to Walk", href: "/web/acuteailments/childrenailments/latelearningtowalk" },
            { label: "Late Learning to Talk", href: "/web/AcuteAilments/childrenailments/latelearningtotalk" },
            { label: "Stammering", href: "/web/AcuteAilments/childrenailments/stammering" },
            { label: "Examination Phobia", href: "/web/AcuteAilments/childrenaliments/examinationphobia" },
            { label: "Memory Grasping & Recollecting Problem", href: "/web/AcuteAilments/childrenalimnets/memorygrasping&recollectingproblem" },
            { label: "Bed Wetting, Concentration Diffuculties", href: "/web/AcuteAilments/childrenaliments/bedwetting,concentrationdifficulties" },
            { label: "Insect Bite, injury, Operation, Burns", href: "/web/AcuteAilments/childrenaliments/insectbite,injury,operation,burns" },
            { label: "Mental Stress in adults", href: "/web/AcuteAilments/childrenaliments/mentalstressinadults" },
            { label: "Children (irritant behaviour and violent behaviour)", href: "/web/AcuteAilments/childrenaliments/children(irritantbehaviourandviolentbehaviour)" },
            {label: "Attention Deficit", href: "/web/AcuteAilments/childrenaliments/attentiondeficit" },
            { label: "Hyperactivity Disorder", href: "/web/AcuteAilments/childrenaliments/hyperactivitydisorder" },
            { label: "Children (disobedient, not interested in studies)", href: "/web/AcuteAilments/childrenaliments/children(disobedient,notinterestedinstudies)" },
          ]
         },
        { label: "Digestive Disorders", href: "/web/AcuteAilments/digestivedisorder" ,
        children: [
          { label: "Acidity", href: "/web/AcuteAilments/digestivedisorders/acidity" },
          { label: "Constipation", href: "/web/AcuteAilments/digestivedisorders/constipation" },
          { label: "Piles", href: "/web/AcuteAilments/digestivedisorders/piles" },
          { label: "Fissures", href: "/web/AcuteAilments/digestivedisorders/Fissures" },
          { label: "Gases", href: "/web/AcuteAilments/digestivedisorders/gases" },
          { label:"Stomatitis", href: "/web/AcuteAilments/digestivedisorders/stomatitis" },
          { label: "IBS", href: "/web/AcuteAilments/digestivedisorders/ibs" },
          { label: "Migraine", href: "/web/AcuteAilments/digestivedisorders/migraine" },
          { label: "Motion Sickness", href: "/web/AcuteAilments/digestivedisorders/motionsickness" },
          { label: "Food Posioning", href: "/web/AcuteAilments/digestivedisorders/foodposioning" },
        ] 
      },
      { label: "Female Aliments", href: "/web/AcuteAilments/femalealiments" ,
        children: [
          { label: "Irregular Period", href: "/web/AcuteAilments/femalealiments/irregularperiod" },
          { label: "Fibriod", href: "/web/AcuteAilments/femalealiments/fibriod" },
          { label: "Infertility[Difficulty in Pregnancy]", href: "/web/AcuteAilments/femalealiments/infertility[difficulty in pregnancy]" },
          { label: "PCOD", href: "/web/AcuteAilments/femalealiments/pcod" },
          { label: "Endometriosis", href: "/web/AcuteAilments/femalealiments/endometriosis" },
          { label:"Menopause", href: "/web/AcuteAilments/femalealiments/menopause" },
          { label: "White Discharge", href: "/web/AcuteAilments/femalealiments/whitedischarge" },
         
        ] 
      },
      
      ],
    },

    {
      label: "Chronic Ailments",
      children: [
        { label: "Brain Aliments", 
          href: "/web/ChronicAilments/brainaliments",
        
       children: [
        { label: "Brain Infract", href: "/web/ChronicAilments/brainaliments/braininfarct" },
        { label: "Brain Haemorrhage", href: "/web/ChronicAilments/brainaliments/brainhaemorrage" },
        { label: "Haematoma of Brain", href: "/web/ChronicAilments/brainaliments/haematomaofbrain" },
        { label: "Migraine Headache", href: "/web/ChronicAilments/brainaliments/migraineheadache" },
       
      ],
    },
        { label: "Heart Ailments", 
          href: "/web/ChronicAilments/heartailments",
          children: [
            { label: "BP", href: "/web/ChronicAilments/heartaliments/bp" },
            { label: "Heart Blockages", href: "/web/ChronicAilments/heartaliments/heartblockages" },
            { label: "Cholesterol", href: "/web/ChronicAilments/heartaliments/chloesterol" },
            { label: "HighandLow BP", href: "/web/ChronicAilments/heartaliments/highandlowbp" },
           
          ],
        },
        { label: "Kidney Disorders", 
          href: "/web/ChronicAilments/kidneydisorders",
          children: [
            { label: "Kidney Stone", href: "/web/ChronicAilments/kidneydisorders/kidneystone" },
            { label: "UTI", href: "/web/ChronicAilments/uti" },
            { label: "Burning in Urine", href: "/web/ChronicAilments/kidneydisorders/burninginurine" },
            { label: "Blood in Urine", href: "/web/ChronicAilments/kidneydisorders/bloodinurine" },
            { label: "Cyst", href: "/web/ChronicAilments/kidneydisorders/cyst" },
            { label: "Kidney disease", href: "/web/ChronicAilments/kidneydisorders/kidneydisease" },
          ],
        },
        { label: "Life Style Disorders", 
          href: "/web/ChronicAilments/lifestyledisorders",
          children: [
            { label: "Obesity (Overweight)", href: "/web/ChronicAilments/lifestyledisorders/obesity(overweight)" },
            { label: "Diabetes", href: "/web/ChronicAilments/lifestyledisorders/diabetes" },
            { label: "Thyroid Disorder", href: "/web/ChronicAilments/lifestyledisorders/thyroiddisorder" },
            { label: "Goitre", href: "/web/ChronicAilments/lifestyledisorders/goitre" },
            { label: "Nutritional Deficiency", href: "/web/ChronicAilments/lifestyledisorders/nutritionaldeficiency" },
            { label: "Mineral Deficiency", href: "/web/ChronicAilments/lifestyledisorders/mineraldeficiency" },
            { label: "Vitamin Deficiency", href: "/web/ChronicAilments/lifestyledisorders/vitamindeficiency" },
            { label: "Fatty Liver", href: "/web/ChronicAilments/lifestyledisorders/fattyliver" },
            { label: "Hepatitis B", href: "/web/ChronicAilments/lifestyledisorders/hepatitisb" },
            { label: "Jaundice", href: "/web/ChronicAilments/lifestyledisorders/jaundice" },
          ],
        },
        { label: "Mental Ailments", 
          href: "/web/ChronicAilments/mentalailments",
          children: [
            { label: "Schizophrenia", href: "/web/ChronicAilments/mentalsaliments/schizophrenia" },
            { label: "Stress", href: "/web/ChronicAilments/mentalaliments/stress" },
            { label: "Depression", href: "/web/ChronicAilments/mentalaliments/depression" },
            { label: "Anxiety", href: "/web/ChronicAilments/mentalaliments/anxiety" },
            { label: "Phobic Disorder", href: "/web/ChronicAilments/mentalaliments/phobicdisorder" },
            { label: "Behavioural and Mental Disorders", href: "/web/ChronicAilments/mentalaliments/behaviouralandmentaldisorders" },
            { label: "Mental Stress (children & adults)", href: "/web/ChronicAilments/mentalaliments/mentalstress(children&adults)" },
    
          ],
        },
        { label: "Respiratory Ailments", 
          href: "/web/ChronicAilments/respiratoryailments",
          children: [
            { label: "Bronchitis", href: "/web/ChronicAilments/resporitaryailments/bronchitis" },
            { label: "Tonsils Infection", href: "/web/ChronicAilments/resporitaryailments/tonsilsinfection" },
            { label: "Sinus Infection", href: "/web/ChronicAilments/respiratoryaliments/sinusinfection" },
            { label: "Asthma (children & Adults)", href: "/web/ChronicAilments/respiratoryaliments/asthma(children&adults)" },
            { label: "Nasal Polyp", href: "/web/ChronicAilments/respiratoryailments/nasalpolyp" },
            { label: "Sinusitis", href: "/web/ChronicAilments/respiratoryailments/sinusitis" },
            { label: "Allergies Recurrent cough and cold", href: "/web/ChronicAilments/respiratoryailments/allergiesrecurrentcoughandcold" },
            { label: "Pneumonia", href: "/web/ChronicAilments/respiratoryailments/pneumonia" },
           { label: "Cough and Cold", href: "/web/ChronicAilments/respiratoryailments/coughandcold" },
           { label: "COPD", href: "/web/ChronicAilments/respiratoryailments/copd" },
           { label: "DNS", href: "/web/ChronicAilments/respiratoryailments/dns" },
           { label: "Sore Throat", href: "/web/ChronicAilments/respiratoryailments/sorethroat" },
          ],
        },
      ],
    },

   

    {
      label: "Alternative Therapies",
      href:"/web/alternativetherapies",
      children: [
        { label: "Nutrition", href: "/web/alternativetherapies/nutrition" },
        { label: "Counselling", href: "/web/alternativetherapies/counselling" },
        { label: "Acupuncture Therapy", href: "/web/alternativetherapies/acupuncturetherapy" },
        { label: "Acupressure Therapy", href: "/web/alternativetherapies/acupressuretherapy" },
        { label: "Ayurvedic Therapy", href: "/web/alternativetherapies/ayurvedictherapy" },
        { label: "Naturopathy", href: "/web/alternativetherapies/naturopathy" },
        { label: "Physiotherapy", href: "/web/alternativetherapies/physiotherapy" },
      ],
    },
    {
      label: "Health Packages",
      href:"/web/healthpackages " ,
      children: [
        { label: "Reversal Program", href: "/web/healthpackages/reversalprogram" },
        { label: "Garbh Sanskar Classes", href: "/web/garbhsanskarclasses" },
        { label: "Right Brain Activation Classes", href: "/web/rightbrainactivationclasses" },
        { label: "Pre Pregnancy", href: "/web/prepregnancy" },
        { label: "Post Delivery", href: "/web/postdelivery" },
        { label: "Corporate Wellness Program", href: "/web/corporatewellnessprogram" },
      ],
    },
    {
      label: "Resource",
      href:"resource",
      children: [
        { label: "Patients Testimonials", href: "/web/resource/patientstestimonials" },
        { label: "Case Studies", href: "/web/resource/casestudies" },
        { label: "Blogs", href: "/web/resource/blogs" },
        { label: "Online Forms", href: "/web/resource/onlineforms" },
      ],
    },
    
    { label: "Philanthropy", href: "/web/philanthropy" },
    
    {
      label: "Contact Us",
      href:"contactus",
      children: [
        { label: "Contact Us", href: "/web/contactus/contactus" },
        { label: "Request a Call Back", href: "/web/contactus/requestacallback" },
        { label: "Did not Find Your Questions", href: "/web/contactus/didnotfindyourquestions" },
      ],
    },
    { label: "Login", href: "/login" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#e3ffe0] text-black shadow-md px-4 py-3 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto">
        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap justify-center items-center gap-6 text-[15px] font-bold text-green-700">
          {menu.map((item, idx) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setOpenSubDropdown(null);
              }}
            >
              {item.children ? (
                <>
                  <span className="cursor-pointer hover:text-green-700">{item.label}</span>
                  <ul
                    className={`absolute  left-0 top-full mt-2 bg-[#e3ffe0] px-2 text-black font-medium rounded shadow-lg min-w-[200px] z-50 transition-all duration-200 ease-in-out ${
                      openDropdown === idx
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {item.children.map((child) => (
                      <li
                        key={child.label}
                        className="relative group "
                        onMouseEnter={() => setOpenSubDropdown(child.label)}
                        onMouseLeave={() => setOpenSubDropdown(null)}
                      >
                        {child.children ? (
                          <>
                            <span className="block px-2  py-2 hover:text-green-700 cursor-pointer">
                              {child.label}
                            </span>
                            <ul
                              className={`absolute left-full top-0 ml-1 bg-[#e3ffe0] px-2 text-black font-medium rounded shadow-lg min-w-[220px] max-h-[400px] overflow-y-auto z-50 transition-all duration-200 ease-in-out ${
                                openSubDropdown === child.label
                                  ? "opacity-100 visible"
                                  : "opacity-0 invisible"
                              }`}
                            >
                              {child.children.map((sub) => (
                                <li key={sub.label}>
                                  <Link href={sub.href} className={linkClass(sub.href)}>
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link href={child.href} className={linkClass(child.href)}>
                            {child.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-3 text-[16px] font-semibold text-green-900 px-2">
            {menu.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <details className="ml-2">
                    <summary className="cursor-pointer py-1 no-arrow">{item.label}</summary>
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          {child.children ? (
                            <details className="ml-2">
                              <summary className="cursor-pointer">{child.label}</summary>
                              <ul className="ml-4 mt-1 space-y-1">
                                {child.children.map((sub) => (
                                  <li key={sub.label}>
                                    <Link href={sub.href} className={linkClass(sub.href)}>
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </details>
                          ) : (
                            <Link href={child.href} className={linkClass(child.href)}>
                              {child.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} className={linkClass(item.href)}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ✅ Hide summary arrows in mobile */}
      <style jsx global>{`
        summary::marker {
          display: none;
        }
      `}</style>
    </nav>
  );
}
