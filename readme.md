# Qlick-Sense UI Scraper 🤖

The purpose of this scraper is to get all KPI's from QlickSense dashboard in json format. 

## Usage

Inputs: 
url: expected qlicksense UI url 

### Case - 1 (when user want response in JSON format)


Sample Input 
```bash
curl --request GET   --url 'http://localhost:3000/qlicksense'
sh runQlickSense.sh
```

Sample Output
```json
{
    "kpi1":"value1",
    "kpi2":"value2",
    "kpi3":"value3",
    "kpi4":"value4"
}
```


## Steps to Setup

### Tech Stack Setup

Install NodeJs, NPM or PM2

### Project Setup

1. Install dependencies

```bash
npm install
```

2. Run Server

```bash
pm2 start server.js --name 'Scraper'
```

```bash
npm start
```

### Docker Setup

1. Build
```bash
docker build -t scarper .
```

2. Run/Start
```bash
docker run -p 3000:3000 scraper
```

You can browse the apis at <http://localhost:3000>

## Contributors
 - Hariom Vashisth
