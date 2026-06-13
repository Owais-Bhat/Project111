/* ═══════════════════════════════════════════════
   JKSSB FMPHW / MMPHW 2025 — Exam Prep App
   ═══════════════════════════════════════════════ */

// ─── DATA: TOPICS ─────────────────────────────────────────────────────────────
const TOPICS = [
  { id: 'mch',        name: 'Maternal & Child Health',    icon: '🤱', color: '#f9a8d4' },
  { id: 'fp',         name: 'Family Planning',             icon: '👨‍👩‍👧', color: '#86efac' },
  { id: 'immunize',   name: 'Immunization (UIP)',          icon: '💉', color: '#fde68a' },
  { id: 'nutrition',  name: 'Nutrition',                   icon: '🥗', color: '#6ee7b7' },
  { id: 'diseases',   name: 'Communicable Diseases',       icon: '🦠', color: '#fca5a5' },
  { id: 'ncd',        name: 'Non-Communicable Diseases',   icon: '🫀', color: '#c4b5fd' },
  { id: 'programs',   name: 'National Health Programs',    icon: '🏥', color: '#7dd3fc' },
  { id: 'firstaid',   name: 'First Aid & Emergency',       icon: '🩹', color: '#fbbf24' },
  { id: 'anatomy',    name: 'Basic Anatomy & Physiology',  icon: '🧬', color: '#a3e635' },
  { id: 'environment',name: 'Environmental Health',        icon: '🌿', color: '#34d399' },
  { id: 'stats',      name: 'Health Statistics & Epidemiology', icon: '📈', color: '#60a5fa' },
  { id: 'drug',       name: 'Essential Medicines & Drug',  icon: '💊', color: '#f472b6' },
];

