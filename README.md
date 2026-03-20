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

