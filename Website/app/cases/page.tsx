'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import { SkeletonCaseCard } from '@/components/Skeleton'

interface Case {
  id: string
  name: string
  location: string
  duration: string
  program: string
  offer: string
  role: string
  category: string[]
  startingPoint: string
  breakthrough: string
  context?: string
  highlights?: string
  funFact?: string
  interviewLink?: string
}

const cases: Case[] = [
  {
    id: 'kate',
    name: 'Kate',
    location: 'New York, NY',
    duration: '< 2 months',
    program: 'Take All Plus',
    offer: 'Disney',
    role: 'Data Engineer',
    category: ['Fortune 500', 'Developers & Engineers'],
    startingPoint: 'Moved to the U.S. with a newborn and began the job search. Focused on landing a Data Engineer role in a top-tier company.',
    breakthrough: 'Automated application process, received 3 offers in just a few months — from Axos, OTG, and Disney. Chose Disney as the final offer.',
    funFact: 'Her husband Sergey, also a Go Offer mentee, landed his job through the program too.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'ivan-belov',
    name: 'Ivan Belov',
    location: 'Boston, MA',
    duration: '3 months',
    program: 'Take All',
    offer: 'PUMA',
    role: 'AI/ML Data Analyst',
    category: ['Analysts'],
    startingPoint: 'Ivan had been looking for a job for over 2.5 years, submitting 1,000–2,000 applications and receiving only 5–10 interviews. He felt stuck: "I didn\'t have a clear strategy. I was just guessing — no system, no real understanding of the market."',
    breakthrough: 'He joined Go Offer, built a structured process, and added automation. He worked with mock interviews, tracked interview outcomes, and focused on the right roles. Within 3 months, he landed 16 screenings, 8 interviews, and finally —an offer from PUMA as a Data Analyst.',
    context: 'Ivan had been looking for a job for over 2.5 years, submitting 1,000–2,000 applications and receiving only 5–10 interviews.'
  },
  {
    id: 'sergei',
    name: 'Sergei',
    location: 'Chicago, IL',
    duration: '3 months',
    program: 'Take All',
    offer: 'Spectrum',
    role: 'Data Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Former drilling engineer with 13 years in oil & gas — including offshore projects with Halliburton and ExxonMobil. Pivoted into tech during the pandemic, self-taught in Python, SQL, ETL, and distributed systems. Faced challenges breaking into U.S. tech: local experience, low response rate, and a resume that didn\'t reflect his value.',
    breakthrough: 'Automated application process, rebuilt positioning and expanded outreach. Received two offers — one via Upwork, and one from Spectrum, a leading U.S. broadband and tech provider. Chose Spectrum as the final offer',
    funFact: 'Former drilling engineer with 13 years in oil & gas — including offshore projects with Halliburton and ExxonMobil.'
  },
  {
    id: 'ariyuna',
    name: 'Ariyuna',
    location: 'Massachusetts',
    duration: '9 months',
    program: 'Take All',
    offer: 'National Grid',
    role: 'Financial Analyst',
    category: ['Analysts'],
    startingPoint: 'Background in bank audit at PwC, later worked in operations and ran a family business. Took a nonprofit fiscal role to get started, while job hunting and studying on the side.',
    breakthrough: 'Repositioned the experience, rebuilt the resume and LinkedIn. Landed a Financial Analyst offer at National Grid — a major U.S. energy company.'
  },
  {
    id: 'denis',
    name: 'Denis',
    location: 'Seattle, WA',
    duration: '3 months',
    program: 'Take All',
    offer: 'Amazon Web Services',
    role: 'Backend Software Engineer',
    category: ['Fortune 500', 'Developers & Engineers'],
    startingPoint: 'Was working night shifts for a CIS-based company. Lost a job offer due to visa status complications.',
    breakthrough: 'We relaunched his search and landed a role in just 3 months. He\'s now working at **Amazon Web Services** in Seattle.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'alina',
    name: 'Alina',
    location: 'Santa Clara, CA',
    duration: '4 months',
    program: 'Take All',
    offer: 'Intuit (Credit Karma)',
    role: 'Business Analyst',
    category: ['Analysts'],
    startingPoint: 'Transitioned from HR to analytics and couldn\'t land a job. After 300 applications, she had only one interview.',
    breakthrough: 'Automated application process. Sent over 1,500 applications and around 500 outreach messages — nearly 2,000 job search actions in total! Finally we got offer from Intuit (Credit Karma)',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'max',
    name: 'Max',
    location: 'Charlotte, NC',
    duration: '2 months',
    program: 'Take All + Ассистенты',
    offer: 'Bank of America',
    role: 'DevOps Engineer',
    category: ['Fortune 500', 'Developers & Engineers'],
    startingPoint: 'Worked as a contractor for the European market and spent a full year job hunting in the U.S. His main challenge was low response rate. Out of 600–700 applications, only 5–7 interviews — his resume kept getting filtered out by ATS.',
    breakthrough: 'Landed a job in under 2 months. He\'s now working on projects at **Bank of America**'
  },
  {
    id: 'bogdan',
    name: 'Bogdan',
    location: 'Jersey City, NJ',
    duration: '5.5 months',
    program: 'VIP',
    offer: 'JP Morgan Chase & Deutsche Bank',
    role: 'Product Manager',
    category: ['Fortune 500', 'Product & Project Managers'],
    startingPoint: 'First landed a job at Citizens Bank with Go Offer and worked there for 1.5 years. After being laid off, he came back to us to restart the job search.',
    breakthrough: 'Sent out 13,000 applications, reached out to 2,500+ connections, attended 219 interviews, made it to 17 final rounds. And it paid off — he got offers from **JP Morgan Chase** and **Deutsche Bank**.',
    highlights: 'Sent out 13,000 applications • Reached out to 2,500+ connections • Attended 219 interviews • Made it to 17 final rounds'
  },
  {
    id: 'eugene',
    name: 'Eugene',
    location: 'Jersey City, NJ',
    duration: '5 weeks',
    program: 'Take All Plus',
    offer: 'JP Morgan Chase',
    role: 'Full Stack Developer',
    category: ['Fortune 500', 'Developers & Engineers'],
    startingPoint: 'Was working a survival job in Trenton, barely making enough to cover rent. Job search was scattered and inconsistent, and nothing was working.',
    breakthrough: 'Rebranded profile and brought in assistant support. By week two, phone was ringing off the hook with recruiter calls. Landed a Full Stack Developer role at JP Morgan Chase in just 5 weeks.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'kirill',
    name: 'Kirill',
    location: 'London, UK',
    duration: '3 months',
    program: 'VIP',
    offer: 'Google & Meta',
    role: 'Staff ML Engineer',
    category: ['Fortune 500', 'Developers & Engineers'],
    startingPoint: 'Interviewed at Amazon, X (Twitter), OpenAI, and Perplexity — and landed offers from both Google and Meta.',
    breakthrough: 'Massive relocation packages, sign-on bonuses, and free housing for several months',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'sergey',
    name: 'Sergey',
    location: 'Seattle, WA',
    duration: '2.5 months',
    program: 'Take All',
    offer: 'Maple Systems & GE Vernova',
    role: 'DevOps Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Won the Green Card lottery and moved to the U.S. Before Go Offer: job hunting for ~3 months, sent around 100 applications, got just 1 interview.',
    breakthrough: 'Together, we built tailored DevOps and SysAdmin strategies. Automated application process and landed a SysAdmin offer from Maple Systems — one week later, got a DevOps offer from GE Vernova. Declined the second one: Maple promoted him just 4 days after starting!',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'dmitry',
    name: 'Dmitry',
    location: 'California',
    duration: '3 months',
    program: 'Take All',
    offer: 'Bold',
    role: 'Senior Product Manager',
    category: ['Product & Project Managers'],
    startingPoint: 'Between January and April 2025 sent out over 500 applications but landed only two screening interviews. With an talented visa as a recognized talent in product management, he was surprised by the low conversion and realized that navigating the U.S. job market was more complex than expected.',
    breakthrough: 'Sent out over 3,000 applications, completed 110 interviews, and received 3 job offers — including one from a VR company in the adult space. Ultimately accepted a Senior Product Manager role at Bold.'
  },
  {
    id: 'damir',
    name: 'Damir',
    location: 'New Jersey',
    duration: '7 months',
    program: 'Take All',
    offer: 'Rx2Go',
    role: 'Project Manager → Product/Analytics',
    category: ['Product & Project Managers'],
    startingPoint: 'After 2.5 years in the U.S., Damir landed a full-time Project Manager role in New Jersey — but soon felt ready for a shift into Product Management or Analytics. With prior startup experience in Kazan (hiring, HR, testing, task management), he struggled to navigate the U.S. job search.',
    breakthrough: 'Received 3 job offers and accepted a position at Rx2Go as a Project Manager.'
  },
  {
    id: 'mikhail',
    name: 'Mikhail',
    location: 'New York, NY',
    duration: '1.5 months',
    program: 'Take All',
    offer: 'Guidepoint',
    role: 'Product Manager',
    category: ['Product & Project Managers'],
    startingPoint: 'Moved to the U.S. with solid product experience, but got no traction — no interviews, no callbacks. His resume didn\'t reflect his true value in the U.S. market.',
    breakthrough: 'After repackaging his profile and refining his pitch, he quickly started landing interviews and secured an offer from Guidepoint, a global research enablement platform.'
  },
  {
    id: 'anton',
    name: 'Anton',
    location: 'Jacksonville, FL',
    duration: '2 months',
    program: 'VIP',
    offer: 'IMAIGE',
    role: 'AI/ML Technical Product Manager',
    category: ['Product & Project Managers'],
    startingPoint: 'Anton moved to the U.S. 2.5 years ago with 15+ years of experience building products used by 20M+ users worldwide. Despite an impressive background with companies like Microsoft, Thrasio, and Mass General Brigham, and top certifications (PSM II, PSK, CSPO, PMI-ACP, AWS), his job search hit a wall: low reply rates, even after hundreds of applications and multiple resume versions tailored for FAANG roles.',
    breakthrough: 'After months of silence, Anton received 3 offers — and accepted one from IMAIGE as an AI/ML Technical Product Manager. His case is a clear example: even top-tier experts need structure, volume, and the right pitch to succeed in the U.S. tech market.'
  },
  {
    id: 'alex',
    name: 'Alex',
    location: 'New York, NY',
    duration: '1 month',
    program: 'Partnership',
    offer: 'PNK Group',
    role: 'Project Manager',
    category: ['Product & Project Managers'],
    startingPoint: 'After immigrating to the U.S., worked a survival job installing AC units in New York.',
    breakthrough: 'In just one month, landed a Project Manager role at PNK Group — a leading construction company with large-scale industrial projects across the U.S.'
  },
  {
    id: 'ilia',
    name: 'Ilia',
    location: 'New York, NY',
    duration: '3.5 months',
    program: 'Take All',
    offer: 'PNK Group',
    role: 'Project Manager',
    category: ['Product & Project Managers'],
    startingPoint: 'Tried to find a job during his U.S. master\'s program — but got zero interviews. Faced an OPT deadline to secure employment within 3 months.',
    breakthrough: 'Completed around 120 interviews over 3 months. Landed a role at PNK Group — a major industrial real estate developer with large-scale construction projects across the U.S.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'ilia-la',
    name: 'Ilia',
    location: 'Los Angeles, CA',
    duration: '5.5 months',
    program: 'Take All Plus',
    offer: 'Amgen',
    role: 'Product Manager',
    category: ['Product & Project Managers'],
    startingPoint: 'Spent 2 years in a U.S. master\'s program — but couldn\'t land even an internship. After graduation, tried to find a role on OPT but kept hitting walls. Main blockers: tight deadlines and overqualification. Sent 1,900+ applications and made 400+ LinkedIn outreaches.',
    breakthrough: 'Automated application process, refined positioning, focused the strategy — and landed a Product Manager offer at Amgen, one of the world\'s leading biotech companies',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'kseniia',
    name: 'Kseniia',
    location: 'Netherlands',
    duration: '8 months',
    program: 'Take All Plus',
    offer: 'Leads.io',
    role: 'Product Owner',
    category: ['Product & Project Managers'],
    startingPoint: 'Was looking for a job in the Netherlands for over a year — without interviews. Lacked confidence and struggled to present her experience clearly.',
    breakthrough: 'After repackaging her profile, mass application support and interview coaching, she had over 80 interviews. Landed an offer at Leads.io, a global marketing platform.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'irene',
    name: 'Irene',
    location: 'New York, NY',
    duration: '2 months',
    program: 'Take All Plus',
    offer: 'DoorDash, Radancy',
    role: 'Project Manager',
    category: ['Product & Project Managers'],
    startingPoint: 'Joined the program after a layoff, focused on landing a strong PM role in tech.',
    breakthrough: 'Automated application process, reached final round at Disney, received 3 offers total. Chose DoorDash, and within days of starting — successfully negotiated a salary increase and added full benefits.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'anastasia',
    name: 'Anastasia',
    location: 'Boston, MA',
    duration: '4 weeks',
    program: 'Take All Plus',
    offer: 'Digital Ocean & Well.co',
    role: 'ML/AI Senior Product Manager',
    category: ['Product & Project Managers'],
    startingPoint: 'Spent 5.5 years in ML product management, including experience at AliExpress. Was looking for a similar role in the U.S., initially focused on the healthcare space.',
    breakthrough: 'Automated application process. Landed an offer from Digital Ocean and negotiated +$18K. Kept applying before her start date, got another offer, and reached final rounds at Gretel, Klaviyo, and Lilt.ai.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'julia-seattle',
    name: 'Julia',
    location: 'Seattle, WA',
    duration: '< 1 month',
    program: 'Take All Plus',
    offer: 'Colleague AI',
    role: 'Product Designer',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Worked 20+ survival jobs over 2 years to pay for her master\'s degree. Dreamed of landing one meaningful full-time role — and escaping burnout.',
    breakthrough: 'Had a lot of interviews with top-tier companies and startups, including MAANG. Accepted an offer at Colleague AI — a company shaping the future of education.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'andrey',
    name: 'Andrey',
    location: 'San Francisco, CA',
    duration: '3 months',
    program: 'Take All',
    offer: 'Cloudflare',
    role: 'Software Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Was laid off and spent a month job searching alone. Came to us asking, "I just want more interviews."',
    breakthrough: 'Automated application process, restructured profile and outreach. Andrey got interviews at Meta, Salesforce, and LinkedIn — and finally landed at Cloudflare.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'sergey-sacramento',
    name: 'Sergey',
    location: 'Sacramento',
    duration: '3 months',
    program: 'Take All +',
    offer: 'WebPT',
    role: 'Senior Site Reliability Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Submitted over 500 applications with low response rate. Faced multiple blockers: no work authorization, language barrier, and urgent need to get hired. All interviews stopped at work permit checks.',
    breakthrough: 'We tailored two strong profiles — for Software Engineer and DevOps. Launched high-volume outreach: → 3,915 job applications → 3,000+ emails → 80+ interviews → 3 job offers',
    highlights: '3,915 job applications • 3,000+ emails • 80+ interviews • 3 job offers',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'marina',
    name: 'Marina',
    location: 'Boston, MA',
    duration: '2 months',
    program: 'VIP',
    offer: 'BlueSnap',
    role: 'Data Analyst',
    category: ['Analysts'],
    startingPoint: 'Had been searching for a job on her own for 8 months with no results.',
    breakthrough: 'Sent 5,200 applications, mastered networking, completed around 50 interviews, and received 6 offers — all in just 2 months. The Go Offer Hub platform + assistant team handled automation and outreach so she could focus fully on interviews and prep.',
    highlights: 'Sent 5,200 applications • Completed around 50 interviews • Received 6 offers',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'anna-klaviyo',
    name: 'Anna',
    location: 'Boston, MA',
    duration: '6 weeks',
    program: 'VIP',
    offer: 'Klaviyo',
    role: 'Marketing Analyst',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Before moving to the U.S., Anya worked as a marketing analyst at Yandex and TikTok, and was also a guest lecturer at Higher School of Economics. Despite strong background, wasn\'t sure how to present her experience in the U.S. job market or navigate the interview process.',
    breakthrough: 'Landed 3 offers in just 6 weeks using the job search system that later became the foundation of Go Offer. One of those offers was from Klaviyo, a leading Boston-based SaaS company that powers marketing automation for eCommerce brands.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'julia-minneapolis',
    name: 'Julia',
    location: 'the City of Minneapolis',
    duration: '2 months',
    program: 'Take All Plus',
    offer: 'Waiting',
    role: 'Credit risk manager',
    category: ['Analysts']
  },
  {
    id: 'eugene-startup',
    name: 'Eugene',
    location: '9 months',
    program: 'Take All Plus',
    offer: 'StartHub',
    role: 'Software Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Eugene arrived in the U.S. with almost no English. During his first interviews, he couldn\'t even understand what the interviewer was asking. That made the job search incredibly frustrating.',
    breakthrough: 'Mastered the interview process — learned to understand various accents, practiced how to present his background clearly, and built confidence. He interviewed with companies like Amazon, Meta, and more. Eventually, landed a Software Engineer role at StartHub, a fast-growing startup.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'kiryl',
    name: 'Kiryl',
    location: 'California',
    duration: 'Less than 3 months',
    program: 'Resume Session',
    offer: 'SportsTech unicorn',
    role: 'Senior Software Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Kiryl came with a stellar background: Microsoft, Blizzard, Tapcheck. 15+ years in engineering, deep expertise in distributed systems, and experience leading global teams. Despite the resume, the job search wasn\'t moving — until he joined Go Offer.',
    breakthrough: 'Within just a few weeks landed multiple interviews fast and received an offer from a sports-tech unicorn. The platform serves millions of users nationwide and is valued at $1.23B.'
  },
  {
    id: 'danzan',
    name: 'Danzan',
    location: 'Alameda, CA',
    duration: '2.5 months',
    program: 'Resume Session',
    offer: 'Andes',
    role: 'Backend Software Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Never worked in tech before — no commercial experience as a backend engineer.',
    breakthrough: 'After revamping his resume, LinkedIn, and recruiter pitch strategy, he landed his first job in tech — a mid-level backend role at Andes.'
  },
  {
    id: 'ivan-nc',
    name: 'Ivan',
    location: 'North Carolina',
    duration: '5 months',
    program: 'Take All',
    offer: 'Humana',
    role: 'Full Stack Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Despite U.S. citizenship and experience with global companies, Ivan couldn\'t land a job in tech for several years. Worked survival jobs in the restaurant industry.',
    breakthrough: 'Joined the program with a clear goal: secure a qualified role. Repackaged his profile, prepared for interviews, and landed a full-time offer at Humana.'
  },
  {
    id: 'rodion',
    name: 'Rodion',
    location: 'Tampa, FL',
    duration: '3 months',
    program: 'Resume Session',
    offer: 'MHK.com',
    role: 'Data Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Was job hunting on his own for about 6 months without success. The process was chaotic, had to take a survival job. No interviews came through.',
    breakthrough: 'Refocused resume to highlight technical skills and improve ATS compatibility. Crafted a clearer positioning for Data Engineering roles — landed a job at MHK.com, a healthcare technology company specializing in care and utilization management solutions.'
  },
  {
    id: 'aleksandr',
    name: 'Aleksandr',
    location: 'New York, NY',
    duration: '4.5 months',
    program: 'Take All',
    offer: 'Skywire Networks',
    role: 'Network Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Tried job searching on his own for 6 months. Sent ~1,500 applications, 80–90% with no response. Got around 6 interviews but never moved past early stages.',
    breakthrough: 'Automated his outreach using the Go Offer platform. Landed a frontend role in a startup — despite fierce competition.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'alexander',
    name: 'Alexander',
    location: '6 months',
    program: 'Take All',
    offer: 'Cloud',
    role: 'Customer Solutions Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Worked a survival job in advertising delivery while searching for a tech role.',
    breakthrough: 'Automated his outreach using the Go Offer platform. Landed a frontend role in a startup — despite fierce competition.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'artem',
    name: 'Artem',
    location: 'Los Angeles',
    duration: '3.5 months',
    program: 'Take All',
    offer: 'Luxoft',
    role: 'Data Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Moved to the U.S. a year ago and spent most of the time learning English and adjusting to life in a new country. Tried job hunting for about three months, but only got a couple of interviews and no traction.',
    breakthrough: 'After repackaging his profile and launching automated resume outreach, he landed an offer at Luxoft — a global technology services company.'
  },
  {
    id: 'fedor',
    name: 'Fedor',
    location: 'Tampa, Florida',
    duration: '2.5 months',
    program: 'Take All',
    offer: 'SeeVee',
    role: 'Frontend Developer',
    category: ['Developers & Engineers'],
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'slava',
    name: 'Slava',
    location: 'USA',
    program: 'Take All',
    offer: 'QA Engineer',
    role: 'QA Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Couldn\'t find a job because of the language barrier.',
    breakthrough: 'Improved English, nailed mock interviews with Go Offer, built a strong profile and clear positioning. Now working as a QA Engineer.'
  },
  {
    id: 'julia-parts',
    name: 'Julia',
    location: 'New York, NY',
    duration: '5 weeks',
    program: 'Automation',
    offer: 'Parts Town',
    role: 'Frontend Engineer',
    category: ['Developers & Engineers'],
    startingPoint: 'Spent 6 months applying solo with no interviews, despite strong experience in React and SaaS product development.',
    breakthrough: 'Launched automation through Go Offer Hub and quickly scaled outreach. In just 5 weeks, secured 50+ interviews and landed an offer from Parts Town, a leading distributor of OEM foodservice equipment parts and a tech-forward company building modern tools for the industry.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'tatiana',
    name: 'Tatiana',
    location: 'Miami, FL',
    duration: '3 months',
    program: 'Take All Plus',
    offer: 'Stafi',
    role: 'Marketing Manager',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Before moving to the U.S., Tatiana ran a large construction business in the CIS and had years of experience as an entrepreneur. After relocating, she wanted to shift into a management role in a completely new industry — but without returning to construction.',
    breakthrough: 'In just 3 months, she landed a Marketing Manager role at Stafi. We helped her repackage her leadership background, position her for managerial roles, and target the right companies — without compromising her desire to change industries.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'elena',
    name: 'Elena',
    location: 'San Diego, CA',
    duration: '5 months',
    program: 'Self Serve',
    offer: 'Code and Theory',
    role: 'Product Designer',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Tried job searching solo — sent around 30 applications in two weeks and quickly burned out. Realized it would be hard to keep going without support.',
    breakthrough: 'Recreated Elena\'s portfolio and resume, set up Go Offer Hub to track her progress, helped prepare for interviews, and coached through offer negotiation. Ended up landing a great role with a $15K salary bump.',
    highlights: 'Landed a great role with a $15K salary bump'
  },
  {
    id: 'vladimir',
    name: 'Vladimir',
    location: 'New York, NY',
    duration: '4 months',
    program: 'Take All',
    offer: 'PNK Group',
    role: 'Sales Manager',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Was working a survival job as an HVAC installer and part-time truck driver. One day, his truck broke down on the road — and at that exact moment, our team reached out to him on LinkedIn. He took it as a sign and joined the program.',
    breakthrough: 'Quickly landed a full-time role at PNK Group in Manhattan, with an office overlooking the Statue of Liberty. The position perfectly matched his skills in sales and real estate development.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'arina',
    name: 'Arina',
    location: 'Los Angeles, CA',
    duration: '10 days',
    program: 'Take All',
    offer: 'Armor Guys',
    role: 'Social Media Marketer',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Had never worked in the industry before — only freelanced as an SMM specialist.',
    breakthrough: 'Built a polished resume and a tailored portfolio for a Marketing Manager role. Set up outreach to recruiters — and landed a job after the very first interview. Armor Guys is a manufacturer of innovative industrial gloves and apparel, expanding its digital presence in the U.S. market.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'anton-pnk',
    name: 'Anton',
    location: 'New York, NY',
    duration: '1 month',
    program: 'Partnership',
    offer: 'PNK Group',
    role: 'Sales and Land Acquisition Manager',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Worked a survival job as a truck driver before joining Go Offer.',
    breakthrough: 'Landed an offer with the title Pre-Development Director at PNK Group — a major industrial real estate development company. Despite transitioning out of the role later, this case showed how the right positioning can lead to senior-level opportunities even with a non-traditional background.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'anatolii',
    name: 'Anatolii',
    location: 'Albany, New York',
    duration: '85 days',
    program: 'Take All Plus',
    offer: 'Department of Education New York',
    role: 'UX/UI Designer',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Couldn\'t find a design job for 2 years and was working a survival job.',
    highlights: 'Used the Go Offer Hub platform on the Take All Plus plan. Sent 1,213 applications, had 18 screenings, passed 7 first and 4 second rounds, attended 3 in-person interviews',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'elizaveta',
    name: 'Elizaveta',
    location: 'New York, NY',
    duration: '1.5 months',
    program: 'Take All',
    offer: 'PNK Group',
    role: 'B2B Marketing Associate',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Graduated from film school in Boston and completed several unpaid internships but couldn\'t land a full-time role. Worked at a marketing agency and freelanced on UpWork. Moved to New York and worked part-time (10 hrs/week) as a content creator at a casino while searching for a full-time job.',
    breakthrough: 'Successfully transitioned into the B2B space — landed a strong role in a top-tier company.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'denis-miami',
    name: 'Denis',
    location: 'Miami, Florida',
    duration: '2 months',
    program: 'Take All',
    offer: 'The Bizarre Agency',
    role: 'A&R Manager',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Graduated from Berklee College of Music and joined Go Offer to find a job on OPT. The main challenge was a tight timeline — needed to secure a job within 3 months.',
    breakthrough: 'Automation was set up on November 17, and by December 19 the offer arrived. The company provides marketing services, and Denis will be working with major nonprofits like UNICEF and WWF.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'anna-la',
    name: 'Anna',
    location: 'Los Angeles, CA',
    duration: '3.5 months',
    program: 'Take All',
    offer: 'Sayari',
    role: 'Product Marketing Manager',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Had spent six months applying with no responses — resume wasn\'t parsing in ATS, interviews weren\'t going well, and the process lacked structure.',
    breakthrough: 'Submitted ~1000 applications via Go Offer Hub and additional ones independently. Focused on onsite roles in a few select locations or fully remote.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'anna-ny',
    name: 'Anna',
    location: 'New York, NY',
    duration: '3 months',
    program: 'Take All',
    offer: 'BeatGig',
    role: 'Product Designer',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Had never applied for jobs actively before — previously all roles came through personal connections. First month of search was unclear and difficult.',
    breakthrough: 'Applied with two positioning tracks (interior and graphic designer) using two separate LinkedIn and resume sets. Scientific approach paid off.'
  },
  {
    id: 'artem-ma',
    name: 'Artem',
    location: 'Massachusetts',
    duration: '4 months',
    program: 'VIP',
    offer: 'AGL Group',
    role: 'Business Analyst',
    category: ['Analysts'],
    startingPoint: 'Recent master\'s graduate from Boston who completed his degree in April 2023. Had about a year of experience, partially in logistics, and was actively searching for a full-time role.',
    breakthrough: 'Completely overhauled positioning and packaging three times before landing a Business Analyst offer. Faced difficulties with technical assessments — but ultimately cracked them. Navigated the job search during a tough time for the supply chain industry and still succeeded.'
  },
  {
    id: 'liza',
    name: 'Liza',
    location: 'New York, NY',
    duration: '2 months',
    program: 'Take All',
    offer: 'What Goes Around Comes Around',
    role: 'Business Analyst',
    category: ['Analysts'],
    startingPoint: 'Liza moved to the U.S. after winning the Green Card and took a year to adapt. She had 6–7 years of experience as a Business Analyst and was consulting for a company in Kazakhstan but wanted to enter the U.S. market.',
    breakthrough: 'Despite having strong experience, interviews were the biggest challenge. Through the Take All program, we automated her tracking of new interview invites, helped her prep for recruiter calls, and tailored outreach. Within 2 months, Liza landed a role at What Goes Around Comes Around, a luxury vintage fashion company based in New York.'
  },
  {
    id: 'oksana',
    name: 'Oksana',
    location: 'Los Angeles, CA',
    duration: '2 months',
    program: 'Take All Plus',
    offer: 'Niagara Bottling',
    role: 'Supply Chain Analyst',
    category: ['Analysts'],
    startingPoint: 'Oksana spent about 6 months searching for a job in her field with no success. She had to take a survival job at a healthy food café and was living in a hostel while applying. Her specialization — supply chain analytics — is narrow, and she wasn\'t getting interviews.',
    breakthrough: 'We launched a personalized job search strategy through the Go Offer Hub, automated the application process, and brought in assistants to support her journey. Within just 2 months, Oksana landed a role as a Supply Chain Analyst at Niagara Bottling, a leading U.S. bottled water manufacturer.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'ekaterina',
    name: 'Ekaterina',
    location: 'New York, NY',
    duration: '4 months',
    program: 'Take All',
    offer: 'Music Breeds',
    role: 'Marketing Director',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Worked in startups and short-term contracts. Wanted to break the "from-contract-to-contract" cycle. Main challenge: lack of structure and consistency in her job search.',
    breakthrough: 'Found a remote position (essential while living on a ranch), and within months after the offer, she was promoted to Marketing Director.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'gulnaz',
    name: 'Gulnaz',
    location: 'Alberta, Canada',
    duration: '3 months',
    program: 'Take All',
    offer: 'Catalis',
    role: 'Data Analyst',
    category: ['Analysts'],
    startingPoint: 'Gulnaz returned to the job market after maternity leave and struggled to get traction — applied for 3 months on her own with no results.',
    breakthrough: 'Successfully transitioned from QA to analytics. Repackaged her profile for the new direction, launched a job search campaign, and landed a Data Analyst role in just 3 months.'
  },
  {
    id: 'olga-ny',
    name: 'Olga',
    location: 'New York, NY',
    duration: '4 months',
    program: 'Take All',
    offer: 'PNK Group USA',
    role: 'Research Analyst',
    category: ['Analysts'],
    startingPoint: 'Spent almost a year looking for a job in the U.S. without success. Previously worked as a real estate analyst at Sberbank.',
    breakthrough: 'Positioned her profile toward the U.S. real estate market, recreated resume and LinkedIn, and launched automated outreach through Go Offer Hub. Supported through every interview. Landed a Research Analyst role at a major construction company in Manhattan — PNK Group USA.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'aleksei',
    name: 'Aleksei',
    location: 'New York, NY',
    duration: '10 months',
    program: 'Self Serve',
    offer: 'Schultheis & Panettieri',
    role: 'Payroll Compliance Auditor',
    category: ['Analysts'],
    startingPoint: 'Aleksei moved to the U.S. in 2022 via Mexico during the mobilization. In Russia, he worked as a Business Analyst at Magnit and Gemotest, building cloud tools for retail and healthcare. He expected a quick job search, but immigration stress and the U.S. market delayed it.',
    breakthrough: 'After getting his work permit, Aleksei improved his English, built a plan with Self Serve, and landed a Payroll Compliance Auditor role at Schultheis & Panettieri.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'ivan-fl',
    name: 'Ivan',
    location: 'Florida',
    duration: '1 month',
    program: 'Self Serve',
    offer: 'HyperC',
    role: 'Data Analyst',
    category: ['Analysts'],
    startingPoint: 'Came to the U.S. as a student on a CPT visa — had strict limitations on how and where he could search for a job. Time was tight: had less than 3 months to land a role. Had previously been searching on his own for nearly a year.',
    breakthrough: 'Landed a Data Scientist role at HyperC, where now builds models to uncover relationships between different business elements — for example, a pricing model for Amazon marketplace sellers.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'sergey-philly',
    name: 'Sergey',
    location: 'Philadelphia',
    duration: '4 months',
    program: 'Take All',
    offer: 'Intuit',
    role: 'Financial Analyst',
    category: ['Analysts'],
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'anton-ny',
    name: 'Anton',
    location: 'New York, NY',
    duration: '4 months',
    program: 'Take All Plus',
    offer: 'Terumo Medical Corporation',
    role: 'Financial Analyst',
    category: ['Analysts'],
    startingPoint: 'Moved to the U.S. 3 months before starting the Go Offer program after winning the Green Card lottery. Tried job searching on his own for 3 weeks — sent 300 applications and got just 2 interviews.',
    breakthrough: 'Landed an offer after full packaging and job search strategy. The final stretch was nerve-racking — HR suddenly went silent after sending the offer, and Sergey was unsure if the background check would pass. But it all worked out, and he started the job as planned.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'georgii',
    name: 'Georgii',
    location: 'Texas',
    duration: '< 3 months',
    program: 'Take All',
    offer: 'GOWEII',
    role: 'Data analyst',
    category: ['Analysts'],
    startingPoint: 'Despite two PhDs and a postdoc at UT Arlington, Georgii struggled to land a data role and took an operations job at an amusement park while continuing his search.',
    breakthrough: 'With the help of the Go Offer Hub automation system, Georgii sent over 4,800 job applications and built an outreach engine from scratch. As a result, he landed a data analyst role with a great manager—back in his field and on his terms.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'olga-exec',
    name: 'Olga',
    location: 'New York',
    duration: '6 months',
    program: 'Take All',
    offer: 'Executive & Office Operations Manager',
    role: 'Executive & Office Operations Manager',
    category: ['Others'],
    startingPoint: 'Won the Green Card lottery, moved to NYC, worked in recruiting. Sent out tons of resumes, but nothing worked — no structure, no clear system.',
    breakthrough: 'Streamlined the process through Go Offer. Built a sharp resume, learned how to beat ATS, and started applying consistently. Landed a job as Executive & Office Operations Manager in New York.'
  },
  {
    id: 'altynay',
    name: 'Altynay',
    location: 'New York',
    duration: '4 months',
    program: 'Take All',
    offer: 'Equinox',
    role: 'Sales & Project Manager',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'With 10+ years in enterprise sales and project management, Altynay moved to the U.S. to continue her corporate career. Despite leading $80M+ projects and hitting sales goals at top companies, her job search stalled.',
    breakthrough: 'After months of rejection, she took a pause, invested in a wellness project, and earned a personal training certification. Using outreach tactics and resume strategies from the Go Offer program, she landed an offer at Equinox, successfully pivoting and rebuilding her career in the U.S. on her own terms.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'aleksandra',
    name: 'Aleksandra',
    location: 'San Diego, California',
    duration: '3 months',
    program: 'Take All',
    offer: 'Impres Inc',
    role: 'Sales Manager (big pharma)',
    category: ['Sales, Marketing & Design'],
    startingPoint: 'Aleksandra moved to the U.S. with her husband and spent six months searching for a job in San Diego with no interview invites. Eventually, she took on survival jobs in restaurants and bars while continuing her search.',
    breakthrough: 'Landed a healthcare sales role and, on her very first day, attended a major conference where her company was presenting. Fun fact: her husband also worked with Go Offer and found a healthcare job in San Diego!',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'yana',
    name: 'Yana',
    location: 'Palo Alto, CA',
    duration: '3 months',
    program: 'Resume & Interview Sessions',
    offer: '1TCC',
    role: 'Supply Chain Operations Intern',
    category: ['Others'],
    startingPoint: 'After 10 years at one company in St. Petersburg, Yana moved to California for a fresh start. She expected an easy job search but found even internships highly competitive.',
    breakthrough: 'Secured an internship where she will work closely with the CEO, who is recognized among the Top 50 most influential women in Silicon Valley.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'anastasia-miami',
    name: 'Anastasia',
    location: 'Miami, Florida',
    duration: '1 month',
    program: 'Take All',
    offer: 'The Pharmacy Hub',
    role: 'People Operations Manager (HR)',
    category: ['Others'],
    startingPoint: 'After 15 years at JTI and 10+ years in the U.S., Anastasia joined Go Offer following an inspiring mastermind session. She had been working in a U.S.-based company for 4 years, but struggled to reposition her experience.',
    breakthrough: 'Came in with a resume for a T&D Manager role and pivoted to HR. Went through five interviews with HR leaders and received an offer on the fifth one.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'vadim',
    name: 'Vadim',
    location: 'Houston, TX',
    duration: '2 months',
    program: 'Resume Focus',
    offer: 'Baker Hughes',
    role: 'Project Manager',
    category: ['Product & Project Managers'],
    startingPoint: 'Vadim was looking for a role in the oil & gas industry, but wasn\'t getting interviews and couldn\'t figure out why. After dozens of applications, it became clear that his resume was not passing ATS filters.',
    breakthrough: 'He rebuilt his resume with a sharp focus on ATS optimization, shifted the messaging to highlight industry-relevant experience, and started landing interviews. Just 2 months later, Vadim accepted an offer from Baker Hughes, one of the leading energy technology companies in the U.S.'
  },
  {
    id: 'maria-boston',
    name: 'Maria',
    location: 'Boston, MA',
    duration: '5 weeks',
    program: 'Take All Plus',
    offer: 'Citizens Bank',
    role: 'Security Analyst / SOC Analyst',
    category: ['Developers & Engineers'],
    startingPoint: 'Worked 7 years in survival jobs before completing a cybersecurity bootcamp. Tried to break into the industry solo, but couldn\'t land interviews.',
    breakthrough: 'Joined Go Offer, completely revamped positioning and profile, repackaged bootcamp experience into a compelling story. Received two offers — from Citizens Bank and Roshai Browse — and chose Citizens Bank, a leading U.S. bank with a strong focus on digital security.',
    interviewLink: 'https://www.youtube.com/watch?v=example'
  },
  {
    id: 'dmitrii',
    name: 'Dmitrii',
    location: 'San Jose, CA',
    duration: '3 months',
    program: 'Take All',
    offer: 'Global Alzheimer Platform Foundation',
    role: 'Clinical Research Specialist',
    category: ['Others'],
    interviewLink: 'https://www.youtube.com/watch?v=example'
  }
]