// ─── DATA: QUESTIONS ──────────────────────────────────────────────────────────
const QUESTIONS = [

  /* ═══ MATERNAL & CHILD HEALTH ═══ */
  {
    topic: 'mch',
    q: 'What is the recommended number of Antenatal Care (ANC) visits as per WHO (2016) guidelines?',
    opts: ['4 visits', '6 visits', '8 visits', '10 visits'],
    ans: 2,
    expl: 'WHO 2016 guidelines recommend a minimum of 8 ANC contacts (not just visits) during pregnancy: at <12 weeks, 20, 26, 30, 34, 36, 38, and 40 weeks of gestation. India\'s older RMNCH+A guidelines mention 4 ANCs, but WHO updated to 8 for better outcomes.'
  },
  {
    topic: 'mch',
    q: 'The first ANC visit should ideally be completed within how many weeks of pregnancy?',
    opts: ['First 4 weeks', 'First 12 weeks', 'First 16 weeks', 'First 20 weeks'],
    ans: 1,
    expl: 'The first ANC visit should be completed within the first trimester, ideally by 12 weeks. This allows early detection of risk factors, registration under JSSK, and timely initiation of iron-folic acid supplementation.'
  },
  {
    topic: 'mch',
    q: 'Iron and Folic Acid (IFA) tablets are given to pregnant women primarily to prevent:',
    opts: ['Night blindness', 'Anaemia and neural tube defects', 'Rickets', 'Scurvy'],
    ans: 1,
    expl: 'Iron prevents anaemia (most common nutritional deficiency in pregnancy). Folic acid prevents Neural Tube Defects (NTDs) like spina bifida and anencephaly in the newborn. IFA supplementation should start as early as possible in pregnancy.'
  },
  {
    topic: 'mch',
    q: 'Which injection is given to a pregnant woman to protect the newborn from tetanus?',
    opts: ['BCG', 'TT (Tetanus Toxoid) / Td', 'OPV', 'Hepatitis B'],
    ans: 1,
    expl: 'Tetanus Toxoid (TT) or Td (Tetanus-Diphtheria) is given to pregnant women. It passes antibodies to the baby, protecting against neonatal tetanus. India now uses Td instead of TT. Two doses are given if not previously immunized (TT1 at first contact, TT2 four weeks later).'
  },
  {
    topic: 'mch',
    q: 'The term "low birth weight" refers to a newborn weighing less than:',
    opts: ['2000 g', '2500 g', '3000 g', '1500 g'],
    ans: 1,
    expl: 'Low Birth Weight (LBW) is defined as birth weight less than 2500 grams regardless of gestational age. Very Low Birth Weight (VLBW) is <1500 g and Extremely Low Birth Weight (ELBW) is <1000 g. LBW babies require special care, including Kangaroo Mother Care.'
  },
  {
    topic: 'mch',
    q: 'Kangaroo Mother Care (KMC) refers to:',
    opts: [
      'Bathing the baby immediately after birth',
      'Skin-to-skin contact between mother and low-birth-weight baby',
      'Giving kangaroo milk to the newborn',
      'Placing the baby in an incubator'
    ],
    ans: 1,
    expl: 'KMC involves placing the low-birth-weight or preterm infant in skin-to-skin contact on the mother\'s chest, covered by her clothing. Benefits: maintains body temperature, promotes breastfeeding, reduces infections and mortality, and strengthens mother-baby bond.'
  },
  {
    topic: 'mch',
    q: 'Exclusive breastfeeding is recommended for:',
    opts: ['First 3 months', 'First 6 months', 'First 9 months', 'First 12 months'],
    ans: 1,
    expl: 'WHO and UNICEF recommend Exclusive Breastfeeding (EBF) for the first 6 months of life. After 6 months, complementary feeding is started while breastfeeding continues up to 2 years or beyond. EBF means no water, other liquids, or food — only breast milk.'
  },
  {
    topic: 'mch',
    q: 'The first milk produced after delivery, which is rich in antibodies, is called:',
    opts: ['Foremilk', 'Hindmilk', 'Colostrum', 'Transitional milk'],
    ans: 2,
    expl: 'Colostrum is the thick, yellowish/golden milk produced in the first 2–3 days after delivery. It is rich in IgA (secretory antibodies), white blood cells, proteins, and vitamins. It acts as the baby\'s first vaccine. It should NEVER be discarded. Breastfeeding should be initiated within 1 hour of birth.'
  },
  {
    topic: 'mch',
    q: 'APGAR score at 1 minute is used to assess:',
    opts: [
      'Gestational age',
      'Nutritional status of the newborn',
      'Immediate condition of the newborn after birth',
      'Mother\'s post-partum condition'
    ],
    ans: 2,
    expl: 'APGAR score is assessed at 1 min and 5 min after birth. It evaluates: Appearance (skin color), Pulse, Grimace (reflex irritability), Activity (muscle tone), Respiration. Score: 7–10 = normal; 4–6 = moderate depression; 0–3 = severe depression. Maximum score is 10.'
  },
  {
    topic: 'mch',
    q: 'Postpartum hemorrhage (PPH) is defined as blood loss exceeding:',
    opts: ['300 mL after vaginal delivery', '500 mL after vaginal delivery', '1000 mL', '200 mL'],
    ans: 1,
    expl: 'PPH = blood loss ≥500 mL within 24 hours after vaginal delivery (or ≥1000 mL after caesarean section). The most common cause (4T): Tone (uterine atony — 80%), Trauma, Tissue, Thrombin. Oxytocin is given prophylactically to prevent PPH (Active Management of Third Stage of Labour — AMTSL).'
  },
  {
    topic: 'mch',
    q: 'Which vitamin is given to children in India under Vitamin A Supplementation Programme (VAS)?',
    opts: [
      'Vitamin A — 100,000 IU at 6 months, 200,000 IU every 6 months up to 5 years',
      'Vitamin A — 50,000 IU monthly',
      'Vitamin D — 400 IU daily',
      'Vitamin B12 — biannually'
    ],
    ans: 0,
    expl: 'India\'s VAS schedule: 1st dose 100,000 IU at 9 months (with measles vaccine), then 200,000 IU every 6 months from 18 months up to 5 years. Vitamin A deficiency causes night blindness, xerophthalmia, and increased mortality from measles and diarrhoea.'
  },
  {
    topic: 'mch',
    q: 'The term "Neonatal period" refers to:',
    opts: ['First 7 days of life', 'First 28 days of life', 'First 3 months of life', 'First year of life'],
    ans: 1,
    expl: 'Neonatal period = first 28 days (0–28 days) of life. Early neonatal = 0–7 days; Late neonatal = 7–28 days. Perinatal period = 28 weeks of gestation to 7 days after birth. The neonatal period carries the highest risk of mortality, mainly from sepsis, birth asphyxia, and prematurity.'
  },
  {
    topic: 'mch',
    q: 'The "Safe Motherhood" initiative includes all EXCEPT:',
    opts: ['ANC care', 'Skilled birth attendance', 'Post-natal care', 'Male sterilization'],
    ans: 3,
    expl: 'Safe Motherhood (launched 1987) focuses on: ANC, skilled birth attendance, emergency obstetric care, and postnatal care. The four pillars are: Family Planning, ANC, Clean/Safe Delivery, and Essential Obstetric Care. Male sterilisation is a family planning method, not a direct component.'
  },
  {
    topic: 'mch',
    q: 'Under JSSK (Janani Shishu Suraksha Karyakram), which of the following is NOT free?',
    opts: [
      'Normal delivery',
      'Caesarean section',
      'Blood transfusion for mother',
      'Cosmetic surgery for mother'
    ],
    ans: 3,
    expl: 'JSSK (2011) entitles pregnant women and sick newborns to FREE services in government hospitals: delivery (normal + C-section), drugs, diagnostics, diet, blood, transport, and referral. Cosmetic procedures are not included as they are not essential obstetric/neonatal care.'
  },

  /* ═══ FAMILY PLANNING ═══ */
  {
    topic: 'fp',
    q: 'The most effective permanent method of family planning for females is:',
    opts: ['IUCD insertion', 'Tubectomy (female sterilisation)', 'OCP (oral contraceptive pills)', 'Condom use'],
    ans: 1,
    expl: 'Tubectomy (bilateral tubal ligation) is the most effective permanent family planning method for women, with a failure rate of <0.5 per 100 women-years. Methods in order of effectiveness: Tubectomy > Vasectomy > IUCD > Injectables > OCPs > Condoms > Barrier methods.'
  },
  {
    topic: 'fp',
    q: 'Cu-T 380A IUCD can be retained in the uterus for up to:',
    opts: ['3 years', '5 years', '10 years', '15 years'],
    ans: 2,
    expl: 'Cu-T 380A (also called Cu-T 380) is the most widely used IUCD in India. It is effective for up to 10 years. The copper ions have spermicidal action and also prevent fertilisation by affecting sperm motility. "380A" refers to 380 sq mm surface area of copper wire on the arms and stem.'
  },
  {
    topic: 'fp',
    q: 'The "Emergency Contraceptive Pill" (ECP) should ideally be taken within:',
    opts: ['12 hours', '24 hours', '72 hours', '7 days'],
    ans: 2,
    expl: 'ECP (commonly levonorgestrel 1.5 mg) is most effective within 72 hours (3 days) of unprotected intercourse. Efficacy: 95% within 24h, 85% within 48h, 58% within 72h. Ella (ulipristal acetate) can be used up to 120 hours (5 days). ECP works mainly by delaying/preventing ovulation.'
  },
  {
    topic: 'fp',
    q: 'The natural family planning method based on basal body temperature is:',
    opts: ['Rhythm method', 'Billings method', 'Sympto-thermal method', 'Lactational amenorrhoea method (LAM)'],
    ans: 2,
    expl: 'The Sympto-thermal method combines: (1) Basal Body Temperature (BBT — rises 0.2–0.5°C after ovulation) and (2) Cervical mucus (Billings method — mucus becomes clear and stretchy at ovulation). Rhythm/calendar method uses past menstrual cycle data. LAM is effective when a mother is fully breastfeeding, amenorrhoeic, and baby is <6 months.'
  },
  {
    topic: 'fp',
    q: 'DMPA (Depo-Provera) injectable contraceptive is given every:',
    opts: ['1 month', '2 months', '3 months', '6 months'],
    ans: 2,
    expl: 'DMPA (Depot Medroxyprogesterone Acetate) is given as 150 mg deep IM injection every 3 months (12–13 weeks). India introduced it in Mission Parivar Vikas areas. It is a progestin-only method, so it can be used by breastfeeding mothers. Main side effect: menstrual irregularity.'
  },
  {
    topic: 'fp',
    q: 'The contraceptive method with the LOWEST Pearl Index (most effective) is:',
    opts: ['Condom', 'OCPs', 'IUCD', 'Tubectomy'],
    ans: 3,
    expl: 'Pearl Index = number of pregnancies per 100 woman-years of use. Lower Pearl Index = more effective method. Approximate values: Tubectomy 0.5, Vasectomy 0.1, IUCD 0.5–1, OCPs 1–2, Condoms 3–5 (typical use). So tubectomy has the lowest Pearl Index among the options listed.'
  },

  /* ═══ IMMUNIZATION ═══ */
  {
    topic: 'immunize',
    q: 'BCG vaccine is given to protect against:',
    opts: ['Measles', 'Tuberculosis (TB) — especially TB meningitis & miliary TB', 'Polio', 'Hepatitis B'],
    ans: 1,
    expl: 'BCG (Bacillus Calmette-Guérin) vaccine protects against severe forms of tuberculosis: TB meningitis, miliary TB, and disseminated TB in infants. It does NOT prevent pulmonary TB effectively in adults. Dose: 0.1 mL intradermal on left upper arm at birth or as early as possible.'
  },
  {
    topic: 'immunize',
    q: 'DPT vaccine protects against which three diseases?',
    opts: [
      'Diphtheria, Plague, Tetanus',
      'Diphtheria, Pertussis (whooping cough), Tetanus',
      'Dengue, Polio, Typhoid',
      'Diphtheria, Pneumonia, Typhoid'
    ],
    ans: 1,
    expl: 'DPT = Diphtheria, Pertussis (whooping cough caused by Bordetella pertussis), and Tetanus. It is a combined vaccine given IM at 6, 10, 14 weeks and booster at 16–24 months. India now uses Pentavalent vaccine (DPT + Hib + Hep B) in the routine immunisation schedule.'
  },
  {
    topic: 'immunize',
    q: 'OPV (Oral Polio Vaccine) is given to children in India primarily via:',
    opts: ['Injection', 'Drops in mouth (oral route)', 'Nasal drops', 'Skin patch'],
    ans: 1,
    expl: 'OPV (Sabin vaccine) is given orally — 2 drops in the mouth. It contains live attenuated poliovirus (types 1, 2, 3). India now uses bOPV (bivalent — types 1 & 3) in routine immunisation. India was declared polio-free in 2014. IPV (Injectable) is also now part of the schedule to prevent vaccine-derived poliovirus.'
  },
  {
    topic: 'immunize',
    q: 'The Pentavalent vaccine given at 6, 10, 14 weeks protects against how many diseases?',
    opts: ['3', '4', '5', '6'],
    ans: 2,
    expl: 'Pentavalent vaccine (Penta) = 5-in-1: DPT (Diphtheria + Pertussis + Tetanus) + Hepatitis B + Hib (Haemophilus influenzae type b — causes bacterial meningitis and pneumonia). It replaced DPT + Hep B as separate injections. Given IM at 6, 10, 14 weeks.'
  },
  {
    topic: 'immunize',
    q: 'Which vaccine is given to prevent measles in India under UIP?',
    opts: ['BCG', 'MR vaccine (Measles-Rubella)', 'MMR', 'TT'],
    ans: 1,
    expl: 'India has replaced the standalone Measles vaccine with MR vaccine (Measles + Rubella combined). MR is given at 9–12 months and 16–24 months. India also conducted massive MR campaigns targeting children 9 months to 15 years. Rubella prevention is crucial to prevent Congenital Rubella Syndrome.'
  },
  {
    topic: 'immunize',
    q: 'Cold chain in immunisation refers to:',
    opts: [
      'Keeping vaccines at room temperature',
      'System of maintaining vaccines at required low temperature from manufacturer to recipient',
      'Giving vaccines in cold weather',
      'Freezing all vaccines at -20°C'
    ],
    ans: 1,
    expl: 'Cold chain = a system of storage and transport that maintains vaccines at the correct temperature (+2°C to +8°C for most; -15°C to -25°C for OPV) from manufacturer to the point of administration. It includes ILR (Ice-Lined Refrigerators), deep freezers, cold boxes, vaccine carriers, and ice packs. Vaccine Vial Monitor (VVM) detects heat exposure.'
  },
  {
    topic: 'immunize',
    q: 'The VVM (Vaccine Vial Monitor) on a vaccine changes colour when:',
    opts: [
      'Vaccine is frozen',
      'Vaccine has been exposed to excessive heat/has lost potency',
      'Vaccine is expired',
      'Vaccine is opened'
    ],
    ans: 1,
    expl: 'VVM is a heat-sensitive label on vaccine vials. When the vaccine is exposed to too much heat over time, the inner square darkens and reaches the outer circle. Rule: If inner square is LIGHTER than outer circle → vaccine is usable. If SAME or DARKER → discard. It detects heat damage but NOT freeze damage (for freeze-sensitive vaccines like DPT, Hep B).'
  },
  {
    topic: 'immunize',
    q: 'Which vitamin is co-administered with measles vaccine at 9 months under UIP in India?',
    opts: ['Vitamin C', 'Vitamin D', 'Vitamin A (1,00,000 IU)', 'Vitamin B12'],
    ans: 2,
    expl: 'Vitamin A 1,00,000 IU is given orally at 9 months along with the first measles/MR vaccine. This is because measles significantly depletes Vitamin A stores, and Vitamin A deficiency worsens measles severity. Subsequent doses of 2,00,000 IU are given every 6 months up to 5 years.'
  },

  /* ═══ NUTRITION ═══ */
  {
    topic: 'nutrition',
    q: 'Which disease is caused by Vitamin A deficiency?',
    opts: ['Scurvy', 'Xerophthalmia (Night blindness → Bitot\'s spots)', 'Rickets', 'Pellagra'],
    ans: 1,
    expl: 'Vitamin A deficiency → Xerophthalmia (dry eye disease). Stages: Night blindness (XN) → Conjunctival xerosis (X1A) → Bitot\'s spots (X1B) → Corneal xerosis (X2) → Corneal ulceration (X3A/B) → Keratomalacia. Bitot\'s spots are triangular white foamy deposits on the conjunctiva — a classic sign of VAD.'
  },
  {
    topic: 'nutrition',
    q: 'Kwashiorkor is caused by:',
    opts: [
      'Protein-Energy Malnutrition (predominantly protein deficiency)',
      'Only calorie deficiency',
      'Vitamin C deficiency',
      'Iron deficiency'
    ],
    ans: 0,
    expl: 'Kwashiorkor = predominantly protein deficiency. Features: Oedema (pitting — due to low albumin), moon face, pot belly, skin changes (flaky paint dermatosis), psychomotor changes, hair changes (flag sign), fatty liver. Marasmus = severe calorie-protein deficiency → wasting, no oedema. Marasmic kwashiorkor = both.'
  },
  {
    topic: 'nutrition',
    q: 'MUAC (Mid-Upper Arm Circumference) is used to assess malnutrition. Severe Acute Malnutrition (SAM) in children is defined as MUAC less than:',
    opts: ['11.5 cm', '12.5 cm', '13.5 cm', '14.5 cm'],
    ans: 0,
    expl: 'MUAC thresholds in children 6–59 months: SAM = <11.5 cm (red); MAM (Moderate Acute Malnutrition) = 11.5–12.5 cm (yellow); Normal = ≥12.5 cm (green). MUAC tape uses colour coding. SAM children are treated at NRCs (Nutrition Rehabilitation Centres) under the SAM protocol with Ready-to-Use Therapeutic Food (RUTF/F-100).'
  },
  {
    topic: 'nutrition',
    q: 'The daily iron requirement for a pregnant woman is:',
    opts: ['10 mg', '18 mg', '27 mg', '45 mg'],
    ans: 2,
    expl: 'Recommended Dietary Allowance (RDA) for iron: Pregnant women = 27 mg/day; Non-pregnant women = 18 mg/day; Men = 8 mg/day. Under India\'s Anaemia Mukt Bharat programme, pregnant women receive 180 IFA tablets (one daily from 14 weeks onward). Iron deficiency anaemia is the most common nutritional deficiency globally.'
  },
  {
    topic: 'nutrition',
    q: 'Iodine deficiency most commonly causes:',
    opts: ['Anaemia', 'Goitre and cretinism', 'Night blindness', 'Rickets'],
    ans: 1,
    expl: 'Iodine deficiency → Iodine Deficiency Disorders (IDD): Goitre (enlarged thyroid), hypothyroidism, cretinism (mental retardation + deaf-mutism + stunting in infants of iodine-deficient mothers), increased stillbirths. Prevention: Universal Salt Iodisation (USI) — iodising all edible salt at 30 ppm at production level.'
  },
  {
    topic: 'nutrition',
    q: 'PEM (Protein Energy Malnutrition) is assessed in children using Gomez classification based on:',
    opts: ['Height for age', 'Weight for height', 'Weight for age vs. standard', 'MUAC'],
    ans: 2,
    expl: 'Gomez classification (1956) uses Weight for Age (as % of Harvard standard): Grade I (mild) = 75–90%; Grade II (moderate) = 60–74%; Grade III (severe) = <60%. IAP (Indian Academy of Paediatrics) classification uses standard reference similarly. WHO now uses Z-score (SD) based classifications for under-5 malnutrition.'
  },

  /* ═══ COMMUNICABLE DISEASES ═══ */
  {
    topic: 'diseases',
    q: 'Which test is used for the diagnosis of Tuberculosis in India under RNTCP/NTEP?',
    opts: [
      'Mantoux test only',
      'Sputum smear microscopy (ZN staining) + CBNAAT/TrueNat',
      'Chest X-ray alone',
      'Blood culture'
    ],
    ans: 1,
    expl: 'NTEP (National TB Elimination Programme) uses: Sputum AFB microscopy (Ziehl-Neelsen staining), CBNAAT (Cartridge Based Nucleic Acid Amplification Test — GeneXpert) which also detects Rifampicin resistance, and TrueNat. Chest X-ray is supportive. Mantoux (tuberculin skin test) is used for latent TB/children. Treatment: DOTS (Directly Observed Treatment Short-course).'
  },
  {
    topic: 'diseases',
    q: 'Malaria is transmitted by:',
    opts: ['Culex mosquito (male)', 'Female Anopheles mosquito', 'Aedes mosquito', 'Sandfly'],
    ans: 1,
    expl: 'Malaria is transmitted by the BITE of female Anopheles mosquito (only females bite as they need blood for egg development). Causative agent: Plasmodium (P. vivax — most common in India; P. falciparum — most dangerous; P. malariae; P. ovale). Treatment: Chloroquine for P. vivax; Artemisinin Combination Therapy (ACT) for P. falciparum.'
  },
  {
    topic: 'diseases',
    q: 'The causative agent of Cholera is:',
    opts: ['Salmonella typhi', 'Vibrio cholerae', 'Shigella dysenteriae', 'E. coli'],
    ans: 1,
    expl: 'Cholera is caused by Vibrio cholerae (serotype O1 — classical & El Tor biotypes, or O139). Mode of transmission: faecal-oral route via contaminated water/food. Classic presentation: "rice water" stools, painless profuse diarrhoea, rapid dehydration. Treatment: ORS (Oral Rehydration Solution) is the cornerstone. Prevention: safe water, sanitation, and WASH practices.'
  },
  {
    topic: 'diseases',
    q: 'Dengue fever is transmitted by which vector?',
    opts: ['Anopheles mosquito', 'Culex mosquito', 'Aedes aegypti mosquito', 'Sandfly'],
    ans: 2,
    expl: 'Dengue is transmitted by Aedes aegypti mosquito (also Aedes albopictus). Aedes breeds in clean, stagnant water (flower vases, coolers, tyres). It bites during DAYTIME. Dengue caused by 4 serotypes (DENV 1–4). Severe dengue = dengue haemorrhagic fever (DHF) / dengue shock syndrome (DSS). No specific antiviral; treatment is supportive.'
  },
  {
    topic: 'diseases',
    q: 'The incubation period of Typhoid fever is:',
    opts: ['1–3 days', '3–5 days', '7–14 days (1–3 weeks)', '21–30 days'],
    ans: 2,
    expl: 'Typhoid (Enteric fever) caused by Salmonella typhi. Incubation: 7–14 days (range 3–60 days). Classic feature: step-ladder fever (rising daily), relative bradycardia (Faget\'s sign), rose spots on abdomen, splenomegaly. Widal test used for diagnosis (not gold standard). Gold standard: Blood culture. Prevention: Vi polysaccharide typhoid vaccine, safe water, sanitation.'
  },
  {
    topic: 'diseases',
    q: 'HIV is primarily transmitted through all EXCEPT:',
    opts: ['Unprotected sexual intercourse', 'Sharing needles (IV drug use)', 'Mother to child (MTCT)', 'Casual contact (handshake, hugging)'],
    ans: 3,
    expl: 'HIV (Human Immunodeficiency Virus) is NOT transmitted by casual contact: handshakes, hugging, sharing food, mosquito bites, coughing/sneezing, or toilet seats. Modes of transmission: Sexual (most common globally), Blood (transfusion, needle sharing), and Vertical (mother to child during pregnancy, delivery, or breastfeeding — MTCT).'
  },
  {
    topic: 'diseases',
    q: 'The most common site of leprosy lesion is:',
    opts: ['Lungs', 'Skin and peripheral nerves', 'Liver', 'Kidneys'],
    ans: 1,
    expl: 'Leprosy (Hansen\'s disease) is caused by Mycobacterium leprae. It primarily affects skin (hypopigmented patches with loss of sensation) and peripheral nerves (thickened nerves — ulnar, radial cutaneous, common peroneal). Result: deformities, disabilities. MDT (Multi-Drug Therapy — Rifampicin + Dapsone ± Clofazimine) is the treatment. India has achieved "elimination" (prevalence <1/10,000).'
  },

  /* ═══ NON-COMMUNICABLE DISEASES ═══ */
  {
    topic: 'ncd',
    q: 'Hypertension in adults is defined by JNC-8 as blood pressure ≥:',
    opts: ['120/80 mmHg', '130/80 mmHg', '140/90 mmHg', '160/100 mmHg'],
    ans: 2,
    expl: 'JNC-8 (2014) and WHO define hypertension as BP ≥140/90 mmHg. ACC/AHA 2017 guidelines redefined to ≥130/80, but India follows WHO/JNC-8 cutoffs. Stages: Stage 1: 140–159/90–99; Stage 2: ≥160/≥100. Major risk factors: obesity, salt intake, smoking, alcohol, physical inactivity, family history.'
  },
  {
    topic: 'ncd',
    q: 'Type 2 Diabetes Mellitus is diagnosed when fasting blood glucose is:',
    opts: ['> 110 mg/dL', '≥ 126 mg/dL on two occasions', '> 100 mg/dL', '≥ 200 mg/dL only'],
    ans: 1,
    expl: 'WHO diagnostic criteria for Diabetes: Fasting plasma glucose ≥126 mg/dL (7.0 mmol/L) on two separate occasions OR Random plasma glucose ≥200 mg/dL with symptoms OR HbA1c ≥6.5% OR 2-hour post-load glucose ≥200 mg/dL during OGTT. Prediabetes: FBG 100–125 mg/dL (Impaired Fasting Glucose).'
  },
  {
    topic: 'ncd',
    q: 'The "NPCDCS" programme in India targets:',
    opts: [
      'Communicable diseases only',
      'Cancer, Diabetes, Cardiovascular diseases, and Stroke',
      'Only mental health disorders',
      'Nutritional disorders only'
    ],
    ans: 1,
    expl: 'NPCDCS = National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular Diseases, and Stroke. It operates through NCD clinics at District Hospitals and CHCs, focusing on screening, early detection, and management. Oral, breast, and cervical cancer screening is conducted at Health and Wellness Centres (HWCs).'
  },

  /* ═══ NATIONAL HEALTH PROGRAMS ═══ */
  {
    topic: 'programs',
    q: 'NHM (National Health Mission) was launched in India in:',
    opts: ['1999', '2005', '2013', '2017'],
    ans: 1,
    expl: 'National Rural Health Mission (NRHM) was launched on 12 April 2005 by PM Dr Manmohan Singh. In 2013, it was expanded to National Health Mission (NHM), which includes NRHM + NUHM (National Urban Health Mission). Key components: ASHA, RKS (Rogi Kalyan Samiti), Village Health & Nutrition Days (VHNDs), untied funds.'
  },
  {
    topic: 'programs',
    q: 'ASHA stands for:',
    opts: [
      'Accredited Social Health Authority',
      'Accredited Social Health Activist',
      'Approved Social Health Assistant',
      'Affiliated Social Health Agent'
    ],
    ans: 1,
    expl: 'ASHA = Accredited Social Health Activist. Introduced under NRHM 2005. One ASHA per 1000 population (or per village in hilly/tribal areas). She is a community health volunteer who acts as a link between the community and the health system. She receives incentive-based payments for facilitating institutional deliveries, immunisation, family planning, etc.'
  },
  {
    topic: 'programs',
    q: 'JSSK (Janani Shishu Suraksha Karyakram) was launched in:',
    opts: ['2005', '2007', '2011', '2013'],
    ans: 2,
    expl: 'JSSK was launched on 1st June 2011. It entitles ALL pregnant women delivering in government health facilities to ABSOLUTELY FREE: delivery services, drugs, diagnostics, blood, diet (3 days), transport, and referral. Similarly for sick newborns up to 30 days after birth. The aim is to reduce out-of-pocket expenditure and institutional delivery barriers.'
  },
  {
    topic: 'programs',
    q: 'The Pulse Polio Programme in India aimed to eradicate:',
    opts: ['Tuberculosis', 'Poliomyelitis', 'Measles', 'Smallpox'],
    ans: 1,
    expl: 'Pulse Polio Immunisation (PPI) was launched in India in 1995 under the National Pulse Polio Immunisation Programme. Goal: 2 drops of OPV to ALL children under 5 years on National Immunisation Days (NIDs). India declared POLIO-FREE by WHO on 27 March 2014 after 3 years with no wild poliovirus detected (last case 13 Jan 2011 in Howrah).'
  },
  {
    topic: 'programs',
    q: 'Sub-Centre (SC) is the most peripheral contact point of health system. The population norms are:',
    opts: [
      'Plains: 3,000 / Hilly: 1,500',
      'Plains: 5,000 / Hilly: 3,000',
      'Plains: 30,000 / Hilly: 20,000',
      'Plains: 1,00,000 / Hilly: 80,000'
    ],
    ans: 0,
    expl: 'Population norms for health infrastructure: Sub-Centre: 5,000 (plains) / 3,000 (tribal/hilly) — actual norm changed to 3,000/1,500 in IPHS 2022. PHC: 30,000 / 20,000. CHC: 1,20,000 / 80,000. Each Sub-Centre has at least one ANM (Auxiliary Nurse Midwife) and one Male Health Worker (MHW). The ANM is the primary contact for MCH services.'
  },
  {
    topic: 'programs',
    q: 'RMNCH+A stands for:',
    opts: [
      'Reproductive, Maternal, Newborn, Child Health + Adolescent health',
      'Rural, Maternal, Nutritional, Child Health + Awareness',
      'Reproductive, Medical, Neonatal, Child Health + Adolescent',
      'None of the above'
    ],
    ans: 0,
    expl: 'RMNCH+A = Reproductive, Maternal, Newborn, Child Health, and Adolescent Health. This is the comprehensive strategy under NHM that integrates all the life-cycle approaches from adolescence to old age: adolescent health (RKSK), family planning, ANC, safe delivery, postnatal care, newborn care, child health, and immunisation.'
  },
  {
    topic: 'programs',
    q: 'The NIKSHAY portal is used for tracking:',
    opts: ['Malaria cases', 'TB patients under NTEP', 'Cancer screening', 'HIV patients'],
    ans: 1,
    expl: 'NIKSHAY is the web-based case-based tracking system for TB patients under NTEP (National TB Elimination Programme). Every TB patient must be notified on NIKSHAY. Benefits: case tracking, drug supply monitoring, outcome monitoring, Nikshay Poshan Yojana (₹500/month nutritional support to TB patients). TB notification is MANDATORY (notifiable disease) in India since 2012.'
  },

  /* ═══ FIRST AID ═══ */
  {
    topic: 'firstaid',
    q: 'The correct compression-to-ventilation ratio in adult CPR (one rescuer) is:',
    opts: ['15:2', '30:2', '15:1', '5:1'],
    ans: 1,
    expl: 'AHA/ERC guidelines: Adult CPR = 30 compressions : 2 rescue breaths. Compress at 100–120 compressions/min, depth 5–6 cm, allow full chest recoil. For infants (2 fingers): 30:2 (single rescuer) or 15:2 (two-rescuer). Push hard and fast! If untrained or unwilling to give breaths, do continuous compressions (hands-only CPR).'
  },
  {
    topic: 'firstaid',
    q: 'The first step in managing an unconscious patient is:',
    opts: ['Give oxygen', 'Check for breathing', 'Ensure scene safety and check responsiveness', 'Start chest compressions'],
    ans: 2,
    expl: 'The FIRST step is always: Ensure SCENE SAFETY (Danger — Response — Shout for help — Airway — Breathing — CPR). Check for responsiveness by tapping shoulders and calling loudly. If unresponsive, call for help/ambulance, then open airway (head-tilt chin-lift), check breathing for no more than 10 seconds, then start CPR if not breathing normally.'
  },
  {
    topic: 'firstaid',
    q: 'For a conscious choking adult, the first-line intervention is:',
    opts: ['Finger sweep', '5 back blows + 5 abdominal thrusts (Heimlich manoeuvre)', 'CPR', 'Oxygen therapy'],
    ans: 1,
    expl: 'For conscious choking (severe obstruction — cannot speak/cough/breathe): 5 firm back blows between shoulder blades, then 5 abdominal thrusts (Heimlich manoeuvre) alternating until object is dislodged or person loses consciousness. For pregnant women/obese patients: chest thrusts instead of abdominal thrusts. Do NOT do blind finger sweeps.'
  },
  {
    topic: 'firstaid',
    q: 'For a bleeding wound, the first step in first aid is:',
    opts: ['Apply tourniquet', 'Apply direct pressure with clean cloth/bandage', 'Elevate the wound above heart', 'Give aspirin'],
    ans: 1,
    expl: 'Management of bleeding (DRSABC + wound care): Apply DIRECT FIRM PRESSURE with clean cloth/gauze for at least 10–15 minutes without lifting. Then elevate the limb (if no fracture) above the level of the heart. Tourniquet is used only for life-threatening limb haemorrhage when direct pressure fails. Aspirin thins blood and is CONTRAINDICATED in bleeding.'
  },
  {
    topic: 'firstaid',
    q: 'ORS (Oral Rehydration Solution) for a child with diarrhoea is prepared by mixing:',
    opts: [
      '1 teaspoon sugar + 1/4 teaspoon salt in 1 litre water',
      '6 teaspoons sugar + 1/2 teaspoon salt in 1 litre water',
      'WHO-ORS sachet in 1 litre clean water',
      'Both B and C are correct'
    ],
    ans: 3,
    expl: 'WHO standard ORS sachet contains 2.6g NaCl, 1.5g KCl, 2.9g trisodium citrate, 13.5g glucose per litre. Homemade ORS: 6 flat teaspoons sugar + ½ teaspoon salt in 1 litre clean water. Both methods are acceptable. ORS reduces diarrhoea mortality by preventing dehydration. Zinc (10–20 mg/day for 14 days) is given alongside ORS to reduce diarrhoea duration and severity.'
  },

  /* ═══ ANATOMY & PHYSIOLOGY ═══ */
  {
    topic: 'anatomy',
    q: 'The normal pulse rate (heart rate) in a healthy adult at rest is:',
    opts: ['40–60 beats/min', '60–100 beats/min', '100–120 beats/min', '120–160 beats/min'],
    ans: 1,
    expl: 'Normal resting pulse rate for adults = 60–100 beats/minute. Bradycardia: <60 bpm; Tachycardia: >100 bpm. Pulse sites: radial (most common), brachial (infants), carotid (emergency). Normal values by age: Newborn: 120–160 bpm; Infants: 80–140 bpm; Children (2–10 y): 70–120 bpm; Adults: 60–100 bpm.'
  },
  {
    topic: 'anatomy',
    q: 'The normal respiratory rate in a healthy adult is:',
    opts: ['8–10 breaths/min', '12–20 breaths/min', '25–30 breaths/min', '35–40 breaths/min'],
    ans: 1,
    expl: 'Normal adult respiratory rate = 12–20 breaths/minute. Tachypnoea: >20 (adults), >50 (infants) is a sign of pneumonia/respiratory distress. Normal values: Newborn: 40–60 /min; Infants: 30–60 /min; Toddlers: 24–40 /min; Adults: 12–20 /min. Respiratory rate is the most sensitive vital sign for detecting serious illness in children (WHO IMCI).'
  },
  {
    topic: 'anatomy',
    q: 'The normal body temperature (oral) in an adult is:',
    opts: ['35.0–36.0°C', '36.5–37.5°C', '37.5–38.5°C', '38–39°C'],
    ans: 1,
    expl: 'Normal oral temperature = 36.5–37.5°C (97.7–99.5°F). Fever = temperature >38°C (>100.4°F). Axillary temperature is 0.5°C lower; rectal is 0.5°C higher than oral. Hyperthermia: >40°C; Hypothermia: <35°C. Diurnal variation: lowest at 4–6 am, highest at 4–8 pm.'
  },
  {
    topic: 'anatomy',
    q: 'The largest organ of the human body is:',
    opts: ['Liver', 'Skin', 'Lungs', 'Brain'],
    ans: 1,
    expl: 'The SKIN is the largest organ of the human body — covering ~1.5–2 sq metres and weighing ~3.5–10 kg. Functions: protection, temperature regulation, sensation, Vitamin D synthesis, fluid regulation, and immune function. Layers: Epidermis (outermost), Dermis, Hypodermis (subcutaneous). The liver is the largest INTERNAL organ.'
  },
  {
    topic: 'anatomy',
    q: 'Blood pressure is measured using a:',
    opts: ['Thermometer', 'Sphygmomanometer', 'Stethoscope', 'Spirometer'],
    ans: 1,
    expl: 'Sphygmomanometer (blood pressure cuff + manometer) measures BP. Korotkoff sounds heard via stethoscope: K1 (systolic — first sound), K5 (diastolic — sound disappears). Normal adult BP: <120/<80 mmHg. Mercury sphygmomanometers are being phased out; aneroid and digital are used instead. Proper technique: patient seated, arm at heart level, appropriate cuff size.'
  },
  {
    topic: 'anatomy',
    q: 'The human heart has how many chambers?',
    opts: ['2', '3', '4', '6'],
    ans: 2,
    expl: 'The human heart has 4 chambers: 2 upper (Right Atrium + Left Atrium) and 2 lower (Right Ventricle + Left Ventricle). Right side: receives deoxygenated blood from body, pumps to lungs. Left side: receives oxygenated blood from lungs, pumps to body. The left ventricle has the thickest wall as it pumps blood to the entire body (systemic circulation).'
  },

  /* ═══ ENVIRONMENTAL HEALTH ═══ */
  {
    topic: 'environment',
    q: 'Safe drinking water should contain coliforms not more than:',
    opts: ['10/100 mL', '1/100 mL', '0 per 100 mL (zero tolerance)', '50/100 mL'],
    ans: 2,
    expl: 'WHO and BIS standard: drinking water should have ZERO coliforms per 100 mL (and specifically zero E. coli/thermotolerant coliforms). Coliform bacteria (indicator of faecal contamination) presence means the water is unsafe for drinking. Chlorination (residual chlorine 0.5 mg/L at point of supply) is used for disinfection.'
  },
  {
    topic: 'environment',
    q: 'The per capita minimum water requirement for drinking purpose per day is:',
    opts: ['2.5 litres', '10 litres', '40 litres', '135 litres'],
    ans: 1,
    expl: 'For survival/drinking: minimum 2–2.5 litres/day. For basic hygiene: ~10 litres/day. WHO recommends 20 litres/day for basic needs. India\'s Jal Jeevan Mission targets 55 litres per capita per day (LPCD) through household tap connections. Urban water supply standard: 135 LPCD.'
  },
  {
    topic: 'environment',
    q: 'WHO defines solid waste as:',
    opts: [
      'Only liquid waste',
      'Any garbage, refuse, sludge, or material that is discarded or abandoned',
      'Only hospital waste',
      'Radioactive waste only'
    ],
    ans: 1,
    expl: 'Solid waste (Municipal Solid Waste) includes garbage, refuse, sludge, and other discarded materials. Types: biodegradable/organic, recyclable, inert, and hazardous. Biomedical Waste (BMW) is managed under BMW Management Rules 2016 — segregated into 4 categories (yellow, red, white, blue bags/containers). Healthcare workers must follow BMW protocols strictly.'
  },
  {
    topic: 'environment',
    q: 'The disease caused by contamination of drinking water with arsenic is:',
    opts: ['Fluorosis', 'Arsenicosis (Black foot disease)', 'Minamata disease', 'Itai-itai disease'],
    ans: 1,
    expl: 'Arsenicosis = chronic arsenic poisoning from contaminated groundwater. Features: Keratosis (hard skin on palms/soles), melanosis (dark skin), gangrene of toes (Blackfoot disease — mainly in Taiwan). India has high arsenic in groundwater of West Bengal, Bihar, Assam, UP. Fluorosis (dental + skeletal): excess fluoride in water. Minamata: mercury. Itai-itai: cadmium.'
  },

  /* ═══ HEALTH STATISTICS & EPIDEMIOLOGY ═══ */
  {
    topic: 'stats',
    q: 'Infant Mortality Rate (IMR) is defined as:',
    opts: [
      'Deaths under 5 years per 1000 live births',
      'Deaths under 1 year of age per 1000 live births in the same year',
      'Deaths under 28 days per 1000 live births',
      'Total deaths in a year per 1000 population'
    ],
    ans: 1,
    expl: 'IMR = (Number of deaths of children <1 year in a year / Number of live births in the same year) × 1000. India\'s IMR (SRS 2020): 28/1000 live births. Neonatal Mortality Rate (NMR) = deaths in first 28 days/1000 live births. Under-5 Mortality Rate (U5MR) = deaths <5 years/1000 live births. Maternal Mortality Rate (MMR) = maternal deaths/100,000 live births.'
  },
  {
    topic: 'stats',
    q: 'Herd immunity (community immunity) is achieved when a sufficient proportion of the population is immune. For measles, this threshold is approximately:',
    opts: ['50%', '70%', '90–95%', '99%'],
    ans: 2,
    expl: 'Herd immunity threshold (HIT) depends on R0 (basic reproduction number). Measles R0=12–18, so HIT = 92–95%. Polio HIT ~80–85%. COVID-19 original strain ~60–70%. When HIT is reached, even unvaccinated/susceptible people are protected as chains of transmission are broken. This is why high vaccination coverage is critical for eradication.'
  },
  {
    topic: 'stats',
    q: 'A study that follows a group of people over time to see who develops a disease is called:',
    opts: ['Case-control study', 'Cross-sectional study', 'Cohort (prospective) study', 'Randomised Controlled Trial'],
    ans: 2,
    expl: 'Cohort study: follows exposed and unexposed groups FORWARD IN TIME (prospective) or backward (retrospective) to see who develops disease. Measures: Relative Risk (RR). Case-control: starts with cases (disease) and controls, looks BACK at exposure; measures Odds Ratio. Cross-sectional: snapshot at one time point, measures prevalence. RCT: gold standard for intervention studies.'
  },
  {
    topic: 'stats',
    q: 'Sensitivity of a diagnostic test measures:',
    opts: [
      'Ability to correctly identify those WITHOUT disease (true negative rate)',
      'Ability to correctly identify those WITH disease (true positive rate)',
      'Proportion of positive tests that are truly positive',
      'Overall accuracy of the test'
    ],
    ans: 1,
    expl: 'Sensitivity = TP/(TP+FN) = ability to correctly detect DISEASE (true positive rate). High sensitivity = few false negatives = good SCREENING test (SnNOut: Sensitive test, Negative result rules OUT disease). Specificity = TN/(TN+FP) = correctly identifies those WITHOUT disease (SpPIn: Specific test, Positive result rules IN disease).'
  },

  /* ═══ ESSENTIAL MEDICINES & DRUG ═══ */
  {
    topic: 'drug',
    q: 'ORS solution is used primarily to treat:',
    opts: ['Fever', 'Dehydration due to diarrhoea', 'Anaemia', 'Malaria'],
    ans: 1,
    expl: 'ORS = Oral Rehydration Solution. Primary use: replace fluid and electrolytes lost in diarrhoea. WHO low-osmolarity ORS (2002): 75 mEq/L sodium, 75 mmol/L glucose, 20 mEq/L potassium, 10 mmol/L citrate, osmolarity 245 mOsm/L. It is on the WHO Model List of Essential Medicines. Revolutionised diarrhoea management: simple, cheap, effective.'
  },
  {
    topic: 'drug',
    q: 'Oxytocin is used in obstetrics primarily for:',
    opts: [
      'Pain relief in labour',
      'Induction of labour and prevention/treatment of PPH',
      'Prevention of eclampsia',
      'Antibiotic for puerperal sepsis'
    ],
    ans: 1,
    expl: 'Oxytocin (a hormone from posterior pituitary) is used for: (1) Induction/augmentation of labour (IV infusion), (2) Active Management of Third Stage of Labour (AMTSL) — 10 IU IM after delivery of baby to prevent PPH, (3) Treatment of PPH. Misoprostol (PGE1 analogue) is used when oxytocin unavailable. Magnesium sulphate = drug for eclampsia prevention/treatment.'
  },
  {
    topic: 'drug',
    q: 'The route of administration for BCG vaccine is:',
    opts: ['Intramuscular (IM)', 'Subcutaneous (SC)', 'Intradermal (ID)', 'Oral'],
    ans: 2,
    expl: 'BCG is given by INTRADERMAL injection on the left upper arm (over the deltoid). Dose: 0.1 mL (neonates/infants). Correct technique produces a raised bleb of 7mm. After 2–6 weeks, a papule forms, then ulceration, then a scar (showing successful vaccination). No scar does NOT necessarily mean vaccine failure; repeat is not automatically recommended.'
  },
  {
    topic: 'drug',
    q: 'Chloroquine is used for treatment of:',
    opts: ['P. falciparum malaria', 'P. vivax malaria', 'Dengue fever', 'Typhoid'],
    ans: 1,
    expl: 'Chloroquine (CQ) is the first-line treatment for uncomplicated P. vivax malaria in India (25 mg/kg over 3 days). For P. falciparum (especially chloroquine-resistant), ACT (Artemisinin Combination Therapy — e.g., Artesunate + Sulfadoxine-Pyrimethamine) is used. Primaquine is added for radical cure of P. vivax (kills liver hypnozoites) and for P. falciparum gametocytes.'
  },
];

