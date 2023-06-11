# Lotus
BeEF But Node, Unsecure, and Simple

## What is Lotus
- Lotus is similar to [BeEF](https://beefproject.com/)
- It remotely executes JS code to any user connected to the site

## Feautures
- JS Code Execution
- [WIP] HTML Element Injection
- [WIP] CSS Style Injection
- [WIP] Sessions
- [WIP] Better UI for the Admin and User page
- [WIP] Better Security
- [WIP] Easier Configuartion
- [WIP] Authentication
- [WIP] Payloads

## Installation
```bash
$ git clone https://github.com/scaratek/lotus
$ cd lotus
$ npm install 
$ npm start
```

## Configuration
- Defualt Port is 3000
  - `const port = 3000;` & `const server = http.createServer(app).listen(3000, '0.0.0.0');`
- Public Site is public/index.html
  - `app.use(express.static('public'));`
- Admin Site is admin/index.html
  - `app.use('/admin', express.static('admin'));`
