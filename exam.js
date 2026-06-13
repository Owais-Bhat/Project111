/* JKSSB FMPHW/MMPHW 2025 — Complete Exam Prep */

const TOPICS = [
  { id: 'mch',        name: 'Maternal & Child Health',         icon: '🤱' },
  { id: 'fp',         name: 'Family Planning',                  icon: '👨‍👩‍👧' },
  { id: 'immunize',   name: 'Immunization (UIP)',               icon: '💉' },
  { id: 'nutrition',  name: 'Nutrition',                        icon: '🥗' },
  { id: 'diseases',   name: 'Communicable Diseases',            icon: '🦠' },
  { id: 'ncd',        name: 'Non-Communicable Diseases',        icon: '🫀' },
  { id: 'programs',   name: 'National Health Programs',         icon: '🏥' },
  { id: 'firstaid',   name: 'First Aid & Emergency',            icon: '🩹' },
  { id: 'anatomy',    name: 'Basic Anatomy & Physiology',       icon: '🧬' },
  { id: 'environment',name: 'Environmental Health',             icon: '🌿' },
  { id: 'stats',      name: 'Health Statistics & Epidemiology', icon: '📈' },
  { id: 'drug',       name: 'Essential Medicines & Drug',       icon: '💊' },
];

const QUESTIONS = [
  /* ═══ MCH ═══ */
  { topic:'mch', q:'What is the recommended minimum number of ANC contacts as per WHO 2016 guidelines?', opts:['4 contacts','6 contacts','8 contacts','10 contacts'], ans:2, expl:'WHO 2016 recommends minimum 8 ANC contacts: at <12 weeks, 20, 26, 30, 34, 36, 38, and 40 weeks. India\'s RMNCH+A recommends at least 4 ANCs, but WHO updated to 8 for better outcomes.' },
  { topic:'mch', q:'First ANC visit should ideally be completed within how many weeks of pregnancy?', opts:['First 4 weeks','First 12 weeks','First 16 weeks','First 20 weeks'], ans:1, expl:'First ANC should be within the first trimester (by 12 weeks). This allows early detection of risk factors, registration under JSSK, and timely start of IFA supplementation.' },
  { topic:'mch', q:'IFA tablets in pregnancy primarily prevent:', opts:['Night blindness','Anaemia and neural tube defects','Rickets','Scurvy'], ans:1, expl:'Iron prevents anaemia (most common deficiency in pregnancy). Folic acid prevents Neural Tube Defects (NTDs) like spina bifida and anencephaly.' },
  { topic:'mch', q:'Which injection protects the newborn from neonatal tetanus?', opts:['BCG','TT / Td (Tetanus Toxoid)','OPV','Hepatitis B'], ans:1, expl:'TT/Td is given to pregnant women. Antibodies pass to baby protecting against neonatal tetanus. India now uses Td (Tetanus-Diphtheria). Two doses: TT1 at first contact, TT2 four weeks later.' },
  { topic:'mch', q:'Low Birth Weight (LBW) is defined as birth weight less than:', opts:['2000 g','2500 g','3000 g','1500 g'], ans:1, expl:'LBW = birth weight <2500 g regardless of gestational age. VLBW = <1500 g; ELBW = <1000 g. LBW babies need Kangaroo Mother Care (KMC).' },
  { topic:'mch', q:'Kangaroo Mother Care (KMC) involves:', opts:['Bathing baby immediately after birth','Skin-to-skin contact between mother and LBW/preterm baby','Giving special milk formula','Placing baby in incubator'], ans:1, expl:'KMC = placing LBW/preterm infant in skin-to-skin contact on mother\'s chest. Benefits: maintains temperature, promotes breastfeeding, reduces infections and mortality.' },
  { topic:'mch', q:'Exclusive breastfeeding is recommended for:', opts:['First 3 months','First 6 months','First 9 months','First 12 months'], ans:1, expl:'WHO/UNICEF recommend Exclusive Breastfeeding (EBF) for first 6 months. No water, other liquids or food — only breast milk. Complementary feeding starts at 6 months, breastfeeding continues to 2 years.' },
  { topic:'mch', q:'The first milk after delivery rich in antibodies is called:', opts:['Foremilk','Hindmilk','Colostrum','Transitional milk'], ans:2, expl:'Colostrum = thick yellowish milk in first 2–3 days. Rich in IgA, white blood cells, proteins. Acts as baby\'s first vaccine. Should NEVER be discarded. Breastfeeding should start within 1 hour of birth.' },
  { topic:'mch', q:'APGAR score is assessed at (minutes after birth):', opts:['1 and 5 minutes','2 and 10 minutes','5 and 15 minutes','Immediately at birth'], ans:0, expl:'APGAR at 1 min and 5 min. Parameters: Appearance, Pulse, Grimace, Activity, Respiration. Score 7–10=normal; 4–6=moderate depression; 0–3=severe. Maximum score is 10.' },
  { topic:'mch', q:'PPH (Postpartum Haemorrhage) after vaginal delivery is defined as blood loss exceeding:', opts:['300 mL','500 mL','1000 mL','200 mL'], ans:1, expl:'PPH = blood loss ≥500 mL within 24 hours of vaginal delivery (≥1000 mL after C-section). Most common cause: Uterine Atony (80%). Prevention: Oxytocin 10 IU IM (AMTSL).' },
  { topic:'mch', q:'Vitamin A supplementation to children at 9 months is:', opts:['1,00,000 IU','2,00,000 IU','50,000 IU','3,00,000 IU'], ans:0, expl:'VAS schedule: 1st dose 1,00,000 IU at 9 months with MR vaccine. Then 2,00,000 IU every 6 months from 18 months up to 5 years. VAD causes night blindness and xerophthalmia.' },
  { topic:'mch', q:'Neonatal period is defined as:', opts:['First 7 days of life','First 28 days of life','First 3 months of life','First year of life'], ans:1, expl:'Neonatal period = first 28 days (0–28 days). Early neonatal = 0–7 days; Late neonatal = 7–28 days. Highest mortality risk: sepsis, birth asphyxia, prematurity.' },
  { topic:'mch', q:'JSSK (Janani Shishu Suraksha Karyakram) was launched in:', opts:['2005','2007','2011','2013'], ans:2, expl:'JSSK launched 1 June 2011. Entitles ALL pregnant women at government hospitals to FREE: delivery, drugs, diagnostics, diet (3 days), blood, transport, referral. Sick newborns up to 30 days.' },
  { topic:'mch', q:'The recommended time to initiate breastfeeding after birth is:', opts:['Within 30 minutes','Within 1 hour','Within 6 hours','Within 24 hours'], ans:1, expl:'WHO/UNICEF recommend breastfeeding initiation within 1 hour of birth (golden hour). Early initiation ensures baby gets colostrum and stimulates milk production. It also reduces risk of hypothermia.' },
  { topic:'mch', q:'Danger sign in a pregnant woman requiring immediate referral:', opts:['Mild ankle oedema','Severe headache and blurred vision','Mild nausea in first trimester','Occasional backache'], ans:1, expl:'Severe headache + blurred vision = signs of pre-eclampsia/eclampsia. Other danger signs: vaginal bleeding, fits, reduced fetal movements, high fever, severe abdominal pain. Require immediate referral to FRU/hospital.' },
  { topic:'mch', q:'The PMMVY scheme provides maternity benefit of:', opts:['₹1,000','₹3,000','₹5,000','₹10,000'], ans:2, expl:'PMMVY (Pradhan Mantri Matru Vandana Yojana) provides ₹5,000 in 3 instalments for the first live birth to working women to compensate wage loss and improve health practices.' },
  { topic:'mch', q:'Under RMNCH+A, "A" stands for:', opts:['Anaemia','Adult health','Adolescent health','Ayush'], ans:2, expl:'RMNCH+A = Reproductive, Maternal, Newborn, Child Health, and Adolescent Health. The "A" was added in 2013 to integrate adolescent health under RKSK (Rashtriya Kishor Swasthya Karyakram).' },
  { topic:'mch', q:'PM Surakshit Matritva Abhiyan (PMSMA) provides ANC on which fixed day every month?', opts:['1st','5th','9th','15th'], ans:2, expl:'PMSMA: Every 9th of the month, specialist/medical officer provides free comprehensive ANC to high-risk pregnant women at PHCs/CHCs/DH. Focuses on identifying and managing complicated pregnancies.' },

  /* ═══ FAMILY PLANNING ═══ */
  { topic:'fp', q:'Most effective PERMANENT female family planning method:', opts:['IUCD','Tubectomy','OCP','Condom'], ans:1, expl:'Tubectomy (bilateral tubal ligation) = most effective permanent FP for women. Failure rate <0.5/100 women-years. Order of effectiveness: Tubectomy > Vasectomy > IUCD > Injectables > OCPs > Condoms.' },
  { topic:'fp', q:'Cu-T 380A IUCD is effective for up to:', opts:['3 years','5 years','10 years','15 years'], ans:2, expl:'Cu-T 380A effective for 10 years. "380A" = 380 sq mm copper surface area. Copper ions have spermicidal action and prevent fertilisation. Most widely used IUCD in India.' },
  { topic:'fp', q:'Emergency contraceptive pill should be taken within:', opts:['12 hours','24 hours','72 hours','120 hours'], ans:2, expl:'ECP (levonorgestrel 1.5 mg) most effective within 72 hours. Efficacy: 95% at 24h, 85% at 48h, 58% at 72h. Works mainly by delaying/preventing ovulation.' },
  { topic:'fp', q:'DMPA (Depo-Provera) injectable contraceptive is given every:', opts:['1 month','2 months','3 months','6 months'], ans:2, expl:'DMPA 150 mg deep IM injection every 3 months (12–13 weeks). India introduced it under Antara Programme. Progestin-only, safe for breastfeeding mothers. Main side effect: irregular periods.' },
  { topic:'fp', q:'The Pearl Index measures:', opts:['Side effects of contraceptives','Number of pregnancies per 100 woman-years','Effectiveness of ANC','Number of sterilisations'], ans:1, expl:'Pearl Index = pregnancies per 100 woman-years of use. LOWER Pearl Index = MORE effective method. Tubectomy: 0.5; IUCD: 0.5–1; OCPs: 1–2; Condoms: 3–15 (typical use).' },
  { topic:'fp', q:'Which is the ONLY contraceptive method that also protects against STIs/HIV?', opts:['OCP','IUCD','Male condom','Tubectomy'], ans:2, expl:'Male condom is the only contraceptive that provides dual protection — against pregnancy AND STIs including HIV. Promotes consistent and correct use. Female condom also provides STI protection.' },
  { topic:'fp', q:'PPIUCD stands for:', opts:['Post-Partum Intra-Uterine Contraceptive Device','Pre-Partum Intra-Uterine Contraceptive Device','Post-Primary IUCD','Permanent Protective IUCD'], ans:0, expl:'PPIUCD = Post-Partum IUCD inserted within 10 minutes after delivery of placenta (immediate) or within 48 hours of delivery. Also done at 6 weeks postpartum (interval IUCD). Highly effective.' },
  { topic:'fp', q:'LAM (Lactational Amenorrhoea Method) works when ALL three conditions are met:', opts:['Baby <12 months, mother breastfeeding, periods resumed','Baby <6 months, exclusive breastfeeding, amenorrhoea','Baby <6 months, partial breastfeeding, amenorrhoea','Baby <9 months, EBF, any menstrual status'], ans:1, expl:'LAM conditions: (1) Baby <6 months old, (2) Exclusive breastfeeding (day and night, no supplements), (3) No menstruation (amenorrhoea). All 3 must be present. Failure rate: 0.5–2% if conditions met.' },
  { topic:'fp', q:'Chhaya (Centchroman/Ormeloxifene) is taken:', opts:['Daily','Weekly','Monthly','Every 3 months'], ans:1, expl:'Chhaya (Centchroman/Saheli) is a non-hormonal oral contraceptive pill taken weekly. It is a SERM (Selective Estrogen Receptor Modulator). Twice weekly for first 3 months, then weekly. No serious hormonal side effects.' },
  { topic:'fp', q:'Mission Parivar Vikas targets districts with TFR above:', opts:['2.0','2.1','3.0','4.0'], ans:2, expl:'Mission Parivar Vikas (2016) targets 146 high-fertility districts across 7 states (UP, MP, Rajasthan, Bihar, Jharkhand, Chhattisgarh, Assam) with TFR ≥3. Goal: achieve replacement-level fertility (TFR=2.1).' },

  /* ═══ IMMUNIZATION ═══ */
  { topic:'immunize', q:'BCG vaccine is given by which route?', opts:['Intramuscular (IM)','Subcutaneous (SC)','Intradermal (ID)','Oral'], ans:2, expl:'BCG given by INTRADERMAL injection on left upper arm, 0.1 mL. Correct technique produces 7mm bleb. Protects against TB meningitis and miliary TB in children.' },
  { topic:'immunize', q:'DPT vaccine protects against:', opts:['Diphtheria, Plague, Tetanus','Diphtheria, Pertussis, Tetanus','Dengue, Polio, Typhoid','Diphtheria, Pneumonia, Typhoid'], ans:1, expl:'DPT = Diphtheria + Pertussis (whooping cough) + Tetanus. Given IM. India now uses Pentavalent (DPT + Hib + HepB) at 6, 10, 14 weeks.' },
  { topic:'immunize', q:'OPV is given by which route?', opts:['Injection','Oral (2 drops in mouth)','Nasal drops','Skin patch'], ans:1, expl:'OPV (Oral Polio Vaccine/Sabin vaccine) given as 2 drops orally. India uses bOPV (bivalent types 1&3). India declared POLIO-FREE on 27 March 2014.' },
  { topic:'immunize', q:'Pentavalent vaccine protects against how many diseases?', opts:['3','4','5','6'], ans:2, expl:'Pentavalent = 5-in-1: DPT (Diphtheria + Pertussis + Tetanus) + Hepatitis B + Hib (Haemophilus influenzae type b). Given IM at 6, 10, 14 weeks.' },
  { topic:'immunize', q:'MR vaccine in India protects against:', opts:['Mumps and Rubella','Measles and Rubella','Malaria and Rabies','Meningitis and Rabies'], ans:1, expl:'MR vaccine = Measles + Rubella. Replaced standalone measles vaccine. Given at 9–12 months and 16–24 months. Rubella prevention prevents Congenital Rubella Syndrome (CRS).' },
  { topic:'immunize', q:'Cold chain temperature for storing most vaccines (except OPV) is:', opts:['-20°C to -25°C','+2°C to +8°C','+10°C to +15°C','Room temperature'], ans:1, expl:'+2°C to +8°C = storage temperature for most vaccines in ILR. OPV stored at -15°C to -25°C (deep freezer). Never freeze DPT, HepB, Pentavalent (becomes ineffective — "freeze-sensitive").' },
  { topic:'immunize', q:'VVM (Vaccine Vial Monitor) indicates vaccine is usable when:', opts:['Inner square is DARKER than outer circle','Inner square is LIGHTER than outer circle','Colour change is complete','Monitor turns red'], ans:1, expl:'VVM rule: usable when inner square LIGHTER than outer circle. Discard when inner square is SAME colour or DARKER. Detects cumulative heat exposure — not freeze damage.' },
  { topic:'immunize', q:'Which vaccine is given at birth in India?', opts:['DPT only','BCG + OPV-0 + HepB-0','BCG only','Pentavalent + OPV'], ans:1, expl:'At birth: BCG (intradermal, left arm) + OPV-0 (oral, 2 drops) + Hepatitis B-0 (IM, right thigh). These should be given before discharge from hospital/birth facility.' },
  { topic:'immunize', q:'DPT booster (B1) is given at what age?', opts:['9–12 months','12–16 months','16–24 months','5–6 years'], ans:2, expl:'DPT Booster 1 (B1) = 16–24 months along with OPV booster and MR-2. DPT Booster 2 = 5–6 years. Td (Tetanus-Diphtheria) at 10 years and 16 years.' },
  { topic:'immunize', q:'Rotavirus vaccine was added to UIP in India in:', opts:['2010','2013','2016','2019'], ans:2, expl:'Rotavirus vaccine added to UIP in 2016 in phased rollout. Given orally at 6, 10, 14 weeks. Protects against rotavirus diarrhoea — a major cause of under-5 diarrhoeal deaths.' },
  { topic:'immunize', q:'IPV (Injectable Polio Vaccine) was added to India\'s UIP in:', opts:['2010','2015','2018','2020'], ans:1, expl:'IPV added to UIP in 2015. Given as 0.1 mL fractional dose intradermally (fIPV). Two doses at 6 weeks and 14 weeks. Added to prevent vaccine-derived poliovirus (VDPV) and maintain polio-free status.' },
  { topic:'immunize', q:'Which disease was eradicated globally by vaccination?', opts:['Polio','Measles','Smallpox','Tuberculosis'], ans:2, expl:'Smallpox was the first and only human disease eradicated globally through vaccination. WHO certified global eradication in 1980. The last natural case was in 1977 (Somalia). Achieved through Edward Jenner\'s cowpox vaccine concept.' },

  /* ═══ NUTRITION ═══ */
  { topic:'nutrition', q:'Vitamin A deficiency causes:', opts:['Scurvy','Xerophthalmia and night blindness','Rickets','Beriberi'], ans:1, expl:'VAD → Xerophthalmia: Night blindness (XN) → Conjunctival xerosis (X1A) → Bitot\'s spots (X1B) → Corneal xerosis (X2) → Corneal ulceration (X3A/B) → Keratomalacia. Bitot\'s spots = foamy triangular deposits on conjunctiva.' },
  { topic:'nutrition', q:'Kwashiorkor is characterised by:', opts:['Severe wasting without oedema','Oedema, moon face, flaky paint skin','Only weight loss','High fever and rash'], ans:1, expl:'Kwashiorkor = mainly protein deficiency. Features: Oedema (pitting), moon face, pot belly, flaky paint dermatosis (skin), psychomotor changes, flag sign (hair), fatty liver. Marasmus = calorie-protein deficiency → wasting, NO oedema.' },
  { topic:'nutrition', q:'SAM (Severe Acute Malnutrition) MUAC cutoff in children 6–59 months:', opts:['<11.5 cm','<12.5 cm','<13.5 cm','<14.5 cm'], ans:0, expl:'MUAC: SAM = <11.5 cm (red); MAM = 11.5–12.5 cm (yellow); Normal = ≥12.5 cm (green). SAM children treated at NRCs (Nutrition Rehabilitation Centres) with F-75/F-100 or RUTF.' },
  { topic:'nutrition', q:'Iodine deficiency causes:', opts:['Anaemia','Goitre and cretinism','Night blindness','Rickets'], ans:1, expl:'IDD = Iodine Deficiency Disorders: Goitre, hypothyroidism, cretinism (mental retardation + deaf-mutism + stunting). Prevention: Universal Salt Iodisation (USI) at 30 ppm production level.' },
  { topic:'nutrition', q:'Pellagra (3Ds disease) is caused by deficiency of:', opts:['Vitamin A','Vitamin B1 (Thiamine)','Vitamin B3 (Niacin)','Vitamin C'], ans:2, expl:'Pellagra = Vitamin B3 (Niacin) deficiency. Classic 3Ds: Dermatitis (photosensitive, Casal\'s necklace rash), Diarrhoea, Dementia. Common in populations eating mainly maize. Treatment: Nicotinamide.' },
  { topic:'nutrition', q:'Rickets in children is caused by deficiency of:', opts:['Vitamin A','Vitamin B12','Vitamin C','Vitamin D'], ans:3, expl:'Vitamin D deficiency → Rickets (children) / Osteomalacia (adults). Features: Bowing of legs, rachitic rosary (costochondral beading), Harrison\'s groove, delayed fontanelle closure, dental delay.' },
  { topic:'nutrition', q:'Gomez classification of malnutrition is based on:', opts:['Height for age','Weight for height (WHZ)','Weight for age vs Harvard standard','MUAC'], ans:2, expl:'Gomez classification uses Weight for Age (% of Harvard standard): Grade I = 75–90% (mild); Grade II = 60–74% (moderate); Grade III = <60% (severe). WHO now uses Z-score based classifications.' },
  { topic:'nutrition', q:'ICDS (Integrated Child Development Services) provides how many services through Anganwadi?', opts:['3','4','6','8'], ans:2, expl:'ICDS 6 services: (1) Supplementary nutrition, (2) Immunisation, (3) Health check-up, (4) Referral services, (5) Pre-school non-formal education, (6) Health and nutrition education. The first 3 are called "nutrition-related" services.' },
  { topic:'nutrition', q:'Scurvy is caused by deficiency of:', opts:['Vitamin D','Vitamin A','Vitamin C (Ascorbic acid)','Iron'], ans:2, expl:'Vitamin C deficiency → Scurvy. Features: Bleeding gums, perifollicular haemorrhages (corkscrew hairs), poor wound healing, scorbutic rosary, "woody" leg oedema. Treatment: Vitamin C 100–300 mg/day orally.' },
  { topic:'nutrition', q:'Anaemia Mukt Bharat strategy targets how many beneficiary groups?', opts:['3','4','6','8'], ans:2, expl:'Anaemia Mukt Bharat (2018) = 6×6×6 strategy: 6 beneficiary groups (children 6–59m, 5–9y, adolescent girls 10–19y, adolescent boys 10–19y, pregnant women, non-pregnant women 15–49y), 6 interventions, 6 institutional mechanisms.' },

  /* ═══ COMMUNICABLE DISEASES ═══ */
  { topic:'diseases', q:'Malaria is transmitted by:', opts:['Male Culex mosquito','Female Anopheles mosquito','Aedes aegypti mosquito','Sandfly'], ans:1, expl:'Malaria transmitted by BITE of Female Anopheles mosquito (only females need blood for egg development). P. vivax most common in India; P. falciparum most dangerous. Treatment: CQ for vivax; ACT for falciparum.' },
  { topic:'diseases', q:'Dengue is transmitted by:', opts:['Female Anopheles mosquito','Culex mosquito','Aedes aegypti mosquito (daytime biting)','Tsetse fly'], ans:2, expl:'Aedes aegypti = dengue vector. Breeds in clean stagnant water (flower pots, coolers, tyres). DAYTIME biting. 4 serotypes (DENV 1–4). Severe dengue = DHF/DSS. No specific antiviral — supportive care.' },
  { topic:'diseases', q:'Cholera is caused by:', opts:['Salmonella typhi','Vibrio cholerae','Shigella dysenteriae','E. coli'], ans:1, expl:'Cholera = Vibrio cholerae O1 (El Tor/classical biotype) or O139. Transmission: faecal-oral via contaminated water. Classic: "rice water" stools. Treatment cornerstone = ORS. Prevention: WASH.' },
  { topic:'diseases', q:'HIV is NOT transmitted by:', opts:['Unprotected sex','Sharing IV needles','Mother to child (MTCT)','Mosquito bites'], ans:3, expl:'HIV NOT spread by: mosquito bites, casual contact, handshakes, hugging, sharing food, coughing. Modes of transmission: Sexual (most common), Blood (transfusion/needles), Vertical (MTCT).' },
  { topic:'diseases', q:'Leprosy (Hansen\'s disease) primarily affects:', opts:['Lungs','Skin and peripheral nerves','Liver','Kidneys'], ans:1, expl:'Leprosy caused by Mycobacterium leprae. Affects skin (hypopigmented patches, loss of sensation) and peripheral nerves (thickened — ulnar, radial, peroneal). Treatment: MDT (Rifampicin + Dapsone ± Clofazimine).' },
  { topic:'diseases', q:'The causative agent of Typhoid is:', opts:['Salmonella typhi','Vibrio cholerae','E. coli','Klebsiella'], ans:0, expl:'Typhoid (enteric fever) caused by Salmonella typhi. Incubation 7–14 days. Step-ladder fever, relative bradycardia. Widal test (not gold standard); Blood culture = gold standard. Prevention: Vi typhoid vaccine, safe water.' },
  { topic:'diseases', q:'DOTS in TB treatment stands for:', opts:['Direct Observed Treatment Short-course','Drug Oriented TB Scheme','Daily Oral Treatment Schedule','Direct Oral Therapy Standard'], ans:0, expl:'DOTS = Directly Observed Treatment Short-course. Treatment is taken under direct observation of a health worker to ensure adherence. Key component of NTEP. Treatment for drug-sensitive TB: 2HRZE + 4HR (total 6 months).' },
  { topic:'diseases', q:'Kala-azar (Visceral Leishmaniasis) is transmitted by:', opts:['Anopheles mosquito','Aedes mosquito','Sandfly (Phlebotomus)','Culex mosquito'], ans:2, expl:'Kala-azar transmitted by female Phlebotomus sandfly. Caused by Leishmania donovani. Endemic: Bihar, Jharkhand, UP, West Bengal. Features: prolonged fever, splenomegaly, weight loss. Drug: Miltefosine, Amphotericin B.' },
  { topic:'diseases', q:'Japanese Encephalitis (JE) is transmitted by:', opts:['Aedes mosquito','Culex tritaeniorhynchus mosquito','Anopheles mosquito','Sandfly'], ans:1, expl:'JE transmitted by Culex tritaeniorhynchus mosquito. Breeds in paddy fields. Pigs and wading birds are reservoir hosts. Causes viral encephalitis. JE vaccine given in endemic areas in India at 9–12 months.' },
  { topic:'diseases', q:'Which is the window period for HIV testing?', opts:['1–2 weeks','1–3 months (4th generation tests detect earlier — 2–4 weeks)','6 months','1 year'], ans:1, expl:'Window period = time between HIV infection and positive test. 4th generation tests (ELISA detecting p24 antigen + antibody): window period 2–4 weeks. 3rd generation antibody tests: 3 months. Testing recommended at 3 months after exposure.' },

  /* ═══ NCD ═══ */
  { topic:'ncd', q:'Hypertension is defined as BP ≥ (WHO/JNC-8):', opts:['120/80 mmHg','130/80 mmHg','140/90 mmHg','160/100 mmHg'], ans:2, expl:'WHO/JNC-8 define hypertension as BP ≥140/90 mmHg. Stages: Stage 1: 140–159/90–99; Stage 2: ≥160/≥100. ACC/AHA 2017 uses ≥130/80 but India follows WHO cutoffs.' },
  { topic:'ncd', q:'Fasting plasma glucose ≥ __ mg/dL on two occasions diagnoses Diabetes Mellitus:', opts:['100 mg/dL','110 mg/dL','126 mg/dL','200 mg/dL'], ans:2, expl:'WHO diabetes criteria: FPG ≥126 mg/dL (7.0 mmol/L) on two occasions. OR Random ≥200 with symptoms. OR HbA1c ≥6.5%. OR 2-h OGTT ≥200 mg/dL. Pre-diabetes (IFG): FPG 100–125 mg/dL.' },
  { topic:'ncd', q:'NPCDCS programme targets:', opts:['Communicable diseases only','Cancer, Diabetes, CVD, and Stroke','Mental health only','Nutritional disorders'], ans:1, expl:'NPCDCS = National Programme for Prevention and Control of Cancer, Diabetes, Cardiovascular diseases, and Stroke. NCD clinics at district hospitals/CHCs. Screening at HWCs (Health and Wellness Centres).' },
  { topic:'ncd', q:'Which test is used for cervical cancer screening at HWCs?', opts:['Pap smear','VIA (Visual Inspection with Acetic Acid)','Colposcopy','Biopsy'], ans:1, expl:'VIA (Visual Inspection with Acetic Acid) is primary screening method at HWCs/PHCs. Simple, low-cost, no lab needed. Aceto-white lesions = positive (suspect CIN/cancer). Followed by VILI, colposcopy, biopsy.' },

  /* ═══ NATIONAL PROGRAMS ═══ */
  { topic:'programs', q:'NRHM was launched in:', opts:['1999','2005','2013','2017'], ans:1, expl:'NRHM launched 12 April 2005. Expanded to NHM in 2013 (added NUHM — National Urban Health Mission). Key components: ASHA, RKS, Village Health & Nutrition Days (VHNDs), untied funds.' },
  { topic:'programs', q:'ASHA stands for:', opts:['Accredited Social Health Authority','Accredited Social Health Activist','Approved Social Health Assistant','Affiliated Social Health Agent'], ans:1, expl:'ASHA = Accredited Social Health Activist. One ASHA per 1000 population (or per village in hilly/tribal areas). Link between community and health system. Incentive-based payments.' },
  { topic:'programs', q:'Population norm for a Sub-Centre in plains is:', opts:['3,000','5,000','10,000','30,000'], ans:1, expl:'Sub-Centre: 5,000 (plains) / 3,000 (hilly/tribal). PHC: 30,000 / 20,000. CHC: 1,20,000 / 80,000. Each SC has 1 ANM + 1 MHW. IPHS 2022 revised SC norms to 3,000/1,500.' },
  { topic:'programs', q:'CHC (Community Health Centre) serves a population of:', opts:['30,000 / 20,000','50,000 / 30,000','1,20,000 / 80,000','5,00,000'], ans:2, expl:'CHC: 1,20,000 (plains) / 80,000 (hilly). Has 4 specialists (surgeon, physician, gynaecologist, paediatrician) + 30 beds. Designated FRU (First Referral Unit) for obstetric/newborn emergencies.' },
  { topic:'programs', q:'Janani Suraksha Yojana (JSY) provides cash incentive for:', opts:['Vaccination','Institutional delivery','Family planning','Nutrition'], ans:1, expl:'JSY (under NHM): Cash incentive for institutional delivery. BPL women in rural areas: ₹1,400. Urban: ₹1,000. ASHA gets ₹600 rural / ₹400 urban for facilitating the delivery. Aims to reduce MMR/IMR.' },
  { topic:'programs', q:'India was declared POLIO-FREE by WHO on:', opts:['12 January 2011','27 March 2014','15 August 2015','26 January 2013'], ans:1, expl:'India declared Polio-Free on 27 March 2014 (South-East Asia Region). Last wild poliovirus case in India: 13 January 2011 in Howrah, West Bengal. Achieved through Pulse Polio Immunisation (PPI) campaigns.' },
  { topic:'programs', q:'NIKSHAY portal is used for:', opts:['Malaria case tracking','TB patient tracking under NTEP','HIV patient management','Cancer screening'], ans:1, expl:'NIKSHAY = web-based TB case-based tracking system under NTEP. Every TB case must be notified on NIKSHAY (mandatory notification since 2012). Also manages Nikshay Poshan Yojana (₹500/month to TB patients).' },
  { topic:'programs', q:'RKSK (Rashtriya Kishor Swasthya Karyakram) targets adolescents aged:', opts:['5–14 years','10–19 years','15–25 years','12–18 years'], ans:1, expl:'RKSK targets 10–19 years adolescents. 6 components: Nutrition, Sexual & reproductive health, Non-communicable diseases, Mental health, Injuries & violence, Substance misuse. Delivery through AHD (Adolescent Health Days) and AFHC (Adolescent Friendly Health Clinics).' },
  { topic:'programs', q:'Ayushman Bharat PM-JAY provides health coverage of:', opts:['₹1 lakh/family/year','₹3 lakh/family/year','₹5 lakh/family/year','₹10 lakh/family/year'], ans:2, expl:'PM-JAY (Pradhan Mantri Jan Arogya Yojana) provides ₹5 lakh/family/year for secondary and tertiary hospitalisation. Covers bottom 40% families (10.74 crore families = ~50 crore beneficiaries). Cashless treatment at empanelled hospitals.' },
  { topic:'programs', q:'Health and Wellness Centres (HWCs) are upgraded from:', opts:['CHCs and PHCs only','Sub-Centres and PHCs','District Hospitals','All of the above'], ans:1, expl:'HWCs are upgraded Sub-Centres (SCs) and Primary Health Centres (PHCs) under Ayushman Bharat. They provide comprehensive primary healthcare including: NCD screening, MCH, mental health, oral health, and 12 types of essential services.' },
  { topic:'programs', q:'Village Health Sanitation and Nutrition Committee (VHSNC) meets every:', opts:['Daily','Weekly','Monthly','Quarterly'], ans:2, expl:'VHSNC meets monthly. Chaired by Ward member/Pradhan. Members include ASHA, ANM, AWW, school teacher. Functions: village health planning, monitoring, and overseeing Village Health & Nutrition Day (VHND).' },

  /* ═══ FIRST AID ═══ */
  { topic:'firstaid', q:'Correct compression-to-ventilation ratio in adult CPR (single rescuer) is:', opts:['15:2','30:2','15:1','5:1'], ans:1, expl:'AHA/ERC guidelines: Adult CPR = 30:2. Compress at 100–120/min, depth 5–6 cm, allow full recoil. For infants: 30:2 (single rescuer) or 15:2 (two-rescuer). Hands-only CPR if untrained.' },
  { topic:'firstaid', q:'The first step in managing an unconscious patient:', opts:['Give oxygen','Check breathing','Ensure scene safety and check responsiveness','Start CPR'], ans:2, expl:'DRSABC: Danger (scene safety) → Response (check responsiveness) → Shout for help → Airway (open) → Breathing (check ≤10 sec) → CPR. ALWAYS check safety first.' },
  { topic:'firstaid', q:'For conscious choking adult, first-line intervention is:', opts:['Finger sweep','5 back blows + 5 abdominal thrusts (Heimlich)','Chest compressions','Oxygen'], ans:1, expl:'Severe choking (cannot speak/cough/breathe): 5 firm back blows between shoulder blades, then 5 abdominal thrusts (Heimlich). Alternate until clear or unconscious. Pregnant/obese: chest thrusts.' },
  { topic:'firstaid', q:'For controlling bleeding wound, first step is:', opts:['Apply tourniquet','Apply DIRECT FIRM PRESSURE with clean cloth','Elevate limb','Give aspirin'], ans:1, expl:'Direct firm pressure for 10–15 minutes. Then elevate (if no fracture). Tourniquet only for life-threatening limb haemorrhage when pressure fails. Aspirin is CONTRAINDICATED (thins blood).' },
  { topic:'firstaid', q:'ORS for child with diarrhoea: WHO-ORS sachet is dissolved in:', opts:['200 mL water','500 mL water','1 litre water','2 litres water'], ans:2, expl:'WHO-ORS sachet dissolved in 1 litre clean water. Contains: 2.6g NaCl, 1.5g KCl, 2.9g trisodium citrate, 13.5g glucose. Osmolarity 245 mOsm/L (low-osmolarity ORS). Homemade: 6 tsp sugar + ½ tsp salt in 1 litre.' },
  { topic:'firstaid', q:'In a snakebite victim, correct first aid is:', opts:['Suck out venom with mouth','Apply tourniquet tightly','Immobilise limb, keep below heart level, rush to hospital','Cut and drain the wound'], ans:2, expl:'Snakebite first aid: Immobilise the bitten limb (splint like fracture), keep BELOW heart level to slow venom spread, remove tight clothing/jewellery, calm patient, rush to hospital for antivenom. Do NOT cut, suck, or apply tourniquet.' },
  { topic:'firstaid', q:'Correct position for a pregnant woman in shock:', opts:['Flat supine','Left lateral tilt (15–30°)','Right lateral tilt','Sitting upright'], ans:1, expl:'Pregnant women in shock: left lateral tilt (15–30°) to prevent aorto-caval compression by gravid uterus (supine hypotension syndrome). Also correct position: left lateral for seizures in pregnancy (eclampsia).' },

  /* ═══ ANATOMY ═══ */
  { topic:'anatomy', q:'Normal resting pulse rate in a healthy adult:', opts:['40–60 bpm','60–100 bpm','100–120 bpm','120–160 bpm'], ans:1, expl:'Normal adult resting pulse = 60–100 bpm. Bradycardia: <60 bpm; Tachycardia: >100 bpm. Newborn: 120–160 bpm; Infants: 80–140 bpm; Children 2–10y: 70–120 bpm.' },
  { topic:'anatomy', q:'Normal adult respiratory rate:', opts:['8–10 /min','12–20 /min','25–30 /min','35–40 /min'], ans:1, expl:'Normal adult RR = 12–20/min. Tachypnoea >20/min. Newborn: 40–60/min; Infants: 30–60/min. WHO IMCI: fast breathing in infant ≥60/min is danger sign for pneumonia.' },
  { topic:'anatomy', q:'Normal oral body temperature in adult:', opts:['35.0–36.0°C','36.5–37.5°C','37.5–38.5°C','38–39°C'], ans:1, expl:'Normal oral temperature = 36.5–37.5°C. Fever = >38°C (>100.4°F). Axillary = 0.5°C LOWER; Rectal = 0.5°C HIGHER than oral. Lowest at 4–6 am; Highest at 4–8 pm (diurnal variation).' },
  { topic:'anatomy', q:'The largest organ of the human body is:', opts:['Liver','Skin','Lung','Brain'], ans:1, expl:'Skin = largest organ (~1.5–2 sq m, ~3.5–10 kg). Functions: protection, temperature regulation, sensation, Vitamin D synthesis. Liver = largest INTERNAL organ. Layers: Epidermis, Dermis, Hypodermis.' },
  { topic:'anatomy', q:'Blood pressure is measured using:', opts:['Thermometer','Sphygmomanometer','Stethoscope','Spirometer'], ans:1, expl:'Sphygmomanometer (cuff + manometer) measures BP. Korotkoff sounds via stethoscope: K1=systolic (first sound), K5=diastolic (disappears). Normal adult BP <120/<80 mmHg.' },
  { topic:'anatomy', q:'The human heart has how many chambers?', opts:['2','3','4','6'], ans:2, expl:'4 chambers: 2 atria (RA+LA) + 2 ventricles (RV+LV). Right side: receives deoxygenated blood → lungs. Left side: receives oxygenated blood → body. LV has thickest wall (pumps to systemic circulation).' },
  { topic:'anatomy', q:'Haemoglobin level indicating anaemia in a pregnant woman (WHO):', opts:['<13 g/dL','<12 g/dL','<11 g/dL','<10 g/dL'], ans:2, expl:'WHO: Anaemia in pregnancy = Hb <11 g/dL (1st and 3rd trimester) or <10.5 g/dL (2nd trimester). In non-pregnant women: <12 g/dL; Children <5y: <11 g/dL; Men: <13 g/dL.' },
  { topic:'anatomy', q:'Normal blood pressure in adults:', opts:['<100/<60 mmHg','<120/<80 mmHg','<130/<90 mmHg','<140/<90 mmHg'], ans:1, expl:'Normal BP <120/<80 mmHg. Elevated: 120–129/<80. Stage 1 HTN: 130–139/80–89. Stage 2 HTN: ≥140/≥90. Hypotension: systolic <90 mmHg.' },
  { topic:'anatomy', q:'The universal blood donor group is:', opts:['A positive','B negative','O negative','AB positive'], ans:2, expl:'O negative = Universal DONOR (can donate to all blood groups). AB positive = Universal RECIPIENT (can receive all groups). In emergencies, O-negative packed red cells are given when blood group unknown.' },

  /* ═══ ENVIRONMENT ═══ */
  { topic:'environment', q:'WHO standard for coliforms in drinking water:', opts:['10/100 mL','5/100 mL','Zero (0) per 100 mL','1/100 mL'], ans:2, expl:'WHO: ZERO coliforms per 100 mL in drinking water. Coliforms indicate faecal contamination. Residual chlorine at point of use: 0.2–0.5 mg/L. Chlorination is primary water disinfection method.' },
  { topic:'environment', q:'Biomedical waste: YELLOW bag contains:', opts:['Sharps (needles, blades)','Anatomical waste, soiled items, expired medicines','Glass/broken vials','Recyclable plastics without blood'], ans:1, expl:'BMW (2016 Rules) colour coding: Yellow = anatomical waste, soiled/contaminated waste, expired medicines → Incineration/deep burial. Red = contaminated recyclable (IV sets, syringes without needle). White = sharps. Blue = glass/vials.' },
  { topic:'environment', q:'BMW: How should used needles/sharps be handled?', opts:['Recap and throw in regular bin','Use hub-cutter/needle destroyer at point of use','Bend the needle with fingers','Soak in bleach solution'], ans:1, expl:'NEVER recap used needles. Use hub-cutter or needle destroyer at point of use immediately after use. Prevents needle-stick injuries to health workers. Sharps go in white puncture-proof container.' },
  { topic:'environment', q:'Swachh Bharat Mission was launched on:', opts:['2 October 2014','15 August 2014','26 January 2015','2 January 2015'], ans:0, expl:'SBM launched 2 October 2014 (Gandhi Jayanti, Mahatma Gandhi\'s 145th birth anniversary). Goal: Open Defecation Free (ODF) India. SBM Phase 2: ODF+ and ODF++ (solid/liquid waste management).' },
  { topic:'environment', q:'Fluorosis is caused by excess __ in drinking water:', opts:['Arsenic','Nitrate','Fluoride','Lead'], ans:2, expl:'Excess fluoride (>1.5 mg/L) in drinking water → Fluorosis: Dental fluorosis (mottled teeth), Skeletal fluorosis (bone deformities). Endemic in Rajasthan, Gujarat, Andhra Pradesh, UP. Defluoridation methods: Nalgonda technique, activated alumina.' },

  /* ═══ STATS ═══ */
  { topic:'stats', q:'Infant Mortality Rate (IMR) is:', opts:['Deaths <5y per 1000 live births','Deaths <1y per 1000 live births','Deaths <28 days per 1000 live births','Total deaths per 1000 population'], ans:1, expl:'IMR = deaths <1 year per 1000 live births in same year. India IMR (SRS 2020): 28. NMR (neonatal) = 20. U5MR = 32. MMR = 97 (per 1,00,000 live births, SRS 2018–20).' },
  { topic:'stats', q:'Herd immunity threshold for measles (approx.):', opts:['50%','70%','90–95%','99%'], ans:2, expl:'Measles R0 = 12–18, so herd immunity threshold = 92–95%. When this % is immune, chains of transmission break and unvaccinated people are also protected. This is why high MR vaccine coverage is critical.' },
  { topic:'stats', q:'A cohort study measures:', opts:['Odds Ratio (OR)','Relative Risk (RR)','Prevalence','Positive predictive value'], ans:1, expl:'Cohort study follows exposed vs unexposed groups forward in time → measures Relative Risk (RR). Case-control study → Odds Ratio (OR). Cross-sectional → Prevalence. RCT → NNT, RRR.' },
  { topic:'stats', q:'Sensitivity of a test measures:', opts:['True negative rate','True positive rate (correctly identifies those WITH disease)','Proportion of positives that are true positives','Overall accuracy'], ans:1, expl:'Sensitivity = TP/(TP+FN) = ability to detect DISEASE. High sensitivity → good screening test (SnNOut). Specificity = TN/(TN+FP) = correctly identifies those WITHOUT disease (SpPIn = Specific, Positive result rules IN disease).' },
  { topic:'stats', q:'India\'s Total Fertility Rate (TFR) as per NFHS-5 (2019–21) is approximately:', opts:['1.5','2.0','2.5','3.0'], ans:1, expl:'India\'s TFR = 2.0 (NFHS-5). This is BELOW replacement level (2.1). Shows significant decline from NFHS-4 (2.2). States with highest TFR: Bihar (3.0), Meghalaya (2.9). Lowest: Sikkim, Goa (<1.5).' },

  /* ═══ DRUGS ═══ */
  { topic:'drug', q:'Route of administration for BCG vaccine:', opts:['Intramuscular','Subcutaneous','Intradermal','Oral'], ans:2, expl:'BCG = Intradermal (ID), 0.1 mL, left upper arm. Correct technique produces a raised bleb (wheal). A scar forms in 2–6 weeks indicating successful vaccination.' },
  { topic:'drug', q:'Oxytocin in obstetrics is used for:', opts:['Pain relief','Induction of labour + prevention of PPH (AMTSL)','Prevention of eclampsia','Antibiotic for sepsis'], ans:1, expl:'Oxytocin: Induction/augmentation of labour (IV drip), AMTSL (10 IU IM after baby delivery to prevent PPH). Magnesium sulphate = drug for eclampsia. Misoprostol = alternative when oxytocin unavailable.' },
  { topic:'drug', q:'Magnesium sulphate antidote is:', opts:['Atropine','Calcium gluconate','Naloxone','Adrenaline'], ans:1, expl:'Calcium gluconate = antidote for Magnesium sulphate toxicity. Signs of MgSO4 toxicity: loss of patellar reflexes (first sign), respiratory depression, cardiac arrest. Dose: 10 mL of 10% calcium gluconate IV slowly.' },
  { topic:'drug', q:'Chloroquine is first-line treatment for:', opts:['P. falciparum malaria','P. vivax malaria','Dengue fever','Typhoid'], ans:1, expl:'Chloroquine (CQ) = first-line for P. vivax in India (25 mg/kg over 3 days) + Primaquine for radical cure. For P. falciparum: ACT (Artesunate + SP) + Primaquine. DO NOT use CQ for P. falciparum (resistance).' },
  { topic:'drug', q:'Zinc is given alongside ORS in childhood diarrhoea for how many days?', opts:['5 days','7 days','14 days','21 days'], ans:2, expl:'Zinc 20 mg/day for 14 days (children >6 months) or 10 mg/day (children <6 months). Reduces duration and severity of diarrhoeal episodes and prevents recurrence for 2–3 months.' },
  { topic:'drug', q:'Which drug is CONTRAINDICATED in pregnancy due to risk of teeth discolouration in foetus?', opts:['Amoxicillin','Tetracycline','Metronidazole','Paracetamol'], ans:1, expl:'Tetracycline is contraindicated in pregnancy and children <8 years. It deposits in developing teeth and bones causing yellow-brown discolouration and enamel hypoplasia. Safe alternatives: Amoxicillin, Erythromycin.' },

  /* ═══ MCH — extra ═══ */
  { topic:'mch', q:'Maternal Mortality Ratio (MMR) is expressed per:', opts:['1,000 live births','10,000 live births','1,00,000 live births','1,000 total births'], ans:2, expl:'MMR = maternal deaths per 1,00,000 live births in the same period. India MMR (SRS 2018–20) = 97. SDG target: <70 by 2030. India target: <100 by 2020 (achieved).' },
  { topic:'mch', q:'Which of the following is NOT a direct cause of maternal death?', opts:['Eclampsia','PPH','Anaemia (indirect cause)','Sepsis'], ans:2, expl:'Direct causes: PPH, eclampsia/pre-eclampsia, sepsis, obstructed labour, unsafe abortion. Indirect causes: anaemia, heart disease, hepatitis, malaria. Anaemia is the most common INDIRECT cause of MMR in India.' },
  { topic:'mch', q:'Eclampsia is defined as:', opts:['High BP only in pregnancy','Pre-eclampsia + convulsions','Oedema + proteinuria','BP >130/90 in pregnancy'], ans:1, expl:'Eclampsia = pre-eclampsia (HTN + proteinuria after 20 weeks) PLUS grand mal convulsions not explained by other cause. Life-threatening emergency. Mx: MgSO4 (Pritchard/Zuspan regimen), antihypertensives, urgent delivery.' },
  { topic:'mch', q:'The "golden hour" of the newborn refers to:', opts:['First hour of ANC','First hour after birth for essential newborn care','Hour 0–1 of labour','First 60 min of resuscitation'], ans:1, expl:'Golden hour = first 60 minutes after birth. Key actions: immediate drying, warmth, delayed cord clamping (1–3 min), breastfeeding initiation, skin-to-skin contact. Prevents hypothermia, promotes bonding and lactation.' },
  { topic:'mch', q:'Under JSSK, free diet is provided to the mother for how many days after normal delivery?', opts:['1 day','3 days','7 days','Until discharge'], ans:1, expl:'JSSK entitles free diet for 3 days after normal delivery and 7 days after Caesarean section at government health facilities. Also includes free drugs, diagnostics, blood transfusion, and referral transport.' },
  { topic:'mch', q:'Preterm birth is defined as delivery before:', opts:['34 weeks gestation','37 weeks gestation','36 weeks gestation','38 weeks gestation'], ans:1, expl:'Preterm = birth before 37 completed weeks. Extremely preterm: <28 weeks; Very preterm: 28–32 weeks; Moderate/late preterm: 32–37 weeks. Most common cause of neonatal mortality globally.' },
  { topic:'mch', q:'IFA supplementation during pregnancy is given for a minimum of:', opts:['90 days','120 days','180 days','270 days'], ans:2, expl:'Minimum 180 IFA tablets (1 tablet/day) during pregnancy. Iron 100 mg + Folic acid 0.5 mg. Should start as early as possible, ideally from first ANC. Prevents iron deficiency anaemia and reduces risk of LBW.' },
  { topic:'mch', q:'The most common presentation of foetus at term is:', opts:['Breech','Transverse lie','Vertex (head down)','Face presentation'], ans:2, expl:'Vertex (cephalic/head-down) presentation occurs in ~96% of term pregnancies. Occiput-anterior position is most common. Breech (3–4%) and transverse (<1%) are malpresentations requiring obstetric management.' },
  { topic:'mch', q:'Congenital Rubella Syndrome (CRS) classically causes:', opts:['Cleft palate only','Cataract, deafness, heart defect (PDA/VSD)','Microcephaly only','Spina bifida'], ans:1, expl:'CRS triad: Cataract (eye), sensorineural Deafness (ear), Congenital Heart Defect (PDA, VSD, pulmonary stenosis). Prevention: MR vaccine. Risk highest if rubella infection in 1st trimester (1–12 weeks).' },
  { topic:'mch', q:'Which vitamin supplement is given to the mother within 6 weeks of delivery?', opts:['Vitamin D 60,000 IU','Vitamin A 2,00,000 IU','Vitamin C 500 mg','Vitamin B12 1000 mcg'], ans:1, expl:'Vitamin A 2,00,000 IU given to the mother within 6 weeks of delivery to replenish stores lost in milk production and reduce maternal morbidity. NOT given in pregnancy (teratogenic in high doses).' },
  { topic:'mch', q:'ASHA is eligible for incentive under JSY when she facilitates:', opts:['Any delivery','Institutional delivery of a BPL woman','Home delivery only','Caesarean section only'], ans:1, expl:'ASHA gets ₹600 (rural) / ₹400 (urban) per institutional delivery she facilitates. She must escort the woman, stay during delivery, and assist in registration. BPL/SC/ST women are primary beneficiaries.' },
  { topic:'mch', q:'Active Management of Third Stage of Labour (AMTSL) includes:', opts:['Waiting for placenta to deliver spontaneously','Oxytocin 10 IU IM + controlled cord traction + uterine massage','Only uterine massage','Only controlled cord traction'], ans:1, expl:'AMTSL: (1) Oxytocin 10 IU IM within 1 min of baby delivery, (2) Controlled cord traction (Brandt-Andrews), (3) Uterine massage after placenta delivery. Reduces PPH by 60%. WHO 2012 simplified to oxytocin alone as minimum.' },
  { topic:'mch', q:'Which test detects neural tube defects prenatally?', opts:['Amniocentesis for AFP','Glucose tolerance test','TORCH screen','Thyroid function test'], ans:0, expl:'Alpha-fetoprotein (AFP) in amniotic fluid (amniocentesis) or maternal serum screening. Elevated AFP = open NTD (spina bifida, anencephaly). NTDs prevented by folic acid 400 mcg/day periconceptionally.' },
  { topic:'mch', q:'Symphysio-Fundal Height (SFH) at 28 weeks of pregnancy is approximately:', opts:['20 cm','24 cm','28 cm','32 cm'], ans:2, expl:'SFH in cm ≈ gestational age in weeks (after 20 weeks). At 28 weeks = ~28 cm. Deviation >2 cm above or below expected = needs investigation (IUGR, polyhydramnios, multiple pregnancy). Measured with tape from pubic symphysis.' },
  { topic:'mch', q:'Intrapartum care: foetal heart rate is normally:', opts:['80–100 bpm','100–120 bpm','110–160 bpm','160–200 bpm'], ans:2, expl:'Normal FHR = 110–160 bpm. Bradycardia <110 bpm or tachycardia >160 bpm = foetal distress. Checked every 30 min in active first stage, every 5 min in second stage. Auscultated with Pinard fetoscope or Doppler.' },

  /* ═══ FAMILY PLANNING — extra ═══ */
  { topic:'fp', q:'No-scalpel vasectomy (NSV) differs from conventional vasectomy in that it:', opts:['Uses general anaesthesia','Uses a special puncture technique with no skin incision','Takes longer','Has higher failure rate'], ans:1, expl:'NSV uses a sharp curved clamp to puncture the scrotal skin (no knife/scalpel), grasp vas deferens and occlude it. Benefits: fewer complications (haematoma, infection), faster procedure, quicker recovery. WHO promotes NSV.' },
  { topic:'fp', q:'Interval IUCD insertion is done:', opts:['Immediately after delivery','Within 10 min of placenta delivery','≥6 weeks after delivery (postpartum) or anytime in non-pregnant woman','Only at next menstruation'], ans:2, expl:'Interval IUCD = inserted ≥6 weeks postpartum (after uterus involuted) or at any time in non-pregnant women (if sure not pregnant). PPIUCD = within 10 min of placenta. PAIUCD = within 12 days post-abortion.' },
  { topic:'fp', q:'Failure rate of male condom in "perfect use" is approximately:', opts:['0%','2%','3%','15%'], ans:1, expl:'Male condom perfect use failure rate = 2% (2 pregnancies per 100 women-years). Typical use = 13–15%. Consistent correct use (CCU) is key. Only method that also prevents STI/HIV transmission.' },
  { topic:'fp', q:'OCP (combined oral contraceptive pill) is CONTRAINDICATED in:', opts:['Nulliparous women','Women with history of DVT/stroke/breast cancer','Women >18 years','Non-smokers'], ans:1, expl:'COC absolute contraindications (WHO MEC Cat 4): personal history of DVT/PE, stroke, ischaemic heart disease, breast cancer, liver tumours, migraine with aura, smokers >35 years, uncontrolled hypertension, breastfeeding <6 weeks.' },
  { topic:'fp', q:'Sterilisation (tubectomy) should ideally be performed:', opts:['During menstruation','Immediately postpartum (within 7 days) or interval (after 6 weeks)','Only with husband\'s consent','Only above age 35'], ans:1, expl:'Postpartum tubectomy: within 48 hours (minilaparotomy — easy access to tubes, uterus enlarged) or interval: 6 weeks postpartum or later (laparoscopic/minilaparotomy). Written informed consent of the woman is mandatory (not husband).' },
  { topic:'fp', q:'The contraceptive method with the LOWEST Pearl Index (most effective reversible method) is:', opts:['OCP','Male condom','Copper IUCD','DMPA injectable'], ans:2, expl:'Copper IUCD (Cu-T 380A) has Pearl Index 0.5–0.8 — most effective reversible method. Vasectomy/tubectomy (permanent) have even lower rates. DMPA 0.3; OCP 0.1–1; Condom 2–15.' },
  { topic:'fp', q:'Under the Antara Programme, DMPA injectable is provided at:', opts:['Pharmacies only','Sub-centres and above (given by ANM/MHW)','Private hospitals only','Anganwadi centres only'], ans:1, expl:'Antara Programme (2017) provides DMPA (150 mg/3 months) through public health system at sub-centres, PHCs, CHCs, district hospitals. Administered by trained ANM/MHW as IM injection. Home visits also planned.' },
  { topic:'fp', q:'What is the "basket of contraceptives" approach in India?', opts:['Providing only permanent methods','Offering a wide range of spacing and limiting methods to meet diverse client needs','Using only oral pills','Government procurement of condoms only'], ans:1, expl:'Basket of contraceptives = offering all contraceptive options: condom, OCP, ECP, IUCD, DMPA (Antara), Chhaya (centchroman), PPIUCD, tubectomy, vasectomy. Allows clients to choose based on preference, health status, parity.' },
  { topic:'fp', q:'India\'s Total Fertility Rate (TFR) target to achieve replacement-level fertility is:', opts:['1.5','2.0','2.1','2.5'], ans:2, expl:'Replacement-level fertility = TFR of 2.1 (slightly above 2.0 to account for child mortality). India achieved TFR = 2.0 (NFHS-5), which is BELOW replacement level. SDG target = 2.1 by 2025.' },

  /* ═══ IMMUNIZATION — extra ═══ */
  { topic:'immunize', q:'The vaccine that uses the "fractional dose" (0.1 mL intradermal) in India\'s UIP is:', opts:['OPV','BCG','fIPV (fractional IPV)','PCV'], ans:2, expl:'fIPV = fractional-dose Inactivated Polio Vaccine given as 0.1 mL intradermal (not 0.5 mL IM). Given at 6 and 14 weeks under UIP since 2015-16. Cost-effective and immunogenic. BCG is also ID but full 0.1 mL dose.' },
  { topic:'immunize', q:'Hepatitis B vaccine at birth (HepB-0) should be given within:', opts:['1 hour','6 hours','24 hours','48 hours'], ans:2, expl:'HepB-0 (birth dose) should be given within 24 hours of birth, ideally within 12 hours. Critical to prevent perinatal (mother-to-child) transmission. Efficacy >95% if given within 24 hours + HBIg if mother HBsAg positive.' },
  { topic:'immunize', q:'Which vaccines are "freeze-sensitive" and should NEVER be frozen?', opts:['BCG and OPV','OPV only','DPT, HepB, Pentavalent, TT/Td','BCG only'], ans:2, expl:'Freeze-sensitive vaccines (must be stored at +2°C to +8°C, NEVER below 0°C): DPT, Hepatitis B, Pentavalent, TT/Td, fIPV. Freezing destroys these vaccines. OPV and varicella need to be FROZEN (-15° to -25°C).' },
  { topic:'immunize', q:'Shake test is used to check for:', opts:['Potency of oral vaccines','Freeze damage in freeze-sensitive vaccines','Heat damage in OPV','Bacterial contamination'], ans:1, expl:'Shake test: if a vial has been frozen and thawed, particles settle SLOWLY (clear supernatant = frozen-damaged). Undamaged vials remain uniformly turbid after shaking. Used for DPT, HepB, TT, Pentavalent.' },
  { topic:'immunize', q:'Adverse Event Following Immunisation (AEFI) with BCG vaccine includes:', opts:['Anaphylaxis (common)','Keloid scar at injection site','High fever >40°C','Encephalitis'], ans:1, expl:'Normal AEFI for BCG: redness, papule at 2 weeks → ulcer → scar by 6–12 weeks. Keloid formation (especially in dark-skinned people). Rare severe: BCG osteomyelitis, disseminated BCG (in immunocompromised). Anaphylaxis is rare.' },
  { topic:'immunize', q:'Polio eradication strategy includes all EXCEPT:', opts:['Pulse Polio Immunisation (PPI)','Routine immunisation','Acute Flaccid Paralysis (AFP) surveillance','Treating all AFP cases with vaccines'], ans:3, expl:'Polio eradication components: (1) High routine OPV/IPV coverage, (2) Supplementary Immunisation Activities (SIA/PPI), (3) AFP surveillance + stool specimen collection, (4) Mop-up campaigns. There is no treatment — only prevention.' },
  { topic:'immunize', q:'JE (Japanese Encephalitis) vaccine in India is given in:', opts:['All states at 9 months','Only endemic districts at 9–12 months + 16–24 months','All children at birth','Only during outbreak'], ans:1, expl:'JE vaccine (SA 14-14-2 live attenuated) given in JE-endemic districts only: at 9–12 months and 16–24 months. Endemic states: UP, Bihar, West Bengal, Assam, Karnataka, Tamil Nadu, Kerala, Goa, Maharashtra.' },
  { topic:'immunize', q:'PCV (Pneumococcal Conjugate Vaccine) protects against:', opts:['Pertussis','Streptococcus pneumoniae (pneumococcal disease)','Rotavirus','Meningococcus'], ans:1, expl:'PCV (13-valent) protects against Streptococcus pneumoniae — causes pneumonia (leading killer of children <5), meningitis, septicaemia. Given at 6, 10, 14 weeks + booster at 9 months under UIP in India (phased rollout from 2017).' },
  { topic:'immunize', q:'The "cold chain" in immunisation is maintained to:', opts:['Keep vaccines frozen always','Maintain optimal temperature from manufacture to administration to preserve vaccine potency','Store vaccines at room temperature','Prevent AEFIs'], ans:1, expl:'Cold chain = system of refrigerated storage and transport to maintain vaccines at correct temperatures from manufacturer to point of use. Breaks in cold chain destroy vaccines. Key: ILR (+2°C–+8°C), deep freezer (-15° to -25°C for OPV), vaccine carriers for outreach.' },
  { topic:'immunize', q:'Supplementary Immunisation Activity (SIA) in India targets:', opts:['Only unvaccinated children','All children in target age group regardless of vaccination status','Only adults','Only high-risk groups'], ans:1, expl:'SIA (like Pulse Polio, MR campaigns) targets ALL children in the age group (0–5 years for polio; 9 months–15 years for MR campaign) regardless of prior vaccination status. Aim: achieve very high coverage to interrupt transmission.' },
  { topic:'immunize', q:'MNT (Maternal and Neonatal Tetanus) elimination criteria is:', opts:['Zero NNT cases','<1 NNT case per 1000 live births in every district','<1 NNT case per 100 live births nationally','100% TT coverage'], ans:1, expl:'MNT elimination = <1 case of NNT per 1000 live births at district level. India achieved MNT elimination in 2015. Prevention: 2 doses TT/Td to all pregnant women not previously immunised, clean delivery, cord care.' },

  /* ═══ NUTRITION — extra ═══ */
  { topic:'nutrition', q:'RUTF (Ready-to-Use Therapeutic Food) used in SAM treatment is:', opts:['A liquid formula','A peanut-based paste with milk, sugar, oil, vitamins/minerals (F-100 equivalent)','A vitamin tablet','Normal home food'], ans:1, expl:'RUTF (Plumpy\'nut) = peanut paste + skimmed milk powder + sugar + vegetable oil + vitamins/minerals. Energy 500 kcal/100g. Used for community management of SAM (CMAM). No water added — reduces contamination risk.' },
  { topic:'nutrition', q:'F-75 and F-100 therapeutic milk formulas are used for SAM children:', opts:['F-75 first (stabilisation phase), then F-100 (rehabilitation phase)','F-100 first, then F-75','F-75 only','F-100 throughout'], ans:0, expl:'SAM inpatient management (NRC): Phase 1 (Stabilisation): F-75 (75 kcal/100 mL) — treats hypoglycaemia, hypothermia, infections slowly to avoid refeeding syndrome. Phase 2 (Rehabilitation): F-100 (100 kcal/100 mL) for rapid weight gain.' },
  { topic:'nutrition', q:'Mid-upper arm circumference (MUAC) is measured on which arm?', opts:['Dominant arm (usually right)','Left arm','Either arm','Both arms averaged'], ans:1, expl:'MUAC measured on LEFT upper arm at the midpoint between acromion (shoulder) and olecranon (elbow tip). Measured with non-stretchable MUAC tape (red-yellow-green). Used for children 6–59 months and pregnant women.' },
  { topic:'nutrition', q:'Beriberi is caused by deficiency of:', opts:['Vitamin B2 (Riboflavin)','Vitamin B1 (Thiamine)','Vitamin B6 (Pyridoxine)','Vitamin B12'], ans:1, expl:'Beriberi = Vitamin B1 (Thiamine) deficiency. Wet beriberi = cardiovascular (oedema, cardiomegaly, heart failure). Dry beriberi = peripheral neuropathy. Wernicke\'s encephalopathy = thiamine deficiency in alcoholics.' },
  { topic:'nutrition', q:'Night blindness is the earliest sign of deficiency of:', opts:['Vitamin C','Vitamin D','Vitamin A','Iron'], ans:2, expl:'Night blindness (nyctalopia) = inability to see in dim light = earliest/mildest stage of VAD (Xerophthalmia grade XN). Bitot\'s spots (X1B) = foamy white deposits on conjunctiva = pathognomonic of VAD. Keratomalacia = most severe.' },
  { topic:'nutrition', q:'Iodised salt for consumption should contain iodine at:', opts:['5 ppm','15 ppm at production level','30 ppm at production (≥15 ppm at retail)','50 ppm'], ans:2, expl:'FSSAI (Food Safety & Standards Authority of India) mandates iodine in salt: ≥30 ppm at production level and ≥15 ppm at retail/consumer level (accounting for losses in transit/cooking). Universal Salt Iodisation (USI) policy.' },
  { topic:'nutrition', q:'POSHAN Abhiyaan (National Nutrition Mission) was launched in:', opts:['2013','2016','2018','2020'], ans:2, expl:'POSHAN Abhiyaan launched 8 March 2018 (International Women\'s Day) by PM Modi. Target: reduce stunting, undernutrition, anaemia (children/women) by 2%/year; low birth weight by 2%/year. Uses technology, community mobilisation (Poshan Maah = September).' },
  { topic:'nutrition', q:'The "first 1000 days" concept refers to:', opts:['First 1000 days of life only','Period from conception to the child\'s 2nd birthday','First 1000 days of school','Pregnancy only'], ans:1, expl:'First 1000 days = 270 days of pregnancy + 730 days (2 years) after birth = total ~1000 days. Critical window for brain development, organ formation, immune system, nutrition programming. Interventions here have lifelong impact.' },
  { topic:'nutrition', q:'Vitamin D is synthesised in the body through:', opts:['Dietary intake only','Sunlight (UV-B) exposure on skin converting 7-dehydrocholesterol to Vitamin D3','Exercise','Iron absorption'], ans:1, expl:'Vitamin D3 (cholecalciferol) synthesised in skin by UVB radiation (290–315 nm) converting 7-dehydrocholesterol → pre-Vit D3 → Vit D3. Liver converts to 25-OH-Vit D (storage form); kidneys to 1,25-(OH)2-Vit D (active calcitriol).' },
  { topic:'nutrition', q:'WHO IMCI danger signs for a sick child under 5 include all EXCEPT:', opts:['Cannot drink or breastfeed','Convulsions','Mild diarrhoea for 1 day','Unconscious or lethargic'], ans:2, expl:'IMCI General Danger Signs (classify as EMERGENCY): (1) Cannot drink/breastfeed, (2) Vomits everything, (3) Convulsions now or recently, (4) Lethargy/unconsciousness. Mild diarrhoea for 1 day is NOT a general danger sign (no dehydration).' },
  { topic:'nutrition', q:'The recommended protein intake for a pregnant woman (additional) per day is:', opts:['5 g/day','23 g/day','50 g/day','100 g/day'], ans:1, expl:'ICMR 2020: Additional protein in pregnancy = +23 g/day (2nd trimester: +14g; 3rd trimester: +22.5g; rounded to 23g). Total recommended = 65–75 g/day. Lactating mothers: +18 g/day additional protein.' },

  /* ═══ COMMUNICABLE DISEASES — extra ═══ */
  { topic:'diseases', q:'The causative organism of leprosy (Hansen\'s disease) is:', opts:['Mycobacterium tuberculosis','Mycobacterium leprae','Treponema pallidum','Neisseria gonorrhoeae'], ans:1, expl:'Mycobacterium leprae — acid-fast bacillus, obligate intracellular parasite (grows only in cool body areas: skin, peripheral nerves, anterior eye, upper respiratory tract). Cannot be cultured in vitro. Grows in armadillo footpads.' },
  { topic:'diseases', q:'MDT (Multi-Drug Therapy) for paucibacillary (PB) leprosy consists of:', opts:['Rifampicin + Dapsone for 6 months','Rifampicin + Dapsone + Clofazimine for 12 months','Dapsone alone for 2 years','Rifampicin alone for 1 year'], ans:0, expl:'PB-MDT (1–5 skin patches, no bacilli): Rifampicin 600 mg monthly (supervised) + Dapsone 100 mg daily × 6 months. MB-MDT (>5 patches, bacilli positive): Rifampicin + Dapsone + Clofazimine × 12 months.' },
  { topic:'diseases', q:'The blood film examination for malaria should be taken at:', opts:['Any time','During fever spike (best time)','Only in the morning','Only at night (for W. bancrofti)'], ans:1, expl:'Malaria blood smear: best taken DURING fever spike when parasitaemia is highest. Thick film (more sensitive, detects low parasitaemia); Thin film (species identification). RDT (rapid diagnostic test) available at community level.' },
  { topic:'diseases', q:'ACT (Artemisinin Combination Therapy) is used to treat:', opts:['P. vivax malaria','P. falciparum malaria','Dengue','Kala-azar'], ans:1, expl:'ACT = Artesunate + Sulfadoxine-Pyrimethamine (AS+SP) for uncomplicated P. falciparum. Artemether-Lumefantrine (AL) also used. For severe P. falciparum: IV Artesunate. Primaquine 0.75 mg/kg given on Day 2 to kill gametocytes.' },
  { topic:'diseases', q:'Widal test is used to diagnose:', opts:['Malaria','Typhoid fever (Salmonella typhi)','Dengue','Cholera'], ans:1, expl:'Widal test = agglutination test detecting antibodies against Salmonella typhi O and H antigens. Significant titre: O ≥1:80 or H ≥1:160 (4-fold rise in paired sera). NOT gold standard (false positives common). Gold standard = blood culture.' },
  { topic:'diseases', q:'Incubation period of cholera is:', opts:['1–14 days (usually few hours to 5 days)','14–21 days','1–3 months','6 months'], ans:0, expl:'Cholera incubation = few hours to 5 days (WHO: 1–14 days). Short incubation means outbreaks spread rapidly. V. cholerae produces cholera toxin → massive watery diarrhoea. Case-fatality rate: 25–50% untreated; <1% with ORS.' },
  { topic:'diseases', q:'HIV testing protocol in India uses:', opts:['ELISA alone','3 rapid tests with different antigens (RTK1, RTK2, RTK3)','Western blot only','PCR alone'], ans:1, expl:'India NACO HIV testing: 3 rapid tests on 3 different antigens/principles. If all 3 positive = HIV positive. If 2 positive and 1 negative = inconclusive (repeat in 14 days). ICTC (Integrated Counselling & Testing Centre) provides free testing.' },
  { topic:'diseases', q:'Filariasis (elephantiasis) microfilariae in blood show nocturnal periodicity, meaning peak microfilaraemia is:', opts:['During daytime (6 am–6 pm)','At night (10 pm–4 am)','Throughout the day','Only during fever'], ans:1, expl:'W. bancrofti microfilariae show nocturnal periodicity — peak in peripheral blood at 10 pm–4 am (coinciding with peak biting activity of Culex mosquito). Blood sample for microfilaria MUST be collected at night. Diagnosis: thick blood film, ICT.' },
  { topic:'diseases', q:'DOTS for TB means the patient takes medicines:', opts:['At home alone','Under direct observation of a health worker or treatment supporter','Via injection only','In hospital only'], ans:1, expl:'DOTS = Direct Observation: every dose (or at least first dose of intensive phase) taken under direct observation of provider/treatment supporter. Prevents drug resistance from irregular treatment. 99% of doses observed in intensive phase in NTEP.' },
  { topic:'diseases', q:'Drug Resistant TB (MDR-TB) is defined as resistance to:', opts:['Isoniazid alone','Rifampicin alone','Both Rifampicin AND Isoniazid (two most important first-line drugs)','All first-line drugs'], ans:2, expl:'MDR-TB = resistance to at least Rifampicin + Isoniazid simultaneously. XDR-TB = MDR + resistance to any fluoroquinolone + at least one injectable second-line drug. Pre-XDR = MDR + fluoroquinolone resistance. Diagnosed by CBNAAT/LPA.' },

  /* ═══ NCD — extra ═══ */
  { topic:'ncd', q:'BMI (Body Mass Index) is calculated as:', opts:['Weight (kg) / Height (m)','Weight (kg) / Height² (m²)','Height (m) / Weight (kg)','Weight (kg) × Height (m)'], ans:1, expl:'BMI = Weight (kg) / Height² (m²). Classification (WHO Asian): Underweight <18.5; Normal 18.5–22.9; Overweight 23–24.9; Obese Class I 25–29.9; Obese Class II ≥30. India uses Asian cut-offs (action point at BMI 23).' },
  { topic:'ncd', q:'The leading risk factor for oral cancer in India is:', opts:['Alcohol alone','Tobacco (smoking + smokeless) — responsible for ~90% of oral cancers','Sun exposure','HPV infection'], ans:1, expl:'Tobacco = leading cause of oral cancer in India (90%+). Smokeless tobacco (gutka, khaini, paan masala) is especially common. Other risk factors: alcohol, HPV 16/18, poor oral hygiene, sharp teeth. India has highest oral cancer burden globally.' },
  { topic:'ncd', q:'NPCDCS (National Programme for Prevention and Control of Cancer, Diabetes, CVD and Stroke) provides free screening at:', opts:['District hospitals only','Health and Wellness Centres (HWCs) and above','Private hospitals','ASHA level'], ans:1, expl:'NPCDCS: NCD clinics at CHC and DH level; population-based screening at HWCs (SC and PHC level). Screening for: HTN (BP), DM (blood glucose), oral cancer (oral exam), breast cancer (CBE), cervical cancer (VIA). Population ≥30 years screened.' },
  { topic:'ncd', q:'HPV vaccine for cervical cancer prevention is most effective when given:', opts:['After first sexual intercourse','To girls 9–14 years (before sexual debut)','After cervical cancer diagnosis','To all women ≥35 years'], ans:1, expl:'HPV vaccine most effective BEFORE first sexual exposure (before HPV infection). WHO recommends primary target: girls 9–14 years. India launched Gardasil (4-valent: HPV 6,11,16,18) under Universal Immunisation Programme in 2023. 2-dose schedule.' },
  { topic:'ncd', q:'Blood glucose level for diagnosing hypoglycaemia in a newborn is:', opts:['<4 mmol/L','<2.6 mmol/L (<47 mg/dL)','<6 mmol/L','<1 mmol/L'], ans:1, expl:'Neonatal hypoglycaemia = blood glucose <2.6 mmol/L (47 mg/dL). Risk factors: LBW, prematurity, diabetic mother, birth asphyxia. Clinical: jitteriness, lethargy, apnoea, seizures. Treatment: breastfeeding or IV glucose.' },
  { topic:'ncd', q:'The AUDIT tool is used to screen for:', opts:['Depression','Tobacco dependence','Alcohol use disorders','Drug dependence'], ans:2, expl:'AUDIT (Alcohol Use Disorders Identification Test) = 10-question WHO screening tool for hazardous/harmful alcohol use. Score 8–15: harmful use; 16–19: harmful dependence; ≥20: severe dependence. AUDIT-C is 3-question shortened version.' },
  { topic:'ncd', q:'Which cancer is the most common cancer in Indian women?', opts:['Lung cancer','Ovarian cancer','Breast cancer','Cervical cancer'], ans:2, expl:'Breast cancer = most common cancer in Indian women (replacing cervical cancer now). Cervical cancer = 2nd most common. Screening: CBE (clinical breast examination) at HWC; mammography in urban. BSE (breast self-examination) encouraged monthly.' },

  /* ═══ NATIONAL PROGRAMS — extra ═══ */
  { topic:'programs', q:'VHND (Village Health Nutrition Day) is held at Anganwadi centre every:', opts:['Daily','Weekly','Monthly (every month on a fixed date)','Quarterly'], ans:2, expl:'VHND held monthly at AWC (Anganwadi Centre). Services: immunisation, ANC, weight monitoring, nutrition supplementation, counselling, referral. ASHA mobilises beneficiaries; ANM and AWW conduct the session.' },
  { topic:'programs', q:'Untied funds provided to Sub-Centre under NHM is:', opts:['₹5,000 per year','₹10,000 per year','₹75,000 per year','₹1,00,000 per year'], ans:1, expl:'Untied funds under NHM: Sub-Centre = ₹10,000/year; PHC = ₹25,000/year; CHC = ₹50,000/year; VHSNC = ₹10,000/year. Used for local health priorities, cleaning, minor repairs, community activities. Promotes flexibility at grassroots level.' },
  { topic:'programs', q:'NACP (National AIDS Control Programme) Phase IV ran from:', opts:['2001–2006','2007–2012','2012–2017','2021–2026'], ans:2, expl:'NACP Phase IV: 2012–2017. Focus: consolidating gains, maintaining zero new infections, zero AIDS-related deaths, zero discrimination. India\'s HIV prevalence: 0.22% (adult). NACO manages NACP. Target: 90-90-90 by 2020.' },
  { topic:'programs', q:'RKS (Rogi Kalyan Samiti) is a:', opts:['Government department','Hospital Society/Trust for flexible fund management at facility level','NGO','Insurance scheme'], ans:1, expl:'RKS = Rogi Kalyan Samiti (Patient Welfare Committee) = registered society at PHC/CHC/DH. Can receive and spend funds flexibly for patient welfare. Receives untied funds under NHM. Improves hospital accountability and service quality.' },
  { topic:'programs', q:'HMIS (Health Management Information System) in India collects data on:', opts:['Financial data only','Service delivery data (immunisation, ANC, deliveries, OPD) from all government health facilities monthly','Private sector only','Census data'], ans:1, expl:'HMIS: monthly online reporting of health service data from all government health facilities (SC to DH). Data on: maternal health, child health, immunisation, family planning, disease surveillance, infrastructure. Helps identify gaps for planning.' },
  { topic:'programs', q:'The ANM (Auxiliary Nurse Midwife) is posted at:', opts:['District Hospital','Community Health Centre','Sub-Centre (one ANM per SC)','PHC only'], ans:2, expl:'ANM = primary healthcare provider at Sub-Centre level. 1 ANM per SC (plains: 5000; hilly: 3000 population). Responsible for: MCH, immunisation, FP, basic curative care, health education, VHND. Reports to PHC MO.' },
  { topic:'programs', q:'PMSMA (PM Surakshit Matritva Abhiyan) is implemented on fixed:', opts:['1st of every month','5th of every month','9th of every month','15th of every month'], ans:2, expl:'PMSMA: every 9th of month. Free comprehensive ANC at government facilities (PHC, CHC, DH) by medical officer/specialist. Focuses on high-risk pregnancies. Minimum package: BP, weight, Hb, urine protein, ultrasound, blood group.' },
  { topic:'programs', q:'India\'s Pradhan Mantri Surakshit Matritva Abhiyan targets which group specifically?', opts:['All pregnant women','High-risk pregnant women (anaemia, HTN, diabetes, previous complications)','Only primiparous women','Only tribal women'], ans:1, expl:'PMSMA focuses on identifying and managing high-risk pregnancies. Key conditions: severe anaemia (Hb <7g/dL), hypertension, gestational diabetes, hypothyroidism, previous caesarean/stillbirth/neonatal death. Specialist consultation provided.' },
  { topic:'programs', q:'ASHA Home Visit schedule: new-born home visits are done at:', opts:['Only once at birth','Day 3, Day 7, Day 14, Day 28 (4 home visits in neonatal period)','Weekly for 3 months','Only at immunisation time'], ans:1, expl:'ASHA home visits for newborn: Day 3, Day 7, Day 14, Day 28 (4 visits in neonatal period) under Home Based Newborn Care (HBNC). Checks: breastfeeding, warmth, danger signs, cord care. Additional Day 42 visit for mother.' },
  { topic:'programs', q:'The goal of India\'s National Health Policy 2017 is:', opts:['Universal vaccination','Achieve Universal Health Coverage (UHC) with emphasis on preventive care','Build 1000 new hospitals','Achieve 0% IMR'], ans:1, expl:'NHP 2017 vision: Universal Health Coverage (UHC). Key targets by 2025: IMR ≤28, MMR ≤100, TFR = 2.1, U5MR ≤23, raise health expenditure to 2.5% of GDP. Emphasises preventive, promotive, and primary care; reduce catastrophic health expenditure.' },

  /* ═══ FIRST AID — extra ═══ */
  { topic:'firstaid', q:'In a burn patient, the "Rule of Nines" for an adult assigns what percentage to the head and neck?', opts:['4.5%','9%','18%','1%'], ans:1, expl:'Rule of Nines (adult): Head + neck = 9%; Each arm = 9%; Chest (front) = 9%; Abdomen (front) = 9%; Upper back = 9%; Lower back = 9%; Each thigh = 9%; Each leg below knee = 9%; Genitalia = 1%. Total = 100%. Lund & Browder chart is more accurate for children.' },
  { topic:'firstaid', q:'First aid for a chemical burn to the eye is:', opts:['Apply ointment','Irrigate with copious clean water for 15–20 minutes immediately','Cover with a pad','Apply ice pack'], ans:1, expl:'Chemical eye burn: IMMEDIATE copious irrigation with clean water (or saline) for at least 15–20 minutes. Remove contact lenses if present. Do NOT apply ointment. Seek urgent medical attention after irrigation.' },
  { topic:'firstaid', q:'Position of a patient in anaphylactic shock is:', opts:['Sitting upright','Lying flat with legs elevated (Trendelenburg/supine with legs raised)','Recovery position','Prone'], ans:1, expl:'Anaphylaxis: lay patient FLAT with legs elevated (unless breathing difficulty). Primary treatment: Adrenaline (Epinephrine) 0.5 mg IM (anterolateral thigh) immediately. Then antihistamine + corticosteroids + call emergency services.' },
  { topic:'firstaid', q:'Heat stroke (not heat exhaustion) is characterised by:', opts:['Profuse sweating, normal consciousness','Hot, DRY skin + core temp >40°C + altered mental status/unconsciousness','Mild headache only','Muscle cramps only'], ans:1, expl:'Heat stroke: Hot DRY skin (sweating mechanism failed), core temp >40°C, confusion/unconsciousness. Life-threatening emergency. Mx: rapid cooling (ice packs to neck, axillae, groin; cool water mist; fan). Heat exhaustion: sweating preserved, normal consciousness.' },
  { topic:'firstaid', q:'Heimlich manoeuvre (abdominal thrusts) is NOT recommended for:', opts:['Adults with severe choking','Children >1 year','Infants <1 year (use back blows + chest thrusts)','Obese adults'], ans:2, expl:'Heimlich manoeuvre (abdominal thrusts) = NOT used in infants <1 year (risk of liver injury). For infants: 5 back blows (face-down on forearm) + 5 chest thrusts (2 fingers, lower half sternum). For pregnant/obese adults: chest thrusts.' },
  { topic:'firstaid', q:'For a suspected spinal injury, the neck should be:', opts:['Flexed to check movement','Extended to open airway fully','Immobilised in neutral position (do not move)','Rotated to check sensation'], ans:2, expl:'Suspected cervical spine injury: immobilise neck in neutral position using hands, cervical collar, or rolled towels. Log-roll to turn. Airway: jaw thrust (not head-tilt-chin-lift). Move only with full spinal precautions.' },
  { topic:'firstaid', q:'The recommended dose of ORS for a child with SOME dehydration in 4 hours:', opts:['10–20 mL/kg','50 mL/kg','75 mL/kg over 4 hours','100 mL/kg'], ans:2, expl:'WHO IMCI: Some dehydration = ORS 75 mL/kg over 4 hours at health facility. No dehydration: 10 mL/kg per loose stool at home. Severe dehydration: IV Ringer\'s Lactate 100 mL/kg over 3–6 hours (Plan C).' },

  /* ═══ ANATOMY — extra ═══ */
  { topic:'anatomy', q:'The normal blood pH is:', opts:['7.0–7.2','7.35–7.45','7.5–7.6','6.8–7.0'], ans:1, expl:'Normal arterial blood pH = 7.35–7.45. Acidosis: pH <7.35 (respiratory or metabolic). Alkalosis: pH >7.45. pH <7.2 or >7.6 = life-threatening. Maintained by lungs (CO2), kidneys (HCO3), and buffers.' },
  { topic:'anatomy', q:'Which organ produces insulin?', opts:['Liver','Adrenal gland','Pancreas (beta cells of islets of Langerhans)','Thyroid'], ans:2, expl:'Insulin produced by beta cells of islets of Langerhans (pancreas). Alpha cells → glucagon. Delta cells → somatostatin. Insulin: lowers blood glucose, promotes glycogen synthesis, lipogenesis, protein synthesis. Deficiency → Diabetes Mellitus.' },
  { topic:'anatomy', q:'The menstrual cycle is normally:', opts:['14 days','21–35 days (average 28 days)','35–45 days','7 days'], ans:1, expl:'Normal menstrual cycle = 21–35 days (average 28 days). Day 1 = first day of menstruation. Follicular phase (Day 1–14) → ovulation (Day 14) → luteal phase (Day 14–28). Duration of bleeding = 3–7 days, blood loss <80 mL.' },
  { topic:'anatomy', q:'The hormone responsible for onset of labour is:', opts:['Progesterone','Oestrogen','Oxytocin (from posterior pituitary)','FSH'], ans:2, expl:'Oxytocin (from posterior pituitary) triggers uterine contractions at term. Surge of oxytocin = onset of labour. Prostaglandins also important. Synthetic oxytocin used for induction/augmentation of labour and PPH prevention (AMTSL).' },
  { topic:'anatomy', q:'Haemoglobin carries oxygen by binding to:', opts:['Globin protein chains','Iron (Fe²⁺) in haem groups','Plasma albumin','WBCs'], ans:1, expl:'Each Hb molecule has 4 haem groups, each containing Fe²⁺ that binds one O2 molecule. So 1 Hb molecule = 4 O2. Oxyhaemoglobin (bright red) → deoxyhaemoglobin (dark red/blue). CO binds 250× more avidly than O2 → CO poisoning.' },
  { topic:'anatomy', q:'The function of the placenta includes all EXCEPT:', opts:['Gas exchange (O2/CO2)','Nutrient transfer','Hormone production (hCG, oestrogen, progesterone)','Producing red blood cells for the foetus'], ans:3, expl:'Placenta functions: (1) Gas exchange, (2) Nutrition transfer (glucose, AA), (3) Waste removal (urea, CO2), (4) Hormone production (hCG, oestrogen, progesterone, HPL), (5) Immunity (IgG transfer). Does NOT produce foetal RBCs (that\'s yolk sac, then liver/spleen, then bone marrow).' },
  { topic:'anatomy', q:'Normal urine output in an adult is:', opts:['100–200 mL/day','400–500 mL/day','800–2000 mL/day (avg 1500 mL)','3000–4000 mL/day'], ans:2, expl:'Normal urine output = 0.5–1 mL/kg/hour = ~800–2000 mL/day (average 1500 mL). Oliguria: <400 mL/day (<0.5 mL/kg/h) = kidney concern. Anuria: <100 mL/day. Polyuria: >3000 mL/day (DM, DI, diuretics).' },
  { topic:'anatomy', q:'ABO blood group system: person with blood group AB has:', opts:['Only A antigens on RBCs','Only B antigens on RBCs','Both A and B antigens, NO antibodies in plasma','No antigens, both anti-A and anti-B antibodies'], ans:2, expl:'Blood group AB: A + B antigens on RBCs, NO antibodies (anti-A or anti-B) in plasma. Blood group O: No antigens, anti-A + anti-B antibodies. Universal donor = O negative (no ABO or Rh antigens). Universal recipient = AB positive.' },
  { topic:'anatomy', q:'The normal respiratory rate in a newborn is:', opts:['12–20/min','20–30/min','40–60/min','70–80/min'], ans:2, expl:'Newborn normal RR = 40–60/min. Tachypnoea in newborn: >60/min (WHO IMCI). Grunting, chest indrawing, nasal flaring = signs of respiratory distress. Fast breathing in infants (2–12 months): ≥50/min; Children (1–5 years): ≥40/min.' },

  /* ═══ ENVIRONMENTAL HEALTH — extra ═══ */
  { topic:'environment', q:'Hardness of water is mainly due to:', opts:['Sodium and potassium salts','Calcium and magnesium salts','Iron and manganese','Chloride salts'], ans:1, expl:'Water hardness = dissolved calcium (Ca²⁺) and magnesium (Mg²⁺) salts (bicarbonates, sulphates, chlorides). Temporary hardness (carbonates) removed by boiling. Permanent hardness (sulphates, chlorides) requires chemical treatment (lime-soda, ion exchange).' },
  { topic:'environment', q:'The most effective method of water purification at household level is:', opts:['Settling','Boiling (kills all pathogens)','Adding potassium permanganate','Filtering through cloth'], ans:1, expl:'Boiling = most effective household water treatment. Kills all pathogenic microorganisms (bacteria, viruses, parasites) at 100°C. Boil for at least 1 minute (3 min at high altitude). SODIS (solar disinfection), chlorination, ceramic filters are alternatives.' },
  { topic:'environment', q:'Chlorine dose for emergency water purification is:', opts:['0.1 mg/L','0.5 mg/L','5 mg/L (5 ppm) as initial dose','100 mg/L'], ans:2, expl:'Emergency water treatment: 5 mg/L (5 ppm) free residual chlorine, contact time 30 min. Regular supply: target 0.2–0.5 mg/L residual chlorine at consumer end. Bleaching powder (30–35% available chlorine) used in India.' },
  { topic:'environment', q:'ODF (Open Defecation Free) is the goal of:', opts:['WASH programme only','Swachh Bharat Mission (SBM) and WASH','NRHM','ICDS'], ans:1, expl:'ODF = zero open defecation = key goal of Swachh Bharat Mission (SBM) — launched 2 Oct 2014. India declared ODF in 2019. SBM Phase 2 (2020–25): ODF+ (sanitation + hygiene), ODF++ (solid/liquid waste management), FAL (Faecal Sludge Management).' },
  { topic:'environment', q:'Lead poisoning in children primarily affects:', opts:['Lungs','Kidneys only','Brain (neurotoxicity — IQ reduction, learning disability)','Skin'], ans:2, expl:'Lead (Pb) = potent neurotoxin. No safe blood lead level. Children especially vulnerable: pica (eating paint chips), hand-mouth activity. Effects: intellectual disability, reduced IQ, ADHD, seizures. Sources: old paint, lead pipes, petrol (phased out in India 2000).' },
  { topic:'environment', q:'Waste water treatment: activated sludge process uses:', opts:['Chemicals only','Microorganisms (aerobic bacteria) to break down organic matter','UV light','Sedimentation alone'], ans:1, expl:'Activated sludge process = aerobic biological treatment using aerobic bacteria in aeration tanks. Air pumped in → bacteria break down organic matter → secondary sedimentation. One of the most common urban sewage treatment methods.' },
  { topic:'environment', q:'Methane (CH4) is produced from:', opts:['Nuclear energy','Burning coal','Decomposition of organic waste in landfills and wetlands (biogas)','Solar panels'], ans:2, expl:'Methane = main component of biogas. Produced by anaerobic decomposition of organic matter: landfills, paddy fields, livestock (enteric fermentation), wetlands. Potent greenhouse gas (28× CO2 over 100 years). Also produced intentionally in biogas plants.' },

  /* ═══ HEALTH STATISTICS — extra ═══ */
  { topic:'stats', q:'Crude Birth Rate (CBR) is defined as:', opts:['Live births per 1000 women aged 15–44','Total live births per 1000 mid-year population','Total births including stillbirths per 1000 population','Live births per 100 married women'], ans:1, expl:'CBR = total live births per 1000 mid-year population. India CBR (SRS 2020) ≈ 19.5/1000. General Fertility Rate (GFR) = live births per 1000 women 15–44. TFR = average children per woman over reproductive lifetime.' },
  { topic:'stats', q:'Perinatal mortality rate includes deaths:', opts:['In first 7 days of life only','28 weeks gestation to 7 days after birth (stillbirths + early neonatal deaths)','In first 28 days','All deaths in children <1 year'], ans:1, expl:'Perinatal mortality = stillbirths (≥28 weeks gestation) + early neonatal deaths (0–7 days) per 1000 total births. India PMR ≈ 30/1000 (SRS). Causes: birth asphyxia, prematurity, infection. Reduced by skilled birth attendance, ANC.' },
  { topic:'stats', q:'In a 2×2 table, Positive Predictive Value (PPV) is:', opts:['TP/(TP+FN)','TP/(TP+FP)','TN/(TN+FP)','TN/(TN+FN)'], ans:1, expl:'PPV = TP/(TP+FP) = proportion of positive tests that are truly positive. NPV = TN/(TN+FN). PPV depends on PREVALENCE — high prevalence increases PPV. Sensitivity = TP/(TP+FN). Specificity = TN/(TN+FP).' },
  { topic:'stats', q:'The most important measure of central tendency in a skewed distribution is:', opts:['Mean','Mode','Median','Standard deviation'], ans:2, expl:'In a skewed distribution (income, hospital stay duration), median is preferred over mean as mean is pulled by extreme values. Mean: sensitive to outliers. Median: 50th percentile, unaffected by extremes. Mode: most frequent value.' },
  { topic:'stats', q:'R0 (Basic Reproduction Number) means:', opts:['Recovery rate','Average number of new cases one case generates in a fully susceptible population','Mortality rate','Incubation period'], ans:1, expl:'R0 = basic reproduction number = average secondary cases from one primary case in a fully susceptible population. R0 >1 = epidemic will grow; R0 <1 = epidemic will fade. Measles R0 = 12–18 (highest known). COVID-19 original strain R0 = 2–3.' },
  { topic:'stats', q:'Case Fatality Rate (CFR) differs from Mortality Rate in that CFR is:', opts:['Deaths per 1000 population','Deaths per 1000 live births','Deaths per 100 CASES of a disease','Deaths per year'], ans:2, expl:'CFR = deaths among CASES of the disease / total cases × 100. Measures disease severity. Mortality rate = deaths per 1000 population (measures population impact). Cholera CFR: <1% with treatment; 25–50% untreated. Ebola CFR: 25–90%.' },

  /* ═══ ESSENTIAL MEDICINES — extra ═══ */
  { topic:'drug', q:'WHO-ORS (low-osmolarity) contains:', opts:['Sodium 90 mmol/L, glucose 111 mmol/L, osmolarity 311 mOsm/L','Sodium 75 mmol/L, glucose 75 mmol/L, osmolarity 245 mOsm/L','Sodium 50 mmol/L, glucose 50 mmol/L','Only glucose and sodium'], ans:1, expl:'Low-osmolarity WHO-ORS (2002 revised): Na+ 75 mmol/L, Cl- 65 mmol/L, K+ 20 mmol/L, citrate 10 mmol/L, glucose 75 mmol/L. Total osmolarity 245 mOsm/L. Reduces stool output and vomiting vs. standard (311 mOsm/L). Per sachet in 1 litre.' },
  { topic:'drug', q:'Misoprostol 600 mcg is used at community level for PPH prevention when oxytocin is not available. It is given by which route?', opts:['Intravenous','Oral or sublingual','Intramuscular','Rectal only'], ans:1, expl:'Misoprostol 600 mcg PO (oral) or SL (sublingual) for PPH prevention at community level. Shelf-stable at room temperature — suitable for low-resource settings without cold chain. Oxytocin is preferred (IV/IM) when available.' },
  { topic:'drug', q:'Iron sucrose injection is used in pregnancy for:', opts:['Mild anaemia','Moderate anaemia when oral IFA not tolerated or inadequate response','First trimester supplementation','Prevention of goitre'], ans:1, expl:'IV Iron sucrose (or ferric carboxymaltose) used in 2nd/3rd trimester when: oral iron not tolerated, non-compliance, severe malabsorption, or Hb needs rapid correction (Hb <7 g/dL). Given IV infusion. Faster Hb rise than oral iron.' },
  { topic:'drug', q:'Gentian violet (crystal violet) 0.5% solution is used for:', opts:['Eye infections','Oral thrush in neonates and tropical ulcers','Burns','Diarrhoea'], ans:1, expl:'Gentian violet 0.5%: painted on oral mucosa for oral thrush (neonatal candidiasis); applied to tropical/non-healing ulcers, impetigo. Antifungal and antibacterial. Applied with swab twice daily for oral thrush.' },
  { topic:'drug', q:'The first-line drug for treatment of eclampsia (seizure prevention/control) is:', opts:['Diazepam','Phenytoin','Magnesium sulphate (MgSO4)','Phenobarbitone'], ans:2, expl:'MgSO4 = drug of choice for eclampsia. Pritchard regimen: Loading dose 4g IV (20 mL of 20%) over 20 min + 5g IM each buttock; Maintenance: 5g IM every 4 hours. Reduces recurrence of seizures and maternal mortality.' },
  { topic:'drug', q:'Antidote for organophosphate (pesticide) poisoning is:', opts:['Calcium gluconate','Naloxone','Atropine + Pralidoxime (2-PAM)','Flumazenil'], ans:2, expl:'Organophosphate poisoning (insecticides: malathion, chlorpyrifos): symptoms = SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI cramps, Emesis) + bradycardia, miosis, seizures. Antidotes: Atropine (reverses muscarinic effects) + Pralidoxime (2-PAM, reactivates AChE if given early).' },
  { topic:'drug', q:'Vitamin K injection at birth is given to prevent:', opts:['Neonatal jaundice','Haemorrhagic Disease of Newborn (VKDB — Vitamin K Deficiency Bleeding)','Neonatal sepsis','Hypoglycaemia'], ans:1, expl:'Vitamin K1 (phytomenadione) 1 mg IM at birth prevents VKDB (Vitamin K Deficiency Bleeding / Haemorrhagic Disease of Newborn). Newborns have low Vit K stores (poor placental transfer), low breast milk content, no gut bacteria initially.' },
  { topic:'drug', q:'Paracetamol adult dose and maximum daily dose is:', opts:['250 mg per dose, max 1g/day','500–1000 mg per dose, max 4g/day (3g if chronic alcohol user)','100 mg per dose, max 2g/day','2000 mg per dose, max 8g/day'], ans:1, expl:'Paracetamol (acetaminophen): 500–1000 mg every 4–6 hours; maximum 4g/day (3g/day in liver disease or chronic alcohol use). Overdose → hepatotoxicity. Antidote: N-acetylcysteine (NAC). Safe in pregnancy and breastfeeding (preferred analgesic).' },
  { topic:'drug', q:'Which antibiotic is used for prophylaxis of meningococcal meningitis contacts?', opts:['Amoxicillin','Rifampicin or Ciprofloxacin (single dose)','Metronidazole','Chloramphenicol'], ans:1, expl:'Meningococcal meningitis close contacts: Rifampicin 600 mg twice daily × 2 days (adults) OR Ciprofloxacin 500 mg single dose. Eliminates nasopharyngeal carriage. Index case also receives rifampicin before discharge to eliminate carrier state.' },

  /* ═══ MCH — SET 3 ═══ */
  { topic:'mch', q:'VBSY (Vande Bharat Swasthya Yojana) — under NHM — targets which group?', opts:['Only elderly','Pregnant women, children, and adolescents under RMNCH+A','Only males','Only BPL families'], ans:1, expl:'RMNCH+A (Reproductive, Maternal, Newborn, Child, and Adolescent Health) is India\'s integrated health strategy under NHM targeting women, children, and adolescents. Launched 2013. Includes JSSK, JSY, PMMVY, PMSMA, and adolescent health under RKSK.' },
  { topic:'mch', q:'Foetal movements (quickening) are first felt by the mother at approximately:', opts:['8–10 weeks','12–14 weeks','18–20 weeks (primi), 16–18 weeks (multi)','28–30 weeks'], ans:2, expl:'Quickening = first perception of foetal movements. Primiparous women: 18–20 weeks. Multiparous women: 16–18 weeks (earlier awareness). Foetus actually moves from 8 weeks (ultrasound detectable). Reduced foetal movements = danger sign.' },
  { topic:'mch', q:'The "three delays" model describes barriers to obstetric care. Delay 1 is:', opts:['Delay in reaching facility','Delay in receiving care at facility','Delay in deciding to seek care at home level','Delay in referral from PHC'], ans:2, expl:'Three Delays Model (Thaddeus & Maine 1994): Delay 1 = Decision to seek care (at family/community level — recognition of complications, social/cultural barriers); Delay 2 = Reaching facility (distance, transport, road); Delay 3 = Receiving care at facility (staff, drugs, blood).' },
  { topic:'mch', q:'Normal duration of second stage of labour (expulsive stage) in a primigravida is up to:', opts:['30 minutes','1 hour','2 hours','4 hours'], ans:2, expl:'Second stage: full cervical dilation (10 cm) to delivery of baby. Primigravida: up to 2 hours (without epidural); Multigravida: up to 1 hour. With epidural: add 1 extra hour. Prolonged 2nd stage → foetal distress, obstetric intervention needed.' },
  { topic:'mch', q:'Post-natal visit schedule under NHM requires minimum visits at:', opts:['Only at 6 weeks','24–48 hours, 3–7 days, 4–6 weeks after delivery','Only within 24 hours','Daily for 1 month'], ans:1, expl:'Post-natal check-up schedule (MoHFW): Day 1 (24–48 hrs), Day 3–7, Week 4–6 (6-week postnatal check). At 6 weeks: contraceptive counselling, infant weight, immunisation status, maternal Hb check, family planning advice.' },

  /* ═══ FAMILY PLANNING — SET 3 ═══ */
  { topic:'fp', q:'MTP Act 1971 (amended 2021) allows termination of pregnancy up to:', opts:['12 weeks on request; up to 20 weeks with medical opinion','20 weeks on request; up to 24 weeks for special categories','Any time','Only up to 8 weeks'], ans:1, expl:'MTP Act 2021 amendment: up to 20 weeks = 1 registered medical practitioner opinion; 20–24 weeks (special categories: rape/assault survivors, minor girls, differently abled, humanitarian crisis) = 2 RMP opinions; >24 weeks = Medical Board.' },
  { topic:'fp', q:'The spacing between two births recommended by family planning guidelines is:', opts:['6 months','1 year','At least 2 years (interpregnancy interval ≥24 months)','5 years'], ans:2, expl:'WHO/RMNCH+A recommend interpregnancy interval ≥24 months (2 years) after a live birth before next conception. Short intervals <18 months increase risk of: LBW, preterm birth, maternal anaemia, neonatal death. Promotes optimal child spacing.' },
  { topic:'fp', q:'Which of the following is a progestin-only contraceptive pill (POP)?', opts:['Combined OCP (Mala-N)','Centchroman (Chhaya)','Mini-pill (Norethisterone/Levonorgestrel)','OCP with oestrogen'], ans:2, expl:'Progestin-only pill (POP/mini-pill) contains only progestin (norethisterone, levonorgestrel, desogestrel). No oestrogen. Safe for breastfeeding mothers (unlike COC). Taken continuously without break. Also used in women with oestrogen contraindications.' },

  /* ═══ IMMUNIZATION — SET 3 ═══ */
  { topic:'immunize', q:'Which disease has been ELIMINATED from India (not eradicated globally)?', opts:['Smallpox','Polio','Guinea worm','Maternal and Neonatal Tetanus (MNT)'], ans:3, expl:'India eliminated MNT in 2015 (<1 NNT case/1000 live births in all districts). Polio-free since 2014 (not eliminated globally). Smallpox globally eradicated 1980. Guinea worm close to eradication globally. Yaws eliminated in India 2016.' },
  { topic:'immunize', q:'The site and volume for DPT injection in infants is:', opts:['Upper arm, 0.1 mL','Buttock (gluteal), 0.5 mL','Anterolateral thigh, 0.5 mL IM','Deltoid, 1 mL'], ans:2, expl:'DPT/Pentavalent: 0.5 mL IM into anterolateral thigh (vastus lateralis) in infants. NOT gluteal (risk of sciatic nerve injury in infants). Deltoid preferred in older children/adults. Anterolateral thigh = recommended site in <1 year.' },
  { topic:'immunize', q:'The "open multi-dose vial policy" for vaccines means:', opts:['Opened vials must be discarded within 1 hour','Opened vials of OPV, DPT, TT, Hep-B, and liquid pentavalent can be used up to 28 days if stored correctly','All vaccines must be used in single session','Opened BCG vials last 6 hours only'], ans:1, expl:'India\'s open vial policy (as per WHO guidelines): OPV, DPT, TT, HepB, liquid pentavalent = can be used up to 28 days if: cap not removed (used with syringe), VVM OK, stored at correct temperature, no contamination signs. BCG and measles = use within 4–6 hours of reconstitution.' },
  { topic:'immunize', q:'Which vaccine is given sub-cutaneously (SC)?', opts:['BCG','DPT','MR vaccine','Hepatitis B'], ans:2, expl:'MR (Measles-Rubella) vaccine = 0.5 mL SC in right upper arm. BCG = 0.1 mL ID (intradermal) in left upper arm. DPT/Pentavalent/HepB = 0.5 mL IM (anterolateral thigh in infants). OPV = 2 drops oral.' },

  /* ═══ NUTRITION — SET 3 ═══ */
  { topic:'nutrition', q:'Balanced diet for an adult Indian woman (non-pregnant) should provide approximately:', opts:['1200 kcal/day','1800–2100 kcal/day','3000 kcal/day','500 kcal/day'], ans:1, expl:'ICMR 2020 RDA: Sedentary adult woman = 1900 kcal/day; Moderate activity = 2230 kcal/day. Sedentary adult man = 2320 kcal/day. Pregnancy: +350 kcal (2nd trimester), +450 kcal (3rd trimester). Lactation: +500 kcal/day.' },
  { topic:'nutrition', q:'Breast milk compared to cow\'s milk has:', opts:['More protein and less lactose','Less protein (whey-dominant, easily digestible) and more lactose; ideal fat composition','More iron and vitamin C only','Same composition but warmer'], ans:1, expl:'Breast milk vs. cow\'s milk: Breast milk has LESS total protein but whey-dominant (60:40 whey:casein, easily digestible vs. cow 20:80). More lactose, oligosaccharides (prebiotics), IgA, lysozyme, lactoferrin. Optimal iron bioavailability (50% absorbed vs 10% cow).' },
  { topic:'nutrition', q:'Complementary feeding should be started at:', opts:['3 months','4 months','6 months (along with continued breastfeeding)','12 months'], ans:2, expl:'Complementary feeding (CF) starts at EXACTLY 6 months (180 days). Breast milk alone is sufficient for first 6 months. Starting CF too early (<4 months) increases infection risk; too late (>6 months) causes growth faltering, micronutrient deficiency. CF continues until 2 years.' },
  { topic:'nutrition', q:'Anthropometric indicator used to measure chronic malnutrition (stunting) is:', opts:['Weight for age','Weight for height','Height for age (HAZ score <-2 SD)','MUAC'], ans:2, expl:'Stunting = chronic malnutrition = low Height for Age (HAZ) <-2 SD. India stunting prevalence: 35% (NFHS-5, down from 38% in NFHS-4). Wasting = acute malnutrition = low Weight for Height (WHZ) <-2 SD. Underweight = low Weight for Age (WAZ) <-2 SD.' },

  /* ═══ COMMUNICABLE DISEASES — SET 3 ═══ */
  { topic:'diseases', q:'Swine flu is caused by:', opts:['Influenza A (H1N1) pdm09 virus','Influenza B virus','Parainfluenza virus','RSV'], ans:0, expl:'Swine flu = Influenza A (H1N1) pandemic 2009 strain (pdm09). Transmitted human-to-human by droplets. High-risk groups: pregnant women, children <5y, elderly >65y, immunocompromised, healthcare workers. Treatment: Oseltamivir (Tamiflu). Seasonal flu vaccine provides some cross-protection.' },
  { topic:'diseases', q:'Rabies post-exposure prophylaxis (PEP) includes:', opts:['Wound washing with soap and water + Rabies vaccine (± RIG)','Antibiotics only','Isolation only','Observation of the animal for 10 days — no treatment needed'], ans:0, expl:'Rabies PEP: (1) Immediate wound washing with soap and water for 15 min + iodine; (2) Rabies vaccine (5-dose Essen/4-dose Zagreb schedule); (3) Rabies Immunoglobulin (RIG) for category III bites. Category I (licks on intact skin) = no PEP. 100% fatal once symptoms appear.' },
  { topic:'diseases', q:'ASHA\'s role in malaria control includes:', opts:['Treating all fever cases with antimalarials empirically','Testing with RDT and treating confirmed malaria cases + fever surveillance','Spraying insecticides alone','Only health education'], ans:1, expl:'Under NVBDCP, trained ASHAs can: (1) Test fever cases with malaria RDT, (2) Treat confirmed uncomplicated malaria with ACT/CQ+PQ, (3) Report cases for surveillance, (4) Promote bed nets (LLIN), (5) Refer severe malaria. ASHA as DOTS provider for TB also.' },
  { topic:'diseases', q:'Chickenpox (Varicella) is most infectious:', opts:['After all vesicles have crusted','Before rash appears (1–2 days) until all vesicles are crusted (5–7 days total)','Only during first day of rash','When fever starts'], ans:1, expl:'Chickenpox infectious period: 1–2 days BEFORE rash appears until ALL vesicles have crusted over (5–7 days after rash onset). Varicella-zoster virus. Airborne + droplet + direct contact. Incubation: 10–21 days. Complications: bacterial superinfection, pneumonia, encephalitis.' },
  { topic:'diseases', q:'Incubation period of TB is:', opts:['1–3 days','2–6 weeks (infection to TST/IGRA conversion); years to primary disease','6–12 months','Only 24 hours'], ans:1, expl:'TB: Infection to TST conversion = 2–6 weeks. Infection to primary disease = months to years. Most latent infections (90%) never progress. Risk of progression highest in: infants, immunocompromised (HIV), malnutrition, diabetes. Lifetime risk of reactivation = 10%.' },
  { topic:'diseases', q:'ELISA test for HIV detects:', opts:['HIV virus directly','Antibodies to HIV (and p24 antigen in 4th generation tests)','HIV RNA','CD4 count'], ans:1, expl:'ELISA (Enzyme-Linked Immunosorbent Assay): 3rd generation = antibody detection (IgG/IgM); 4th generation = antibody + p24 antigen (shorter window period 2–4 weeks). Reactive ELISA confirmed by Western blot or second algorithm. Viral load (PCR RNA) used for monitoring treatment.' },

  /* ═══ NCD — SET 3 ═══ */
  { topic:'ncd', q:'Which of the following is a modifiable risk factor for cardiovascular disease?', opts:['Age','Sex','Hypertension, dyslipidaemia, smoking, diabetes (all modifiable)','Family history'], ans:2, expl:'Modifiable CVD risk factors: HTN, DM, dyslipidaemia, smoking, obesity, physical inactivity, unhealthy diet, alcohol. Non-modifiable: age, sex (male risk higher), family history, race/ethnicity. NPCDCS targets modifiable risk factors through screening and lifestyle counselling.' },
  { topic:'ncd', q:'Global target for reduction of premature NCD mortality by 2030 (SDG) is:', opts:['10% reduction','25% reduction (SDG 3.4)','50% reduction','5% reduction'], ans:1, expl:'SDG 3.4: Reduce by one-third premature mortality from NCDs (CVD, cancer, DM, CRD) by 2030 through prevention and treatment. WHO "25×25" target: 25% relative reduction in premature NCD mortality by 2025 (compared to 2010 baseline).' },
  { topic:'ncd', q:'Metabolic syndrome is diagnosed when ≥3 of the following are present. Which is NOT a component?', opts:['Central obesity (waist circumference)','High triglycerides','Low HDL cholesterol','High haemoglobin'], ans:3, expl:'Metabolic syndrome (IDF/AHA criteria) = ≥3 of: (1) Central obesity (WC ≥90 cm men/≥80 cm women Asian), (2) TG ≥150 mg/dL, (3) Low HDL (<40 men/<50 women), (4) BP ≥130/85, (5) Fasting glucose ≥100 mg/dL. High Hb is NOT a component.' },

  /* ═══ NATIONAL PROGRAMS — SET 3 ═══ */
  { topic:'programs', q:'Nikshay Poshan Yojana provides financial support of __ per month to TB patients:', opts:['₹250/month','₹500/month','₹1000/month','₹2000/month'], ans:1, expl:'Nikshay Poshan Yojana (2018): ₹500/month direct benefit transfer (DBT) to all TB patients throughout treatment duration (minimum 6 months for DS-TB; longer for DR-TB). Aims to address nutritional needs and reduce treatment dropout.' },
  { topic:'programs', q:'NVBDCP (National Vector Borne Disease Control Programme) covers which diseases?', opts:['TB and leprosy','Malaria, dengue, kala-azar, filaria, Japanese encephalitis, chikungunya','Only malaria','HIV/AIDS'], ans:1, expl:'NVBDCP covers 6 vector-borne diseases: Malaria, Dengue, Chikungunya, Kala-azar (VL), Lymphatic Filariasis, Japanese Encephalitis. Key strategies: vector control (IRS, LLIN, larval control), case management, IEC/BCC.' },
  { topic:'programs', q:'India\'s Elimination of Lymphatic Filariasis targets which year?', opts:['2020','2023','2027','2030'], ans:2, expl:'India targets elimination of Lymphatic Filariasis (LF) by 2027 (LF global elimination target: 2030). Strategy: MDA (Mass Drug Administration) with DEC + Albendazole annually in endemic districts. Also adding Ivermectin (IDA triple drug). Transmission Assessment Surveys (TAS) verify elimination.' },
  { topic:'programs', q:'ASHA\'s monthly home visits include all EXCEPT:', opts:['Newborn home visit (Day 3, 7, 14, 28)','ANC home visits','Performing surgical procedures','IEC/BCC activities and referral'], ans:2, expl:'ASHA functions include: home visits (newborn, ANC, postnatal), escort to health facilities, immunisation mobilisation, ORS/ORT promotion, DOTS support, distribution of basic medicines, IEC/BCC, registration. ASHA does NOT perform surgical procedures or provide complex medical care.' },
  { topic:'programs', q:'FRU (First Referral Unit) must be able to provide:', opts:['Only OPD services','24/7 emergency obstetric care, blood transfusion, and neonatal care','Only basic immunisation','Tertiary care only'], ans:1, expl:'FRU = First Referral Unit (designated CHC or equivalent). Must provide: 24/7 EmOC (emergency obstetric care), CEmOC (C-section), blood storage, blood transfusion, newborn care (SNCU), PICU. Minimum: surgeon, gynaecologist, anaesthetist, paediatrician. Referral from PHC/SC.' },
  { topic:'programs', q:'India\'s Elimination of Mother-to-Child Transmission (EMTCT) of HIV target requires MTCT rate of <:', opts:['<5% with breastfeeding','<2% (or <50 infections per 100,000 live births)','<20%','<10%'], ans:1, expl:'WHO EMTCT validation criteria: MTCT rate <2% (breastfeeding) or <5% (non-breastfeeding) AND <50 new child HIV infections per 100,000 live births. Under PPTCT programme: all HIV-positive pregnant women get lifelong ART (Option B+) regardless of CD4 count.' },

  /* ═══ FIRST AID — SET 3 ═══ */
  { topic:'firstaid', q:'Recovery position is used for:', opts:['Cardiac arrest','Unconscious patient who is breathing normally (to prevent aspiration)','Conscious patient in shock','Spinal injury'], ans:1, expl:'Recovery position (lateral recumbent) = for unconscious BREATHING patient. Prevents airway obstruction from tongue falling back and aspiration of vomit. NOT for: spinal injury (log roll instead), cardiac arrest (CPR needed), patient with hip/pelvic fracture.' },
  { topic:'firstaid', q:'For an eye injury with a foreign body stuck in the eye, correct first aid is:', opts:['Rub the eye vigorously','Flush with water repeatedly + cover both eyes + seek medical help','Remove with fingers','Apply eye drops without medical consultation'], ans:1, expl:'Embedded foreign body in eye: DO NOT rub or try to remove embedded object. Flush gently with water (not forceful). Cover BOTH eyes with clean cloth/pad (covering both reduces eye movement). Seek urgent ophthalmology care.' },
  { topic:'firstaid', q:'Correct first aid for a severed (amputated) finger is:', opts:['Reattach it yourself','Wrap amputated part in moist cloth → place in sealed bag → put bag on ice (not directly on ice); rush to hospital','Discard the finger','Keep the finger in water alone'], ans:1, expl:'Amputated part: wrap in moist (saline-soaked) sterile gauze → seal in plastic bag → put bag on ice (NOT directly on ice — causes frostbite). Rush to hospital within 6 hours (replantation possible). Keep patient\'s wound clean and elevated.' },

  /* ═══ ANATOMY — SET 3 ═══ */
  { topic:'anatomy', q:'The site of fertilisation in the female reproductive tract is:', opts:['Uterus','Ovary','Outer one-third of fallopian tube (ampullary region)','Cervix'], ans:2, expl:'Fertilisation occurs in the AMPULLA (outer 1/3) of the fallopian tube. Sperm meets ovum within 24 hours of ovulation. Zygote → morula → blastocyst → implants in uterine endometrium at Day 6–10 post-fertilisation.' },
  { topic:'anatomy', q:'Menarche (first menstruation) normally occurs at age:', opts:['8–10 years','11–14 years (average ~13 years in India)','16–18 years','20–22 years'], ans:1, expl:'Menarche normally occurs at 11–14 years (average ~12.5–13 years globally; slightly later in India ~12.5 years). Preceded by thelarche (breast development) and pubarche (pubic hair). Precocious puberty = menarche <8 years; delayed = >16 years.' },
  { topic:'anatomy', q:'Normal foetal heart rate (FHR) at term:', opts:['60–80 bpm','80–100 bpm','110–160 bpm','200–220 bpm'], ans:2, expl:'Normal FHR = 110–160 bpm. Bradycardia <110 bpm = foetal distress (cord compression, placental abruption, maternal hypotension). Tachycardia >160 bpm = foetal distress or maternal fever/infection. FHR monitored by Pinard stethoscope or electronic CTG.' },
  { topic:'anatomy', q:'Functions of the lymphatic system include:', opts:['Red blood cell production','Returning interstitial fluid to blood, fat absorption (lacteals), immune function (lymphocytes)','Hormone production','Oxygen transport'], ans:1, expl:'Lymphatic system: (1) Returns ~3 L/day of interstitial fluid to blood via thoracic duct; (2) Fat absorption via lacteals in small intestine (chylomicrons); (3) Immune function: lymph nodes filter pathogens, lymphocyte production/maturation; (4) Oedema prevention.' },

  /* ═══ ENVIRONMENT — SET 3 ═══ */
  { topic:'environment', q:'DALY (Disability Adjusted Life Year) measures:', opts:['Life expectancy only','Burden of disease = Years of Life Lost (YLL) + Years Lived with Disability (YLD)','Number of hospital admissions','GDP impact of disease'], ans:1, expl:'DALY = YLL (Years of Life Lost due to premature death) + YLD (Years Lived with Disability). 1 DALY = 1 year of healthy life lost. Used to compare burden of different diseases. GBD (Global Burden of Disease) study uses DALYs. India: high DALY burden from NCDs now.' },
  { topic:'environment', q:'Safe disposal of sharps (needles) in healthcare settings uses:', opts:['Yellow bag','Red bag','White translucent puncture-proof container','Open bin'], ans:2, expl:'BMW Management Rules 2016: Sharps (needles, blades, scalpels, broken glass) → White translucent puncture-proof, leak-proof container. Treated by hub-cutter at point of use, then autoclave/microwave/incinerator. Never recap, bend, or break needles by hand.' },
  { topic:'environment', q:'Air pollutant primarily responsible for smog formation in cities is:', opts:['CO2 only','PM2.5, PM10, NO2, SO2, O3 (ground level ozone)','Water vapour','Argon'], ans:1, expl:'Urban smog: Primary pollutants = PM2.5, PM10 (particulate matter), NO2 (nitrogen dioxide), SO2 (sulphur dioxide) from vehicles and industry. Secondary pollutant = ground-level O3 (formed from NOx + VOCs + sunlight). PM2.5 most dangerous (reaches alveoli, causes CVD, lung disease).' },
  { topic:'environment', q:'The term "herd immunity" means:', opts:['Animals are immune to human diseases','When sufficient % of population is immune, even unvaccinated people are protected (chain of transmission breaks)','Individual immunity from vaccination','Immunity in livestock'], ans:1, expl:'Herd immunity = when a critical proportion (herd immunity threshold) of a population is immune (vaccinated or naturally), chains of transmission break and even non-immune individuals are protected indirectly. Threshold = 1 - 1/R0. Measles requires 92–95% immune.' },

  /* ═══ HEALTH STATISTICS — SET 3 ═══ */
  { topic:'stats', q:'In epidemiology, "attack rate" is used during:', opts:['Endemic disease surveillance','Outbreak investigation (proportion of exposed people who develop disease)','Census enumeration','Chronic disease monitoring'], ans:1, expl:'Attack rate = number of people who develop disease / total exposed × 100. Used in OUTBREAK investigation. Secondary attack rate = new cases in household contacts after introduction of index case. Helps identify causative agent and risk factors in outbreaks.' },
  { topic:'stats', q:'Life expectancy at birth in India (2021 estimate) is approximately:', opts:['55 years','62 years','70 years','78 years'], ans:2, expl:'India life expectancy at birth (2019–21 SRS): ~70 years (men: 68.6; women: 71.3). Has increased from 49 years (1970s) to 70 years. SDG target: 75 years by 2030. Kerala has highest (75+); Uttar Pradesh lowest (~64 years).' },
  { topic:'stats', q:'Specificity of a screening test means:', opts:['Ability to detect all diseased persons','Ability to correctly identify those WITHOUT the disease (true negative rate)','Proportion of positives that are truly positive','Overall accuracy'], ans:1, expl:'Specificity = TN/(TN+FP) = correctly identifies TRUE NEGATIVES (non-diseased as negative). High specificity → few false positives → used for confirmatory tests. Mnemonic SpPIn = SPecific Positive rules IN disease. Example: TPHA for syphilis (high specificity).' },
  { topic:'stats', q:'Census in India is conducted every:', opts:['5 years','8 years','10 years','15 years'], ans:2, expl:'India\'s census is conducted every 10 years. Last census: 2011 (2021 census delayed due to COVID). Population 2011: 1.21 billion. Sex ratio: 940 females/1000 males. Literacy: 74%. Conducted by Registrar General and Census Commissioner of India.' },

  /* ═══ DRUG — SET 3 ═══ */
  { topic:'drug', q:'Cotrimoxazole (TMP-SMX) is given to HIV-positive children for prophylaxis against:', opts:['TB only','Pneumocystis jirovecii pneumonia (PCP) and toxoplasmosis','Malaria only','Diarrhoea only'], ans:1, expl:'Cotrimoxazole preventive therapy (CPT) = all HIV-positive children <5 years; HIV-positive adults with CD4 <200 cells/mm³. Prevents PCP (Pneumocystis pneumonia — most common AIDS-defining illness), toxoplasmosis, isosporiasis, bacterial infections.' },
  { topic:'drug', q:'Artemether-Lumefantrine (Coartem) is given for how many days?', opts:['1 day','2 days','3 days','7 days'], ans:2, expl:'AL (Artemether-Lumefantrine/Coartem): 3-day course (6 doses: at 0h, 8h, 24h, 36h, 48h, 60h). For uncomplicated P. falciparum malaria. Must be taken WITH food (fat improves lumefantrine absorption). Highly effective, well-tolerated.' },
  { topic:'drug', q:'The antidote for paracetamol (acetaminophen) overdose is:', opts:['Atropine','Calcium gluconate','N-acetylcysteine (NAC)','Naloxone'], ans:2, expl:'NAC (N-acetylcysteine) = antidote for paracetamol overdose (restores glutathione, prevents hepatotoxicity). Most effective within 8–10 hours of ingestion. IV or oral route. Paracetamol overdose → hepatic necrosis; liver transplant if severe.' },
  { topic:'drug', q:'Co-amoxiclav (Amoxicillin + Clavulanic acid) is more effective than amoxicillin alone because:', opts:['Higher dose','Clavulanic acid inhibits beta-lactamase enzymes produced by resistant bacteria','Better absorption','Less side effects'], ans:1, expl:'Clavulanic acid = beta-lactamase inhibitor. Bacteria resistant to amoxicillin produce beta-lactamase enzyme that destroys the beta-lactam ring. Clavulanic acid inactivates this enzyme, restoring amoxicillin\'s effectiveness against beta-lactamase-producing organisms.' },
  { topic:'drug', q:'Folic acid supplementation for PREVENTION of neural tube defects should be started:', opts:['At first ANC visit (8–12 weeks)','At least 1 month BEFORE conception and continue through 1st trimester','After NTD is diagnosed','Only in 3rd trimester'], ans:1, expl:'Folic acid 400 mcg/day periconceptionally (at least 1 month before conception and first 3 months of pregnancy). NTDs (neural tube defects — spina bifida, anencephaly) form by Day 28 (before most women know they are pregnant). High-risk women: 5 mg/day.' },
  { topic:'drug', q:'Gentamicin in neonates is given cautiously because it can cause:', opts:['Hypoglycaemia','Ototoxicity (hearing loss) and nephrotoxicity','Hyperglycaemia','Skin rash only'], ans:1, expl:'Aminoglycosides (Gentamicin, Amikacin): ototoxic (cochlear and vestibular damage → sensorineural hearing loss) and nephrotoxic. Neonates at higher risk due to immature kidneys. Given once daily (ODD regimen) to maximise efficacy and minimise toxicity. Monitor levels if possible.' },

  /* ═══ MCH — SET 4 ═══ */
  { topic:'mch', q:'Partograph is used to monitor:', opts:['Foetal growth throughout pregnancy','Progress of labour (cervical dilation, foetal descent, maternal condition)','Nutritional status','Antenatal blood tests'], ans:1, expl:'Partograph = graphical record of progress of labour. Monitors: cervical dilation (alert/action lines), foetal head descent, uterine contractions, FHR, maternal vital signs, urine output, medications. Alert line: cervical dilation expected at 1 cm/hr. Action line: 4 hrs right of alert line.' },
  { topic:'mch', q:'SNCU (Sick Newborn Care Unit) is located at:', opts:['Sub-Centre','PHC','District Hospital and above (DH/CHC)','Anganwadi'], ans:2, expl:'SNCU (Sick Newborn Care Unit) established at district hospitals and medical college hospitals under NHM. Provides: incubators, phototherapy, IV fluids, oxygen, infection management. Level 2 care for sick neonates. NBSU (Newborn Stabilisation Unit) at CHC level.' },
  { topic:'mch', q:'Phototherapy is used in neonates for:', opts:['Hypothermia','Jaundice (neonatal hyperbilirubinaemia)','Sepsis','Respiratory distress'], ans:1, expl:'Phototherapy: blue light (wavelength 420–470 nm) converts unconjugated bilirubin in skin to water-soluble isomers excreted in bile and urine. Used for neonatal jaundice. Exchange transfusion if very high levels. Physiological jaundice: Day 2–3 to Day 7–10 in term neonates.' },
  { topic:'mch', q:'Bi-manual compression of the uterus is performed to manage:', opts:['Eclampsia','Atonic PPH when other measures fail','Placenta praevia','Malpresentation'], ans:1, expl:'Bi-manual uterine compression: internal (fist in anterior vaginal fornix) and external (other hand on abdomen) compression of uterus to manage atonic PPH when oxytocin/ergometrine/misoprostol insufficient. Maintains until uterus contracts and bleeding stops.' },
  { topic:'mch', q:'PPIUCD eligibility criteria include:', opts:['Only multiparous women','Any woman delivering vaginally or by C-section who consents and has no contraindications (PID, PROM, chorioamnionitis, PPH, uterine anomaly)','Only >35 years','Only if husband consents'], ans:1, expl:'PPIUCD eligibility: informed consent, no fever/infection, no prolonged ROM >18h, no PPH, no chorioamnionitis, no uterine abnormality, insertion by trained provider. Can be done after vaginal delivery (within 10 min of placenta) or C-section (before uterine closure).' },

  /* ═══ FAMILY PLANNING — SET 4 ═══ */
  { topic:'fp', q:'The "two-child norm" in India means:', opts:['Legal punishment for having >2 children','Government incentive schemes encourage 2-child family; no legal ban nationally','Compulsory sterilisation after 2 children','Denial of all government services after 2 children'], ans:1, expl:'India does NOT have a national two-child law. Government promotes 2-child family through incentives (more for those adopting FP after 1 child). Some states have laws barring persons with >2 children from contesting local body elections. National Population Policy 2000 promotes voluntary small family.' },
  { topic:'fp', q:'Copper IUCD contraindication includes:', opts:['Nulliparous women','Pelvic Inflammatory Disease (PID) or unexplained vaginal bleeding','Women >35 years','Women on OCP previously'], ans:1, expl:'Cu-IUCD contraindications: active PID or cervicitis, unexplained vaginal bleeding, pregnancy, uterine anomaly (fibroids distorting cavity), current STI, puerperium with complications. Relative: Wilson\'s disease, severe dysmenorrhoea, copper allergy.' },

  /* ═══ IMMUNIZATION — SET 4 ═══ */
  { topic:'immunize', q:'Meningococcal vaccine protects against which bacteria?', opts:['Streptococcus pneumoniae','Neisseria meningitidis','Haemophilus influenzae','Mycobacterium meningitis'], ans:1, expl:'Meningococcal vaccine: Neisseria meningitidis (types A, C, W135, Y — quadrivalent MenACWY). Not in India\'s UIP (used in high-risk groups, pilgrims to Mecca/Hajj, outbreak control). Type A most common in India\'s meningitis belt.' },
  { topic:'immunize', q:'India\'s Intensified Mission Indradhanush (IMI) targets:', opts:['Only polio vaccination','Full immunisation coverage for children <2 years and pregnant women in low-coverage areas','Adults above 60','Healthcare workers only'], ans:1, expl:'Mission Indradhanush (2014): Catch-up immunisation for UIP vaccines. IMI 1.0 (2017): focused on 190 high-priority districts. IMI 2.0 (2019), IMI 3.0 (2021), IMI 4.0 (2022). Target: >90% full immunisation coverage. Intensive monthly campaigns.' },
  { topic:'immunize', q:'AEFI reporting in India: a serious AEFI should be reported within:', opts:['7 days','24–48 hours to district/state level','1 month','Only at year end'], ans:1, expl:'Serious AEFI (death, hospitalisation, cluster of AEFIs, anaphylaxis) must be reported within 24–48 hours to district immunisation officer. Level 1: facility/sub-district. Level 2: district. Level 3: state. Level 4: national AEFI committee. Causality assessment done at each level.' },

  /* ═══ NUTRITION — SET 4 ═══ */
  { topic:'nutrition', q:'WHO growth standards for children use which reference population?', opts:['American children','UK children','International sample of healthy breastfed children from 6 countries (MGRS study)','Indian children only'], ans:2, expl:'WHO Multicentre Growth Reference Study (MGRS): collected data from 8440 children in 6 countries (Brazil, Ghana, India, Norway, Oman, USA) raised in optimal conditions (breastfed, non-smokers, adequate nutrition). Released 2006. Used globally including India for Z-score based nutrition assessment.' },
  { topic:'nutrition', q:'Anaemia in a 6-year-old child is defined as Hb <:', opts:['13 g/dL','12 g/dL','11.5 g/dL','10 g/dL'], ans:2, expl:'WHO Hb thresholds for anaemia: Children 5–11 years: <11.5 g/dL. Children 12–14 years: <12 g/dL. Non-pregnant women: <12 g/dL. Pregnant women: <11 g/dL. Men: <13 g/dL. Infants 6–59 months: <11 g/dL.' },
  { topic:'nutrition', q:'Mid-Day Meal (PM POSHAN) is provided under which scheme?', opts:['ICDS','PM POSHAN (formerly MDM scheme — National Programme of Nutritional Support to Primary Education)','JSSK','PMMVY'], ans:1, expl:'PM POSHAN Scheme (2021, formerly Mid-Day Meal): cooked hot meal to children in Classes 1–8 of government and government-aided schools. Calorie: 450 kcal (primary), 700 kcal (upper primary). Protein: 12g/20g. Reduces hunger, improves attendance, nutrition.' },
  { topic:'nutrition', q:'Zinc deficiency in children causes:', opts:['Megaloblastic anaemia','Growth retardation, impaired immunity, diarrhoea, skin lesions (acrodermatitis)','Night blindness only','Rickets'], ans:1, expl:'Zinc deficiency: growth retardation (2nd most important micronutrient for growth after protein), immune impairment (more infections), diarrhoea, poor wound healing, acrodermatitis enteropathica (skin lesions around mouth/eyes/genitalia), hypogonadism, anorexia.' },

  /* ═══ COMMUNICABLE DISEASES — SET 4 ═══ */
  { topic:'diseases', q:'Plague is caused by:', opts:['Yersinia pestis (transmitted by rat flea Xenopsylla cheopis)','Salmonella typhi','Vibrio cholerae','Rickettsia species'], ans:0, expl:'Plague: Yersinia pestis (gram-negative bacillus). Vector: rat flea (Xenopsylla cheopis). Reservoir: rats. Types: Bubonic (most common — enlarged inguinal lymph nodes/buboes), Septicaemic, Pneumonic (most deadly — human-to-human airborne). Treatment: Streptomycin or Doxycycline.' },
  { topic:'diseases', q:'Incubation period of rabies is:', opts:['1–3 days','10–90 days (range: 4 days–years; depends on bite site and viral load)','1–2 years always','24 hours'], ans:1, expl:'Rabies incubation: typically 20–90 days (average 1–3 months). Range: 4 days to years. Shorter if bite on face/neck (closer to CNS). Once symptoms appear (furious or dumb rabies) → 100% fatal. Only preventable by PEP before symptom onset.' },
  { topic:'diseases', q:'The National Tuberculosis Elimination Programme (NTEP) replaced RNTCP and aims to eliminate TB by:', opts:['2025 (5 years before global target of 2030)','2030','2035','2050'], ans:0, expl:'India targets TB elimination (incidence <1/million population) by 2025 — 5 years ahead of global SDG target of 2030. RNTCP → renamed NTEP in 2020. Key: Universal Drug Susceptibility Testing (UDST), private sector engagement (Ni-kshay Mitra), DRTB management.' },
  { topic:'diseases', q:'Scrub typhus is transmitted by:', opts:['Body louse','Trombiculid mites (chiggers — larval stage)','Rat flea','Tick'], ans:1, expl:'Scrub typhus: Orientia tsutsugamushi (intracellular bacterium). Vector: Trombiculid mite larvae (chiggers). Classic triad: fever + eschar at bite site + maculopapular rash. Treatment: Doxycycline. Emerging in J&K, Northeast India, Himalayas. Diagnosis: Weil-Felix, ELISA, PCR.' },
  { topic:'diseases', q:'Universal Precautions in healthcare include:', opts:['Only for HIV-positive patients','Treating ALL patient blood/body fluids as potentially infectious regardless of known diagnosis','Only for TB patients','Only hand washing'], ans:1, expl:'Universal Precautions (now "Standard Precautions"): treat ALL blood and body fluids (except sweat) as infectious regardless of patient HIV/hepatitis status. Measures: gloves, mask, gown, eye protection, safe disposal of sharps, hand hygiene. Introduced by CDC 1987 during HIV epidemic.' },

  /* ═══ NCD — SET 4 ═══ */
  { topic:'ncd', q:'Tobacco use cessation advice — the "5 As" approach stands for:', opts:['Ask, Advise, Assess, Assist, Arrange','Assess, Advise, Act, Assist, Apply','Ask, Alert, Advise, Assist, Apply','Awareness, Action, Advice, Assistance, Arrangement'], ans:0, expl:'5 As for tobacco cessation: (1) Ask: screen all patients for tobacco use; (2) Advise: urge all users to quit; (3) Assess: willingness to quit; (4) Assist: provide counselling/NRT; (5) Arrange: follow-up (1 week, 1 month). WHO recommends this framework for brief advice.' },
  { topic:'ncd', q:'NPCDCS screening for cervical cancer uses VIA. Positive VIA means:', opts:['Positive = definitely cancer','Aceto-white areas visible near transformation zone = suspect CIN/early cancer — needs colposcopy/biopsy','Negative result — no follow-up needed','Yellowish discharge present'], ans:1, expl:'VIA (Visual Inspection with 5% Acetic Acid): Positive = distinct aceto-white areas near squamo-columnar junction. Needs colposcopy → biopsy. VIA sensitivity ~70%, specificity ~85%. VILI uses Lugol\'s iodine. Both are low-tech, low-cost screening tools for low-resource settings.' },

  /* ═══ PROGRAMS — SET 4 ═══ */
  { topic:'programs', q:'IMNCI (Integrated Management of Neonatal and Childhood Illness) classifies sick children into:', opts:['Treatment groups A/B/C','Colour-coded classification: pink (outpatient treatment), yellow (inpatient treatment), green (home care)','Severity grades 1–5','Only vaccinated vs. unvaccinated'], ans:1, expl:'IMNCI classification (adaptation of WHO IMCI + neonatal component): Pink/Red = Severe (urgent referral/hospital); Yellow = Non-severe (specific treatment at facility/home); Green = Well (home care + counselling). Covers: pneumonia, diarrhoea, malaria, measles, malnutrition, ear problems in children <5 years.' },
  { topic:'programs', q:'Which is the nodal ministry for NHM (National Health Mission) in India?', opts:['Ministry of Women and Child Development','Ministry of Health and Family Welfare (MoHFW)','NITI Aayog','Ministry of Finance'], ans:1, expl:'NHM is under Ministry of Health and Family Welfare (MoHFW), Government of India. NHM has 2 sub-missions: NRHM (rural) and NUHM (urban). State Health Societies implement NHM with central/state funding (60:40 general states; 90:10 special category states).' },
  { topic:'programs', q:'ASHA incentive for facilitating male sterilisation (vasectomy) under NHM is:', opts:['₹150','₹250','₹300','₹500'], ans:1, expl:'ASHA incentives for FP (NHM): Vasectomy = ₹250; Tubectomy = ₹150 (beyond 2 children) or ₹200 (<=2 children); PPIUCD = ₹150; Interval IUCD = ₹150; PAIUCD = ₹150; Male condom distribution (per packet) = ₹1. In addition to other incentives.' },
  { topic:'programs', q:'The Pradhan Mantri Jan Arogya Yojana (PM-JAY) under Ayushman Bharat covers how many beneficiary families?', opts:['5 crore families','10.74 crore families (~50 crore beneficiaries)','50 crore families','2 crore families'], ans:1, expl:'PM-JAY: 10.74 crore (107.4 million) poorest families = bottom 40% of Indian population (~50 crore beneficiaries). Coverage: ₹5 lakh/family/year for secondary and tertiary hospitalisation. Cashless treatment at empanelled hospitals. Based on SECC 2011 data. Launched 23 Sep 2018.' },

  /* ═══ FIRST AID — SET 4 ═══ */
  { topic:'firstaid', q:'Defibrillation (electric shock) is indicated for:', opts:['All cardiac arrest','Ventricular fibrillation (VF) and pulseless Ventricular Tachycardia (pVT) only','Asystole','Bradycardia'], ans:1, expl:'AED/defibrillation: shockable rhythms = VF (chaotic electrical activity) and pVT (very rapid, no pulse). Non-shockable = Asystole (flat line) and PEA (pulseless electrical activity) — CPR only. CHAIN OF SURVIVAL: call 108 → CPR → AED → advanced care.' },
  { topic:'firstaid', q:'For a diabetic patient found unconscious, first action is:', opts:['Give insulin immediately','Check blood glucose — if low, give sugar/oral glucose if conscious; if unconscious, IV dextrose 25–50%','Give water','Do CPR immediately'], ans:1, expl:'Unconscious diabetic: assume hypoglycaemia (more common emergency than hyperglycaemia). Check glucose if glucometer available. Conscious: sugar drink/biscuits/glucose gel. Unconscious: IV 25–50% dextrose 25–50 mL OR Glucagon 1 mg IM. Then seek medical care.' },

  /* ═══ ANATOMY — SET 4 ═══ */
  { topic:'anatomy', q:'Apgar score component "Grimace" tests:', opts:['Skin colour','Reflex response to stimulation (nasal catheter/rubbing)','Breathing pattern','Heart rate'], ans:1, expl:'APGAR — Grimace = Reflex Irritability: 0 = No response; 1 = Grimace/frown; 2 = Vigorous cry/cough/sneeze. Tested by passing nasal catheter or rubbing soles. Full APGAR: Appearance + Pulse + Grimace + Activity + Respiration. Max = 10.' },
  { topic:'anatomy', q:'The hormone responsible for milk production (galactopoiesis) is:', opts:['Oxytocin','Progesterone','Prolactin (from anterior pituitary)','Oestrogen'], ans:2, expl:'Prolactin (anterior pituitary) = stimulates milk PRODUCTION. Oxytocin (posterior pituitary) = stimulates milk EJECTION (let-down reflex). Suckling stimulates both. Progesterone and oestrogen INHIBIT milk production during pregnancy despite high prolactin.' },
  { topic:'anatomy', q:'Normal range of haematocrit (PCV) in adult women is:', opts:['25–30%','36–46%','50–60%','20–25%'], ans:1, expl:'Haematocrit (PCV — packed cell volume): Adult women 36–46%; Adult men 40–52%; Newborn 44–64% (higher at birth). PCV <36% in women = anaemia. Elevated PCV = polycythaemia (high altitude, COPD, dehydration). PCV ≈ Hb × 3.' },
  { topic:'anatomy', q:'The Rh (Rhesus) factor: an Rh-negative mother carrying an Rh-positive baby risks:', opts:['No risk in first pregnancy','Haemolytic Disease of the Newborn (HDN) — mainly in subsequent Rh+ pregnancies due to maternal IgG antibodies','Only risk in C-section','Risk only if mother is blood group O'], ans:1, expl:'Rh isoimmunisation: Rh-neg mother + Rh-pos baby → foetal Rh+ RBCs enter mother\'s blood (usually at delivery) → mother makes anti-Rh IgG → crosses placenta in subsequent pregnancies → destroys foetal Rh+ RBCs → HDN (hydrops fetalis, jaundice). Prevention: Anti-D immunoglobulin within 72h of delivery/event.' },

  /* ═══ ENVIRONMENT — SET 4 ═══ */
  { topic:'environment', q:'The Minamata disease was caused by:', opts:['Lead poisoning','Mercury (methyl mercury) contamination in water and fish — Japan 1950s','Arsenic in drinking water','Cadmium poisoning'], ans:1, expl:'Minamata disease (Minimata, Japan): methylmercury poisoning from factory waste in Minamata Bay. Fish bioaccumulated mercury → people eating fish developed neurological disease (sensory disturbances, ataxia, vision/hearing loss, tremors). First environmental disease from industrial pollution.' },
  { topic:'environment', q:'Itai-Itai disease was caused by:', opts:['Mercury','Lead','Cadmium contamination from zinc smelting (Japan 1950s)','Arsenic'], ans:2, expl:'Itai-Itai disease (Japan): cadmium (Cd) poisoning from zinc smelting waste in Jinzu River. Bone softening (osteomalacia), renal tubular dysfunction, painful fractures (Itai-Itai = "ouch ouch" in Japanese). Classic occupational/environmental cadmium toxicity case.' },
  { topic:'environment', q:'WHO definition of health (1948) is:', opts:['Absence of disease','A state of complete physical, mental and social well-being — NOT merely the absence of disease or infirmity','Good physical fitness only','Ability to work productively'], ans:1, expl:'WHO 1948 definition: "Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity." Holistic concept. Spiritual dimension added later. Social determinants of health: education, income, housing, employment, social support.' },
  { topic:'environment', q:'Biomedical waste segregation: liquid waste (blood, body fluids) should be disinfected with:', opts:['Bleaching powder 1% (chlorine 5000 ppm) for 30 min contact time','Boiling only','UV light','Nothing needed'], ans:0, expl:'Liquid biomedical waste (blood, body fluids, secretions): disinfect with 1% bleaching powder (or 5000 ppm sodium hypochlorite) for 30 minutes, then drain into sewer. Sharps: hub-cutter at point of use → white container. Solid contaminated waste → yellow bag → incineration.' },

  /* ═══ STATS — SET 4 ═══ */
  { topic:'stats', q:'The "epidemiological triad" consists of:', opts:['Agent, Host, Vector','Agent, Host, Environment','Incubation, Transmission, Recovery','Infection, Disease, Death'], ans:1, expl:'Epidemiological triad (classic model): Agent (causative organism/factor) + Host (susceptible individual) + Environment (facilitating factors). Disease occurs when balance is disturbed. For NCDs: expanded to web of causation (multiple interacting factors).' },
  { topic:'stats', q:'Surveillance in public health means:', opts:['Watching patients in hospital','Ongoing systematic collection, analysis, and interpretation of health data for planning and action','Investigating outbreaks only','Annual health survey'], ans:1, expl:'Surveillance = "Information for Action." Ongoing, systematic: collection → analysis → interpretation → dissemination → action. Types: passive (routine reporting), active (case-finding), sentinel, syndromic. India: IDSP (Integrated Disease Surveillance Programme) coordinates national surveillance.' },
  { topic:'stats', q:'The Maternal Mortality Ratio (MMR) India target under SDG 3 is:', opts:['<10 per 1,00,000 live births','<70 per 1,00,000 live births by 2030','<200 per 1,00,000','<50 per 1,00,000'], ans:1, expl:'SDG 3.1: Reduce global MMR to <70 per 1,00,000 live births by 2030. India NHP 2017 target: MMR <100 by 2020 (achieved: MMR = 97, SRS 2018–20). India MMR decline: 254 (2004–06) → 97 (2018–20) — significant progress.' },

  /* ═══ DRUG — SET 4 ═══ */
  { topic:'drug', q:'Hepatitis B vaccination schedule in infants (EPI/UIP schedule) is:', opts:['Only 1 dose at birth','0, 1, 6 months (3 doses)','3 doses via Pentavalent at 6, 10, 14 weeks (+ birth dose = 4 doses total)','Annual dose'], ans:2, expl:'India UIP HepB schedule: Dose 0 at birth (within 24h, monovalent HepB) + 3 doses via Pentavalent vaccine at 6, 10, 14 weeks = total 4 doses. Birth dose critical for MTCT prevention. Anti-HBs ≥10 mIU/mL = protective (check in high-risk groups).' },
  { topic:'drug', q:'Digoxin toxicity signs include:', opts:['Hypertension, bradycardia, yellow-green vision (xanthopsia)','Only tachycardia','Only nausea','Hypoglycaemia'], ans:0, expl:'Digoxin toxicity (narrow therapeutic index): GI (nausea, vomiting, anorexia), cardiac (bradycardia, heart block, ventricular arrhythmias), CNS (confusion, fatigue), visual (xanthopsia = yellow-green tinging of vision, halos). Toxicity enhanced by hypokalaemia (diuretics). Antidote: Digoxin-specific Fab antibodies.' },
  { topic:'drug', q:'Which drug is used to treat scabies?', opts:['Permethrin 5% cream (drug of choice) or oral Ivermectin','Gentian violet','Calamine lotion','Clotrimazole cream'], ans:0, expl:'Scabies (Sarcoptes scabiei mite): Permethrin 5% cream applied to whole body (neck to toe) overnight, wash off in morning — first-line. Repeat after 1 week. Oral Ivermectin (200 mcg/kg) = alternative, especially for crusted scabies or large outbreaks. All household contacts treated simultaneously.' },
  { topic:'drug', q:'ORS should NOT be used in which condition?', opts:['Mild diarrhoea','Profuse watery diarrhoea','Paralytic ileus (no bowel sounds, distension) or persistent vomiting preventing oral intake','Moderate dehydration'], ans:2, expl:'ORS contraindications: paralytic ileus (absent bowel sounds, abdominal distension), intractable vomiting (can\'t retain fluid orally), unconsciousness. In these cases: IV Ringer\'s Lactate (Plan C). ORS = first-line for all other dehydration (mild, moderate, severe if can drink).' },
  { topic:'drug', q:'Dose of Vitamin A given to a child aged 12–59 months is:', opts:['50,000 IU','1,00,000 IU','2,00,000 IU','5,00,000 IU'], ans:2, expl:'Vitamin A supplementation (VAS): 9 months: 1,00,000 IU (with MR vaccine); 12 months onwards every 6 months until 5 years: 2,00,000 IU. For VAD treatment: 2,00,000 IU on Day 1, Day 2, and Day 14. SAM children with VAD: same therapeutic dose.' },
  { topic:'drug', q:'Metronidazole (Flagyl) is the drug of choice for:', opts:['Malaria','Amoebiasis, giardiasis, anaerobic infections, trichomoniasis','Tuberculosis','Fungal infections'], ans:1, expl:'Metronidazole: intestinal amoebiasis, amoebic liver abscess, giardiasis, trichomoniasis, anaerobic bacterial infections (BV, C. difficile, dental infections). Mechanism: nitroreduction by anaerobes/parasites → toxic metabolites damage DNA. Avoid alcohol (disulfiram-like reaction). Safe in 2nd/3rd trimester pregnancy.' },

  /* ═══ FINAL BATCH — HIGH-YIELD MIXED ═══ */
  { topic:'mch', q:'Under RMNCH+A strategy, the target for institutional delivery rate is:', opts:['50%','75%','90% and above','100%'], ans:2, expl:'India\'s target under NHM/RMNCH+A: ≥90% institutional deliveries. India achieved ~89% (NFHS-5). Institutional delivery reduces maternal and neonatal mortality by ensuring skilled birth attendance, emergency obstetric care, and immediate newborn care.' },
  { topic:'mch', q:'Symphysiotomy is performed when:', opts:['Normal delivery expected','Obstructed labour due to cephalopelvic disproportion where C-section not feasible','PPH management','Placenta praevia'], ans:1, expl:'Symphysiotomy = surgical division of pubic symphysis to widen pelvis in obstructed labour when C-section not possible (remote area, no anaesthesia). Increases pelvic diameter 1.5–2 cm. Rarely used now. Complications: urinary tract injury, pain, walking difficulty.' },
  { topic:'fp', q:'A woman who has had tubectomy can resume sexual activity after:', opts:['2 days','2 weeks (after wound heals)','3 months','6 months'], ans:1, expl:'After tubectomy: wound healing ~1 week; resume sexual intercourse after ~2 weeks (once wound healed). No effect on libido, hormone levels, or menstruation. Immediate and permanent protection against pregnancy. Failure rate <0.5/100 woman-years.' },
  { topic:'immunize', q:'Number of antigens in Pentavalent vaccine:', opts:['3','4','5','6'], ans:2, expl:'Pentavalent = 5 antigens: Diphtheria toxoid + Pertussis (killed) + Tetanus toxoid + Hepatitis B (HBsAg) + Hib (Haemophilus influenzae type b polysaccharide conjugate). 0.5 mL IM. Replaces DPT + HepB + Hib as separate injections — reduces total injections.' },
  { topic:'nutrition', q:'India\'s National Iodine Deficiency Disorders Control Programme aims for:', opts:['100% iodised salt at 15 ppm','Universal Salt Iodisation (30 ppm at production, 15 ppm at consumer level)','Iodine tablets for all','Iodine injection annually'], ans:1, expl:'NIDDCP (National Iodine Deficiency Disorders Control Programme) = universal salt iodisation (USI). Ban on non-iodised salt. Goal: IDD elimination in all districts. India has made great progress; some pockets in Himalayan states remain deficient.' },
  { topic:'diseases', q:'The causative organism of syphilis is:', opts:['Neisseria gonorrhoeae','Treponema pallidum','Chlamydia trachomatis','Haemophilus ducreyi'], ans:1, expl:'Syphilis: Treponema pallidum (spirochaete). Stages: Primary (painless chancre), Secondary (rash on palms/soles, condylomata lata), Latent, Tertiary (gumma, CVS, neuro). Congenital syphilis. Diagnosis: VDRL (screening); TPHA/FTA-ABS (confirmatory). Treatment: Penicillin G.' },
  { topic:'diseases', q:'Gonorrhoea in pregnancy, if untreated, can cause:', opts:['Congenital rubella syndrome','Ophthalmia neonatorum (gonococcal conjunctivitis) in newborn','Neural tube defects','LBW only'], ans:1, expl:'Gonorrhoea (Neisseria gonorrhoeae): infects newborn eyes during vaginal delivery → gonococcal ophthalmia neonatorum (purulent discharge 2–5 days after birth). Prevention: prophylactic eye drops (1% silver nitrate, or tetracycline/erythromycin eye ointment) at birth. Untreated → blindness.' },
  { topic:'ncd', q:'The NTCP (National Tobacco Control Programme) includes:', opts:['Only smoking cessation clinics','Tobacco taxation, public awareness, smoking bans (COTPA), cessation services, monitoring','Only advertising bans','Only enforcement'], ans:1, expl:'NTCP (2007): Comprehensive tobacco control using MPOWER framework (WHO): Monitor use, Protect from smoke, Offer cessation, Warn about dangers, Enforce bans on advertising, Raise taxes. India\'s COTPA 2003: ban on smoking in public places, no advertising, pictorial health warnings.' },
  { topic:'programs', q:'RBSK (Rashtriya Bal Swasthya Karyakram) provides health screening for children aged:', opts:['0–6 years at AWCs and 6–18 years at schools','Only 6–18 years','Only 0–1 year','Only at birth'], ans:0, expl:'RBSK (2013): health screening and early intervention for children 0–18 years. 0–6 years at AWC/home visits; 6–18 years at government schools. Screens for 4 Ds: Defects at birth, Diseases, Deficiencies, Development delays and Disabilities. Referral to DEIC (District Early Intervention Centre).' },
  { topic:'programs', q:'Under NHM, ASHAs must complete which training?', opts:['No training required','7 modules of training (total ~23 days) with regular refresher training','Only 1-day orientation','Only for family planning topics'], ans:1, expl:'ASHA training: 7 modules (Health communication; MCH; Family planning; Immunisation; Common illness; RMNCH+A; Social mobilisation). Total ~23 days in phased manner. Training conducted by ANM/LHV/PHC MO. ASHA certification exam in some states. Refresher training regularly.' },
  { topic:'firstaid', q:'For a patient with suspected myocardial infarction (heart attack) in the community, first aid includes:', opts:['Give nothing and wait for ambulance','Call emergency services + make patient comfortable (semi-reclined) + aspirin 300 mg if no allergy + early defibrillation if arrested','Give water only','Vigorous exercise to improve circulation'], ans:1, expl:'MI first aid: (1) Call emergency/108; (2) Patient sits or semi-reclines comfortably; (3) Aspirin 300 mg chewed (antiplatelet); (4) Sublingual GTN if available and not hypotensive; (5) CPR + AED if cardiac arrest. Time is muscle — STEMI: PCI within 90 min.' },
  { topic:'firstaid', q:'Correct management of epistaxis (nosebleed) is:', opts:['Tilt head back and pinch nose','Lean forward slightly, pinch soft part of nose for 10–15 minutes, breathe through mouth','Blow nose vigorously','Apply cold compress to back of neck only'], ans:1, expl:'Epistaxis first aid: Sit UPRIGHT and lean FORWARD (prevents blood going to throat → vomiting/aspiration). Pinch soft part of nose (not bony part) continuously for 10–15 minutes. Breathe through mouth. Ice pack on nose bridge. If bleeding >20 min or recurrent → medical attention.' },
  { topic:'anatomy', q:'The pituitary gland ("master gland") is located:', opts:['In the neck','In the sella turcica of the sphenoid bone (base of brain)','In the abdomen','Behind the sternum'], ans:1, expl:'Pituitary gland = "master gland" = in sella turcica (hypophyseal fossa) of sphenoid bone. Anterior pituitary (adenohypophysis): GH, TSH, ACTH, FSH, LH, prolactin. Posterior pituitary (neurohypophysis): oxytocin, ADH (vasopressin) — produced in hypothalamus, stored/released in posterior pituitary.' },
  { topic:'anatomy', q:'The hormone oestrogen is primarily produced by:', opts:['Adrenal gland','Ovarian follicles (theca and granulosa cells)','Thyroid gland','Pituitary gland'], ans:1, expl:'Oestrogen (oestradiol, oestrone, oestriol): primarily produced by granulosa cells of ovarian follicles (under FSH stimulation). Also produced by: placenta (oestriol — pregnancy marker), adrenal cortex, adipose tissue (oestrone). Functions: endometrial proliferation, secondary sexual characteristics, bone protection.' },
  { topic:'environment', q:'The greenhouse gas most responsible for global warming is:', opts:['Oxygen','Carbon Dioxide (CO2) — responsible for ~64% of enhanced greenhouse effect','Nitrogen','Argon'], ans:1, expl:'CO2 = most important greenhouse gas for global warming (64% contribution) due to sheer volume from fossil fuel combustion. Other GHGs: methane (CH4, 17%), nitrous oxide (N2O, 6%), fluorinated gases. Water vapour is most abundant natural GHG but not directly human-caused.' },
  { topic:'stats', q:'Randomised Controlled Trial (RCT) is considered the gold standard for:', opts:['Disease prevalence studies','Evaluating effectiveness of interventions (treatments, vaccines, programmes)','Measuring disease burden','Assessing risk factors retrospectively'], ans:1, expl:'RCT = gold standard for causal inference in intervention studies. Random allocation eliminates selection bias; blinding reduces measurement bias. Measures: RR, ARR, NNT, RRR. Hierarchy of evidence: Meta-analysis/SR > RCT > Cohort > Case-control > Cross-sectional > Case reports.' },
  { topic:'stats', q:'Under-5 Mortality Rate (U5MR) in India as per NFHS-5 (2019-21) is:', opts:['10/1000','32/1000 live births','50/1000','75/1000'], ans:1, expl:'U5MR (NFHS-5, 2019-21) = 32 per 1000 live births. Neonatal (0–28 days) = 24.9; Post-neonatal = 7.1. Rural = 36; Urban = 21. SDG target: U5MR ≤25 by 2030. Main causes: preterm birth, birth asphyxia, pneumonia, diarrhoea, malnutrition.' },
  { topic:'drug', q:'Antenatal corticosteroids (Betamethasone/Dexamethasone) in preterm labour are given to:', opts:['Reduce maternal blood pressure','Accelerate foetal lung maturity (surfactant production) and reduce neonatal RDS in preterm babies','Prevent PPH','Stop uterine contractions'], ans:1, expl:'Antenatal corticosteroids: Betamethasone 12 mg IM × 2 doses 24h apart (or Dexamethasone 6 mg × 4 doses 12h apart). Given at 24–34 weeks when preterm birth expected within 7 days. Reduces: RDS (respiratory distress syndrome), IVH, NEC, neonatal death by 30–50%.' },
  { topic:'drug', q:'Oral Rehydration Therapy (ORT) principle is based on:', opts:['Antibiotics kill the causative organism','Sodium-glucose co-transport in the gut actively absorbs water even during diarrhoea (works even when diarrhoea secretory)','Sugar prevents dehydration','Rice water is sufficient'], ans:1, expl:'ORT principle: sodium-glucose co-transporter (SGLT1) in intestinal epithelium couples Na+ and glucose absorption. This transporter functions EVEN in secretory diarrhoea when other Na+ absorption is impaired. Co-absorption of glucose + Na+ → water follows osmotically → rehydration.' },
  { topic:'mch', q:'WHO\'s "Baby-Friendly Hospital Initiative" (BFHI) promotes:', opts:['Formula feeding','10 steps to successful breastfeeding — exclusive breastfeeding support in hospitals','Mixed feeding','Early introduction of solid foods'], ans:1, expl:'BFHI (WHO/UNICEF 1991): 10 steps including: written breastfeeding policy; staff training; colostrum feeding; rooming-in; breastfeeding on demand; no pacifiers/artificial teats; no free formula samples. Hospitals certified as "Baby-Friendly" if they follow all 10 steps.' },
  { topic:'immunize', q:'The "Universal Immunisation Programme" (UIP) in India was launched in:', opts:['1974','1978','1985','1992'], ans:2, expl:'UIP launched in India 1985 (expanded from EPI of 1978 which itself started in 1974 as pilot). UIP initially covered 6 diseases: TB, diphtheria, pertussis, tetanus, polio, typhoid (typhoid dropped later). Now covers 12 diseases. Goal: full immunisation of every child <1 year.' },
  { topic:'nutrition', q:'Growth monitoring of children is done using:', opts:['Road-to-Health Card (growth chart with weight-for-age)','Blood test only','Urine test','X-ray of bones'], ans:0, expl:'Growth monitoring: weight plotted on Road-to-Health Chart (growth chart). Below reference line = underweight. Flat line = faltering. Done monthly 0–12 months, then 3-monthly. ICDS AWW weighs children at AWC. WHO growth charts used from 2007 (replacing NCHS charts).' },
  { topic:'diseases', q:'Respiratory hygiene/cough etiquette includes:', opts:['Coughing into open air','Cover mouth and nose with tissue/elbow when coughing/sneezing; dispose tissue; hand hygiene','Only wear surgical mask at home','Cough into hands and continue work'], ans:1, expl:'Respiratory hygiene: cover mouth/nose with tissue or inside of elbow (not hands) when coughing/sneezing; dispose used tissue in bin; perform hand hygiene immediately. Reduces spread of respiratory infections (TB, influenza, COVID-19, whooping cough).' },
  { topic:'ncd', q:'Chronic Obstructive Pulmonary Disease (COPD) is primarily caused by:', opts:['Viral infection','Long-term exposure to tobacco smoke and air pollutants (biomass fuel in India)','Genetic causes alone','Bacterial infection'], ans:1, expl:'COPD: irreversible airflow limitation. Main cause in India: tobacco smoking (40%) + biomass fuel combustion (indoor air pollution from cooking — chulha/firewood) especially in rural women. Symptoms: chronic cough, sputum, progressive dyspnoea. Diagnosed by spirometry (FEV1/FVC <0.7).' },
  { topic:'programs', q:'SNEHEE (Sabhi Nasha Harein, Employ & Empower) is related to:', opts:['TB control','School nutrition','Substance abuse de-addiction and rehabilitation','Adolescent health only'], ans:2, expl:'Substance use/addiction control is addressed under NMHP (National Mental Health Programme) and Ministry of Social Justice\'s National Action Plan for Drug Demand Reduction (NAPDDR). Mental health and de-addiction services integrated into HWCs (Health & Wellness Centres) under Ayushman Bharat.' },
  { topic:'firstaid', q:'For a patient with suspected stroke (FAST signs), correct action is:', opts:['Wait to see if symptoms resolve','Call emergency services immediately — "Time is brain" — get to hospital for thrombolysis within 4.5 hours','Give aspirin and observe at home','Make patient exercise'], ans:1, expl:'FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency. Ischaemic stroke: IV thrombolysis (tPA) within 4.5 hours of symptom onset. Every 1 minute of stroke = 1.9 million neurons lost. "Time is brain." Do NOT give aspirin without CT scan (may be haemorrhagic).' },
  { topic:'anatomy', q:'Colostrum differs from mature breast milk in that it contains:', opts:['More carbohydrates and less protein','More protein, IgA, white cells; less fat and lactose; yellowish colour','Same composition but less volume','More fat only'], ans:1, expl:'Colostrum (days 1–3): yellowish, thick, small volume (2–20 mL/feed). HIGH protein (especially secretory IgA — passive immunity), lactoferrin, leukocytes, growth factors, Vitamin A. LOW fat and lactose. Transitional milk (day 4–14) → mature milk (Day 14+) has more fat and lactose.' },
  { topic:'environment', q:'The recommended household toilet coverage to achieve ODF (Open Defecation Free) status under SBM is:', opts:['50% households','75% households','100% of households have and USE toilets','Only above poverty line families'], ans:2, expl:'ODF = 100% of population defecating in toilets/latrines — NO open defecation. SBM goal: build toilets + ensure usage behaviour change. India declared ODF in Oct 2019 (self-declared by all states). ODF+ includes hand washing with soap. Community-Led Total Sanitation (CLTS) approach used.' },
  { topic:'stats', q:'Which study design best establishes causality?', opts:['Cross-sectional study','Case-control study','Randomised Controlled Trial (RCT)','Case report'], ans:2, expl:'Hierarchy of evidence for causality: RCT (gold standard) > Cohort study > Case-control > Cross-sectional > Case report/series > Expert opinion. RCT eliminates confounding through randomisation; allows temporal sequence (cause precedes effect); controls bias. Meta-analysis of multiple RCTs = highest level.' },
  { topic:'drug', q:'The correct dose of oral Vitamin A for treatment of measles in a child 12–59 months is:', opts:['50,000 IU','1,00,000 IU','2,00,000 IU × 2 days','2,00,000 IU once only'], ans:2, expl:'WHO recommendation for Vitamin A in measles (all children): 2,00,000 IU/day for 2 days. Reduces measles mortality and complications (corneal ulceration, pneumonia). Give to all measles cases regardless of VAD status. Also given in acute diarrhoea in malnourished children.' },
];