// ─── DATA: STUDY NOTES ────────────────────────────────────────────────────────
const NOTES = {
  mch: `
<h3>Maternal & Child Health (MCH)</h3>

<h4>Antenatal Care (ANC)</h4>
<p>ANC = care given to a pregnant woman from conception to onset of labour. Aims: detect complications early, promote health, prepare for delivery.</p>
<div class="key-point">⭐ WHO (2016): Minimum 8 ANC contacts. India's RMNCH+A target: at least 4 ANC visits.</div>
<ul>
  <li>1st visit: As early as possible (before 12 weeks) — Register, blood tests, weight, BP, IFA start</li>
  <li>2nd visit: 14–26 weeks — Check fundal height, foetal movement, TT2</li>
  <li>3rd visit: 28–34 weeks — Check for complications, Hb estimation</li>
  <li>4th visit: 36 weeks onwards — Assess presentation, birth plan, danger signs</li>
</ul>

<h4>Essential ANC Services (3Ts of ANC)</h4>
<ul>
  <li><strong>Tests:</strong> Hb, blood group & Rh, urine (protein, sugar), VDRL, HIV, blood sugar</li>
  <li><strong>Treatment:</strong> IFA 180 tablets (1/day from 14 weeks), Calcium 500 mg twice daily, de-worming (Albendazole 400 mg — after 1st trimester)</li>
  <li><strong>TT/Td immunization:</strong> 2 doses (TT1 + TT2 at 4-week interval) or booster if previously immunized</li>
</ul>

<h4>IFA Supplementation</h4>
<table>
  <tr><th>Group</th><th>Dose</th><th>Duration</th></tr>
  <tr><td>Pregnant women</td><td>1 IFA tablet/day (100 mg iron + 0.5 mg folic acid)</td><td>180 days</td></tr>
  <tr><td>Adolescent girls (10–19 y)</td><td>Weekly IFA (WIFS)</td><td>Throughout school year</td></tr>
  <tr><td>Children 6–59 months</td><td>Iron syrup 1 mg/kg/day</td><td>As prescribed</td></tr>
</table>

<h4>Danger Signs in Pregnancy (DANGER SIGNS)</h4>
<ul>
  <li>Severe headache / blurred vision (pre-eclampsia)</li>
  <li>Swelling of face/hands</li>
  <li>Vaginal bleeding</li>
  <li>Fits/convulsions</li>
  <li>Reduced/absent foetal movements</li>
  <li>High fever</li>
  <li>Severe abdominal pain</li>
</ul>

<h4>Post-Natal Care (PNC)</h4>
<div class="key-point">⭐ PNC visits: Within 24 hours, Day 3, Day 7, and 6 weeks after delivery.</div>
<ul>
  <li>Check uterine involution, lochia, breastfeeding</li>
  <li>Vitamin A 200,000 IU to mother within 6 weeks of delivery</li>
  <li>Counsel on family planning, EBF, newborn care</li>
</ul>

<h4>Newborn Care</h4>
<ul>
  <li><strong>Immediate care:</strong> Dry & warm, delayed cord clamping (1–3 min), early initiation of breastfeeding (within 1 hour)</li>
  <li><strong>APGAR:</strong> 0–3 severe, 4–6 moderate, 7–10 normal</li>
  <li><strong>LBW:</strong> <2500 g — KMC, expressed breastmilk, referral if needed</li>
  <li><strong>Danger signs in newborn:</strong> Not feeding, convulsions, fast breathing (>60/min), hypothermia (<36°C), jaundice in first 24 hours</li>
</ul>
`,

  fp: `
<h3>Family Planning</h3>

<h4>Contraceptive Methods Overview</h4>
<table>
  <tr><th>Method</th><th>Pearl Index</th><th>Key Facts</th></tr>
  <tr><td>Vasectomy</td><td>0.1</td><td>Permanent, male, simple, 2-cut technique</td></tr>
  <tr><td>Tubectomy</td><td>0.5</td><td>Permanent, female, laparoscopic/minilaparotomy</td></tr>
  <tr><td>IUCD (Cu-T 380A)</td><td>0.5–1</td><td>10 years, copper spermicidal, can use as ECP</td></tr>
  <tr><td>DMPA injectable</td><td>0.3</td><td>Every 3 months, IM, disrupts periods</td></tr>
  <tr><td>Combined OCP</td><td>0.1–1</td><td>Daily, take with evening meal, protect against ovarian/endometrial cancer</td></tr>
  <tr><td>Condom (male)</td><td>2–15</td><td>Only method protecting against STI/HIV</td></tr>
  <tr><td>LAM</td><td>0.5</td><td>Conditions: EBF + amenorrhoea + baby <6 months</td></tr>
</table>

<h4>New Contraceptives in India's FP Programme</h4>
<ul>
  <li><strong>Antara Programme:</strong> DMPA injectables (150 mg/3 months) — introduced 2017</li>
  <li><strong>Chhaya:</strong> Weekly oral contraceptive pill (centchroman/ormeloxifene) — non-hormonal SERM</li>
  <li><strong>PPIUCD:</strong> Post-Partum IUCD inserted within 48 hours of delivery or 6 weeks postpartum</li>
  <li><strong>PAIUCD:</strong> Post-Abortion IUCD inserted immediately after abortion</li>
</ul>

<div class="key-point">⭐ Mission Parivar Vikas: Launched 2016 in 146 high-fertility districts across 7 states (UP, MP, Rajasthan, Bihar, Jharkhand, Chhattisgarh, Assam). Focus on reducing TFR (Total Fertility Rate) to 2.1.</div>

<h4>Emergency Contraception</h4>
<ul>
  <li>Levonorgestrel (Plan B): 1.5 mg single dose within 72 hours — 95% effective at 24h</li>
  <li>Cu-IUCD: can be inserted within 5 days as ECP — most effective (>99%)</li>
  <li>Ulipristal (Ella): within 120 hours</li>
</ul>
`,

  immunize: `
<h3>Immunization — Universal Immunisation Programme (UIP)</h3>

<h4>India's Immunisation Schedule (UIP)</h4>
<table>
  <tr><th>Age</th><th>Vaccines</th></tr>
  <tr><td>At Birth</td><td>BCG (ID left arm), OPV-0 (2 drops oral), Hep B (0.5 mL IM right thigh)</td></tr>
  <tr><td>6 weeks</td><td>Pentavalent-1 (IM left thigh), OPV-1, Rota-1 (oral), fIPV-1 (0.1 mL ID right arm), PCV-1 (IM right thigh)</td></tr>
  <tr><td>10 weeks</td><td>Pentavalent-2, OPV-2, Rota-2</td></tr>
  <tr><td>14 weeks</td><td>Pentavalent-3, OPV-3, Rota-3 (if applicable), fIPV-2, PCV-2</td></tr>
  <tr><td>9–12 months</td><td>MR-1 (SC), Vitamin A (1,00,000 IU oral), JE-1 (endemic areas), PCV Booster</td></tr>
  <tr><td>16–24 months</td><td>DPT-B1 (IM), OPV-B, MR-2, JE-2, Vitamin A (2,00,000 IU every 6m up to 5y)</td></tr>
  <tr><td>5–6 years</td><td>DPT-B2</td></tr>
  <tr><td>10 & 16 years</td><td>Td (Tetanus-Diphtheria)</td></tr>
</table>

<h4>Cold Chain</h4>
<div class="key-point">⭐ Cold chain temperatures: OPV = -15°C to -25°C (deep freezer). All other vaccines = +2°C to +8°C (ILR). Never freeze DPT, Hep B, Pentavalent — they become ineffective.</div>
<ul>
  <li>ILR (Ice-Lined Refrigerator): stores all vaccines at +2 to +8°C; OPV in freezer compartment</li>
  <li>Cold box: transports vaccines for 48–72 hours with ice packs</li>
  <li>Vaccine carrier: transports vaccines for 4 hours for outreach sessions</li>
  <li>VVM (Vaccine Vial Monitor): heat-sensitive label — discard if square ≥ circle colour</li>
</ul>

<h4>Key Points</h4>
<ul>
  <li>India declared Polio-free: March 27, 2014</li>
  <li>India declared Yaws-free: 2016; Maternal & Neonatal Tetanus eliminated: 2015</li>
  <li>Measles-Rubella Campaign launched 2017 — target 9 months to 15 years</li>
  <li>IPV (Injectable Polio Vaccine) added to UIP 2015</li>
  <li>Rotavirus vaccine added to UIP 2016 (phased rollout)</li>
</ul>
`,

  nutrition: `
<h3>Nutrition</h3>

<h4>Nutritional Deficiency Diseases</h4>
<table>
  <tr><th>Deficiency</th><th>Disease/Condition</th><th>Key Signs</th></tr>
  <tr><td>Vitamin A</td><td>Xerophthalmia, Night blindness</td><td>Bitot's spots, corneal ulceration, keratomalacia</td></tr>
  <tr><td>Vitamin B1 (Thiamine)</td><td>Beriberi</td><td>Wet: cardiac failure; Dry: neuropathy; Wernicke's encephalopathy</td></tr>
  <tr><td>Vitamin B3 (Niacin)</td><td>Pellagra</td><td>3Ds: Dermatitis, Diarrhoea, Dementia</td></tr>
  <tr><td>Vitamin B12 / Folate</td><td>Megaloblastic anaemia, NTDs</td><td>Large red blood cells; Neural tube defects in fetus</td></tr>
  <tr><td>Vitamin C (Ascorbic acid)</td><td>Scurvy</td><td>Bleeding gums, perifollicular haemorrhage, poor wound healing</td></tr>
  <tr><td>Vitamin D</td><td>Rickets (children), Osteomalacia (adults)</td><td>Bowing of legs, rachitic rosary, delayed fontanelle closure</td></tr>
  <tr><td>Iron</td><td>Iron Deficiency Anaemia</td><td>Pallor, fatigue, koilonychia (spoon nails), pica</td></tr>
  <tr><td>Iodine</td><td>IDD — Goitre, Cretinism</td><td>Enlarged thyroid, hypothyroidism, deaf-mutism, mental retardation</td></tr>
  <tr><td>Protein (mostly)</td><td>Kwashiorkor</td><td>Oedema, moon face, flaky paint skin, NO wasting</td></tr>
  <tr><td>Calorie-Protein</td><td>Marasmus</td><td>Severe wasting (skin-and-bones), no oedema, "old man face"</td></tr>
</table>

<h4>Grading of Malnutrition</h4>
<div class="key-point">⭐ MUAC for children 6–59 months: SAM < 11.5 cm (red), MAM 11.5–12.5 cm (yellow), Normal ≥ 12.5 cm (green)</div>

<h4>National Nutrition Programmes</h4>
<ul>
  <li><strong>ICDS (Integrated Child Development Services):</strong> Anganwadi centres — 6 services (supplementary nutrition, immunisation, health check, referral, health & nutrition education, pre-school education)</li>
  <li><strong>POSHAN Abhiyaan (2018):</strong> "Nutrition Mission" — target: reduce stunting, undernutrition, low birth weight by 2%/year</li>
  <li><strong>Anaemia Mukt Bharat:</strong> 6×6×6 strategy targeting 6 beneficiary groups with 6 interventions</li>
  <li><strong>Mid-Day Meal Scheme (PM POSHAN):</strong> School-going children 1–8th standard</li>
</ul>
`,

  diseases: `
<h3>Communicable Diseases</h3>

<h4>Tuberculosis (TB)</h4>
<div class="key-point">⭐ India has the HIGHEST TB burden globally — ~26% of global cases (WHO 2023). Goal: TB-free India by 2025.</div>
<ul>
  <li>Causative agent: Mycobacterium tuberculosis (acid-fast bacillus)</li>
  <li>Transmission: airborne droplet nuclei (tiny particles <5 μm)</li>
  <li>Diagnosis: CBNAAT/TrueNat (preferred), sputum AFB microscopy, chest X-ray</li>
  <li>Treatment (DOTS): Drug-sensitive TB = 2HRZE + 4HR (H=Isoniazid, R=Rifampicin, Z=Pyrazinamide, E=Ethambutol)</li>
  <li>MDR-TB: resistant to Rifampicin + Isoniazid; XDR-TB: MDR + Fluoroquinolone resistance</li>
  <li>BCG vaccine: prevents severe forms in children</li>
</ul>

<h4>Malaria</h4>
<table>
  <tr><th>Species</th><th>Feature</th></tr>
  <tr><td>P. vivax</td><td>Most common in India, benign tertian (fever every 48h), liver hypnozoites (relapses)</td></tr>
  <tr><td>P. falciparum</td><td>Most dangerous, malignant tertian, cerebral malaria, multi-organ failure</td></tr>
  <tr><td>P. malariae</td><td>Quartan fever (every 72h)</td></tr>
</table>
<ul>
  <li>Vector: Female Anopheles mosquito (bites night-time)</li>
  <li>Diagnosis: Peripheral blood smear (gold standard), RDT (Rapid Diagnostic Test)</li>
  <li>Treatment: P. vivax — Chloroquine + Primaquine; P. falciparum — ACT + Primaquine</li>
  <li>Prevention: LLIN (Long-Lasting Insecticidal Nets), IRS (Indoor Residual Spraying), larviciding</li>
</ul>

<h4>Dengue</h4>
<ul>
  <li>Vector: Aedes aegypti (daytime biting, breeds in clean stagnant water)</li>
  <li>Serotypes: DENV 1–4 (second infection with different serotype → severe dengue)</li>
  <li>Warning signs: abdominal pain, persistent vomiting, mucosal bleeding, rapid breathing, lethargy, liver enlargement >2 cm</li>
  <li>No specific treatment; supportive care; avoid aspirin/NSAIDs (risk of bleeding)</li>
</ul>

<h4>HIV/AIDS</h4>
<div class="key-point">⭐ NACP (National AIDS Control Programme) Phase IV target: 90-90-90 (90% people know their HIV status, 90% on ART, 90% with undetectable viral load)</div>
<ul>
  <li>CD4 count <200 cells/μL = AIDS (in presence of HIV infection)</li>
  <li>ART (Antiretroviral Therapy): TLE regimen — Tenofovir + Lamivudine + Efavirenz (first line)</li>
  <li>PPTCT (Prevention of Parent to Child Transmission): ART to all HIV+ pregnant women regardless of CD4</li>
  <li>Window period: 6 weeks to 3 months (4th generation tests detect earlier)</li>
</ul>
`,

  ncd: `
<h3>Non-Communicable Diseases (NCDs)</h3>

<h4>Hypertension</h4>
<div class="key-point">⭐ BP classification (JNC-8/WHO): Normal <120/<80; Elevated 120–129/<80; Stage 1 HT 130–139/80–89; Stage 2 HT ≥140/≥90.</div>
<ul>
  <li>Modifiable risk factors: obesity, high salt diet, smoking, alcohol, physical inactivity, stress</li>
  <li>Non-modifiable: age, sex, family history, ethnicity</li>
  <li>Complications: stroke, MI, CKD, retinopathy, heart failure</li>
  <li>Management: lifestyle modification + anti-hypertensives (ACE inhibitors, CCBs, thiazide diuretics)</li>
  <li>DASH diet: low salt (<5g/day), high fruits/vegetables, low saturated fat</li>
</ul>

<h4>Diabetes Mellitus</h4>
<table>
  <tr><th>Test</th><th>Normal</th><th>Pre-diabetes</th><th>Diabetes</th></tr>
  <tr><td>FPG</td><td><100 mg/dL</td><td>100–125 mg/dL</td><td>≥126 mg/dL</td></tr>
  <tr><td>2-h OGTT</td><td><140 mg/dL</td><td>140–199 mg/dL</td><td>≥200 mg/dL</td></tr>
  <tr><td>HbA1c</td><td><5.7%</td><td>5.7–6.4%</td><td>≥6.5%</td></tr>
  <tr><td>Random PG</td><td>—</td><td>—</td><td>≥200 + symptoms</td></tr>
</table>

<h4>Cancer Prevention (Triple Test for Cervical Cancer)</h4>
<ul>
  <li>VIA (Visual Inspection with Acetic Acid) — primary screening at HWCs</li>
  <li>VILI (Visual Inspection with Lugol's Iodine)</li>
  <li>Pap smear</li>
  <li>HPV vaccine: Cervarix (types 16 & 18) / Gardasil (types 6, 11, 16, 18) — 9–14 years girls</li>
</ul>

<h4>NPCDCS Programme</h4>
<ul>
  <li>Targets: Cancer + Diabetes + CVD + Stroke</li>
  <li>NCD clinics at District Hospitals and CHCs (Community Health Centres)</li>
  <li>Population-level screening at Health and Wellness Centres (HWCs — upgraded Sub-Centres & PHCs)</li>
</ul>
`,

  programs: `
<h3>National Health Programmes</h3>

<h4>NHM (National Health Mission)</h4>
<div class="key-point">⭐ NRHM launched: 12 April 2005. Renamed NHM in 2013 (adding NUHM). Key architect: Dr A.P.J. Abdul Kalam (President at time).</div>
<ul>
  <li>ASHA: 1 per 1000 population — community health volunteer, incentive-based</li>
  <li>ANM: Auxiliary Nurse Midwife — at Sub-Centre, provides MCH, family planning services</li>
  <li>RKS (Rogi Kalyan Samiti): Hospital management committee with untied funds for quality improvement</li>
  <li>Village Health, Sanitation & Nutrition Committee (VHSNC): village-level planning</li>
  <li>Mahila Arogya Samiti: urban equivalent of VHSNC in urban slums</li>
</ul>

<h4>Health System Infrastructure</h4>
<table>
  <tr><th>Facility</th><th>Population served (plains/hilly)</th><th>Staff</th></tr>
  <tr><td>Sub-Centre</td><td>5,000 / 3,000</td><td>1 ANM + 1 MHW</td></tr>
  <tr><td>PHC (Primary Health Centre)</td><td>30,000 / 20,000</td><td>Medical Officer + 6 beds</td></tr>
  <tr><td>CHC (Community Health Centre)</td><td>1,20,000 / 80,000</td><td>4 specialists + 30 beds (FRU)</td></tr>
  <tr><td>Sub-District Hospital</td><td>5–6 lakh</td><td>60–200 beds</td></tr>
  <tr><td>District Hospital</td><td>10–20 lakh</td><td>100–500 beds</td></tr>
</table>

<h4>Key Schemes</h4>
<ul>
  <li><strong>Janani Suraksha Yojana (JSY):</strong> Cash incentive for institutional delivery (BPL women). ASHA gets ₹600 rural / ₹400 urban per delivery facilitated.</li>
  <li><strong>JSSK (2011):</strong> Free delivery, drugs, diagnostics, diet, blood, transport at govt facilities</li>
  <li><strong>PM Surakshit Matritva Abhiyan (PMSMA):</strong> Fixed-day ANC (9th of every month) with specialist services to high-risk pregnant women</li>
  <li><strong>LaQshya:</strong> Labour room and maternity OT quality improvement</li>
  <li><strong>Pradhan Mantri Matru Vandana Yojana (PMMVY):</strong> ₹5,000 maternity benefit for first live birth (Conditional Cash Transfer)</li>
  <li><strong>Ayushman Bharat:</strong> PM-JAY (₹5 lakh health coverage to bottom 40% families) + HWCs (Health and Wellness Centres)</li>
</ul>
`,

  firstaid: `
<h3>First Aid & Emergency Care</h3>

<h4>Primary Survey (ABCDE)</h4>
<ul>
  <li><strong>A — Airway:</strong> Head-tilt chin-lift; jaw-thrust if spinal injury suspected</li>
  <li><strong>B — Breathing:</strong> Look, listen, feel for ≤10 seconds</li>
  <li><strong>C — Circulation/CPR:</strong> 30 compressions : 2 breaths (adult); 100–120/min; 5–6 cm depth</li>
  <li><strong>D — Disability:</strong> AVPU (Alert, Voice, Pain, Unresponsive) or GCS</li>
  <li><strong>E — Exposure:</strong> Check for injuries</li>
</ul>

<h4>CPR Quick Reference</h4>
<table>
  <tr><th>Patient</th><th>Compression : Breath</th><th>Compression Depth</th><th>Rate</th></tr>
  <tr><td>Adult</td><td>30:2 (1 or 2 rescuers)</td><td>5–6 cm (2 inches)</td><td>100–120/min</td></tr>
  <tr><td>Child (1–8 y)</td><td>30:2 (1 rescuer) / 15:2 (2 rescuers)</td><td>5 cm (2 inches)</td><td>100–120/min</td></tr>
  <tr><td>Infant (<1 y)</td><td>30:2 (1 rescuer) / 15:2 (2 rescuers)</td><td>4 cm (1.5 inches)</td><td>100–120/min</td></tr>
</table>

<h4>Choking — Heimlich Manoeuvre</h4>
<ul>
  <li>Conscious adult: 5 back blows → 5 abdominal thrusts (repeat)</li>
  <li>Unconscious: start CPR; each time you open airway, look for object</li>
  <li>Infant: 5 back blows face-down + 5 chest thrusts (NOT abdominal thrusts)</li>
  <li>Pregnant/obese: chest thrusts instead of abdominal</li>
</ul>

<h4>Burns Management</h4>
<div class="key-point">⭐ Rule of Nines (adult): Head & neck = 9%, Each arm = 9%, Chest = 9%, Abdomen = 9%, Back upper = 9%, Back lower = 9%, Each thigh = 9%, Each leg = 9%, Perineum = 1%.</div>
<ul>
  <li>Cool the burn: cool running water for 20 minutes (not ice)</li>
  <li>Cover with clean non-fluffy material (cling film ideal)</li>
  <li>Do NOT apply butter, toothpaste, or any home remedies</li>
  <li>IV fluids (Parkland formula): 4 mL × weight (kg) × %BSA burned (first 8h: half; next 16h: half)</li>
</ul>

<h4>Shock — First Aid</h4>
<ul>
  <li>Lay patient flat (unless breathing difficulty or head injury)</li>
  <li>Raise legs 30 cm (unless fracture/spinal injury) — improves venous return</li>
  <li>Keep warm; do not give food/drink</li>
  <li>Immediate call for ambulance / referral</li>
</ul>
`,

  anatomy: `
<h3>Basic Anatomy & Physiology</h3>

<h4>Vital Signs — Normal Values</h4>
<table>
  <tr><th>Parameter</th><th>Newborn</th><th>Infant</th><th>Child</th><th>Adult</th></tr>
  <tr><td>Pulse (bpm)</td><td>120–160</td><td>80–140</td><td>70–120</td><td>60–100</td></tr>
  <tr><td>Resp rate (/min)</td><td>40–60</td><td>30–60</td><td>24–40</td><td>12–20</td></tr>
  <tr><td>BP (mmHg)</td><td>60–90/30–60</td><td>75–100/50–70</td><td>80–110/50–80</td><td><120/<80</td></tr>
  <tr><td>Temperature</td><td colspan="3">36.5–37.5°C (all ages)</td><td>36.5–37.5°C</td></tr>
</table>

<h4>Cardiovascular System</h4>
<ul>
  <li>Heart has 4 chambers: RA, LA (atria) + RV, LV (ventricles)</li>
  <li>Systemic circulation: LV → Aorta → Body → Venae cavae → RA</li>
  <li>Pulmonary circulation: RV → Pulmonary artery → Lungs → Pulmonary veins → LA</li>
  <li>Normal cardiac output: 4–8 L/min</li>
  <li>Blood volume: ~5L (70 mL/kg adult)</li>
</ul>

<h4>Respiratory System</h4>
<ul>
  <li>Tidal volume (normal breath): ~500 mL</li>
  <li>Alveoli: site of gas exchange (O2 in, CO2 out)</li>
  <li>Hypoxia: SpO2 <95% (pulse oximetry)</li>
  <li>Respiratory muscles: Diaphragm (primary), intercostals</li>
</ul>

<h4>Blood</h4>
<ul>
  <li>Normal Hb: Men 13–17 g/dL; Women 12–16 g/dL; Children 11–16 g/dL; Newborns 14–20 g/dL</li>
  <li>Anaemia: Hb < 11 g/dL (children <5y, pregnant women) per WHO</li>
  <li>WBC (normal): 4,000–11,000/μL; Platelets: 1.5–4 lakh/μL</li>
  <li>Blood groups: ABO system (A, B, AB, O) + Rh factor (positive/negative). Universal donor: O-negative. Universal recipient: AB-positive.</li>
</ul>

<h4>Female Reproductive System — Key Facts</h4>
<ul>
  <li>Menstrual cycle: 28 days average; Day 1 = first day of bleeding; Ovulation ~Day 14</li>
  <li>Pregnancy: ~40 weeks (280 days) from LMP</li>
  <li>Menarche (first period): 10–16 years; Menopause: 45–55 years</li>
  <li>Fundal height = weeks of gestation (approximately) from 16–36 weeks</li>
</ul>
`,

  environment: `
<h3>Environmental Health & Sanitation</h3>

<h4>Water Quality Standards</h4>
<div class="key-point">⭐ WHO/BIS: Drinking water must have ZERO coliforms per 100 mL. Residual chlorine at point of use: 0.2–0.5 mg/L.</div>
<table>
  <tr><th>Parameter</th><th>Permissible limit (BIS)</th></tr>
  <tr><td>pH</td><td>6.5–8.5</td></tr>
  <tr><td>Turbidity</td><td>1 NTU (ideal) / 5 NTU (max)</td></tr>
  <tr><td>Total hardness</td><td>200 mg/L (ideal) / 600 mg/L (max)</td></tr>
  <tr><td>Fluoride</td><td>1.0 mg/L (ideal) / 1.5 mg/L (max)</td></tr>
  <tr><td>Arsenic</td><td>0.01 mg/L</td></tr>
  <tr><td>Nitrate</td><td>45 mg/L</td></tr>
  <tr><td>E. coli / coliforms</td><td>0 per 100 mL</td></tr>
</table>

<h4>Water-borne Diseases (F-diagram: Faeces → Fingers/Flies/Fluids/Fields/Food → Host)</h4>
<ul>
  <li>Cholera, Typhoid, Hepatitis A & E, Dysentery (Shigella/Amoeba), Giardia, Polio — all faecal-oral route</li>
  <li>Prevention: Hand washing with soap (critical moments: after defaecation, before eating/cooking), safe water, sanitation (WASH)</li>
</ul>

<h4>Biomedical Waste (BMW) Management Rules 2016</h4>
<table>
  <tr><th>Category</th><th>Colour</th><th>Type</th><th>Disposal</th></tr>
  <tr><td>1</td><td>Yellow</td><td>Anatomical, soiled, expired medicines</td><td>Incineration / deep burial</td></tr>
  <tr><td>2</td><td>Red</td><td>Contaminated recyclable waste (IV sets, syringes without needle)</td><td>Autoclaving, then shredding</td></tr>
  <tr><td>3</td><td>White/Translucent</td><td>Sharps (needles, blades, scalpels)</td><td>Hub cutter / needle destroyer, puncture-proof container</td></tr>
  <tr><td>4</td><td>Blue</td><td>Glassware, broken vials</td><td>Autoclave + shredding / encapsulation</td></tr>
</table>
<div class="key-point">⭐ NEVER recap used needles! Use hub-cutter/needle destroyer at point of use to prevent needle-stick injuries.</div>

<h4>Swachh Bharat Mission (SBM)</h4>
<ul>
  <li>Launched: 2 October 2014 (Gandhi Jayanti)</li>
  <li>Goal: Open Defecation Free (ODF) India</li>
  <li>Target: Construction of household toilets (IHHLs) for all rural households</li>
  <li>SBM-G Phase 2: ODF+ (solid/liquid waste management) and ODF++ (complete sanitation)</li>
</ul>
`,

  stats: `
<h3>Health Statistics & Epidemiology</h3>

<h4>Important Mortality Indicators (India — SRS 2020)</h4>
<table>
  <tr><th>Indicator</th><th>Definition</th><th>India 2020</th></tr>
  <tr><td>IMR</td><td>Deaths < 1 year per 1000 live births</td><td>28</td></tr>
  <tr><td>NMR</td><td>Deaths 0–28 days per 1000 live births</td><td>20</td></tr>
  <tr><td>U5MR</td><td>Deaths < 5 years per 1000 live births</td><td>32</td></tr>
  <tr><td>MMR</td><td>Maternal deaths per 1,00,000 live births</td><td>97 (SRS 2018–20)</td></tr>
  <tr><td>CDR</td><td>Total deaths per 1,000 population/year</td><td>~6</td></tr>
  <tr><td>CBR</td><td>Total live births per 1,000 population/year</td><td>~19.5</td></tr>
  <tr><td>TFR</td><td>Average children per woman (lifetime)</td><td>2.0 (NFHS-5)</td></tr>
</table>

<h4>Types of Epidemiological Studies</h4>
<table>
  <tr><th>Study</th><th>Direction</th><th>Measure</th><th>Use</th></tr>
  <tr><td>Cohort</td><td>Exposure → Disease (forward)</td><td>Relative Risk (RR)</td><td>Rare exposure, incidence</td></tr>
  <tr><td>Case-Control</td><td>Disease → Exposure (backward)</td><td>Odds Ratio (OR)</td><td>Rare disease, quick</td></tr>
  <tr><td>Cross-sectional</td><td>Simultaneous</td><td>Prevalence</td><td>Burden of disease</td></tr>
  <tr><td>RCT</td><td>Intervention → Outcome</td><td>NNT, RRR</td><td>Efficacy of treatment</td></tr>
  <tr><td>Ecological</td><td>Population level</td><td>Correlation</td><td>Hypothesis generation</td></tr>
</table>

<h4>Sensitivity vs Specificity</h4>
<div class="key-point">⭐ Sensitivity: "SN OUT" — Sensitive test, Negative result rules OUT disease (good for screening). Specificity: "SP IN" — Specific test, Positive result rules IN disease (good for confirmation/diagnosis).</div>

<h4>Basic Reproductive Number (R0)</h4>
<ul>
  <li>R0 = average number of secondary cases from 1 case in fully susceptible population</li>
  <li>R0 > 1 = epidemic grows; R0 < 1 = epidemic dies out</li>
  <li>Measles: R0 = 12–18 (highest); COVID-19: 2–3; Polio: 5–7; Influenza: 2–3</li>
  <li>Herd immunity threshold = 1 − (1/R0)</li>
</ul>
`,

  drug: `
<h3>Essential Medicines & Drug Administration</h3>

<h4>Routes of Drug Administration</h4>
<table>
  <tr><th>Route</th><th>Abbreviation</th><th>Example Drugs</th></tr>
  <tr><td>Oral (by mouth)</td><td>PO</td><td>ORS, IFA tablets, OCP, Metformin</td></tr>
  <tr><td>Sublingual</td><td>SL</td><td>Misoprostol, GTN (nitroglycerin)</td></tr>
  <tr><td>Intramuscular</td><td>IM</td><td>DPT, Pentavalent, Oxytocin, Magnesium sulphate</td></tr>
  <tr><td>Intravenous</td><td>IV</td><td>IV fluids (NS, RL, Dextrose), IV Oxytocin infusion</td></tr>
  <tr><td>Intradermal</td><td>ID</td><td>BCG vaccine, Mantoux test, fIPV</td></tr>
  <tr><td>Subcutaneous</td><td>SC</td><td>MR vaccine, Insulin, Heparin</td></tr>
  <tr><td>Inhalational</td><td>INH</td><td>Nebulised Salbutamol (asthma), Anaesthetic gases</td></tr>
</table>

<h4>Key Drugs in FMPHW/MMPHW Practice</h4>
<table>
  <tr><th>Drug</th><th>Use</th><th>Key Fact</th></tr>
  <tr><td>ORS</td><td>Dehydration from diarrhoea</td><td>Low-osmolarity ORS (245 mOsm/L)</td></tr>
  <tr><td>Oxytocin 10 IU IM</td><td>AMTSL (PPH prevention)</td><td>Given after baby delivery, before placenta</td></tr>
  <tr><td>Misoprostol 600 mcg SL/oral</td><td>PPH prevention when no oxytocin</td><td>Community-level PPH prevention</td></tr>
  <tr><td>Magnesium Sulphate</td><td>Pre-eclampsia / Eclampsia</td><td>Pritchard regimen; antidote = Calcium gluconate</td></tr>
  <tr><td>Chloroquine</td><td>P. vivax malaria</td><td>25 mg/kg over 3 days + Primaquine for radical cure</td></tr>
  <tr><td>ACT (DHP/AS+SP)</td><td>P. falciparum malaria</td><td>Artemisinin Combination Therapy</td></tr>
  <tr><td>Cotrimoxazole</td><td>Pneumonia (community), UTI, HIV prophylaxis</td><td>TMP+SMX; first-line for non-severe pneumonia</td></tr>
  <tr><td>Zinc + ORS</td><td>Acute diarrhoea in children</td><td>Zinc 20 mg/day for 14 days (>6m) / 10 mg (<6m)</td></tr>
  <tr><td>Vitamin A</td><td>VAD, measles, post-delivery</td><td>Megadose every 6 months in children; 1 dose to mother postpartum</td></tr>
  <tr><td>IFA (Iron-Folic Acid)</td><td>Anaemia prevention/treatment</td><td>180 tablets in pregnancy; WIFS for adolescents</td></tr>
</table>

<div class="key-point">⭐ Drug safety in pregnancy (Category A = safest). Drugs CONTRAINDICATED in pregnancy: Tetracycline (teeth/bone), Warfarin (bleeding), Thalidomide (limb defects), ACE inhibitors (renal), Fluoroquinolones (cartilage), Methotrexate (abortifacient).</div>
`,
};

