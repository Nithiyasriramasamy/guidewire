<div align="center">

# 🛡️ GuardianGrid
**Parametric Insurance-as-a-Service (PIaaS) for the Gig Economy**

[![Guidewire DEVTrails](https://img.shields.io/badge/Guidewire-DEVTrails_2026-blueviolet?style=for-the-badge)](#)
[![Architecture](https://img.shields.io/badge/Architecture-B2B2C_Microservices-blue?style=for-the-badge)](#)
[![Backend](https://img.shields.io/badge/Backend-Java_Spring_Boot-6DB33F?style=for-the-badge&logo=spring)](#)
[![AI Engine](https://img.shields.io/badge/AI-Python_FastAPI-009688?style=for-the-badge&logo=fastapi)](#)

> *Automated, zero-touch income protection for India's ~5 million delivery partners.*

**[ 📺 View Phase 1 Pitch Video ](#) • [ 📖 API Documentation ](#) • [ 📊 System Architecture ](#)**

</div>

---

## 💡 Inspiration: Protecting the Vulnerable Micro-Entrepreneur
The standard narrative treats gig workers as a monolith. In reality, our user is a highly vulnerable, cash-dependent micro-entrepreneur. A Tier-1 delivery partner earns approximately ₹3500–₹6000 weekly, heavily reliant on peak "surge" windows (like the Dinner Rush).

When disruptions—heavy rainfall, localized floods, or extreme heat—occur, delivery services halt. The worker doesn't just lose an hour of work; they lose the critical surge window that pays their rent. We realized traditional insurance is fundamentally broken for this demographic. It requires high upfront costs, lengthy paperwork, and manual adjusters. A worker who loses their Tuesday night earnings needs money to buy groceries *tonight*, not next month. We were inspired to build a zero-friction, instantaneous safety net.

---

## 🚀 What it does: The B2B2C Pivot
A standalone direct-to-consumer (B2C) insurance app fails in this demographic due to massive customer acquisition costs, GPS spoofing, and restricted access to verified income data.

**GuardianGrid abandons the B2C app model.** We are a **B2B2C API ecosystem** designed to be embedded directly into aggregator apps (Zomato, Swiggy, Zepto).
1. **100% Data Integrity:** The aggregator securely feeds us the worker's verified hourly earnings and live GPS zone.
2. **Zero-Touch Execution:** We continuously poll external environmental APIs (like the IMD). If a zone floods, we trigger the payout automatically.
3. **No Claim Filing:** Payouts are pushed instantly to the worker's digital wallet via UPI.

---

## 🧠 How we built it: Enterprise Architecture & AI
Handling automated financial transactions alongside high-velocity environmental data required a strict, enterprise-grade architecture.

* **Core Financial Engine (`Java Spring Boot`):** The central orchestrator. Calculates weekly micro-premiums, maintains state, and executes B2B UPI webhooks without race conditions.
* **Dual-Database Strategy:** * `PostgreSQL`: The ACID-compliant immutable ledger for active policies and strict financial histories.
    * `MongoDB`: The NoSQL velocity sink handling thousands of external environmental API pings without blocking the main ledger.
* **The AI Engine (`Python / FastAPI`):** Rather than draining worker batteries with continuous GPS telemetry, we engineered a **Battery-Safe Spatial Anomaly Engine**. We verify coordinates only *at the millisecond* a claim is triggered. To prevent multi-homing fraud (claiming a rain-out on one app while delivering for another), we utilize India's Account Aggregator (AA) framework to run lightweight, retrospective audits on bank deposits over a 30-day lifecycle. 

*Note: AI model training and rapid local inference prototyping were accelerated utilizing a dedicated NVIDIA RTX 3050 (6GB VRAM) pipeline prior to cloud deployment.*

---

## ⚠️ Challenges we ran into
**The Actuarial Ruin vs. Worker Insult Dilemma:** Initially, we attempted to calculate payouts on a "pro-rata minute" basis. If a worker makes ₹60/hour and is rained out for 90 minutes, paying them a 70% pro-rata claim yields a mathematically sound but insulting ₹63. Conversely, paying a flat 70% of their *entire week's* income for a 2-hour storm would bankrupt our startup instantly. We needed a mathematical middle ground.

---

## 🏆 Accomplishments that we're proud of
We solved the actuarial math problem by abandoning minute-by-minute calculations in favor of **Shift Block Guarantees**. 

If a weather API confirms a disruption lasting past a critical threshold during a surge window, the system triggers a flat lump-sum payout. Let $t_{disruption}$ be the duration of the severe weather event in minutes. Our instant payout function is defined as:

$$Payout = \begin{cases} \text{₹}400, & \text{if } t_{disruption} \ge 45 \text{ min} \\ \text{₹}0, & \text{if } t_{disruption} < 45 \text{ min} \end{cases}$$

This provides meaningful, instant relief to the worker while dynamically balancing the startup's risk pool.

---

## 📚 What we learned
We learned the massive architectural difference between building a standard CRUD application and building a resilient, asynchronous event-driven financial system. Ensuring that our Spring Boot backend could safely parse a "Severe Weather Alert" from our Python AI, verify the aggregator's rider list, and trigger a mock payment gateway—all while maintaining strict ACID compliance—deepened our understanding of enterprise backend design. 

---

## 🔮 What's next for GuardianGrid
1. **Closing the Sensor Gap (Basis Risk):** Government weather APIs often measure data at airports, kilometers away from flooded streets. Next, we will integrate **Traffic Gridlock Data** into our AI mesh. If the weather API says "Rain" AND the traffic API shows average zone speeds dropping below 5 km/h, the AI confirms the disruption is hyper-local.
2. **Generative AI Notifications:** Integrating lightweight LLMs to instantly translate payout alerts into the worker's regional language via WhatsApp (e.g., *"Vanakkam, Zone 4 is flooded. ₹400 deposited for your lost shift."*).

---

## 💻 Developer Quickstart

<details>
<summary><b>Click to expand local installation instructions</b></summary>

*Prerequisites: Docker, Docker Compose, JDK 17+, Python 3.10+, Node.js 18+.*

```bash
# 1. Clone the repository
git clone [https://github.com/Shana-dude/GuideWire_DevTrails_26.git](https://github.com/Shana-dude/GuideWire_DevTrails_26.git)
cd GuideWire_DevTrails_26

# 2. Spin up the databases (PostgreSQL & MongoDB)
docker-compose up -d

# 3. Start the Python AI Risk Engine
cd ai-engine
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

# 4. Start the Spring Boot Financial Engine
cd backend
./mvnw spring-boot:run