/* ──────────────────── MOCK PAPERS ──────────────────── */
const MOCK_PAPERS = [
  { id:'m1', title:'Mock Paper 1', subtitle:'Based on JKSSB 2022 Pattern', tags:['General MCH','Immunization','Programs'], qs: null },
  { id:'m2', title:'Mock Paper 2', subtitle:'Based on JKSSB 2021 Pattern', tags:['Diseases','Nutrition','First Aid'], qs: null },
  { id:'m3', title:'Mock Paper 3', subtitle:'Full Syllabus Mix', tags:['All Topics','Random','Timed'], qs: null },
  { id:'m4', title:'Mock Paper 4', subtitle:'Focus: Health Programs + Stats', tags:['Programs','Stats','Environment'], qs: null },
];

function buildMockPaper(paper) {
  if (paper.qs) return paper.qs;
  const pool = [...QUESTIONS].sort(() => Math.random() - 0.5);
  paper.qs = pool.slice(0, Math.min(100, pool.length));
  return paper.qs;
}

/* ──────────────────── NOTES ──────────────────── */
const NOTES = {
  mch:`<h3>Maternal & Child Health (MCH)</h3>
<h4>ANC Schedule (India RMNCH+A — minimum 4 visits)</h4>
<table><tr><th>Visit</th><th>Timing</th><th>Key Services</th></tr>
<tr><td>1st</td><td>Within 12 weeks</td><td>Register, BP, weight, blood tests (Hb, blood group, VDRL, HIV, blood sugar), IFA start, TT1</td></tr>
<tr><td>2nd</td><td>14–26 weeks</td><td>Fundal height, foetal heart sounds, TT2, de-worming</td></tr>
<tr><td>3rd</td><td>28–34 weeks</td><td>Check Hb, complications, birth plan</td></tr>
<tr><td>4th</td><td>36 weeks+</td><td>Presentation, engagement, delivery planning</td></tr></table>
<div class="kp">⭐ WHO 2016: Minimum 8 ANC contacts. India target: 4 ANCs (shifting to 8 contacts).</div>
<h4>IFA Supplementation</h4>
<table><tr><th>Group</th><th>Dose</th><th>Duration</th></tr>
<tr><td>Pregnant women</td><td>1 IFA (100 mg Fe + 0.5 mg FA) daily</td><td>180 days</td></tr>
<tr><td>Adolescent girls</td><td>Weekly IFA (WIFS)</td><td>School year</td></tr>
<tr><td>Children 6–59 months</td><td>Iron syrup 1 mg/kg/day</td><td>As per protocol</td></tr></table>
<h4>Danger Signs in Pregnancy</h4>
<ul><li>Severe headache + blurred vision (pre-eclampsia)</li><li>Swelling of face/hands</li><li>Vaginal bleeding</li><li>Fits/convulsions (eclampsia)</li><li>Reduced/absent foetal movements</li><li>High fever</li><li>Severe abdominal pain</li></ul>
<div class="kp">⭐ Eclampsia treatment: Magnesium sulphate (Pritchard regimen) + antihypertensives + urgent delivery.</div>
<h4>Newborn Care</h4>
<ul><li>Immediate: Dry & warm, delayed cord clamping (1–3 min), breastfeeding within 1 hour</li><li>APGAR: 0–3 severe, 4–6 moderate, 7–10 normal</li><li>LBW (<2500 g): KMC, expressed breastmilk</li></ul>
<h4>APGAR Score (A-P-G-A-R)</h4>
<table><tr><th>Sign</th><th>0</th><th>1</th><th>2</th></tr>
<tr><td>Appearance (colour)</td><td>Blue/pale all over</td><td>Blue extremities</td><td>Completely pink</td></tr>
<tr><td>Pulse (heart rate)</td><td>Absent</td><td><100/min</td><td>≥100/min</td></tr>
<tr><td>Grimace (reflex)</td><td>No response</td><td>Grimace</td><td>Cry/cough</td></tr>
<tr><td>Activity (muscle tone)</td><td>Limp</td><td>Some flexion</td><td>Active motion</td></tr>
<tr><td>Respiration</td><td>Absent</td><td>Weak/irregular</td><td>Strong cry</td></tr></table>`,

  fp:`<h3>Family Planning</h3>
<h4>Contraceptive Methods Comparison</h4>
<table><tr><th>Method</th><th>Pearl Index</th><th>Key Facts</th></tr>
<tr><td>Vasectomy</td><td>0.1</td><td>Permanent male, No-scalpel technique</td></tr>
<tr><td>Tubectomy</td><td>0.5</td><td>Permanent female, laparoscopic/minilaparotomy</td></tr>
<tr><td>Cu-T 380A</td><td>0.5–1</td><td>10 years effective, copper spermicidal</td></tr>
<tr><td>DMPA (Antara)</td><td>0.3</td><td>Every 3 months IM, disrupts periods</td></tr>
<tr><td>Combined OCP</td><td>0.1–1</td><td>Daily pill, take with evening meal</td></tr>
<tr><td>Chhaya (Centchroman)</td><td>1–2</td><td>Weekly, non-hormonal SERM</td></tr>
<tr><td>Male condom</td><td>2–15</td><td>Only method protecting against STI/HIV</td></tr>
<tr><td>LAM</td><td>0.5</td><td>EBF + amenorrhoea + baby <6 months</td></tr></table>
<div class="kp">⭐ Pearl Index = pregnancies per 100 woman-years. LOWER = MORE effective.</div>
<h4>New Contraceptives in India's FP Programme</h4>
<ul><li><strong>Antara:</strong> DMPA injectable (150 mg/3 months) — 2017</li><li><strong>Chhaya:</strong> Weekly centchroman — non-hormonal</li><li><strong>PPIUCD:</strong> Within 48h of delivery or at 6 weeks</li><li><strong>PAIUCD:</strong> Immediately post-abortion</li></ul>
<h4>Emergency Contraception</h4>
<ul><li>Levonorgestrel 1.5 mg: within 72 hours (95%→85%→58% efficacy)</li><li>Cu-IUCD: within 5 days — most effective (>99%)</li><li>Ulipristal: within 120 hours</li></ul>`,

  immunize:`<h3>Immunization — UIP (Universal Immunisation Programme)</h3>
<h4>National Immunisation Schedule</h4>
<table><tr><th>Age</th><th>Vaccines</th></tr>
<tr><td>At Birth</td><td>BCG (ID left arm) + OPV-0 (oral) + HepB-0 (IM right thigh)</td></tr>
<tr><td>6 weeks</td><td>Pentavalent-1 + OPV-1 + Rota-1 + fIPV-1 (ID) + PCV-1</td></tr>
<tr><td>10 weeks</td><td>Pentavalent-2 + OPV-2 + Rota-2</td></tr>
<tr><td>14 weeks</td><td>Pentavalent-3 + OPV-3 + Rota-3 + fIPV-2 + PCV-2</td></tr>
<tr><td>9–12 months</td><td>MR-1 (SC) + Vit A 1,00,000 IU + JE-1* + PCV Booster</td></tr>
<tr><td>16–24 months</td><td>DPT-B1 + OPV-B + MR-2 + JE-2* + Vit A 2,00,000 IU</td></tr>
<tr><td>5–6 years</td><td>DPT-B2</td></tr>
<tr><td>10 & 16 years</td><td>Td (Tetanus-Diphtheria)</td></tr></table>
<p style="font-size:.78rem;color:#94a3b8">*JE vaccine in endemic areas only</p>
<div class="kp">⭐ India declared POLIO-FREE: 27 March 2014 | Smallpox eradicated globally: 1980 | India declared MNT (Maternal & Neonatal Tetanus) eliminated: 2015</div>
<h4>Cold Chain Equipment</h4>
<table><tr><th>Equipment</th><th>Temperature</th><th>Use</th></tr>
<tr><td>Deep Freezer</td><td>-15°C to -25°C</td><td>OPV storage</td></tr>
<tr><td>ILR (Ice-Lined Refrigerator)</td><td>+2°C to +8°C</td><td>All vaccines storage (OPV in freezer part)</td></tr>
<tr><td>Cold Box</td><td>+2°C to +8°C</td><td>Transport 48–72 hours</td></tr>
<tr><td>Vaccine Carrier</td><td>+2°C to +8°C</td><td>Outreach sessions (4 hours)</td></tr></table>
<div class="kp">⭐ NEVER freeze: DPT, HepB, Pentavalent (freeze-sensitive — become ineffective). VVM: usable when inner square LIGHTER than outer circle.</div>`,

  nutrition:`<h3>Nutrition</h3>
<h4>Deficiency Diseases — Quick Reference</h4>
<table><tr><th>Nutrient</th><th>Disease</th><th>Key Signs</th></tr>
<tr><td>Vitamin A</td><td>Xerophthalmia</td><td>Night blindness, Bitot's spots, keratomalacia</td></tr>
<tr><td>Vitamin B1</td><td>Beriberi</td><td>Wet: heart failure; Dry: neuropathy</td></tr>
<tr><td>Vitamin B3 (Niacin)</td><td>Pellagra</td><td>3Ds: Dermatitis, Diarrhoea, Dementia</td></tr>
<tr><td>Vitamin B12/Folate</td><td>Megaloblastic anaemia, NTDs</td><td>Large RBCs; neural tube defects in fetus</td></tr>
<tr><td>Vitamin C</td><td>Scurvy</td><td>Bleeding gums, perifollicular haemorrhage</td></tr>
<tr><td>Vitamin D</td><td>Rickets (child), Osteomalacia (adult)</td><td>Bow legs, rachitic rosary</td></tr>
<tr><td>Iron</td><td>Iron deficiency anaemia</td><td>Pallor, koilonychia, pica, fatigue</td></tr>
<tr><td>Iodine</td><td>IDD: Goitre, Cretinism</td><td>Enlarged thyroid, hypothyroidism</td></tr>
<tr><td>Protein (mainly)</td><td>Kwashiorkor</td><td>Oedema, moon face, flaky skin — NO wasting</td></tr>
<tr><td>Calorie + Protein</td><td>Marasmus</td><td>Severe wasting, no oedema, old-man face</td></tr></table>
<div class="kp">⭐ MUAC: SAM <11.5 cm (red) | MAM 11.5–12.5 cm (yellow) | Normal ≥12.5 cm (green)</div>
<h4>National Nutrition Programmes</h4>
<ul><li><strong>ICDS:</strong> 6 services through Anganwadi centres</li><li><strong>POSHAN Abhiyaan (2018):</strong> Nutrition Mission — reduce stunting/undernutrition 2%/year</li><li><strong>Anaemia Mukt Bharat:</strong> 6×6×6 strategy</li><li><strong>PM POSHAN (Mid-Day Meal):</strong> Classes 1–8</li></ul>`,

  diseases:`<h3>Communicable Diseases</h3>
<h4>Vector-borne Diseases</h4>
<table><tr><th>Disease</th><th>Vector</th><th>Agent</th><th>Key Feature</th></tr>
<tr><td>Malaria</td><td>Female Anopheles</td><td>Plasmodium</td><td>Fever every 48h (vivax) / 72h (malariae)</td></tr>
<tr><td>Dengue</td><td>Aedes aegypti (day)</td><td>DENV 1–4</td><td>Rash, thrombocytopenia, DHF</td></tr>
<tr><td>Kala-azar</td><td>Sandfly (Phlebotomus)</td><td>L. donovani</td><td>Splenomegaly, fever, weight loss</td></tr>
<tr><td>Filaria</td><td>Culex mosquito</td><td>W. bancrofti</td><td>Lymphoedema, elephantiasis</td></tr>
<tr><td>JE</td><td>Culex tritaeniorhynchus</td><td>JE virus</td><td>Encephalitis, pig/bird reservoir</td></tr>
<tr><td>Plague</td><td>Rat flea (Xenopsylla)</td><td>Y. pestis</td><td>Bubonic, pneumonic, septicaemic</td></tr></table>
<h4>TB Quick Facts</h4>
<ul><li>India: 26% global TB burden (highest)</li><li>Transmission: Airborne droplet nuclei (<5 μm)</li><li>Diagnosis: CBNAAT/TrueNat + AFB smear</li><li>Treatment DS-TB: 2HRZE + 4HR (6 months DOTS)</li><li>MDR-TB: resistant to Rifampicin + Isoniazid</li><li>Nikshay Poshan Yojana: ₹500/month to TB patients</li></ul>
<div class="kp">⭐ Goal: TB-Free India by 2025 (5 years before global target of 2030)</div>`,

  ncd:`<h3>Non-Communicable Diseases</h3>
<h4>Diagnostic Criteria</h4>
<table><tr><th>Condition</th><th>Diagnostic Cut-off</th></tr>
<tr><td>Hypertension (WHO/JNC-8)</td><td>BP ≥140/90 mmHg</td></tr>
<tr><td>Diabetes — FPG</td><td>≥126 mg/dL on two occasions</td></tr>
<tr><td>Diabetes — Random PG</td><td>≥200 mg/dL + symptoms</td></tr>
<tr><td>Diabetes — HbA1c</td><td>≥6.5%</td></tr>
<tr><td>Pre-diabetes (IFG)</td><td>FPG 100–125 mg/dL</td></tr>
<tr><td>Obesity (BMI)</td><td>≥25 kg/m² (Asian cut-off) or ≥30 kg/m² (WHO general)</td></tr></table>
<h4>NCD Screening at HWCs</h4>
<ul><li>Hypertension screening (BP measurement)</li><li>Diabetes screening (blood glucose)</li><li>Oral cancer: oral examination</li><li>Breast cancer: clinical breast examination</li><li>Cervical cancer: VIA (Visual Inspection with Acetic Acid)</li></ul>
<div class="kp">⭐ HPV vaccine: Cervarix (types 16+18) or Gardasil (6,11,16,18). Given to girls 9–14 years before sexual debut for cervical cancer prevention.</div>`,

  programs:`<h3>National Health Programmes</h3>
<h4>Health System Infrastructure (IPHS Norms)</h4>
<table><tr><th>Facility</th><th>Population (plains/hilly)</th><th>Staff</th><th>Beds</th></tr>
<tr><td>Sub-Centre (SC)</td><td>5,000 / 3,000</td><td>1 ANM + 1 MHW</td><td>—</td></tr>
<tr><td>PHC</td><td>30,000 / 20,000</td><td>1 MO + 14 para-medical</td><td>6</td></tr>
<tr><td>CHC (FRU)</td><td>1,20,000 / 80,000</td><td>4 specialists</td><td>30</td></tr>
<tr><td>SDH</td><td>5–6 lakh</td><td>—</td><td>60–200</td></tr>
<tr><td>DH</td><td>10–20 lakh</td><td>—</td><td>100–500</td></tr></table>
<h4>Key Schemes at a Glance</h4>
<table><tr><th>Scheme</th><th>Year</th><th>Benefit</th></tr>
<tr><td>JSY</td><td>2005</td><td>Cash for institutional delivery (BPL)</td></tr>
<tr><td>JSSK</td><td>2011</td><td>Free delivery, drugs, diet, transport at govt hospitals</td></tr>
<tr><td>PMMVY</td><td>2017</td><td>₹5,000 to first-child mothers (3 instalments)</td></tr>
<tr><td>PMSMA</td><td>2016</td><td>Free ANC by specialists on 9th of every month</td></tr>
<tr><td>PM-JAY</td><td>2018</td><td>₹5 lakh/family/year for hospitalisation (bottom 40%)</td></tr>
<tr><td>NHM</td><td>2005/2013</td><td>ASHA, RKS, untied funds, VHND, HWCs</td></tr></table>
<div class="kp">⭐ ASHA minimum qualifications: 8th pass (earlier), now 10th pass preferred. Must be married/widowed/divorced, age 25–45, from same village.</div>`,

  firstaid:`<h3>First Aid & Emergency Care</h3>
<h4>Basic Life Support (BLS) — CPR</h4>
<ul><li><strong>DRSABCD:</strong> Danger → Response → Send for help → Airway → Breathing → CPR → Defibrillation</li><li>Compression rate: 100–120/min</li><li>Depth: 5–6 cm (adults), 5 cm (children), 4 cm (infants)</li><li>Ratio: 30:2 (adult, single rescuer); 15:2 (child, two rescuers)</li></ul>
<h4>Choking Management</h4>
<ul><li>Mild (can cough): Encourage coughing</li><li>Severe conscious adult: 5 back blows + 5 abdominal thrusts (Heimlich) — repeat</li><li>Infant: 5 back blows face-down + 5 chest thrusts (NO abdominal thrusts)</li><li>Unconscious: CPR (each opening of airway — look for object)</li></ul>
<h4>Burns</h4>
<div class="kp">⭐ Rule of Nines (adult): Head+neck=9% | Each arm=9% | Chest=9% | Abdomen=9% | Back upper=9% | Back lower=9% | Each thigh=9% | Each leg=9% | Genitalia=1%</div>
<ul><li>Cool: Running water 20 minutes (NOT ice)</li><li>Cover: Clean non-fluffy material / cling film</li><li>Do NOT apply butter, toothpaste, oil</li><li>Parkland formula: 4 mL × kg × %BSA burned</li></ul>
<h4>Poison/Snakebite</h4>
<ul><li>Snakebite: Immobilise, below heart level, rush to hospital for antivenom</li><li>Do NOT: cut, suck, tourniquet, apply electricity</li><li>Organophosphate poisoning: atropine + pralidoxime</li></ul>`,

  anatomy:`<h3>Anatomy & Physiology</h3>
<h4>Normal Vital Signs by Age</h4>
<table><tr><th>Parameter</th><th>Newborn</th><th>Infant</th><th>Child (2–10y)</th><th>Adult</th></tr>
<tr><td>Pulse (bpm)</td><td>120–160</td><td>80–140</td><td>70–120</td><td>60–100</td></tr>
<tr><td>RR (/min)</td><td>40–60</td><td>30–60</td><td>24–40</td><td>12–20</td></tr>
<tr><td>BP (mmHg)</td><td>60–90/30–60</td><td>75–100/50–70</td><td>80–110/50–80</td><td><120/<80</td></tr>
<tr><td>Temp (°C)</td><td colspan="4">36.5–37.5°C (all ages, oral)</td></tr></table>
<h4>Blood Values</h4>
<table><tr><th>Parameter</th><th>Normal Range</th></tr>
<tr><td>Hb — Men</td><td>13–17 g/dL</td></tr>
<tr><td>Hb — Women (non-pregnant)</td><td>12–16 g/dL</td></tr>
<tr><td>Hb — Pregnant (anaemia if <)</td><td>11 g/dL</td></tr>
<tr><td>Hb — Children <5y (anaemia if <)</td><td>11 g/dL</td></tr>
<tr><td>WBC</td><td>4,000–11,000 /μL</td></tr>
<tr><td>Platelets</td><td>1.5–4 lakh /μL</td></tr>
<tr><td>Blood volume (adult)</td><td>~5 L (70 mL/kg)</td></tr></table>
<h4>Cardiovascular</h4>
<ul><li>4 chambers: 2 atria (RA, LA) + 2 ventricles (RV, LV)</li><li>Normal CO: 4–8 L/min; SV: ~70 mL/beat</li><li>Systemic circulation: LV→Aorta→Body→Venae cavae→RA</li><li>Pulmonary: RV→Pulmonary artery→Lungs→Pulm. veins→LA</li></ul>`,

  environment:`<h3>Environmental Health</h3>
<h4>Water Quality (BIS/WHO Standards)</h4>
<table><tr><th>Parameter</th><th>Limit</th></tr>
<tr><td>pH</td><td>6.5–8.5</td></tr>
<tr><td>Turbidity</td><td>1 NTU (ideal) / 5 NTU (max)</td></tr>
<tr><td>Fluoride</td><td>1.0 mg/L (ideal) / 1.5 mg/L (max)</td></tr>
<tr><td>Arsenic</td><td>0.01 mg/L</td></tr>
<tr><td>Nitrate</td><td>45 mg/L</td></tr>
<tr><td>E. coli/Coliforms</td><td>ZERO per 100 mL</td></tr>
<tr><td>Residual chlorine (supply)</td><td>0.2–0.5 mg/L</td></tr></table>
<h4>BMW Colour Coding (2016 Rules)</h4>
<table><tr><th>Colour</th><th>Waste Type</th><th>Disposal</th></tr>
<tr><td>🟡 Yellow</td><td>Anatomical, soiled, expired medicines</td><td>Incineration/deep burial</td></tr>
<tr><td>🔴 Red</td><td>Recyclable contaminated (IV sets, syringes)</td><td>Autoclave + shredding</td></tr>
<tr><td>⬜ White</td><td>Sharps (needles, blades, scalpels)</td><td>Hub-cutter → puncture-proof container</td></tr>
<tr><td>🔵 Blue</td><td>Glass/broken vials</td><td>Autoclave + encapsulation</td></tr></table>
<div class="kp">⭐ NEVER recap needles. Use hub-cutter/needle destroyer AT POINT OF USE. Needle-stick injury: wash with soap, report, take PEP (post-exposure prophylaxis) for HIV within 72 hours.</div>`,

  stats:`<h3>Health Statistics & Epidemiology</h3>
<h4>India's Key Health Indicators (SRS 2020 / NFHS-5)</h4>
<table><tr><th>Indicator</th><th>Value</th></tr>
<tr><td>IMR (infant mortality rate)</td><td>28 per 1000 live births</td></tr>
<tr><td>NMR (neonatal mortality rate)</td><td>20 per 1000 live births</td></tr>
<tr><td>U5MR (under-5 mortality rate)</td><td>32 per 1000 live births</td></tr>
<tr><td>MMR (maternal mortality ratio)</td><td>97 per 1,00,000 live births (SRS 2018-20)</td></tr>
<tr><td>TFR (total fertility rate)</td><td>2.0 (NFHS-5)</td></tr>
<tr><td>CBR (crude birth rate)</td><td>~19.5 per 1000 population</td></tr>
<tr><td>CDR (crude death rate)</td><td>~6 per 1000 population</td></tr></table>
<h4>Study Designs</h4>
<table><tr><th>Study</th><th>Direction</th><th>Measure</th></tr>
<tr><td>Cohort</td><td>Exposure→Disease (forward)</td><td>Relative Risk (RR)</td></tr>
<tr><td>Case-Control</td><td>Disease→Exposure (backward)</td><td>Odds Ratio (OR)</td></tr>
<tr><td>Cross-sectional</td><td>Simultaneous</td><td>Prevalence</td></tr>
<tr><td>RCT</td><td>Intervention→Outcome</td><td>NNT, RRR</td></tr></table>
<div class="kp">⭐ Sensitivity = TP/(TP+FN) — detects disease (SnNOut: Sensitive Negative rules Out). Specificity = TN/(TN+FP) — rules in disease (SpPIn: Specific Positive rules In).</div>`,

  drug:`<h3>Essential Medicines & Drug Administration</h3>
<h4>Drug Administration Routes</h4>
<table><tr><th>Route</th><th>Key Drugs</th></tr>
<tr><td>Oral (PO)</td><td>ORS, IFA, OCP, Metformin, CQ, Zinc</td></tr>
<tr><td>Intradermal (ID)</td><td>BCG, Mantoux, fIPV</td></tr>
<tr><td>Subcutaneous (SC)</td><td>MR vaccine, Insulin, Heparin</td></tr>
<tr><td>Intramuscular (IM)</td><td>DPT, Penta, Oxytocin, MgSO4, TT</td></tr>
<tr><td>Intravenous (IV)</td><td>IV fluids (NS/RL/Dextrose), IV Oxytocin drip</td></tr>
<tr><td>Sublingual (SL)</td><td>Misoprostol, GTN</td></tr></table>
<h4>Key Drugs in Practice</h4>
<table><tr><th>Drug</th><th>Use</th><th>Key Fact</th></tr>
<tr><td>Oxytocin 10 IU IM</td><td>AMTSL — PPH prevention</td><td>Given after baby, before placenta</td></tr>
<tr><td>Misoprostol 600 mcg</td><td>PPH prevention (no oxytocin)</td><td>Community-level SL/oral</td></tr>
<tr><td>MgSO4</td><td>Eclampsia</td><td>Antidote = Calcium gluconate</td></tr>
<tr><td>Chloroquine</td><td>P. vivax malaria</td><td>25 mg/kg over 3 days + Primaquine</td></tr>
<tr><td>ORS</td><td>Diarrhoea dehydration</td><td>245 mOsm/L low-osmolarity</td></tr>
<tr><td>Zinc</td><td>Diarrhoea in children</td><td>14 days — reduces recurrence</td></tr>
<tr><td>Vitamin A megadose</td><td>VAD, post-delivery</td><td>2,00,000 IU mother within 6 weeks</td></tr></table>
<div class="kp">⭐ CONTRAINDICATED in pregnancy: Tetracycline (teeth), Warfarin (bleeding), Thalidomide (limb defects), ACE inhibitors (renal), Fluoroquinolones (cartilage), Methotrexate (abortifacient).</div>`,
};

