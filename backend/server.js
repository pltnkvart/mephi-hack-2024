import express from 'express';
import cors from 'cors';
import { MOCK_USERS } from './mocks/users.js';
import { RATING } from './mocks/rating.js';
import { MOCK_PRIVILEGES, MOCK_STORE } from './mocks/store.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/users', (req, res) => {
    return res.json(MOCK_USERS);
});

app.get('/api/users/:userId', (req, res) => {
    const { userId } = req.params;
    
    const user = MOCK_USERS.find((user) => user.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
});

app.get('/api/rating/:userId', (req, res) => {
    const { userId } = req.params;
    
    const user_rating = RATING.find((user) => user.id === userId);

    if (!user_rating) {
        return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user_rating);
});

app.get('/api/store', (req, res) => {
    return res.json(MOCK_STORE);
});

app.get('/api/privileges', (req, res) => {
    return res.json(MOCK_PRIVILEGES);
});

app.post('/api/store/buy', (req, res) => {
    const { userId, itemId } = req.body;

    const user = MOCK_USERS.find((user) => user.id === userId);
    const item = MOCK_STORE.find((item) => item.id === itemId) || MOCK_PRIVILEGES.find((item) => item.id === itemId);

    if (!user || !item) {
        return res.status(404).json({ message: 'User or item not found' });
    }

    if(item.quantity <=0 ){
        return res.status(404).json({ message: 'Not enough quantity' });
    }

    if (user.balance < item.price) {
        return res.status(400).json({ message: 'Not enough balance' });
    }

    user.balance -= item.price;
    item.quantity -= 1;

    return res.json({
        user,
        item
    });
});


app.listen(3000, () => console.log('Example app listening on port 3000'));