// ─── STATE ─────────────────────────────────────────────────────────────────────
let progress = JSON.parse(localStorage.getItem('jkssb_progress') || '{}');
// { topicId: { attempted: N, correct: N } }
let streak = parseInt(localStorage.getItem('jkssb_streak') || '0');
let bestStreak = parseInt(localStorage.getItem('jkssb_bestStreak') || '0');

let currentQuiz = { questions: [], idx: 0, score: 0, mode: 'learn', userAnswers: [] };
let lastQuizParams = null;

// ─── SAVE PROGRESS ─────────────────────────────────────────────────────────────
function saveProgress() {
  localStorage.setItem('jkssb_progress', JSON.stringify(progress));
  localStorage.setItem('jkssb_streak', streak);
  localStorage.setItem('jkssb_bestStreak', bestStreak);
}

function recordAnswer(topicId, correct) {
  if (!progress[topicId]) progress[topicId] = { attempted: 0, correct: 0 };
  progress[topicId].attempted++;
  if (correct) {
    progress[topicId].correct++;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
  } else {
    streak = 0;
  }
  saveProgress();
}

function getTotals() {
  let total = 0, correct = 0;
  for (const t of Object.values(progress)) { total += t.attempted; correct += t.correct; }
  return { total, correct };
}

// ─── NAVIGATION ────────────────────────────────────────────────────────────────
function openPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelector(`.nav-btn[data-page="${id}"]`).classList.add('active');

  if (id === 'home') renderHome();
  if (id === 'quiz') resetQuizUI();
  if (id === 'notes') renderNotesSidebar();
  if (id === 'progress') renderProgress();
}