/* ──────────────────── STATE ──────────────────── */
let progress = JSON.parse(localStorage.getItem('jkssb_progress') || '{}');
let streak = parseInt(localStorage.getItem('jkssb_streak') || '0');
let bestStreak = parseInt(localStorage.getItem('jkssb_bestStreak') || '0');
let mockHistory = JSON.parse(localStorage.getItem('jkssb_mockHistory') || '[]');
let nvApiKey = localStorage.getItem('jkssb_nvkey') || '';

let currentQuiz = { questions: [], idx: 0, score: 0, mode: 'learn', userAnswers: [] };
let lastQuizParams = null;
let currentMock = { paper: null, answers: {}, idx: 0, timer: null, timeLeft: 7200 };

function saveProgress() {
  localStorage.setItem('jkssb_progress', JSON.stringify(progress));
  localStorage.setItem('jkssb_streak', String(streak));
  localStorage.setItem('jkssb_bestStreak', String(bestStreak));
  localStorage.setItem('jkssb_mockHistory', JSON.stringify(mockHistory));
}

function recordAnswer(topicId, correct) {
  if (!progress[topicId]) progress[topicId] = { attempted: 0, correct: 0 };
  progress[topicId].attempted++;
  if (correct) { progress[topicId].correct++; streak++; if (streak > bestStreak) bestStreak = streak; }
  else streak = 0;
  saveProgress();
  updateHeaderStreak();
}

