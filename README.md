# SupplyGenie

# 🌍 Waste to Reward System

An incentive-based waste management system that rewards users with Goodman Points for responsible waste disposal. This project combines AI, machine learning, and cloud technologies to create a scalable, sustainable solution for waste management.

---

## 🚀 **Problem Statement**
Traditional waste management struggles with:
- ❌ Improper waste segregation (plastic, organic, glass)  
- ❌ Low recycling rates leading to overflowing landfills  
- ❌ Lack of motivation among citizens for responsible waste disposal  

### ✅ **Solution**
Inspired by Germany’s Pfand System, this project introduces an incentive-based waste management system:
- ✅ Users earn Goodman Points based on waste type and quantity  
- ✅ Points are redeemable for government services, goods, and clothing  
- ✅ AI-powered waste classification using TensorFlow and OpenCV  
- ✅ Cloud-based deployment for scalability and automation  

---

## 🏆 **Key Features**
✅ Smart Waste Classification (Plastic, Organic, Glass)  
✅ AI-based recognition using TensorFlow and OpenCV  
✅ Incentive-based system with Goodman Points  
✅ Scalable Backend with FastAPI and Node.js  
✅ Secure OAuth-based login  
✅ Deployed on Google Cloud with Docker & Kubernetes  

---

## 🛠️ **Technologies Used**
| Layer | Technology |
|-------|------------|
| **Frontend** | HTML, CSS, JavaScript, React.js |
| **Backend** | Node.js, FastAPI |
| **AI/ML** | TensorFlow, OpenCV |
| **Database** | PostgreSQL (Structured), MongoDB (Unstructured) |
| **Cloud** | Google Cloud, Docker, Kubernetes |
| **Security** | OAuth login & encryption |
| **Hardware** | Microcontroller, Ultrasonic Sensors |

---

## 🏗️ **Project Structure**
```
waste-to-reward/
├── backend/
│   ├── fastapi-app/
│   │   ├── main.py
│   │   └── requirements.txt
│   ├── node-app/
│       ├── app.js
│       ├── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.js
├── Dockerfile
├── docker-compose.yml
├── README.md
└── .env
```

---

## 🚀 **Installation & Setup**
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/your-username/waste-to-reward.git
cd waste-to-reward
```

---

### 2️⃣ **Backend Setup**
#### 👉 **FastAPI (AI + Points Calculation)**
```bash
cd backend/fastapi-app
pip install -r requirements.txt
uvicorn main:app --reload
```

#### 👉 **Node.js (Auth + User Handling)**
```bash
cd backend/node-app
npm install
npm start
```

---

### 3️⃣ **Frontend Setup**
```bash
cd frontend
npm install
npm start
```

---

### 4️⃣ **Docker Setup**
```bash
docker-compose up --build
```

---

### 5️⃣ **Environment Variables**
Create a `.env` file in the root directory:
```bash
# Backend
PORT=5000
DB_URL=postgresql://username:password@localhost:5432/waste_management
MONGO_URL=mongodb://localhost:27017/waste_db

# OAuth (Google Example)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

---

## 🌐 **API Endpoints**
### ➡️ FastAPI Endpoints (Port: `8000`)
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/classify/` | POST | Classify waste type and calculate points |

### ➡️ Node.js Endpoints (Port: `5000`)
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/status` | GET | Check backend status |
| `/auth/google` | GET | Google OAuth login |
| `/auth/google/callback` | GET | Google OAuth callback |

---

## 🔒 **Security**
✅ OAuth-based login with Google  
✅ Data encryption using HTTPS  

---

## 📸 **UI Preview**
### 🏡 **Homepage**
![Homepage](./screenshots/homepage.png)

### 🚀 **AI Assistant**
![AI Assistant](./screenshots/ai-assistant.png)

---

## 💡 **Future Scope**
- 🌱 Add more waste categories (e-waste, metals)  
- 🌍 Expand to support multiple languages  
- 📊 Implement a dashboard for waste tracking  

---

## 👨‍💻 **Contributors**
- [Mahak Sharma](https://github.com/Mahak-Sharma)  
- [5 Others](https://github.com/)  

---

## ⭐ **If you like this project, give it a star!**  
```
⭐ git add .
⭐ git commit -m "Initial commit"
⭐ git push origin main
```

---

## 📃 **License**
[MIT](LICENSE)