document.querySelectorAll('.nav-btn[data-page]').forEach(btn => {
  btn.addEventListener('click', () => openPage(btn.dataset.page));
});

// ─── HOME ──────────────────────────────────────────────────────────────────────
function renderHome() {
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = TOPICS.map(t => {
    const p = progress[t.id] || { attempted: 0, correct: 0 };
    const qCount = QUESTIONS.filter(q => q.topic === t.id).length;
    return `<div class="topic-card" onclick="startTopicQuiz('${t.id}')">
      <span class="t-icon">${t.icon}</span>
      <div class="t-name">${t.name}</div>
      <div class="t-count">${qCount} questions · ${p.attempted} done</div>
    </div>`;
  }).join('');

  const { total, correct } = getTotals();
  document.getElementById('home-total-q').textContent = total;
  document.getElementById('home-correct').textContent = correct;
  document.getElementById('home-streak').textContent = bestStreak;
  document.getElementById('home-accuracy').textContent = total ? Math.round(correct / total * 100) + '%' : '0%';
}

function startTopicQuiz(topicId) {
  openPage('quiz');
  document.getElementById('quiz-topic-select').value = topicId;
  document.getElementById('start-quiz-btn').click();
}

// ─── QUIZ ──────────────────────────────────────────────────────────────────────
function resetQuizUI() {
  document.getElementById('quiz-topic-selector').classList.remove('hidden');
  document.getElementById('quiz-area').classList.add('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
}

// Populate topic dropdown
(function buildTopicSelect() {
  const sel = document.getElementById('quiz-topic-select');
  TOPICS.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.textContent = t.icon + ' ' + t.name;
    sel.appendChild(opt);
  });
})();