function getTotals() {
  let total = 0, correct = 0;
  for (const t of Object.values(progress)) { total += t.attempted; correct += t.correct; }
  return { total, correct };
}

function updateHeaderStreak() {
  const el = document.getElementById('streak-display');
  if (el) el.textContent = bestStreak;
}

/* ──────────────────── NAVIGATION ──────────────────── */
function openPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  const navBtn = document.querySelector(`.nav-btn[data-page="${id}"]`);
  if (navBtn) navBtn.classList.add('active');
  if (id === 'home')     renderHome();
  if (id === 'quiz')     resetQuizUI();
  if (id === 'mock')     renderMockSelector();
  if (id === 'notes')    renderNotesSidebar();
  if (id === 'ai')       initAI();
  if (id === 'progress') renderProgress();
}
document.querySelectorAll('.nav-btn[data-page]').forEach(btn => {
  btn.addEventListener('click', () => openPage(btn.dataset.page));
});

/* ──────────────────── HOME ──────────────────── */
function renderHome() {
  const grid = document.getElementById('topic-grid');
  grid.innerHTML = TOPICS.map(t => {
    const p = progress[t.id] || { attempted: 0, correct: 0 };
    const qCount = QUESTIONS.filter(q => q.topic === t.id).length;
    const acc = p.attempted ? Math.round(p.correct / p.attempted * 100) : null;
    const pct = p.attempted ? Math.round(p.correct / p.attempted * 100) : 0;
    return `<div class="topic-card-3d" onclick="startTopicQuiz('${t.id}')" style="--card-accent:${t.color||'#00d4ff'}">
      <div class="tc-icon">${t.icon}</div>
      <div class="tc-name">${t.name}</div>
      <div class="tc-meta">${qCount} Questions</div>
      <div class="tc-bar-wrap"><div class="tc-bar" style="width:${pct}%"></div></div>
      <div class="tc-footer">${p.attempted} done${acc !== null ? ' · ' + acc + '% acc' : ''}</div>
    </div>`;
  }).join('');

  /* attach 3-D tilt effect */
  document.querySelectorAll('.topic-card-3d').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg) scale(1.04)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  const { total, correct } = getTotals();
  const wrong = total - correct;
  const acc = total ? Math.round(correct / total * 100) : 0;
  const el = id => document.getElementById(id);
  if (el('hs-acc'))      el('hs-acc').textContent      = acc + '%';
  if (el('ls-attempted'))el('ls-attempted').textContent = total;
  if (el('ls-correct'))  el('ls-correct').textContent   = correct;
  if (el('ls-wrong'))    el('ls-wrong').textContent     = wrong;
  if (el('ls-streak'))   el('ls-streak').textContent    = bestStreak;
  if (el('ls-mocks'))    el('ls-mocks').textContent     = mockHistory.length;
  updateHeaderStreak();
}