const categories = [
  'Все',
  'Fortune 500',
  'Product & Project Managers',
  'Developers & Engineers',
  'Sales, Marketing & Design',
  'Analysts',
  'Others'
]

export default function CasesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Симуляция загрузки данных
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  const filteredCases = selectedCategory === 'Все'
    ? cases
    : cases.filter(caseItem => caseItem.category.includes(selectedCategory))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal animation="fade-in">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                  <span className="text-foreground">История </span>
                  <span className="gradient-text">успеха</span>
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto font-light">
                  Every story starts somewhere. We share structured, honest stories of job seekers who made it. Each journey is different — with its own starting point, challenges, and breakthroughs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-20 z-40 bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-light uppercase tracking-wide rounded-lg border transition-all ${
                    selectedCategory === category
                      ? 'border-purple-500 text-foreground bg-purple-500/10'
                      : 'border-border text-muted hover:border-purple-500/50 hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCaseCard key={index} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredCases.map((caseItem, index) => (
                <ScrollReveal key={caseItem.id} animation="slide-up" delay={index * 50}>
                  <div className="bg-background/50 rounded-2xl p-6 md:p-8 border border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg backdrop-blur-sm h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl md:text-2xl font-medium text-foreground mb-1">
                            {caseItem.name}
                          </h3>
                          <p className="text-sm text-muted font-light">
                            {caseItem.location}
                          </p>
                        </div>
                        {caseItem.interviewLink && (
                          <a
                            href={caseItem.interviewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-purple-500 hover:text-purple-400 font-light uppercase tracking-wide border border-purple-500/30 px-3 py-1 rounded-lg hover:border-purple-500/50 transition-all"
                          >
                            Watch Interview
                          </a>
                        )}
                      </div>
                      
                      {/* Meta info */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs text-muted font-light">{caseItem.duration}</span>
                        <span className="text-xs text-muted">•</span>
                        <span className="text-xs text-muted font-light">{caseItem.program}</span>
                        <span className="text-xs text-muted">•</span>
                        <span className="text-xs text-accent font-light">{caseItem.offer}</span>
                      </div>

                      {/* Role */}
                      <p className="text-sm font-medium text-foreground mb-4">
                        {caseItem.role}
                      </p>
                    </div>

                    {/* Starting Point */}
                    <div className="mb-4 flex-grow">
                      <h4 className="text-xs font-light text-muted uppercase tracking-wide mb-2">
                        Starting Point
                      </h4>
                      <p className="text-sm text-muted font-light leading-relaxed mb-4">
                        {caseItem.startingPoint}
                      </p>
                    </div>

                    {/* Breakthrough */}
                    <div className="mb-4">
                      <h4 className="text-xs font-light text-muted uppercase tracking-wide mb-2">
                        Breakthrough
                      </h4>
                      <p className="text-sm text-foreground font-light leading-relaxed">
                        {caseItem.breakthrough}
                      </p>
                    </div>

                    {/* Context or Highlights */}
                    {(caseItem.context || caseItem.highlights) && (
                      <div className="mt-auto pt-4 border-t border-border/30">
                        {caseItem.context && (
                          <div className="mb-2">
                            <h4 className="text-xs font-light text-muted uppercase tracking-wide mb-1">
                              Context
                            </h4>
                            <p className="text-xs text-muted font-light leading-relaxed">
                              {caseItem.context}
                            </p>
                          </div>
                        )}
                        {caseItem.highlights && (
                          <div>
                            <h4 className="text-xs font-light text-muted uppercase tracking-wide mb-1">
                              Highlights
                            </h4>
                            <p className="text-xs text-foreground font-light leading-relaxed">
                              {caseItem.highlights}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Fun Fact */}
                    {caseItem.funFact && (
                      <div className="mt-4 pt-4 border-t border-border/30">
                        <p className="text-xs text-purple-400 font-light italic">
                          <span className="font-medium">Fun fact:</span> {caseItem.funFact}
                        </p>
                      </div>
                    )}

                    {/* Categories */}
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <div className="flex flex-wrap gap-2">
                        {caseItem.category.map((cat) => (
                          <span
                            key={cat}
                            className="text-[10px] text-muted font-light uppercase tracking-wide border border-border/30 px-2 py-0.5 rounded"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
              </div>
            )}
          </div>

            {/* CTA Section */}
            {filteredCases.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted font-light mb-6">
                  Нет кейсов в выбранной категории
                </p>
                <button
                  onClick={() => setSelectedCategory('Все')}
                  className="border border-purple-500 px-6 py-3 text-sm font-light text-accent hover:bg-purple-500 hover:border-purple-600 hover:text-white transition-all uppercase tracking-wide rounded-lg"
                >
                  Показать все кейсы
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal animation="fade-in">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
                  <span className="text-foreground">Be our next </span>
                  <span className="gradient-text">case</span>
                </h2>
                <p className="text-base md:text-lg text-muted mb-8 font-light">
                  Has your job search been dragging on and you want to change it?
                </p>
                <a
                  href="https://cal.com/team/go-offer/career-consultation?traffic_source=Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-purple-500 px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm font-light text-accent hover:bg-purple-500 hover:border-purple-600 hover:text-white transition-all uppercase tracking-wide hover-purple-glow group relative overflow-hidden"
                >
                  <span className="relative z-10">sort out my case</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
