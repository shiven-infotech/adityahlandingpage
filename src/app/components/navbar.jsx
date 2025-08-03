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
      href: "/aboutus",
      children: [
        {label:"About Us", href:"/aboutus/aboutus"},
        { label: "Fundamentals of Homeopathy", href: "/aboutus/fundamentalsofhomeopathy" },
        { label: "Myths & Facts About Homeopathy", href: "/aboutus/myths&factsabouthomeopathy" },
        {label:"Vision and Mission", href:"/aboutus/visionandmission"},
        {label:"Team Balance", href:"/aboutus/teambalance"}
      ],
    },
    {
      label: "Acute Ailments",
      children: [
        {
          label: "Skin Ailments",
          href: "/acuteailments/skinailments",
          children: [
            { label: "Eczema", href: "/acuteailments/skinailments/eczemahomeopathytreatment" },
            { label: "Psoriasis", href: "/acuteailments/skinailments/psoriasishomeopathytreatment" },
            { label: "Dermatitis", href: "/acuteailments/skinailments/dermatitishomeopathytreatment" },
            { label: "Crack on Heels", href: "/acuteailments/skinailments/crackonheelshomeopathytreatment" },
            { label: "Lichen Planus", href: "/acuteailments/skinailments/lichenplanushomeopathytreatment" },
            { label: "Dry Skin", href: "/acuteailments/skinailments/dryskinhomeopathytreatment" },
            { label: "Acne And Pimples", href: "/acuteailments/skinailments/acneandpimpleshomeopathytreatment" },
            { label: "Black Discoloration on Face", href: "/acuteailments/skinailments/blackdiscolorationonfacehomeopathytreatment" },
            { label: "Alopecia Areata", href: "/acuteailments/skinailments/alopeciaareatahomeopathytreatment" },
            { label: "Warts", href: "/acuteailments/skinailments/wartshomeopathytreatment" },
            { label: "Corn", href: "/acuteailments/skinailments/cornhomeopathytreatment" },
            { label: "Vitilligo", href: "/acuteailments/skinailments/vitilligohomeopathytreatment" },
            { label: "Heat Storks", href: "/acuteailments/skinailments/heatstorkshomeopathytreatment" },
            { label: "Sun Burns", href: "/acuteailments/skinailments/sunburnshomeopathytreatment" },
            { label: "Skin Rashes", href: "/acuteailments/skinailments/skinrasheshomeopathytreatment" },
            { label: "Varicose Veins", href: "/acuteailments/skinailments/varicoseveinshomeopathytreatment" },
          ],
        },
        {
          label: "Beauty ailments",
          href: "/AcuteAilments/beautyailments",
          children: [
            { label: "Hair Loss", href: "/acuteailments/beautyailments/hairloss" },
            { label: "Greying of Hair", href: "/acuteailments/beautyailments/greyingofhair" },
            { label: "Dandruff", href: "/acuteailments/beautyailments/dandruff" },
            { label: "Freckles", href: "/acuteailments/beautyailments/freckles" },
            { label: "Dark Circles Under Eyes", href: "/acuteailments/beautyailments/darkcirclesundereyes" },
            { label: "Pimples", href: "/acuteailments/beautyailments/pimples" },
            { label: "Ear Infection", href: "/acuteailments/beautyailments/earinfection" },
            { label: "Conjunctivits", href: "/acuteailments/beautyailments/conjunctivits" },
            { label: "Vision Improvement", href: "/acuteailments/beautyailments/visionimprovement" },
          ],
        },
        { label: "Bone Ailments", href: "/acuteailments/boneailments",
          children: [
            { label: "Cervical Spondylosis", href: "/acuteailments/boneailments/cervicalspondylosis" },
            { label: "Lumbar Spondylosis", href: "/acuteailments/boneailments/lumbarspondylosis" },
            { label: "Gout", href: "/acuteailments/boneailments/gout" },
            { label: "Sciatica", href: "/acuteailments/boneailments/sciatica" },
            { label: "Spinal Stenosis", href: "/acuteailments/boneailments/spinalstenosis" },
            { label: "Degenerative Changes", href: "/acuteailments/boneailments/degenerativechanges" },
            { label: "Joint pain", href: "/acuteailments/boneailments/jointpain" },
            { label: "Rheumatism", href: "/acuteailments/boneailments/rheumatism" },
            { label: "Joint and Muscular Pain", href: "/acuteailments/boneailments/jointandmuscularpain" },
          ]
         },
         { label: "Children Aliments", href: "/AcuteAilments/childrenaliments",
          children: [
            { label: "Late Learning to Walk", href: "/acuteailments/childrenailments/latelearningtowalk" },
            { label: "Late Learning to Talk", href: "/AcuteAilments/childrenailments/latelearningtotalk" },
            { label: "Stammering", href: "/AcuteAilments/childrenailments/stammering" },
            { label: "Examination Phobia", href: "/AcuteAilments/childrenaliments/examinationphobia" },
            { label: "Memory Grasping & Recollecting Problem", href: "/AcuteAilments/childrenalimnets/memorygrasping&recollectingproblem" },
            { label: "Bed Wetting, Concentration Diffuculties", href: "/AcuteAilments/childrenaliments/bedwetting,concentrationdifficulties" },
            { label: "Insect Bite, injury, Operation, Burns", href: "/AcuteAilments/childrenaliments/insectbite,injury,operation,burns" },
            { label: "Mental Stress in adults", href: "/AcuteAilments/childrenaliments/mentalstressinadults" },
            { label: "Children (irritant behaviour and violent behaviour)", href: "/AcuteAilments/childrenaliments/children(irritantbehaviourandviolentbehaviour)" },
            {label: "Attention Deficit", href: "/AcuteAilments/childrenaliments/attentiondeficit" },
            { label: "Hyperactivity Disorder", href: "/AcuteAilments/childrenaliments/hyperactivitydisorder" },
            { label: "Children (disobedient, not interested in studies)", href: "/AcuteAilments/childrenaliments/children(disobedient,notinterestedinstudies)" },
          ]
         },
        { label: "Digestive Disorders", href: "/AcuteAilments/digestivedisorder" ,
        children: [
          { label: "Acidity", href: "/AcuteAilments/digestivedisorders/acidity" },
          { label: "Constipation", href: "/AcuteAilments/digestivedisorders/constipation" },
          { label: "Piles", href: "/AcuteAilments/digestivedisorders/piles" },
          { label: "Fissures", href: "/AcuteAilments/digestivedisorders/Fissures" },
          { label: "Gases", href: "/AcuteAilments/digestivedisorders/gases" },
          { label:"Stomatitis", href: "/AcuteAilments/digestivedisorders/stomatitis" },
          { label: "IBS", href: "/AcuteAilments/digestivedisorders/ibs" },
          { label: "Migraine", href: "/AcuteAilments/digestivedisorders/migraine" },
          { label: "Motion Sickness", href: "/AcuteAilments/digestivedisorders/motionsickness" },
          { label: "Food Posioning", href: "/AcuteAilments/digestivedisorders/foodposioning" },
        ] 
      },
      { label: "Female Aliments", href: "/AcuteAilments/femalealiments" ,
        children: [
          { label: "Irregular Period", href: "/AcuteAilments/femalealiments/irregularperiod" },
          { label: "Fibriod", href: "/AcuteAilments/femalealiments/fibriod" },
          { label: "Infertility[Difficulty in Pregnancy]", href: "/AcuteAilments/femalealiments/infertility[difficulty in pregnancy]" },
          { label: "PCOD", href: "/AcuteAilments/femalealiments/pcod" },
          { label: "Endometriosis", href: "/AcuteAilments/femalealiments/endometriosis" },
          { label:"Menopause", href: "/AcuteAilments/femalealiments/menopause" },
          { label: "White Discharge", href: "/AcuteAilments/femalealiments/whitedischarge" },
         
        ] 
      },
      
      ],
    },

    {
      label: "Chronic Ailments",
      children: [
        { label: "Brain Aliments", 
          href: "/ChronicAilments/brainaliments",
        
       children: [
        { label: "Brain Infract", href: "/ChronicAilments/brainaliments/braininfarct" },
        { label: "Brain Haemorrhage", href: "/ChronicAilments/brainaliments/brainhaemorrage" },
        { label: "Haematoma of Brain", href: "/ChronicAilments/brainaliments/haematomaofbrain" },
        { label: "Migraine Headache", href: "/ChronicAilments/brainaliments/migraineheadache" },
       
      ],
    },
        { label: "Heart Ailments", 
          href: "/ChronicAilments/heartailments",
          children: [
            { label: "BP", href: "/ChronicAilments/heartaliments/bp" },
            { label: "Heart Blockages", href: "/ChronicAilments/heartaliments/heartblockages" },
            { label: "Cholesterol", href: "/ChronicAilments/heartaliments/chloesterol" },
            { label: "HighandLow BP", href: "/ChronicAilments/heartaliments/highandlowbp" },
           
          ],
        },
        { label: "Kidney Disorders", 
          href: "/ChronicAilments/kidneydisorders",
          children: [
            { label: "Kidney Stone", href: "/ChronicAilments/kidneydisorders/kidneystone" },
            { label: "UTI", href: "/ChronicAilments/uti" },
            { label: "Burning in Urine", href: "/ChronicAilments/kidneydisorders/burninginurine" },
            { label: "Blood in Urine", href: "/ChronicAilments/kidneydisorders/bloodinurine" },
            { label: "Cyst", href: "/ChronicAilments/kidneydisorders/cyst" },
            { label: "Kidney disease", href: "/ChronicAilments/kidneydisorders/kidneydisease" },
          ],
        },
        { label: "Life Style Disorders", 
          href: "/ChronicAilments/lifestyledisorders",
          children: [
            { label: "Obesity (Overweight)", href: "/ChronicAilments/lifestyledisorders/obesity(overweight)" },
            { label: "Diabetes", href: "/ChronicAilments/lifestyledisorders/diabetes" },
            { label: "Thyroid Disorder", href: "/ChronicAilments/lifestyledisorders/thyroiddisorder" },
            { label: "Goitre", href: "/ChronicAilments/lifestyledisorders/goitre" },
            { label: "Nutritional Deficiency", href: "/ChronicAilments/lifestyledisorders/nutritionaldeficiency" },
            { label: "Mineral Deficiency", href: "/ChronicAilments/lifestyledisorders/mineraldeficiency" },
            { label: "Vitamin Deficiency", href: "/ChronicAilments/lifestyledisorders/vitamindeficiency" },
            { label: "Fatty Liver", href: "/ChronicAilments/lifestyledisorders/fattyliver" },
            { label: "Hepatitis B", href: "/ChronicAilments/lifestyledisorders/hepatitisb" },
            { label: "Jaundice", href: "/ChronicAilments/lifestyledisorders/jaundice" },
          ],
        },
        { label: "Mental Ailments", 
          href: "/ChronicAilments/mentalailments",
          children: [
            { label: "Schizophrenia", href: "/ChronicAilments/mentalsaliments/schizophrenia" },
            { label: "Stress", href: "/ChronicAilments/mentalaliments/stress" },
            { label: "Depression", href: "/ChronicAilments/mentalaliments/depression" },
            { label: "Anxiety", href: "/ChronicAilments/mentalaliments/anxiety" },
            { label: "Phobic Disorder", href: "/ChronicAilments/mentalaliments/phobicdisorder" },
            { label: "Behavioural and Mental Disorders", href: "/ChronicAilments/mentalaliments/behaviouralandmentaldisorders" },
            { label: "Mental Stress (children & adults)", href: "/ChronicAilments/mentalaliments/mentalstress(children&adults)" },
    
          ],
        },
        { label: "Respiratory Ailments", 
          href: "/ChronicAilments/respiratoryailments",
          children: [
            { label: "Bronchitis", href: "/ChronicAilments/resporitaryailments/bronchitis" },
            { label: "Tonsils Infection", href: "/ChronicAilments/resporitaryailments/tonsilsinfection" },
            { label: "Sinus Infection", href: "/ChronicAilments/respiratoryaliments/sinusinfection" },
            { label: "Asthma (children & Adults)", href: "/ChronicAilments/respiratoryaliments/asthma(children&adults)" },
            { label: "Nasal Polyp", href: "/ChronicAilments/respiratoryailments/nasalpolyp" },
            { label: "Sinusitis", href: "/ChronicAilments/respiratoryailments/sinusitis" },
            { label: "Allergies Recurrent cough and cold", href: "/ChronicAilments/respiratoryailments/allergiesrecurrentcoughandcold" },
            { label: "Pneumonia", href: "/ChronicAilments/respiratoryailments/pneumonia" },
           { label: "Cough and Cold", href: "/ChronicAilments/respiratoryailments/coughandcold" },
           { label: "COPD", href: "/ChronicAilments/respiratoryailments/copd" },
           { label: "DNS", href: "/ChronicAilments/respiratoryailments/dns" },
           { label: "Sore Throat", href: "/ChronicAilments/respiratoryailments/sorethroat" },
          ],
        },
      ],
    },

   

    {
      label: "Alternative Therapies",
      href:"/alternativetherapies",
      children: [
        { label: "Nutrition", href: "/alternativetherapies/nutrition" },
        { label: "Counselling", href: "/alternativetherapies/counselling" },
        { label: "Acupuncture Therapy", href: "/alternativetherapies/acupuncturetherapy" },
        { label: "Acupressure Therapy", href: "/alternativetherapies/acupressuretherapy" },
        { label: "Ayurvedic Therapy", href: "/alternativetherapies/ayurvedictherapy" },
        { label: "Naturopathy", href: "/alternativetherapies/naturopathy" },
        { label: "Physiotherapy", href: "/alternativetherapies/physiotherapy" },
      ],
    },
    {
      label: "Health Packages",
      href:"/healthpackages " ,
      children: [
        { label: "Reversal Program", href: "/healthpackages/reversalprogram" },
        { label: "Garbh Sanskar Classes", href: "/garbhsanskarclasses" },
        { label: "Right Brain Activation Classes", href: "/rightbrainactivationclasses" },
        { label: "Pre Pregnancy", href: "/prepregnancy" },
        { label: "Post Delivery", href: "/postdelivery" },
        { label: "Corporate Wellness Program", href: "/corporatewellnessprogram" },
      ],
    },
    {
      label: "Resource",
      href:"resource",
      children: [
        { label: "Patients Testimonials", href: "/resource/patientstestimonials" },
        { label: "Case Studies", href: "/resource/casestudies" },
        { label: "Blogs", href: "/resource/blogs" },
        { label: "Online Forms", href: "/resource/onlineforms" },
      ],
    },
    
    { label: "Philanthropy", href: "/philanthropy" },
    
    {
      label: "Contact Us",
      href:"contactus",
      children: [
        { label: "Contact Us", href: "/contactus/contactus" },
        { label: "Request a Call Back", href: "/contactus/requestacallback" },
        { label: "Did not Find Your Questions", href: "/contactus/didnotfindyourquestions" },
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
                    className={`absolute  left-0 top-full mt-2 bg-[#e3ffe0] text-center text-black font-medium rounded shadow-lg min-w-[200px] z-50 transition-all duration-200 ease-in-out ${
                      openDropdown === idx
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {item.children.map((child) => (
                      <li
                        key={child.label}
                        className="relative group"
                        onMouseEnter={() => setOpenSubDropdown(child.label)}
                        onMouseLeave={() => setOpenSubDropdown(null)}
                      >
                        {child.children ? (
                          <>
                            <span className="block px-4  py-2 hover:text-green-700 cursor-pointer">
                              {child.label}
                            </span>
                            <ul
                              className={`absolute left-full top-0 ml-1 bg-[#e3ffe0] text-black font-medium rounded shadow-lg min-w-[220px] max-h-[400px] overflow-y-auto z-50 transition-all duration-200 ease-in-out ${
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