function startTopicQuiz(topicId) {
  openPage('quiz');
  document.getElementById('quiz-topic-select').value = topicId;
  document.getElementById('start-quiz-btn').click();
}

/* ──────────────────── QUIZ ──────────────────── */
(function buildTopicSelect() {
  const sel = document.getElementById('quiz-topic-select');
  TOPICS.forEach(t => {
    const o = document.createElement('option');
    o.value = t.id; o.textContent = t.icon + ' ' + t.name;
    sel.appendChild(o);
  });
})();

function resetQuizUI() {
  show('quiz-selector'); hide('quiz-arena'); hide('quiz-result');
}

function show(id) { const el=document.getElementById(id); if(el) el.classList.remove('hidden'); }
function hide(id) { const el=document.getElementById(id); if(el) el.classList.add('hidden'); }
function el(id)   { return document.getElementById(id); }

document.getElementById('start-quiz-btn').addEventListener('click', () => {
  const topicId  = el('quiz-topic-select').value;
  const mode     = el('quiz-mode-select').value;
  const countVal = el('quiz-count-select').value;
  let pool = (topicId === 'all' ? [...QUESTIONS] : QUESTIONS.filter(q => q.topic === topicId))
               .sort(() => Math.random() - 0.5);
  if (countVal !== 'all') pool = pool.slice(0, parseInt(countVal));
  if (!pool.length) { alert('No questions for this topic!'); return; }
  lastQuizParams = { topicId, mode, countVal };
  currentQuiz = { questions: pool, idx: 0, score: 0, mode, userAnswers: [] };
  hide('quiz-selector'); show('quiz-arena'); hide('quiz-result');
  /* reset flip card */
  el('flip-card').classList.remove('flipped');
  renderQuestion();
});