document.getElementById('start-quiz-btn').addEventListener('click', () => {
  const topicId = document.getElementById('quiz-topic-select').value;
  const mode = document.getElementById('quiz-mode-select').value;
  const countVal = document.getElementById('quiz-count-select').value;

  let pool = topicId === 'all' ? [...QUESTIONS] : QUESTIONS.filter(q => q.topic === topicId);
  // Shuffle
  pool = pool.sort(() => Math.random() - 0.5);
  if (countVal !== 'all') pool = pool.slice(0, parseInt(countVal));

  if (pool.length === 0) { alert('No questions found for this topic!'); return; }

  lastQuizParams = { topicId, mode, countVal };
  currentQuiz = { questions: pool, idx: 0, score: 0, mode, userAnswers: [] };

  document.getElementById('quiz-topic-selector').classList.add('hidden');
  document.getElementById('quiz-area').classList.remove('hidden');
  document.getElementById('quiz-result').classList.add('hidden');

  renderQuestion();
});

function renderQuestion() {
  const q = currentQuiz.questions[currentQuiz.idx];
  const total = currentQuiz.questions.length;
  const idx = currentQuiz.idx;

  document.getElementById('q-counter').textContent = `Q ${idx + 1} / ${total}`;
  document.getElementById('q-topic-label').textContent = TOPICS.find(t => t.id === q.topic)?.name || '';
  document.getElementById('q-score-live').textContent = `Score: ${currentQuiz.score}`;
  document.getElementById('q-progress-bar').style.width = (idx / total * 100) + '%';

  document.getElementById('q-text').textContent = q.q;

  const optionsDiv = document.getElementById('q-options');
  optionsDiv.innerHTML = q.opts.map((opt, i) =>
    `<button class="option-btn" data-idx="${i}">${String.fromCharCode(65 + i)}. ${opt}</button>`
  ).join('');

  optionsDiv.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => selectOption(parseInt(btn.dataset.idx)));
  });

  document.getElementById('explanation-box').classList.add('hidden');
  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('btn-finish').style.display = 'none';
}

