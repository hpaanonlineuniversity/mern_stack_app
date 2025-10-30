docker compose up -d --build



# user signup , signin , github login Example


ဒီ project သည် full stack web application တစ်ခုဖြစ်ပြီး Docker container များဖြင့် ဖွဲ့စည်းထားပါသည်။

## 🚀 Application Structure
├── 📁 api/ - Backend API Server
├── 📁 client/ - Frontend Application
└── 🐳 docker-compose.yml - Docker Configuration


### လိုအပ်သော Software များ
- Docker


၁။ **Repository clone လုပ်ပါ**

git clone https://github.com/hpaanonlineuniversity/mern_stack_app.git
cd <project-folder>



၂။ Environment variables ဖိုင်ဖန်တီးပါ

bash
cp .env.example .env


၃။ Environment variables များကိုဖြည့်ပါ
.env ဖိုင်ထဲတွင် အောက်ပါ variables များကိုဖြည့်ပါ


MONGO_DBNAME=your_database_name

MONGO_HOST=mongodb

MONGO_PORT=27017

MONGO_USER=your_username

MONGO_PASSWORD=your_password

JWT_SECRET=your_jwt_secret

VITE_SUPABASE_URL=your_supabase_url

VITE_SUPABASE_KEY=your_supabase_key



၄။ Application ကို run ပါ


docker compose up --build
🌐 Services and Ports
Application ကို run ပြီးပါက အောက်ပါ services များ အလုပ်လုပ်နေပါမည်:

🔧 Backend API
Port: 3000

URL: http://localhost:3000

Features: REST API endpoints, JWT authentication

🗄️ MongoDB Database
Port: 27017 (internal)

Database: MongoDB with authentication

Admin User: admin/password

🎨 Frontend Application
Port: 5173

URL: http://localhost:5173

Features: Modern web interface with Vite

🛠️ Development Commands
Application start လုပ်ရန်

docker compose up

Background တွင် run ရန်

docker compose up -d

Application stop လုပ်ရန်

docker compose down
Data များဖျက်ပြီး restart လုပ်ရန်

docker compose down -v
docker compose up --build


📦 Docker Services
Backend Service
Node.js environment

Hot reload enabled

MongoDB connection

JWT authentication

MongoDB Service
MongoDB version: noble

Persistent data storage

Secure authentication

Frontend Service
Vite development server

Hot module replacement

Supabase integration

🔒 Environment Security
.env ဖိုင်ကို မျှဝေခြင်းမပြုရန် သတိပြုပါ။ လုံခြုံရေးအတွက် sensitive information များကို သီးသန့်ထားရှိပါ။

လက်ရှိမှာ စမ်းသပ်မှုအတွက် .env ဖိုင်ကို ရည်ရွယ်ချက်ရှိရှိ ထုတ်ပြထားတာဖြစ်ပါတယ်။ နောင်တစ်ချိန်မှာ ဖျက်ပစ်နိုင်ပါတယ်။