function renderQuestion() {
  const q     = currentQuiz.questions[currentQuiz.idx];
  const total = currentQuiz.questions.length;
  const pct   = Math.round(currentQuiz.idx / total * 100);
  /* HUD */
  if (el('q-counter'))    el('q-counter').textContent    = `Q ${currentQuiz.idx + 1} / ${total}`;
  if (el('q-num-badge'))  el('q-num-badge').textContent  = `Q${currentQuiz.idx + 1}`;
  if (el('q-topic-chip')) el('q-topic-chip').textContent = TOPICS.find(t => t.id === q.topic)?.name || '';
  if (el('q-score'))      el('q-score').textContent      = currentQuiz.score;
  if (el('q-streak'))     el('q-streak').textContent     = '🔥' + streak;
  if (el('q-bar'))        el('q-bar').style.width        = pct + '%';
  /* question */
  if (el('q-text')) el('q-text').textContent = q.q;
  if (el('q-options')) {
    el('q-options').innerHTML = q.opts.map((opt, i) =>
      `<button class="opt-btn" data-idx="${i}"><span class="opt-label">${String.fromCharCode(65+i)}</span>${opt}</button>`
    ).join('');
    el('q-options').querySelectorAll('.opt-btn').forEach(btn =>
      btn.addEventListener('click', () => selectOption(parseInt(btn.dataset.idx)))
    );
  }
  /* ensure card is on front */
  el('flip-card').classList.remove('flipped');
  /* hide test-mode-nav */
  hide('test-mode-nav');
}