function selectOption(chosen) {
  const q = currentQuiz.questions[currentQuiz.idx];
  const isCorrect = chosen === q.ans;
  const isLast = currentQuiz.idx === currentQuiz.questions.length - 1;

  // Record
  currentQuiz.userAnswers.push({ chosen, correct: q.ans, isCorrect, q });
  if (isCorrect) currentQuiz.score++;
  recordAnswer(q.topic, isCorrect);

  // Disable all options
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans) btn.classList.add('reveal');
    if (i === chosen && !isCorrect) btn.classList.add('wrong');
    if (i === chosen && isCorrect) btn.classList.add('correct');
  });

  document.getElementById('q-score-live').textContent = `Score: ${currentQuiz.score}`;

  if (currentQuiz.mode === 'learn') {
    // Show explanation immediately
    document.getElementById('expl-text').textContent = q.expl;
    document.getElementById('explanation-box').classList.remove('hidden');
  }

  if (isLast) {
    document.getElementById('btn-finish').style.display = 'inline-block';
  } else {
    document.getElementById('btn-next').style.display = 'inline-block';
  }
}

document.getElementById('btn-next').addEventListener('click', () => {
  currentQuiz.idx++;
  renderQuestion();
});

document.getElementById('btn-finish').addEventListener('click', () => {
  showResult();
});

