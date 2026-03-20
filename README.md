<div align="center">

# 🛡️ GuardianGrid
**Parametric Insurance-as-a-Service (PIaaS) for the Gig Economy**

[![Guidewire DEVTrails](https://img.shields.io/badge/Guidewire-DEVTrails_2026-blueviolet?style=for-the-badge)](#)
[![Architecture](https://img.shields.io/badge/Architecture-B2B2C_Microservices-blue?style=for-the-badge)](#)
[![Backend](https://img.shields.io/badge/Backend-Java_Spring_Boot-6DB33F?style=for-the-badge&logo=spring)](#)
[![AI Engine](https://img.shields.io/badge/AI-Python_FastAPI-009688?style=for-the-badge&logo=fastapi)](#)

> *Automated, low-friction income protection for India's delivery partners.*

**[📺 View Phase 1 Pitch Video](#) • [📖 API Documentation](#) • [📊 System Architecture](#)**

</div>

---

## 💡 Inspiration: Protecting the Vulnerable Micro-Entrepreneur

India’s delivery partners are the invisible backbone of the digital economy. They operate as cash-dependent micro-entrepreneurs whose weekly earnings are tightly tied to short, high-value working windows such as lunch rush, dinner rush, and weekend peaks. When heavy rain, localized flooding, extreme heat, severe air pollution, or sudden area restrictions interrupt those windows, the worker does not just lose “time” — they lose the most profitable part of their week.

Traditional insurance does not fit this reality. It is often claim-heavy, slow, document-driven, and not designed for small recurring income shocks. A gig worker who loses earnings today needs support immediately, not after weeks of claim review. That insight inspired us to design **GuardianGrid**, a parametric, AI-assisted protection layer focused purely on **income loss caused by external disruptions**.

---

## 🎯 Problem Statement

Platform-based delivery partners working with Zomato, Swiggy, Zepto, Amazon, Dunzo, and similar services face frequent income loss due to conditions outside their control. These include environmental disruptions such as heavy rainfall, floods, extreme heat, and severe pollution, as well as social or mobility disruptions such as local closures, curfews, or zone access restrictions.

These events can reduce their weekly earnings significantly, yet there is no simple, affordable, and automated protection mechanism focused on this type of loss. GuardianGrid addresses this gap through a **weekly-priced parametric insurance model** that can detect disruption events, validate eligibility, and trigger payouts with minimal friction.

---

## 👤 Delivery Worker Persona

- **Name:** Arun Kumar  
- **Age:** 27  
- **City:** Chennai  
- **Role:** Delivery Partner  
- **Platforms:** Swiggy / Zomato  
- **Weekly Earnings:** ₹4,500–₹5,500  
- **Work Pattern:** Most earnings come from lunch and dinner surge windows  
- **Key Pain Point:** Loses a large share of weekly income when adverse weather or external restrictions hit during high-demand shifts  

### Persona-Based Scenario

Arun depends heavily on the dinner rush between **7 PM and 10 PM**. On a day with intense rainfall and waterlogged roads, deliveries in his area stop for more than an hour. Because this is one of his most profitable time blocks, he loses a meaningful share of that day’s earnings. GuardianGrid is designed to detect such disruption events automatically and compensate him for the lost earning opportunity without forcing him to manually file a traditional claim.

---

## 🚀 Solution Overview: GuardianGrid

GuardianGrid is a **B2B2C parametric insurance platform** designed to be embedded into gig-platform ecosystems rather than operate as a purely standalone consumer insurance app.

Instead of asking workers to buy, manage, and claim insurance through a separate flow, GuardianGrid integrates with delivery platforms and enables:

1. **Simplified onboarding** using verified rider and earning-band information  
2. **Weekly micro-policy creation** aligned with worker cash flow  
3. **Real-time disruption monitoring** through environmental and contextual APIs  
4. **Automated trigger-based claim initiation** for eligible income-loss events  
5. **AI-assisted fraud detection** before payout approval  
6. **Fast payout execution** through UPI or wallet-linked rails in the prototype flow  

This model reduces friction for workers, improves trust, and gives insurers and platforms a scalable way to offer income protection.

---

## 🔄 Application Workflow

1. The delivery platform shares rider onboarding details, active zone, and verified earning band.
2. GuardianGrid generates a weekly micro-insurance policy for the rider.
3. External signals such as rainfall, flood risk, AQI, and traffic slowdown are monitored for the assigned working zone.
4. The AI/rules engine checks whether a disruption crosses the defined parametric thresholds.
5. If the trigger happens during an eligible earning block, the system estimates the rider’s likely income disruption.
6. Fraud checks validate location consistency, rider activity status, and duplicate payout conditions.
7. If approved, the payout is initiated through UPI or wallet rails in the prototype flow.
8. Event details, risk insights, and payout status are reflected in the dashboard for workers, partners, and administrators.

---

## 💸 Weekly Premium Model

GuardianGrid follows a **weekly pricing model** because delivery workers usually think in terms of weekly cash flow rather than annual or monthly insurance commitments.

### Premium Logic

**Weekly Premium = Base Premium + Risk Loading + Coverage Slab Factor**

The premium is influenced by:

- rider income band
- city and zone-level disruption risk
- frequency of historical weather and environmental incidents
- dependence on peak earning windows
- selected payout slab

### Illustrative Example

- **Rider weekly income band:** ₹5,000  
- **Zone risk profile:** Medium  
- **Chosen protection slab:** ₹400 payout for an eligible disruption block  

**Illustrative weekly premium:** ₹29–₹49 per week

### Why Weekly Pricing?

- matches the earnings cycle of gig workers
- keeps entry cost low and adoption realistic
- allows flexible opt-in through platform ecosystems
- fits the hackathon requirement for weekly pricing

---

## ⚙️ Parametric Triggers

GuardianGrid uses a **parametric model**, meaning payouts are linked to measurable external events instead of slow manual claim assessment.

### Trigger Categories

- **Heavy Rain Trigger:** Rainfall exceeds a defined zone threshold for a sustained duration
- **Flood Trigger:** Official alert or hyperlocal road inaccessibility due to waterlogging
- **Extreme Heat Trigger:** Temperature or heat index exceeds safe outdoor working threshold
- **Severe Pollution Trigger:** AQI crosses a high-risk operational threshold
- **Traffic Gridlock Trigger:** Average traffic speed in the zone falls below a set threshold
- **Platform Slowdown Trigger:** Verified order volume drops significantly in the affected zone

### Trigger Rule Example

A payout is considered when:

- the disruption lasts at least **45 minutes**
- it occurs during an eligible earning block
- the rider is associated with the affected zone
- fraud and duplicate checks are cleared

This lets GuardianGrid convert real-world disruption into an automated and predictable insurance experience.

---

## 🚫 Coverage Exclusions

GuardianGrid strictly excludes:

- health insurance claims
- life insurance claims
- accident-related claims
- vehicle damage or vehicle repair reimbursement
- hospitalization or medical expense reimbursement

The product focuses **only on income loss caused by external parametric disruptions**.

---

## 📱 Platform Choice: Mobile-First, Dashboard-Supported

GuardianGrid is designed as a **mobile-first embedded experience** because delivery workers already operate through smartphones during active shifts. Embedding this protection into partner ecosystems reduces onboarding friction and improves trust.

A separate **web dashboard** supports:

- insurer and admin oversight
- partner operations
- trigger monitoring
- risk heatmaps
- payout tracking
- fraud alerts

### Why this approach?

- workers already live inside mobile app workflows
- mobile is best for real-time notification and payout visibility
- web is more suitable for analytics, monitoring, and operations teams

---

## 🌐 Data Sources and MCP Integration

GuardianGrid depends on multiple real-time and simulated data sources to evaluate disruption events accurately.

### External Data Sources

- **Weather APIs** for rainfall, temperature, humidity, and alerts
- **AQI APIs** for pollution severity
- **Traffic APIs** for congestion and speed-drop signals
- **Maps / Geospatial APIs** for rider-zone mapping
- **Mock Platform APIs** for rider activity, order flow, and earning simulation
- **Mock Payment APIs** for payout triggering

### What MCP Does in GuardianGrid

In GuardianGrid, **MCP acts as the integration and orchestration layer** between the insurance platform and external tools/data sources.

It helps us:

1. **connect to multiple APIs and services**
2. **normalize different API responses into a standard structure**
3. **fetch real-time zone-level disruption context**
4. **pass clean structured inputs to the AI engine, trigger engine, and fraud layer**
5. **keep the system modular and easier to extend**

### Example MCP Output

Instead of the backend separately handling weather, AQI, traffic, and rider-context APIs one by one, MCP can gather those signals and return a unified response such as:

```json
{
  "zone_id": "CHN_04",
  "rainfall_mm": 62,
  "aqi": 318,
  "avg_speed_kmph": 6,
  "rider_active": true,
  "risk_time": "2026-03-20T18:00:00"
}

This makes downstream trigger evaluation and fraud checks simpler and more reliable.

Why MCP Matters Here

Without MCP, the system becomes tightly coupled to many separate API integrations. With MCP, GuardianGrid gains a cleaner architecture where the insurance logic can focus on decisions rather than raw data handling.

🧠 AI/ML Integration Plan

GuardianGrid uses AI/ML in important layers:

1. AI-Powered Risk Scoring

The system estimates disruption exposure at the rider-zone level using:

historical rainfall and flood patterns

AQI history

zone-level traffic behavior

surge-hour earning dependence

seasonal disruption frequency

This risk score helps determine how vulnerable a rider’s earning cycle is to external disruptions.

Suggested models: Random Forest Classifier / XGBoost

2. Premium Personalization

The weekly premium can be adjusted using:

rider income band

city and zone-level risk exposure

likely dependence on peak time blocks

selected payout slab

historical disruption frequency

3. Expected Income Prediction

A regression model estimates how much the rider would likely have earned during a protected shift block if no disruption had occurred.

Income Loss Logic:
Income Loss = Expected Income - Actual Income

Suggested models: Linear Regression / Random Forest Regressor

4. Intelligent Fraud Detection

GuardianGrid includes an anomaly detection layer to identify:

impossible or inconsistent location patterns

inactive rider payout attempts

duplicate trigger windows

unusually frequent payout patterns

suspicious behavior across integrated data sources

Suggested model: Isolation Forest

Phase 1 AI/ML Scope

For this phase, the solution demonstrates the AI/ML plan through:

rule-based risk logic

mock risk scoring

fraud detection design and anomaly-check workflow

architecture for later ML model integration

🧱 Architecture: B2B2C Microservices Approach

A fully direct-to-consumer insurance app may struggle with customer acquisition, data validation, and false claims. GuardianGrid therefore uses a B2B2C architecture where insurers and delivery platforms become the primary integration layer.

Core Components

Core Financial Engine (Java Spring Boot)
Handles policy generation, premium logic, payout orchestration, and transaction-safe workflows.

AI / Rules Engine (Python FastAPI)
Handles risk scoring, expected income estimation, trigger evaluation, and anomaly detection workflows.

MCP Integration Layer
Connects to external APIs and mock services, standardizes incoming data, and provides structured real-time context.

PostgreSQL
Stores policies, payout records, and structured financial history.

MongoDB
Stores high-frequency event and contextual data such as environmental feeds and trigger logs.

Frontend Layer
Mobile-first worker interface and a web-based admin and partner dashboard.

This architecture helps separate financial correctness, trigger processing, data integration, and operational intelligence.

🛠️ Tech Stack
Frontend

React / Next.js for dashboard

Mobile-first responsive UI for worker interaction

Backend

Java Spring Boot

Python FastAPI

Databases

PostgreSQL

MongoDB

AI / ML

Python

Scikit-learn

PyTorch

TensorFlow

Models Used
1. Risk Prediction Model

We use a Random Forest / XGBoost classifier to estimate the likelihood of disruption-based income loss using weather, AQI, traffic, and zone-level historical data.

2. Income Prediction Model

We use a regression model to estimate the rider’s expected earnings during a protected shift block. The difference between expected income and actual income helps quantify disruption-linked income loss.

3. Fraud Detection Model

We use Isolation Forest-based anomaly detection to identify suspicious payout patterns such as location inconsistency, repeated claims, inactivity during disruption windows, and duplicate claims.

Integrations

Weather APIs (live or mock)

AQI APIs

Traffic data APIs or mock feeds

Maps / geospatial APIs

Platform-side rider and order data (simulated)

Payment gateway / UPI mock integrations

MCP-based connector layer

🧪 Phase 1 Prototype Scope

For Phase 1, our focus is not full production deployment, but proving the concept and architecture through a minimal viable prototype.

Minimal Scope Demonstrated

rider persona and onboarding concept

weekly premium generation logic

disruption trigger definition

policy creation workflow

payout simulation flow

fraud-check concept

MCP-based integration design

dashboard wireframe and prototype architecture

This ensures the foundational elements are ready for expansion in later phases.

🛠️ Development Plan
Phase 1: Ideation & Foundation

define worker persona and disruption scenarios

design premium logic and payout slabs

identify parametric triggers

build workflow and architecture

define MCP integration strategy

prepare README, GitHub structure, and pitch video

Phase 2: Functional Prototype

implement onboarding flow

create weekly policy engine

integrate mock weather, AQI, and traffic feeds

simulate trigger-based claims and payouts

build analytics dashboard

Phase 3: Intelligent Automation

add ML-based risk scoring

improve anomaly detection

refine hyperlocal trigger validation

strengthen partner and admin insights and reporting

⚠️ Key Design Challenge

One of the main product challenges is balancing meaningful worker relief with financial sustainability.

If payouts are calculated too granularly, they become too small to matter. If they are too generous, the risk pool becomes unsustainable. To solve this, GuardianGrid uses the idea of Shift Block Guarantees rather than minute-by-minute reimbursement.

Shift Block Guarantee Model

If a disruption crosses a meaningful threshold during an earnings-critical block, the worker receives a flat payout amount.

Payout = {
  ₹400, if t_disruption >= 45 min
  ₹0,   if t_disruption < 45 min
}

This creates a model that is simple, explainable, and practical for hackathon prototyping.

🏆 Why GuardianGrid is Different

focuses on income loss, not general insurance categories

uses parametric automation instead of manual claim-heavy flows

aligns with weekly gig-worker earnings

uses AI-assisted risk scoring, income estimation, and fraud checks

supports a mobile-first worker experience

fits naturally into a platform-integrated B2B2C model

uses MCP for cleaner real-time data orchestration

📚 What We Learned

This problem is not just about building an app. It requires understanding workers, payout trust, event-driven architecture, actuarial trade-offs, fraud control, API integration, and the operational realities of India’s gig economy. Designing GuardianGrid helped us think beyond basic CRUD systems and toward resilient, real-time financial workflows.

🔮 Future Scope
Hyperlocal Basis-Risk Reduction

Combine weather signals with traffic slowdown and zone-level operational signals for more accurate disruption validation.

Better AI-Driven Premium Calibration

Continuously tune premium-risk relationships using historical event and payout trends.

Multilingual Worker Communication

Deliver trigger alerts and payout confirmations in the worker’s regional language.

Partner-Side Expansion

Extend the platform to more gig categories beyond food and grocery delivery.

📹 Phase 1 Submission Assets

Idea Document: This README

Git Repository: Add your GitHub / GitLab repository link here

2-Minute Video: Add your public video link here

💻 Developer Quickstart
<details> <summary><b>Click to expand local installation instructions</b></summary>
Prerequisites

Docker

Docker Compose

JDK 17+

Python 3.10+

Node.js 18+

# 1. Clone the repository
git clone https://github.com/Shana-dude/GuideWire_DevTrails_26.git
cd GuideWire_DevTrails_26

# 2. Spin up the databases
docker-compose up -d

# 3. Start the Python AI Risk Engine
cd ai-engine
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

# 4. Start the Spring Boot Financial Engine
cd backend
./mvnw spring-boot:run