function selectOption(chosen) {
  const q = currentQuiz.questions[currentQuiz.idx];
  const isCorrect = chosen === q.ans;
  const isLast    = currentQuiz.idx === currentQuiz.questions.length - 1;
  currentQuiz.userAnswers.push({ chosen, correct: q.ans, isCorrect, q });
  if (isCorrect) { currentQuiz.score++; launchConfetti(); }
  recordAnswer(q.topic, isCorrect);
  /* mark options */
  el('q-options').querySelectorAll('.opt-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans) btn.classList.add('correct');
    if (i === chosen && !isCorrect) btn.classList.add('wrong');
  });
  if (el('q-score')) el('q-score').textContent = currentQuiz.score;
  if (el('q-streak')) el('q-streak').textContent = '🔥' + streak;

  if (currentQuiz.mode === 'learn') {
    /* flip card to show explanation */
    if (el('expl-body')) el('expl-body').textContent = q.expl;
    setTimeout(() => {
      el('flip-card').classList.add('flipped');
      /* btn-next-flip listener set once */
    }, 600);
    /* update btn-next-flip label for last Q */
    if (el('btn-next-flip')) el('btn-next-flip').textContent = isLast ? 'Show Results 🏆' : 'Next Question →';
  } else {
    /* test mode — show nav buttons */
    show('test-mode-nav');
    if (el('btn-finish-test')) el('btn-finish-test').style.display = isLast ? 'inline-block' : 'none';
    if (el('btn-next-test'))   el('btn-next-test').style.display   = isLast ? 'none' : 'inline-block';
  }
}

