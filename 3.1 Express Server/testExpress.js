import express, { json } from "express";
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

let items = [];

// 1. GET: Retrieve all items
app.get('/items', (req, res) => {
  res.json(items);
});

// 2. POST: Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem); // Respond with the created item
});

// 3. PUT: Update an item by index
app.put('/items/:index', (req, res) => {
  const index = req.params.index;
  const updatedItem = req.body;
  console.log("update in put\n",updatedItem);
  if (items[index]) {
    items[index] = updatedItem;
    res.json(updatedItem); // Respond with the updated item
  } else {
    res.status(404).send('Item not found');
  }
});

// 4. PATCH: Partially update an item by index
app.patch('/items/:index', (req, res) => {
  const index = req.params.index;
  const updates = req.body;
  console.log("update in patch\n",updates);

  if (items[index]) {
    items[index] = { ...items[index], ...updates }; // Merge updates
    res.json(items[index]); // Respond with the updated item
  } else {
    res.status(404).send('Item not found');
  }
});

// 5. DELETE: Remove an item by index
app.delete('/items/:index', (req, res) => {
  const index = req.params.index;

  if (items[index]) {
    const deletedItem = items.splice(index, 1); // Remove item
    res.json(deletedItem[0]); // Respond with the deleted item
  } else {
    res.status(404).send('Item not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
