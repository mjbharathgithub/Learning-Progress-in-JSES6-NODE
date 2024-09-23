import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// Third-party middleware to log HTTP requests
app.use(morgan('dev'));
app.use(cors());

// app.use(cors({
//   origin: 'https://example.com', // Allow requests from this domain
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Authorization', 'Content-Type']
// }));

app.use(helmet());
// app.use(helmet({
//   contentSecurityPolicy: {
//     directives: {
//       defaultSrc: ['\'self\'']
//     }
//   }
// }));


app.get('/data', (req, res) => {
  res.json({ message: 'CORS is enabled!' });
});

app.get('/', (req, res) => {
  res.send('Hello, Morgan logger is active!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