/* Flip card back — "Next Question" button */
el('btn-next-flip').addEventListener('click', () => {
  el('flip-card').classList.remove('flipped');
  setTimeout(() => {
    if (currentQuiz.idx >= currentQuiz.questions.length - 1) { showQuizResult(); return; }
    currentQuiz.idx++;
    renderQuestion();
  }, 400);
});

/* Test mode nav */
el('btn-next-test').addEventListener('click', () => { currentQuiz.idx++; renderQuestion(); });
el('btn-finish-test').addEventListener('click', showQuizResult);

function showQuizResult() {
  hide('quiz-arena');
  show('quiz-result');
  const { score, questions, userAnswers } = currentQuiz;
  const pct = Math.round(score / questions.length * 100);
  let emoji = '😞', title = 'Keep Practising!';
  if (pct >= 90) { emoji = '🏆'; title = 'Outstanding! Brilliant!'; }
  else if (pct >= 75) { emoji = '🎉'; title = 'Great Job! Well Done!'; }
  else if (pct >= 60) { emoji = '👍'; title = 'Good! Keep Going!'; }
  else if (pct >= 40) { emoji = '📚'; title = 'Need More Practice'; }
  if (el('r-orb'))    el('r-orb').textContent    = emoji;
  if (el('r-title'))  el('r-title').textContent  = title;
  if (el('r-pct'))    el('r-pct').textContent    = pct + '%';
  if (el('r-detail')) el('r-detail').textContent = `You scored ${score} out of ${questions.length}`;
  /* animate SVG arc */
  animateArc('score-arc', pct);
  /* review */
  if (el('r-review')) {
    el('r-review').innerHTML = '<h3 style="margin-bottom:.8rem;font-size:.95rem">📋 Review All Answers</h3>' +
      userAnswers.map((a, i) => `<div class="review-item ${a.isCorrect ? 'rc' : 'rw'}">
        <div class="rev-q">Q${i+1}: ${a.q.q}</div>
        <div class="rev-a">
          ${!a.isCorrect ? `<span class="rev-wrong">Your answer: ${String.fromCharCode(65+a.chosen)}. ${a.q.opts[a.chosen]}</span><br/>` : ''}
          <strong>✅ Correct: ${String.fromCharCode(65+a.correct)}. ${a.q.opts[a.correct]}</strong>
        </div>
        <div class="rev-expl">💡 ${a.q.expl}</div>
      </div>`).join('');
  }
}

function retakeQuiz() {
  if (!lastQuizParams) { resetQuizUI(); return; }
  el('quiz-topic-select').value = lastQuizParams.topicId;
  el('quiz-mode-select').value  = lastQuizParams.mode;
  el('quiz-count-select').value = lastQuizParams.countVal;
  resetQuizUI();
  el('start-quiz-btn').click();
}

/* SVG arc animation helper */
function animateArc(arcId, pct) {
  const arc = document.getElementById(arcId);
  if (!arc) return;
  const circ = 339.3;
  const offset = circ - (circ * pct / 100);
  arc.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)';
  arc.style.strokeDashoffset = offset;
}

/* ──────────────────── MOCK PAPERS ──────────────────── */
function renderMockSelector() {
  show('mock-selector'); hide('mock-arena'); hide('mock-result-panel');
  const grid = el('mock-papers-grid');
  if (!grid) return;
  grid.innerHTML = MOCK_PAPERS.map((mp, i) => {
    const done = mockHistory.find(h => h.id === mp.id);
    return `<div class="mock-card${done ? ' done' : ''}" onclick="startMock('${mp.id}')">
      <div class="mc-num">${i + 1}</div>
      <div class="mc-title">${mp.title}</div>
      <div class="mc-sub">${mp.subtitle}</div>
      <div class="mc-tags">${mp.tags.map(t => `<span class="mc-tag">${t}</span>`).join('')}</div>
      ${done ? `<div class="mc-best">✅ Best: ${done.score}/${done.total} (${Math.round(done.score/done.total*100)}%)</div>` : ''}
    </div>`;
  }).join('');
}

function startMock(paperId) {
  const paper = MOCK_PAPERS.find(p => p.id === paperId);
  buildMockPaper(paper);
  currentMock = { paper, answers: {}, idx: 0, timer: null, timeLeft: 7200 };
  hide('mock-selector'); show('mock-arena'); hide('mock-result-panel');
  if (el('mock-paper-title')) el('mock-paper-title').textContent = paper.title;
  renderMockQuestion();
  buildMockGrid();
  startMockTimer();
}

function renderMockQuestion() {
  const q     = currentMock.paper.qs[currentMock.idx];
  const total = currentMock.paper.qs.length;
  if (el('mock-q-counter')) el('mock-q-counter').textContent = `Q ${currentMock.idx + 1}/${total}`;
  if (el('mock-q-num'))     el('mock-q-num').textContent     = `Q${currentMock.idx + 1}`;
  if (el('mock-bar'))       el('mock-bar').style.width       = ((currentMock.idx + 1) / total * 100) + '%';
  if (el('mock-q-text'))    el('mock-q-text').textContent    = q.q;
  const chosen = currentMock.answers[currentMock.idx];
  if (el('mock-options')) {
    el('mock-options').innerHTML = q.opts.map((opt, i) => {
      let cls = '';
      if (chosen !== undefined && i === chosen) cls = ' correct';
      return `<button class="opt-btn${cls}" data-idx="${i}" ${chosen !== undefined ? 'disabled' : ''}><span class="opt-label">${String.fromCharCode(65+i)}</span>${opt}</button>`;
    }).join('');
    if (chosen === undefined) {
      el('mock-options').querySelectorAll('.opt-btn').forEach(btn =>
        btn.addEventListener('click', () => selectMockOption(parseInt(btn.dataset.idx)))
      );
    }
  }
  updateMockGrid();
}

function selectMockOption(chosen) {
  currentMock.answers[currentMock.idx] = chosen;
  const live = Object.keys(currentMock.answers).filter(k => currentMock.answers[k] === currentMock.paper.qs[k].ans).length;
  if (el('mock-live-score')) el('mock-live-score').textContent = live;
  renderMockQuestion();
}

function buildMockGrid() {
  const grid = el('mock-grid');
  if (!grid) return;
  const total = currentMock.paper.qs.length;
  grid.innerHTML = Array.from({ length: total }, (_, i) =>
    `<button class="mg-btn" id="mab-${i}" onclick="jumpMock(${i})">${i + 1}</button>`
  ).join('');
}

function updateMockGrid() {
  const total = currentMock.paper.qs.length;
  for (let i = 0; i < total; i++) {
    const btn = document.getElementById('mab-' + i);
    if (!btn) continue;
    btn.className = 'mg-btn'
      + (currentMock.answers[i] !== undefined ? ' answered' : '')
      + (i === currentMock.idx ? ' current' : '');
  }
}

function jumpMock(idx) { currentMock.idx = idx; renderMockQuestion(); }

el('mock-prev').addEventListener('click', () => {
  if (currentMock.idx > 0) { currentMock.idx--; renderMockQuestion(); }
});
el('mock-next').addEventListener('click', () => {
  if (currentMock.idx < currentMock.paper.qs.length - 1) { currentMock.idx++; renderMockQuestion(); }
});

function startMockTimer() {
  clearInterval(currentMock.timer);
  currentMock.timer = setInterval(() => {
    currentMock.timeLeft--;
    const h = Math.floor(currentMock.timeLeft / 3600).toString().padStart(2, '0');
    const m = Math.floor((currentMock.timeLeft % 3600) / 60).toString().padStart(2, '0');
    const s = (currentMock.timeLeft % 60).toString().padStart(2, '0');
    const t = el('mock-timer');
    if (t) { t.textContent = `${h}:${m}:${s}`; t.style.color = currentMock.timeLeft < 300 ? '#f87171' : ''; }
    if (currentMock.timeLeft <= 0) { clearInterval(currentMock.timer); submitMock(); }
  }, 1000);
}

function submitMock() {
  clearInterval(currentMock.timer);
  const answered = Object.keys(currentMock.answers).length;
  const total    = currentMock.paper.qs.length;
  if (answered < total && !confirm(`You have answered ${answered}/${total} questions. Submit anyway?`)) return;
  const qs = currentMock.paper.qs;
  let score = 0;
  const topicStats = {};
  qs.forEach((q, i) => {
    const chosen  = currentMock.answers[i];
    const correct = chosen === q.ans;
    if (correct) score++;
    if (!topicStats[q.topic]) topicStats[q.topic] = { name: TOPICS.find(t => t.id === q.topic)?.name || q.topic, total: 0, correct: 0 };
    topicStats[q.topic].total++;
    if (correct) topicStats[q.topic].correct++;
    recordAnswer(q.topic, correct);
  });
  const pct = Math.round(score / total * 100);
  mockHistory.unshift({ id: currentMock.paper.id, title: currentMock.paper.title, score, total, pct, date: new Date().toLocaleDateString('en-IN') });
  if (mockHistory.length > 20) mockHistory.pop();
  saveProgress();
  hide('mock-arena'); show('mock-result-panel');
  let emoji = '😞', title = 'Keep Practising!';
  if (pct >= 80) { emoji = '🏆'; title = 'Excellent! Paper Cracked!'; }
  else if (pct >= 60) { emoji = '🎉'; title = 'Good Performance!'; }
  else if (pct >= 40) { emoji = '📚'; title = 'Need More Practice'; }
  if (el('mr-orb'))   el('mr-orb').textContent   = emoji;
  if (el('mr-title')) el('mr-title').textContent  = title;
  if (el('mr-score')) el('mr-score').textContent  = `Score: ${score}/${total} (${pct}%)`;
  if (el('mr-time'))  el('mr-time').textContent   = `Time taken: ${formatTime(7200 - currentMock.timeLeft)}`;
  if (el('mr-pct'))   el('mr-pct').textContent    = pct + '%';
  animateArc('mock-score-arc', pct);
  if (el('mr-topic-analysis')) {
    el('mr-topic-analysis').innerHTML = Object.entries(topicStats).map(([, ts]) => {
      const tp  = Math.round(ts.correct / ts.total * 100);
      const col = tp >= 70 ? '#4ade80' : tp >= 40 ? '#f59e0b' : '#f87171';
      return `<div class="ta-row">
        <span class="ta-name">${ts.name}</span>
        <div class="ta-bar-wrap"><div class="ta-bar" style="width:${tp}%;background:${col}"></div></div>
        <span class="ta-meta">${ts.correct}/${ts.total} (${tp}%)</span>
      </div>`;
    }).join('');
  }
  if (el('mr-review')) {
    el('mr-review').innerHTML = '<h3 style="margin:1rem 0 .65rem;font-size:.95rem">📋 Full Review</h3>' +
      qs.map((q, i) => {
        const chosen = currentMock.answers[i];
        const ic = chosen === q.ans;
        return `<div class="review-item ${ic ? 'rc' : 'rw'}">
          <div class="rev-q">Q${i+1}: ${q.q}</div>
          <div class="rev-a">
            ${!ic && chosen !== undefined ? `<span class="rev-wrong">Your: ${String.fromCharCode(65+chosen)}. ${q.opts[chosen]}</span><br/>` : ''}
            ${chosen === undefined ? '<span class="rev-wrong">Not Attempted</span><br/>' : ''}
            <strong>✅ ${String.fromCharCode(65+q.ans)}. ${q.opts[q.ans]}</strong>
          </div>
          <div class="rev-expl">💡 ${q.expl}</div>
        </div>`;
      }).join('');
  }
}

function formatTime(s) {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sc = s % 60;
  return `${h}h ${m}m ${sc}s`;
}

/* ──────────────────── NOTES ──────────────────── */
function renderNotesSidebar() {
  const nav = el('notes-nav');
  if (!nav) return;
  nav.innerHTML = TOPICS.map(t =>
    `<button onclick="openNote('${t.id}', this)">${t.icon} ${t.name}</button>`
  ).join('');
}
function openNote(topicId, btn) {
  document.querySelectorAll('#notes-nav button').forEach(b => b.classList.remove('act'));
  btn.classList.add('act');
  const body = el('notes-body');
  if (body) body.innerHTML = NOTES[topicId] || '<p>Notes coming soon!</p>';
}

/* ──────────────────── PROGRESS ──────────────────── */
function renderProgress() {
  const { total, correct } = getTotals();
  const wrong = total - correct;
  const acc   = total ? Math.round(correct / total * 100) : 0;
  if (el('ps-total'))   el('ps-total').textContent   = total;
  if (el('ps-correct')) el('ps-correct').textContent = correct;
  if (el('ps-acc'))     el('ps-acc').textContent     = acc + '%';
  if (el('ps-streak'))  el('ps-streak').textContent  = bestStreak;
  if (el('ps-mocks'))   el('ps-mocks').textContent   = mockHistory.length;
  const weak   = TOPICS.filter(t => { const p = progress[t.id]; return p && p.attempted >= 3 && (p.correct / p.attempted) < 0.6; });
  const strong = TOPICS.filter(t => { const p = progress[t.id]; return p && p.attempted >= 3 && (p.correct / p.attempted) >= 0.8; });
  if (el('weak-list'))   el('weak-list').innerHTML   = weak.length
    ? weak.map(t => `<span class="area-tag weak">${t.icon} ${t.name}</span>`).join('')
    : '<span style="color:#64748b;font-size:.85rem">Attempt ≥3 questions per topic to see weak areas</span>';
  if (el('strong-list')) el('strong-list').innerHTML = strong.length
    ? strong.map(t => `<span class="area-tag strong">${t.icon} ${t.name}</span>`).join('')
    : '<span style="color:#64748b;font-size:.85rem">Keep practising to build strong topics!</span>';
  if (el('topic-bars')) {
    el('topic-bars').innerHTML = TOPICS.map(t => {
      const p   = progress[t.id] || { attempted: 0, correct: 0 };
      const pct = p.attempted ? Math.round(p.correct / p.attempted * 100) : 0;
      const col = pct >= 70 ? '#4ade80' : pct >= 40 ? '#f59e0b' : '#f87171';
      return `<div class="topic-bar-row">
        <span class="tbr-name">${t.icon} ${t.name}</span>
        <div class="tbr-bar-wrap"><div class="tbr-bar" style="width:${pct}%;background:${col}"></div></div>
        <span class="tbr-meta">${p.correct}/${p.attempted} (${pct}%)</span>
      </div>`;
    }).join('');
  }
  if (el('mock-history')) {
    el('mock-history').innerHTML = mockHistory.length
      ? mockHistory.map(h => `<div class="mh-row">
          <span>${h.title} — ${h.date}</span>
          <span class="mh-score" style="color:${h.pct>=60?'#4ade80':'#f87171'}">${h.score}/${h.total} (${h.pct}%)</span>
        </div>`).join('')
      : '<p style="color:#64748b;font-size:.85rem">No mock papers attempted yet.</p>';
  }
}

function resetProgress() {
  if (!confirm('Reset ALL progress? This cannot be undone.')) return;
  progress = {}; streak = 0; bestStreak = 0; mockHistory = [];
  MOCK_PAPERS.forEach(p => p.qs = null);
  saveProgress(); renderProgress(); renderHome();
}

/* ──────────────────── AI TUTOR ──────────────────── */
function initAI() {
  if (nvApiKey) { hide('ai-key-gate'); show('ai-chat'); }
  else          { show('ai-key-gate'); hide('ai-chat'); }
}

el('ai-key-btn').addEventListener('click', () => {
  const key = el('ai-key-input').value.trim();
  if (!key || !key.startsWith('nvapi-')) { alert('Enter a valid NVIDIA API key starting with nvapi-'); return; }
  nvApiKey = key;
  localStorage.setItem('jkssb_nvkey', key);
  initAI();
  addBotMsg('🏥 AI Tutor activated! I\'m ready to help you crack JKSSB FMPHW/MMPHW 2025. Ask me anything about the syllabus!');
});

el('ai-reset-key').addEventListener('click', () => {
  nvApiKey = ''; localStorage.removeItem('jkssb_nvkey');
  if (el('ai-key-input')) el('ai-key-input').value = '';
  initAI();
});

document.querySelectorAll('.qchip').forEach(btn => {
  btn.addEventListener('click', () => {
    if (el('chat-input')) el('chat-input').value = btn.dataset.q;
    sendAI();
  });
});

el('send-btn').addEventListener('click', sendAI);
el('chat-input').addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendAI(); }
});

async function sendAI() {
  const inp  = el('chat-input');
  const text = inp.value.trim();
  if (!text) return;
  if (!nvApiKey) { alert('Please enter your NVIDIA API key first.'); return; }
  inp.value = '';
  addUserMsg(text);
  const tid = addTypingIndicator();
  try {
    const model = el('ai-model') ? el('ai-model').value : 'meta/llama-3.3-70b-instruct';
    const res = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + nvApiKey },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: 'You are an expert tutor for the JKSSB FMPHW/MMPHW 2025 health worker exam in Jammu & Kashmir. Answer clearly with bullet points, tables, and ⭐ for exam-important points. Topics: MCH, ANC, immunization UIP schedule, cold chain, family planning, nutrition deficiencies, national health programs (NHM, NTEP, NACP, NPCDCS, RMNCH+A), first aid, CPR, anatomy, vital signs, environmental health, biomedical waste, health statistics, essential medicines. Be concise and practical.' },
          { role: 'user', content: text }
        ],
        max_tokens: 1024, temperature: 0.4, stream: false
      })
    });
    removeTypingIndicator(tid);
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      addBotMsg('❌ API Error: ' + (err.message || res.status) + '. Check your API key.');
      return;
    }
    const data  = await res.json();
    const reply = data.choices?.[0]?.message?.content || 'No response received.';
    addBotMsg(reply);
  } catch (e) {
    removeTypingIndicator(tid);
    addBotMsg('❌ Network error: ' + e.message);
  }
}

function addUserMsg(text) {
  const w = el('chat-window');
  if (!w) return;
  w.innerHTML += `<div class="chat-msg user"><div class="chat-avatar">👤</div><div class="chat-bubble">${esc(text)}</div></div>`;
  w.scrollTop = w.scrollHeight;
}

let _tc = 0;
function addTypingIndicator() {
  const id = 'typ-' + (++_tc);
  const w  = el('chat-window');
  if (!w) return id;
  w.innerHTML += `<div class="chat-msg bot" id="${id}"><div class="chat-avatar">🤖</div><div class="chat-bubble"><span class="typing-dots"><span></span><span></span><span></span></span></div></div>`;
  w.scrollTop = w.scrollHeight;
  return id;
}
function removeTypingIndicator(id) { document.getElementById(id)?.remove(); }

function addBotMsg(text) {
  const w = el('chat-window');
  if (!w) return;
  w.innerHTML += `<div class="chat-msg bot"><div class="chat-avatar">🤖</div><div class="chat-bubble">${fmtAI(text)}</div></div>`;
  w.scrollTop = w.scrollHeight;
}

function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function fmtAI(t) {
  return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,'<em>$1</em>')
    .replace(/`(.+?)`/g,'<code>$1</code>')
    .replace(/⭐/g,'<strong style="color:#f59e0b">⭐</strong>')
    .replace(/^#{1,3} (.+)$/gm,'<strong style="color:#38bdf8;font-size:1rem">$1</strong>')
    .replace(/^[-•] (.+)$/gm,'<br/>• $1')
    .replace(/\n\n/g,'<br/><br/>')
    .replace(/\n/g,'<br/>');
}

/* ──────────────────── PARTICLE CANVAS ──────────────────── */
(function initParticles() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      a: Math.random() * 0.5 + 0.1
    });
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${p.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ──────────────────── CONFETTI ──────────────────── */
const _confCanvas = document.getElementById('confetti-canvas');
const _confCtx    = _confCanvas ? _confCanvas.getContext('2d') : null;
let   _confetti   = [];
if (_confCanvas) {
  _confCanvas.width  = window.innerWidth;
  _confCanvas.height = window.innerHeight;
  window.addEventListener('resize', () => { _confCanvas.width = window.innerWidth; _confCanvas.height = window.innerHeight; });
}
function launchConfetti() {
  if (!_confCtx) return;
  const colors = ['#00d4ff','#7c3aed','#00ff88','#ffd700','#ff6b35','#ff2d78'];
  for (let i = 0; i < 40; i++) {
    _confetti.push({
      x: window.innerWidth / 2, y: window.innerHeight / 3,
      vx: (Math.random() - 0.5) * 12, vy: (Math.random() - 1.2) * 10,
      r: Math.random() * 5 + 3, c: colors[Math.floor(Math.random() * colors.length)],
      life: 1, spin: Math.random() * 0.3
    });
  }
  if (_confetti.length === 40) animateConfetti();
}
function animateConfetti() {
  if (!_confCtx) return;
  _confCtx.clearRect(0, 0, _confCanvas.width, _confCanvas.height);
  _confetti = _confetti.filter(p => p.life > 0);
  _confetti.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.vy += 0.3; p.life -= 0.015;
    _confCtx.globalAlpha = p.life;
    _confCtx.fillStyle = p.c;
    _confCtx.fillRect(p.x, p.y, p.r, p.r * 0.5);
  });
  _confCtx.globalAlpha = 1;
  if (_confetti.length > 0) requestAnimationFrame(animateConfetti);
  else _confCtx.clearRect(0, 0, _confCanvas.width, _confCanvas.height);
}

/* ──────────────────── INIT ──────────────────── */
renderHome();
updateHeaderStreak();
