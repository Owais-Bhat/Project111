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