function showResult() {
  document.getElementById('quiz-area').classList.add('hidden');
  const resultDiv = document.getElementById('quiz-result');
  resultDiv.classList.remove('hidden');

  const score = currentQuiz.score;
  const total = currentQuiz.questions.length;
  const pct = Math.round(score / total * 100);

  let emoji = '😞', title = 'Keep Practising!';
  if (pct >= 90) { emoji = '🏆'; title = 'Excellent! Outstanding!'; }
  else if (pct >= 75) { emoji = '🎉'; title = 'Great Job! Well done!'; }
  else if (pct >= 60) { emoji = '👍'; title = 'Good! Keep going!'; }
  else if (pct >= 40) { emoji = '📚'; title = 'Need More Practice'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-score-text').textContent = `You scored ${score} out of ${total} (${pct}%)`;

  const bar = document.getElementById('result-bar');
  bar.style.width = '0%';
  setTimeout(() => bar.style.width = pct + '%', 100);

  // Review
  const reviewDiv = document.getElementById('result-review');
  reviewDiv.innerHTML = '<h3 style="margin-bottom:.75rem;font-size:1rem;">Review Answers</h3>' +
    currentQuiz.userAnswers.map((a, i) => `
      <div class="review-item ${a.isCorrect ? 'r-correct' : 'r-wrong'}">
        <div class="review-q">Q${i + 1}: ${a.q.q}</div>
        <div class="review-ans">
          ${!a.isCorrect ? `<span class="review-wrong-ans">Your answer: ${String.fromCharCode(65 + a.chosen)}. ${a.q.opts[a.chosen]}</span><br/>` : ''}
          <strong>Correct: ${String.fromCharCode(65 + a.correct)}. ${a.q.opts[a.correct]}</strong>
        </div>
        <div style="font-size:.8rem;color:#7dd3fc;margin-top:.35rem;">💡 ${a.q.expl}</div>
      </div>
    `).join('');
}

function retakeQuiz() {
  if (!lastQuizParams) { openPage('quiz'); return; }
  // Re-run same topic/mode but reshuffle
  document.getElementById('quiz-topic-select').value = lastQuizParams.topicId;
  document.getElementById('quiz-mode-select').value = lastQuizParams.mode;
  document.getElementById('quiz-count-select').value = lastQuizParams.countVal;
  document.getElementById('quiz-topic-selector').classList.remove('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('start-quiz-btn').click();
}

// ─── NOTES ─────────────────────────────────────────────────────────────────────
function renderNotesSidebar() {
  const sidebar = document.getElementById('notes-sidebar');
  sidebar.innerHTML = TOPICS.map(t =>
    `<button onclick="openNote('${t.id}', this)">${t.icon} ${t.name}</button>`
  ).join('');
}

function openNote(topicId, btn) {
  document.querySelectorAll('.notes-sidebar button').forEach(b => b.classList.remove('active-note'));
  btn.classList.add('active-note');
  document.getElementById('notes-content').innerHTML = NOTES[topicId] || '<p>Notes coming soon!</p>';
}

// ─── PROGRESS ──────────────────────────────────────────────────────────────────
function renderProgress() {
  const { total, correct } = getTotals();
  const accuracy = total ? Math.round(correct / total * 100) : 0;

  document.getElementById('prog-total').textContent = total;
  document.getElementById('prog-correct').textContent = correct;
  document.getElementById('prog-accuracy').textContent = accuracy + '%';
  document.getElementById('prog-streak').textContent = bestStreak;

  const list = document.getElementById('topic-progress-list');
  list.innerHTML = TOPICS.map(t => {
    const p = progress[t.id] || { attempted: 0, correct: 0 };
    const pct = p.attempted ? Math.round(p.correct / p.attempted * 100) : 0;
    return `<div class="tp-row">
      <span class="tp-name">${t.icon} ${t.name}</span>
      <div class="tp-bar-wrap"><div class="tp-bar" style="width:${pct}%"></div></div>
      <span class="tp-meta">${p.correct}/${p.attempted} (${pct}%)</span>
    </div>`;
  }).join('');
}

function resetProgress() {
  if (!confirm('Reset ALL progress? This cannot be undone.')) return;
  progress = {}; streak = 0; bestStreak = 0;
  saveProgress();
  renderProgress();
  alert('Progress reset successfully!');
}

// ─── INIT ──────────────────────────────────────────────────────────────────────
renderHome();
